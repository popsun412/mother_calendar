export default function PlanItemAdd() {
    return (
        <>
            <div className="flex py-4 items-center justify-center">
                <svg class="w-7 h-8 ml-1 textGray2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span className="flex-auto text-center text-base font-medium textGray1">보관함</span>
            </div>
            <span className="text-sm font-normal textGray2 flex items-center justify-center my-3">추가할 아이템을 선택해주세요.</span>

            <div>
                <div className="grid grid-cols-4 text-center border-b-[0.38px] border-gary4 mb-2.5 justify-center items-center" id="myTab" data-tabs-toggle="#myTabContent">
                    <span className="textGray4 font-normal text-sm py-3 hover:border-b-2 hover:text-[#3c81e1] hover:border-[#3c81e1] hover:font-semibold" aria-selected="true">책장</span>
                    <span className="textGray4 font-normal text-sm py-3 hover:border-b-2 hover:text-[#3c81e1] hover:border-[#3c81e1] hover:font-semibold" aria-selected="false">교구장</span>
                    <span className="textGray4 font-normal text-sm py-3 hover:border-b-2 hover:text-[#3c81e1] hover:border-[#3c81e1] hover:font-semibold" aria-selected="false">학원지도</span>
                    <span className="textGray4 font-normal text-sm py-3 hover:border-b-2 hover:text-[#3c81e1] hover:border-[#3c81e1] hover:font-semibold" aria-selected="false">체험지도</span>
                </div>

                <div className="h-screen">
                    <div className="flex fixed right-4 bottom-6 rounded-full bg5 p-2 shadow-md">
                        <svg class="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                    </div>
                    {/* 책장 */}
                    {/* <div className="flex px-5">
                        <div className="flex flex-col">
                            <div className="flex py-2.5">
                                <div>
                                    <img src="/images/banner.png" className="w-24 h-24 rounded-md mr-3.5" />
                                </div>
                                <div className="flex flex-col flex-wrap">
                                    <p className="text-sm font-semibold textGray1 mb-1">직업체험 테마파크 키자니아</p>
                                    <span className="text-xs font-normal textGray3 mb-1.5">2022.01.07 구매</span>
                                    <div className="flex mb-1.5">
                                        <svg class="w-4 h-4 textOrange5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg class="w-4 h-4 textOrange5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg class="w-4 h-4 textOrange5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg class="w-4 h-4 textOrange5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg class="w-4 h-4 textGray5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    </div>
                                    <div className="space-x-1">
                                        <span className="bg-[#f0f5f8] text-xs font-medium textGray3 rounded px-1.5 py-0.5">대전집</span>
                                        <span className="bg-[#f0f5f8] text-xs font-medium textGray3 rounded px-1.5 py-0.5">자연 동물</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* 아이템이 없습니다 */}
                    <div className="flex justify-center text-center h-full pt-36">
                        <span className="text-sm font-normal textGray4">
                            아이템이 없습니다.<br />
                            내가 보유중인 아이템으로 채워주세요!
                        </span>
                    </div>

                    {/* 교육장 */}
                    {/* <div></div> */}
                </div>




            </div>

        </>
    )
}