/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import moment from "moment";
import { useRouter } from "next/router";
import { conditions } from "../../constants/communityTypes";

export default function CommunityCard(props) {
  const router = useRouter();

  // 상태
  const _isActive = () => {
    // 마감
    if (moment(props.item.communityDate) <= moment()) return false;
    if (props.item.status != 0) return false;
    if (props.item.memberMaxCount <= props.item.members.map((_member) => _member.status == 1 && _member.userUid != auth.currentUser.uid).length) return false;

    // 정상
    return true;
  };

  // 분류 백그라운드
  const _subjectBg = () => {
    if (!_isActive()) return "bg-gray4";
    if (props.item.communityType == 0) return "bg4";
    if (props.item.communityType == 1) return "bg-blue4";
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

  const placeText = () => {
    if (props.item.placeType == 2) return "온라인";
    return `${props.item.address} ${props.item.detailAddress ?? ""}`;
  };

  // 장소
  const _placeTypeImage = () => {
    if (props.placeType == 1) return "/images/carbon-earth-filled.png";
    return "/images/frame.png";
  };

  const profileImage = (user) => {
    if (!user.isShare) return "/images/profile_lock.png";

    if (user.profileImage == null) {
      return user.sex == "female" ? "/images/img_profile_mom.png" : "/images/img_profile_dad.png";
    }

    return user.profileImage;
  };

  const amountFormat = () => props.item.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const conditionString = () => {
    try {
      return `${conditions[conditions.findIndex((_item) => _item.type == props.item.condition)].text}·`;
    } catch (error) {
      return "";
    }
  };

  return (
    <div
      className="p-4 bg-white rounded-lg mb-3"
      onClick={() => {
        let _href = { pathname: "/community/detail", query: { cid: props.item.communityUid } };
        router.push(_href);
      }}
    >
      <div className="flex items-center mb-3">
        <span className={`text-white rounded-md text-xs py-1 px-2 mr-2 ${_subjectBg()}`}>{props.item.subject}</span>
        <div className={`text-sm align-middle item-middle items-center ${_isActive() ? "" : "textGray4 line-through"}`}>{props.item.name}</div>
      </div>
      <div className="flex flex-col mb-3.5">
        <div className="flex">
          <div className="flex align-middle items-center">
            <img src={`${_isActive() ? "/images/clock.png" : "/images/clock_off.png"}`} className="w-4 h-4" />
            <span className="textGray3 text-xs font-normal ml-1">
              {timeFormat(props.item.communityStartTime)} ~ {timeFormat(props.item.communityEndTime)}
            </span>
          </div>
          <div className="flex align-middle items-center ml-2.5">
            <img src={_placeTypeImage()} className="w-5 h-5" />
            <span className="textGray3 text-xs font-normal ml-1">{placeText()}</span>
          </div>
        </div>
        <div className={`flex align-middle items-center ${props.item.minAge && props.item.maxAge ? "" : "hidden"}`}>
          <img src={`${_isActive() ? "/images/bi-people-fill.png" : "/images/bi-people.png"}`} className="w-4 h-4" />
          <span className="textGray3 text-xs font-normal ml-1">
            {conditionString()}
            {props.item.minAge}세 ~ {props.item.maxAge}세
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex-auto flex-shrink-0 flex flex-nowrap gap-2">
          {/* 개설자 */}
          <div className="relative">
            <img
              src={profileImage(props.item.creator)}
              className="w-8 h-8 rounded-full"
              style={_isActive() ? {} : { WebkitFilter: "grayscale(100%)", filter: "gray" }}
            />
            <span className="absolute bottom-0 right-0">
              <img src="/images/group-7459.png" alt="" className="w-3 h-3" style={_isActive() ? {} : { WebkitFilter: "grayscale(100%)", filter: "gray" }} />
            </span>
          </div>
          {/* 멤버 */}
          {props.item.members.map((_member, index) => {
            return (
              <img
                key={index}
                src={profileImage(_member)}
                className="w-8 h-8 rounded-full"
                style={_isActive() ? {} : { WebkitFilter: "grayscale(100%)", filter: "gray" }}
              />
            );
          })}

          <div className={`w-8 h-8 rounded-full border border-dashed border-gary3 flex items-center justify-center ${_isActive() ? "" : "hidden"}`}>
            <img src="/images/plus.png" alt="" className="w-3 h-3 items-center" />
          </div>
        </div>
        {props.item.communityType == 1 ? (
          <div className="flex">
            <p className="inline-block align-baseline">
              <span className="text-xs">{"1시간 / "}</span>
              <span className="text-base font-medium">{`${amountFormat()}원`}</span>
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
