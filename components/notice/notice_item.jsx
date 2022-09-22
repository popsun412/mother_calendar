/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Collapse } from "@mui/material";
import moment from "moment";

export default function NoticeItem(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className={`flex items-center duration-200`} onClick={() => setExpanded(!expanded)}>
        <div className="flex flex-auto flex-col items-start whitespace-nowrap overflow-hidden">
          <h3 className="textGray1 text-sm font-bold mr-2 shrink">{props.noticeItem.title}asdjkljdsk;lfjdsaioj;klghk;lasdf</h3>
          <span className="text-xs textGray1">{moment(props.noticeItem.updatedAt).format("YYYY.MM.DD")}</span>
        </div>
        <img src={`${expanded ? "/images/up.png" : "/images/down.png"}`} alt="" className="w-4 h-2" />
      </div>
      <Collapse in={expanded} className="bg-gray2">
        <div className="p-2">
          <p className="text-xs w-full whitespace-normal break-words overflow-hidden text-ellipsis m-0">{props.noticeItem.contents}</p>
        </div>
      </Collapse>
      <div className="h-px bg-gray3"></div>
    </>
  );
}
