/* eslint-disable react-hooks/exhaustive-deps */
import { ArrowBackIos } from '@mui/icons-material';
import { useState } from 'react';
import { validateEmail } from "../util/helper";
import { sendPasswordResetEmail, getAuth, sendEmailVerification } from "firebase/auth";
import CircleLoadingOpacity from "../components/common/circle_loading_opacity";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ResendPw() {
    const auth = getAuth();
    const router = useRouter();
    const [email, setEmail] = useState(auth.currentUser?.email ?? "");
    const [sendEmailStatus, setSendEmailStatus] = useState(false);
    const [sending, setSending] = useState(false);

    const sendEmail = async () => {
        if (!validateEmail(email)) return;
        setSending(true);

        await sendPasswordResetEmail(auth, email).then((value) => {
            setSendEmailStatus(true);
        }).catch((error) => {
            alert("입력한 이메일을 다시 확인해주세요.");
        }).finally((value) => {
            setSending(false);
        });
    }

    return <>
        <div className="flex flex-col w-full h-screen overflow-y-auto">
            <div className="h-12 py-0.5 relative flex justify-center items-center">
                {(!sendEmailStatus) ? <div className="absolute left-5" onClick={() => router.back()}><ArrowBackIos /></div> : <></>}
                <p className="text-center font-medium">비밀번호 재설정</p>
            </div>
            {(sendEmailStatus)
                ? <div className="mx-5 my-14">
                    <pre className="max-w-full whitespace-pre-wrap break-all text-xl" style={{ fontFamily: "Bazzi" }}>{email}로 이메일이 발송되었습니다.</pre>
                    <pre className="max-w-full whitespace-pre-wrap break-all mb-4 text-xl" style={{ fontFamily: "Bazzi" }}>이메일 내 링크를 클릭해 비밀번호를 재설정 후 재로그인해주세요.</pre>
                    <p className="text-sm">이메일을 수신하지 못했다면 스팸함 또는 해당 이메일 서비스의 설정을 확인해주세요.</p>
                </div>
                : <div className="mx-5 my-14">
                    <pre className="max-w-full whitespace-pre-wrap break-all mb-4 text-xl text-left" style={{ fontFamily: "Bazzi" }}>가입하신 이메일을 입력해주세요.</pre>
                    <input
                        type='text'
                        value={email}
                        className='border border-solid border-color4 rounded-md text-sm w-full h-11 px-3'
                        placeholder='이메일을 입력해주세요.'
                        disabled={auth.currentUser != null}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                </div>
            }
            {(sendEmailStatus)
                ? <>
                    <div
                        className="bg5 rounded h-12 mx-5 mb-2 flex justify-center items-center text-white text-sm font-semibold hover:cursor-pointer"
                        onClick={async () => {
                            await sendEmail();
                            alert("이메일이 발송되었습니다.");
                        }}
                    >
                        <span>이메일 재발송</span>
                    </div>
                    <div
                        className="border-orange4 border rounded h-12 mx-5 mb-6 flex justify-center items-center text-white text-sm font-semibold hover:cursor-pointer"
                        onClick={async () => {
                            await auth.signOut();
                            router.push("/");
                        }}
                    >
                        <span className="textOrange5">다시 로그인</span>
                    </div>
                </>
                : <div className={`rounded h-12 mx-5 mb-6 flex justify-center items-center text-white text-sm font-semibold hover:cursor-pointer ${validateEmail(email) ? "bg5" : "bg-gray4"}`} onClick={sendEmail}>
                    <span>다음</span>
                </div>}
        </div>
        {(sending) ? <CircleLoadingOpacity /> : <></>}
    </>
}