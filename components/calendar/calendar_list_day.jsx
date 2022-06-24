/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import moment from "moment";
import Link from "next/link";
import { useRouter } from 'next/router';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Toast from '../common/toast';

import { getAuth } from "firebase/auth";


// 글로벌 상태관리
import { useRecoilState } from "recoil";
import { certifyLockerState } from "../../states/certify_locker";
import { certifyUploadImageState, certifyRviewState } from "../../states/certify_info";

export default function PlanListDay(props) {
    const auth = getAuth();
    const router = useRouter();

    const [lockers, setLockers] = useRecoilState(certifyLockerState);
    const [uploadImage, setUploadImage] = useRecoilState(certifyUploadImageState);
    const [review, setReview] = useRecoilState(certifyRviewState);

    const [ToastStatus, setToastStatus] = useState(false);

    useEffect(() => {
        if (ToastStatus) setTimeout(() => setToastStatus(false), 1000);
    }, [ToastStatus]);

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

    // 선택 가능여부 확인
    const checkActive = (_item) => {
        const _now = moment();
        if (_item.createUserUid != auth.currentUser.uid) return false;
        if (_item.isAuth) return false;

        const _startUnixTime = moment(moment(props.selectedDate).format("YYYY-MM-DD")).unix();

        if (_now.unix() < _startUnixTime) return false;

        // 인증 안함
        if (!_item.isAuth) {
            // 해당 요일이 맞는지 확인
            const _day = parseInt(moment(props.selectedDate).format("d"));
            if (_item.repeatDay != null && _item.repeatDay.findIndex((_repeatDay) => _repeatDay == _day) < 0) return false;
        }

        return true;
    }

    // 정렬
    props.items.sort((a, b) => {
        const aCheck = a.isAuth ? 0 : 1;
        const bCheck = b.isAuth ? 0 : 1;

        if (aCheck < bCheck) return 1;
        if (aCheck > bCheck) return -1;
        return 0;
    });

    return <>
        <div className="w-full h-full overflow-y-auto flex-col items-stretch bg-white px-5 pt-4 pb-28" style={{ borderTopRightRadius: "15px" }}>
            {props.items.map((_item) => {
                const _check = checkActive(_item);

                return <Link href={`/plan/${_item.planUid}`} key={_item.planUid} passHref>
                    <div className="flex py-4">
                        <div
                            className={`w-7 h-7 mr-4 my-1.5 checkbox m-2 text-center inline-flex flex-shrink-0 items-center justify-center ${!_check ? "bg-gray3" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();

                                // 인증된 경우
                                if (_item.isAuth) {
                                    _href = { pathname: '/certify/complete', query: { planAuthUid: _item.planAuthUid } };
                                    router.push(_href);
                                    return;
                                }

                                // 비활성화
                                if (!_check) {
                                    setToastStatus(true);
                                    return;
                                }

                                // 인증하기 이동
                                setLockers([]);
                                setUploadImage({ image_file: null, preview_URL: '' });
                                setReview("");
                                let _href = { pathname: '/plan/certify', query: { planUid: _item.planUid, date: moment(props.selectedDate).format("YYYYMMDD") } }
                                router.push(_href);
                            }}
                        >
                            {(_item.isAuth) ? <img src="/images/checkV.png" className="w-4 h-3" alt="체크" /> : <></>}
                        </div>

                        <div className="flex-auto flex items-center overflow-hidden">
                            <div className="flex flex-col items-stretch w-full">
                                <div className="flex">
                                    <div
                                        className={`inline-flex flex-shrink-0 max-h-6 justify-center items-center px-1 py-0.5 mr-2 rounded text-white text-xs ${props.fontWeight ? props.fontWeight : ""}`}
                                        style={{ backgroundColor: `${(!_item.isAuth ?? true) ? "#FF734D" : "#bdbdbd"}` }}
                                    >
                                        <span>{_item.subject}</span>
                                    </div>
                                    <span className={`text-base font-semibold whitespace-nowrap break-words text-ellipsis overflow-hidden ${(!_item.isAuth ?? true) ? "" : "textGray4 line-through"}`}>{_item.name}</span>
                                </div>
                                <span className={`text-xs pt-1 ${_item.isAuth ? "textGray4" : "textGray3"}`}>{`${timeFormat(_item.startTime)} ~ ${timeFormat(_item.endTime)}`}</span>
                            </div>
                        </div>
                        {(_item.isCamera) ? <CameraAltIcon size="small" style={{ color: "#e0e0e0" }} /> : <></>}
                    </div>
                </Link>
            })}
        </div>
        {ToastStatus ? <Toast msg={'실행 인증 가능한 일자가 아닙니다.'} /> : <></>}
    </>
}