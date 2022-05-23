import { useEffect } from "react";

export default function CalendarDateItem(props) {
    const _selectStyle = (props.date.select) ? "bg-white border-dotted border border-color3" : "bg-gray1";
    const _dateStyle = { fontSize: "13px" };

    return (
        <div className={`relative flex flex-col items-center w-10 p-1.5 rounded-lg ${(props.date.select ? "bg1" : "")}`} onClick={props.onClick}>
            {(props.date.select) ? <div className="absolute right-1 top-1 w-1.5 h-1.5 bg5 rounded-full" /> : <></>}

            <div className="flex flex-col items-center space-y-2">

                <span style={{ fontSize: "12px", lineHeight: "14px" }}>{props.date.week}</span>

                <div className={`flex justify-center items-center rounded-full w-6 h-6 ${_selectStyle}`} style={_dateStyle}>
                    <span>{props.date.date.date()}</span>
                </div>
            </div>
        </div>
    )
}