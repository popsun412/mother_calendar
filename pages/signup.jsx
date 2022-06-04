import { useState } from "react";
import SignIn1 from "../components/signup/sign_in_1";
import SignIn2 from "../components/signup/sign_in_2";
import SignIn3 from "../components/signup/sign_in_3";
import moment from "moment";
import { useRouter } from "next/router";

export default function Logo() {
    const router = useRouter();

    const [signupInfo, setSignupInfo] = useState({
        nickName: "",
        sex: "",
        tel1: "010",
        tel2: "",
        tel3: "",
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

    return (<>
        {(step == 1) ? <SignIn1 signupInfo={signupInfo} setSignupInfo={setSignupInfo} step={step} setStep={setStep} /> : <></>}
        {(step == 2) ? <SignIn2 signupInfo={signupInfo} setSignupInfo={setSignupInfo} step={step} setStep={setStep} /> : <></>}
        {(step == 3) ? <SignIn3 signupInfo={signupInfo} setSignupInfo={setSignupInfo} step={step} setStep={setStep} /> : <></>}
    </>)
}