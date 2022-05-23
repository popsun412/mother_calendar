import moment from 'moment';
import React, { useState } from 'react';

const PlanRecommend = (props) => {

    const { data } = props;

    const getRepeatDay = (param) => {
        const result = [];
        let repDay = '';

        for(let i=0; i<param.length; i++) {
            param[i] == 0 ? result.push('일요일') : param[i] == 1 ? result.push('월요일') : param[i] == 2 ? result.push('화요일') : 
                param[i] == 3 ? result.push('수요일') : param[i] == 4 ? result.push('목요일') : param[i] == 5 ? result.push('금요일') : result.push('토요일')
        }

        if (result.length > 1) {
            result.forEach(item => {
                console.log(item)
                repDay = repDay + item + ', ';
            })
            repDay = repDay.slice(0, -2);
        } else {
            repDay = item;
        }

        return repDay;
    }

    const getTime = (param) => {
        const time = param.substring(0, 2) + ':' + param.substring(2, 4);
        const arr = time.split(':');
        let result = '';

        parseInt(arr[0]) > 11 ? result += ('오후 ' + parseInt(arr[0]-12) + '시') : result += ('오전 ' + arr[0] + '시');
        parseInt(arr[1]) > 0 ? result += (arr[1] + '분') : '';

        return result;
    }

    return (
        <>
            <section className='mb-8 mx-5'>
                <div>
                    <h3 className='text-base font-semibold mb-3' style={{ letterSpacing: '-0.32px' }}>추천 루틴</h3>
                    <div className="bg-gray2 rounded-md px-5 py-3.5 mb-5">
                        <p className="textGray2 font-semibold text-base mb-3">주 {data.repeatDay.length}회  |  매주 {getRepeatDay(data.repeatDay)}</p>
                        <div className="textGray3 font-normal text-sm flex flex-col space-y-2.5">
                            <div className="flex flex-row">
                                <img src="/images/calendar.png" alt="캘린더이미지" className="w-3.5 h-3.5 my-auto mx-0" />
                                <span className='ml-1.5'>{moment(data.startDate).format('YYYY년 M월 D일')} - {moment(data.endDate).format('YYYY년 M월 D일')}</span>
                            </div>
                            <div className="flex flex-row">
                                <img src="/images/clock.png" alt="시계이미지" className="w-3.5 h-3.5 my-auto mx-0" />
                                <span className='ml-1.5'>{getTime(data.startTime)} - {getTime(data.endTime)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PlanRecommend;