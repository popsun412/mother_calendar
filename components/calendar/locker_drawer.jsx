/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const LockerDrawer = (props) => {
    return (
        <div className="h-screen px-6 flex flex-col">
            <h3 className='text-2xl font-semibold py-6'>보관함</h3>
            <div className="flex-auto flex flex-col justify-around">
                <Link href={{ pathname: '/bookshelf', query: { userUid: props.userUid ?? "" } }} passHref>
                    <div className='flex justify-center items-center'
                        style={{ width: '200px', height: '140px', borderRadius: '15px', backgroundColor: '#f8f6f5', marginBottom: '18px' }}>

                        <div className='text-center'>
                            <div className='flex justify-center'><img src='/images/locker/locker1.png' style={{ width: '44px', height: '44px' }} /></div>
                            <div className='mt-2 text-lg font-semibold'>책장</div>
                            {/* <div className='text-base'>5개</div> */}
                        </div>

                    </div>
                </Link>
                <Link href={{ pathname: '/edutool', query: { userUid: props.userUid ?? "" } }} passHref>
                    <div className='flex justify-center items-center'
                        style={{ width: '200px', height: '140px', borderRadius: '15px', backgroundColor: '#f8f6f5', marginBottom: '18px' }}>
                        <div className='text-center'>
                            <div className='flex justify-center'><img src='/images/locker/locker2.png' style={{ width: '44px', height: '44px' }} /></div>
                            <div className='mt-2 text-lg font-semibold'>교구장</div>
                            {/* <div className='text-base'>5개</div> */}
                        </div>
                    </div>
                </Link>
                <Link href={{ pathname: '/academymap', query: { userUid: props.userUid ?? "" } }} passHref>
                    <div className='flex justify-center items-center'
                        style={{ width: '200px', height: '140px', borderRadius: '15px', backgroundColor: '#f8f6f5', marginBottom: '18px' }}>

                        <div className='text-center'>
                            <div className='flex justify-center'><img src='/images/locker/locker3.png' style={{ width: '44px', height: '44px' }} /></div>
                            <div className='mt-2 text-lg font-semibold'>학원지도</div>
                            {/* <div className='text-base'>5개</div> */}
                        </div>

                    </div>
                </Link>
                <Link href={{ pathname: '/placemap', query: { userUid: props.userUid ?? "" } }} passHref>
                    <div className='flex justify-center items-center'
                        style={{ width: '200px', height: '140px', borderRadius: '15px', backgroundColor: '#f8f6f5', marginBottom: '18px' }}>
                        <div className='text-center'>
                            <div className='flex justify-center'><img src='/images/locker/locker4.png' style={{ width: '44px', height: '44px' }} /></div>
                            <div className='mt-2 text-lg font-semibold'>체험지도</div>
                            {/* <div className='text-base'>5개</div> */}
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default LockerDrawer;