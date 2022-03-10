import Image from 'next/image';
import PlanTitle from './plan_title';

export default function PlanListDay() {
    return (
        <div className="w-full h-full overflow-y-auto flex-col items-stretch bg-white px-5 pt-4" style={{ borderTopRightRadius: "15px" }}>
            <div className="flex py-4">
                <div className="w-7 h-7 my-1.5 checkbox m-2 text-center">
                    <Image src="/images/checkV.png" width={16} height={11} alt={"체크"} />
                </div>
                <div className="flex flex-col flex-auto ml-4">
                    <PlanTitle title="대교 벽보 한글 읽기" />
                    <span className="text-xs textGray3 pt-1">오후 1시 ~ 오후 2시</span>
                </div>
            </div>
        </div>
    )
}