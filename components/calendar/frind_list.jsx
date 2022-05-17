
export default function FriendList() {
    return (
        <div className="w-full h-full verflow-y-scroll scrollbar-hide bg-gray2">
            <div className="flex  py-4 items-center justify-center">
                <svg className="w-7 h-8 ml-1 textGray2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span className="flex flex-auto justify-center">추천 계정</span>
            </div>
            <p className="text-center mb-6">새로운 이웃을 추가해보세요!</p>
            <div className="grid grid-cols-2 gap-3 px-5">
                <div className="flex flex-col bg-white rounded-lg py-4">
                    <img src="/images/ellipse1.png" className="m-auto mb-2" style={{ width: "4.5rem", height: "4.5rem" }} />
                    <p className="text-center textGray1 font-normal text-lg mb-2 truncate w-24 m-auto">가나아자아자아자</p>
                    <div className="flex items-center justify-center">
                        <span className="px-2 py-1 mb-4 text-xs font-normal border-blue3 textBlue1 rounded-full border text-center">5세, 서울, 엄마표</span>
                    </div>
                    <div className="flex itmes-center justify-center">
                        <button type="button" className="text-center text-xs font-semibold text-white bg-blue4 rounded-md py-1.5 px-6">프로필 방문</button>
                    </div>
                </div>
            </div>
        </div>
    )
}