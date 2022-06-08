/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from 'react';
import network from '../util/network';
import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link";
import Toast from '../components/common/toast';
import { getAuth } from "firebase/auth";

const Etc = () => {
    const auth = getAuth();
    const [ToastStatus, setToastStatus] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const _orders = [{ value: "reg", label: "최신순" }, { value: "name", label: "이름순" }];
    const [items, setItems] = useState([]);
    const [order, setOrder] = useState(_orders[0]);

    const getItems = async () => {
        const res = await network.post('/home/recommEtc', { order: order.value })
        setItems(res.data)
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (_user) => {
            if (_user) {
                getItems();
            }
        });
    }, [])

    const clickOrder = () => {
        setOrder(order.value == "name" ? _orders[1] : _orders[0]);
    }

    const moreITems = async () => {
        const res = await network.post('/home/recommEtc', { order: order.value, offset: items.length, limit: 20 });
        if (res.data.length == 0) setHasMore(false);
        setItems(items.concat(res.data));
    }

    const addBookmark = async (commonItemUid, idx) => {
        const _result = await network.post('/locker/addbookmark', { commonItemUid });
        items[idx].bookmark = true;
        setToastStatus(true);
        setItems([].concat(items));
    }

    useEffect(() => {
        if (ToastStatus) setTimeout(() => setToastStatus(false), 1000);
    }, [ToastStatus]);

    return (
        <InfiniteScroll
            dataLength={items.length}
            next={moreITems}
            hasMore={hasMore}
        >
            <div>
                <header className='sticky top-0 left-0 right-0 visible opacity-100 pb-3.5 bg-white z-100' style={{ marginBottom: '-50px' }}>
                    <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white border-b border-solid border-gray3' style={{ height: '50px' }}>
                        <div className='flex-1 flex items-center'>
                            <img src='/images/ic_back.png' onClick={() => { window.history.back() }} />
                            <div className='my-0 mx-auto text-base font-medium' style={{ letterSpacing: '-0.3px' }}>기타</div>
                        </div>
                    </div>
                </header>
                <main className='my-14'>
                    <div className='mx-4'>
                        <div className='block relative' style={{ height: '26px' }}>
                            <div className='block absolute right-0'>
                                <span className='bg-gray2 py-1.5 px-2 text-xs text-center textGray2 rounded' onClick={clickOrder}>↑↓ {order.label}</span>
                            </div>
                        </div>
                        <div className='mt-5'>
                            {
                                items.map((item, idx) => {
                                    return (
                                        <Link href={{ pathname: '/item', query: { commonItemUid: item.commonItemUid } }} key={idx} passHref>
                                            <div className='flex mt-5'>
                                                <div className='mr-4 block relative'>
                                                    <img src={item.image} className='rounded-md' style={{ width: '94px', height: '94px' }} />
                                                    <img src={`/images/ic_${item.bookmark ? 'bookmarked.png' : 'bookmark.png'}`} className='block absolute bottom-0 right-0 mr-2 mb-1.5' onClick={(e) => {
                                                        e.preventDefault();
                                                        addBookmark(item.commonItemUid, idx);
                                                    }} />
                                                </div >
                                                <div>
                                                    <h3 className='text-base font-semibold mb-1.5' style={{ letterSpacing: '-0.3px' }}>{item.name}</h3>
                                                    <div className='flex'>
                                                        <span className='py-1 px-1.5 mr-1.5 rounded text-xs textGray3' style={{ backgroundColor: '#f0f5f8' }}>{item.subject}</span>
                                                        <span className='py-1 px-1.5 mr-1.5 rounded text-xs textGray3' style={{ backgroundColor: '#f0f5f8' }}>{item.field}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </main>
            </div>
            {ToastStatus ? <Toast msg={'보관함에 추가되었습니다.'} /> : <></>}
        </InfiniteScroll>
    )
}

export default Etc;