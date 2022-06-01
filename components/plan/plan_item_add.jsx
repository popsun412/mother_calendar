export default function PlanItemAdd() {
    return (
        <div className="flex flex-col w-screen h-screen overflow-y-auto">
            <div className="flex py-4 items-center justify-center">
                <svg className="w-7 h-8 ml-1 textGray2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span className="flex-auto text-center text-base font-medium textGray1">보관함</span>
            </div>
            <span className="text-sm font-normal textGray2 flex items-center justify-center my-3">추가할 아이템을 선택해주세요.</span>

            <div className="flex-auto flex flex-col">
                <div className="grid grid-cols-4 text-center border-b-[0.38px] border-gary4 mb-2.5 justify-center items-center" id="myTab" data-tabs-toggle="#myTabContent">
                    <span className="textGray4 font-normal text-sm py-3 hover:border-b-2 hover:text-[#3c81e1] hover:border-[#3c81e1] hover:font-semibold" aria-selected="true">책장</span>
                    <span className="textGray4 font-normal text-sm py-3 hover:border-b-2 hover:text-[#3c81e1] hover:border-[#3c81e1] hover:font-semibold" aria-selected="false">교구장</span>
                    <span className="textGray4 font-normal text-sm py-3 hover:border-b-2 hover:text-[#3c81e1] hover:border-[#3c81e1] hover:font-semibold" aria-selected="false">학원지도</span>
                    <span className="textGray4 font-normal text-sm py-3 hover:border-b-2 hover:text-[#3c81e1] hover:border-[#3c81e1] hover:font-semibold" aria-selected="false">체험지도</span>
                </div>

                <div className="flex-auto flex flex-col">
                    <div className="flex fixed right-4 bottom-6 rounded-full bg5 p-2 shadow-md">
                        <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                    </div>



                    <div className='flex mx-0 my-5'>
                        <div className='mr-3 block relative'>
                            <span className='absolute block top-0 py-1 px-2 text-xs text-white bg-blue3 rounded-tl-md rounded-br-md'>위</span>
                            <img src={""} width={'96px'} height={'96px'} className='rounded-md' style={{ width: '94px', height: '94px' }} />

                            <img src={`/images/ic_${true ? 'bookmarked.png' : 'bookmark.png'}`}
                                className='absolute block bottom-0 right-0 mr-2 mb-1.5' />
                        </div>
                        <div>
                            <div className='text-base font-semibold' style={{ letterSpacing: '-0.3px' }}>{"item.name"}</div>
                            <div className='flex mt-1.5'>
                                <span className='h-5 py-0.5 px-1.5 mr-1.5 rounded text-xs' style={{ backgroundColor: '#f0f5f8' }}>{"item.field"}</span>
                                <span className='h-5 py-0.5 px-1.5 mr-1.5 rounded text-xs' style={{ backgroundColor: '#f0f5f8' }}>{"item.subject"}</span>
                            </div>
                        </div>
                    </div>

                    {/* 아이템이 없습니다 */}
                    <div className="flex-auto flex justify-center items-center text-center">
                        <span className="text-sm font-normal textGray4">
                            아이템이 없습니다.<br />
                            내가 보유중인 아이템으로 채워주세요!
                        </span>
                    </div>
                </div>




            </div>

        </div>
    )
}