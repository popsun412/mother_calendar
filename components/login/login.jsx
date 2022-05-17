/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getCookie, setCookies } from 'cookies-next';

import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
    const auth = getAuth();
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        // 파이어베이스 로그인 시도
        signInWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
            if (userCredential.user.emailVerified) {
                router.push('/calendar');
            } else {
                // 이메일 인증 필요
                console.log("ddd");
            }
        }).catch(async (error) => {
            console.log(error);
        })
    }

    return (
        <>
            <div className="px-4 h-screen">
                <div className="w-full mt-16 mb-4">
                    <img src="/images/img-login-bg.png" className=" h-60" />
                </div>

                <div className="px-6">
                    <forms>
                        <div className="px-4 py-4 rounded-md bg-gray2">
                            <input
                                type="text"
                                className="w-full bg-gray2 text-sm font-normal textGray1 outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.currentTarget.value)}
                            />
                        </div>
                        <div className="text-xs font-normal text-[#eb5757] py-3">입력한 회원 정보를 다시 확인해주세요.</div>
                        <div className="flex items-center justify-center rounded-md bg-gray2 px-4 py-4">
                            <input
                                type="password"
                                className="w-full bg-gray2 text-sm font-normal textGray1 outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.currentTarget.value)}
                            />
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                    </forms>
                    <div className="text-xs font-normal textGray3 mt-3.5 flex items-center justify-center">비밀번호를 잊으셨나요?</div>
                    <div className="flex flex-col mt-8 space-y-2">
                        <button className="py-4 rounded-md text-sm font-bold text-white bg5" onClick={login}>로그인</button>
                        <button className="py-4 rounded-md text-sm font-bold textOrange5 border border-orange5">회원가입</button>
                    </div>
                </div>
            </div>
        </>
    )
}