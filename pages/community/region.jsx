export default function Region() {
    return <>
        <div className="w-full h-screen flex flex-col border">
            {/* top */}
            <div className="p-5">
                <div className="flex align-middle items-center mb-4">
                    <img src="/images/vector.png" className="w-3.5 h-5" />
                    <div className="textGray1 text-xl font-semibold	pl-2">서울시 송파구</div>
                </div>
                <div className="flex flex-row align-middle justify-between">
                    <div className="flex bg-gray2 rounded px-2 py-1.5 textGray2 items-center justify-center">
                        <span className="text-xs">2022년 2월 2주차</span>
                        <svg className="w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </div>
                    <div className="checkbox textGray2 text-xs font-normal px-3 py-1.5 p-">참여모임</div>
                </div>
            </div>
            {/* bottom */}
            <div className="px-5 py-4 bg-gray2 grid gap-2.5">
                <div className="p-4 bg-white rounded-md">
                    <div className="flex align-middle mb-3">
                        <span className="bg4 text-white rounded text-xs py-1 px-2 mr-2">수학</span>
                        <div className="text-sm align-middle item-middle items-center">보드게임 하기</div>
                    </div>
                    <div className="flex flex-col mb-3.5">
                        <div className="flex">
                            <div className="flex align-middle items-center">
                                <img src="/images/clock.png" className="w-4 h-4" />
                                <span className="textGray3 text-xs font-normal ml-1">오후 1시 ~ 오후 4시</span>
                            </div>
                            <div className="flex align-middle items-center ml-2.5">
                                <img src="/images/frame.png" className="w-5 h-5" />
                                <span className="textGray3 text-xs font-normal ml-1">잠실구 역삼동</span>
                            </div>
                        </div>
                        <div className="flex align-middle items-center">
                            <img src="/images/bi-people-fill.png" className="w-4 h-4" />
                            <span className="textGray3 text-xs font-normal ml-1">아이랑    만 1세 ~ 만 19세 </span>
                        </div>
                    </div>
                    <div className="flex flex-nowrap gap-2">
                        <div className="relative">
                            <img src="/images/ellipse1.png" className="w-8 h-8" />
                            <span className="absolute bottom-0 right-0"><img src="/images/group-7459.png" alt="" className="w-3 h-3" /></span>
                        </div>
                        <div><img src="/images/ellipse1.png" className="w-8 h-8" /></div>
                        <div><img src="/images/ellipse1.png" className="w-8 h-8" /></div>
                        <div><img src="/images/ellipse1.png" className="w-8 h-8" /></div>
                        <div className="w-8 h-8 rounded-full border border-dashed border-gary3 flex items-center justify-center">
                            <img src="/images/plus.png" alt="" className="w-3 h-3 items-center" />
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white rounded-md">
                    <div className="flex align-middle mb-3">
                        <span className="bg-gray4 text-white rounded text-xs py-0.5 px-1 mr-2">수학</span>
                        <div className="text-sm align-middle item-middle items-center textGray4 line-through">보드게임 하기</div>
                    </div>
                    <div className="flex flex-col mb-3.5">
                        <div className="flex">
                            <div className="flex align-middle items-center">
                                <img src="/images/clock_off.png" className="w-4 h-4" />
                                <span className="textGray3 text-xs font-normal ml-1">오후 1시 ~ 오후 4시</span>
                            </div>
                            <div className="flex align-middle items-center ml-2.5">
                                <img src="/images/carbon-earth-filled.png" className="w-3 h-3" />
                                <span className="textGray3 text-xs font-normal ml-1">온라인</span>
                            </div>
                        </div>
                        <div className="flex align-middle items-center">
                            <img src="/images/bi-people.png" className="w-4 h-4" />
                            <span className="textGray3 text-xs font-normal ml-1">아이랑 만 1세 ~ 만 19세 </span>
                        </div>
                    </div>
                    <div className="flex flex-nowrap gap-2 grayscale">
                        <div className="relative">
                            <img src="/images/ellipse1.png" className="w-8 h-8" />
                            <span className="absolute bottom-0 right-0"><img src="/images/group-7459.png" alt="" className="w-3 h-3" /></span>
                        </div>
                        <div><img src="/images/ellipse1.png" className="w-8 h-8" /></div>
                        <div><img src="/images/ellipse1.png" className="w-8 h-8" /></div>
                        <div><img src="/images/ellipse1.png" className="w-8 h-8" /></div>
                        <div className="w-8 h-8 rounded-full border border-dashed border-gary3 flex items-center justify-center">
                            <img src="/images/plus.png" alt="" className="w-3 h-3 items-center" />
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white rounded-md">
                    <div className="flex align-middle mb-3">
                        <span className="bg-[#2985d9] text-white rounded text-xs py-1 px-2 mr-2">수학</span>
                        <div className="text-sm align-middle item-middle items-center">보프라이빗 놀이방에서 영어원서 읽기</div>
                    </div>
                    <div className="flex flex-col mb-3.5">
                        <div className="flex">
                            <div className="flex align-middle items-center">
                                <img src="/images/clock.png" className="w-4 h-4" />
                                <span className="textGray3 text-xs font-normal ml-1">오후 1시 ~ 오후 4시</span>
                            </div>
                            <div className="flex align-middle items-center ml-2.5">
                                <img src="/images/frame.png" className="w-5 h-5" />
                                <span className="textGray3 text-xs font-normal ml-1">잠실구 역삼동</span>
                            </div>
                        </div>
                        <div className="flex align-middle items-center">
                            <img src="/images/bi-people-fill.png" className="w-4 h-4" />
                            <span className="textGray3 text-xs font-normal ml-1">아이랑    만 1세 ~ 만 19세 </span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="relative">
                            <img src="/images/ellipse1.png" className="w-8 h-8" />
                            <span className="absolute bottom-0 right-0"><img src="/images/group-7459.png" alt="" className="w-3 h-3" /></span>
                        </div>
                        <div>
                            <p className="textGray1 text-xs font-normal">1시간 /<strong className="textGray1 text-base font-medium"> 20,000원</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}