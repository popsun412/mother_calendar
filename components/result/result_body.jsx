import React from 'react';

const ResultBody = (props) => {

    const data = [
        {
            imgUrl: '/images/place1.png',
            title: '직업체험 테마파크 키자니아',
            tag1: '서울',
            tag2: '자연 동물'
        },
        {
            imgUrl: '/images/place1.png',
            title: '직업체험 테마파크 키자니아',
            tag1: '서울',
            tag2: '자연 동물'
        },
        {
            imgUrl: '/images/place1.png',
            title: '직업체험 테마파크 키자니아',
            tag1: '서울',
            tag2: '자연 동물'
        },
        {
            imgUrl: '/images/place1.png',
            title: '직업체험 테마파크 키자니아',
            tag1: '서울',
            tag2: '자연 동물'
        },
        {
            imgUrl: '/images/place1.png',
            title: '직업체험 테마파크 키자니아',
            tag1: '서울',
            tag2: '자연 동물'
        },
        {
            imgUrl: '/images/place1.png',
            title: '직업체험 테마파크 키자니아',
            tag1: '서울',
            tag2: '자연 동물'
        },
        {
            imgUrl: '/images/place1.png',
            title: '직업체험 테마파크 키자니아',
            tag1: '서울',
            tag2: '자연 동물'
        }
    ]

    return (
        <main style={{marginTop: '90px'}}>
            <div style={{margin: '20px'}}>
                {
                    data.length > 0 ? 
                        data.map((item, idx) => {
                            return (
                                item.title.indexOf(props.keyword) > 0 ? 
                                <div className='flex py-3 px-0' key={idx}>
                                    <div style={{marginRight: '15px'}}>
                                        <img src={item.imgUrl} width={'94px'} height={'94px'} className='rounded-md'/>
                                    </div>
                                    <div>
                                        <h3 className='font-semibold text-base' style={{letterSpacing: '-0.3px'}}>{item.title}</h3>
                                        <div>
                                            <span className='text-center font-medium text-xs rounded textGray3 px-1.5 py-1 mr-1.5' style={{backgroundColor: '#f0f5f8'}}>{item.tag1}</span>
                                            <span className='text-center font-medium text-xs rounded textGray3 px-1.5 py-1 mr-1.5' style={{backgroundColor: '#f0f5f8'}}>{item.tag2}</span>
                                        </div>
                                    </div>
                                </div> : <div className='absolute top-1/2 left-4 right-4' style={{transform: 'translateY(-50%)'}} key={idx}>
                                            <div className='items-center justify-center'>
                                                <img src='/images/no_result.png' width={'93px'} height={'113px'} style={{margin: '0 auto'}}/>
                                                <div className='text-sm text-center textGray4 mt-2.5' style={{lineHeight: 1.7, letterSpacing: '-0.28px'}}>검색 결과가 없습니다.</div>
                                            </div>
                                        </div>
                            )
                        }) : <div className='absolute top-1/2 left-4 right-4' style={{transform: 'translateY(-50%)'}}>
                                    <div className='items-center justify-center'>
                                        <img src='/images/no_result.png' width={'93px'} height={'113px'} style={{margin: '0 auto'}}/>
                                        <div className='text-sm text-center textGray4 mt-2.5' style={{lineHeight: 1.7, letterSpacing: '-0.28px'}}>검색 결과가 없습니다.</div>
                                    </div>
                                </div>
                }
            </div>
        </main>
    )
}

export default ResultBody;