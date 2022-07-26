import { Collapse } from '@mui/material';
import React, { useState } from "react";
import CommunityMember from "../../components/community/community_member";


export default function FreeMeeting() {
    const [expanded1, setExpanded1] = useState(false);

    return <>
        <div className="w-full h-screen flex flex-col border">
            {/* 헤더 */}
            <div className="px-5 py-4 flex justify-between items-center">
                <img src="/images/back_ic.png" alt="" className="w-2 h-4" />
                <div className="flex">
                    <img src="/images/akar-icons-link-chain.png" alt="" className="w-6 h-6 mr-2" />
                    <img src="/images/more-horizontal.png" alt="" className="w-6 h-6" />
                </div>
            </div>
            {/* 중간 */}
            <div className="px-5 py-2 border-b border-gary3 overflow-hidden">
                <div className="flex items-center align-middle mb-6">
                    <span className="bg4 text-white rounded-sm text-xs py-1 px-2 mr-2">수학</span>
                    <div>보드게임 하기</div>
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
                <div className="textGray1 text-sm font-normal">
                    저희 집에서 같이 보드게임해요! 5~7세가 가지고 놀만한 보드게임 많이 있으니 빈손으로 오셔도 돼요~
                </div>
            </div>
            {/* 아래 */}
            <div className="p-5">
                <div className="mb-4">
                    모임에 참여 신청한 이웃입니다. <span>(0/5)</span>
                </div>
                {/* 참여 신청한 이웃이 있는 경우 - 참여자 */}
                {/*
                <div>
                    <div className="grid gap-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center shrink-2 whitespace-nowrap overflow-hidden">
                                <img src="/images/place1.png" alt="" className="w-5 h-5 rounded-full mr-2" />
                                <span className="textGray1 text-sm font-medium mr-2 shrink">비빔밥볶음밥단무지밥비빔밥볶음밥단무지밥</span>
                                <div className="textOrange3 text-xs font-medium align-middle border border-color3 rounded-full px-2 py-1">6세, 11세, 서울, 엄마표</div>
                            </div>
                            <div className="textGray4 text-sm font-medium shrink-0 pl-7">수락대기</div>
                        </div>
                    </div>
                </div>
                */}

                {/* 참여 신청한 이웃이 없는 경우 */}
                {/*
                <div className="flex flex-col items-center  py-10 ">
                    <img src="/images/img_empty.png" alt="" className=" w-24 h-28 mb-3" />
                    <span className="text-center text-base font-medium textGray3">모임에 함께 할 이웃을<br />기다리고 있어요.</span>
                </div>
                */}

                {/* 참여 신청한 이웃이 있는 경우 - 개설자 */}
                <div className="flex flex-col space-y-4">
                    <CommunityMember />
                </div>
            </div>
        </div>
    </>
}