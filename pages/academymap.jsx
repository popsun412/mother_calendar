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
import LockerItem from "../components/locker/locker_item";
import InfiniteScroll from "react-infinite-scroll-component";

const AcademyMap = (props) => {
    const [totalCount, setTotalCount] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const router = useRouter();
    const [lockerDrawerOpen, setLockerDrawerOpen] = useState(false);
    let _type = null;

    const [load, setLoad] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [param, setParam] = useState({
        lockerType: "학원",
        order: "reg",
        status: [],
        region: [],
        subject: [],
        field: [],
    });

    const auth = getAuth();

    const getItems = async () => {
        setHasMore(true);
        const _result = await network.post('/locker/mapitems', { ...param, userUid: props.query.userUid });
        setItems(_result.data);
    }

    const moreItem = async () => {
        const _result = await network.post('/locker/mapitems', { ...param, userUid: props.query.userUid, offset: items.length });
        if (_result.data.length == 0) setHasMore(false);
        setItems(items.concat(_result.data));
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (_user) => {
            if (_user) {
                getTotalCount();
                await getItems();
                setLoad(true);
            }
        });
    }, []);

    const isMe = () => {
        if (props.query.userUid == undefined || props.query.userUid == "") return true;

        return (auth.currentUser?.uid ?? "") == props.query.userUid;
    };

    const onDelete = async (_item, index) => {
        const _check = confirm("삭제하시겠습니까?");

        if (_check) {
            await network.delete(`/locker/${_item.itemUid}`);
            data.splice(index, 1);
            setData([].concat(data));
        }
    }

    // 모든 아이템 갖고오기
    const getTotalCount = async () => {
        try {
            const _result = await network.get(`/lockerTimeCount?lockerType=${"학원"}`);
            setTotalCount(_result.data);
        } catch (error) {
            console.log(error);
        }
    }


    return load
        ? <InfiniteScroll
            dataLength={items.length}
            next={moreItem}
            hasMore={hasMore}
        >
            <div className='w-screen h-screen overflow-y-auto scrollbar-hide'>
                <header className='fixed top-0 left-0 right-0 visible opacity-100 bg-white z-100' style={{ marginBottom: '-50px' }}>
                    <div className='relative flex items-center w-full justify-between px-4 bg-white border-b border-solid border-gray3' style={{ height: '50px' }}>
                        <div className="flex items-center">
                            <img src='/images/ic_back.png' className="w-10 relative -left-4 flex-shrink-0" onClick={() => { window.history.back() }} />
                            <BookmarkBorderOutlined onClick={() => setLockerDrawerOpen(true)} className="relative -left-4" />
                        </div>
                        <div className='absolute left-0 right-0 mx-20 text-base font-medium text-center' style={{ letterSpacing: '-0.3px' }}>학원지도 ({totalCount}개)</div>
                        <div className='flex mr-2' style={{ width: '20px' }}>
                            <Link href='/exmap' passHref><img src='/images/ic_map.png' className='mr-3 hidden' /></Link>
                            <img src='/images/filter.png' onClick={() => setDrawerOpen(true)} style={{ width: 24 }} />
                        </div>
                    </div>
                </header>
                <main className="pb-20" style={{ marginTop: '50px' }}>
                    <section className='mx-5 pt-5 space-y-5 flex flex-col'>
                        {items.length > 0
                            ? items.map((item, index) => <LockerItem key={index} item={item} onDelete={() => onDelete(item, index)} isMe={isMe()} />)
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
                    </section>
                </main>
                {
                    isMe() ? <Link href={"/addacademy"} passHref>
                        <div className='fixed bottom-0 right-0 z-100'>
                            <img src='/images/ic_float.png' style={{ width: 72, height: 72 }} />
                        </div>
                    </Link> : <></>
                }
                <Fragment>
                    <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} anchor={"right"} PaperProps={{ sx: { width: "70%" } }}>
                        <PlaceListDrawer param={param} setParam={setParam} setDrawerOpen={setDrawerOpen} getItems={getItems} />
                    </Drawer>
                </Fragment>

                <Fragment>
                    <Drawer open={lockerDrawerOpen} onClose={() => setLockerDrawerOpen(false)}                >
                        <LockerDrawer userUid={props.query.userUid ?? auth.currentUser.uid} />
                    </Drawer>
                </Fragment>
            </div >
        </InfiniteScroll>
        : <div className="h-screen w-screen"><CircleLoading /></div>
}

export default AcademyMap;

AcademyMap.getInitialProps = async (ctx) => {
    return {
        query: ctx.query
    }
}