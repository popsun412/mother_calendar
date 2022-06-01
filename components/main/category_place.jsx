/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

export default function CategroyPlace() {
    return (
        <div className="px-5 pt-6">
            <div className="pb-8 flex flex-col">
                <div className="flex mb-3.5" style={{ backgroundColor: "red" }}>
                    <img src="/images/num1.png" className="flex w-3.5 h-3.5 mr-1" />
                    <span className="flex textWhite font-semibold text-xs">Step 1 추천 계획</span>
                </div>
                <div className="flex flex-col space-y-4">
                    <div className="flex">
                        <img src="/images/category1.png" className="flex mr-3 w-6 h-6" />
                        <span className="flex flex-auto font-basic text-sm textGray2 items-center">한글 떼기 워크북 풀기</span>
                        <img src="/images/checkV.png" className="flex w-4 h-3" />
                    </div>
                    <div className="flex ">
                        <img src="/images/category1.png" className="flex mr-3 w-6 h-6" />
                        <span className="flex flex-auto font-basic text-sm textGray2 items-center">한글 떼기 워크북 풀기</span>
                        <img src="/images/plus.png" className="flex w-4 h-4" />
                    </div>
                </div>
            </div>

            <div className="pb-8 flex flex-col">
                <div className="flex mb-3.5" style={{ backgroundColor: "red" }}>
                    <img src="/images/num2.png" className="flex w-3.5 h-3.5 mr-1" />
                    <span className="flex textWhite font-semibold text-xs">Step 1 추천 계획</span>
                </div>
                <div className="flex flex-col space-y-4">
                    <div className="flex">
                        <img src="/images/category1.png" className="flex mr-3 w-6 h-6" />
                        <span className="flex flex-auto font-basic text-sm textGray2 items-center">한글 떼기 워크북 풀기</span>
                        <img src="/images/plus.png" className="flex w-4 h-4" />
                    </div>
                    <div className="flex ">
                        <img src="/images/category1.png" className="flex mr-3 w-6 h-6" />
                        <span className="flex flex-auto font-basic text-sm textGray2 items-center">한글 떼기 워크북 풀기</span>
                        <img src="/images/plus.png" className="flex w-4 h-4" />
                    </div>
                </div>
            </div>
        </div>
    )
}