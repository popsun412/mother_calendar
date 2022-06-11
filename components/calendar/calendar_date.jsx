/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import CalendarDateItem from "./calendar_date_item";
import moment from "moment";
import network from "../../util/network";
import { useRouter } from "next/router";

export default function CalendarDate(props) {
    const router = useRouter();

    const [dates, setDates] = useState([]);
    const _weekday = moment(props.selectedDate).weekday();

    const calDate = (value) => {
        if (value < 0) {
            return moment(props.selectedDate).add(value * -1, 'd');
        } else {
            return moment(props.selectedDate).subtract(value, 'd');
        }
    }

    const getDateStatus = async (_newDates) => {
        const _result = await network.post("/calendar/weekStatus", {
            userUid: props.selectedUserUid,
            dates: _newDates.map((_date) => _date.date.format("YYYY-MM-DD"))
        });

        _result.data.map((_status) => {
            const _findIndex = _newDates.findIndex((_date) => _date.date.format("YYYY-MM-DD") == moment(_status.date, "YYYY-MM-DD").format("YYYY-MM-DD"));
            _newDates[_findIndex] = {
                ..._newDates[_findIndex],
                authCount: _status.authCount,
                planCount: _status.planCount
            }
        });

        setDates([].concat(_newDates));
    }

    // 주간 변경여부 확인
    useEffect(() => {
        const _newDates = [
            { week: "일", date: calDate(_weekday - 0), authCount: 0, planCount: 0 },
            { week: "월", date: calDate(_weekday - 1), authCount: 0, planCount: 0 },
            { week: "화", date: calDate(_weekday - 2), authCount: 0, planCount: 0 },
            { week: "수", date: calDate(_weekday - 3), authCount: 0, planCount: 0 },
            { week: "목", date: calDate(_weekday - 4), authCount: 0, planCount: 0 },
            { week: "금", date: calDate(_weekday - 5), authCount: 0, planCount: 0 },
            { week: "토", date: calDate(_weekday - 6), authCount: 0, planCount: 0 },
        ];

        getDateStatus(_newDates);
    }, [props.selectedDate, props.selectedUserUid]);

    const dateClick = (_index) => {
        props.setSelectedDate(dates[_index].date.toDate());
    }

    return (
        <div className="flex px-4 justify-between pb-4">
            {dates.map((_date, index) => <CalendarDateItem
                key={index}
                date={_date}
                selected={moment(props.selectedDate).format("yyyy-MM-D") == _date.date.format("yyyy-MM-D")}
                onClick={() => dateClick(index)}
            />)}
        </div>
    )
}