/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Switch from 'react-ios-switch';
import network from "../../util/network";
import moment from 'moment';
import CircleLoading from "../../components/common/circle_loading";
import CircleLoadingOpacity from "../../components/common/circle_loading_opacity";
import CustomMobileDatepicker from "../../components/common/custom_mobile_datepicker";
import CustomTimepicker from "../../components/common/custom_timepicker";
import { ChevronRight } from "@mui/icons-material"

// firebase
import { getAuth } from "firebase/auth";

export default function Edit(props) {
    const router = useRouter();
    const [load, setLoad] = useState(false);
    const auth = getAuth();

    // 상태관리
    const [checked, setChecked] = useState(false);
    const [common, setCommon] = useState(false);
    const [saving, setSaving] = useState(false);

    const [planInfo, setPlanInfo] = useState(
        {
            planUid: null,
            commonPlanUid: null,
            repeatDay: [],
            startDate: new Date(),
            endDate: new Date(),
            startTime: new Date(),
            endTime: new Date(),
        }
    );

    // 유저 정보 갖고오기
    const getUser = async () => {
        const _result = await network.post('/userInfo');

        // data 통신
        if (_result.status == 200) {
            await getPlan();
            setLoad(true);
        } else {
            router.push('/');
        }
    }

    // 공동 계획
    const getPlan = async () => {
        const _result = await network.get(`/plan/${router.query.planUid}`);

        if (_result.status == 200) {
            setChecked(_result.data.repeatDay.length > 0);
            planInfo.planUid = _result.data.planUid;
            planInfo.commonPlanUid = _result.data.commonPlanUid;
            planInfo.repeatDay = _result.data.repeatDay;
            if (_result.data.recommTerm != null) planInfo.endDate = moment(planInfo.endDate).add('M', _result.data.recommTerm).toDate();
            if (_result.data.startTime != null) planInfo.startTime = moment(_result.data.startTime, "HH:mm:ss");
            if (_result.data.endTime != null) planInfo.endTime = moment(_result.data.endTime, "HH:mm:ss")
            setCommon(_result.data.commonPlanUid != null);
        }
    }

    // 요일 렌더링
    const daysRendering = () => {
        const result = [];
        const _days = ["일", "월", "화", "수", "목", "금", "토"];
        for (let i = 0; i < 7; i++) {
            const _index = (i < 7) ? i : 0;
            const _daysIndex = planInfo.repeatDay.findIndex((_item) => _item == _index);

            result.push(
                <div
                    key={_index}
                    className={`w-10 h-10 flex justify-center items-center rounded-full text-xs ${_daysIndex >= 0 ? "bg5 text-white border" : "border border-gray3 textGray4"}`}
                    onClick={() => {
                        // 토글 처리
                        (_daysIndex >= 0) ? planInfo.repeatDay.splice(_daysIndex, 1) : planInfo.repeatDay.push(_index);
                        setPlanInfo({ ...planInfo, repeatDay: planInfo.repeatDay });
                    }}
                >{_days[_index]}</div>
            );
        }
        return result;
    };

    // 계획 등록
    const onSave = async () => {
        setSaving(true);

        planInfo.repeatDay = checked ? planInfo.repeatDay : [];

        const _result = await network.put('/plan', {
            ...planInfo,
            commonPlanUid: common ? props.query.commonPlanUid : null,
            startTime: (planInfo.startTime == null) ? null : moment(planInfo.startTime).format("HH:mm"),
            endTime: (planInfo.endTime == null) ? null : moment(planInfo.endTime).format("HH:mm"),
        });

        if (_result.status == 200) {
            router.push(`/plan/${planInfo.planUid}`);
        }

        setSaving(false);
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (_user) => {
            if (_user) {
                await getUser();
            } else {
                setUserInfo(null);
                router.push('/');
            }
        });
    }, [])

    // 오전 오후 표시
    const timeFormat = (_dateTime) => {
        if (_dateTime == null) return "";

        const koA = moment(_dateTime).format("a") == 'am' ? "오전" : "오후";
        const koH = moment(_dateTime).format("h시");
        const koM = moment(_dateTime).format("mm");
        return `${koA} ${koH}${(koM == "00") ? "" : " " + koM + "분"}`;
    }

    return (<>
        {(load)
            ? <div className="">
                <div className="relative flex py-4">
                    <span className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-base font-medium textGray1 z-40">계획 수정</span>

                    <div className="flex flex-auto justify-between items-center z-50">
                        <svg className="w-7 h-8 ml-1 textGray2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => router.back()}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>

                        <span className={`pr-4 text-base font-medium textGray4 textOrange5`} value="false" onClick={onSave}>완료</span>
                    </div>
                </div>

                <div className="px-5">
                    {/* 반복요일 */}
                    <div className='mb-8'>
                        <div className='relative'>
                            <div className="flex justify-between items-center mb-4">
                                <span className='text-sm font-medium textGray2'>반복요일</span>
                                <Switch
                                    checked={checked}
                                    onChange={checked => { setChecked(checked) }}
                                    offColor="#e0e0e0"
                                    onColor="#3C81E1"
                                />
                            </div>
                            {(checked ? <div className="flex justify-between">{daysRendering()}</div> : <></>)}
                        </div>
                    </div>

                    {/* 기간 */}
                    <div className='mb-8'>
                        <span className="textGray2 text-sm font-medium">기간</span>
                        <div className='mt-3 flex'>
                            <CustomMobileDatepicker
                                onChange={(date) => setPlanInfo({ ...planInfo, startDate: date })}
                                value={planInfo.startDate}
                                auto={true}
                            >
                                <div className='flex-auto border border-gary3 rounded-md text-sm textGray2 text-center py-1 flex items-center justify-center'>
                                    <span className="text-xs font-medium pl-2">{moment(planInfo.startDate).format("YYYY년 M월 D일")}</span>
                                    <ChevronRight className="rotate-90" />
                                </div>
                            </CustomMobileDatepicker>

                            <div className='flex items-center justify-center'>
                                <svg className="w-3 h-2 textGray4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                </svg>
                            </div>

                            <CustomMobileDatepicker
                                onChange={(date) => setPlanInfo({ ...planInfo, endDate: date })}
                                value={planInfo.endDate}
                                auto={true}
                            >
                                <div className='flex-auto border border-gary3 rounded-md text-sm textGray2 text-center py-1 flex items-center justify-center'>
                                    <span className="text-xs font-medium pl-2">{moment(planInfo.endDate).format("YYYY년 M월 D일")}</span>
                                    <ChevronRight className="rotate-90" />
                                </div>
                            </CustomMobileDatepicker>
                        </div>
                    </div>

                    {/* 시간 */}
                    <div className='mb-8 flex flex-col'>
                        <span className="textGray2 text-sm font-medium">시간
                            <span className='textGray4'> (선택)</span>
                        </span>
                        <div className='flex space-x-1.5 mt-3'>
                            <CustomTimepicker
                                onChange={(time) => setPlanInfo({ ...planInfo, startTime: time })}
                                value={planInfo.startTime}
                            >
                                <div className='flex-auto border border-gary3 rounded-md text-sm textGray2 text-center py-1 flex items-center justify-center'>
                                    <span className={`text-xs font-medium pl-2 ${planInfo.startTime == null ? "textGray4" : ""}`}>
                                        {planInfo.startTime == null ? "시작시간" : timeFormat(planInfo.startTime)}
                                    </span>
                                    <ChevronRight className="rotate-90" />
                                </div>
                            </CustomTimepicker>

                            <div className='flex items-center justify-center'>
                                <svg className="w-3 h-2 textGray4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                </svg>
                            </div>

                            <CustomTimepicker
                                onChange={(time) => setPlanInfo({ ...planInfo, endTime: time })}
                                value={planInfo.endTime}
                            >
                                <div className='flex-auto border border-gary3 rounded-md text-sm textGray2 text-center py-1 flex items-center justify-center'>
                                    <span className={`text-xs font-medium pl-2 ${planInfo.endTime == null ? "textGray4" : ""}`}>
                                        {planInfo.endTime == null ? "종료시간" : timeFormat(planInfo.endTime)}
                                    </span>
                                    <ChevronRight className="rotate-90" />
                                </div>
                            </CustomTimepicker>
                        </div>
                    </div>
                </div>
                {(saving) ? <CircleLoadingOpacity /> : <></>}
            </div>
            : <div className="w-screen h-screen flex items-center justify-center">
                <CircleLoading />
            </div>
        }
    </>)
}

Edit.getInitialProps = async (ctx) => {
    return {
        query: ctx.query
    }
}
