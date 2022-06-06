/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from 'react';
import network from '../util/network';
import InfiniteScroll from "react-infinite-scroll-component";

const Etc = () => {
    const [hasMore, setHasMore] = useState(true);
    const _orders = [{ value: "name", label: "이름순" }, { value: "reg", label: "최신순" }];
    const [items, setItems] = useState([]);
    const [order, setOrder] = useState(_orders[0]);

    const getItems = async () => {
        const res = await network.post('/home/recommEtc', { order: order.value })
        setItems(res.data)
    }

    useEffect(() => {
        getItems();
    }, [order])

    const clickOrder = () => {
        setOrder(order.value == "name" ? _orders[1] : _orders[0]);
    }

    const moreITems = async () => {
        const res = await network.post('/home/recommEtc', { order: order.value, offset: items.length, limit: 20 });
        if (res.data.length == 0) setHasMore(false);
        setItems(items.concat(res.data));
    }

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
                                        <div className='flex mt-5' key={idx}>
                                            <div className='mr-4 w-24 h-24'>
                                                <img src={item.image} className='rounded-md' />
                                            </div>
                                            <div>
                                                <h3 className='text-base font-semibold mb-1.5' style={{ letterSpacing: '-0.3px' }}>{item.name}</h3>
                                                <div className='flex'>
                                                    <span className='py-1 px-1.5 mr-1.5 rounded text-xs textGray3' style={{ backgroundColor: '#f0f5f8' }}>{item.field}</span>
                                                    <span className='py-1 px-1.5 mr-1.5 rounded text-xs textGray3' style={{ backgroundColor: '#f0f5f8' }}>{item.subject}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </main>
            </div>
        </InfiniteScroll>
    )
}

export default Etc;