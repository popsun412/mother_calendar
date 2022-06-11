/* eslint-disable react-hooks/exhaustive-deps */
import CircleLoading from "../../components/common/circle_loading";
import Link from "next/link";

// react, next
import { useState, useEffect } from "react";
import { useRouter } from "next/router"

// firebase
import { getAuth } from "firebase/auth";

// api호출
import network from "../../util/network";

import CertifyCompleteAppbar from "../../components/certify_complete/certify_complete_appbar";
import CertifyCompleteHeader from "../../components/certify_complete/certify_complete_header";
import CertifyCompleteBody from "../../components/certify_complete/certify_complete_body";

import { useRecoilState } from "recoil";
import { certifyLockerState } from "../../states/certify_locker";

export default function CertifyComplete(props) {
    const auth = getAuth();
    const router = useRouter();

    const [load, setLoad] = useState(false);
    const [item, setItem] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [lockers, setLockers] = useRecoilState(certifyLockerState);

    const getItem = async () => {
        const _result = await network.get(`/auth/${props.query.planAuthUid}`);
        setItem(_result.data);
        setUserInfo(_result.data.user);
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
    }, [router]);

    return (load) ?
        <>
            <CertifyCompleteAppbar />
            <CertifyCompleteHeader userInfo={userInfo} auth={item.auth} />
            <CertifyCompleteBody plan={item.plan} lockers={item.lockers} auth={item.auth} />
            {(auth.currentUser.uid == item.auth.userUid) ? <div className="fixed flex items-center justify-center left-0 right-0 bottom-6">
                <span className="px-5 py-3 bg5 text-base text-white font-medium rounded-full" onClick={() => {
                    setLockers([]);
                    router.push(`/certify/edit?planAuthUid=${props.query.planAuthUid}`);
                }}>수정하기</span>
            </div> : <></>}
        </>
        : <div className="h-screen w-screen">
            <CircleLoading />
        </div>
}

CertifyComplete.getInitialProps = async (ctx) => {
    return {
        query: ctx.query
    }
}