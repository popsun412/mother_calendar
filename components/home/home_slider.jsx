import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

const HomeSlider = () => {

    SwiperCore.use([Pagination, Autoplay]);

    const data = [
        {
            people: 99,
            title: 'A-Z까지 파닉스 워크북 풀기',
            tag1: '영어',
            tag2: '영어'
        },
        {
            people: 100,
            title: 'A-Z까지 파닉스 워크북 풀기',
            tag1: '수학',
            tag2: '수학'
        },
        {
            people: 101,
            title: 'A-Z까지 파닉스 워크북 풀기',
            tag1: '국어',
            tag2: '국어'
        }
    ]

    return (
        <section>
            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                autoplay={{delay: 5000}}
                centeredSlides
                onSlideChange={() => console.log('change slide')}
                onSwiper={swiper => console.log(swiper)}
                pagination={{ clickable: true }}
            >
            {
                data.map((item, idx) => {
                    return (
                            <SwiperSlide key={idx}>
                                <img src='/images/banner.png' />
                                <span className='block text-center absolute bottom-28 left-2.5 text-xs text-center text-white w-21 h-6 py-1 px-2 rounded-xl' style={{backgroundColor: '#ff6035'}}>
                                    {item.people}명 참여중👦
                                </span>
                                <span className='bottom-14 left-2.5 block text-center absolute py-2 pr-2.5 text-white text-base font-semibold' style={{letterSpacing: '-0.48px'}}>
                                    {item.title}
                                </span>
                                <div className='flex absolute bottom-8 left-2.5'>
                                    <span className='text-xs font-bold text-center textOrange1 py-1 px-2 mr-2 rounded' style={{backgroundColor: 'rgba(219, 239, 253, 0.2)'}}>{item.tag1}</span>
                                    <span className='text-xs font-bold text-center textOrange1 py-1 px-2 mr-2 rounded' style={{backgroundColor: 'rgba(219, 239, 253, 0.2)'}}>{item.tag2}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                
            </Swiper>
        </section>
    )
}

export default HomeSlider;