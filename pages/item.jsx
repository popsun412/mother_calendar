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

    const [data, setData] = useState({
        "commonItemUid": 3,
        "name": "광명에디슨뮤지엄",
        "image": "https://storage.cloud.google.com/mamadadacal_cdn/item/1652877227703_image119.jpeg",
        "subject": "체험",
        "field": "지식전시",
        "age": [
            2,
            3,
            4
        ],
        "region": "경기",
        "description": "◎연령: 유아(4-6세), 취학전(7세), 초등저학년, ※7세 이상 아이들에게는 과학 원리도 읽어주며 체험하면 좋을 것 같아요.  ◎구성: 과학관(플라잉볼, 도르레 등), 영상관(자동차 등), 소리관(피아노, 드럼 등), 빛관(전구, 킥보드 등), 에어바운스 등 -내부식당에서 식사(11:00~17:00, 짜장 8,000원, 볶음밥 9,500원) 혹은 간식 구매 가능하고, 외부 음식은 반입 금지예요.  ◎연령: 유아(4-6세),취학전(7세),초등저학년 ※7세 이상 아이들에게는 과학 원리도 읽어주며 체험하면 좋을 것 같아요. ◎구성: 과학관(플라잉볼, 도르레 등), 영상관(자동차 등), 소리관(피아노, 드럼 등), 빛관(전구, 킥보드 등), 에어바운스 등 -내부식당에서 식사(11:00~17:00, 짜장 8,000원, 볶음밥 9,500원) 혹은 간식 구매 가능하고, 외부 음식은 반입 금지예요. 양말 필수입니다.  ◎문의: 02-897-1123, @gmedisonsm, http://blog.naver.com/edisonsm/ ◎주소: 경기 광명시 일직로12번길 24(일직동 508-4) 클래시아 3층 ◎주차: 가능, 입차부터 2시간 무료, 2시간 초과 10분당 500원 ◎시간: 월목금 13:00~18:00, 주말 10:00~18:00, 화수 휴관 ◎가격: 2시간 기준 성인 7,000원 어린이(만18개월~초6) 20,000원 중고등학생 및 소인(만12개월~만17개월) 10,000원 영아(~만11개월) 무료            2시간 초과 10분당 성인 500원 어린이 1,000원, 내부식당 2만원 이상 주문 시 이용 및 주차 1시간 추가 지원           ※18개월 미만은 증빙자료 반드시 지참  ◎예약팁 -구매처: 네이버예약, 현장 -예약 전에 @gmedisonsm 에서 방문 경품 이벤트를 확인해보세요. -유사장소: 서울상상나라, 고양어린이박물관, 삼성화재교통박물관, 현대모터스튜디오고양, BMW드라이빙센터  ◎체험팁 -1개 층만 활용하기 때문에 규모가 크지는 않은데 과학 실험부터 다양한 악기까지, 그 중에서 자동차 운전 게임이 가장 재미있었어요.  -오전엔 광명에디슨뮤지엄에서 놀고 오후엔 이케아에서 밥 먹고 구경하면 하루 알차게 끝이랍니다.  ※내부 벽면에 리뷰 이벤트 안내지가 붙어 있으니, 네이버 혹은 인스타 리뷰 이벤트에도 참여해보세요.   ◎주변체험 -광명이케아(유모차 없을 시, 2층에 유아용 카트 있음), 광명아브뉴프랑, 광명호반아트리움  ◎주변식당 -광명이케아 푸드코트(아기의자o, 유아식기o, 등심돈가스 6,900원, 어린이플랜트볼 2,900원, 저렴한만큼 양이 적어요) ",
        "lockerType": "체험지도",
        "theme": "자동차",
        "address": "경기 광명시 일직로12번길 24(일직동 508-4) 클래시아 3층",
        "latlng": null,
        "category": "place",
        "regDt": "2022-05-19T06:25:55.000Z",
        "bookmark": false
    });
    const [recommData, setRecommData] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);

    const router = useRouter();
    const itemUid = router.query.itemUid;
    const subject = router.query.subject;
    const field = router.query.field;
    
    SwiperCore.use([Pagination]);
    
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    }, []);

    useEffect(() => {
        const getData = async() => {
            const res = await network.post('/item/commonItem/'+itemUid);
            res.data ? setData(res.data) : null;
        }
        getData();
    })

    useEffect(() => {
        const getData = async() => {
            const res = await network.post('/item/recommItem', {
                params: {
                    subject: subject,
                    field: field
                }
            })
            res.data ? setRecommData(res.data) : null
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
                <section className='mb-7'>
                    <div className='block relative'>
                        <img src='/images/banner.png' />
                        <span className='block absolute bottom-0 left-0 text-lg text-white font-bold ml-5 mb-11' style={{fontFamily: 'NanumSquareRoundOTF'}}>{data.name}</span>
                        <div className='block absolute bottom-0 left-0 ml-5 mb-5'>
                            <span className='textOrange1 text-xs rounded p-1 mr-1' style={{fontFamily: 'NanumSquareRoundOTF', backgroundColor: 'rgba(219, 239, 253, 0.2)'}}>{data.region}</span>
                            <span className='textOrange1 text-xs rounded p-1' style={{fontFamily: 'NanumSquareRoundOTF', backgroundColor: 'rgba(219, 239, 253, 0.2)'}}>{data.subject}</span>
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
                        {/* <Swiper
                            modules={[Pagination]}
                            slidesPerView={1}
                            centeredSlides
                            onSlideChange={() => console.log('change slide')}
                            onSwiper={swiper => console.log(swiper)}
                            pagination={{ clickable: true }}
                        >
                            {
                                data.image.map((item, idx) => {
                                    return (
                                        <SwiperSlide key={idx}>
                                            <img src={data.image} style={{width: '320px'}}/>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper> */}
                        <img src={data.image} style={{width: '320px'}} />
                    </div>
                    <div className='text-sm' style={{letterSpacing: '-0.28px', lineHeight: '21px'}}>
                        {data.description}
                    </div>
                </section>
                <section className='mx-5'>
                    <div className='text-base font-semibold mb-4' style={{letterSpacing: '-0.32px'}}>추천 아이템</div>
                    <div>
                    {
                        recommData.map((item, idx) => {
                            return (
                                <div className='flex py-4 pr-4 text-sm mb-4 justify-between' key={idx}
                                    style={{borderRadius: '15px', backgroundColor: '#f8f6f5', paddingLeft: '17px'}}>
                                    <div className='flex'>
                                        <img src='/images/category7.png' className='mr-3' style={{width: '25px', height: '25px'}}/>
                                        <div className='mx-0 my-auto'>{item.name}</div>
                                    </div>
                                    <div>
                                        <img src='/images/ic_check_circle.png'/>
                                    </div>
                                </div>
                            )
                        })
                    }
                        {/* <div className='flex py-4 pr-4 text-sm mb-4 justify-between' style={{borderRadius: '15px', backgroundColor: '#f8f6f5', paddingLeft: '17px'}}>
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
                        </div>                         */}
                    </div>
                </section>
            </main>
            <aside className='fixed bottom-0 left-0 right-0 z-100'>
                <div className='relative mx-auto my-0 bg-white'>
                    <Link
                        href={{
                            pathname: '/addbook',
                            query: {
                                itemUid: itemUid,
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