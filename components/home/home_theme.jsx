import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import _ from 'lodash';
import network from '../../util/network';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Link from 'next/link';

const HomeTheme = (props) => {

    const [theme, setTheme] = useState('');
    const [themeData, setThemeData] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await network.post('/best/theme')
            res.data ? setData(res.data) : null;
            res.data ? getTheme(res.data) : null;
        }
        getData();
    }, [])

    const getTheme = (data) => {
        const arr = [];
        const result = [];

        data.map((item, idx) => {
            arr.push(item.theme);
        });
        const set = new Set(arr);
        const theme = [...set];

        for(let i=0; i<theme.length; i++) {
            result.push({id: i, theme: theme[i]})
        }

        result ? setThemeData(result) : null;
        result ? setTheme(result[0].theme) : null;
    }

    const onClick = (param) => {
        setTheme(param);
    }

    return (
        <section className='mt-5 mb-20 mx-5'>
            <h3 className='text-xl font-semibold' style={{letterSpacing: '-0.4px'}}>인기 테마연계</h3>
            <div className='mt-4 mb-6'>
                <div className='flex'>
                    <Swiper slidesPerView={5}>
                    {
                        themeData ? themeData.map((item, idx) => {
                            return (
                                <SwiperSlide key={idx}>
                                    <div className='mr-2' onClick={() => {onClick(item.theme)}}>
                                        <div className={`text-center py-1.5 px-2 rounded-sm text-xs
                                            ${theme == item.theme? 'bg-blue3 text-white' : 'border border-solid bg-white border-gray3 textGray4'}`}>{item.theme}</div>
                                    </div>
                                </SwiperSlide>
                            )
                        }) : ''
                    }
                    </Swiper>
                </div>
            </div>
            <div>
                <Swiper
                    slidesPerView={3}
                >
                    {
                        data.map((item, idx) => {
                            let url = '';
                            item.category == 'place' ? url = '/place' : url = '/item';
                            return (
                                item.theme === theme ?
                                <SwiperSlide key={idx}>
                                    <div className='w-24'>
                                        <div className='block relative '>
                                            <img src={item.image} className='rounded-md' style={{width: '94px', height: '94px'}}/>
                                            <img src={`/images/ic_${item.bookmark? 'bookmarked.png' : 'bookmark.png'}`}  className='block absolute bottom-0 right-0 mr-2 mb-1.5' />
                                        </div>
                                        <Link href={{
                                            pathname: url,
                                            query: { 
                                                commonItemUid: item.commonItemUid
                                            }
                                        }}>
                                            <div className='text-sm leading-snug mt-1.5' style={{letterSpacing: '-0.26px'}}>{item.name}</div>
                                        </Link>
                                        <div className='flex mt-1'>
                                            <span className='py-1 px-1.5 rounded text-center text-xs textGray3 mr-1 bg5' style={{backgroundColor: '#f0f5f8'}}>{item.field}</span>
                                            <span className='py-1 px-1.5 rounded text-center text-xs textGray3 mr-1 bg5' style={{backgroundColor: '#f0f5f8'}}>{item.subject}</span>
                                        </div>
                                    </div>
                                </SwiperSlide> : ''
                            )
                        })
                    }                   
                </Swiper>
            </div>
        </section>
    )
}

export default HomeTheme;
