/* eslint-disable react-hooks/exhaustive-deps */
// import EmptyPlan from "./calendar_empty_plan";
import { useState } from "react";
import PlanListDay from "./calendar_list_day";
import PlanListWeek from "./calendar_list_week";
import EmptyPlan from "./calendar_empty_plan"
import CalendarScreen from "./calendar_screen";
import { useEffect } from "react";
import CircleLoading from "../common/circle_loading";
import moment from "moment";

// api호출
import network from "../../util/network";

import { useRecoilState } from "recoil";
import { selectedTypeState } from "../../states/calendar_states";


export default function CalendarHome(props) {
    // 불러오기
    const [loading, setLoading] = useState(false);

    // 공개여부
    const [open, setOpen] = useState(true);

    // 목록 보기종류
    const [type, setType] = useRecoilState(selectedTypeState);

    // 아이템들
    const [items, setItems] = useState([]);

    // 날짜 계산
    const calDate = (value) => {
        if (value < 0) {
            return moment(props.selectedDate).add(value * -1, 'd');
        } else {
            return moment(props.selectedDate).subtract(value, 'd');
        }
    }

    // 계획 갖고오기
    const getItems = async () => {
        if (loading) return;
        setLoading(true);
        setOpen(true);

        // 주간 날짜 범위
        const _weekday = moment(props.selectedDate).weekday();
        const _dates = [calDate(_weekday - 0), calDate(_weekday - 6)];

        // 데이터 목록
        let _items = [];

        // 일간 데이터 목록 갖고오기
        if (type == 1) {
            const _dayResult = await network.post('/calendar/dayPlans', {
                userUid: props.selectedUserUid,
                date: moment(props.selectedDate).format("YYYY-MM-DD")
            });

            if (!_dayResult.data.isShare) setOpen(false);
            if (_dayResult.status == 200) _items = _dayResult.data.items;
        }

        // 주간 데이터 목록 갖고오기
        if (type == 2) {
            const _weekResult = await network.post('/calendar/weekPlans', {
                userUid: props.selectedUserUid,
                startDate: moment(_dates[0]).format("YYYY-MM-DD"),
                endDate: moment(_dates[1]).add(1, "d").format("YYYY-MM-DD"),
            });

            if (!_weekResult.data.isShare) setOpen(false);
            if (_weekResult.status == 200) _items = _weekResult.data.items;
        }

        setItems(_items);
        setLoading(false);
    }

    useEffect(() => {
        getItems();
    }, [props.selectedUserUid, props.selectedDate, type]);

    return (<>
        {(loading)
            ? <div className="flex-auto bg-gray2">
                <CircleLoading />
            </div>
            : <div className="bg-gray2 flex-auto overflow-y-auto flex flex-col p-5">
                <div className="flex text-xs textGray2">
                    <div className="flex bg-white py-1.5 px-7 rounded-t-xl mr-1" onClick={() => setType(1)}>
                        <span>일간</span>
                    </div>
                    <div className="flex py-1.5 px-7 rounded-t-xl" style={{ backgroundColor: "#E0E0E0" }} onClick={() => setType(2)}>
                        <span>주간</span>
                    </div>
                </div>
                {(open)
                    ? <>
                        {(items.length == 0) ? <EmptyPlan /> : <></>}
                        {(items.length > 0 && type == 1) ? <PlanListDay items={items} selectedDate={props.selectedDate} /> : <></>}
                        {(items.length > 0 && type == 2) ? <PlanListWeek items={items} selectedDate={props.selectedDate} /> : <></>}
                    </>
                    : <CalendarScreen />}
            </div>}
    </>)
}