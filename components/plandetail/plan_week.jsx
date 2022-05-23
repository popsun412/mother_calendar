import Link from 'next/link';
import React from 'react';

const PlanWeek = (props) => {

    const { data } = props;

    return (
        <>
            <section className='mb-8 mx-5'>
                <div>
                    <h3 className='text-base font-semibold mb-3' style={{ letterSpacing: '-0.32px' }}>주차별 활동을 참고해보세요.</h3>
                    <div className='mt-4'>
                        <div className='flex items-center justify-between border-t border-b border-solid border-gary4' style={{ padding: '6.5px 0' }}>
                            <div className='flex'>
                                <div className='text-sm textGray2 font-semibold mr-1'>1주차</div>
                                <div style={{ fontSize: '13px', letterSpacing: '-0.26px' }}>우리아이 습관기르기 첫번째</div>
                            </div>
                            <Link href='/guide'>
                                <div className='bg5 text-white' style={{ fontSize: '10px', padding: '1px 5px', borderRadius: '5px' }}>가이드 영상 ▶</div>
                            </Link>
                        </div>
                        <div className='flex items-center justify-between border-b border-solid border-gary4' style={{ padding: '6.5px 0' }}>
                            <div className='flex'>
                                <div className='text-sm textGray2 font-semibold mr-1'>2주차</div>
                                <div style={{ fontSize: '13px', letterSpacing: '-0.26px' }}>우리아이 습관기르기 첫번째</div>
                            </div>
                            <Link href='/guide'>
                                <div className='bg5 text-white' style={{ fontSize: '10px', padding: '1px 5px', borderRadius: '5px' }}>가이드 영상 ▶</div>
                            </Link>
                        </div>
                        <div className='flex items-center justify-between border-b border-solid border-gary4' style={{ padding: '6.5px 0' }}>
                            <div className='flex'>
                                <div className='text-sm textGray2 font-semibold mr-1'>3주차</div>
                                <div style={{ fontSize: '13px', letterSpacing: '-0.26px' }}>우리아이 습관기르기 첫번째</div>
                            </div>
                            <Link href='/guide'>
                                <div className='bg5 text-white' style={{ fontSize: '10px', padding: '1px 5px', borderRadius: '5px' }}>가이드 영상 ▶</div>
                            </Link>
                        </div>
                        <div className='flex items-center justify-between border-b border-solid border-gary4' style={{ padding: '6.5px 0' }}>
                            <div className='flex'>
                                <div className='text-sm textGray2 font-semibold mr-1'>4주차</div>
                                <div style={{ fontSize: '13px', letterSpacing: '-0.26px' }}>우리아이 습관기르기 첫번째</div>
                            </div>
                            <Link href='/guide'>
                                <div className='bg5 text-white' style={{ fontSize: '10px', padding: '1px 5px', borderRadius: '5px' }}>가이드 영상 ▶</div>
                            </Link>
                        </div>
                        <div className='flex items-center justify-between border-b border-solid border-gary4' style={{ padding: '6.5px 0' }}>
                            <div className='flex'>
                                <div className='text-sm textGray2 font-semibold mr-1'>5주차</div>
                                <div style={{ fontSize: '13px', letterSpacing: '-0.26px' }}>우리아이 습관기르기 첫번째</div>
                            </div>
                            <Link href='/guide'>
                                <div className='bg5 text-white' style={{ fontSize: '10px', padding: '1px 5px', borderRadius: '5px' }}>가이드 영상 ▶</div>
                            </Link>
                        </div>
                        <div className='flex items-center justify-between border-b border-solid border-gary4' style={{ padding: '6.5px 0' }}>
                            <div className='flex'>
                                <div className='text-sm textGray2 font-semibold mr-1'>6주차</div>
                                <div style={{ fontSize: '13px', letterSpacing: '-0.26px' }}>우리아이 습관기르기 첫번째</div>
                            </div>
                            <Link href='/guide'>
                                <div className='bg5 text-white' style={{ fontSize: '10px', padding: '1px 5px', borderRadius: '5px' }}>가이드 영상 ▶</div>
                            </Link>
                        </div>
                        <div className='flex items-center justify-between border-b border-solid border-gary4' style={{ padding: '6.5px 0' }}>
                            <div className='flex'>
                                <div className='text-sm textGray2 font-semibold mr-1'>7주차</div>
                                <div style={{ fontSize: '13px', letterSpacing: '-0.26px' }}>우리아이 습관기르기 첫번째</div>
                            </div>
                            <Link href='/guide'>
                                <div className='bg5 text-white' style={{ fontSize: '10px', padding: '1px 5px', borderRadius: '5px' }}>가이드 영상 ▶</div>
                            </Link>
                        </div>
                        <div className='flex items-center justify-between border-b border-solid border-gary4' style={{ padding: '6.5px 0' }}>
                            <div className='flex'>
                                <div className='text-sm textGray2 font-semibold mr-1'>8주차</div>
                                <div style={{ fontSize: '13px', letterSpacing: '-0.26px' }}>우리아이 습관기르기 첫번째</div>
                            </div>
                            <Link href='/guide'>
                                <div className='bg5 text-white' style={{ fontSize: '10px', padding: '1px 5px', borderRadius: '5px' }}>가이드 영상 ▶</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PlanWeek;