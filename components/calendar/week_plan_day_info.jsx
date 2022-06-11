import { CloseRounded } from '@material-ui/icons'

export default function WeekPlanDayInfo(props) {
    const _type = props.type ?? 0;

    return (
        <div className="flex flex-col items-center justify-between">
            <span className="text-gray-400">{props.day}</span>
            <div className="h-5 flex items-center">
                {(_type == 0) ? <CloseRounded className="text-sm textOrange5" /> : <></>}
                {(_type == 1) ? <div className="bg5 rounded-full w-4 h-4"></div> : <></>}
                {(_type == 2) ? <div className="rounded-full w-4 h-4 border-dotted border-color3 border" /> : <></>}
                {(_type == 3) ? <div className="w-4 h-4" /> : <></>}
            </div>
        </div>
    )
}