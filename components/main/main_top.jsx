import Image from 'next/image';

export default function MainTop() {
    return (
        <div className='flex pt-5 px-4 pb-2 mb-5'>
            <div className="flex flex-nono mr-3.5">
                <Image src="/images/logo.png" width={129} height={45} />
            </div>
            <div className='border rounded-3xl border-orange4 h-8 flex flex-1 self-center'>
            </div>
        </div>
    )
}