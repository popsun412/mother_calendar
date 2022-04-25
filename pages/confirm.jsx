import React from 'react';

const Confirm = () => {

    const data = [
        {
            date: '20220131',
            img: 'https://picsum.photos/id/1/100/100',
            username: '수민맘',
            tag: '5세 6세 8세, 서울, 엄마표',
            rate: 100,
            favourite: true
        },
        {
            date: '20220131',
            img: 'https://picsum.photos/id/10/100/100',
            username: '가나다라마바사',
            tag: '5세 6세 8세 10세 11세, 서울, 엄마표',
            rate: 100,
            favourite: false
        },
        {
            date: '20220131',
            img: 'https://picsum.photos/id/20/100/100',
            username: '강낭콩',
            tag: '5세 6세 8세, 서울, 엄마표',
            rate: 18,
            favourite: false
        },
        {
            date: '20220131',
            img: 'https://picsum.photos/id/30/100/100',
            username: '비빔밥볶음밥단무지밥',
            tag: '5세, 서울, 엄마표',
            rate: 40,
            favourite: false
        },
        {
            date: '20220131',
            img: 'https://picsum.photos/id/40/100/100',
            username: '세림맘',
            tag: '5세, 서울, 엄마표',
            rate: 40,
            favourite: false
        },
        {
            date: '20220131',
            img: 'https://picsum.photos/id/50/100/100',
            username: '페파피그광팬',
            tag: '5세 6세 8세, 서울, 엄마표',
            rate: 100,
            favourite: false
        },
        {
            date: '20220131',
            img: 'https://picsum.photos/id/60/100/100',
            username: '수민맘',
            tag: '5세 6세 8세, 서울, 엄마표',
            rate: 100,
            favourite: true
        },
        {
            date: '20220131',
            img: 'https://picsum.photos/id/70/100/100',
            username: '수민맘',
            tag: '5세 6세 8세, 서울, 엄마표',
            rate: 100,
            favourite: false
        },
    ]

    return (
        <div>
            <header className='sticky top-0 left-0 right-0 opacity-100 visible' style={{marginBottom: '-50px'}}>
                <div className='flex relative mx-auto my-0 box-border py-4 w-full bg-white' style={{height: '50px'}}>
                    <div className='ml-5' onClick={() => {window.history.back()}}>
                        <img src='/images/ic_back.png' />
                    </div>
                    <div className='my-0 mx-auto'>
                        <span className='px-1.5 py-1 bg5 text-white rounded text-xs mr-2'>영어</span>
                        <span className='text-sm font-medium'>페파피그1 영상</span>
                    </div>
                </div>
            </header>
            <main className='mt-14'>
                <section>
                    <div className='flex my-4 py-4 border-b border-solid border-gary4'>
                        <div className='text-sm ml-5' style={{letterSpacing: '-0.42px'}}>2022년 1월 31일</div>
                        <div className='flex text-sm mr-5 ml-auto items-center' style={{letterSpacing: '-0.13px'}}>
                            👦 <span className='ml-1 mr-1 textOrange4 font-semibold'>60</span> 명 인증 완료
                            <img src='/images/ic_arrow-right-circle.png' className='ml-2' style={{width: '17px', height: '17px'}}/>
                        </div>
                    </div>
                    <div className='mx-5 mt-6'>
                    {
                        data.map((item, idx) => {
                            return (
                                <div className='flex mb-6' key={idx}>
                                    <div className='flex items-center w-3/4 h-9'>
                                            <div className='mr-2 block absolute' style={{width: '22px', height: '22px'}}>
                                                <img src={item.img} className='rounded-full'/>
                                            </div>
                                            <div className='mr-2 ml-8 text-sm whitespace-nowrap'>{item.username}</div>
                                            <div className='border border-solid border-color3 textOrange3 whitespace-nowrap' 
                                                style={{padding: '4px 9px 5px', fontSize: '11px', borderRadius: '13.5px'}}>{item.tag}</div>
                                    </div>
                                    <div className='bg-white flex items-center w-1/4 h-9'>
                                        <div className='text-right text-sm textGray3 w-3/5'>{item.rate}%</div>
                                        <div className='w-2/5'>
                                        {
                                            item.favourite ? <img src='/images/like_on.png' className='m-auto' style={{width: '22px', height: '22px'}}/>
                                                : <img src='/images/like_off.png' className='m-auto' style={{width: '22px', height: '22px'}}/>
                                        }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Confirm;