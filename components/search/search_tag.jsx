import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const SearchTag = () => {
    return (
        <>
            <div className='my-0 mx-6'>
                <h3 className='text-base font-semibold' style={{letterSpacing: '-0.32px'}}>추천 검색</h3>
            </div>
            <div className='mt-4 ml-6 mr-6'>
                <Swiper
                    slidesPerView={3.2}
                    spaceBetween={8}
                    onSlideChange={() => console.log('change slide')}
                    onSwiper={swiper => console.log(swiper)}
                    >
                    <SwiperSlide>
                        <div className='text-xs text-center border border-solid textBlue1 p-2.5' style={{borderRadius: '30px', borderColor: '#7EBCF9'}}>#어쩌구챌린지</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-xs text-center border border-solid textBlue1 p-2.5' style={{borderRadius: '30px', borderColor: '#7EBCF9'}}>#어쩌구챌린지</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-xs text-center border border-solid textBlue1 p-2.5' style={{borderRadius: '30px', borderColor: '#7EBCF9'}}>#어쩌구챌린지</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-xs text-center border border-solid textBlue1 p-2.5' style={{borderRadius: '30px', borderColor: '#7EBCF9'}}>#어쩌구챌린지</div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default SearchTag;