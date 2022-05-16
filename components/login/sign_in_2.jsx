export default function SignIn2() {
    return (
        <div className="h-screen relative">
            <div className="flex py-4 items-center justify-center">
                <svg className="w-7 h-8 ml-1 textGray2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span className="flex-auto text-center text-base font-medium textGray1">회원가입</span>
            </div>
            <div className="pt-4 px-5 text-2xl font-normal textGray1">
                아이 정보를 입력해주세요.
            </div>
            <div className="pt-9 px-5 space-y-9">
                <div className="flex space-x-4">
                    <span className="rounded-full w-9 h-9 ring-1 ring-[#e0e0e0] hover:ring-[3px] hover:ring-[#FF6035]">
                        <img src="/images/img-profile.png" className="w-full rounded-full" />
                    </span>
                    <span className="rounded-full w-9 h-9 ring-1 ring-[#e0e0e0] hover:ring-[3px] hover:ring-[#FF6035]">
                        <img src="/images/img-profile.png" className="w-full rounded-full" />
                    </span>
                    <button className="rounded-full w-9 h-9 border-dashed border-gary3 border flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#bdbdbd]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                    </button>
                </div>
                <div className="space-y-4">
                    <span className="text-sm font-medium textGray1">아이 생년월일</span>
                    <div className="grid grid-cols-8 gap-3 text-center text-base font-normal textGray1 items-center justify-center">
                        <div className="border border-color4 rounded-md py-2 col-span-3">2016년</div>
                        <div className="border border-color4 rounded-md py-2 col-span-2">2월</div>
                        <div className="border border-color4 rounded-md py-2 col-span-2">2일</div>
                        <div className="py-2 textOrange4">6세</div>
                    </div>
                </div>
                <div className="space-y-4">
                    <span className="text-sm font-medium textGray1">아이 성별</span>
                    <div className="grid grid-cols-2 gap-3 items-center justify-center">
                        <div className="border border-color4 rounded-md py-2 text-center text-base font-medium textGray4 hover:text-[#FF6035] hover:border-[#FF6035]">여아</div>
                        <div className="border border-color4 rounded-md py-2 text-center text-base font-medium textGray4 hover:text-[#FF6035] hover:border-[#FF6035]">남아</div>
                    </div>
                </div>
                <div className="bg-gray3 rounded-md hover:bg-[#ff6035] absolute bottom-6 left-6 right-6">
                    <button className="w-full py-4 text-sm font-semibold text-white">다음</button>
                </div>
            </div>
        </div>
    )
}