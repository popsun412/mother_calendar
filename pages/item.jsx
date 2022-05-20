import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { useRouter } from "next/router";
import network from '../util/network';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import Link from 'next/link';

const Item = () => {

    const [data, setData] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);

    const router = useRouter();
    const itemUid = router.query.itemUid;
    
    SwiperCore.use([Pagination]);
    
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    }, []);

    useEffect(() => {
        const getData = async() => {
            const res = await network.post('/home/recommItems', {
                params: {
                    itemUid: itemUid
                }
            })
            res.data ? setData(res.data.filter(val => val.commonItemUid == itemUid)) : null
        }
        getData();
        console.log(data)
    }, []);

    return (
        <div>
            <header className='sticky top-0 left-0 right-0 opacity-100 visible z-100' style={{marginBottom: '-50px'}}>
                <div className={`mx-auto my-0 border-box relative flex items-center py-4 w-full 
                        ${scrollPosition > 60 ? 'bg-white border-b border-solid border-gray3' : ''}`} style={{height: '50px'}}>
                {
                    scrollPosition > 60 ?
                        <div className='flex mx-5 w-full'>
                            <div style={{width:'20px'}} onClick={() => {window.history.back();}}>
                                <img src='/images/ic_back.png'/>
                            </div>
                            <div className='text-center flex-1'>🏕 애니메이션 센터</div>
                        </div> : <img src='/images/ic_banner_aos.png' onClick={() => {window.history.back();}}/>
                }
                </div>
            </header>
            <main className='mb-28'>
                {
                    data.map((item) => {
                        return (
                            <>
                            <section className='mb-7'>
                                <div className='block relative'>
                                    <img src='/images/banner.png' />
                                    <span className='block absolute bottom-0 left-0 text-lg text-white font-bold ml-5 mb-11' style={{fontFamily: 'NanumSquareRoundOTF'}}>{item.name}</span>
                                    <div className='block absolute bottom-0 left-0 ml-5 mb-5'>
                                        <span className='textOrange1 text-xs rounded p-1 mr-1' style={{fontFamily: 'NanumSquareRoundOTF', backgroundColor: 'rgba(219, 239, 253, 0.2)'}}>{item.region}</span>
                                        <span className='textOrange1 text-xs rounded p-1' style={{fontFamily: 'NanumSquareRoundOTF', backgroundColor: 'rgba(219, 239, 253, 0.2)'}}>{item.subject}</span>
                                    </div>
                                    <div className='block absolute bottom-0 right-0 mr-5 mb-5'>
                                        <img src='/images/ic_bookmark.png' className='mx-auto'/>
                                        <span className='text-xs text-white'>135</span>
                                    </div>
                                </div>
                            </section>
                            <section className='mx-5 mb-4'>
                                <div className='text-base font-semibold mb-5' style={{letterSpacing: '-0.32px'}}>어떤 아이템인가요?</div>
                                <div className='mb-11'>
                                    <Swiper
                                        modules={[Pagination]}
                                        slidesPerView={1}
                                        centeredSlides
                                        onSlideChange={() => console.log('change slide')}
                                        onSwiper={swiper => console.log(swiper)}
                                        pagination={{ clickable: true }}
                                    >
                                        {
                                            data.map((item, idx) => {
                                                return (
                                                    <SwiperSlide key={idx}>
                                                        <img src={item.image} style={{width: '320px'}}/>
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>
                                </div>
                                <div className='text-sm' style={{letterSpacing: '-0.28px', lineHeight: '21px'}}>
                                    {item.description}
                                </div>
                            </section>
                            <section className='mx-5'>
                                <div className='text-base font-semibold mb-4' style={{letterSpacing: '-0.32px'}}>추천 아이템</div>
                                <div>
                                    <div className='flex py-4 pr-4 text-sm mb-4 justify-between' style={{borderRadius: '15px', backgroundColor: '#f8f6f5', paddingLeft: '17px'}}>
                                        <div className='flex'>
                                            <img src='/images/category7.png' className='mr-3' style={{width: '25px', height: '25px'}}/>
                                            <div className='mx-0 my-auto'>엄마와 함께 피아노 연주하기</div>
                                        </div>
                                        <div>
                                            <img src='/images/ic_check_circle.png'/>
                                        </div>
                                    </div>
                                    <div className='flex py-4 pr-4 text-sm mb-4 justify-between' style={{borderRadius: '15px', backgroundColor: '#f8f6f5', paddingLeft: '17px'}}>
                                        <div className='flex'>
                                            <img src='/images/category6.png' className='mr-3' style={{width: '25px', height: '25px'}}/>
                                            <div className='mx-0 my-auto'>종이접기로 간단한 동물 만들기</div>
                                        </div>
                                        <div>
                                            <img src='/images/ic_add_circle.png'/>
                                        </div>
                                    </div>                        
                                </div>
                            </section>
                            </>
                        )
                    })
                }
            </main>
            <aside className='fixed bottom-0 left-0 right-0 z-100'>
                <div className='relative mx-auto my-0 bg-white'>
                    <Link
                        href={{
                            pathname: '/addbook',
                            query: {
                                itemUid: itemUid
                            }
                    }}>
                        <nav className='flex items-center box-border relative' style={{height: '90px'}}>
                            <span className='text-sm text-white text-center p-4 m-5 w-full rounded-md bg5' 
                                style={{letterSpacing: '-0.28px'}}>내 보관함에 등록하기</span>
                        </nav>
                    </Link>
                </div>
            </aside>
        </div>
    )
}

export default Item;