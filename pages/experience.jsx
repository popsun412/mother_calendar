/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, Fragment } from 'react';
import network from '../util/network';
import { Drawer } from "@mui/material";
import ExperienceFilter from "../components/experience/experience_filter";
import InfiniteScroll from "react-infinite-scroll-component";
import Toast from '../components/common/toast';
import { getAuth } from "firebase/auth";
import Link from "next/link";

const Experience = () => {
    const auth = getAuth();
    const [ToastStatus, setToastStatus] = useState(false);

    const [hasMore, setHasMore] = useState(true);

    const [param, setParam] = useState({
        order: "reg",
        regions: [],
        fields: [],
        age: [1, 4]
    });

    const [filterOpen, setFilterOpen] = useState(false);
    const [items, setItems] = useState([]);

    const getItems = async () => {
        setItems([]);
        const res = await network.post('/home/recommPlace', param);
        setItems(res.data)
    }

    const moreITems = async () => {
        const res = await network.post('/home/recommPlace', { ...param, offset: items.length, limit: 20 });
        if (res.data.length == 0) setHasMore(false);
        setItems(items.concat(res.data));
    }


    useEffect(() => {
        auth.onAuthStateChanged(async (_user) => {
            if (_user) {
                getItems();
            }
        });
    }, [])

    const addBookmark = async (commonItemUid, idx) => {
        const _result = await network.post('/locker/addbookmark', { commonItemUid });
        items[idx].bookmark = true;
        setToastStatus(true);
        setItems([].concat(items));
    }

    useEffect(() => {
        if (ToastStatus) setTimeout(() => setToastStatus(false), 1000);
    }, [ToastStatus]);

    return (<>
        <InfiniteScroll
            dataLength={items.length}
            next={moreITems}
            hasMore={hasMore}
        >
            <div>
                <header className='sticky top-0 left-0 right-0 visible opacity-100 pb-3.5 bg-white z-100' style={{ marginBottom: '-50px' }}>
                    <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white border-b border-solid border-gray3' style={{ height: '50px' }}>
                        <div className='flex-1 flex items-center justify-between'>
                            <div className="absolute left-0 right-0 mx-10 text-center" style={{ letterSpacing: '-0.3px' }}>체험</div>
                            <img src='/images/ic_back.png' onClick={() => { window.history.back() }} />
                            <img src='/images/filter.png' onClick={() => setFilterOpen(true)} />
                        </div>
                    </div>
                </header>
                <main style={{ marginTop: '55px' }}>
                    <div className='my-2 mx-5'>
                        {
                            items.map((item, idx) => {
                                return (
                                    <Link href={{ pathname: '/item', query: { commonItemUid: item.commonItemUid } }} key={idx} passHref>
                                        <div className='flex mb-5'>
                                            <div className='mr-4 block relative'>
                                                <img src={item.image} className='rounded-md' style={{ width: '94px', height: '94px' }} />
                                                <img src={`/images/ic_${item.bookmark ? 'bookmarked.png' : 'bookmark.png'}`} className='block absolute bottom-0 right-0 mr-2 mb-1.5' onClick={() => addBookmark(item.commonItemUid, idx)} />
                                            </div >
                                            <div>
                                                <h3 className='text-base font-semibold mb-1.5'>{item.name}</h3>
                                                <div className='flex'>
                                                    <span className='py-1 px-1.5 mr-1.5 rounded text-xs textGray3' style={{ backgroundColor: '#f0f5f8' }}>{item.region}</span>
                                                    <span className='py-1 px-1.5 mr-1.5 rounded text-xs textGray3' style={{ backgroundColor: '#f0f5f8' }}>{item.field}</span>

                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div >
                </main >
            </div>
        </InfiniteScroll>
        {ToastStatus ? <Toast msg={'보관함에 추가되었습니다.'} /> : <></>}
        <Fragment>
            <Drawer open={filterOpen} onClose={() => setFilterOpen(false)} anchor='right' PaperProps={{ sx: { width: "80%" } }}>
                <ExperienceFilter setFilterOpen={setFilterOpen} param={param} setParam={setParam} getItems={getItems} />
            </Drawer>
        </Fragment>
    </>)
}

export default Experience;