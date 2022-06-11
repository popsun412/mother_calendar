/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const CategoryMenu = (props) => {
    const router = useRouter();
    const { type, category } = props;

    useEffect(() => {
        type != '교육' ? props.setCategory('전체') : props.setCategory(category);
    }, [])

    const initIndex = () => {
        return ["전체", "국어", "영어", "수학", "과학", "사회", "미술", "음악", "체육", "놀이"].findIndex((_item) => _item == props.category);
    }

    return (
        <div className='ml-4'>
            <Swiper slidesPerView={5.6} initialSlide={initIndex()}>
                <SwiperSlide>
                    <div className={`p-3 flex flex-col textGray2 font-normal text-xs ${"전체" === props.category ? 'bg-gray2' : ''}`}
                        style={{ borderRadius: "1.25rem", width: "3.25rem" }} onClick={() => {
                            router.replace({ pathname: '/category', query: { type: "교육", id: "전체" } });
                        }}>
                        <img src='/images/all.png' className="m-auto w-7 h-7" />
                        <span className='text-center mt-2 textGray2 font-normal text-xs'>{"전체"}</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`p-3 flex flex-col textGray2 font-normal text-xs ${"국어" === props.category ? 'bg-gray2' : ''}`}
                        style={{ borderRadius: "1.25rem", width: "3.25rem" }} onClick={() => {
                            router.replace({ pathname: '/category', query: { type: "교육", id: "국어" } });
                        }}>
                        <img src='/images/category1.png' className="m-auto w-7 h-7" />
                        <span className='text-center mt-2 textGray2 font-normal text-xs'>{"국어"}</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`p-3 flex flex-col textGray2 font-normal text-xs ${"영어" === props.category ? 'bg-gray2' : ''}`}
                        style={{ borderRadius: "1.25rem", width: "3.25rem" }} onClick={() => {
                            router.replace({ pathname: '/category', query: { type: "교육", id: "영어" } });
                        }}>
                        <img src='/images/category2.png' className="m-auto w-7 h-7" />
                        <span className='text-center mt-2 textGray2 font-normal text-xs'>{"영어"}</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`p-3 flex flex-col textGray2 font-normal text-xs ${"수학" === props.category ? 'bg-gray2' : ''}`}
                        style={{ borderRadius: "1.25rem", width: "3.25rem" }} onClick={() => {
                            router.replace({ pathname: '/category', query: { type: "교육", id: "수학" } });
                        }}>
                        <img src='/images/category3.png' className="m-auto w-7 h-7" />
                        <span className='text-center mt-2 textGray2 font-normal text-xs'>{"수학"}</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`p-3 flex flex-col textGray2 font-normal text-xs ${"과학" === props.category ? 'bg-gray2' : ''}`}
                        style={{ borderRadius: "1.25rem", width: "3.25rem" }} onClick={() => {
                            router.replace({ pathname: '/category', query: { type: "교육", id: "과학" } });
                        }}>
                        <img src='/images/category4.png' className="m-auto w-7 h-7" />
                        <span className='text-center mt-2 textGray2 font-normal text-xs'>{"과학"}</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`p-3 flex flex-col textGray2 font-normal text-xs ${"사회" === props.category ? 'bg-gray2' : ''}`}
                        style={{ borderRadius: "1.25rem", width: "3.25rem" }} onClick={() => {
                            router.replace({ pathname: '/category', query: { type: "교육", id: "사회" } });
                        }}>
                        <img src='/images/category5.png' className="m-auto w-7 h-7" />
                        <span className='text-center mt-2 textGray2 font-normal text-xs'>{"사회"}</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`p-3 flex flex-col textGray2 font-normal text-xs ${"미술" === props.category ? 'bg-gray2' : ''}`}
                        style={{ borderRadius: "1.25rem", width: "3.25rem" }} onClick={() => {
                            router.replace({ pathname: '/category', query: { type: "교육", id: "미술" } });
                        }}>
                        <img src='/images/category6.png' className="m-auto w-7 h-7" />
                        <span className='text-center mt-2 textGray2 font-normal text-xs'>{"미술"}</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`p-3 flex flex-col textGray2 font-normal text-xs ${"음악" === props.category ? 'bg-gray2' : ''}`}
                        style={{ borderRadius: "1.25rem", width: "3.25rem" }} onClick={() => {
                            router.replace({ pathname: '/category', query: { type: "교육", id: "음악" } });
                        }}>
                        <img src='/images/category7.png' className="m-auto w-7 h-7" />
                        <span className='text-center mt-2 textGray2 font-normal text-xs'>{"음악"}</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`p-3 flex flex-col textGray2 font-normal text-xs ${"체육" === props.category ? 'bg-gray2' : ''}`}
                        style={{ borderRadius: "1.25rem", width: "3.25rem" }} onClick={() => {
                            router.replace({ pathname: '/category', query: { type: "교육", id: "체육" } });
                        }}>
                        <img src='/images/category8.png' className="m-auto w-7 h-7" />
                        <span className='text-center mt-2 textGray2 font-normal text-xs'>{"체육"}</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`p-3 flex flex-col textGray2 font-normal text-xs ${"놀이" === props.category ? 'bg-gray2' : ''}`}
                        style={{ borderRadius: "1.25rem", width: "3.25rem" }} onClick={() => {
                            router.replace({ pathname: '/category', query: { type: "교육", id: "놀이" } });
                        }}>
                        <img src='/images/category9.png' className="m-auto w-7 h-7" />
                        <span className='text-center mt-2 textGray2 font-normal text-xs'>{"놀이"}</span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default CategoryMenu;