import { Collapse } from '@mui/material';
import React, { useState } from "react";

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


export default function PaidMeeting() {
    const [expanded, setExpanded] = useState(false);
    const [expanded1, setExpanded1] = useState(false);

    return <>
        {/* 화면에 스크롤 있어야 되요.*/}
        <div className="w-full h-full flex flex-col border overflow-y-auto pb-24 relative">
            {/* 헤더 */}
            <div className="px-5 py-4 flex justify-between items-center">
                <img src="/images/back_ic.png" alt="" className="w-2 h-4" />
                <div className="flex">
                    <img src="/images/akar-icons-link-chain.png" alt="" className="w-6 h-6 mr-2" />
                    <img src="/images/more-horizontal.png" alt="" className="w-6 h-6" />
                </div>
            </div>
            {/* 중간 */}
            <div className="px-5 py-2 border-b border-gary3">
                <div className="flex items-center align-middle mb-6">
                    <span className="bg-[#2985d9] text-white rounded-sm text-xs py-1 px-2 mr-2">수락</span>
                    <div className='textGray1 text-lg font-bold'>프라이빗 놀이방에서 영어원서 읽기</div>
                </div>
                <div className="grid gap-2.5 bg-gray2 p-4 rounded-lg mb-6">
                    <div className="flex items-center">
                        <img src="/images/calendar.png" alt="" className="w-4 h-4 mr-1.5" />
                        <span className="textGray2 text-sm font-normal">2022년 10월 21일</span>
                    </div>
                    <div className="flex items-center">
                        <img src="/images/clock.png" alt="" className="w-4 h-4 mr-1.5" />
                        <span className="textGray3 text-sm font-normal">오후 7시 - 오후 9시 30분</span>
                    </div>
                    <div className="flex items-center">
                        <img src="/images/frame.png" alt="" className="w-4 h-4 mr-1.5" />
                        <span className="textGray3 text-sm font-normal">잠실구 역삼동 810-16  아름카페 1층</span>
                    </div>
                    <div className="flex items-center">
                        <img src="/images/bi-people-fill.png" alt="" className="w-4 h-4 mr-1.5" />
                        <span className="textGray3 text-sm font-normal">아이랑 만 1세 ~ 만 19세 </span>
                    </div>
                </div>

                <div className="flex mb-5">
                    <img src="/images/place1.png" alt="" className="w-9 h-9 rounded-full mr-3" />
                    <div className="flex-auto">
                        <div className="flex justify-between">
                            <span className="text-black font-semibold text-base">수빈맘</span>
                            <div className="textOrange3 text-xs font-medium align-middle border border-color3 rounded-full px-2 py-1">6세 8세, 서울, 엄마표</div>
                        </div>
                        <div className="textGray3 text-xs font-normal">송파구 방이1동</div>
                    </div>
                </div>
                <div className="flex flex-col textGray1 text-sm font-normal">
                    <div className='flex text-sm mb-4'>
                        <span className='text-black font-medium mr-2 w-1.5'>제공 사항: </span>
                        <div className='textGray1 font-normal'>전집제공, 책 읽어주기, 영어회화</div>
                    </div>
                    <div>저희 집에서 같이 보드게임해요! 5~7세가 가지고 놀만한 보드게임 많이 있으니 빈손으로 오셔도 돼요~</div>

                    <div className='m-5'>
                        <AliceCarousel
                            autoPlay
                            autoPlayInterval="3000"
                            disableButtonsControls
                        >
                            <img src="/images/banner.png" alt="" className='w-full' />
                            <img src="/images/banner.png" alt="" className='w-full' />
                            <img src="/images/banner.png" alt="" className='w-full' />
                        </AliceCarousel>
                    </div>
                </div>

            </div>
            {/* 아래 */}
            <div className="p-5">
                <div className="mb-4">
                    모임에 참여 신청한 이웃입니다. <span>(0/5)</span>
                </div>
                {/* 참여 신청한 이웃이 있는 경우 - 참여자 */}
                {/* <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center shrink-2 whitespace-nowrap overflow-hidden">
                            <img src="/images/place1.png" alt="" className="w-5 h-5 rounded-full mr-2" />
                            <span className="textGray1 text-sm font-medium mr-2 shrink">비빔밥볶음밥단무지밥비빔밥볶음밥단무지밥</span>
                            <div className="textOrange3 text-xs font-medium align-middle border border-color3 rounded-full px-2 py-1">6세, 11세, 서울, 엄마표</div>
                        </div>
                        <div className="textGray4 text-sm font-medium shrink-0 pl-7">수락대기</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center shrink-2 whitespace-nowrap overflow-hidden">
                            <img src="/images/place1.png" alt="" className="w-5 h-5 rounded-full mr-2" />
                            <span className="textGray1 text-sm font-medium mr-2 shrink">비빔밥볶음밥단무지밥비빔밥볶음밥단무지밥</span>
                            <div className="textOrange3 text-xs font-medium align-middle border border-color3 rounded-full px-2 py-1">6세, 11세, 서울, 엄마표</div>
                        </div>
                        <div className="textOrange5 text-sm font-bold shrink-0 pl-7">수락완료</div>
                    </div>
                </div> */}

                {/* 참여 신청한 이웃이 있는 경우 - 개설자 */}
                <div className=''>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center shrink-2 whitespace-nowrap overflow-hidden">
                            <img src="/images/place1.png" alt="" className="w-5 h-5 rounded-full mr-2" />
                            <span className="textGray1 text-sm font-medium mr-2 shrink">비빔밥볶음밥단무지밥비빔밥</span>
                            <div className="textOrange3 text-xs font-medium align-middle border border-color3 rounded-full px-2 py-1">6세, 11세, 서울, 엄마표</div>
                        </div>
                        <div className="text-white text-xs font-medium shrink-0 ml-7 bg-[#c4c4c4] px-2 py-1 rounded-full mr-4">수락대기</div>
                        <div>
                            <img src={`${expanded ? "/images/up.png" : "/images/down.png"}`} alt="" className="w-4 h-2" onClick={() => setExpanded(!expanded)} />
                        </div>
                    </div>
                    <Collapse in={expanded} className="bg-gray2 p-3 my-2">
                        날짜 : 2022년 10월 21일<br />
                        시간 : 오전 10시 - 오후 1시<br />
                        요청사항 : 없음
                    </Collapse>
                </div>
                <div className=''>
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center shrink-2 whitespace-nowrap overflow-hidden">
                            <img src="/images/place1.png" alt="" className="w-5 h-5 rounded-full mr-2" />
                            <span className="textGray1 text-sm font-medium mr-2 shrink">비빔밥볶음밥단무지밥비빔밥</span>
                            <div className="textOrange3 text-xs font-medium align-middle border border-color3 rounded-full px-2 py-1">6세, 11세, 서울, 엄마표</div>
                        </div>
                        <div className="text-white text-xs font-medium shrink-0 ml-7 bg-[#FF6035] px-2 py-1 rounded-full mr-4">수락하기</div>
                        <div>
                            <img src={`${expanded ? "/images/up.png" : "/images/down.png"}`} alt="" className="w-4 h-2" onClick={() => setExpanded(!expanded)} />
                        </div>
                    </div>
                    <Collapse in={expanded1} className="bg-gray2 p-3">
                        날짜 : 2022년 10월 21일<br />
                        시간 : 오전 10시 - 오후 1시<br />
                        요청사항 : 없음
                    </Collapse>
                </div>


                {/* 참여 신청한 이웃이 없는 경우 */}
                {/*<div className="flex flex-col items-center  py-10 ">
                    <img src="/images/img_empty.png" alt="" className=" w-24 h-28 mb-3" />
                    <span className="text-center text-base font-medium textGray3">모임에 함께 할 이웃을<br />기다리고 있어요.</span>
                </div>*/}
            </div>

            {/* 푸터 */}
            <div className='flex p-5 absolute bottom-0 left-0 right-0 bg-white'>
                <div className='flex-1 flex-col'>
                    <div className='textGray3 text-base font-normal'>1시간 당</div>
                    <div className='text-black text-2xl font-semibold'>20,000원</div>
                </div>
                <div className='flex flex-1 bg5 rounded-md text-white text-base font-semibold justify-center items-center'>신청하기</div>
            </div>
        </div>
    </>
}