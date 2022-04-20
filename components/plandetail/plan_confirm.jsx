import React from 'react';
import moment from 'moment';

const PlanConfirm = () => {

    const data = [
        {
            userImgUrl: 'https://picsum.photos/id/1/20',
            imgUrl: '/images/banner.png',
            date: '20220322'
        },
        {
            userImgUrl: 'https://picsum.photos/id/2/20',
            imgUrl: '/images/banner.png',
            date: '20220422'
        },
        {
            userImgUrl: 'https://picsum.photos/id/3/20',
            imgUrl: '/images/banner.png',
            date: '20220522'
        },
        {
            userImgUrl: 'https://picsum.photos/id/4/20',
            imgUrl: '/images/banner.png',
            date: '20220622'
        },
        {
            userImgUrl: 'https://picsum.photos/id/415/20',
            imgUrl: '/images/banner.png',
            date: '20220722'
        },
        {
            userImgUrl: 'https://picsum.photos/id/5/20',
            imgUrl: '/images/banner.png',
            date: '20220822'
        },
        {
            userImgUrl: 'https://picsum.photos/id/6/20',
            imgUrl: '/images/banner.png',
            date: '20220922'
        },
        {
            userImgUrl: 'https://picsum.photos/id/7/20',
            imgUrl: '/images/banner.png',
            date: '20221022'
        },
        {
            userImgUrl: 'https://picsum.photos/id/8/20',
            imgUrl: '/images/banner.png',
            date: '20221122'
        },
        {
            userImgUrl: 'https://picsum.photos/id/9/20',
            imgUrl: '/images/banner.png',
            date: '20221222'
        },
        {
            userImgUrl: 'https://picsum.photos/id/10/20',
            imgUrl: '/images/banner.png',
            date: '20220122'
        }
    ]

    const divClass = (imgUrl) => {
        return "bg-[url('"+imgUrl+"')] bg-center bg-no-repeat bg-cover relative";
    }

    return (
        <div>
            <div className="grid grid-cols-3 gap-1">
                {
                    data.map((item, idx) => {
                        return (
                            <div key={idx} className={divClass(item.imgUrl)} style={{ height: "7.5rem" }}>
                                <div
                                    className="w-full h-full absolute top-0 left-0"
                                    style={{ background: "rgba(0, 0, 0, 0.4)" }}
                                />
                                <span className='block absolute left-0 top-0 pl-2 pt-1.5'>
                                    <img src={item.userImgUrl} className='border border-solid border-white rounded-full'/>
                                </span>
                                <span className='block absolute left-0 bottom-0 pl-2 text-xs text-white font-light' 
                                    style={{paddingBottom: '29px', letterSpacing: '-0.3px'}}>{moment(item.date).format('YYYY년')}</span>
                                <span className='block absolute left-0 bottom-0 pb-2.5 pl-2 text-sm text-white font-normal' 
                                    style={{letterSpacing: '-0.42px'}}>{moment(item.date).format('M월 DD일')}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PlanConfirm;