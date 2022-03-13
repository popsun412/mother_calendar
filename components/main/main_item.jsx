import Image from 'next/image';
import { ChevronRightRounded } from '@material-ui/icons';

export default function MainItme() {
    return (
        <>
            <div className="flex justify-between pl-5 pr-3 pt-6">
                <span className="flex text-2xl font-semibold textGray1 mr-2">인기 교육템</span>
                <div className="flex items-center">
                    <span>더보기</span>
                    {/* <Image src="/images/Vector.png" width={5} height={10} /> */}
                    <ChevronRightRounded width={5} height={10} />
                </div>
            </div>

            <div className="pt-5 pl-7 items-stretch">
                <div className='w-24 h-24'>
                    <div className=" rounded-lg relative">
                        <Image src="/images/item1.png" layout="responsive" width="100%" height="100%" />
                    </div>
                    <div>
                        <span>가베가족 알파벳 교구</span>
                    </div>
                </div>

            </div>
        </>
    )
}