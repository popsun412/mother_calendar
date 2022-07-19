/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import network from '../../util/network';
import { useRouter } from 'next/router';
import LockerItem from '../locker/locker_item';
import InfiniteScroll from "react-infinite-scroll-component";

const BookshelfSell = (props) => {
    const [hasMore, setHasMore] = useState(true);
    const router = useRouter();
    const { params, activeTab } = props;
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await network.post('/locker/items', { ...params, userUid: props.userUid });
        console.log(res.data);

        res.data ? setData(res.data) : null;
    }

    const moreItem = async () => {
        const res = await network.post('/locker/items', { ...params, userUid: props.userUid, offset: data.length });
        if (res.data.length == 0) setHasMore(false);
        setData(data.concat(res.data));
    }

    useEffect(() => {
        if (activeTab == 2) {
            params['status'] = 2;
            setHasMore(true);
            getData();
        }
    }, [params, activeTab]);

    const onDelete = async (_item, index) => {
        const _check = confirm("아이템 내역 즉시 삭제되고, 복원할 수 없습니다.\n삭제하시겠습니까?");

        if (_check) {
            await network.delete(`/locker/${_item.itemUid}`);
            data.splice(index, 1);
            setData([].concat(data));
        }
    }

    return <InfiniteScroll
        dataLength={data.length}
        next={moreItem}
        hasMore={hasMore}
    >
        <div className='mx-5 pt-5 space-y-5 flex flex-col'>
            {
                data.length > 0
                    ? data.map((item, index) => <LockerItem key={index} item={item} onDelete={() => onDelete(item, index)} isMe={props.isMe} />)
                    : <div className='absolute top-1/2 left-4 right-4' style={{ transform: 'translateY(-50%)' }}>
                        <div className='items-center justify-center'>
                            <img src='/images/no_result.png' width={'93px'} height={'113px'} style={{ margin: '0 auto' }} />
                            <div className='text-sm text-center textGray4 mt-2.5' style={{ lineHeight: 1.7, letterSpacing: '-0.28px' }}>
                                아이템이 없습니다.<br />
                                {props.isMe ? "내가 판매완료한 아이템으로 채워주세요!" : ""}
                            </div>
                        </div>
                    </div>
            }
        </div>
    </InfiniteScroll>
}

export default BookshelfSell;