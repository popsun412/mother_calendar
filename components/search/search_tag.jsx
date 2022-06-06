import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import network from '../../util/network';
import Link from 'next/link';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const SearchTag = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await network.post('/search/recommTags');
            res.data ? setData(res.data) : null;
        }
        getData();
    }, [])

    const rendering = () => {
        const result = [];
        for (let i = 0; i < data.length; i++) {
            result.push(
                <SwiperSlide key={i}>
                    <Link
                        href={{ pathname: `/result/`, query: { value: data[i] } }}
                        as={`/result/`}
                        passHref
                    >
                        <div className='text-xs text-center border border-solid textBlue1 p-2.5' style={{ borderRadius: '30px', borderColor: '#7EBCF9' }}>{"#" + data[i]}</div>
                    </Link>
                </SwiperSlide>
            );
        }
        return result;
    };

    return (
        <>
            <div className='my-0 mx-6'>
                <h3 className='text-base font-semibold' style={{ letterSpacing: '-0.32px' }}>추천 검색</h3>
            </div>
            <div className='mt-4 ml-6 mr-6'>
                <Swiper
                    slidesPerView={3.2}
                    spaceBetween={8}
                    onSlideChange={() => console.log('change slide')}
                    onSwiper={swiper => console.log(swiper)}
                >
                    {rendering()}
                </Swiper>
            </div>
        </>
    )
}

export default SearchTag;