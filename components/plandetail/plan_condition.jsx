import React, { useState } from 'react';
import moment from 'moment';
import Link from 'next/link';

const PlanCondition = () => {

    const [date, setDate] = useState(new Date());

    const data = [
        {
            date: '20220301',
            people: 60
        },
        {
            date: '20220301',
            people: 60
        },
        {
            date: '20220301',
            people: 60
        },
        {
            date: '20220301',
            people: 60
        },
        {
            date: '20220401',
            people: 60
        },
        {
            date: '20220501',
            people: 60
        },
        {
            date: '20220601',
            people: 60
        },
        {
            date: '20220701',
            people: 60
        },
        {
            date: '20220801',
            people: 60
        },
        {
            date: '20220901',
            people: 60
        },
        {
            date: '20221001',
            people: 60
        }
    ]

    const moveMonth = (param) => () => {
        const thisMonth = date;
        const mvMonth = new Date(date);

        param === 'prev' ? mvMonth.setMonth(thisMonth.getMonth()-1) : mvMonth.setMonth(thisMonth.getMonth()+1);

        setDate(mvMonth);
    }

    return (
        <div>
            <div className='flex mx-5 my-6 text-sm'>
                <div className='my-0 mx-auto flex-1 text-left' onClick={moveMonth('prev')}>{'<'}</div>
                <div className='my-0 mx-auto flex-1 text-center'>{moment(date).format('YYYY년 M월')}</div>
                <div className='my-0 mx-auto flex-1 text-right' onClick={moveMonth('next')}>{'>'}</div>
            </div>
            <div className='my-6'>
                {
                    data.map((item, idx) => {
                        return (
                            item.date.substring(0, 6) === moment(date).format('YYYYMM') ?
                            <div className='flex m-5 text-sm items-center' key={idx}>
                                <span className='textGray2 my-0 mx-auto flex-1 text-left' style={{letterSpacing: '-0.42px'}}>{moment(item.date).format('YYYY년 M월 YY일')}</span>
                                <span className='textGray2 my-0 mx-auto flex-1 text-right' style={{letterSpacing: '-0.13px'}}>👦 <span className='textOrange4 font-semibold'>{item.people}명</span> 인증 완료</span>
                                <Link href={{
                                    pathname: '/confirm',
                                    query: { date: item.date }
                                }}>
                                    <img src='/images/ic_arrow-right-circle.png' className='ml-2' style={{width: '17px', height: '17px'}}/>
                                </Link>
                            </div> : ''
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PlanCondition;