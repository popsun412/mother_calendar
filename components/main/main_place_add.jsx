{/* 페이지 삭제됨 */ }

import { ChevronLeftRounded } from '@material-ui/icons';

export default function MainPlaceAdd() {
    return (
        <div className='px-5'>
            <div className="flex justify-center py-11 font-normal text-base textGray1">
                {/* <div className="">
                    <ChevronLeftRounded width={5} height={10} className="flex items-center" />
                </div> */}
                <ChevronLeftRounded width={5} height={10} className="flex items-center" />
                <span className="flex">인기 체험장소</span>
            </div>

            <div className='flex flex-col space-y-2.5'>
                <div className="flex space-x-4">
                    <img src="/images/place1.png" className='flex rounded-lg w-24 h-24' />
                    <div className="flex-auto flex flex-col">
                        <span className='font-base font-semibold textGray1'>직업체험 테마파크 키자니아</span>
                        <div className="flex">

                        </div>
                    </div>
                </div>

                <div className="flex space-x-4">
                    <img src="/images/place1.png" className='flex rounded-lg w-24 h-24' />
                    <div className="flex-auto flex flex-col">
                        <span className='font-base font-semibold textGray1'>직업체험 테마파크 키자니아</span>
                        <div className="flex">

                        </div>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <img src="/images/place1.png" className='flex rounded-lg w-24 h-24' />
                    <div className="flex-auto flex flex-col">
                        <span className='font-base font-semibold textGray1'>직업체험 테마파크 키자니아</span>
                        <div className="flex">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}