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

export default function CertifyEdit(props) {
    const auth = getAuth();
    const router = useRouter();

    const [load, setLoad] = useState(false);
    const [item, setItem] = useState(null);
    const [lockers, setLockers] = useRecoilState(certifyLockerState);

    const getItem = async () => {
        const _result = await network.get(`/auth/${props.query.planAuthUid}`);
        setItem(_result.data);
        if (lockers == null || lockers.length == 0) setLockers(_result.data.lockers);
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (_user) => {
            if (_user) {
                await getItem();
                setLoad(true);
            } else {
                router.push('/');
            }
        });
    }, []);

    return (load) ?
        <>
            <PlanCertify plan={item.plan} lockers={lockers} item={item} />
        </>
        : <div className="h-screen w-screen">
            <CircleLoading />
        </div>
}

CertifyEdit.getInitialProps = async (ctx) => {
    return {
        query: ctx.query
    }
}