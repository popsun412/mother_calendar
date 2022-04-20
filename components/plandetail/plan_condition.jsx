import React from 'react';
import moment from 'moment';

const PlanCondition = () => {

    const data = [
        {
            date: '20220213',
            people: 60
        },
        {
            date: '20220213',
            people: 60
        },
        {
            date: '20220213',
            people: 60
        },
        {
            date: '20220213',
            people: 60
        },
        {
            date: '20220213',
            people: 60
        },
        {
            date: '20220213',
            people: 60
        },
        {
            date: '20220213',
            people: 60
        }
    ]

    return (
        <div>
            <div className='flex mx-5 my-6 text-sm'>
                <div className='my-0 mx-auto flex-1 text-left'>{'<'}</div>
                <div className='my-0 mx-auto flex-1 text-center'>2022년 8월</div>
                <div className='my-0 mx-auto flex-1 text-right'>{'>'}</div>
            </div>
            <div className='my-6'>
                {
                    data.map((item, idx) => {
                        return (
                            <div className='flex m-5 text-sm' key={idx}>
                                <span className='textGray2 my-0 mx-auto flex-1 text-left' style={{letterSpacing: '-0.42px'}}>{moment(item.date).format('YYYY년 M월 YY일')}</span>
                                <span className='textGray2 my-0 mx-auto flex-1 text-right' style={{letterSpacing: '-0.13px'}}>👦 <span className='textOrange4 font-semibold'>{item.people}명</span> 인증 완료</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PlanCondition;