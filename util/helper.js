import moment from "moment";

export function calcPercent(plan) {
    if (plan.repeatDay == null) return 1;

    let _temp_startDt = moment(plan.startDate);
    let count = 0;

    while (true) {
        const _day = parseInt(_temp_startDt.format("d"));

        if (plan.repeatDay.findIndex((_repeat) => _repeat == _day) >= 0) count++;

        _temp_startDt = _temp_startDt.add(1, "d");

        if (_temp_startDt > moment(plan.endDate)) break;
    }

    return count;
}

export function weekDayFormat(_day) {
    if (_day == 0) return "일";
    if (_day == 1) return "월";
    if (_day == 2) return "화";
    if (_day == 3) return "수";
    if (_day == 4) return "목";
    if (_day == 5) return "금";
    if (_day == 6) return "토";
}