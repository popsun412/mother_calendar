/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import SignIn1 from "../components/signup/sign_in_1";
import SignIn2 from "../components/signup/sign_in_2";
import SignIn3 from "../components/signup/sign_in_3";
import moment from "moment";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";

export default function Logo() {
    const auth = getAuth();
    const router = useRouter();

    const [signupInfo, setSignupInfo] = useState({
        nickName: "",
        sex: "",
        tel1: "010",
        tel2: "",
        tel3: "",
        zonecode: "",
        address: "",
        detailAddress: "",
        interest: null,
        babys: [
            { birth: null, sex: null }
        ],
        email: "",
        password: "",
        region: null,
    });

    const [step, setStep] = useState(1);

    useEffect(() => {
        auth.onAuthStateChanged(async (_user) => {
            if (_user) {
                if (_user.emailVerified) router.push('/calendar');
                if (!_user.emailVerified) router.push('/emailauth');
            }
        });
    }, [])

    return (<>
        {(step == 1) ? <SignIn1 signupInfo={signupInfo} setSignupInfo={setSignupInfo} step={step} setStep={setStep} /> : <></>}
        {(step == 2) ? <SignIn2 signupInfo={signupInfo} setSignupInfo={setSignupInfo} step={step} setStep={setStep} /> : <></>}
        {(step == 3) ? <SignIn3 signupInfo={signupInfo} setSignupInfo={setSignupInfo} step={step} setStep={setStep} /> : <></>}
    </>)
}