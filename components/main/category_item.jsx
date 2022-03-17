export default function CategroyItem() {
    return (
        <div className="px-4 flex flex-col overflow-h-scroll scrollbar-hide">
            <div className="flex justify-center align-middle border border-color5 rounded w-16 h-7 my-3">
                <img src="/images/filter.png" className="flex w-3 h-3 mr-1" />
                {/* 필터 오른쪽으로 옮겨야 하고, 글자랑 이미지 세로로 가운데 정렬해야함 */}
                <span className="flex textGray3 font-normal text-sm">필터</span>
            </div>
            <div className='grid grid-cols-2 gap-4 w-full'>
                <div>
                    <img className="w-full h-auto" src="/images/item1.png" />
                    <span className="textGray1 text-sm font-semibold ">가베가족 알파벳 교구</span>
                    <div className="textGray3 text-xs font-normal">영어</div>
                </div>
                <div>
                    <img className="w-full h-auto" src="/images/item1.png" />
                    <span className="textGray1 text-sm font-semibold ">가베가족 알파벳 교구</span>
                    <div className="textGray3 text-xs font-normal">영어</div>
                </div>
                <div>
                    <img className="w-full h-auto" src="/images/item1.png" />
                    <span className="textGray1 text-sm font-semibold ">가베가족 알파벳 교구</span>
                    <div className="textGray3 text-xs font-normal">영어</div>
                </div>
            </div>
        </div>
    )
}