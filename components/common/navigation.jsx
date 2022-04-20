import React, { useEffect } from 'react';
import Link from 'next/link';
import { HomeOutlined, ChatBubbleOutline, CalendarTodayOutlined, PersonOutline } from '@material-ui/icons';

const Navigation = (props) => {

    const pathname = props.path;

    return (
        <>
            <aside className='fixed inset-x-0 bottom-0 z-100'>
                <div className='relative bg-white border border-solid my-0 mx-auto' style={{borderColor: '#f9f9f9'}}>
                    <nav className='flex relative box-border' style={{height: '70px'}}>
                        <Link href='/home'>
                            <div className='flex-1 mt-2.5 my-0 mx-auto'>
                                <div className='text-center'>
                                    <HomeOutlined className={`${pathname === 'home' ? 'textOrange5' : 'textGray4'}`}/>
                                </div>
                                <div className='text-center'>
                                    <span className={`text-xs ${pathname === 'home' ? 'textOrange5' : 'textGray4'}`} style={{letterSpacing: '-0.36px'}}>홈</span>
                                </div>
                            </div>
                        </Link>
                        <Link href='/feed'>
                            <div className='flex-1 mt-2.5 my-0 mx-auto'>
                                <div className='text-center'>
                                    <ChatBubbleOutline className={`${pathname === 'feed' ? 'textOrange5' : 'textGray4'}`}/>
                                </div>
                                <div className='text-center'>
                                    <span className={`text-xs ${pathname === 'feed' ? 'textOrange5' : 'textGray4'}`} style={{letterSpacing: '-0.36px'}}>피드</span>
                                </div>
                            </div>
                        </Link>
                        <Link href='/calendar'>
                            <div className='flex-1 mt-2.5 my-0 mx-auto'>
                                <div className='text-center'>
                                    <CalendarTodayOutlined className={`${pathname === 'calendar' ? 'textOrange5' : 'textGray4'}`}/>
                                </div>
                                <div className='text-center'>
                                    <span className={`text-xs ${pathname === 'calendar' ? 'textOrange5' : 'textGray4'}`} style={{letterSpacing: '-0.36px'}}>캘린더</span>
                                </div>
                            </div>
                        </Link>
                        <Link href='/mypage'>
                            <div className='flex-1 mt-2.5 my-0 mx-auto'>
                                <div className='text-center'>
                                    <PersonOutline className={`${pathname === 'mypage' ? 'textOrange5' : 'textGray4'}`}/>
                                </div>
                                <div className='text-center'>
                                    <span className={`text-xs ${pathname === 'mypage' ? 'textOrange5' : 'textGray4'}`} style={{letterSpacing: '-0.36px'}}>내정보</span>
                                </div>
                            </div>
                        </Link>
                    </nav> 
                </div>
            </aside>
        </>
    )
}

export default Navigation;
