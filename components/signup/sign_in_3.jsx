import { useState } from "react";
import SignupHeader from "./sign_up_header";
import { getAuth, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import network from "../../util/network";
import { useRouter } from "next/router";
import CircleLoadingOpacity from "../common/circle_loading_opacity";

export default function SignIn3(props) {
    const router = useRouter();
    const [saving, setSaving] = useState(false);

    const auth = getAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordCheck, setShowPasswordCheck] = useState(false);
    const [checkPassword, setCheckPassword] = useState("");
    const [serviceAgree, setServiceAgree] = useState(false);
    const [privateAgree, setPrivateAgree] = useState(false);
    const [marketingAgree, setMarketingAgree] = useState(false);
    const [emailAgree, setEmailAgree] = useState(false);
    const [smsAgree, setSmsAgree] = useState(false);
    const [postAgree, setPostAgree] = useState(false);

    const signUp = async () => {
        if (!buttonActive()) return;
        setSaving(true);

        if (checkPassword != props.signupInfo.password) {
            return alert("비밀번호를 확인해주세요");
        }

        const _result = await network.post('/user/signup', { ...props.signupInfo, emailAgree, smsAgree, postAgree });

        if (_result.data.status) {
            const _signInValue = await signInWithEmailAndPassword(auth, props.signupInfo.email, props.signupInfo.password);
            await sendEmailVerification(_signInValue.user);
        } else {
            const _errorCode = _result.data.result.code;
            if (_errorCode == "auth/email-already-in-use") {
                alert("이미 가입된 이메일입니다.\n비밀번호 재설정 후 로그인해주세요.");
            } else {
                alert(_errorCode);
            }
        }

        setSaving(false);
    }

    const buttonActive = () => {
        if (!validateEmail()) return false;
        if (props.signupInfo.password.trim().length < 1) return false;
        if (props.signupInfo.password != checkPassword) return false;
        if (!serviceAgree || !privateAgree) return false;
        return true;
    }

    const isAgree = "bg-[#FF6035] border-none";

    const validateEmail = () => {
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (props.signupInfo.email.match(regexEmail)) {
            return true;
        } else {
            return false;
        }
    }

    return <>
        <div className="h-screen w-full flex flex-col overflow-y-auto">
            <SignupHeader step={props.step} setStep={props.setStep} />
            <div className="pt-4 px-5 text-xl font-normal textGray1" style={{ fontFamily: "Bazzi" }}>
                사용하실 이메일과 비밀번호를 입력해주세요.
            </div>
            <div className="pt-6 px-5">
                <form>
                    <div className="space-y-3">
                        <div className="flex items-center justify-center border border-color4 rounded px-3">
                            <input
                                type="text"
                                className="flex-auto h-14 text-sm font-normal placeholder-[#bbbbbb] outline-none"
                                placeholder="이메일을 입력해주세요."
                                value={props.signupInfo.email}
                                onChange={(e) => props.setSignupInfo({ ...props.signupInfo, email: e.currentTarget.value.trim() })}
                            />
                            {validateEmail() ? <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#27AE60] ml-2">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div> : <></>}
                        </div>
                        <div className="flex items-center justify-center border border-color4 rounded px-3">
                            <input
                                type={(showPassword) ? "text" : "password"}
                                className="flex-auto h-14 text-sm font-normal placeholder-[#bbbbbb] outline-none"
                                placeholder="비밀번호"
                                value={props.signupInfo.password}
                                onChange={(e) => props.setSignupInfo({ ...props.signupInfo, password: e.currentTarget.value })}
                            />

                            <svg
                                className="w-6 h-6 textGray4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => { setShowPassword(!showPassword) }}
                            >
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                <path
                                    fillRule="evenodd"
                                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                    clipRule="evenodd">
                                </path>
                            </svg>
                        </div>
                        <div className="flex items-center justify-center border border-color4 rounded px-3">
                            <input
                                type={(showPasswordCheck) ? "text" : "password"}
                                className="flex-auto h-14 text-sm font-normal placeholder-[#bbbbbb] outline-none"
                                placeholder="비밀번호를 한번 더 입력해주세요"
                                value={checkPassword}
                                onChange={(e) => setCheckPassword(e.currentTarget.value)}
                            />
                            <svg
                                className="w-6 h-6 textGray4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => { setShowPasswordCheck(!showPasswordCheck) }}
                            >
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex-auto mb-5" />
            <div className="mx-6 mb-6">
                <div className="mb-14 space-y-4">
                    <div className="flex" onClick={() => setServiceAgree(!serviceAgree)}>
                        <div className={`w-5 h-5 rounded-sm border-[1.6px] border-gary3 flex items-center justify-center mr-2 ${serviceAgree ? isAgree : ""}`}>
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <p className="flex items-center justify-center text-xs textGray3">
                            <a href="#" className="textBlue4 underline" target="_blank" onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();

                                window.open('/useinfo');
                            }}>서비스 이용약관</a>
                            에 동의합니다.<span className="textOrange5 ml-1">(필수)</span>
                        </p>
                    </div>
                    <div className="flex" onClick={() => setPrivateAgree(!privateAgree)}>
                        <div className={`w-5 h-5 rounded-sm border-[1.6px] border-gary3 flex items-center justify-center mr-2 ${privateAgree ? isAgree : ""}`}>
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <p className="flex items-center justify-center text-xs textGray3">
                            <a href="#" className="textBlue4 underline" onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();

                                window.open('/privateinfo');
                            }}>개인정보 취급방침</a>
                            에 동의합니다.<span className="textOrange5 ml-1">(필수)</span>
                        </p>
                    </div>
                    <div className="flex" onClick={() => setMarketingAgree(!marketingAgree)}>
                        <div className={`w-5 h-5 rounded-sm border-[1.6px] border-gary3 flex items-center justify-center mr-2 ${marketingAgree ? isAgree : ""}`}>
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <p className="flex items-center justify-center text-xs textGray3">
                            마케팅 활용에 동의합니다.<span className="textOrange5 ml-1">(선택)</span>
                        </p>
                    </div>
                    <div className="flex" onClick={() => {
                        const check = emailAgree && smsAgree && postAgree;

                        setSmsAgree(!check);
                        setEmailAgree(!check);
                        setPostAgree(!check);
                    }}>
                        <div className={`w-5 h-5 rounded-sm border-[1.6px] border-gary3 flex items-center justify-center mr-2 ${emailAgree && smsAgree && postAgree ? isAgree : ""}`}>
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <p className="flex items-center justify-center text-xs textGray3">
                            광고성 정보 수신에 동의합니다.<span className="textOrange5 ml-1">(선택)</span>
                        </p>
                    </div>
                    <div className="flex space-x-5 ml-9">
                        <div className="flex" onClick={() => setEmailAgree(!emailAgree)}>
                            <div className={`w-[1.125rem] h-[1.125rem] rounded-sm border-[1.6px] border-gary3 flex items-center justify-center mr-2 ${emailAgree ? isAgree : ""}`}>
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <p className="flex items-center justify-center text-xs textGray3">
                                이메일
                            </p>
                        </div>
                        <div className="flex" onClick={() => setSmsAgree(!smsAgree)}>
                            <div className={`w-[1.125rem] h-[1.125rem] rounded-sm border-[1.6px] border-gary3 flex items-center justify-center mr-2 ${smsAgree ? isAgree : ""}`}>
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <p className="flex items-center justify-center text-xs textGray3">
                                SMS
                            </p>
                        </div>
                        <div className="flex" onClick={() => setPostAgree(!postAgree)}>
                            <div className={`w-[1.125rem] h-[1.125rem] rounded-sm border-[1.6px] border-gary3 flex items-center justify-center mr-2 ${postAgree ? isAgree : ""}`}>
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <p className="flex items-center justify-center text-xs textGray3">
                                우편
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray3 rounded-md">
                        <button className={`w-full py-4 text-sm font-semibold text-white ${buttonActive() ? "bg-[#FF6035]" : ""}`} onClick={signUp}>다음</button>
                    </div>
                </div>
            </div>
        </div >
        {(saving) ? <CircleLoadingOpacity /> : <></>}
    </>
}