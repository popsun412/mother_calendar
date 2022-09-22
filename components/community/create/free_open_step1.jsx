/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import subjects from "../../../constants/subjects";
import { placeTypes } from "../../../constants/communityTypes";
import CustomMobileDatepicker from "../../common/custom_mobile_datepicker";
import CustomTimepicker from "../../common/custom_timepicker";
import { ChevronRight } from "@mui/icons-material";
import moment from "moment";

export default function FreeOpenStep1(props) {
  // 오전 오후 표시
  const timeFormat = (_dateTime) => {
    if (_dateTime == null) return "";

    const koA = moment(_dateTime).format("a") == "am" ? "오전" : "오후";
    const koH = moment(_dateTime).format("h시");
    const koM = moment(_dateTime).format("mm");
    return `${koA} ${koH}${koM == "00" ? "" : " " + koM + "분"}`;
  };

  // 다음 주소
  const openDaumAddress = () => {
    new daum.Postcode({
      oncomplete: function (data) {
        var addr = "";
        var extraAddr = "";
        if (data.userSelectedType === "R") {
          addr = data.roadAddress;
        } else {
          addr = data.jibunAddress;
        }

        if (data.userSelectedType === "R") {
          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
          }
          if (data.buildingName !== "" && data.apartment === "Y") {
            extraAddr += extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
          }
          if (extraAddr !== "") {
            extraAddr = " (" + extraAddr + ")";
          }
        } else {
        }

        props.setCommunityCreateDto({
          ...props.communityCreateDto,
          address: addr,
          detailAddress: "",
          region: data.sido,
        });
      },
    }).open();
  };

  return (
    <div className="px-5">
      <div className="text-sm font-medium textGray4 bg-gray2 rounded-xl py-5 flex items-center justify-center mt-4">
        <input
          type="text"
          className="bg-transparent outline-none w-full px-10 text-sm text-black text-center"
          placeholder="함께 하고 싶은 계획명을 입력해주세요."
          defaultValue={props.communityCreateDto.name}
          maxLength={20}
          onChange={(e) => {
            if (e.currentTarget.value.length > 20) return;
            props.setCommunityCreateDto({ ...props.communityCreateDto, name: e.currentTarget.value });
          }}
        />
      </div>

      {/* 분야 */}
      <div className="mt-7  mb-8">
        <span className="textGray2 text-sm font-medium">분야</span>
        <div className="grid grid-cols-4 gap-3 mt-6">
          {subjects.map((_item, index) => {
            return (
              <div
                className={`flex items-center py-2 border rounded justify-center ${
                  props.communityCreateDto.subject == _item.subject ? "border-[#FF6035] text-[#FF6035]" : "border-gary3 textGray4"
                }`}
                key={index}
                onClick={() => {
                  props.setCommunityCreateDto({
                    ...props.communityCreateDto,
                    subject: _item.subject,
                    category: _item.category,
                  });
                }}
              >
                <img src={_item.image} className="w-4 h-4" />
                <span className="text-sm font-medium ml-1">{_item.subject}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 날짜 */}
      <div className="mb-8">
        <span className="textGray2 text-sm font-medium">날짜</span>
        <div className="mt-3 max-w-fit">
          <CustomMobileDatepicker
            onChange={(date) => {
              const communityDates = [date];
              props.setCommunityCreateDto({ ...props.communityCreateDto, communityDates });
            }}
            value={props.communityCreateDto.communityDates.length == 0 ? null : props.communityCreateDto.communityDates[0]}
            auto={true}
            minDate={new Date()}
          >
            <div className="flex-auto w-32 border border-gary3 rounded-md text-sm textGray2 text-center py-1 flex items-center justify-center">
              <span className={`text-xs font-medium pl-2 ${props.communityCreateDto.communityDates.length == 0 ? "textGray4" : ""}`}>
                {props.communityCreateDto.communityDates.length == 0 ? "모임날짜" : moment(props.communityCreateDto.communityDates[0]).format("YYYY년 M월 D일")}
              </span>
              <ChevronRight className="rotate-90" />
            </div>
          </CustomMobileDatepicker>
        </div>
      </div>

      {/* 시간 */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <span className="textGray2 text-sm font-medium">시간</span>
        </div>
        <div className="flex space-x-1.5 mt-3">
          <CustomTimepicker
            onChange={(time) => props.setCommunityCreateDto({ ...props.communityCreateDto, communityStartTime: time })}
            value={props.communityCreateDto.communityStartTime}
            maxTime={props.communityCreateDto.communityEndTime}
          >
            <div className="flex-auto border border-gary3 rounded-md text-sm textGray2 text-center py-1 flex items-center justify-center">
              <span className={`text-xs font-medium pl-2 ${props.communityCreateDto.communityStartTime == null ? "textGray4" : ""}`}>
                {props.communityCreateDto.communityStartTime == null ? "시작시간" : timeFormat(props.communityCreateDto.communityStartTime)}
              </span>
              <ChevronRight className="rotate-90" />
            </div>
          </CustomTimepicker>

          <div className="flex items-center justify-center">
            <svg className="w-3 h-2 textGray4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </div>

          <CustomTimepicker
            onChange={(time) => props.setCommunityCreateDto({ ...props.communityCreateDto, communityEndTime: time })}
            value={props.communityCreateDto.communityEndTime}
            minTime={props.communityCreateDto.communityStartTime}
          >
            <div className="flex-auto border border-gary3 rounded-md text-sm textGray2 text-center py-1 flex items-center justify-center">
              <span className={`text-xs font-medium pl-2 ${props.communityCreateDto.communityEndTime == null ? "textGray4" : ""}`}>
                {props.communityCreateDto.communityEndTime == null ? "종료시간" : timeFormat(props.communityCreateDto.communityEndTime)}
              </span>
              <ChevronRight className="rotate-90" />
            </div>
          </CustomTimepicker>
        </div>
      </div>

      {/* 장소 */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <span className="textGray2 text-sm font-medium">장소</span>
        </div>
        <div className="flex space-x-4 mt-3">
          {placeTypes.map((_placeType, index) => (
            <div
              key={index}
              className={`flex flex-auto items-center py-2 border rounded justify-center ${
                props.communityCreateDto.placeType == _placeType.type ? "border-[#FF6035] text-[#FF6035]" : "border-gary3 textGray4"
              }`}
              onClick={() => {
                props.setCommunityCreateDto({
                  ...props.communityCreateDto,
                  placeType: _placeType.type,
                  address: _placeType.type == "address" ? props.communityCreateDto.address : null,
                  detailAddress: _placeType.type == "address" ? props.communityCreateDto.detailAddress : null,
                  region: _placeType.type == "address" ? props.communityCreateDto.region : null,
                });
              }}
            >
              <span className="text-sm font-medium ml-1">{_placeType.text}</span>
            </div>
          ))}
        </div>
        <div className={`mt-3 ${props.communityCreateDto.placeType == 1 ? "" : "hidden"}`}>
          <div className="flex relative mb-2.5" onClick={() => openDaumAddress()}>
            <input
              type="text"
              value={props.communityCreateDto.address ?? ""}
              className="h-9 rounded-md bg-gray2 w-full text-sm px-5 outline-none"
              readOnly
              placeholder="주소"
              style={{ height: "39px" }}
            />
          </div>

          {props.communityCreateDto.address != null ? (
            <input
              type="text"
              value={props.communityCreateDto.detailAddress}
              className="h-9 rounded-md bg-gray2 w-full text-sm px-5"
              style={{ height: "39px" }}
              onChange={(e) => props.setCommunityCreateDto({ ...props.communityCreateDto, detailAddress: e.currentTarget.value })}
              placeholder="상세주소"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
