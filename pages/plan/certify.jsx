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

// 글로벌 상태관리
import { useRecoilState } from "recoil";
import { certifyLockerState } from "../../states/certify_locker";
import moment from "moment";

export default function Certify(props) {
    const auth = getAuth();
    const router = useRouter();

    const [load, setLoad] = useState(false);
    const [plan, setPlan] = useState(null);
    const [lockers, setLockers] = useRecoilState(certifyLockerState);

    const getItem = async () => {
        const _result = await network.get(`/plan/${props.query.planUid}`);
        setPlan(_result.data);
    }

    useEffect(async () => {
        if (!auth.currentUser) {
            auth.onAuthStateChanged(async (_user) => {
                if (_user) {
                    await getItem();
                    setLoad(true);
                } else {
                    router.push('/');
                }
            });
        } else {
            await getItem();
            setLoad(true);
        }
    }, [router]);

    return (load) ?
        <>
            <PlanCertify plan={plan} lockers={lockers} />
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