import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import network from '../../util/network';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const HomeItem = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await network.post('/best/edu')
            res.data ? setData(res.data) : null;
        }
        getData();
    }, [])

    return (
        <section style={{margin: '0 20px'}}>
            <h3 className='text-xl font-semibold mb-5' style={{letterSpacing: '-0.4px'}}>인기 교육템</h3>
            <div>
                <Swiper
                    slidesPerView={3.1}
                >
                {
                    data.map((item, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <div className='w-24'>
                                    <div className='block relative'>
                                        <span className='absolute block top-0 py-1 px-2 text-xs text-white bg-blue3 rounded-tl-md rounded-br-md'>{item.ranking}위</span>
                                        <img src={item.image} className='rounded-md'/>
                                        <img src={`/images/ic_${item.bookmark? 'bookmarked.png' : 'bookmark.png'}`}  className='block absolute bottom-0 right-0 mr-2 mb-1.5' />
                                    </div>
                                    <div className='text-xs leading-tight mt-1.5' style={{letterSpacing: '-0.26px'}}>{item.name}</div>
                                    <div className='flex mt-1'>
                                        <span className='py-0.7 px-1.5 mr-1 rounded text-center text-xs textGray3' style={{backgroundColor: '#f0f5f8'}}>{item.field}</span>
                                        <span className='py-0.7 px-1.5 mr-1 rounded text-center text-xs textGray3' style={{backgroundColor: '#f0f5f8'}}>{item.subject}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                </Swiper>
            </div>
        </section>
    )
}

export default HomeItem;