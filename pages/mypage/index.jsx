/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import React from 'react';
import Navigation from '../../components/common/navigation';
import CircleLoading from '../../components/common/circle_loading';

// react, next
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

// firebase
import { getAuth } from "firebase/auth";

// api호출
import network from "../../util/network";
import { profileImageCheck } from "../../util/helper"

const MyPage = () => {
    const auth = getAuth();
    const router = useRouter();

    // 글로벌 상태관리
    const [userInfo, setUserInfo] = useState(null);

    // 로그인 확인
    const [load, setLoad] = useState(false);

    // 유저 정보 갖고오기
    const getUser = async () => {
        const _result = await network.post('/userInfo');

        // data 통신
        if (_result.status == 200) {
            setUserInfo(_result.data);
        } else {
            router.push('/');
        }
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (_user) => {
            if (_user) {
                await getUser();
                setLoad(true);
            } else {
                setUserInfo(null);
                router.push('/');
            }
        });
    }, [router]);

    return (load)
        ? <div className=''>
            <header className='sticky top-0 left-0 right-0 visible opacity-100 bg-white z-100' style={{ marginBottom: '-50px' }}>
                <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white border-solid border-b border-gray4' style={{ height: '50px' }}>
                    <div className='flex-1 flex items-center'>
                        <div className='my-0 mx-auto text-base' style={{ letterSpacing: '-0.3px', fontSize: '15px' }}>내 정보</div>
                    </div>
                </div>
            </header>
            <main style={{ marginTop: '50px', marginBottom: '100px' }}>
                <section>
                    <div className="h-48">
                        <div className='pt-7 mb-4'>
                            <img src={profileImageCheck(userInfo)} className="rounded-full border border-solid border-color4 mx-auto" style={{ height: 75, width: 75 }} />
                        </div>
                        <div className='text-xl text-center mb-1.5' style={{ letterSpacing: '-0.6px' }}>
                            {userInfo.nickName}
                        </div>
                        <div className='text-sm text-center textOrange3'>
                            {auth.currentUser.email}
                        </div>
                    </div>
                </section>
                <section>
                    <Link href='/mypage/runtype' passHref>
                        <div className='flex items-center justify-between border-b border-solid border-gray4 h-15'>
                            <span style={{ marginLeft: '18px', fontSize: '15px' }}>내 실행 유형</span>
                            <span style={{ marginRight: '23px' }}>{'>'}</span>
                        </div>
                    </Link>
                    <Link href='/mypage/myinfo' passHref>
                        <div className='flex items-center justify-between border-b border-solid border-gray4 h-15'>
                            <span style={{ marginLeft: '18px', fontSize: '15px' }}>내 정보 수정</span>
                            <span style={{ marginRight: '23px' }}>{'>'}</span>
                        </div>
                    </Link>
                    <Link href='/mypage/account' passHref>
                        <div className='flex items-center justify-between border-b border-solid border-gray4 h-15'>
                            <span style={{ marginLeft: '18px', fontSize: '15px' }}>계정 관리</span>
                            <span style={{ marginRight: '23px' }}>{'>'}</span>
                        </div>
                    </Link>
                    <Link href='/mypage/' passHref>
                        <div className='flex items-center justify-between border-b border-solid border-gray4 h-15'>
                            <span style={{ marginLeft: '18px', fontSize: '15px' }}>공지사항</span>
                            <span style={{ marginRight: '23px' }}>{'>'}</span>
                        </div>
                    </Link>
                    <div className='flex items-center justify-between border-b border-solid border-gray4 h-15'>
                        <span style={{ marginLeft: '18px', fontSize: '15px' }}>서비스 이용약관</span>
                        <span style={{ marginRight: '23px' }}>{'>'}</span>
                    </div>
                    <div className='flex items-center justify-between border-b border-solid border-gray4 h-15'>
                        <span style={{ marginLeft: '18px', fontSize: '15px' }}>개인정보 처리방침</span>
                        <span style={{ marginRight: '23px' }}>{'>'}</span>
                    </div>
                    <div className='flex items-center justify-between border-b border-solid border-gray4 h-15'>
                        <span style={{ marginLeft: '18px', fontSize: '15px' }}>1:1 문의</span>
                        <span style={{ marginRight: '23px' }}></span>
                    </div>
                    {/* <div className='flex items-center justify-between h-15'>
                        <span style={{ marginLeft: '18px', fontSize: '15px' }}>버전 정보</span>
                        <span className='text-sm textGray4' style={{ marginRight: '23px' }}>1.02 ver</span>
                    </div> */}
                </section>
            </main>
            <Navigation path={'mypage'} />
        </div>
        : <div className="h-screen w-screen"><CircleLoading /></div>
}

export default MyPage;