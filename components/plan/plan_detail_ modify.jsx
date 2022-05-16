export default function PlanDetailModify() {
    return (
        <>
            <div className="flex flex-col space-y-6 px-11 py-12 h-screen relative">
                <div className="flex items-center justify-center border rounded-md border-color4 py-2">
                    <img src="/images/category1.png" className="w-6 h-6 mr-2" />
                    <span className="text-sm font-medium textOrange5">가베가족 알파벳 교구</span>
                </div>
                <div className="flex items-center justify-center border rounded-md border-color4 py-2">
                    <img src="/images/category1.png" className="w-6 h-6 mr-2" />
                    <span className="text-sm font-medium textOrange5">이지잉글리쉬 영어교습소</span>
                </div>
                <div className="flex items-center justify-center border rounded-md border-color4 py-2">
                    <img src="/images/category1.png" className="w-6 h-6 mr-2" />
                    <span className="text-sm font-medium textOrange5">잉글리시 에그 Step 1</span>
                </div>
                <div className="flex items-center justify-center border rounded-md border-color4 py-2">
                    <img src="/images/category1.png" className="w-6 h-6 mr-2" />
                    <span className="text-sm font-medium textOrange5">직업체험 테마파크 키자니아</span>
                </div>
                <div className="flex items-center justify-center border rounded-md border-color4 py-2">
                    <svg class="w-4 h-5 textGray4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                    </svg>
                    <span className="text-sm textGray4">아이템이 없습니다.</span>
                </div>

                <div className="fixed bottom-12 left-0 right-0 px-11 space-y-3">
                    <div className="bg-[#f5f5f5] py-4 flex items-center justify-center">
                        <span className="text-lg text-[#0047ff]">수정</span>
                    </div>
                    <div className="bg-[#f5f5f5] py-4 flex items-center justify-center">
                        <span className="text-lg text-[#eb5757]">삭제</span>
                    </div>
                </div>
            </div>
        </>
    )
}