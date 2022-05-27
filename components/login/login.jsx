/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import CircleLoadingOpacity from "../common/circle_loading_opacity";

const Login = () => {
    const auth = getAuth();
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [loging, setLoging] = useState(false);

    const login = () => {
        if (loging) return;
        setLoging(true);

        // 파이어베이스 로그인 시도
        signInWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
            if (userCredential.user.emailVerified) {
                router.push('/home');
            } else {
                alert("이메일을 확인해주세요");
            }
        }).catch(async (error) => {
            setLoginError(true);
            console.log(error);
        }).finally((value) => {
            setLoging(false);
        })
    }

    return (
        <>
            <div className="px-4 h-screen">
                <div className="w-full pt-16 pb-4 text-center">
                    <img src="/images/img-login-bg.png" className="h-60 mx-auto" />
                </div>

                <div className="px-6">
                    <div className="px-4 py-4 rounded-md bg-gray2">
                        <input
                            type="text"
                            className="w-full bg-gray2 text-sm font-normal textGray1 outline-none"
                            value={email}
                            placeholder={"이메일을 입력해주세요."}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                    </div>
                    <div className="text-xs font-normal text-[#eb5757] py-3">{(loginError) ? "입력한 회원 정보를 다시 확인해주세요." : ""}</div>
                    <div className="flex items-center justify-center rounded-md bg-gray2 px-4 py-4">
                        <input
                            type="password"
                            className="w-full bg-gray2 text-sm font-normal textGray1 outline-none"
                            value={password}
                            placeholder={"비밀번호를 입력해주세요."}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                        />
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <div className="text-xs font-normal textGray3 mt-3.5 flex items-center justify-center">비밀번호를 잊으셨나요?</div>
                    <div className="flex flex-col mt-8 space-y-2">
                        <button className="py-4 rounded-md text-sm font-bold text-white bg5" onClick={login}>로그인</button>
                        <Link href={"/signup"} passHref>
                            <button className="py-4 rounded-md text-sm font-bold textOrange5 border border-orange5">회원가입</button>
                        </Link>
                    </div>
                </div>
            </div>
            {(loging) ? <CircleLoadingOpacity /> : <></>}
        </>
    )
}

export default Login;