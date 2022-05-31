import { useRouter } from "next/router";
import PlanTitle from "./plan_title";

export default function CalendarFullPlan() {
    const router = useRouter();

    return (
        <div className="flex flex-col h-full">
            <div className="relative py-4 bg-white border-b border-gary3">
                <span className="absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center text-sm font-medium textGray1 z-40">전체 계획 관리</span>
                <svg className="relative w-7 h-8 ml-1 textGray2 z-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => router.back()}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
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