import { useRouter } from "next/router";
import PlanTitle from "./plan_title";
import moment from "moment";
import { calcPercent } from "../../util/helper";
import Link from "next/link";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ArrowBackIosNewRounded } from "@mui/icons-material";

export default function CalendarFullPlan(props) {
  const router = useRouter();

  const checkComplete = (_plan) => {
    const _totalDays = _plan.repeatDay != null ? calcPercent(_plan) : 1;
    if (_totalDays == 0) return 0;

    return Math.round((_plan.authCount / _totalDays) * 100);
  };

  return (
    <>
      <GlobalStyles
        styles={{
          html: { backgroundColor: "#fff" },
          body: { backgroundColor: "#f2f2f2" },
        }}
      />

      <div className="flex flex-col">
        <div className="fixed max-w-500 py-2.5 first-letter:border-b border-gary3 bg-white px-4">
          <span className="absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center text-base font-medium textGray1 z-40">전체 계획 관리</span>
          <ArrowBackIosNewRounded onClick={() => router.back()} style={{ width: 24, color: "#4f4f4f" }} />
        </div>
        <div className="flex flex-col bg-gray2 h-full px-5 pt-6 mt-12 pb-8 space-y-3">
          {props.items.map((_item) => {
            const _percent = checkComplete(_item);
            const isEnd = moment() >= moment(_item.endDate).add(1, "d");

            return (
              <Link href={`/plan/${_item.planUid}`} key={_item.planUid} passHref>
                <div className="flex bg-white rounded-md p-3 items-center">
                  <div className="flex-auto overflow-hidden">
                    <PlanTitle title={_item.name} subject={_item.subject} active={_percent < 100 && !isEnd} />
                  </div>

                  <span className={`text-sm flex-shrink-0 ${isEnd ? "textGray4" : "textOrange4"}`}>{`${_percent}%, ${isEnd ? "종료" : "실행"}`}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
