// import EmptyPlan from "./calendar_empty_plan";
import PlanListDay from "./calendar_list_day";
import PlanListWeek from "./calendar_list_week";


export default function CalendarHome() {
    return (
        <div className="bg-gray2 flex-auto flex flex-col p-5 pb-0">
            {/* <EmptyPlan /> */}
            {/* <PlanListDay /> */}
            <PlanListWeek />

        </div>
    )
}