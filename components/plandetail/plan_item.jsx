/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import network from '../../util/network';
import Toast from '../common/toast';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Link from 'next/link';

const PlanItem = (props) => {
    const [ToastStatus, setToastStatus] = useState(false);

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

    const addBookmark = async (commonItemUid, idx) => {
        const _result = await network.post('/locker/addbookmark', { commonItemUid });
        data[idx].bookmark = true;
        setToastStatus(true);
        setData([].concat(data));
    }

    useEffect(() => {
        if (ToastStatus) setTimeout(() => setToastStatus(false), 1000);
    }, [ToastStatus]);

    return (
        <>
            {(data.length > 0) ? <section className='mb-8 mx-5'>
                <h3 className='text-base font-semibold mb-3' style={{ letterSpacing: '-0.32px' }}>추천 아이템</h3>
                <div className='mt-4'>
                    <Swiper
                        slidesPerView={3.1}
                    >
                        {
                            data.map((item, idx) => {
                                return (
                                    <SwiperSlide key={idx}>
                                        <Link
                                            href={{ pathname: '/item', query: { commonItemUid: item.commonItemUid } }}
                                            passHref
                                        >
                                            <div className='w-24'>
                                                <div className='block relative'>
                                                    <img src={item.image} className='rounded-md' style={{ width: '94px', height: '94px' }} />
                                                    {
                                                        item.pick ? <span className='block absolute top-0 left-0 text-xs text-white px-1.5 py-1 bg-blue3 rounded-tl-md rounded-br-md'>PICK</span> : ''
                                                    }
                                                    <img src={`/images/ic_${item.bookmark ? 'bookmarked.png' : 'bookmark.png'}`} className='block absolute bottom-0 right-0 mb-1.5 mr-2 w-3' onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();

                                                        addBookmark(item.commonItemUid, idx);
                                                    }} />
                                                </div>
                                                <div className='text-xs leading-tight my-1.5' style={{ letterSpacing: '-0.26px' }}>
                                                    <p className='w-full whitespace-nowrap break-words overflow-hidden text-ellipsis m-0'>
                                                        {item.name}
                                                    </p>
                                                </div>
                                                <div className='flex mt-1'>
                                                    <span className='py-1 px-1.5 rounded text-center text-xs textGray3 mr-1 bg5' style={{ backgroundColor: '#f0f5f8' }}>{item.subject}</span>
                                                    <span className='py-1 px-1.5 rounded text-center text-xs textGray3 mr-1 bg5' style={{ backgroundColor: '#f0f5f8' }}>{item.field}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </section> : <></>}
            {ToastStatus ? <Toast msg={'보관함에 등록되었습니다.'} /> : <></>}
        </>
    )
}

export default PlanItem;