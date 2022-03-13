import Image from 'next/image';

export default function MainCategory() {
    return (
        <div className="px-7 pb-4 flex flex-col border-b-8 border-gary2">
            <div className="flex">
                <div className="flex flex-col items-center flex-1 relative p-3.5">
                    <Image src="/images/category1.png" layout='intrinsic' width="100%" height="100%" />
                    <span className='pt-2.5'>국어</span>
                </div>
                <div className="flex flex-col items-center flex-1 relative p-3.5">
                    <Image src="/images/category2.png" layout='intrinsic' width="100%" height="100%" />
                    <span className='pt-2.5'>영어</span>
                </div>
                <div className="flex flex-col items-center flex-1 relative p-3.5">
                    <Image src="/images/category3.png" layout='intrinsic' width="100%" height="100%" />
                    <span className='pt-2.5'>수학</span>
                </div>
                <div className="flex flex-col items-center flex-1 relative p-3.5">
                    <Image src="/images/category4.png" layout='intrinsic' width="100%" height="100%" />
                    <span className='pt-2.5'>과학</span>
                </div>
            </div>

            <div className="flex">
                <div className="flex flex-col items-center flex-1 relative p-3.5">
                    <Image src="/images/category1.png" layout='intrinsic' width="100%" height="100%" />
                    <span className='pt-2.5'>국어</span>
                </div>
                <div className="flex flex-col items-center flex-1 relative p-3.5">
                    <Image src="/images/category2.png" layout='intrinsic' width="100%" height="100%" />
                    <span className='pt-2.5'>영어</span>
                </div>
                <div className="flex flex-col items-center flex-1 relative p-3.5">
                    <Image src="/images/category3.png" layout='intrinsic' width="100%" height="100%" />
                    <span className='pt-2.5'>수학</span>
                </div>
                <div className="flex flex-col items-center flex-1 relative p-3.5">
                    <Image src="/images/category4.png" layout='intrinsic' width="100%" height="100%" />
                    <span className='pt-2.5'>과학</span>
                </div>
            </div>
        </div>
    )
}