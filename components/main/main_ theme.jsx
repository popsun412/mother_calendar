export default function MainThem() {
    return (
        <div className="p-5">
            <div className="flex flex-col">
                <span className="flex text-xl font-semibold textGray1">인기 테마연계</span>
            </div>
            <div className="flex space-x-2 py-4">
                <div className="px-3 py-2 font-normal text-sm bg4 rounded  text-white bg4">공룡</div>
                <div className="px-3 py-2 font-normal text-sm rounded border border-gary3 textGray4">자동차</div>
                <div className="px-3 py-2 font-normal text-sm rounded border border-gary3 textGray4">놀이터</div>


            </div>

            <div className="flex w-full overflow-x-scroll scrollbar-hide">
                <div className="flex space-x-2">
                    <div className='w-24 flex flex-col'>
                        <div className="w-24 h-24 rounded-lg">
                            <img src="/images/item1.png" width="100%" height="100%" />
                        </div>
                        <span className="text-sm font-semibold textGray1">가베가족 알파벳 교구</span>
                        <div className="textGray3 text-xs font-normal">영어</div>
                    </div>


                </div>
            </div>
        </div>
    )
}