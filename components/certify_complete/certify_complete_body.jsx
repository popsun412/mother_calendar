/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import PlanTitle from '../calendar/plan_title';
import { getLocktypeImage } from "../../util/helper";
import { TextareaAutosize } from "@mui/material"


export default function CertifyCompleteBody(props) {
    return <div className="flex flex-col">
        <div className="flex flex-col mx-5">
            <div className="flex mb-6">
                <PlanTitle subject={props.plan.subject} />
                <p className="textGray1 text-lg font-semibold">{props.plan.name}</p>
            </div>
            {(props.lockers ?? []).map((_locker) => {
                return <div className="flex items-center justify-center border border-color4 rounded-md mb-4 py-3" key={_locker.itemUid}>
                    <img className="w-4 h-4 mr-2" src={getLocktypeImage(_locker.lockerType)} />
                    <span className="text-sm font-semibold textOrange4">{_locker.name}</span>
                </div>
            })}
        </div>
        {(props.auth.image == null)
            ? <div className="flex flex-col bg-gray2 justify-center items-center" style={{ height: "100vw" }}>
                <img src='/images/img-empty-image.png' style={{ width: 94 }} />
                <p className="textGray3">사진이 없습니다.</p>
            </div>
            : <div
                style={{
                    backgroundImage: `url("${props.auth.image}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "100%",
                    paddingTop: "100%",
                    backgroundPosition: "center center"
                }}
            />}
        <TextareaAutosize value={props.auth.review} className='mt-5 px-5 text-sm font-normal flex w-full resize-none outline-none text-center' readOnly />
    </div>
}