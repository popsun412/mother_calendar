import Image from 'next/image';

export default function MainBanner() {
    return (
        <div className="p-5 pb-3">
            <div className='relative w-full h-40 mb-3'>
                <Image src="/images/Frame 7406.png" layout='fill' width="100%" height="100%" />
            </div>

            <div className="flex justify-center">
                <div className='w-1.5 h-1.5 mr-1.5 bg-gray3 rounded-full' />
                <div className='w-1.5 h-1.5 mr-1.5 bg-gray3 rounded-full' />
                <div className='w-1.5 h-1.5 mr-1.5 bg-gray3 rounded-full' />
                <div className='w-1.5 h-1.5 mr-1.5 bg5 rounded-full' />
                <div className='w-1.5 h-1.5 mr-1.5 bg-gray3 rounded-full' />
            </div>
        </div>
    )
}