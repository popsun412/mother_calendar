import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/locale';

import "../../styles/test.module.css";


export default function CalendarPopUp(props) {
    const getDateFormat = () => {
        const _year = props.selectedDate.getFullYear();
        const _month = props.selectedDate.getMonth();
        const _week = weekOfMonth(moment(props.selectedDate));

        return `${_year}년 ${_month + 1}월 ${_week}주차`;
    }

    // 주차 구하기
    const weekOfMonth = (_moment) => _moment.week() - moment(_moment).startOf('month').week() + 1;

    return (
        <>
            <DatePicker
                selected={props.selectedDate}
                onChange={(date) => props.setSelectedDate(date)}
                dateFormat={getDateFormat()}
                locale={ko}
                displayStaticWrapperAs="desktop"
                className="bg-transparent outline-none caret-transparent"
                onChangeRaw={(e) => e.preventDefault()}
            />
        </>
    );
};

