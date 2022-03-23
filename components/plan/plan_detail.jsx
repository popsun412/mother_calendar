import { ChevronLeftRounded } from "@material-ui/icons";

export default function PlaneDetail() {
    return (
        <>
            <div className="px-5">
                <div className="flex flex-row justify-between py-6">
                    <ChevronLeftRounded style={{ fontSize: "1.5rem", color: "#333333" }} />
                    <img src="/images/more-horizontal.png" alt="메뉴" />
                </div>

                <div className="flex flex-row pb-6">
                    <span className="text-xs font-normal flex items-center mr-2">국어</span>
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
                <div className="grid grid-cols-2 text-center border-b border-gary4 mb-1" style={{ borderBottomWidth: "0.38px" }}>
                    <span className="textGray1 font-semibold text-sm pb-2 border-b-2 border-gary1">실행인증</span>
                    <span className="textGray3 font-normal text-sm pb-2">실행현황</span>
                </div>
                <div className="grid grid-cols-3 gap-1">
                    <div className="bg-[url('/images/banner.png')] bg-center bg-no-repeat bg-cover relative" style={{ height: "7.5rem" }}>
                        <div
                            className="w-full h-full absolute top-0 left-0"
                            style={{ background: "rgba(0, 0, 0, 0.4)" }}
                        />
                        <span
                            className="text-white font-normal text-lg absolute top-1/2 left-1/2"
                            style={{ transform: "translate(-50%, -50%)" }}
                        >2/14</span>
                    </div>
                    <div className="bg-center bg-no-repeat bg-cover relative" style={{ height: "7.5rem" }}>
                        <div
                            className="w-full h-full absolute top-0 left-0"
                            style={{ background: "rgba(0, 0, 0, 0.4)" }}
                        />
                        <span
                            className="text-white font-normal text-lg absolute top-1/2 left-1/2"
                            style={{ transform: "translate(-50%, -50%)" }}
                        >2/14</span>
                    </div>
                </div>
            </div>


        </>
    )
}