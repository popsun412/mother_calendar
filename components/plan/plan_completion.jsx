import PlanTitle from "../calendar/plan_title";

export default function PlanCompletion() {
    return (
        <>
            <div className="flex py-4 items-center justify-center border-b-[0.3px] border-gary3">
                <svg className="w-7 h-8 ml-1 textGray2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span className="flex-auto text-center text-base font-medium textGray1">인증 완료</span>
            </div>
            <div className="p-5">
                <div className="flex mb-6">
                    <img src="/images/ellipse1.png" className="w-10 h-10 rounded-full" />
                    <div className="flex flex-auto itmes-center justify-between">
                        <div className="flex flex-col ml-3">
                            <span className="text-sm font-medium text-black">수민맘</span>
                            <span className="text-xs textGray3">5분 전</span>
                        </div>
                        <div>
                            <div className="flex items-center justify-center">
                                <span className="border border-color3 rounded-full px-2 py-1 text-xs textOrange3">5세 6세 8세, 서울, 엄마표</span>
                                <div className="ml-2">
                                    <svg className="w-4 h-4 textGray3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mb-3">
                    <PlanTitle />
                    <p className="textGray1 text-sm font-normal">한글 떼기 워크북 풀기</p>
                </div>
                <div className="flex items-center justify-center border rounded-md border-color4 py-2">
                    {/* <div>
                        <img src="/images/category1.png" className="w-6 h-6 mr-2" />
                        <span className="text-sm font-medium textOrange5">가베가족 알파벳 교구</span>
                    </div> */}
                    {/* <div>
                        <img src="/images/category1.png" className="w-6 h-6 mr-2" />
                        <span className="text-sm font-medium textOrange5">이지잉글리쉬 영어교습소</span>
                    </div> */}
                    {/* <div>
                        <img src="/images/category1.png" className="w-6 h-6 mr-2" />
                        <span className="text-sm font-medium textOrange5">잉글리시 에그 Step 1</span>
                    </div> */}
                    {/* <div>
                        <img src="/images/category1.png" className="w-6 h-6 mr-2" />
                        <span className="text-sm font-medium textOrange5">직업체험 테마파크 키자니아</span>
                    </div> */}
                    <div className="flex items-center justify-center">
                        <svg className="w-4 h-5 textGray4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                        </svg>
                        <span className="text-sm textGray4">아이템이 없습니다.</span>
                    </div>
                </div>
            </div>
            <div className="h-[22.5rem] bg-gray2 flex items-center justify-center">
                {/* <img src="/images/banner.png" className=" h-full" /> */}
                <div>
                    <img src="/images/img-empty-image.png" className="w-24 h-28 m-auto mb-3.5" />
                    <span className="text-sm textGray3">사진이 없습니다.</span>
                </div>
            </div>
            {/* <div className="p-5 text-sm text-[#333333]">
                집중력 떨어질까봐 책상은 다 비웠었는데, 교재 종류가 증가하다보니 어쩔 수 없이 매일 보는 것은 가까이 꽂아두었습니다니다니나디나디나디나디나디나디나
            </div> */}
            <div className="flex items-center justify-center">
                <span className="mt-[5.6rem] bg5 rounded-full shadow-lg text-sm font-medium text-white px-10 py-3.5">수정하기</span>
            </div>
        </>
    )
}