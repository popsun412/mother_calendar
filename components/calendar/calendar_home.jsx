// import EmptyPlan from "./calendar_empty_plan";
import { useState } from "react";
import PlanListDay from "./calendar_list_day";
import PlanListWeek from "./calendar_list_week";
import EmptyPlan from "./calendar_empty_plan"


export default function CalendarHome() {
    const [type, setType] = useState(1);

    return (
        <div className="bg-gray2 flex-auto overflow-y-auto flex flex-col p-5 pb-0">
            {(type == 0) ? <EmptyPlan /> : <></>}
            <div className="flex text-sm textGray2">
                <div className="flex bg-white py-1.5 px-7 rounded-t-xl mr-1" onClick={() => setType(1)}>
                    <span>일간</span>
                </div>
                <div className="flex py-1.5 px-7 rounded-t-xl" style={{ backgroundColor: "#E0E0E0" }} onClick={() => setType(2)}>
                    <span>주간</span>
                </div>
            </div>
            {(type == 1) ? <PlanListDay /> : <></>}
            {(type == 2) ? <PlanListWeek /> : <></>}
        </div>
    )
}