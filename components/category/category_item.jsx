/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, Fragment, useCallback } from 'react';
import { Drawer } from '@material-ui/core';
import network from '../../util/network';
import Link from 'next/link';
import Toast from '../common/toast';
import CategoryItemFilter from "../category/category_item_filter";
import GlobalStyles from '@mui/material/GlobalStyles';

const CategoryItem = (props) => {
    const [getting, setGetting] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);
    const [param, setParam] = useState({
        order: "reg",
        fields: [],
        age: [1, 4]
    });

    const [ToastStatus, setToastStatus] = useState(false);
    const { category, setCategory } = props;
    const [data, setData] = useState([]);

    const getItems = async () => {
        if (category != "전체" && category != "") param = { ...param, subject: category };
        const res = await network.post('/home/recommItems', param);

        setData(res.data);
        setGetting(false);
    }

    const moreITems = async () => {
        if (category != "전체" && category != "") param = { ...param, subject: category };
        const res = await network.post('/home/recommItems', { ...param, offset: data.length });

        setData(data.concat(res.data));

        setGetting(res.data.length == 0);
    }

    useEffect(() => {
        getItems();
    }, [category])

    const addBookmark = async (commonItemUid, idx) => {
        const _result = await network.post('/locker/addbookmark', { commonItemUid });
        data[idx].bookmark = true;
        setToastStatus(true);
        setData([].concat(data));
    }

    useEffect(() => {
        if (ToastStatus) setTimeout(() => setToastStatus(false), 1000);
    }, [ToastStatus]);

    const filterStatus = () => {
        let _filters = ["정렬"];
        if (param.fields.length > 0) _filters.push("영역");
        if (Math.min.apply(Math, param.age) != 1 || Math.max.apply(Math, param.age) != 4) _filters.push("연령");

        return { value: _filters.length > 1, label: _filters.join(",") }
    }


    // 스크롤 체크
    const handleScroll = async () => {
        if (props.scrollCheckRef.current.scrollHeight - (props.scrollCheckRef.current.scrollTop + window.screen.height) < 100) {
            if (!getting) setGetting(true);
        };
    }

    useEffect(() => {
        props.scrollCheckRef.current.addEventListener("scroll", handleScroll);
    }, [handleScroll])

    useEffect(async () => {
        if (getting) await moreITems();
    }, [getting])

    return <>

        <GlobalStyles
            styles={{
                ".MuiDrawer-paper": {
                    width: "80% !important"
                }
            }}
        />

        <div className='mx-5'>
            <div className='my-4 text-right'>
                <div className='flex justify-end'>
                    <span className={`flex items-center py-1.5 px-3 border border-solid rounded text-xs ${filterStatus().value ? 'border-blue4 textBlue4' : 'border-gary3 textGray4'}`}
                        onClick={() => setFilterOpen(true)}>
                        <span style={{ marginRight: '3.4px' }}>
                            <img src={`${filterStatus().value ? '/images/filter_select.png' : '/images/filter.png'}`} className="w-4" />
                        </span>
                        <span className={`text-sm ${filterStatus().value ? 'textBlue4' : 'textGray2'}`}>{filterStatus().label}</span>
                    </span>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-2 gap-x-4 gap-y-6'>
                    {
                        data.map((item, idx) => {
                            return (
                                <Link href={{
                                    pathname: '/item',
                                    query: { commonItemUid: item.commonItemUid }
                                }} key={idx} passHref>
                                    <div>
                                        <div className='block relative'>
                                            <img src={item.image} className='rounded-md' />
                                            {item.bookmark
                                                ? <img src='/images/ic_bookmarked.png' className='block absolute bottom-0 right-0 pr-2.5 pb-3 w-3' />
                                                : <img src='/images/ic_bookmark.png' className='block absolute bottom-0 right-0 pr-2.5 pb-3 w-3' onClick={(e) => {
                                                    e.preventDefault();
                                                    if (item.bookmark) return;
                                                    addBookmark(item.commonItemUid, idx)
                                                }} />
                                            }

                                        </div>
                                        <div className='my-2 text-base font-semibold'>{item.name}</div>
                                        <div>
                                            <span className='mr-1.5 py-1 px-1.5 rounded text-xs text-center textGray3' style={{ backgroundColor: '#f0f5f8' }}>{item.subject}</span>
                                            <span className='mr-1.5 py-1 px-1.5 rounded text-xs text-center textGray3' style={{ backgroundColor: '#f0f5f8' }}>{item.field}</span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        {ToastStatus ? <Toast msg={'보관함에 등록되었습니다.'} /> : <></>}
        <Fragment>
            <Drawer open={filterOpen} onClose={() => setFilterOpen(false)} anchor='right'>
                <CategoryItemFilter setFilterOpen={setFilterOpen} param={param} setParam={setParam} getItems={getItems} />
            </Drawer>
        </Fragment>
    </>
}

export default CategoryItem;