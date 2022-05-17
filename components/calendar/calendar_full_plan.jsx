import PlanTitle from "./plan_title";

export default function CalendarFullPlan() {
    return (
        <div className="flex flex-col h-full">
            <div className="flex  py-4 items-center justify-center bg-white border-b border-gary3">
                <svg className="w-7 h-8 ml-1 textGray2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span className="flex-auto text-center text-sm font-medium textGray1">전체 계획 관리</span>
            </div>
            <div className="flex flex-col bg-gray2 h-full px-5 pt-4 space-y-3">
                <div className="flex justify-between bg-white rounded-md p-3 items-center">
                    <PlanTitle title="대교 벽보 한글 읽기" />
                    <span className="text-sm textGray4">100%, 종료</span>
                </div>
                <div className="flex justify-between bg-white rounded-md p-3 items-center">
                    <PlanTitle title="대교 벽보 한글 읽기" />
                    <span className="text-sm textOrange5">18%, 종료</span>
                </div>
                <div className="flex justify-between bg-white rounded-md p-3 items-center">
                    <PlanTitle title="대교 벽보 한글 읽기" />
                    <span className="text-sm textOrange5">18%, 종료</span>
                </div>
            </div>
        </div>
    )
}