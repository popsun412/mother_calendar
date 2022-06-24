/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import _ from 'lodash';
import network from '../../util/network';
import Toast from '../common/toast';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Link from 'next/link';
import { CircularProgress } from "@material-ui/core";

const HomeTheme = (props) => {
    const [ToastStatus, setToastStatus] = useState(false);
    const themeData = ["공룡", "동물", "명화", "바다", "뽀로로", "색깔", "숫자", "알파벳", "엘리베이터", "요리", "자동차", "점토", "직업", "코딩", "코코몽", "타요", "한글"];
    const [loading, setLoading] = useState(false);
    const [theme, setTheme] = useState(themeData[0]);
    const [data, setData] = useState([]);

    const getData = async () => {
        setLoading(true);
        const res = await network.post('/best/theme', { theme });
        setLoading(false);
        res.data ? setData(res.data) : null;
    }

    useEffect(() => {
        getData();
    }, [theme])

    useEffect(() => {
        if (ToastStatus) setTimeout(() => setToastStatus(false), 1000);
    }, [ToastStatus]);

    // 내 보관함 등록
    const addBookmark = async (commonItemUid, idx) => {
        const _result = await network.post('/locker/addbookmark', { commonItemUid });
        data[idx].bookmark = true;
        setToastStatus(true);
        setData([].concat(data));
    }

    return <>
        <section className='mt-5 mb-20 mx-5'>
            <h3 className='text-xl font-semibold' style={{ letterSpacing: '-0.4px' }}>인기 테마연계</h3>
            <div className='mt-4 mb-6'>
                <div className='w-full flex overflow-x-auto space-x-2 scrollbar-hide'>
                    {themeData.map((item, idx) => {
                        return <span
                            className={`flex-shrink-0 text-center py-1.5 px-2 rounded text-sm border border-solid
                                 ${theme == item ? "bg-blue3 text-white border-blue3" : "textGray4"}`}
                            key={idx}
                            onClick={() => setTheme(item)}
                        >{item}</span>
                    })}
                </div>
            </div>
            <div>

                {!loading ?
                    <div className='w-full flex overflow-x-auto space-x-2 scrollbar-hide'>
                        {data.map((item, idx) => {
                            return <Link href={{ pathname: '/item', query: { commonItemUid: item.commonItemUid } }} passHref key={item.commonItemUid}>
                                <div className='w-24 flex-shrink-0'>
                                    <div className='block relative '>
                                        <img src={item.image} className='rounded-md' style={{ width: '94px', height: '94px' }} />
                                        <img src={`/images/ic_${item.bookmark ? 'bookmarked.png' : 'bookmark.png'}`} className='block absolute bottom-0 right-0 mr-2 mb-1.5 w-3' onClick={(e) => {
                                            e.preventDefault();
                                            if (item.bookmark) return;
                                            addBookmark(item.commonItemUid, idx)
                                        }} />
                                    </div>
                                    <div className='text-xs leading-snug mt-1.5' style={{ letterSpacing: '-0.26px' }}>
                                        <p className='w-full whitespace-nowrap break-words overflow-hidden text-ellipsis m-0'>
                                            {item.name}
                                        </p>
                                    </div>
                                    {(item.subject == "체험")
                                        ? <div className='flex mt-1'>
                                            <span className='py-1 px-1.5 rounded text-center text-xs textGray3 mr-1 bg5' style={{ backgroundColor: '#f0f5f8' }}>{item.region}</span>
                                        </div>
                                        : <div className='flex mt-1'>
                                            <span className='py-1 px-1.5 rounded text-center text-xs textGray3 mr-1 bg5' style={{ backgroundColor: '#f0f5f8' }}>{item.subject}</span>
                                            <span className='py-1 px-1.5 rounded text-center text-xs textGray3 mr-1 bg5' style={{ backgroundColor: '#f0f5f8' }}>{item.field}</span>
                                        </div>
                                    }
                                </div>
                            </Link>
                        })}
                    </div>
                    : <div className="flex justify-center items-center h-36">
                        <CircularProgress size={50} style={{ color: "#FF6035" }} />
                    </div>}
            </div>
        </section>
        {ToastStatus ? <Toast msg={'보관함에 등록되었습니다.'} /> : <></>}
    </>
}

export default HomeTheme;
