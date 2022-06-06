/* eslint-disable react-hooks/exhaustive-deps */
import CalendarFullPlan from "../../components/calendar/calendar_full_plan";

// react, next
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import CircleLoading from "../../components/common/circle_loading";

import network from "../../util/network";

// firebase
import { getAuth } from "firebase/auth";

export default function MyPlanList() {
    const auth = getAuth();

    // 화면 상태관리
    const [items, setItems] = useState([]);

    // 로그인 확인
    const [load, setLoad] = useState(false);

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

    // 데이터 갖고오기
    const getItem = async () => {
        const _result = await network.get('/plans');
        setItems(_result.data);
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (_user) => {
            if (_user) {
                await getItem();
                setLoad(true);
            } else {
                // setUserInfo(null);
                router.push('/');
            }
        });
    }, []);

    return <>
        {(load) ?
            <div className="w-screen h-screen flex flex-col">
                <CalendarFullPlan items={items} />
            </div>
            : <div className="h-screen w-screen"><CircleLoading /></div>
        }
    </>
}