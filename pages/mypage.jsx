import Link from 'next/link';
import React from 'react';
import Navigation from '../components/common/navigation';

const MyPage = () => {
    return (
        <div className=''>
            <header className='sticky top-0 left-0 right-0 visible opacity-100 bg-white z-100' style={{marginBottom: '-50px'}}>
                <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white border-solid border-b border-gray4' style={{height: '50px'}}>
                    <div className='flex-1 flex items-center'>
                        <div className='my-0 mx-auto text-base' style={{letterSpacing: '-0.3px', fontSize: '15px'}}>내 정보</div>
                    </div>
                </div>
            </header>
            <main style={{marginTop: '50px', marginBottom: '100px'}}>
                <section>
                    <div style={{height: '190px'}}>
                        <div className='pt-7 mb-4'>
                            <div className="bg-[url('/images/img_profile_mom.png')] rounded-full border border-solid border-color4 mx-auto" style={{width: '75px', height: '75px'}}>
                            </div>
                        </div>
                        <div className='text-xl text-center mb-1.5' style={{letterSpacing: '-0.6px'}}>
                            세림맘
                        </div>
                        <div className='text-sm text-center textOrange3'>
                            umma@umma.com
                        </div>
                    </div>
                </section>
                <section>
                    <Link href='/mypage/runtype'>
                        <div className='flex items-center justify-between border-b border-solid border-gray4 h-15'>
                            <span style={{marginLeft: '18px', fontSize: '15px'}}>내 실행 유형</span>
                            <span style={{marginRight: '23px'}}>{'>'}</span>
                        </div>
                    </Link>
                    <Link href='/mypage/myinfo'>
                        <div className='flex items-center justify-between border-b border-solid border-gray4 h-15'>
                            <span style={{marginLeft: '18px', fontSize: '15px'}}>내 정보 수정</span>
                            <span style={{marginRight: '23px'}}>{'>'}</span>
                        </div>
                    </Link>
                    <Link href='/mypage/account'>
                        <div className='flex items-center justify-between border-b border-solid border-gray4 h-15'>
                            <span style={{marginLeft: '18px', fontSize: '15px'}}>계정 관리</span>
                            <span style={{marginRight: '23px'}}>{'>'}</span>
                        </div>
                    </Link>
                    <Link href='/mypage/'>
                        <div className='flex items-center justify-between border-b border-solid border-gray4 h-15'>
                            <span style={{marginLeft: '18px', fontSize: '15px'}}>공지사항</span>
                            <span style={{marginRight: '23px'}}>{'>'}</span>
                        </div>
                    </Link>
                    <div className='flex items-center justify-between border-b border-solid border-gray4 h-15'>
                        <span style={{marginLeft: '18px', fontSize: '15px'}}>서비스 이용약관</span>
                        <span style={{marginRight: '23px'}}>{'>'}</span>
                    </div>
                    <div className='flex items-center justify-between border-b border-solid border-gray4 h-15'>
                        <span style={{marginLeft: '18px', fontSize: '15px'}}>개인정보 처리방침</span>
                        <span style={{marginRight: '23px'}}>{'>'}</span>
                    </div>
                    <div className='flex items-center justify-between border-b border-solid border-gray4 h-15'>
                        <span style={{marginLeft: '18px', fontSize: '15px'}}>1:1 문의</span>
                        <span style={{marginRight: '23px'}}></span>
                    </div>
                    <div className='flex items-center justify-between h-15'>
                        <span style={{marginLeft: '18px', fontSize: '15px'}}>버전 정보</span>
                        <span className='text-sm textGray4' style={{marginRight: '23px'}}>1.02 ver</span>
                    </div>
                </section>
            </main>
            <Navigation path={'mypage'}/>
        </div>
    )
}

export default MyPage;