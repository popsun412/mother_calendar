import CustomMobileDatepicker from "../common/custom_mobile_datepicker";
import moment from "moment";
import { useRecoilState } from "recoil";
import { selectedDateState } from "../../states/community_state";
import { useRouter } from "next/router";

export default function CommunityDate(props) {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);

  // 포멧팅
  const getDateFormat = () => {
    const _year = selectedDate.getFullYear();
    const _month = selectedDate.getMonth();
    const _week = weekOfMonth(moment(selectedDate));
    return `${_year}년 ${_month + 1}월 ${_week}주차`;
  };

  const weekOfMonth = (_moment) => _moment.week() - moment(_moment).startOf("month").week() + 1;

  return (
    <div className="flex flex-row align-middle justify-between mb-3">
      <CustomMobileDatepicker onChange={(value) => setSelectedDate(value)} value={selectedDate}>
        <div className="flex bg-gray2 rounded px-2 py-1.5 textGray2 items-center justify-center">
          <span className="text-xs">{getDateFormat()}</span>
          <svg className="w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      </CustomMobileDatepicker>
      <div className="checkbox textGray2 text-xs font-normal px-3 py-1.5 p-" onClick={() => router.push("/community/list")}>
        참여모임
      </div>
    </div>
  );
}
