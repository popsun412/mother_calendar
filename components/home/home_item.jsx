/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import network from '../../util/network';
import Toast from '../common/toast';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Link from 'next/link';

const HomeItem = (props) => {
    const [ToastStatus, setToastStatus] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await network.post('/best/edu');
            res.data ? setData(res.data) : null;
        }
        getData();
    }, [])

    // 내 보관함 등록
    const addBookmark = async (commonItemUid, idx) => {
        const _result = await network.post('/locker/addbookmark', { commonItemUid });
        data[idx].bookmark = true;
        setToastStatus(true);
        setData([].concat(data));
    }

    useEffect(() => {
        if (ToastStatus) setTimeout(() => setToastStatus(false), 1000);
    }, [ToastStatus]);

    return (<>
        <section style={{ margin: '0 20px' }}>
            <h3 className='text-xl font-semibold mb-5' style={{ letterSpacing: '-0.4px' }}>인기 교육템</h3>
            <div>
                <Swiper slidesPerView={3.1}>
                    {
                        data.map((item, idx) => {
                            return (
                                <SwiperSlide key={idx}>
                                    <Link href={{ pathname: '/item', query: { commonItemUid: item.commonItemUid } }} passHref>
                                        <div className='w-24'>
                                            <div className='block relative'>
                                                <span className='absolute block top-0 py-1 px-2 text-xs text-white bg-blue3 rounded-tl-md rounded-br-md'>{idx + 1}위</span>
                                                <img src={item.image} className='rounded-md' style={{ width: '94px', height: '94px' }} />
                                                <img src={`/images/ic_${item.bookmark ? 'bookmarked.png' : 'bookmark.png'}`}
                                                    className='block absolute bottom-0 right-0 mr-2 mb-1.5 w-3' onClick={(e) => {
                                                        e.preventDefault();
                                                        if (item.bookmark) return;
                                                        addBookmark(item.commonItemUid, idx)
                                                    }} />
                                            </div>

                                            <div className='text-xs leading-tight my-1.5' style={{ letterSpacing: '-0.26px' }}>
                                                <p className='w-full whitespace-nowrap break-words overflow-hidden text-ellipsis m-0'>
                                                    {item.name}
                                                </p>
                                            </div>
                                            <div className='flex mt-1'>
                                                <span className='py-0.7 px-1.5 mr-1 rounded text-center text-xs textGray3' style={{ backgroundColor: '#f0f5f8' }}>{item.subject}</span>
                                                <span className='py-0.7 px-1.5 mr-1 rounded text-center text-xs textGray3' style={{ backgroundColor: '#f0f5f8' }}>{item.field}</span>
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
        {ToastStatus ? <Toast msg={'보관함에 등록되었습니다.'} /> : <></>}
    </>)
}

export default HomeItem;