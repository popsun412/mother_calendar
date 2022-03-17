{/* 페이지 삭제됨 */ }

import { ChevronLeftRounded } from '@material-ui/icons';

export default function MainItemAdd() {
    return (
        <div className='px-4'>
            <div className="flex py-11 font-normal text-base textGray1">
                <ChevronLeftRounded width={5} height={10} className="flex" />
                <span className="flex flex-auto justify-center">인기 교육템</span>
            </div>

            {/* 이미지 크기를 w-full해서 잡아줘야 할지
            아니면 이미지 크기 154로 고정으로 해서 잡아줘야 하는지 모르겠어*/}

            {/* w-full 경우 - 가운데 간격이 더 있어야 하지 않을까? */}
            <div className='grid grid-cols-2 gap-2' style={{ backgroundColor: "pink" }}>
                <div className=''>
                    <img className="w-full h-auto" src="/images/item1.png" />
                    <span>가베가족 알파벳 교구</span>
                    <div className="flex">
                        dd
                    </div>
                </div>
                <div className=''>
                    <img className="w-full h-auto" src="/images/item1.png" />
                    <span>가베가족 알파벳 교구</span>
                    <div className="flex">
                        dd
                    </div>
                </div>

                {/* width: 154고정일 경우 */}
                <div className='' style={{ width: "154px" }}>
                    <img className="w-full h-auto" src="/images/item1.png" />
                    <span>가베가족 알파벳 교구</span>
                    <div className="flex">
                        dd
                    </div>
                </div>
                <div className='' style={{ width: "154px" }}>
                    <img className="w-full h-auto" src="/images/item1.png" />
                    <span>가베가족 알파벳 교구</span>
                    <div className="flex">
                        dd
                    </div>
                </div>

            </div>

        </div>
    )
}