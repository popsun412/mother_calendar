/* eslint-disable react-hooks/exhaustive-deps */

// router
import { useRouter } from "next/router";

// react
import { useEffect, useState } from "react";

// loading components
import CircleLoading from "../../components/common/circle_loading";

// util
import network from "../../util/network";

// firebase
import { getAuth } from "firebase/auth";

export default function Congrats() {
    const auth = getAuth();
    const router = useRouter();
    const [load, setLoad] = useState(false);

    // data 갖고오기
    const getItem = async () => {
        const _result = await network.get(`/plan/congrats/${router.query.planUid}`);
        console.log(_result);
    }

    // init
    useEffect(async () => {
        if (router.query && router.query.planUid) {
            auth.onAuthStateChanged(async (_user) => {
                if (_user) {
                    await getItem();
                } else {
                    router.push('/');
                }
            });
        }
    }, [router])

    return load
        ? <></>
        : <div className="h-screen w-screen"><CircleLoading /></div>
}