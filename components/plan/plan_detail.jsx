/* eslint-disable @next/next/no-img-element */
import PlanTitle from "../calendar/plan_title";
import { weekDayFormat, calcPercent } from "../../util/helper";
import moment from "moment";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useRouter } from "next/router"

export default function PlaneDetail(props) {
    const router = useRouter();

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

    const _percent = () => Math.round(props.plan.auths.length / calcPercent(props.plan));

    return (
        <>
            <div className="px-5">
                <div className="flex items-center justify-between py-6">
                    <svg className="w-7 h-8 textGray2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => router.back()}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    <svg className="w-6 h-6 textGray3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                    </svg>
                </div>

                <div className="flex flex-row pb-6">
                    <PlanTitle subject={props.plan.subject} />
                    <p className="textGray1 text-lg font-normal">{props.plan.name}</p>
                </div>
                {
                    props.plan.commonPlanUid
                        ? <div className="border rounded-md border-color2 flex justify-between p-3 mb-4">
                            <div className="flex flex-row">
                                <img src="/images/group.png" alt="그룹이미지" className="w-5 h-5 mr-3" />
                                <span className="textGray2 text-sm font-normal">공동 계획입니다!</span>
                            </div>
                            <span className="textBlue1 text-sm font-normal">현황 보러가기</span>
                        </div>
                        : <></>
                }
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
                <div>
                    <div className="grid grid-cols-2 text-center border-b-[0.38px] border-gary4 mb-1">
                        <span className="textGray3 font-normal text-sm pb-2 hover:border-b-2 hover:text-[#3c81e1] hover:border-[#3c81e1] hover:font-semibold">실행인증</span>
                        <span className="textGray3 font-normal text-sm pb-2 hover:border-b-2 hover:text-[#3c81e1] hover:border-[#3c81e1] hover:font-semibold">실행현황</span>
                    </div>

                    {/* 실행 인증 */}
                    <div className="grid grid-cols-3 gap-1">
                        {
                            props.plan.auths.map((_auth) =>
                                <div className={`bg-[url(${_auth.image ? _auth.image : "/images/rectangle.png"})] bg-center bg-no-repeat bg-cover relative h-[7.5rem]`} key={_auth.planAuthUid}>
                                    <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.4)]" />
                                    <div className="flex flex-col absolute left-2.5 bottom-2.5">
                                        <span className="text-[#dbeffd] text-xs font-light">{moment.unix(_auth.authDt).format("YYYY년")}</span>
                                        <span className="text-white font-normal text-sm shadow-[0px 0px 4px rgba(0,0,0,0.25)]">{moment.unix(_auth.authDt).format("M월D일")}</span>
                                    </div>
                                </div>)
                        }
                    </div>

                    {/* 실행 현황 */}
                </div>

                <div className="fixed flex items-center justify-center relative">
                    <span className="px-5 py-3 bg5 text-base text-white font-medium rounded-full fixed bottom-6">오늘 하루 인증하기</span>
                    {/* <span className="px-5 py-3 bg-gray4 text-base text-white font-medium rounded-full fixed bottom-6">오늘 인증을 완료했어요!</span>
                    <span className="px-5 py-3 bg5 text-base text-white font-medium rounded-full fixed bottom-6">종료 계획 재시작하기</span> */}
                </div>
            </div>

        </>
    )
}