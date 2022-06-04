/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function EmptyPlan() {
    return (
        <>
            <div className="w-full h-full rounded-t-2xl bg-white flex items-center justify-center">
                <div className="flex items-center justify-center flex-col">
                    <img src="/images/img-empty.png" className="w-24 h-[6.75rem] mb-3" />
                    <span className="text-center text-base font-medium textGray2">오늘 하루 계획을<br />채워주세요!</span>
                </div>
            </div>
        </>
    )
}