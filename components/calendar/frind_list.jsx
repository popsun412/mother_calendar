
export default function FriendList() {
    return (
        <div className="w-full h-full verflow-y-scroll scrollbar-hide bg-gray2">
            <div className="flex px-5 py-11">
                <img src='/images/back_ic.png' className="flex w-2 h-4" width={8} height={16} />
                <span className="flex flex-auto justify-center">추천 계정</span>
            </div>
            <p className="text-center mb-8">새로운 이웃을 추가해보세요!</p>
            <div className="grid grid-cols-2 gap-3 px-5">
                <div className="flex flex-col bg-white rounded-lg py-4">
                    <img src="/images/ellipse1.png" className="m-auto mb-2 flex flex-col" style={{ width: "4.5rem", height: "4.5rem" }} />
                    <span className="flex flex-col text-center textGray1 font-normal text-lg">수인맘</span>
                    <span className="flex flex-col px-2 py-1 mb-4 text-xs font-normal border-color3 textOrange3 rounded-full border items-center text-center">5세, 서울, 엄마표</span>
                    <span className="flex flex-col text-xs font-semibold text-white bg5 rounded-md py-1 px-5">프로필 방문</span>
                </div>

                {/* 반복 보여주기 위해 복사했어요
                    5세, 서울, 엄마표 / 프로필 방문 크기 잡는거 알려주세요
                */}
                <div className="flex flex-col bg-white rounded-lg py-4">
                    <img src="/images/ellipse1.png" className="m-auto mb-2 flex flex-col" style={{ width: "4.5rem", height: "4.5rem" }} />
                    <span className="flex flex-col text-center textGray1 font-normal text-lg">수인맘</span>
                    <span className="flex flex-col px-2 py-1 mb-4 text-xs font-normal border-color3 textOrange3 rounded-full border items-center text-center">5세, 서울, 엄마표</span>
                    <span className="flex flex-col text-xs font-semibold text-white bg5 rounded-md py-1 px-5">프로필 방문</span>
                </div>
                <div className="flex flex-col bg-white rounded-lg py-4">
                    <img src="/images/ellipse1.png" className="m-auto mb-2 flex flex-col" style={{ width: "4.5rem", height: "4.5rem" }} />
                    <span className="flex flex-col text-center textGray1 font-normal text-lg">수인맘</span>
                    <span className="flex flex-col px-2 py-1 mb-4 text-xs font-normal border-color3 textOrange3 rounded-full border items-center text-center">5세, 서울, 엄마표</span>
                    <span className="flex flex-col text-xs font-semibold text-white bg5 rounded-md py-1 px-5">프로필 방문</span>
                </div>

            </div>
        </div>
    )
}