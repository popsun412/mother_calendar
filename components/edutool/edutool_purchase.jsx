import moment from 'moment';
import React from 'react';

const EduToolPurchase = () => {

    const data = [
        // {
        //     title: '직업체험 테마파크 키자니아',
        //     data: '20220107',
        //     imgUrl : 'https://picsum.photos/id/511/200/200',
        //     tag1: '영어',
        //     tag2: '대전집'
        // },
        // {
        //     title: '직업체험 테마파크 키자니아',
        //     data: '20220107',
        //     imgUrl : 'https://picsum.photos/id/512/200/200',
        //     tag1: '영어',
        //     tag2: '대전집'
        // },
        // {
        //     title: '직업체험 테마파크 키자니아',
        //     data: '20220107',
        //     imgUrl : 'https://picsum.photos/id/513/200/200',
        //     tag1: '영어',
        //     tag2: '대전집'
        // },
        // {
        //     title: '직업체험 테마파크 키자니아',
        //     data: '20220107',
        //     imgUrl : 'https://picsum.photos/id/514/200/200',
        //     tag1: '영어',
        //     tag2: '대전집'
        // }
    ]

    return (
        <div className='mt-5 mx-5'>
        {
            data.length > 0 ? 
                data.map((item, index) => {
                    return (
                        <div className='flex' key={index} style={{marginBottom: '22px'}}>
                            <div className='mr-4'>
                                <img src={item.imgUrl} className='rounded-md border border-solid border-color4' style={{width: '94px', height: '94px'}}/>
                            </div>
                            <div>
                                <div className='font-semibold' style={{fontSize: '15px', letterSpacing: '-0.3px'}}>{item.title}</div>
                                <div className='textGray3' style={{fontSize: '13px'}}>{moment(item.data).format('YYYY.MM.DD')} 구매</div>
                                <div></div>
                                <div>
                                    <span className='px-1.5 text-xs textGray3 rounded mr-1.5' 
                                        style={{paddingTop: '3px', paddingBottom: '3px', backgroundColor: '#f0f5f8'}}>{item.tag1}</span>
                                    <span className='px-1.5 text-xs textGray3 rounded' 
                                        style={{paddingTop: '3px', paddingBottom: '3px', backgroundColor: '#f0f5f8'}}>{item.tag2}</span>
                                </div>
                            </div>
                        </div>
                    )
                }) : <div className='absolute top-1/2 left-4 right-4' style={{transform: 'translateY(-50%)'}}>
                        <div className='items-center justify-center'>
                            <img src='/images/no_result.png' width={'93px'} height={'113px'} style={{margin: '0 auto'}}/>
                            <div className='text-sm text-center textGray4 mt-2.5' style={{lineHeight: 1.7, letterSpacing: '-0.28px'}}>
                                아이템이 없습니다.<br/>
                                내가 보유중인 아이템으로 채워주세요!
                            </div>
                        </div>
                    </div>
        }
        </div>
    )
}

export default EduToolPurchase;