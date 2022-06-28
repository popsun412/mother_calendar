/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, Fragment } from 'react';
import { Box, Drawer } from '@material-ui/core';
import BookshelfInstock from '../components/bookshelf/bookshelf_instock';
import BookshelfPurchase from '../components/bookshelf/bookshelf_purchase';
import BookshelfSell from '../components/bookshelf/bookshlef_sell';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import Link from 'next/link';
import { Global } from '@emotion/react';
import { getAuth } from "firebase/auth";
import network from '../util/network';
import { useRouter } from 'next/router';
import CircleLoading from "../components/common/circle_loading";
import { BookmarkBorderOutlined } from "@mui/icons-material"
import LockerDrawer from "../components/calendar/locker_drawer";
import BookshlefFilterDrawer from "../components/bookshelf/bookshlef_filter_drawer";
import { useRecoilState } from "recoil";
import { bookshelfActiveState } from "../states/locker_states";
import GlobalStyles from '@mui/material/GlobalStyles';

const Bookshelf = (props) => {
    const [totalCount, setTotalCount] = useState(0);
    const [filterOpen, setFilterOpen] = useState(false);
    const [lockerDrawerOpen, setLockerDrawerOpen] = useState(false);
    const [load, setLoad] = useState(false);
    const [activeTab, setActiveTab] = useRecoilState(bookshelfActiveState);

    const [params, setParams] = useState({ order: "reg", subject: [], field: [], lockerType: '책장' });

    const auth = getAuth();
    const router = useRouter();
    const isMe = () => {
        if (props.query.userUid == undefined || props.query.userUid == "") return true;

        return (auth.currentUser?.uid ?? "") == props.query.userUid;
    };

    // 모든 아이템 갖고오기
    const getTotalCount = async () => {
        try {
            const _result = await network.post(`/lockerTimeCount`, { lockerType: "책장", userUid: props.query.userUid });
            setTotalCount(_result.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (props.query.userUid)
            auth.onAuthStateChanged(async (_user) => {
                if (_user) {
                    getTotalCount();
                    setLoad(true);
                } else {
                    router.push('/');
                }
            });
    }, [router]);

    const obj = {
        0: <BookshelfInstock params={params} activeTab={activeTab} userUid={props.query.userUid} isMe={isMe()} />,
        1: <BookshelfPurchase params={params} activeTab={activeTab} userUid={props.query.userUid} isMe={isMe()} />,
        2: <BookshelfSell params={params} activeTab={activeTab} userUid={props.query.userUid} isMe={isMe()} />
    }

    return (<>{
        (load)
            ? <>
                <div>
                    <header className='sticky top-0 left-0 right-0 visible opacity-100 bg-white z-100' style={{ marginBottom: '-50px' }}>
                        <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white' style={{ height: '50px' }}>
                            <div className='flex items-center justify-between w-full'>
                                <div className="flex items-center">
                                    <img src='/images/ic_back.png' className="w-10 relative -left-4 flex-shrink-0" onClick={() => { router.push('/calendar'); }} />
                                    <BookmarkBorderOutlined onClick={() => setLockerDrawerOpen(true)} className="relative -left-4" />
                                </div>
                                <div className='flex'>
                                    <img src='/images/filter.png' onClick={() => setFilterOpen(true)} style={{ width: 18 }} />
                                </div>
                                <div className='absolute left-0 right-0 mx-20 text-base font-medium text-center' style={{ letterSpacing: '-0.3px' }}>책장 ({totalCount}개)</div>
                            </div>
                        </div>
                    </header>
                    <main className='mt-12 pb-20'>
                        <div className='grid grid-cols-3 text-center text-sm textGray4 border-b border-solid border-gray3' style={{ height: '40px' }}>
                            <div className={`font-semibold ${activeTab === 0 ? 'textBlue4 border-b-3 border-solid border-blue4' : ''}`}
                                style={{ lineHeight: '40px' }} onClick={() => { setActiveTab(0) }}>구매예정</div>
                            <div className={`font-semibold ${activeTab === 1 ? 'textBlue4 border-b-3 border-solid border-blue4' : ''}`}
                                style={{ lineHeight: '40px' }} onClick={() => { setActiveTab(1) }}>보유중</div>
                            <div className={`font-semibold ${activeTab === 2 ? 'textBlue4 border-b-3 border-solid border-blue4' : ''}`}
                                style={{ lineHeight: '40px' }} onClick={() => { setActiveTab(2) }}>판매완료</div>
                        </div>
                        <section>{obj[activeTab]}</section>
                    </main>
                    {isMe() ? <Link href={`/addbook`}>
                        <div className='fixed bottom-0 right-0 z-100'>
                            <img src='/images/ic_float.png' style={{ width: 72, height: 72 }} />
                        </div>
                    </Link> : <></>}
                </div>
                <Fragment>
                    <Drawer open={lockerDrawerOpen} onClose={() => setLockerDrawerOpen(false)}>
                        <LockerDrawer userUid={props.query.userUid ?? auth.currentUser.uid} />
                    </Drawer>
                </Fragment>

                <GlobalStyles styles={{ ".MuiDrawer-paper": { width: "70% !important" } }} />
                <Fragment>
                    <Drawer anchor='right' open={filterOpen} onClose={() => setFilterOpen(false)}>
                        <BookshlefFilterDrawer setFilterOpen={setFilterOpen} params={params} setParams={setParams} />
                    </Drawer>
                </Fragment>
            </>
            : <div className="w-screen h-screen"><CircleLoading /></div>
    }</>)
}

export default Bookshelf;

Bookshelf.getInitialProps = async (ctx) => {
    return {
        query: ctx.query
    }
}