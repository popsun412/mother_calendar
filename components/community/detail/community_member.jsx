/* eslint-disable @next/next/no-img-element */

import { Collapse } from "@mui/material";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import moment from "moment";
import network from "../../../util/network";

export default function CommunityMember(props) {
  const auth = getAuth();
  const [expanded, setExpanded] = useState(false);
  const [member, setMember] = useState(props.member);

  // show model
  const showModel = {
    get profileImage() {
      if (!member.isShare) return "/images/profile_lock.png";

      if (member.profileImage == null) {
        return member.sex == "female" ? "/images/img_profile_mom.png" : "/images/img_profile_dad.png";
      }

      return member.profileImage;
    },
    get babysAge() {
      const _now = new Date();
      const _ages = [];
      (member.babys ?? []).map((_baby) => {
        const _birth = moment(_baby.birth, "YYYY-MM-DD").toDate();
        const _age = _now.getFullYear() - _birth.getFullYear() + 1;
        _ages.push(`${_age}세`);
      });

      if (_ages.length == 0) return "";
      return `${_ages.join(" ")}, `;
    },
    get region() {
      return `${member.region ?? ""}, `;
    },
    get interest() {
      return member.interest == "엄마표 교육" ? "엄마표" : member.interest;
    },
    get memberBtnClass() {
      // 개설자
      if (props.community.userUid != auth.currentUser.uid) {
        if (member.status == 0) return "flex-shrink-0 hover:cursor-pointer text-xs font-medium px-2 py-1 rounded-full ml-2 textGray4";
        if (member.status == 1) return "flex-shrink-0 hover:cursor-pointer text-xs font-medium px-2 py-1 rounded-full ml-2 textOrange5";
      }

      if (props.community.userUid == auth.currentUser.uid) {
        if (member.status == 0) return "flex-shrink-0 hover:cursor-pointer text-xs font-medium px-2 py-1 rounded-full ml-2 text-white bg-[#FF6035]";
        if (member.status == 1) return "flex-shrink-0 hover:cursor-pointer text-xs font-medium px-2 py-1 rounded-full ml-2 text-white bg-[#c4c4c4]";
      }
    },
    get memberBtnText() {
      if (props.community.userUid != auth.currentUser.uid) {
        if (member.status == 0) return "수락대기";
        if (member.status == 1) return "수락완료";
      }

      if (props.community.userUid == auth.currentUser.uid) {
        if (member.status == 0) return "수락하기";
        if (member.status == 1) return "수락취소";
      }
    },
  };

  // 오전 오후 표시
  const timeFormat = (value) => {
    if (value == null) return "";
    const _dateTime = moment(`${moment().format("yyyy-MM-DD")} ${value}`);

    const koA = _dateTime.format("a") == "am" ? "오전" : "오후";
    const koH = _dateTime.format("h시");
    const koM = _dateTime.format("mm");
    return `${koA} ${koH}${koM == "00" ? "" : " " + koM + "분"}`;
  };

  // 수락하기
  const accept = async () => {
    const _result = await network.patch("/community/accept", { communityAttendUid: member.communityAttendUid, status: member.status == 0 ? 1 : 0 });

    setMember({ ...member, status: _result.data.status });
  };

  return (
    <div className="flex flex-col">
      <div className={`flex items-center duration-200 ${expanded ? "mb-2" : ""}`}>
        <div className="flex flex-auto items-center whitespace-nowrap overflow-hidden">
          <img src={showModel.profileImage} alt="" className="w-6 h-6 rounded-full mr-2" />
          <span className="textGray1 text-sm font-medium mr-2 shrink">{member.nickName}</span>
          <div className="textOrange3 text-xs font-medium align-middle border border-color3 rounded-full px-2 py-1">
            {showModel.babysAge}
            {showModel.region}
            {showModel.interest}
          </div>
        </div>
        <div
          className={showModel.memberBtnClass}
          onClick={() => {
            if (props.community.userUid != auth.currentUser.uid) return;
            accept();
          }}
        >
          <span>{showModel.memberBtnText}</span>
        </div>
        {member.message && props.checkCreator ? (
          <div className="ml-4">
            <img src={`${expanded ? "/images/up.png" : "/images/down.png"}`} alt="" className="w-4 h-2" onClick={() => setExpanded(!expanded)} />
          </div>
        ) : (
          <></>
        )}
      </div>
      <Collapse in={expanded} className="bg-gray2">
        {props.community.communityType == 0 ? (
          <div className="p-3 text-xs textGray1 whitespace-normal break-words">{member.message}</div>
        ) : (
          <div className="p-3 text-xs textGray1 whitespace-normal break-words">
            <p>날짜 : {moment(props.community.communityDate).format("YYYY년 MM월 DD일")}</p>
            <p>
              시간 : {timeFormat(props.community.communityStartTime)} ~ {timeFormat(props.community.communityEndTime)}
            </p>
            <p>요청사항 : {member.message}</p>
          </div>
        )}
      </Collapse>
    </div>
  );
}
