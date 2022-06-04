/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Box, Checkbox, Drawer } from '@material-ui/core';
import { GlobalStyles } from '@mui/material';
import { getAuth } from "firebase/auth";
import network from "../../util/network";
import { useRouter } from 'next/router';
import Switch from 'react-ios-switch';
import CircleLoading from "../../components/common/circle_loading";

const Account = () => {
    const auth = getAuth();
    const router = useRouter();

    // 글로벌 상태관리
    const [userInfo, setUserInfo] = useState(null);

    // 로그인 확인
    const [load, setLoad] = useState(false);

    const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(true);
    const [checked3, setChecked3] = useState(true);

    const handleChange = (e) => {
        if (e.target.value === '1') {
            setChecked1(e.target.checked);
            setChecked2(e.target.checked);
            setChecked3(e.target.checked);
        } else {
            e.target.value === '2' ? setChecked2(e.target.checked) : setChecked3(e.target.checked);
        }
    }

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

    const changeShare = async () => {
        const updateShare = !(userInfo?.isShare ?? false);

        network.put("/userInfo/isShare", { isShare: !(userInfo?.isShare ?? false) });
        setUserInfo({ ...userInfo, isShare: updateShare });
        setBottomSheetOpen(false);
    }

    useEffect(() => {
        checked2 && checked3 ?
            setChecked1(true) : '';

        auth.onAuthStateChanged(async (_user) => {
            if (_user) {
                await getUser();
                setLoad(true);
            } else {
                router.push('/');
            }
        });
    }, [])

    const list = (anchor) => (
        <Box
            role="presentation"
            onKeyDown={(e) => setBottomSheetOpen(false)}
        >
            <GlobalStyles
                styles={{
                    '.MuiPaper-root': {
                        borderRadius: '15px 15px 0 0'
                    }
                }}
            />
            <div className='mx-5 my-6'>
                <div className='flex justify-end'>
                    <img src='/images/ic_close.png' className='text-right text-xs mb-6 w-6' onClick={() => setBottomSheetOpen(false)} />
                </div>

                {(userInfo?.isShare ?? false)
                    ? <div>
                        <div className='text-base mb-5'>캘린더 비공개 전환하시겠어요?</div>
                        <div className='text-sm textGray4 mb-8'>본인만 회원님의 캘린더 및 보관함을 볼 수 있습니다. 회원님을 즐겨찾기한 다른 회원님도 볼 수 없습니다.</div>
                        <div className='w-full h-12 bg5 leading-12 text-center text-white rounded-md' onClick={changeShare}>캘린더 비공개로 전환</div>
                    </div>
                    : <div>
                        <div className='text-base mb-5'>캘린더 공개 전환하시겠어요?</div>
                        <div className='text-sm textGray4 mb-8'>누구나 회원님의 캘린더 및 보관함을 볼 수 있습니다.</div>
                        <div className='w-full h-12 bg5 leading-12 text-center text-white rounded-md' onClick={changeShare}>캘린더 공개로 전환</div>
                    </div>

                }

            </div>
        </Box>
    );

    return (load)
        ? <div>
            <header className='sticky top-0 left-0 bottom-0 visible opacity-100 bg-white z-100' style={{ marginBottom: '-50px' }}>
                <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white border-b border-solid' style={{ height: '50px' }}>
                    <div className='flex-1 flex items-center'>
                        <div>
                            <img src='/images/ic_back.png' onClick={() => { window.history.back() }} />
                        </div>
                        <div className='my-0 mx-auto text-base' style={{ letterSpacing: '-0.3px' }}>계정 관리</div>
                    </div>
                </div>
            </header>
            <main style={{ marginTop: '50px' }}>
                <section className='pt-6'>
                    <div className='flex mx-5 mb-4 justify-between' style={{ height: '50px' }}>
                        <div style={{ fontSize: '15px', lineHeight: '50px' }}>이메일</div>
                        <div className='text-sm textGray2' style={{ lineHeight: '50px' }}>{auth.currentUser?.email ?? ""}</div>
                    </div>
                    <div className='flex mx-5 my-4 justify-between' style={{ height: '50px' }}>
                        <div style={{ fontSize: '15px', lineHeight: '50px' }}>비밀번호</div>
                        <div className='text-sm textOrange5' style={{ lineHeight: '50px' }} onClick={() => router.push('/resendpw')}>변경하기</div>
                    </div>
                    <div className='flex items-center mx-5 my-4 justify-between' style={{ height: '50px' }}>
                        <div style={{ fontSize: '15px', lineHeight: '50px' }}>캘린더 공개</div>
                        <Switch
                            checked={userInfo?.isShare ?? false}
                            onChange={(e) => setBottomSheetOpen(true)}
                            offColor="#e0e0e0"
                            onColor="#3C81E1"
                        />
                    </div>
                    <div className='mx-5 my-4 justify-between'>
                        <div style={{ fontSize: '15px', lineHeight: '50px' }}>마케팅 정보 수신 동의</div>
                        <div>
                            <Checkbox
                                value={1}
                                checked={checked1}
                                onChange={handleChange}
                                style={{ color: '#FF6035' }}
                            />
                            <span className='textGray3 text-xs font-medium'>마케팅 정보 수신에 동의합니다.</span>
                        </div>
                        <div className='ml-9' style={{ marginTop: '-10px' }}>
                            <Checkbox value={2} checked={checked2} onChange={handleChange} style={{ color: '#FF6035' }} /><span className='textGray3 text-xs font-medium'>이메일</span>
                            <Checkbox value={3} checked={checked3} onChange={handleChange} style={{ color: '#FF6035' }} /><span className='textGray3 text-xs font-medium'>SMS</span>
                        </div>
                    </div>
                    <div className='flex absolute bottom-0 w-full items-center justify-evenly text-sm textGray4' style={{ height: '70px' }}>
                        <div onClick={() => auth.signOut()}>로그아웃</div>
                        <div>|</div>
                        <div>회원탈퇴</div>
                    </div>
                    <Drawer
                        anchor='bottom'
                        open={bottomSheetOpen}
                        onClose={() => setBottomSheetOpen(false)}
                    >
                        {list('bottom')}
                    </Drawer>
                </section>
            </main>
        </div>
        : <div className="h-screen w-screen"><CircleLoading /></div>
}

export default Account;