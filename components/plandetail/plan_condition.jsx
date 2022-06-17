/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { useEffect } from 'react';
import network from "../../util/network";
import PlanMonthlyItem from "../plan/plan_monthly_item";
import { CircularProgress } from "@material-ui/core";

const PlanCondition = (props) => {
    const [date, setDate] = useState(new Date());
    const [items, setItems] = useState([]);

    const moveMonth = (param) => () => {
        const thisMonth = date;
        const mvMonth = new Date(date);

        param === 'prev' ? mvMonth.setMonth(thisMonth.getMonth() - 1) : mvMonth.setMonth(thisMonth.getMonth() + 1);

        setDate(mvMonth);
    }

    // 데이터 갖고오기
    const getData = async () => {
        setItems([]);

        const _result = await network.get(`/monthly`, {
            params: {
                date: moment(date).format("YYYY-MM"),
                commonPlanUid: props.commonPlanUid
            }
        });

        const _items = calc(_result.data);
        setItems(_items);
    }

    useEffect(() => {
        getData();
    }, [date]);

    const calc = (_datas) => {
        const _dayilyCtn = moment(date).add(1, "M").diff(moment(date), 'days');
        const _startDate = moment(moment(date).format("YYYY-MM"));

        const _result = [];
        for (let index = 0; index < _dayilyCtn; index++) {
            const _addDate = moment(_startDate.format("YYYY-MM-DD")).add(index, "d");
            const _findData = _datas.find((_data) => _data.day == (index + 1));

            _result.push({
                date: _addDate,
                count: (_findData) ? _findData.ctn : 0
            })
        }

        return _result;
    }

    return (
        <div>
            <div className='flex mx-5 my-6 text-sm'>
                <div className='my-0 mx-auto flex-1 text-left' onClick={moveMonth('prev')}>{'<'}</div>
                <div className='my-0 mx-auto flex-1 text-center'>{moment(date).format('YYYY년 M월')}</div>
                <div className='my-0 mx-auto flex-1 text-right' onClick={moveMonth('next')}>{'>'}</div>
            </div>
            <div className='my-6 flex flex-col space-y-6'>
                {items.length > 0
                    ? items.map((_item, idx) => <PlanMonthlyItem date={_item.date} count={_item.count} commonPlanUid={props.commonPlanUid} key={idx} />)
                    : <div className="h-32 flex items-center justify-center"><CircularProgress size={100} style={{ color: "#FF6035" }} /></div>}
            </div>
        </div>
    )
}

export default PlanCondition;