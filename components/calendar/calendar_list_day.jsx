/* eslint-disable @next/next/no-img-element */
import PlanTitle from './plan_title';
import moment from "moment";
import Link from "next/link";
import { useRouter } from 'next/router';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import { getAuth } from "firebase/auth";

export default function PlanListDay(props) {
    const auth = getAuth();
    const router = useRouter();

    const timeFormat = (_time) => {
        if (_time == null) return "";

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
        <div className="w-full h-full overflow-y-auto flex-col items-stretch bg-white px-5 pt-4 pb-28" style={{ borderTopRightRadius: "15px" }}>
            {props.items.map((_item) => {
                return <Link href={`/plan/${_item.planUid}`} key={_item.planUid} passHref>
                    <div className="flex py-4">
                        <div className="w-7 h-7 my-1.5 checkbox m-2 text-center flex items-center justify-center" onClick={(e) => {
                            e.preventDefault();
                            if (_item.createUserUid != auth.currentUser.uid) return;

                            let _href = { pathname: '/plan/certify', query: { planUid: _item.planUid } }
                            if (_item.isAuth) _href = { pathname: '/certify/complete', query: { planAuthUid: _item.planAuthUid } };
                            router.push(_href);
                        }}>
                            {(_item.isAuth) ? <img src="/images/checkV.png" className="w-4 h-3" alt="체크" /> : <></>}
                        </div>
                        <div className="flex-auto flex items-center">
                            <div className="flex flex-col flex-auto ml-4">
                                <PlanTitle title={_item.name} subject={_item.subject} active={!_item.isAuth} />
                                <span className={`text-xs pt-1 ${_item.isAuth ? "textGray4" : "textGray3"}`}>{`${timeFormat(_item.startTime)} ~ ${timeFormat(_item.endTime)}`}</span>
                            </div>
                            {(_item.isCamera) ? <CameraAltIcon size="small" style={{ color: "#e0e0e0" }} /> : <></>}
                        </div>
                    </div>
                </Link>
            })}
        </div>
    )
}