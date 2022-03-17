export default function MianPlace() {
    return (
        <div className='border-b-8 border-gary2 p-5'>
            <div className="flex flex-col pb-5">
                <span className="flex text-xl font-semibold textGray1">인기 체험장소</span>
            </div>

            <div className='flex flex-col space-y-5'>
                <div className="flex space-x-4">
                    <div className='w-24 flex flex-col rounded-md relative'>
                        <div
                            className="absolute top-0 left-0 rounded-tl-md rounded-br-md py-0.5 px-1.5 text-xs font-normal text-white"
                            style={{ backgroundColor: "#7EBCF9" }}
                        >1위</div>
                        <img className="w-full h-full rounded-lg" src="/images/place1.png" />
                    </div>
                    <div className="flex-auto flex flex-col">
                        <span>직업체험 테마파크 키자니아</span>
                        <div className="textGray3 text-xs font-normal">영어</div>
                    </div>
                </div>
            </div>
        </div>
    )
}