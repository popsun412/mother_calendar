/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import SwiperCore, { Pagination } from 'swiper';
import network from '../util/network';
import Toast from '../components/common/toast';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import Link from 'next/link';
import { getSubjectImage, getLocktypeImage } from "../util/helper";
import { getAuth } from "firebase/auth";
import { useRouter } from 'next/router';

const Item = (props) => {
    const [ToastStatus, setToastStatus] = useState(false);

    const auth = getAuth();
    const router = useRouter();

    const [data, setData] = useState({});
    const [load, setLoad] = useState(false);
    const [recommData, setRecommData] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);

    const commonItemUid = null;

    SwiperCore.use([Pagination]);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    }, []);

    const getData = async () => {
        if (commonItemUid) {
            const res = await network.get('/item/commonItem/' + commonItemUid);
            res.data ? setData(res.data) : null;

            console.log(res.data);

            getRecommItems(res.data.subject, res.data.field);
        }
    }

    const getRecommItems = async (subject, field) => {
        const res = await network.post('/plan/recommPlans', { subject, field });
        res.data ? setRecommData(res.data) : null;
    }

    useEffect(() => {
        if (router.query.commonItemUid) {
            auth.onAuthStateChanged(async (_user) => {
                if (_user) {
                    commonItemUid = router.query.commonItemUid;
                    await getData();
                    setLoad(true);
                } else {
                    setUserInfo(null);
                    router.push('/');
                }
            });
        }
    }, [router.query]);

    // 내 보관함 등록
    const addBookmark = async () => {
        const _result = await network.post('/locker/addbookmark', { commonItemUid: data.commonItemUid });
        setToastStatus(true);
        setData({ ...data, bookmark: true, count: data.count + 1 });
    }

    useEffect(() => {
        if (ToastStatus) setTimeout(() => setToastStatus(false), 1000);
    }, [ToastStatus]);

    return (load) ?
        <>
            <div style={{ fontFamily: "SuncheonR" }}>
                <header className='sticky top-0 left-0 right-0 opacity-100 visible z-100' style={{ marginBottom: '-50px' }}>
                    <div className={`mx-auto my-0 border-box relative flex items-center py-4 w-full 
                    ${scrollPosition > 60 ? 'bg-white border-b border-solid border-gray3' : ''}`} style={{ height: '50px' }}>
                        {scrollPosition > 60
                            ? <div className='flex mx-5 w-full items-center relative'>
                                <div className='absolute flex justify-center items-center mx-3 left-0 right-0'>
                                    <img className="w-4 h-4 mr-2" src={getLocktypeImage(data.lockerTyp, data.subject)} onClick={() => { window.history.back() }} />
                                    <span style={{ fontFamily: "SuncheonR" }}>{data.name}</span>
                                </div>
                                <img src='/images/ic_back.png' className="w-10 relative -left-4 flex-shrink-0" onClick={() => { window.history.back(); }} />
                            </div>
                            : <img src='/images/ic_banner_aos.png' onClick={() => { window.history.back() }} />
                        }
                    </div>
                </header>
                <main className='mb-28'>
                    <section className='mb-7'>
                        <div className='block relative'>
                            <div
                                className="before:bg-black before:bg-opacity-40 before:top-0 before:right-0 before:bottom-0 before:left-0 before:absolute"
                                style={{
                                    backgroundImage: `url("${data.image}")`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    width: "100%",
                                    paddingTop: "60%",
                                    backgroundPosition: "center center"
                                }}
                            />

                            <span className='block absolute bottom-0 left-0 text-lg text-white font-bold ml-5 mb-11' style={{}}>{data.name}</span>
                            <div className='block absolute bottom-0 left-0 ml-5 mb-5'>
                                <span className='textOrange1 text-xs rounded p-1 mr-1' style={{ backgroundColor: 'rgba(219, 239, 253, 0.2)' }}>{data.subject}</span>
                                <span className='textOrange1 text-xs rounded p-1' style={{ backgroundColor: 'rgba(219, 239, 253, 0.2)' }}>{data.field}</span>
                            </div>
                            {(data.subject != "부모") ? <div className='block absolute bottom-0 right-0 mr-5 mb-5'>
                                <img src={`/images/ic_${data.bookmark ? 'bookmarked.png' : 'bookmark.png'}`} className='mx-auto w-3' onClick={(e) => {
                                    e.preventDefault();
                                    if (data.bookmark) return;
                                    addBookmark();
                                }} />
                                <p className='text-xs text-white text-center'>{data.count}</p>
                            </div> : <></>}
                        </div>
                    </section>
                    <section className='mx-5 mb-8'>
                        <div className='text-base font-semibold mb-3' style={{ letterSpacing: '-0.32px', fontFamily: "SuncheonR" }} >어떤 아이템인가요?</div>
                        <div className='text-sm' style={{ letterSpacing: '-0.28px', lineHeight: '21px' }}>
                            <pre className="max-w-full whitespace-pre-wrap break-all" style={{ fontFamily: "SuncheonR" }}>{data.description}</pre>
                        </div>
                    </section>
                    {(recommData.length > 0) ? <section className='mx-5'>
                        <div className='text-base font-semibold mb-4' style={{ letterSpacing: '-0.32px' }}>추천 계획</div>
                        <div>
                            {
                                recommData.map((item, idx) => {
                                    return (
                                        <Link key={item.commonPlanUid} href={`/plandetail?commonPlanUid=${item.commonPlanUid}`} passHref>
                                            <div className='flex py-4 pr-4 text-sm mb-4 justify-between items-center'
                                                style={{ borderRadius: '15px', backgroundColor: '#f8f6f5', paddingLeft: '17px' }}>
                                                <div className='flex'>
                                                    <img src={getSubjectImage(item.subject)} className='mr-3' style={{ width: '25px', height: '25px' }} />
                                                    <div className='mx-0 my-auto'>{item.name}</div>
                                                </div>
                                                <img className='w-5' src='/images/ic_check_circle.png' onClick={(e) => {
                                                    e.preventDefault();
                                                    router.push(`/plan/regist?commonPlanUid=${item.commonPlanUid}`);
                                                }} />
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </section> : <></>}
                </main>
                {(data.subject != "부모") ? <aside className='fixed bottom-0 left-0 right-0 z-100'>
                    <div className='relative mx-auto my-0 bg-white'>
                        <nav className='flex items-center box-border relative' style={{ height: '90px' }} onClick={(e) => {
                            e.preventDefault();
                            if (data.bookmark) return;
                            addBookmark();
                        }}>
                            <span className={`text-sm text-white text-center p-4 m-5 w-full rounded-md ${!data.bookmark ? "bg5" : "bg-gray4"}`}
                                style={{ letterSpacing: '-0.28px' }}>내 보관함에 등록하기</span>
                        </nav>
                    </div>
                </aside> : <></>}
            </div>
            {ToastStatus ? <Toast msg={'보관함에 등록되었습니다.'} /> : <></>}
        </>
        : <></>
}

export default Item;

Item.getInitialProps = async (ctx) => {
    return {
        query: ctx.query
    }
}