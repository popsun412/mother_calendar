/* eslint-disable react-hooks/exhaustive-deps */
import PlaneDetail from "../../components/plan/plan_detail";
import CircleLoading from "../../components/common/circle_loading";

// react, next
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router"

// firebase
import { getAuth } from "firebase/auth";

// api호출
import network from "../../util/network";

export default function PlanIndex() {
    const auth = getAuth();
    const router = useRouter();

    // 글로벌 상태관리
    const [userInfo, setUserInfo] = useState(null);

    // 로그인 확인
    const [load, setLoad] = useState(false);

    // 화면 상태관리
    const [plan, setPlan] = useState(null);

    // 유저 정보 갖고오기
    const getUser = async () => {
        const _result = await network.post('/userInfo');

        // data 통신
        if (_result.status == 200) {
            setUserInfo(_result.data);
        } else {
            router.push('/');
        }
    }

    const getItem = async () => {
        if (!router.query.planUid) return;
        const _result = await network.get(`/plan/${router.query.planUid}`);
        setPlan(_result.data);
        setLoad(true);
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (_user) => {
            if (_user) {
                await getUser();
                await getItem();
            } else {
                setUserInfo(null);
                router.push('/');
            }
        });
    }, [router]);

    return (load) ?
        <div className="">
            <PlaneDetail plan={plan} />
        </div>
        : <div className="h-screen w-screen">
            <CircleLoading />
        </div>
}