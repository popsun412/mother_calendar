export default function SignIn1() {
    return (
        <>
            <div className="flex py-4 items-center justify-center">
                <svg class="w-7 h-8 ml-1 textGray2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span className="flex-auto text-center text-base font-medium textGray1">회원가입</span>
            </div>
            <div className="pt-4 px-5 text-2xl font-normal textGray1">
                회원님 정보를 입력해주세요.
            </div>
            <div className="pt-9 px-5 space-y-9 h-screen">
                <div className="space-y-4">
                    <span className="text-sm font-medium textGray1">닉네임</span>
                    <div className="border border-color4 rounded-md py-2.5 px-5">
                        <input type="text" placeholder="ex. OO맘" className="placeholder-[#bdbdbd] text-base font-normal w-full" />
                    </div>
                </div>

                <div className="space-y-4">
                    <span className="text-sm font-medium textGray1">성별</span>
                    <div className="grid grid-cols-2 gap-3 items-center justify-center">
                        <div className="border border-color4 rounded-md py-2 text-center text-base font-medium textGray4 hover:text-[#FF6035] hover:border-[#FF6035]">여성</div>
                        <div className="border border-color4 rounded-md py-2 text-center text-base font-medium textGray4 hover:text-[#FF6035] hover:border-[#FF6035]">남성</div>
                    </div>
                </div>

                <div className="space-y-4">
                    <span className="text-sm font-medium textGray1">전화번호</span>
                    <form className="">
                        <div className="items-center justify-center grid grid-cols-3 gap-3">
                            <input type="number" className="border border-color4 rounded-md py-2 text-center placeholder-[#333333] text-base font-normal" placeholder="010" required />
                            <input type="number" className="border border-color4 rounded-md py-2 text-center text-base font-normal" />
                            <input type="number" className="border border-color4 rounded-md py-2 text-center text-base font-normal" />
                        </div>
                    </form>
                </div>

                <div className="space-y-4">
                    <span className="text-sm font-medium textGray1">주소</span>
                    <div className="text-sm font-medium p-2.5 flex items-center justify-start textGray4 bg-gray2 rounded-md">
                        <svg class="w-6 h-6 mr-2.5 textGray1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        지번, 도로명, 건물명으로 검색
                    </div>
                </div>

                <div className="space-y-4 mb-10">
                    <span className="text-sm font-medium textGray1">주 관심사</span>
                    <div className="grid grid-cols-3 gap-3 text-center text-sm font-medium textGray4">
                        <div className="border border-color4 rounded-md py-2 hover:text-[#FF6035] hover:border-[#FF6035]">체험</div>
                        <div className="border border-color4 rounded-md py-2 hover:text-[#FF6035] hover:border-[#FF6035]">엄마표 교육</div>
                        <div className="border border-color4 rounded-md py-2 hover:text-[#FF6035] hover:border-[#FF6035]">사교육</div>
                    </div>
                </div>

                <div className="bg-gray3 rounded-md hover:bg-[#ff6035]">
                    <button className="w-full py-4 text-sm font-semibold text-white">다음</button>
                </div>
            </div>
        </>
    )
}