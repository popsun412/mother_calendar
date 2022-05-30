import { useEffect } from "react";
import moment from "moment";

export default function CalendarDateItem(props) {
    const _selectStyle = () => {
        // 계획 없는 날
        if (props.date.planCount == 0) return "bg-gray1";

        // 계획 입력, 100% 실행
        if (props.date.planCount == props.date.authCount) return "bg4 text-white";

        // 계획 입력, 실행전
        return "bg-white border-dotted border border-color3";
    }

    const _dateStyle = { fontSize: "13px" };

    return (
        <div className={`relative flex flex-col items-center w-10 p-1.5 rounded-lg ${(props.selected ? "bg1" : "")}`} onClick={props.onClick}>
            {(props.date.date.format('yyyy-MM-D') == moment().format('yyyy-MM-D')) ? <div className="absolute right-1 top-1 w-1.5 h-1.5 bg5 rounded-full" /> : <></>}

            <div className="flex flex-col items-center space-y-2">

                <span style={{ fontSize: "12px", lineHeight: "14px" }}>{props.date.week}</span>

                <div className={`flex justify-center items-center rounded-full w-6 h-6 ${_selectStyle()}`} style={_dateStyle}>
                    <span>{props.date.date.date()}</span>
                </div>
            </div>
        </div>
    )
}