import { conditions } from "../../../constants/communityTypes";

/* eslint-disable @next/next/no-img-element */
const moment = require("moment");

export default function CommunityDeatilHeader(props) {
  // 오전 오후 표시
  const timeFormat = (value) => {
    if (value == null) return "";
    const _dateTime = moment(`${moment().format("yyyy-MM-DD")} ${value}`);

    const koA = _dateTime.format("a") == "am" ? "오전" : "오후";
    const koH = _dateTime.format("h시");
    const koM = _dateTime.format("mm");
    return `${koA} ${koH}${koM == "00" ? "" : " " + koM + "분"}`;
  };

  return (
    <div className="py-2 overflow-hidden">
      <div className="flex items-center align-middle mb-6">
        <span className="bg4 text-white rounded-md text-xs py-1 px-2 mr-2">{props.community.subject}</span>
        <div>{props.community.name}</div>
      </div>
      <div className="grid gap-2.5 bg-gray2 p-4 rounded-lg mb-6">
        <div className="flex items-center">
          <img src="/images/calendar.png" alt="" className="w-4 h-4 mr-1.5" />
          <span className="textGray2 text-sm font-normal">{moment(props.community.communityDate).format("YYYY년 M월 D일")}</span>
        </div>
        <div className="flex items-center">
          <img src="/images/clock.png" alt="" className="w-4 h-4 mr-1.5" />
          <span className="textGray3 text-sm font-normal">
            {timeFormat(props.community.communityStartTime)} - {timeFormat(props.community.communityEndTime)}
          </span>
        </div>
        <div className={`flex items-center ${props.community.address ? "" : "hidden"}`}>
          <img src="/images/frame.png" alt="" className="w-4 h-4 mr-1.5" />
          <span className="textGray3 text-sm font-normal">{`${props.community.address ?? ""} ${props.community.detailAddress ?? ""}`}</span>
        </div>
        <div className="flex items-center">
          <img src="/images/bi-people-fill.png" alt="" className="w-4 h-4 mr-1.5" />
          <span className="textGray3 text-sm font-normal">
            {conditions[conditions.findIndex((_item) => _item.type == props.community.condition)].text} 만 {props.community.minAge}세 ~ 만{" "}
            {props.community.maxAge}세
          </span>
        </div>
      </div>
    </div>
  );
}
