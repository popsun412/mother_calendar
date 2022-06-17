/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Box, Checkbox, Drawer } from '@material-ui/core';
import { GlobalStyles } from '@mui/material';
import { getAuth, deleteUser } from "firebase/auth";
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
                router.push('/');
            }
        });
    }, [])

    // 유저 수정
    const updateUser = () => {
        network.put(
            '/userInfo/update', {
            isShare: userInfo.isShare,
            marketingAgree: userInfo.marketingAgree,
            emailAgree: userInfo.emailAgree,
            smsAgree: userInfo.smsAgree,
            postAgree: userInfo.postAgree,
        }
        );
        setBottomSheetOpen(false);
    }

    useEffect(() => {
        if (load) updateUser();
    }, [userInfo])

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
                        <div className='text-sm textGray4 mb-8'>회원님만 회원님의 캘린더 및 보관함을 볼 수 있습니다. 회원님을 즐겨찾기한 다른 회원님도 볼 수 없습니다.</div>
                        <div className='w-full h-12 bg5 leading-12 text-center text-white rounded-md' onClick={() => {
                            setUserInfo({ ...userInfo, isShare: false })
                        }}>캘린더 비공개로 전환</div>
                    </div>
                    : <div>
                        <div className='text-base mb-5'>캘린더 공개 전환하시겠어요?</div>
                        <div className='text-sm textGray4 mb-8'>누구나 회원님의 캘린더 및 보관함을 볼 수 있습니다.</div>
                        <div className='w-full h-12 bg5 leading-12 text-center text-white rounded-md' onClick={() => {
                            setUserInfo({ ...userInfo, isShare: true })
                        }}>캘린더 공개로 전환</div>
                    </div>

                }

            </div>
        </Box>
    );

    return (load)
        ? <div>
            <header className='sticky top-0 left-0 bottom-0 visible opacity-100 bg-white z-100' style={{ marginBottom: '-50px' }}>
                <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white border-b border-solid' style={{ height: '50px' }}>
                    <div className='flex-1 flex items-center relative'>
                        <img src='/images/ic_back.png' className="w-10 relative -left-4 flex-shrink-0" onClick={() => { window.history.back(); }} />
                        <div className='absolute left-0 right-0 mx-10 text-center text-base' style={{ letterSpacing: '-0.3px' }}>계정 관리</div>
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
                        <div style={{ fontSize: '15px', lineHeight: '50px' }}>마케팅 활용 및 광고성 정보 수신 동의</div>
                        <div>
                            <Checkbox
                                checked={userInfo.marketingAgree}
                                onChange={() => setUserInfo({ ...userInfo, marketingAgree: !userInfo.marketingAgree })}
                                style={{ color: '#FF6035' }}
                            />
                            <span className='textGray3 text-xs font-medium'>마케팅 활용에 동의합니다. </span>
                        </div>
                        <div>
                            <Checkbox
                                checked={(userInfo.emailAgree && userInfo.smsAgree && userInfo.postAgree)}
                                onChange={() => {
                                    const _changeCheck = !(userInfo.emailAgree && userInfo.smsAgree && userInfo.postAgree);
                                    setUserInfo({
                                        ...userInfo,
                                        emailAgree: _changeCheck,
                                        smsAgree: _changeCheck,
                                        postAgree: _changeCheck,
                                    });
                                }}
                                style={{ color: '#FF6035' }}
                            />
                            <span className='textGray3 text-xs font-medium'>광고성 정보 수신에 동의합니다. </span>
                        </div>
                        <div className='ml-9' style={{ marginTop: '-10px' }}>
                            <Checkbox checked={userInfo.emailAgree} onChange={() => setUserInfo({ ...userInfo, emailAgree: !userInfo.emailAgree })} style={{ color: '#FF6035' }} /><span className='textGray3 text-xs font-medium'>이메일</span>
                            <Checkbox checked={userInfo.smsAgree} onChange={() => setUserInfo({ ...userInfo, smsAgree: !userInfo.smsAgree })} style={{ color: '#FF6035' }} /><span className='textGray3 text-xs font-medium'>SMS</span>
                            <Checkbox checked={userInfo.postAgree} onChange={() => setUserInfo({ ...userInfo, postAgree: !userInfo.postAgree })} style={{ color: '#FF6035' }} /><span className='textGray3 text-xs font-medium'>우편</span>
                        </div>
                    </div>
                    <div className='flex absolute bottom-0 w-full items-center justify-evenly text-sm textGray4' style={{ height: '70px' }}>
                        <div onClick={() => auth.signOut()}>로그아웃</div>
                        <div>|</div>
                        <div onClick={() => {
                            const _result = confirm("회원정보, 계획/실행/인증 내역 즉시 삭제되고, 복원할 수 없습니다.\n회원탈퇴하시겠습니까?");
                            if (!_result) return;

                            deleteUser(auth.currentUser);
                            network.delete('/userInfo');
                            router.push('/');
                        }}>회원탈퇴</div>
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