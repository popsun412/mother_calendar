import moment from "moment";

export function calcPercent(plan) {
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