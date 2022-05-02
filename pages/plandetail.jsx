import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import PlanCondition from '../components/plandetail/plan_condition';
import PlanConfirm from '../components/plandetail/plan_confirm';

const Plan2 = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    const tabClick = (index) => {
        setActiveTab(index);
    }

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    }, []);

    const obj = {
        0: <PlanConfirm />,
        1: <PlanCondition />
    }

    const clickCalendar = () => {
        alert('등록!');
    }

    return (
        <>
            <header className='sticky top-0 left-0 right-0 opacity-100 visible z-100' style={{marginBottom: '-50px'}}>
                <div className={`mx-auto my-0 border-box relative flex items-center py-4 w-full 
                        ${scrollPosition > 60 ? 'bg-white border-b border-solid border-gray3' : ''}`} style={{height: '50px'}}>
                {
                    scrollPosition > 60 ?
                        <div className='flex mx-5 w-full'>
                            <div>
                                <img src='/images/ic_back.png' onClick={() => {window.history.back()}}/>
                            </div>
                            <div className='text-center flex-1'>🧩 가베가족 알벳 교구</div>
                            <img src='/images/ic_back.png' className='hidden'/>
                        </div> : <img src='/images/ic_banner_aos.png' />
                }
                </div>
            </header>
            <main>
                <section className='mb-6'>
                    <div className='block relative'>
                        <img src='/images/banner.png' />
                        <span className='block absolute text-white font-bold bottom-0 left-0 text-lg mb-12 ml-5' 
                            style={{letterSpacing: '-0.54px', fontFamily: 'NanumSquareRoundOTF'}}>영어 원서읽기</span>
                        <div className='flex block absolute bottom-0 left-0 mb-6 ml-5 mt-1 text-xs'>
                            <span className='mr-2 py-1 px-1.5 rounded textOrange1' style={{letterSpacing: '-0.12px', backgroundColor: 'rgba(219, 239, 253, 0.2)'}}>영어</span>
                            <span className='py-1 px-1.5 rounded textOrange1' style={{letterSpacing: '-0.12px', backgroundColor: 'rgba(219, 239, 253, 0.2)'}}>영어</span>
                        </div>
                        <div className='block absolute bottom-0 right-0'>
                            <div className='mr-5 mb-1'>
                                <img src='/images/ic_add_circle.png' className='mx-auto'/>
                                <div className='mb-5 text-xs text-white text-center mx-auto'>135</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='mb-8 mx-5'>
                    <h3 className='text-base font-semibold mb-3' style={{letterSpacing: '-0.32px'}}>추천 루틴</h3>
                    <div className="bg-gray2 rounded-md px-5 py-3.5 mb-5">
                        <p className="textGray2 font-semibold text-base mb-3">주 2회  |  매주 월요일, 수요일</p>
                        <div className="textGray3 font-normal text-sm flex flex-col space-y-2.5">
                            <div className="flex flex-row">
                                <img src="/images/calendar.png" alt="캘린더이미지" className="w-3.5 h-3.5 my-auto mx-0" />
                                <span className='ml-1.5'>2022년 10월 21일 - 2022년 11월 21일</span>
                            </div>
                            <div className="flex flex-row">
                                <img src="/images/clock.png" alt="시계이미지" className="w-3.5 h-3.5 my-auto mx-0" />
                                <span className='ml-1.5'>오후 7시 - 오후 9시 30분</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='mb-8 mx-5'>
                    <h3 className='text-base font-semibold mb-3' style={{letterSpacing: '-0.32px'}}>어떤 계획인가요?</h3>
                    <div className='mt-4'>
                        <div className='text-sm textGray2' style={{letterSpacing: '-0.28px'}}>
                            아이가 궁금해할만한 과학적/자연현상에 대해 귀여운 그림체로 흥미롭게 설명해놓은 과학전집이에요! 📒<br/>
                            공룡은 어떻게 멸망했는지, 우리의 음식은 어떤 과정을 통해 소화가 되는지 등 초등학교 교과서와 연계되는 배경 지식을 기를 수 있고 맨 뒤페이지에 나오는 간단한 과학실험도 따라해볼만 해요. 🥽🥼<br/><br/>
                            저는 공룡덕후인 아들에게 어떻게 공룡이 멸망했는지에 설명해주기 힘들어서 구매했는데 다른 권들도 아이가 궁금해할만한 주제로 이루어져 있어서 좋았어요.
                            다만 추피처럼 서양 기준 캐릭터와 문화가 녹아있어 낯설 수 있고, 음원이나 리딩펜이 없어 엄마 목이 좀 아플 수 있지요. 😂
                        </div>
                    </div>
                </section>
                <section className='mb-8 mx-5'>
                    <h3 className='text-base font-semibold mb-3' style={{letterSpacing: '-0.32px'}}>주차별 활동을 참고해보세요.</h3>
                    <div className='mt-4'>
                        <div className='flex items-center justify-between border-t border-b border-solid border-gary4' style={{padding: '6.5px 0'}}>
                            <div className='flex'>
                                <div className='text-sm textGray2 font-semibold mr-1'>1주차</div>
                                <div style={{fontSize: '13px', letterSpacing: '-0.26px'}}>우리아이 습관기르기 첫번째</div>
                            </div>
                            <Link href='/guide'>
                                <div className='bg5 text-white' style={{fontSize: '10px', padding: '1px 5px', borderRadius: '5px'}}>가이드 영상 ▶</div>
                            </Link>
                        </div>
                        <div className='flex items-center justify-between border-b border-solid border-gary4' style={{padding: '6.5px 0'}}>
                            <div className='flex'>
                                <div className='text-sm textGray2 font-semibold mr-1'>2주차</div>
                                <div style={{fontSize: '13px', letterSpacing: '-0.26px'}}>우리아이 습관기르기 첫번째</div>
                            </div>
                            <Link href='/guide'>
                                <div className='bg5 text-white' style={{fontSize: '10px', padding: '1px 5px', borderRadius: '5px'}}>가이드 영상 ▶</div>
                            </Link>
                        </div>
                        <div className='flex items-center justify-between border-b border-solid border-gary4' style={{padding: '6.5px 0'}}>
                            <div className='flex'>
                                <div className='text-sm textGray2 font-semibold mr-1'>3주차</div>
                                <div style={{fontSize: '13px', letterSpacing: '-0.26px'}}>우리아이 습관기르기 첫번째</div>
                            </div>
                            <Link href='/guide'>
                                <div className='bg5 text-white' style={{fontSize: '10px', padding: '1px 5px', borderRadius: '5px'}}>가이드 영상 ▶</div>
                            </Link>
                        </div>
                        <div className='flex items-center justify-between border-b border-solid border-gary4' style={{padding: '6.5px 0'}}>
                            <div className='flex'>
                                <div className='text-sm textGray2 font-semibold mr-1'>4주차</div>
                                <div style={{fontSize: '13px', letterSpacing: '-0.26px'}}>우리아이 습관기르기 첫번째</div>
                            </div>
                            <Link href='/guide'>
                                <div className='bg5 text-white' style={{fontSize: '10px', padding: '1px 5px', borderRadius: '5px'}}>가이드 영상 ▶</div>
                            </Link>
                        </div>
                        <div className='flex items-center justify-between border-b border-solid border-gary4' style={{padding: '6.5px 0'}}>
                            <div className='flex'>
                                <div className='text-sm textGray2 font-semibold mr-1'>5주차</div>
                                <div style={{fontSize: '13px', letterSpacing: '-0.26px'}}>우리아이 습관기르기 첫번째</div>
                            </div>
                            <Link href='/guide'>
                                <div className='bg5 text-white' style={{fontSize: '10px', padding: '1px 5px', borderRadius: '5px'}}>가이드 영상 ▶</div>
                            </Link>
                        </div>
                        <div className='flex items-center justify-between border-b border-solid border-gary4' style={{padding: '6.5px 0'}}>
                            <div className='flex'>
                                <div className='text-sm textGray2 font-semibold mr-1'>6주차</div>
                                <div style={{fontSize: '13px', letterSpacing: '-0.26px'}}>우리아이 습관기르기 첫번째</div>
                            </div>
                            <Link href='/guide'>
                                <div className='bg5 text-white' style={{fontSize: '10px', padding: '1px 5px', borderRadius: '5px'}}>가이드 영상 ▶</div>
                            </Link>
                        </div>
                        <div className='flex items-center justify-between border-b border-solid border-gary4' style={{padding: '6.5px 0'}}>
                            <div className='flex'>
                                <div className='text-sm textGray2 font-semibold mr-1'>7주차</div>
                                <div style={{fontSize: '13px', letterSpacing: '-0.26px'}}>우리아이 습관기르기 첫번째</div>
                            </div>
                            <Link href='/guide'>
                                <div className='bg5 text-white' style={{fontSize: '10px', padding: '1px 5px', borderRadius: '5px'}}>가이드 영상 ▶</div>
                            </Link>
                        </div>
                        <div className='flex items-center justify-between border-b border-solid border-gary4' style={{padding: '6.5px 0'}}>
                            <div className='flex'>
                                <div className='text-sm textGray2 font-semibold mr-1'>8주차</div>
                                <div style={{fontSize: '13px', letterSpacing: '-0.26px'}}>우리아이 습관기르기 첫번째</div>
                            </div>
                            <Link href='/guide'>
                                <div className='bg5 text-white' style={{fontSize: '10px', padding: '1px 5px', borderRadius: '5px'}}>가이드 영상 ▶</div>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className='mb-8 mx-5'>
                    <h3 className='text-base font-semibold mb-3' style={{letterSpacing: '-0.32px'}}>추천 아이템</h3>
                    <div className='mt-4'>
                        <Swiper
                            slidesPerView={3.1}
                        >
                            <SwiperSlide>
                                <div className='w-24'>
                                    <div className='block relative'>
                                        <img src='/images/itme.png' className='rounded-md'/>
                                        <span className='block absolute top-0 left-0 text-xs text-white px-1.5 py-1 bg-blue3 rounded-tl-md rounded-br-md'>PICK</span>
                                        <img src='/images/ic_bookmarked.png' className='block absolute bottom-0 right-0 mb-1.5 mr-2'/>
                                    </div>
                                    <div className='text-sm leading-snug mt-1.5' style={{letterSpacing: '-0.26px'}}>알파벳 교구</div>
                                    <div className='flex mt-1'>
                                        <span className='py-1 px-1.5 rounded text-center text-xs textGray3 mr-1 bg5' style={{backgroundColor: '#f0f5f8'}}>영어</span>
                                        <span className='py-1 px-1.5 rounded text-center text-xs textGray3 mr-1 bg5' style={{backgroundColor: '#f0f5f8'}}>교구</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-24'>
                                    <div className='block relative'>
                                        <img src='/images/itme.png' className='rounded-md'/>
                                        <img src='/images/ic_bookmark.png' className='block absolute bottom-0 right-0 mb-1.5 mr-2'/>
                                    </div>
                                    <div className='text-sm leading-snug mt-1.5' style={{letterSpacing: '-0.26px'}}>알파벳 교구</div>
                                    <div className='flex mt-1'>
                                        <span className='py-1 px-1.5 rounded text-center text-xs textGray3 mr-1 bg5' style={{backgroundColor: '#f0f5f8'}}>영어</span>
                                        <span className='py-1 px-1.5 rounded text-center text-xs textGray3 mr-1 bg5' style={{backgroundColor: '#f0f5f8'}}>교구</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-24'>
                                    <div className='block relative'>
                                        <img src='/images/itme.png' className='rounded-md'/>
                                        <img src='/images/ic_bookmark.png' className='block absolute bottom-0 right-0 mb-1.5 mr-2'/>
                                    </div>
                                    <div className='text-sm leading-snug mt-1.5' style={{letterSpacing: '-0.26px'}}>알파벳 교구</div>
                                    <div className='flex mt-1'>
                                        <span className='py-1 px-1.5 rounded text-center text-xs textGray3 mr-1 bg5' style={{backgroundColor: '#f0f5f8'}}>영어</span>
                                        <span className='py-1 px-1.5 rounded text-center text-xs textGray3 mr-1 bg5' style={{backgroundColor: '#f0f5f8'}}>교구</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-24'>
                                    <div className='block relative'>
                                        <img src='/images/itme.png' className='rounded-md'/>
                                        <img src='/images/ic_bookmark.png' className='block absolute bottom-0 right-0 mb-1.5 mr-2'/>
                                    </div>
                                    <div className='text-sm leading-snug mt-1.5' style={{letterSpacing: '-0.26px'}}>알파벳 교구</div>
                                    <div className='flex mt-1'>
                                        <span className='py-1 px-1.5 rounded text-center text-xs textGray3 mr-1 bg5' style={{backgroundColor: '#f0f5f8'}}>영어</span>
                                        <span className='py-1 px-1.5 rounded text-center text-xs textGray3 mr-1 bg5' style={{backgroundColor: '#f0f5f8'}}>교구</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className='mb-24'>
                    <div>
                        <ul className='flex w-full border-b' style={{height: '40px'}}>
                            <li className={`flex-1 my-0 mx-auto text-center ${activeTab === 0 ? 'textBlue4 border-blue4 border-b border-solid border-b-3' : ''}`} onClick={() => {tabClick(0)}}>실행 인증</li>
                            <li className={`flex-1 my-0 mx-auto text-center ${activeTab === 1 ? 'textBlue4 border-blue4 border-b border-solid border-b-3' : ''}`} onClick={() => {tabClick(1)}}>실행 현황</li>
                        </ul>
                    </div>
                    <div>
                    {
                    obj[activeTab]
                    }
                    </div>
                </section>
            </main>
            <aside className='fixed bottom-0 left-0 right-0 z-100'>
                <div className='relative mx-auto my-0 bg-white'>
                    <nav className='flex items-center box-border relative' style={{height: '90px'}}>
                        <span className='text-sm text-white text-center p-4 m-5 w-full rounded-md bg5' 
                            style={{letterSpacing: '-0.28px'}} onClick={clickCalendar}>캘린더에 등록하기</span>
                    </nav>
                </div>
            </aside>
        </>
    )
}

export default Plan2;