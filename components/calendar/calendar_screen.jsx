/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function CalendarScreen() {
    return (
        <>
            <div className="w-full h-full rounded-tr-2xl bg-white flex items-center justify-center">
                <div className="flex items-center justify-center flex-col">
                    <img src="/images/img-locked.png" className="w-24 h-[6.75rem] mb-3" />
                    <span className="text-center text-base font-medium textGray2">비공개 캘린더입니다.</span>
                </div>
            </div>
        </>
    )
}