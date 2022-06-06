/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import network from '../../util/network';
import Toast from '../common/toast';

const HomePlace = (props) => {
    const [ToastStatus, setToastStatus] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await network.post('/best/place')
            res.data ? setData(res.data) : null;
        }
        getData();
    }, [])

    const addBookmark = async (commonItemUid, idx) => {
        const _result = await network.post('/locker/addbookmark', { commonItemUid });
        data[idx].bookmark = true;
        setToastStatus(true);
        setData([].concat(data));
    }

    useEffect(() => {
        if (ToastStatus) setTimeout(() => setToastStatus(false), 1000);
    }, [ToastStatus]);

    return <>
        <section className='my-0 mx-5'>
            <h3 className='text-xl font-semibold mb-5 mt-5' style={{ letterSpacing: '-0.4px' }}>인기 체험장소</h3>
            <div className='mt-2'>
                {
                    data.map((item, idx) => {
                        return (
                            <Link href={{ pathname: '/place', query: { commonItemUid: item.commonItemUid } }} passHref key={idx}>
                                <div className='flex mx-0 my-5'>
                                    <div className='mr-3 block relative'>
                                        <span className='absolute block top-0 py-1 px-2 text-xs text-white bg-blue3 rounded-tl-md rounded-br-md'>{idx + 1}위</span>
                                        <img src={item.image} width={'96px'} height={'96px'} className='rounded-md' style={{ width: '94px', height: '94px' }} />
                                        <img src={`/images/ic_${item.bookmark ? 'bookmarked.png' : 'bookmark.png'}`}
                                            className='absolute block bottom-0 right-0 mr-2 mb-1.5' onClick={(e) => {
                                                e.preventDefault();
                                                if (item.bookmark) return;
                                                addBookmark(item.commonItemUid, idx)
                                            }} />
                                    </div>
                                    <div>
                                        <div className='text-sm' style={{ letterSpacing: '-0.3px' }}>
                                            <p className='w-full whitespace-nowrap break-words overflow-hidden text-ellipsis m-0'>
                                                {item.name}
                                            </p>
                                        </div>
                                        <div className='flex mt-1.5'>
                                            <span className='h-5 py-0.5 px-1.5 mr-1.5 rounded text-xs textGray3' style={{ backgroundColor: '#f0f5f8' }}>{item.region}</span>
                                            <span className='h-5 py-0.5 px-1.5 mr-1.5 rounded text-xs textGray3' style={{ backgroundColor: '#f0f5f8' }}>{item.field}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
        {ToastStatus ? <Toast msg={'보관함에 추가되었습니다.'} /> : <></>}
    </>
}

export default HomePlace;
