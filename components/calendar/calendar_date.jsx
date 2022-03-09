import { useState, useEffect } from "react";
import CalendarDateItem from "./calendar_date_item";

export default function CalendarDate() {
    const [dates, setDates] = useState([
        { select: false, week: "월", date: "10" },
        { select: false, week: "화", date: "11" },
        { select: false, week: "수", date: "12" },
        { select: false, week: "목", date: "13" },
        { select: false, week: "금", date: "14" },
        { select: false, week: "토", date: "15" },
        { select: false, week: "일", date: "16" },
    ]);

    const dateClick = (_index) => {
        dates.map((_date) => _date.select = false);
        dates[_index].select = true;
        setDates([...dates]);
    }

    return (
        <div className="flex px-4 justify-between">
            {
                dates.map((_date, index) => <CalendarDateItem key={index} date={_date} onClick={() => dateClick(index)} />)
            }
        </div>
    )
}