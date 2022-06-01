/* eslint-disable react-hooks/exhaustive-deps */
import PlanCertify from "../../components/plan/plan_certify";

import CircleLoading from "../../components/common/circle_loading";

// react, next
import { useState, useEffect } from "react";
import { useRouter } from "next/router"

// firebase
import { getAuth } from "firebase/auth";

// api호출
import network from "../../util/network";

export default function Certify(props) {
    const auth = getAuth();
    const router = useRouter();

    const [load, setLoad] = useState(false);
    const [plan, setPlan] = useState(null);

    // 유저 정보 갖고오기
    const getUser = async () => {
        const _result = await network.post('/userInfo');

        // data 통신
        if (_result.status == 200) {
        } else {
            router.push('/');
        }
    }

    const getItem = async () => {
        const _result = await network.get(`/plan/${props.query.planUid}`);
        setPlan(_result.data);
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (_user) => {
            if (_user) {
                await getUser();
                await getItem();
                setLoad(true);
            } else {
                router.push('/');
            }
        });
    }, [router]);

    return (load) ?
        <>
            <PlanCertify plan={plan} />
        </>
        : <div className="h-screen w-screen">
            <CircleLoading />
        </div>
}

Certify.getInitialProps = async (ctx) => {
    return {
        query: ctx.query
    }
}