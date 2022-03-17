export default function MainItme() {
    return (
        <div className='border-b-8 border-gary2 pb-8'>
            <div className="flex pl-5 pr-3 pt-6">
                <span className="flex text-xl font-semibold textGray1">인기 교육템</span>
            </div>

            <div className="pt-5 flex w-full overflow-x-scroll scrollbar-hide">
                <div className="mx-7 flex space-x-2">
                    <div className='w-24 flex flex-col rounded-md relative'>
                        <div
                            className="absolute top-0 left-0 rounded-tl-md rounded-br-md py-0.5 px-1.5 text-xs font-normal text-white"
                            style={{ backgroundColor: "#7EBCF9" }}
                        >1위</div>
                        <img src='/images/item1.png' className='w-24 h-24 rounded-lg' />
                        <span className="textGray1 text-sm font-semibold ">가베가족 알파벳 교구</span>
                        <div className="textGray3 text-xs font-normal">영어</div>
                    </div>
                </div>
            </div>
        </div>
    )
}