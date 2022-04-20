import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

const data = [
    {
        id: 0,
        imgUrl: 'https://picsum.photos/id/237/326/326',
    },
    {
        id: 1,
        imgUrl: 'https://picsum.photos/id/240/326/326',
    },
    {
        id: 2,
        imgUrl: 'https://picsum.photos/id/243/326/326',
    },
    {
        id: 3,
        imgUrl: 'https://picsum.photos/id/250/326/326',
    },
    {
        id: 4,
        imgUrl: 'https://picsum.photos/id/249/326/326',
    }
]

const Place = () => {

    SwiperCore.use([Pagination]);

    const [scrollPosition, setScrollPosition] = useState(0);
    
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    }, []);

    const onClick = () => {
        window.history.back();
    }

    return (
        <div>
            <header className='sticky top-0 left-0 right-0 opacity-100 visible z-100' style={{marginBottom: '-50px'}}>
                <div className={`mx-auto my-0 border-box relative flex items-center py-4 w-full 
                        ${scrollPosition > 60 ? 'bg-white border-b border-solid border-gray3' : ''}`} style={{height: '50px'}}>
                {
                    scrollPosition > 60 ?
                        <div className='flex mx-5 w-full'>
                            <div style={{width:'20px'}}>
                                <img src='/images/ic_back.png'/>
                            </div>
                            <div className='text-center flex-1'>🏕 애니메이션 센터</div>
                        </div> : <img src='/images/ic_banner_aos.png' />
                }
                </div>
            </header>
            <main className='mb-28'>
                <section className='mb-7'>
                    <div className='block relative'>
                        <img src='/images/banner.png' />
                        <span className='block absolute bottom-0 left-0 text-lg text-white font-bold ml-5 mb-11' style={{fontFamily: 'NanumSquareRoundOTF'}}>애니메이션 센터</span>
                        <div className='block absolute bottom-0 left-0 ml-5 mb-5'>
                            <span className='textOrange1 text-xs rounded p-1 mr-1' style={{fontFamily: 'NanumSquareRoundOTF', backgroundColor: 'rgba(219, 239, 253, 0.2)'}}>서울</span>
                            <span className='textOrange1 text-xs rounded p-1' style={{fontFamily: 'NanumSquareRoundOTF', backgroundColor: 'rgba(219, 239, 253, 0.2)'}}>영어</span>
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
                                            <img src={item.imgUrl} />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                    <div className='text-sm' style={{letterSpacing: '-0.28px', lineHeight: '21px'}}>
                        아이가 궁금해할만한 과학적/자연현상에 대해 귀여운 그림체로 흥미롭게 설명해놓은 과학전집이에요! 📒 <br/>
                        공룡은 어떻게 멸망했는지, 우리의 음식은 어떤 과정을 통해 소화가 되는지 등 초등학교 교과서와 연계되는 배경 지식을 기를 수 있고 맨 뒤페이지에 나오는 간단한 과학실험도 따라해볼만 해요. 🥽🥼<br/><br/>

                        저는 공룡덕후인 아들에게 어떻게 공룡이 멸망했는지에 설명해주기 힘들어서 구매했는데 다른 권들도 아이가 궁금해할만한 주제로 이루어져 있어서 좋았어요.<br/>
                        다만 추피처럼 서양 기준 캐릭터와 문화가 녹아있어 낯설 수 있고, 음원이나 리딩펜이 없어 엄마 목이 좀 아플 수 있지요. 😂<br/><br/>

                        1. 이름: 물아저씨 과학그림책<br/>
                        2. 영역: 과학, 소전집, 자연과학지식<br/>
                        3. 연령: 유아(4-6세), 취학전(7세), 초등저학년<br/>
                        ※ 6세부터 초등저학년까지 잘보는 책입니다.<br/>
                        4. 유사상품: #내친구과학공룡 #지식특공대 #공룡대발이과학동화 #교원솔루토이과학<br/>
                        5. 구성: 책 18권, 1월에 18번째 신간이 새로 추가됐어요.<br/>
                        6. 가격: 18권 기준 네이버 10만원대, 15권짜리 중고 4~5만원, 17권짜리 6~7만원<br/><br/>

                        ❗ 신규구매팁: 22년 1월에 특별판이 한권 더 추가되어 총 18권이 되었어요. 17권짜리는 9만원대, 맘카페/인스타 공구에선 7만원대에 구매 가능합니다.<br/>
                        -공구를 통해 구매할 경우는 저렴하기도 하지만 별다른 사은품이나 활동지가 없는 일반 상품에 비해 참고자료나 영상을 함께주니 당장 필요하지않으면 공구를 기다려보는것도 좋아요.<br/>
                        ❗ 중고구매팁: 특별판 2권은 별도로 옥션 등 오픈마켓에서 구매할 수 있어요. 15권 본권만 중고로 사고 특별판만 신간으로 사는 것도 방법입니다. 다만 특별판 3번째 권은 금년에 새로 출시되어 아직 18권짜리 중고는 구매하기 어려워요. 😢<br/><br/>

                        ✔ 활용팁: 각 권마다 맨 뒤페이지에 간단한 과학실험이 있는데 재료도 보통 집에 있는 것이라 따라해볼만 합니다.<br/>
                        ✔ 참고자료: 유튜브 https://youtu.be/hKelOA7Uxw8 출판사 예림당이 올려놓은 영상입니다.<br/>
                        -인스타나 네이버까페를 통해 공구할 경우 판매자가 활동지나 놀이팁 강의를 같이 주는 경우가 많아요.<br/><br/>

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
            </main>
            <aside className='fixed bottom-0 left-0 right-0 z-100'>
                <div className='relative mx-auto my-0 bg-white'>
                    <nav className='flex items-center box-border relative' style={{height: '90px'}}>
                        <span className='text-sm text-white text-center p-4 m-5 w-full rounded-md bg5' 
                            style={{letterSpacing: '-0.28px'}}>내 보관함에 등록하기</span>
                    </nav>
                </div>
            </aside>
        </div>
    )
}

export default Place;