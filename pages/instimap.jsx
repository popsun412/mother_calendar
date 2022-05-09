import React from 'react';
import Link from 'next/link';

const InstiMap = () => {

    const onClick = (param, param2) => () => {

    }

    return (
        <div>
            <header className='sticky top-0 left-0 right-0 visible opacity-100 pb-3.5 bg-white z-100' style={{marginBottom: '-50px'}}>
                <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white border-b border-solid border-gray3' style={{height: '50px'}}>
                    <div className='flex-1 flex items-center'>
                        <div style={{width: '50px'}}>
                            <img src='/images/ic_back.png' onClick={() => {window.history.back()}}/>
                        </div>
                        <div className='my-0 mx-auto text-base font-medium' style={{letterSpacing: '-0.3px'}}>체험</div>
                        <div className='flex mr-2' style={{width: '50px'}}>
                            <Link href='/exmap'>
                                <img src='/images/ic_map.png' className='mr-3'/>
                            </Link>
                            <img src='/images/filter.png' onClick={onClick('right', true)}/>
                        </div>
                    </div>
                </div>
            </header>
            <main style={{marginTop: '50px'}}>
                <section className='mx-5' style={{paddingTop: '18.7px'}}>
                    <div className='flex' style={{marginBottom: '22px'}}>
                        <div style={{marginRight: '15px'}}>
                            <img src='/images/place1.png' style={{width: '94px', height: '94px'}}/>
                        </div>
                        <div>
                            <div className='font-semibold' style={{fontSize: '15px', letterSpacing: '-0.3px', color: '#333333'}}>직업체험 테마파크 키자니아</div>
                            <div style={{marginTop: '5px'}}>
                                <span className='text-xs textGray3 px-1.5' style={{marginRight: '5px', backgroundColor: '#f0f5f8', paddingTop: '3px', paddingBottom: '3px'}}>서울</span>
                                <span className='text-xs textGray3 px-1.5' style={{backgroundColor: '#f0f5f8', paddingTop: '3px', paddingBottom: '3px'}}>자연 동물</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex' style={{marginBottom: '22px'}}>
                        <div style={{marginRight: '15px'}}>
                            <img src='/images/place1.png' style={{width: '94px', height: '94px'}}/>
                        </div>
                        <div>
                            <div className='font-semibold' style={{fontSize: '15px', letterSpacing: '-0.3px', color: '#333333'}}>직업체험 테마파크 키자니아</div>
                            <div style={{marginTop: '5px'}}>
                                <span className='text-xs textGray3 px-1.5' style={{marginRight: '5px', backgroundColor: '#f0f5f8', paddingTop: '3px', paddingBottom: '3px'}}>서울</span>
                                <span className='text-xs textGray3 px-1.5' style={{backgroundColor: '#f0f5f8', paddingTop: '3px', paddingBottom: '3px'}}>자연 동물</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex' style={{marginBottom: '22px'}}>
                        <div style={{marginRight: '15px'}}>
                            <img src='/images/place1.png' style={{width: '94px', height: '94px'}}/>
                        </div>
                        <div>
                            <div className='font-semibold' style={{fontSize: '15px', letterSpacing: '-0.3px', color: '#333333'}}>직업체험 테마파크 키자니아</div>
                            <div style={{marginTop: '5px'}}>
                                <span className='text-xs textGray3 px-1.5' style={{marginRight: '5px', backgroundColor: '#f0f5f8', paddingTop: '3px', paddingBottom: '3px'}}>서울</span>
                                <span className='text-xs textGray3 px-1.5' style={{backgroundColor: '#f0f5f8', paddingTop: '3px', paddingBottom: '3px'}}>자연 동물</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex opacity-40' style={{marginBottom: '22px'}}>
                        <div style={{marginRight: '15px'}}>
                            <img src='/images/place1.png' style={{width: '94px', height: '94px'}}/>
                        </div>
                        <div>
                            <div className='font-semibold mb-1' style={{fontSize: '15px', letterSpacing: '-0.3px', color: '#333333'}}>직업체험 테마파크 키자니아</div>
                            <div className='textGray3 mb-1' style={{fontSize: '13px'}}>2022.01.07 방문</div>
                            <div className='flex mb-1'>
                                <img src='/images/ic_star_color.png' />
                                <img src='/images/ic_star_color.png' />
                                <img src='/images/ic_star_grey.png' />
                                <img src='/images/ic_star_grey.png' />
                                <img src='/images/ic_star_grey.png' />
                            </div>
                            <div style={{marginTop: '5px'}}>
                                <span className='text-xs textGray3 px-1.5' style={{marginRight: '5px', backgroundColor: '#f0f5f8', paddingTop: '3px', paddingBottom: '3px'}}>서울</span>
                                <span className='text-xs textGray3 px-1.5' style={{backgroundColor: '#f0f5f8', paddingTop: '3px', paddingBottom: '3px'}}>자연 동물</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex opacity-40' style={{marginBottom: '22px'}}>
                        <div style={{marginRight: '15px'}}>
                            <img src='/images/place1.png' style={{width: '94px', height: '94px'}}/>
                        </div>
                        <div>
                            <div className='font-semibold mb-1' style={{fontSize: '15px', letterSpacing: '-0.3px', color: '#333333'}}>직업체험 테마파크 키자니아</div>
                            <div className='textGray3 mb-1' style={{fontSize: '13px'}}>2022.01.07 방문</div>
                            <div className='flex mb-1'>
                                <img src='/images/ic_star_color.png' />
                                <img src='/images/ic_star_color.png' />
                                <img src='/images/ic_star_grey.png' />
                                <img src='/images/ic_star_grey.png' />
                                <img src='/images/ic_star_grey.png' />
                            </div>
                            <div style={{marginTop: '5px'}}>
                                <span className='text-xs textGray3 px-1.5' style={{marginRight: '5px', backgroundColor: '#f0f5f8', paddingTop: '3px', paddingBottom: '3px'}}>서울</span>
                                <span className='text-xs textGray3 px-1.5' style={{backgroundColor: '#f0f5f8', paddingTop: '3px', paddingBottom: '3px'}}>자연 동물</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default InstiMap;