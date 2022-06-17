/* eslint-disable react-hooks/exhaustive-deps */
import { getAuth, sendEmailVerification } from "firebase/auth";
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';
import CircleLoadingOpacity from "../components/common/circle_loading_opacity";

export default function EmailAuth() {
    const router = useRouter();
    const [sending, setSending] = useState(false);
    const [load, setLoad] = useState(false);

    const auth = getAuth();
    const loginCheck = () => {
        if (!auth.currentUser) return router.push('/');
        setLoad(true);
    }

    useEffect(() => {
        loginCheck();
    }, [])

    return (load) ? <>
        <div className="flex flex-col w-screen h-screen overflow-y-auto">
            <div className="h-12 py-0.5 relative flex justify-center items-center">
                <p className="text-center text-sm font-medium">이메일 인증</p>
            </div>
            <div className="mx-12 my-14">
                <pre className="max-w-full whitespace-pre-wrap break-all" style={{ fontFamily: "Bazzi" }}>{`${auth.currentUser?.email ?? ""}로 이메일이 발송되었습니다.`}</pre>
                <pre className="max-w-full whitespace-pre-wrap break-all mb-4" style={{ fontFamily: "Bazzi" }}>이메일 내 링크를 클릭해 이메일 인증 후 가입 완료해주세요.</pre>
                <p className="text-sm">이메일을 수신하지 못했다면 스팸함 또는 해당 이메일 서비스의 설정을 확인해주세요.</p>
            </div>
            <div
                className="bg5 rounded h-12 mx-5 mb-2 flex justify-center items-center text-white text-sm font-semibold hover:cursor-pointer"
                onClick={async () => {
                    if (sending) return;
                    setSending(true);
                    sendEmailVerification(auth.currentUser)
                        .then((value) => {
                            alert("이메일이 발송되었습니다.");
                        })
                        .catch((error) => {
                            alert("알 수 없는 에러\n잠시후 다시 시도해주세요.")
                        })
                        .finally((value) => {
                            setSending(false);
                        });

                }}
            >
                <span>이메일 재발송</span>
            </div>
            <div
                className="border-orange4 border rounded h-12 mx-5 mb-6 flex justify-center items-center text-sm font-semibold hover:cursor-pointer"
                onClick={async () => {
                    await auth.currentUser.reload();

                    if (auth.currentUser.emailVerified) {
                        router.push('/calendar');
                    } else {
                        await auth.signOut();
                        router.push("/");
                    }
                }}
            >
                <span className="textOrange5">로그인</span>
            </div>
        </div>
        {(sending) ? <CircleLoadingOpacity /> : <></>}
    </> : <></>
}