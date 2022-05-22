/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import CalendarDateItem from "./calendar_date_item";
import moment from "moment";

export default function CalendarDate(props) {
    const _weekday = moment(props.selectedDate).weekday();
    const [dates, setDates] = useState([]);

    const calDate = (value) => {
        if (value < 0) {
            return moment(props.selectedDate).add(value * -1, 'd');
        } else {
            return moment(props.selectedDate).subtract(value, 'd');
        }
    }

    useEffect(() => {
        setDates([
            { select: (_weekday - 0) == 0, week: "일", date: calDate(_weekday - 0) },
            { select: (_weekday - 1) == 0, week: "월", date: calDate(_weekday - 1) },
            { select: (_weekday - 2) == 0, week: "화", date: calDate(_weekday - 2) },
            { select: (_weekday - 3) == 0, week: "수", date: calDate(_weekday - 3) },
            { select: (_weekday - 4) == 0, week: "목", date: calDate(_weekday - 4) },
            { select: (_weekday - 5) == 0, week: "금", date: calDate(_weekday - 5) },
            { select: (_weekday - 6) == 0, week: "토", date: calDate(_weekday - 6) },
        ]);
    }, [props.selectedDate])


    const dateClick = (_index) => {
        props.setSelectedDate(dates[_index].date.toDate());
    }

    return (
        <div className="flex px-4 justify-between pb-4">
            {
                dates.map((_date, index) => <CalendarDateItem key={index} date={_date} onClick={() => dateClick(index)} />)
            }
        </div>
    )
}