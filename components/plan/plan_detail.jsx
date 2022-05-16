import { ChevronLeftRounded } from "@material-ui/icons";
import PlanTitle from "../calendar/plan_title";

export default function PlaneDetail() {
    return (
        <>
            <div className="px-5">
                <div className="flex items-center justify-between py-6">
                    <svg className="w-7 h-8 textGray2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    <svg className="w-6 h-6 textGray3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                    </svg>
                </div>

                <div className="flex flex-row pb-6">
                    <PlanTitle />
                    <p className="textGray1 text-lg font-normal">페파피그1 영상</p>
                </div>
                <div className="border rounded-md border-color2 flex justify-between p-3 mb-4">
                    <div className="flex flex-row">
                        <img src="/images/group.png" alt="그룹이미지" className="w-5 h-5 mr-3" />
                        <span className="textGray2 text-sm font-normal">공동 계획입니다!</span>
                    </div>
                    <span className="textBlue1 text-sm font-normal">현황 보러가기</span>
                </div>
                <div className="bg-gray2 rounded-md px-5 py-3.5 mb-5">
                    <p className="textGray2 font-semibold text-base mb-3">주 2회  |  매주 월요일, 수요일</p>
                    <div className="textGray3 font-normal text-sm flex flex-col space-y-2.5">
                        <div className="flex flex-row">
                            <img src="/images/calendar.png" alt="캘린더이미지" className="w-3.5 h-3.5 mr-2" />
                            <span>2022년 10월 21일 - 2022년 11월 21일</span>
                        </div>
                        <div className="flex flex-row">
                            <img src="/images/clock.png" alt="시계이미지" className="w-3.5 h-3.5 mr-2" />
                            <span>오후 7시 - 오후 9시 30분</span>
                        </div>
                        <div className="flex flex-row">
                            <img src="/images/bell.png" alt="벨이미지" className="w-3.5 h-3.5 mr-2" />
                            <span>1시간 전, 30분 전, 정시</span>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <p>실행률</p>
                    {/* 실행률 만든 방법 알려주세요 */}
                </div>
                <hr className="mb-4" />
                <div className="pl-3 flex flex-row space-x-8 mb-9">
                    <div>
                        <p className="textGray3 text-xs font-normal">계획일수</p>
                        <span className="textGray1 text-base font-normal table-row">12
                            <span className="text-xs teble-cell">개</span>
                        </span>
                    </div>
                    <div>
                        <p className="textGray3 text-xs font-normal">실행일수</p>
                        <span className="textGray1 text-base font-normal table-row">12
                            <span className="text-xs teble-cell">개</span>
                        </span>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-2 text-center border-b-[0.38px] border-gary4 mb-1">
                        <span className="textGray3 font-normal text-sm pb-2 hover:border-b-2 hover:text-[#3c81e1] hover:border-[#3c81e1] hover:font-semibold">실행인증</span>
                        <span className="textGray3 font-normal text-sm pb-2 hover:border-b-2 hover:text-[#3c81e1] hover:border-[#3c81e1] hover:font-semibold">실행현황</span>
                    </div>
                    {/* 실행 인증 */}
                    <div className="grid grid-cols-3 gap-1">
                        <div className="bg-[url('/images/banner.png')] bg-center bg-no-repeat bg-cover relative h-[7.5rem]">
                            <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.4)]" />
                            <div className="flex flex-col absolute left-2.5 bottom-2.5">
                                <span className="text-[#dbeffd] text-xs font-light">2022년</span>
                                <span className="text-white font-normal text-sm shadow-[0px 0px 4px rgba(0,0,0,0.25)]">3월 22일</span>
                            </div>
                        </div>
                        <div className="bg-[url('/images/rectangle.png')] bg-center bg-no-repeat relative h-[7.5rem]">
                            <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.4)]" />
                            <div className="flex flex-col absolute left-2.5 bottom-2.5">
                                <span className="text-[#dbeffd] text-xs font-light">2022년</span>
                                <span className="text-white font-normal text-sm shadow-[0px 0px 4px rgba(0,0,0,0.25)]">3월 22일</span>
                            </div>
                        </div>
                    </div>

                    {/* 실행 현황 */}
                    {/* <div>캘린더 들어가야함</div> */}
                </div>

                <div className="flex items-center justify-center relative">
                    <span className="px-5 py-3 bg5 text-base text-white font-medium rounded-full fixed bottom-6">오늘 하루 인증하기</span>
                    {/* <span className="px-5 py-3 bg-gray4 text-base text-white font-medium rounded-full fixed bottom-6">오늘 인증을 완료했어요!</span>
                    <span className="px-5 py-3 bg5 text-base text-white font-medium rounded-full fixed bottom-6">종료 계획 재시작하기</span> */}
                </div>
            </div>

        </>
    )
}