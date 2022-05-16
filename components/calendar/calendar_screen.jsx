export default function CalendarScreen() {
    return (
        <>
            {/* 내 유저 계획 추가하기 전 화면 */}
            {/* <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                <div className="flex items-center justify-center flex-col">
                    <img src="/images/img-empty.png" className="w-24 h-[6.75rem] mb-3" />
                    <span className="text-center text-base font-medium textGray2">오늘 하루 계획을<br />채워주세요!</span>
                </div>
            </div> */}

            {/* 다른 유저 비공개 화면 */}
            <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                <div className="flex items-center justify-center flex-col">
                    <img src="/images/img-locked.png" className="w-24 h-[6.75rem] mb-3" />
                    <span className="text-center text-base font-medium textGray2">비공개 캘린더입니다.</span>
                </div>
            </div>
        </>
    )
}