/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { useEffect, Fragment } from 'react';
import { getAuth } from "firebase/auth";
import { useState } from 'react';
import CircleLoading from "../components/common/circle_loading";
import network from "../util/network";
import moment from 'moment';
import { Drawer } from "@mui/material";
import PlaceListDrawer from "../components/place/place_list_drawer";
import { BookmarkBorderOutlined } from "@mui/icons-material";
import LockerDrawer from "../components/calendar/locker_drawer";
import { useRouter } from 'next/router';


const PlaceMap = (props) => {
    const router = useRouter();
    const [lockerDrawerOpen, setLockerDrawerOpen] = useState(false);
    let _type = null;

    const [load, setLoad] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [param, setParam] = useState({
        lockerType: "체험장소",
        order: "reg",
        status: [],
        region: [],
        subject: []
    });

    const auth = getAuth();

    const getItems = async () => {
        const _result = await network.post('/locker/mapitems', { ...param, userUid: props.query.userUid });
        setItems([].concat(_result.data));
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (_user) => {
            if (_user) {
                await getItems();
                setLoad(true);
            }
        });
    }, []);

    const isMe = () => {
        if (props.query.userUid == undefined || props.query.userUid == "") return true;

        return (auth.currentUser?.uid ?? "") == props.query.userUid;
    };

    return load
        ? <div className='w-screen h-screen overflow-y-auto scrollbar-hide'>
            <header className='sticky top-0 left-0 right-0 visible opacity-100 pb-3.5 bg-white z-100' style={{ marginBottom: '-50px' }}>
                <div className='relative flex items-center w-full justify-between px-4 bg-white border-b border-solid border-gray3' style={{ height: '50px' }}>
                    <div className="flex items-center">
                        <img className="mr-4" src='/images/ic_back.png' onClick={() => { router.push('/calendar'); }} />
                        <BookmarkBorderOutlined onClick={() => setLockerDrawerOpen(true)} />
                    </div>
                    <div className='absolute left-0 right-0 mx-20 text-base font-medium text-center' style={{ letterSpacing: '-0.3px' }}>체험지도</div>
                    <div className='flex mr-2' style={{ width: '20px' }}>
                        <Link href='/exmap' passHref><img src='/images/ic_map.png' className='mr-3 hidden' /></Link>
                        <img src='/images/filter.png' onClick={() => setDrawerOpen(true)} />
                    </div>
                </div>
            </header>
            <main style={{ marginTop: '50px' }}>
                <section className='mx-5' style={{ paddingTop: '18.7px' }}>
                    <div>
                        {items.length > 0 ? <>
                            {items.map((_item) =>
                                <div className={`flex ${_item.status == 1 ? "opacity-30" : ""}`} style={{ marginBottom: '22px' }} key={_item.itemUid} onClick={() => {
                                    if (!isMe()) return;

                                    const _href = { pathname: _type == 'academy' ? '/editacademy' : 'editplace', query: { itemUid: _item.itemUid } };
                                    router.push(_href);
                                }}>
                                    <div className="relative" style={{ marginRight: '15px', width: '94px', height: '94px' }}>
                                        <div
                                            className="before:top-0 before:right-0 before:bottom-0 before:left-0 before:absolute"
                                            style={{
                                                backgroundImage: `url("${_item.image}")`,
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover",
                                                width: "100%",
                                                paddingTop: "100%",
                                                backgroundPosition: "center center"
                                            }}
                                        />

                                    </div>
                                    <div>
                                        <div className='font-semibold mb-1' style={{ fontSize: '15px', letterSpacing: '-0.3px', color: '#333333' }}>{_item.name}</div>
                                        {(_item.status == 1) ? <>
                                            <div className='textGray3 mb-1' style={{ fontSize: '13px' }}>{moment(_item.regDt).format("YYYY.MM")} 방문</div>
                                            <div className='flex mb-1'>
                                                {(_item.score >= 1) ? <img src='/images/ic_star_color.png' /> : <img src='/images/ic_star_grey.png' />}
                                                {(_item.score >= 2) ? <img src='/images/ic_star_color.png' /> : <img src='/images/ic_star_grey.png' />}
                                                {(_item.score >= 3) ? <img src='/images/ic_star_color.png' /> : <img src='/images/ic_star_grey.png' />}
                                                {(_item.score >= 4) ? <img src='/images/ic_star_color.png' /> : <img src='/images/ic_star_grey.png' />}
                                                {(_item.score >= 5) ? <img src='/images/ic_star_color.png' /> : <img src='/images/ic_star_grey.png' />}
                                            </div>
                                        </> : <></>}
                                        <div style={{ marginTop: '5px' }}>
                                            {_item.region ? <span className='text-xs textGray3 px-1.5' style={{ marginRight: '5px', backgroundColor: '#f0f5f8', paddingTop: '3px', paddingBottom: '3px' }}>{_type == "academy" ? _item.subject : _item.region}</span> : <></>}
                                            <span className='text-xs textGray3 px-1.5' style={{ backgroundColor: '#f0f5f8', paddingTop: '3px', paddingBottom: '3px' }}>체험</span>
                                        </div>
                                    </div>
                                </div>
                            )}</>
                            : <div className='absolute top-1/2 left-4 right-4' style={{ transform: 'translateY(-50%)' }}>
                                <div className='items-center justify-center'>
                                    <img src='/images/no_result.png' width={'93px'} height={'113px'} style={{ margin: '0 auto' }} />
                                    <div className='text-sm text-center textGray4 mt-2.5' style={{ lineHeight: 1.7, letterSpacing: '-0.28px' }}>
                                        아이템이 없습니다.<br />
                                        {isMe() ? "내가 방문한 아이템으로 채워주세요!" : ""}
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </section>
            </main>
            {isMe() ? <Link href={"/addplace"} passHref>
                <div className='fixed bottom-0 right-0 z-100'>
                    <img src='/images/ic_float.png' />
                </div>
            </Link> : <></>}
            <Fragment>
                <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} anchor={"right"} PaperProps={{ sx: { width: "80%" } }}>
                    <PlaceListDrawer param={param} setParam={setParam} setDrawerOpen={setDrawerOpen} getItems={getItems} />
                </Drawer>
            </Fragment>
            <Fragment>
                <Drawer open={lockerDrawerOpen} onClose={() => setLockerDrawerOpen(false)}                >
                    <LockerDrawer userUid={props.query.userUid ?? auth.currentUser.uid} />
                </Drawer>
            </Fragment>
        </div >
        : <div className="h-screen w-screen"><CircleLoading /></div>
}

export default PlaceMap;

PlaceMap.getInitialProps = async (ctx) => {
    return {
        query: ctx.query
    }
}