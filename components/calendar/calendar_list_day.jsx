import Image from 'next/image';

export default function PlanListDay() {
    return (
        <div className="w-full h-full overflow-y-auto flex-col items-stretch bg-white px-5 pt-4">
            <div className="flex py-4">
                <div className="w-7 h-7 my-1.5 checkbox m-2 text-center">
                    <Image src="/images/checkV.png" width={16} height={11} alt={"체크"} />
                </div>
                <div className="flex flex-col flex-auto ml-4">
                    <div className="flex">
                        <div
                            className={`flex justify-center items-center px-1 py-0.5 mr-2 rounded text-white text-xs`}
                            style={{ backgroundColor: `${(true) ? "#FF734D" : "#bdbdbd"}` }}
                        >
                            <span>국어</span>
                        </div>
                        <span className="text-sm">페파피그1 영상</span>
                    </div>
                    <span className="text-xs textGray3 pt-1">오후 1시 ~ 오후 2시</span>
                </div>
            </div>


            <div className="flex py-4">
                <div className="w-7 h-7 my-1.5 checkbox m-2 text-center">
                    <Image src="/images/checkV.png" width={16} height={11} alt={"화살표"} />
                </div>
                <div className="flex flex-col flex-auto ml-4">
                    <div className="flex">
                        <div
                            className={`flex justify-center items-center px-1 py-0.5 mr-2 rounded text-white text-xs`}
                            style={{ backgroundColor: `${(false) ? "#FF734D" : "#bdbdbd"}` }}
                        >
                            <span>국어</span>
                        </div>
                        <span className="text-sm textGray4"
                            style={{
                                color: `${(false) ? "#FF734D" : "#bdbdbd"}`,
                                textDecoration: `${(false) ? "" : "line-through"}`
                            }}
                        >페파피그1 영상</span>
                    </div>
                    <span className="text-xs textGray3 pt-1" style={{ color: `${(false) ? "#FF734D" : "#bdbdbd"}` }}>오후 1시 ~ 오후 2시</span>
                </div>
                <div className="items-center"><Image src="/images/magazine.fill.png" width={14} height={21} alt={"화살표"} /></div>
            </div>
        </div>
    )
}