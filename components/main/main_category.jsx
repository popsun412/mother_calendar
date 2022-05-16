import { ChevronLeftRounded } from '@material-ui/icons';
import CategroyItem from './category_item';
import CategroyPlace from './category_place';

export default function MainCategory() {
    return (
        <>
            <div className='px-5 pt-10 pb-4'>
                <div className="flex font-normal text-base textGray1">
                    <img src='/images/back_ic.png' className="flex w-2 h-4" />
                    <span className="flex flex-auto justify-center">분야</span>
                </div>
            </div>
            <div className='flex w-full overflow-x-scroll scrollbar-hide px-5'>
                <div className='flex space-x-0'>
                    <div className='p-3 flex flex-col textGray2 font-normal text-xs bg-gray2' style={{ borderRadius: "1.25rem", width: "3.25rem" }}>
                        <img src='/images/all.png' className="m-auto w-7 h-7" />
                        <span className='text-center mt-2 textGray2 font-normal text-xs'>전체</span>
                    </div>
                    <div className='p-3 flex flex-col textGray2 font-normal text-xs' style={{ width: "3.25rem" }}>
                        <img src='/images/category1.png' className="m-auto w-7 h-7" />
                        <span className='text-center mt-2 textGray2 font-normal text-xs'>국어</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row text-center border-b border-gary4 textGray3 font-normal text-sm">
                <div className='basis-1/6 py-3' />
                <div className='basis-2/6 py-3'>계획</div>
                <div className='basis-1/6 py-3' />
                <div className='basis-2/6 py-3 textGray1 font-semibold border-b-2 border-gary1'>아이템</div>
                <div className='basis-1/6 py-3' />
            </div>

            <CategroyPlace />
            {/* <CategroyItem /> */}
        </>
    )
}