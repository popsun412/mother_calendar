import PlanTitle from "./plan_title";
import WeekPlanDayInfo from "./week_plan_day_info";

export default function PlanListWeek() {
    const dayInfos = [
        { day: "월", type: 0 },
        { day: "화", type: 1 },
        { day: "수", type: 2 },
        { day: "목", type: 3 },
        { day: "금", type: 0 },
        { day: "토", type: 0 },
        { day: "일", type: 0 },
    ];

    return (
        <div className="w-full flex-auto flex-col items-stretch p-2" style={{ backgroundColor: "#E0E0E0", borderTopRightRadius: "15px" }}>
            <div className="bg-white flex flex-col pt-2 pb-4 px-2 mb-2" style={{ borderRadius: "10px" }}>
                <PlanTitle title="대교 벽보 한글 읽기" />
                <div className="flex justify-between">
                    {
                        dayInfos.map((_item, index) => <WeekPlanDayInfo key={index} day={_item.day} type={_item.type} />)
                    }
                </div>
            </div>

            <div className="bg-white flex flex-col pt-2 pb-4 px-2 mb-2" style={{ borderRadius: "10px" }}>
                <PlanTitle title="대교 벽보 한글 읽기" />
                <div className="flex justify-between">
                    {
                        dayInfos.map((_item, index) => <WeekPlanDayInfo key={index} day={_item.day} type={_item.type} />)
                    }
                </div>
            </div>
            <div className="bg-white flex flex-col pt-2 pb-4 px-2 mb-2" style={{ borderRadius: "10px" }}>
                <PlanTitle title="대교 벽보 한글 읽기" />
                <div className="flex justify-between">
                    {
                        dayInfos.map((_item, index) => <WeekPlanDayInfo key={index} day={_item.day} type={_item.type} />)
                    }
                </div>
            </div>
            <div className="bg-white flex flex-col pt-2 pb-4 px-2 mb-2" style={{ borderRadius: "10px" }}>
                <PlanTitle title="대교 벽보 한글 읽기" />
                <div className="flex justify-between">
                    {
                        dayInfos.map((_item, index) => <WeekPlanDayInfo key={index} day={_item.day} type={_item.type} />)
                    }
                </div>
            </div>
            <div className="bg-white flex flex-col pt-2 pb-4 px-2 mb-2" style={{ borderRadius: "10px" }}>
                <PlanTitle title="대교 벽보 한글 읽기" />
                <div className="flex justify-between">
                    {
                        dayInfos.map((_item, index) => <WeekPlanDayInfo key={index} day={_item.day} type={_item.type} />)
                    }
                </div>
            </div>
            <div className="bg-white flex flex-col pt-2 pb-4 px-2 mb-2" style={{ borderRadius: "10px" }}>
                <PlanTitle title="대교 벽보 한글 읽기" />
                <div className="flex justify-between">
                    {
                        dayInfos.map((_item, index) => <WeekPlanDayInfo key={index} day={_item.day} type={_item.type} />)
                    }
                </div>
            </div>
            <div className="bg-white flex flex-col pt-2 pb-4 px-2 mb-2" style={{ borderRadius: "10px" }}>
                <PlanTitle title="대교 벽보 한글 읽기" />
                <div className="flex justify-between">
                    {
                        dayInfos.map((_item, index) => <WeekPlanDayInfo key={index} day={_item.day} type={_item.type} />)
                    }
                </div>
            </div>
        </div>
    )
}