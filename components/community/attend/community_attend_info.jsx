import CustomTimepicker from "../../common/custom_timepicker";
import { ChevronRight } from "@mui/icons-material";
import { TextareaAutosize } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { orange, pink } from "@mui/material/colors";
import moment from "moment";

export default function CommunityAttendInfo(props) {
  // 오전 오후 표시
  const timeFormat = (_dateTime) => {
    if (_dateTime == null) return "";

    const koA = moment(_dateTime).format("a") == "am" ? "오전" : "오후";
    const koH = moment(_dateTime).format("h시");
    const koM = moment(_dateTime).format("mm");
    return `${koA} ${koH}${koM == "00" ? "" : " " + koM + "분"}`;
  };

  return (
    <div className="px-5">
      {/* 시간 */}
      {props.communityInfo.communityType == 1 ? (
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <span className="textGray2 text-sm font-medium">유료 모임에 참여할 시간을 지정해주세요. </span>
          </div>
          <div className="flex space-x-1.5 mt-3">
            <CustomTimepicker
              onChange={(time) => props.setAttendCommunityDto({ ...props.attendCommunityDto, startTime: time })}
              value={props.attendCommunityDto.startTime}
            >
              <div className="flex-auto border border-gary3 rounded-md text-sm textGray2 text-center py-1 flex items-center justify-center">
                <span className={`text-xs font-medium pl-2 ${props.attendCommunityDto.startTime == null ? "textGray4" : ""}`}>
                  {props.attendCommunityDto.startTime == null ? "시작시간" : timeFormat(props.attendCommunityDto.startTime)}
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
              onChange={(time) => props.setAttendCommunityDto({ ...props.attendCommunityDto, endTime: time })}
              value={props.attendCommunityDto.endTime}
            >
              <div className="flex-auto border border-gary3 rounded-md text-sm textGray2 text-center py-1 flex items-center justify-center">
                <span className={`text-xs font-medium pl-2 ${props.attendCommunityDto.endTime == null ? "textGray4" : ""}`}>
                  {props.attendCommunityDto.endTime == null ? "종료시간" : timeFormat(props.attendCommunityDto.endTime)}
                </span>
                <ChevronRight className="rotate-90" />
              </div>
            </CustomTimepicker>
          </div>
        </div>
      ) : (
        <></>
      )}

      {/* 요청 메세지 */}
      <div className="mb-8">
        <div className="mb-3 text-sm font-medium textGray2">
          {props.communityInfo.communityType == 0 ? "참여 신청 메세지를 입력해주세요." : "유료 모임 관련 요청사항을 입력해주세요."}
          <br />
          {props.communityInfo.communityType == 0 ? "리더가 메세지를 확인 후 수락 예정입니다." : "리더가 요청 사항를 확인 후 수락 예정입니다."}
        </div>
        <div className="w-full p-5 bg-gray2 rounded-xl text-sm font-medium flex flex-col justify-center items-stretch" style={{ minHeight: 80 }}>
          <TextareaAutosize
            className="bg-transparent resize-none outline-none text-center"
            placeholder={`함께 하고 싶은 계획 내용을\n자세히 입력해주세요. (50자 이상)`}
            minLength={50}
            onChange={(e) => props.setAttendCommunityDto({ ...props.attendCommunityDto, requestMessage: e.currentTarget.value })}
          />
        </div>
      </div>

      {/* 연락처 */}
      <div className="mb-8">
        <div className="mb-3 text-sm font-medium textGray2">
          내 정보가 정확한지 확인해주세요!
          <br />
          정확하지 않다면 내 정보에서 수정해주세요.
          <br />
          {props.communityInfo.communityType == 0
            ? "리더가 수락 후 아래 전화번호로 모임 시작 안내드립니다."
            : "리더가 수락 후 아래 전화번호로 유료 모임 안내드립니다."}
        </div>
        <div className="grid grid-cols-3 w-full gap-x-3">
          <span type="text" className="border border-solid border-color4 rounded-md flex justify-center items-center" style={{ height: "44px" }}>
            {props.userInfo.tel.substr(0, 3)}
          </span>
          <span type="text" className="border border-solid border-color4 rounded-md flex justify-center items-center" style={{ height: "44px" }}>
            {props.userInfo.tel.substr(3, 4)}
          </span>
          <span type="text" className="border border-solid border-color4 rounded-md flex justify-center items-center" style={{ height: "44px" }}>
            {props.userInfo.tel.substr(7, 4)}
          </span>
        </div>
      </div>

      <div className=" p-5 rounded-xl bg-[rgba(255,214,194,0.7)]">
        <strong className="textOrange5 text-sm font-semibold">
          {props.communityInfo.communityType == 0 ? "즐거운 모임를 위해 꼭 지켜주세요." : "즐거운 유료 모임를 위해 꼭 지켜주세요."}
        </strong>
        <p className="textOrange5 text-xs font-medium mt-2 mb-3">
          {props.communityInfo.communityType == 0 ? (
            <>
              <p>모임 시작 전 참여가 어려울 경우 리더에게 미리 알려주세요.</p>
              <p>n모임 중에 피해를 주지 않도록 노력해주세요.</p>
            </>
          ) : (
            <>
              <p>유료 모임 전 참여가 어려울 경우 리더에게 미리 알려주세요.</p>
              <p>n유료 모임 중에 피해를 주지 않도록 노력해주세요.</p>
              <p>n예약 시간을 준수하고 리더에게 비용을 지불해주세요.</p>
            </>
          )}
        </p>
        <FormGroup className="">
          <FormControlLabel
            label="네, 알겠습니다"
            className="textOrange5 text-xs font-semibold max-w-fit"
            control={
              <Checkbox
                checked={props.infoCheck}
                onChange={() => props.setInfoCheck(!props.infoCheck)}
                size="medium"
                sx={{
                  color: orange[900],
                  "&.Mui-checked": { color: orange[900] },
                  "& .MuiSvgIcon-root": { fontSize: 18 },
                }}
              />
            }
          />
        </FormGroup>
      </div>
    </div>
  );
}
