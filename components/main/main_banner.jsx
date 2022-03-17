export default function MainBanner() {
    return (
        <div className="">
            <div className='w-full relative'>
                <img src="/images/banner.png" className="w-full" alt="backgroun_img" />
                <img src="/images/arrow-right-circle.png" className="absolute bottom-3 right-3" alt="상세보기버튼" />
                <div className="absolute left-4 top-24 text-xs font-semibold text-white bg5 rounded-2xl py-1 px-2">99명 참여중 👦</div>
                <p className="absolute left-4 top-36 textWhite text-base font-extrabold">A-Z까지 파닉스 워크북 풀기</p>
                <div
                    className="absolute left-4 top-44 text-xs font-bold textOrange1 rounded"
                    style={{ backgroundColor: "rgba(219, 239, 253, 0.2)", padding: "3px 4px", }}
                >
                    <div>영어</div>
                </div>

                <div className="flex justify-center absolute left-1/2" style={{ bottom: "12px", transform: "translate(-50%, -50%)" }}>
                    <div className='w-1.5 h-1.5 mr-1.5 bg-gray3 rounded-full' />
                    <div className='w-1.5 h-1.5 mr-1.5 bg-gray3 rounded-full' />
                    <div className='w-1.5 h-1.5 mr-1.5 bg-gray3 rounded-full' />
                    <div className='w-1.5 h-1.5 mr-1.5 bg5 rounded-full' />
                    <div className='w-1.5 h-1.5 mr-1.5 bg-gray3 rounded-full' />
                </div>



            </div>


        </div>
    )
}