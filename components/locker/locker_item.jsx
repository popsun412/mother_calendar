/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { CloseSharp } from '@material-ui/icons';
import { useRouter } from 'next/router';
import moment from "moment";

export default function LockerItem(props) {
    const router = useRouter();

    const regString = () => {
        if (props.item.lockerType == '책장' || props.item.lockerType == '교구장') return "구매";
        if (props.item.lockerType == '학원' || props.item.lockerType == '체험') return "방문";
        return "";
    }

    const firstTag = () => {
        if (props.item.lockerType == '책장' || props.item.lockerType == '교구장' || props.item.lockerType == "학원") return props.item.subject;
        if (props.item.lockerType == '체험') return props.item.region;
        return "";
    }

    const secondTag = () => {
        if (props.item.lockerType == '책장' || props.item.lockerType == '교구장' || props.item.lockerType == '체험') return props.item.field;
        if (props.item.lockerType == '학원') return "학원";
        return "";
    }

    const isOpacity = () => {
        if (props.item.lockerType == '책장' || props.item.lockerType == '교구장') return props.item.status == 2;
        if (props.item.lockerType == '학원' || props.item.lockerType == '체험') return props.item.status == 1;
    }

    return <div className={`flex space-x-4 items-start ${isOpacity() ? "opacity-30" : ""}`} onClick={() => {
        if (!props.isMe) return;

        let pathname = '/editbook';
        if (props.item.lockerType == '책장') pathname = '/editbook';
        if (props.item.lockerType == '교구장') pathname = '/edittool';
        if (props.item.lockerType == '학원') pathname = '/editacademy';
        if (props.item.lockerType == '체험') pathname = '/editplace';

        router.push({ pathname, query: { itemUid: props.item.itemUid } });
    }}>
        <div className="relative flex-shrink-0 w-24 h-24">
            <div
                className="before:top-0 before:right-0 before:bottom-0 before:left-0 before:absolute rounded-md border border-solid border-color4"
                style={{
                    backgroundImage: `url("${props.item.image}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "100%",
                    paddingTop: "100%",
                    backgroundPosition: "center center"
                }}
            />
        </div>

        <div className="flex-auto flex flex-col overflow-hidden">
            <span className="overflow-hidden whitespace-nowrap break-words text-ellipsis font-semibold " style={{ fontSize: '15px', letterSpacing: '-0.3px' }}>{props.item.name}</span>
            {(props.item.status >= 1) ? <>
                <div className='textGray3 mb-1' style={{ fontSize: '13px' }}>{moment(props.item.regDt).format("YYYY.MM")} {regString()}</div>
                <div className='flex mb-1'>
                    {(props.item.score >= 1) ? <img src='/images/ic_star_color.png' /> : <img src='/images/ic_star_grey.png' />}
                    {(props.item.score >= 2) ? <img src='/images/ic_star_color.png' /> : <img src='/images/ic_star_grey.png' />}
                    {(props.item.score >= 3) ? <img src='/images/ic_star_color.png' /> : <img src='/images/ic_star_grey.png' />}
                    {(props.item.score >= 4) ? <img src='/images/ic_star_color.png' /> : <img src='/images/ic_star_grey.png' />}
                    {(props.item.score >= 5) ? <img src='/images/ic_star_color.png' /> : <img src='/images/ic_star_grey.png' />}
                </div>
            </> : <></>}
            <div>
                <span className='px-1.5 text-xs textGray3 rounded mr-1.5'
                    style={{ paddingTop: '3px', paddingBottom: '3px', backgroundColor: '#f0f5f8' }}>{firstTag()}</span>
                <span className='px-1.5 text-xs textGray3 rounded'
                    style={{ paddingTop: '3px', paddingBottom: '3px', backgroundColor: '#f0f5f8' }}>{secondTag()}</span>
            </div>
        </div>

        <CloseSharp onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            props.onDelete();
        }} />
    </div>
}