/* eslint-disable react-hooks/exhaustive-deps */
import PlanTitle from "./plan_title";
import WeekPlanDayInfo from "./week_plan_day_info";
import moment from "moment";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function PlanListWeek(props) {
    const [dates, setDates] = useState([]);

    const calDate = (value) => {
        if (value < 0) {
            return moment(moment(props.selectedDate).add(value * -1, 'd').format("YYYY-MM-DD"), 'YYYY-MM-DD').locale("ko");
        } else {
            return moment(moment(props.selectedDate).subtract(value, 'd').format("YYYY-MM-DD"), 'YYYY-MM-DD').locale("ko");
        }
    }

    // 주간 변경여부 확인
    useEffect(() => {
        const _weekday = moment(props.selectedDate).weekday();
        const _newDates = [
            { day: "일", date: calDate(_weekday - 0) },
            { day: "월", date: calDate(_weekday - 1) },
            { day: "화", date: calDate(_weekday - 2) },
            { day: "수", date: calDate(_weekday - 3) },
            { day: "목", date: calDate(_weekday - 4) },
            { day: "금", date: calDate(_weekday - 5) },
            { day: "토", date: calDate(_weekday - 6) },
        ];

        setDates([].concat(_newDates));
    }, [props.selectedDate])

    const checkStatus = (_item, _day, _dayIndex) => {
        const _startDate = moment(_item.startDate, "YYYY-MM-DD").locale("ko");
        const _endDate = moment(_item.endDate, 'YYYY-MM-DD').locale('ko').add(1, 'd');

        // 0 안함, 100% 2 계획 있는날, 3계획 없는날

        // 이전 날짜면 리턴
        if (_day.date.unix() <= _startDate.unix()) return 3;
        if (_day.date.unix() > _endDate.unix()) return 3;

        // 실행완료
        const _checkAuth = _item.auths.findIndex((_auth) => moment(_auth.authDt, 'YYYY-MM-DD').locale('ko').unix() == _day.date.unix());
        if (_checkAuth >= 0) return 1;

        // 반복요일 체크
        if (_item.repeatDay != null && _item.repeatDay.length > 0) {
            const _checkDay = _item.repeatDay.findIndex((_repeat) => _repeat == _dayIndex);
            if (_checkDay >= 0) {
                return ((_day.date.unix() + (60 * 60 * 24)) > moment().unix()) ? 2 : 0;
            } else {
                return 3;
            }
        }

        return 0;
    }

    return (
        <div className="w-full flex-auto flex-col items-stretch p-2" style={{ backgroundColor: "#E0E0E0", borderTopRightRadius: "15px" }}>
            {props.items.map((_item) => {
                return <Link href={`/plan/${_item.planUid}`} key={_item.planUid} passHref>
                    <div className="bg-white flex flex-col px-4 py-4 mb-2 space-y-2" style={{ borderRadius: "10px" }}>
                        <PlanTitle title={_item.name} subject={_item.subject} />
                        <div className="flex justify-between">
                            {
                                dates.map((_day, index) => {
                                    // 0 안함, 100% 2 계획 있는날, 3계획 없는날

                                    let type = 3;

                                    const _startDate = moment(_item.startDate, 'YYYY-MM-DD').locale('ko');
                                    const _endDate = moment(_item.endDate, 'YYYY-MM-DD').locale('ko').add(1, 'd');

                                    // 이전 계획 X
                                    if (_startDate.unix() > _day.date.unix()) type = 3;

                                    // 오늘 이후 계획 O
                                    if (_startDate.unix() <= _day.date.unix() && _day.date.unix() < _endDate.unix()) type = 2;

                                    // 단일 계획
                                    if (_item.repeatDay == null || _item.repeatDay.length == 0) {
                                        type = (_startDate.unix() == _day.date.unix()) ? type : 0;
                                    }

                                    // 실행완료
                                    const _checkAuth = _item.auths.findIndex((_auth) => moment(_auth.authDt, 'YYYY-MM-DD').locale('ko').unix() == _day.date.unix());
                                    if (_checkAuth >= 0) type = 1;

                                    return <WeekPlanDayInfo key={index} day={_day.day} type={checkStatus(_item, _day, index)} />
                                })
                            }
                        </div>
                    </div>
                </Link>
            })}
        </div>
    )
}