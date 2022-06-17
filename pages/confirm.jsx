/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import moment from 'moment';
import network from "../util/network";
import InfiniteScroll from "react-infinite-scroll-component";
import { profileImageCheck } from "../util/helper";

const Confirm = () => {
    const router = useRouter();
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [info, setInfo] = useState(null);

    const getPlan = async () => {
        const _result = await network.get(`/planauth/commonPlan`, {
            params: {
                date: moment(router.query.date).format("YYYY-MM-DD"),
                commonPlanUid: router.query.commonPlanUid,
            }
        });

        setInfo(_result.data);
    }

    const getItems = async () => {
        const _result = await network.get(`/daily`, {
            params: {
                date: moment(router.query.date).format("YYYY-MM-DD"),
                commonPlanUid: router.query.commonPlanUid,
                offset: items.length
            }
        });

        setItems(_result.data);
    }

    const moreITems = async () => {
        const _result = await network.get(`/daily`, {
            params: {
                date: moment(router.query.date).format("YYYY-MM-DD"),
                commonPlanUid: router.query.commonPlanUid,
                offset: items.length
            }
        });

        if (_result.data.length == 0) setHasMore(false);
        setItems(items.concat(_result.data));
    }

    // show model
    const showModel = {
        babysAge(_user) {
            const _now = new Date();
            const _ages = [];

            _user.babys.map((_baby) => {
                const _birth = moment(_baby.birth, 'YYYY-MM-DD').toDate();
                const _age = _now.getFullYear() - _birth.getFullYear() + 1;
                _ages.push(`${_age}세`);
            });

            return _ages.join(' ');
        },
        region(_user) {
            return _user.region ?? "";
        },
        nick(_user) {
            return (_user.interest == "엄마표 교육") ? "엄마표" : _user.interest;
        }
    }

    useEffect(() => {
        if (router.query.date && router.query.commonPlanUid) {
            getPlan();
            getItems();
        }
    }, [router.query.date])

    return <InfiniteScroll
        dataLength={items.length}
        next={moreITems}
        hasMore={hasMore}
    >
        <div>
            <header className='sticky top-0 left-0 right-0 opacity-100 visible' style={{ marginBottom: '-50px' }}>
                <div className='flex items-center relative mx-auto my-0 box-border py-4 w-full bg-white' style={{ height: '50px' }}>
                    <img src='/images/ic_back.png' className="w-10 relative -left-4 flex-shrink-0" onClick={() => { window.history.back(); }} />
                    <div className='absolute left-0 right-0 mx-10 flex justify-center items-center'>
                        <span className='px-1.5 py-1 bg5 text-white rounded text-xs mr-2'>{info?.subject ?? ""}</span>
                        <span className='text-sm font-medium'>{info?.name ?? ""}</span>
                    </div>
                </div>
            </header>
            <main className='mt-14'>
                <section>
                    <div className='flex my-4 py-4 border-b border-solid border-gary4'>
                        <div className='text-sm ml-5' style={{ letterSpacing: '-0.42px' }}>{moment(router.query.date).format('YYYY년 M월 D일')}</div>
                        <div className='flex text-sm mr-5 ml-auto items-center' style={{ letterSpacing: '-0.13px' }}>
                            👦 <span className='ml-1 mr-1 textOrange4 font-semibold'>{info?.count ?? 0}</span> 명 인증 완료
                        </div>
                    </div>
                    <div className='mx-5 mt-6'>
                        {items.map((_item) => {
                            return <div className='flex mb-6' key={_item.uid}>
                                <div className='flex items-center h-9 overflow-hidden'>
                                    <div className='mr-2 block absolute' style={{ width: '22px', height: '22px' }}>
                                        <div
                                            className="rounded-full"
                                            style={{
                                                backgroundImage: `url("${profileImageCheck(_item)}")`,
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover",
                                                width: "100%",
                                                paddingTop: "100%",
                                                backgroundPosition: "center center"
                                            }}
                                        />
                                    </div>
                                    <div className='mr-2 ml-8 text-sm font-medium whitespace-nowrap'>{_item.nickName}</div>
                                    <div className='border border-solid border-color3 textOrange3 whitespace-nowrap'
                                        style={{ padding: '4px 9px 5px', fontSize: '11px', borderRadius: '13.5px' }}>{`${showModel.babysAge(_item)}, ${showModel.region(_item)}, ${showModel.nick(_item)}`}</div>
                                </div>
                            </div>
                        })}
                    </div>
                </section>
            </main>
        </div>
    </InfiniteScroll>
}

export default Confirm;