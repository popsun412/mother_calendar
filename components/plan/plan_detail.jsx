/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import PlanTitle from "../calendar/plan_title";
import { weekDayFormat, calcPercent } from "../../util/helper";
import moment from "moment";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useRouter } from "next/router"
import PlanMoreButton from "./plan_more_button";
import { useEffect } from "react";
import Link from "next/link";

// 글로벌 상태관리
import { useRecoilState } from "recoil";
import { certifyLockerState } from "../../states/certify_locker";

// firebase
import { getAuth } from "firebase/auth";

export default function PlaneDetail(props) {
    const auth = getAuth();

    const router = useRouter();
    const [lockers, setLockers] = useRecoilState(certifyLockerState);

    const status = () => {
        const _endDate = moment(props.plan.endDate).add(1, 'd');
        const _todayAuth = props.plan.auths.findIndex((_auth) => moment(_auth.authDt).format("YYYY-MM-DD") == moment().format("YYYY-MM-DD")) >= 0;

        // 오늘 인증 함
        if (_todayAuth) return 1;

        if (_endDate <= moment()) return 2;

        // 요일 확인
        const _day = parseInt(moment().format("d"));
        if (props.plan.repeatDay != null && props.plan.repeatDay.findIndex((_repeatDay) => _repeatDay == _day) < 0) return 3;

        return 0;
    }

    const repeatDayFormat = () => {
        if (props.plan.repeatDay == null) return "";

        props.plan.repeatDay.sort(function (a, b) {
            return a - b;
        });

        let _results = props.plan.repeatDay.map((_day) => weekDayFormat(_day));

        return _results.join(', ');
    }

    // 오전 오후 표시
    const timeFormat = (value) => {
        if (value == null) return "";
        const _dateTime = moment(`${moment().format("yyyy-MM-DD")} ${value}`);

        const koA = _dateTime.format("a") == 'am' ? "오전" : "오후";
        const koH = _dateTime.format("h시");
        const koM = _dateTime.format("mm");
        return `${koA} ${koH}${(koM == "00") ? "" : " " + koM + "분"}`;
    }

    // 프로그레스바 css
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 5,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#ff6035' : '#e0e0e0',
        },
    }));

    const _percent = () => {
        const _totalCount = calcPercent(props.plan);
        if (_totalCount == 0) return 0;

        return Math.round(props.plan.auths.length / calcPercent(props.plan) * 100);
    }

    useEffect(() => {
        status()
    }, []);

    return (
        <>
            <div className="px-5">
                <div className="flex items-center justify-between" style={{ height: 50 }}>
                    <svg className="w-7 h-8 textGray2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => router.back()}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>

                    {(auth.currentUser.uid == props.plan.createUserUid) ? <PlanMoreButton plan={props.plan} /> : <></>}
                </div>

                <div className="flex flex-row pb-6 pt-3">
                    <PlanTitle subject={props.plan.subject} />
                    <p className="textGray1 text-lg font-semibold">{props.plan.name}</p>
                </div>
                {props.plan.commonPlanUid
                    ? <div className="border rounded-md border-color2 flex justify-between p-3 mb-4" onClick={() => {
                        router.push(`/plandetail?commonPlanUid=${props.plan.commonPlanUid}`);
                    }}>
                        <div className="flex flex-row">
                            <img src="/images/group.png" alt="그룹이미지" className="w-5 h-5 mr-3" />
                            <span className="textGray2 text-sm font-normal">공동 계획입니다!</span>
                        </div>
                        <span className="textBlue1 text-sm font-normal">현황 보러가기</span>
                    </div>
                    : <></>}
                <div className="bg-gray2 rounded-md px-5 py-3.5 mb-5">
                    {
                        (props.plan.repeatDay == null)
                            ? <p className="textGray2 font-semibold text-base mb-3">1회</p>
                            : <p className="textGray2 font-semibold text-base mb-3">{`주 ${(props.plan.repeatDay ?? []).length}회  |  매주 ${repeatDayFormat()}`}</p>
                    }

                    <div className="textGray3 font-normal text-sm flex flex-col space-y-2.5">
                        <div className="flex flex-row items-center">
                            <img src="/images/calendar.png" alt="캘린더이미지" className="w-3.5 h-3.5 mr-2" />

                            {
                                (props.plan.repeatDay == null)
                                    ? <span>{`${moment(props.plan.startDate).format("YYYY년 M월 D일")}`}</span>
                                    : <span>{`${moment(props.plan.startDate).format("YYYY년 M월 D일")} - ${moment(props.plan.endDate).format("YYYY년 M월 D일")}`}</span>
                            }

                        </div>
                        <div className="flex flex-row items-center">
                            <img src="/images/clock.png" alt="시계이미지" className="w-3.5 h-3.5 mr-2" />
                            <span>{`${timeFormat(props.plan.startTime)} - ${timeFormat(props.plan.endTime)}`}</span>
                        </div>
                    </div>
                </div>
                <div className="mb-4 relative">
                    <p className="mb-3.5 font-bold">실행률</p>
                    <BorderLinearProgress variant="determinate" value={_percent()} className="mb-1.5" />
                    <p className="textOrange4 text-right font-bold">{`${_percent()}%`}</p>
                </div>
                <hr className="mb-4" />
                <div className="pl-3 flex flex-row space-x-8 mb-9">
                    <div>
                        <p className="textGray3 text-xs font-normal">계획일수</p>
                        <span className="textGray1 text-base font-normal table-row">{calcPercent(props.plan)}
                            <span className="text-xs teble-cell">개</span>
                        </span>
                    </div>
                    <div>
                        <p className="textGray3 text-xs font-normal">실행일수</p>
                        <span className="textGray1 text-base font-normal table-row">{props.plan.auths.length}
                            <span className="text-xs teble-cell">개</span>
                        </span>
                    </div>
                </div>
                <div className="mb-4 relative">
                    <p className="mb-3.5 font-bold">실행인증</p>
                </div>
                <div className="grid grid-cols-2 text-center border-b-[0.38px] border-gary4 mb-1" />
                <div>
                    {(props.plan.auths.length == 0)
                        ? <div className="py-10">
                            <p className="text-center textGray4 text-sm">인증 내역이 없습니다.</p>
                        </div>
                        : <div className="grid grid-cols-3 gap-1">
                            {props.plan.auths.map((_auth) =>
                                <div
                                    className={`bg-center bg-no-repeat bg-cover relative h-[7.5rem]`}
                                    key={_auth.planAuthUid}
                                    style={{ backgroundImage: `url(${_auth.image})` }}
                                    onClick={() => {
                                        router.push(`/certify/complete?planAuthUid=${_auth.planAuthUid}`);
                                    }}
                                >
                                    <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.4)]" />
                                    <div className="flex flex-col absolute left-2.5 bottom-2.5">
                                        <span className="text-[#dbeffd] text-xs font-light">{moment(_auth.authDt).format("YYYY년")}</span>
                                        <span className="text-white font-normal text-sm shadow-[0px 0px 4px rgba(0,0,0,0.25)]">{moment(_auth.authDt).format("M월 D일")}</span>
                                    </div>
                                </div>
                            )}
                        </div>}
                </div>

                {(auth.currentUser.uid == props.plan.createUserUid) ? <div className="fixed flex items-center justify-center left-0 right-0 bottom-6">
                    {(status() == 0) ? <span className="px-5 py-3 bg5 text-base text-white font-medium rounded-full" onClick={() => {
                        setLockers([]);
                        router.push(`/plan/certify?planUid=${props.plan.planUid}`);
                    }}>오늘 하루 인증하기</span> : <></>}
                    {(status() == 1) ? <span className="px-5 py-3 bg-gray4 text-base text-white font-medium rounded-full fixed bottom-6">오늘 인증을 완료했어요!</span> : <></>}
                    {(status() == 2) ? <Link href={`/plan/edit?planUid=${props.plan.planUid}`} passHref><span className="px-5 py-3 bg5 text-base text-white font-medium rounded-full fixed bottom-6">종료 계획 재시작하기</span></Link> : <></>}
                </div> : <></>}
            </div>

        </>
    )
}