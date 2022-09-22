/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import network from "../../util/network";
import moment from "moment";

import { useRecoilState } from "recoil";
import { selectedDateState } from "../../states/community_state";

export default function CommunityWeek(props) {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const _weekday = moment(selectedDate).weekday();
  const [dates, setDates] = useState([]);

  // style
  const _selectStyle = (_date) => {
    if (_checkSelected(_date)) return "bg4 text-white";
    if (_date.isCommunity) return "border-dotted border border-color3";
    return "";
  };

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

    checkDayHasCommunity(_newDates);
  }, [selectedDate, props.myRegion]);

  // 그 날 모임 존재 여부
  const checkDayHasCommunity = async (_dates) => {
    const _result = await network.get(`/community?dates=${_dates.map((_date) => moment(_date.date).format("YYYY-MM-DD"))}&region=${props.myRegion}`);

    _dates.map((_date) => {
      _date.isCommunity = _result.data.filter((_item) => _item.communityDate == _date.date.format("yyyy-MM-DD")).length > 0;
    });

    setDates(_dates);
  };

  const _checkSelected = (_date) => moment(selectedDate).format("yyyy-MM-D") == _date.date.format("yyyy-MM-D");
  const calDate = (value) => (value < 0 ? moment(selectedDate).add(value * -1, "d") : moment(selectedDate).subtract(value, "d"));

  return (
    <div className="flex justify-between pb-4">
      {dates.map((_date, index) => {
        return (
          <div
            key={index}
            className={`relative flex flex-col items-center w-10 p-1.5 rounded-lg ${_checkSelected(_date) ? "bg1" : ""}`}
            onClick={() => setSelectedDate(_date.date.toDate())}
          >
            <div className="flex flex-col items-center space-y-2">
              <span style={{ fontSize: "12px", lineHeight: "14px" }}>{_date.week}</span>

              <div className={`flex justify-center items-center rounded-full w-6 h-6 ${_selectStyle(_date)}`} style={{ fontSize: 13 }}>
                <span>{_date.date.date()}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
