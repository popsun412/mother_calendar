/* eslint-disable @next/next/no-img-element */
import PlanTitle from './plan_title';
import moment from "moment";

export default function PlanListDay(props) {
    const timeFormat = (_time) => {
        let tempTime = _time.split(":");
        let dt = new Date();
        dt.setHours(tempTime[0]);
        dt.setMinutes(tempTime[1]);
        dt.setSeconds(tempTime[2]);
        const momentDt = moment(dt);
        const koA = momentDt.format("A") == 'AM' ? "오전" : "오후";

        return `${koA} ${momentDt.format("hh:mm")}`;
    }

    return (
        <div className="w-full h-full overflow-y-auto flex-col items-stretch bg-white px-5 pt-4" style={{ borderTopRightRadius: "15px" }}>
            {props.items.map((_item) => {
                return <div className="flex py-4" key={_item.planUid}>
                    <div className="w-7 h-7 my-1.5 checkbox m-2 text-center flex items-center justify-center">
                        {(_item.isAuth) ? <img src="/images/checkV.png" className="w-4 h-3" alt="체크" /> : <></>}
                    </div>
                    <div className="flex flex-col flex-auto ml-4">
                        <PlanTitle title={_item.name} subject={_item.subject} />
                        <span className="text-xs textGray3 pt-1">{`${timeFormat(_item.startTime)} ~ ${timeFormat(_item.endTime)}`}</span>
                    </div>
                </div>
            })}
        </div>
    )
}