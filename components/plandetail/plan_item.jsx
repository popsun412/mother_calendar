import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import network from '../../util/network';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Link from 'next/link';

const PlanItem = (props) => {

    const { subject, field } = props;
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await network.post('/item/recommItem', {
                subject: subject,
                field: field
            })
            res.data ? setData(res.data) : null;
        }
        getData();
    }, [])


    return (
        <>
            <section className='mb-8 mx-5'>
                <h3 className='text-base font-semibold mb-3' style={{ letterSpacing: '-0.32px' }}>추천 아이템</h3>
                <div className='mt-4'>
                    <Swiper
                        slidesPerView={3.1}
                    >
                        {
                            data.map((item, idx) => {
                                return (
                                    <SwiperSlide key={idx}>
                                        <Link href={{
                                            pathname: '/item',
                                            query: {
                                                itemUid: item.commonItemUid,
                                                subject: item.subject,
                                                field: item.field
                                            }
                                        }}>
                                            <div className='w-24'>
                                                <div className='block relative'>
                                                    <img src={item.image} className='rounded-md' style={{ width: '94px', height: '94px' }} />
                                                    {
                                                        item.pick ? <span className='block absolute top-0 left-0 text-xs text-white px-1.5 py-1 bg-blue3 rounded-tl-md rounded-br-md'>PICK</span> : ''
                                                    }
                                                    <img src={`/images/ic_${item.bookmark ? 'bookmarked.png' : 'bookmark.png'}`} className='block absolute bottom-0 right-0 mb-1.5 mr-2' />
                                                </div>
                                                <div className='text-sm leading-snug mt-1.5' style={{ letterSpacing: '-0.26px' }}>{item.name}</div>
                                                <div className='flex mt-1'>
                                                    <span className='py-1 px-1.5 rounded text-center text-xs textGray3 mr-1 bg5' style={{ backgroundColor: '#f0f5f8' }}>{item.field}</span>
                                                    <span className='py-1 px-1.5 rounded text-center text-xs textGray3 mr-1 bg5' style={{ backgroundColor: '#f0f5f8' }}>{item.subject}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default PlanItem;