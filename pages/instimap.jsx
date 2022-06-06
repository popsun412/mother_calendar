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

const InstiMap = (props) => {
    const _type = props.query.type;

    const [load, setLoad] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [param, setParam] = useState({
        lockerType: _type == "academy" ? "학원장소" : "체험장소",
        order: null,
        status: null,
        subject: null,
        region: null,
        field: null
    });

    const auth = getAuth();

    const getItems = async () => {
        setItems([]);
        const _result = await network.post('/locker/items', param);
        setItems(_result.data);
        setLoad(true);
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (_user) => {
            if (_user) {
                await getItems();
            } else {
            }
        });
    }, []);

    return load
        ? <div className='w-screen h-screen overflow-y-auto scrollbar-hide'>
            <header className='sticky top-0 left-0 right-0 visible opacity-100 pb-3.5 bg-white z-100' style={{ marginBottom: '-50px' }}>
                <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white border-b border-solid border-gray3' style={{ height: '50px' }}>
                    <div className='flex-1 flex items-center'>
                        <div style={{ width: '50px' }}>
                            <img src='/images/ic_back.png' onClick={() => { window.history.back() }} />
                        </div>
                        <div className='my-0 mx-auto text-base font-medium' style={{ letterSpacing: '-0.3px' }}>{_type == "academy" ? "학원" : "체험"}</div>
                        <div className='flex mr-2' style={{ width: '20px' }}>
                            <Link href='/exmap' passHref><img src='/images/ic_map.png' className='mr-3 hidden' /></Link>
                            <img src='/images/filter.png' onClick={() => setDrawerOpen(true)} />
                        </div>
                    </div>
                </div>
            </header>
            <main style={{ marginTop: '50px' }}>
                <section className='mx-5' style={{ paddingTop: '18.7px' }}>
                    <div>
                        {items.map((_item) =>
                            <div className={`flex ${_item.status == 1 ? "opacity-30" : ""}`} style={{ marginBottom: '22px' }} key={_item.itemUid}>
                                <div style={{ marginRight: '15px' }}>
                                    <img src='/images/place1.png' style={{ width: '94px', height: '94px' }} />
                                </div>
                                <div>
                                    <div className='font-semibold mb-1' style={{ fontSize: '15px', letterSpacing: '-0.3px', color: '#333333' }}>{_item.name}</div>
                                    {(_item.status == 1) ? <>
                                        <div className='textGray3 mb-1' style={{ fontSize: '13px' }}>{moment(_item.regDt).format("YYYY.MM.DD")} 방문</div>
                                        <div className='flex mb-1'>
                                            {(_item.score >= 1) ? <img src='/images/ic_star_color.png' /> : <img src='/images/ic_star_grey.png' />}
                                            {(_item.score >= 2) ? <img src='/images/ic_star_color.png' /> : <img src='/images/ic_star_grey.png' />}
                                            {(_item.score >= 3) ? <img src='/images/ic_star_color.png' /> : <img src='/images/ic_star_grey.png' />}
                                            {(_item.score >= 4) ? <img src='/images/ic_star_color.png' /> : <img src='/images/ic_star_grey.png' />}
                                            {(_item.score >= 5) ? <img src='/images/ic_star_color.png' /> : <img src='/images/ic_star_grey.png' />}
                                        </div>
                                    </> : <></>}
                                    <div style={{ marginTop: '5px' }}>
                                        <span className='text-xs textGray3 px-1.5' style={{ marginRight: '5px', backgroundColor: '#f0f5f8', paddingTop: '3px', paddingBottom: '3px' }}>{_type == "academy" ? _item.subject : _item.region}</span>
                                        <span className='text-xs textGray3 px-1.5' style={{ backgroundColor: '#f0f5f8', paddingTop: '3px', paddingBottom: '3px' }}>{_type == "academy" ? "학원" : _item.field}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Link href={_type == "academy" ? "/addacademy" : "/addplace"} passHref>
                <div className='fixed bottom-0 right-0 z-100'>
                    <img src='/images/ic_float.png' />
                </div>
            </Link>
            <Fragment>
                <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} anchor={"right"} PaperProps={{ sx: { width: "80%" } }}>
                    <PlaceListDrawer param={param} setParam={setParam} setDrawerOpen={setDrawerOpen} getItems={getItems} />
                </Drawer>
            </Fragment>
        </div >
        : <div className="h-screen w-screen"><CircleLoading /></div>
}

export default InstiMap;

InstiMap.getInitialProps = async (ctx) => {
    return {
        query: ctx.query
    }
}