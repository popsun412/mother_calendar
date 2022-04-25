import React, { useState } from 'react';

const Parents = () => {

    const data = [
        {
            title: '직업체험 테마파크 키자니아',
            imgUrl: 'https://picsum.photos/id/510/100/100',
            tag1: '서울',
            tag2: '자연동물'
        },
        {
            title: '직업체험 테마파크 키자니아',
            imgUrl: 'https://picsum.photos/id/511/100/100',
            tag1: '서울',
            tag2: '자연동물'
        },
        {
            title: '직업체험 테마파크 키자니아',
            imgUrl: 'https://picsum.photos/id/512/100/100',
            tag1: '서울',
            tag2: '자연동물'
        },
        {
            title: '직업체험 테마파크 키자니아',
            imgUrl: 'https://picsum.photos/id/513/100/100',
            tag1: '서울',
            tag2: '자연동물'
        },
        {
            title: '직업체험 테마파크 키자니아',
            imgUrl: 'https://picsum.photos/id/514/100/100',
            tag1: '서울',
            tag2: '자연동물'
        },
        {
            title: '직업체험 테마파크 키자니아',
            imgUrl: 'https://picsum.photos/id/515/100/100',
            tag1: '서울',
            tag2: '자연동물'
        }
    ]

    const [filterValue, setFilterValue] = useState(true);

    const filterClick = () => {
        setFilterValue(!filterValue);

        if (filterValue) {
            data.sort((a, b) => {
                return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
            })
        } else {
            data.sort((a, b) => {
                return a.title > b.title ? -1 : a.title > b.title ? 1 : 0;
            })
        }
    }

    return (
        <div>
            <header className='sticky top-0 left-0 right-0 visible opacity-100 pb-3.5 bg-white z-100' style={{marginBottom: '-50px'}}>
                <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white border-b border-solid border-gray3' style={{height: '50px'}}>
                    <div className='flex-1 flex items-center'>
                        <img src='/images/ic_back.png' onClick={window.history.back()}/>
                        <div className='my-0 mx-auto text-base font-medium' style={{letterSpacing: '-0.3px'}}>기타</div>
                    </div>
                </div>
            </header>
            <main className='my-14'>
                <div className='mx-4'>
                    <div onClick={filterClick} className='block relative' style={{height: '26px'}}>
                        <div className='block absolute right-0'>
                            <span className='bg-gray2 py-1.5 px-2 text-xs text-center textGray2 rounded'>↑↓ 이름순</span>
                        </div>
                    </div>
                    <div className='mt-5'>
                        {
                            data.map((item, idx) => {
                                return (
                                    <div className='flex mt-5' key={idx}>
                                        <div className='mr-4'>
                                            <img src={item.imgUrl} className='rounded-md'/>
                                        </div>
                                        <div>
                                            <h3 className='text-base font-semibold mb-1.5' style={{letterSpacing: '-0.3px'}}>{item.title}</h3>
                                            <div className='flex'>
                                                <span className='py-1 px-1.5 mr-1.5 rounded text-xs textGray3' style={{backgroundColor: '#f0f5f8'}}>{item.tag1}</span>
                                                <span className='py-1 px-1.5 mr-1.5 rounded text-xs textGray3' style={{backgroundColor: '#f0f5f8'}}>{item.tag2}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Parents;