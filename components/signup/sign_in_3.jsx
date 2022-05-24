import { useState } from "react";
import SignupHeader from "./sign_up_header";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import network from "../../util/network";
import { useRouter } from "next/router";

export default function SignIn3(props) {
    const router = useRouter();

    const auth = getAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordCheck, setShowPasswordCheck] = useState(false);
    const [checkPassword, setCheckPassword] = useState("");

    const signUp = () => {
        if (!buttonActive()) return;

        if (checkPassword != props.signupInfo.password) {
            return alert("비밀번호를 확인해주세요");
        }

        network.post('/user/signup', props.signupInfo).then((_value) => {
            signInWithEmailAndPassword(auth, props.signupInfo.email, props.signupInfo.password);
            alert("이메일을 확인해주세요");
            router.push('/');
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
        })
    }

    const buttonActive = () => {
        return true;
    }

    return (
        <div className="h-screen relative">
            <SignupHeader step={props.step} setStep={props.setStep} />
            <div className="pt-4 px-5 text-xl font-normal textGray1">
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
                                onChange={(e) => props.setSignupInfo({ ...props.signupInfo, email: e.currentTarget.value })}
                            />
                            <div className="w-5 h-5 rounded-full flex items-center justify-center bg-[#27AE60]  mr-2">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center justify-center border border-color4 rounded px-3">
                            <input
                                type={(showPassword) ? "text" : "password"}
                                className="flex-auto h-14 text-sm font-normal placeholder-[#bbbbbb] outline-none"
                                placeholder="비밀번호 (숫자, 영문 소문자 조합 8~20자 이내)"
                                value={props.signupInfo.password}
                                onChange={(e) => props.setSignupInfo({ ...props.signupInfo, password: e.currentTarget.value })}
                            />

                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                onTouchStart={() => { setShowPassword(true) }}
                                onTouchEnd={() => setShowPassword(false)}
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
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                onTouchStart={() => { setShowPasswordCheck(true) }}
                                onTouchEnd={() => setShowPasswordCheck(false)}
                            >
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </form>
                <div className="absolute bottom-6 left-6 right-6">
                    <div className="mb-14 space-y-4">
                        <div className="flex">
                            <div className="w-5 h-5 rounded-sm border-[1.6px] border-gary3 flex items-center justify-center hover:bg-[#FF6035] hover:border-none mr-2">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <p className="flex items-center justify-center text-xs textGray3">
                                <a href="#" className="textBlue4">서비스 이용약관</a>
                                에 동의합니다.<span className="textOrange5 ml-1">(필수)</span>
                            </p>
                        </div>
                        <div className="flex">
                            <div className="w-5 h-5 rounded-sm border-[1.6px] border-gary3 flex items-center justify-center hover:bg-[#FF6035] hover:border-none mr-2">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <p className="flex items-center justify-center text-xs textGray3">
                                <a href="#" className="textBlue4">개인정보 수집, 이용</a>
                                에 동의합니다.<span className="textOrange5 ml-1">(필수)</span>
                            </p>
                        </div>
                        <div className="flex">
                            <div className="w-5 h-5 rounded-sm border-[1.6px] border-gary3 flex items-center justify-center hover:bg-[#FF6035] hover:border-none mr-2">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <p className="flex items-center justify-center text-xs textGray3">
                                마케팅 정보 수신에 동의합니다.<span className="textOrange5 ml-1">(선택)</span>
                            </p>
                        </div>
                        <div className="flex space-x-5 ml-9">
                            <div className="flex">
                                <div className="w-[1.125rem] h-[1.125rem] rounded-sm border-[1.6px] border-gary3 flex items-center justify-center hover:bg-[#FF6035] hover:border-none mr-2">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p className="flex items-center justify-center text-xs textGray3">
                                    이메일
                                </p>
                            </div>
                            <div className="flex">
                                <div className="w-[1.125rem] h-[1.125rem] rounded-sm border-[1.6px] border-gary3 flex items-center justify-center hover:bg-[#FF6035] hover:border-none mr-2">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p className="flex items-center justify-center text-xs textGray3">
                                    SMS
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray3 rounded-md">
                            <button className={`w-full py-4 text-sm font-semibold text-white ${buttonActive() ? "bg-[#FF6035]" : ""}`} onClick={signUp}>다음</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}