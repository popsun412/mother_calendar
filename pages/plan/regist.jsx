/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import subjects from ".././../constants/subjects";
import Switch from 'react-ios-switch';
import network from "../../util/network";
import moment from 'moment';
import CircleLoading from "../../components/common/circle_loading";
import CustomMobileDatepicker from "../../components/common/custom_mobile_datepicker";
import CustomTimepicker from "../../components/common/custom_timepicker";
import { ChevronRight } from "@mui/icons-material"

// firebase
import { getAuth } from "firebase/auth";

export default function Regist(props) {
    const router = useRouter();
    const [load, setLoad] = useState(false);
    const auth = getAuth();

    // 상태관리
    const [checked, setChecked] = useState(true);
    const [common, setCommon] = useState(false);
    const [openTime, setOpenTime] = useState(true);

    const [registInfo, setRegistInfo] = useState(
        {
            name: "",
            subject: null,
            category: null,
            repeatDay: [0, 1, 2, 3, 4, 5, 6],
            startDate: new Date(),
            endDate: null,
            startTime: null,
            endTime: null,
            notification: [],
        }
    );

    // 유저 정보 갖고오기
    const getUser = async () => {
        const _result = await network.post('/userInfo');

        // data 통신
        if (_result.status == 200) {
            if (props.query.commonPlanUid) await getCommonPlan();
            setLoad(true);
        } else {
            router.push('/');
        }
    }

    // 공동 계획
    const getCommonPlan = async () => {
        const _result = await network.get(`/plan/commonPlan/${props.query.commonPlanUid}`);

        if (_result.status == 200) {


            setChecked(_result.data.repeatDay.length > 0);

            registInfo.name = _result.data.name;
            registInfo.subject = _result.data.subject;
            registInfo.category = _result.data.category;
            registInfo.repeatDay = _result.data.repeatDay;
            if (_result.data.recommTerm != null) {
                const _newDate = new Date();
                registInfo.startDate = _newDate;
                registInfo.endDate = moment(_newDate).add('M', _result.data.recommTerm).toDate();
            }

            if (_result.data.startTime != null) registInfo.startTime = moment(_result.data.startTime, "HH:mm:ss");
            if (_result.data.endTime != null) registInfo.endTime = moment(_result.data.endTime, "HH:mm:ss");
            if (_result.data.startTime == null && _result.data.endTime == null) setOpenTime(false);

            setCommon(true);
        }
    }

    // 요일 렌더링
    const daysRendering = () => {
        const result = [];
        const _days = ["일", "월", "화", "수", "목", "금", "토"];
        for (let i = 0; i < 7; i++) {
            const _index = (i < 7) ? i : 0;
            const _daysIndex = registInfo.repeatDay.findIndex((_item) => _item == _index);

            result.push(
                <div
                    key={_index}
                    className={`w-10 h-10 flex justify-center items-center rounded-full text-xs ${_daysIndex >= 0 ? "bg5 text-white border" : "border border-gray3 textGray4"}`}
                    onClick={() => {
                        // 토글 처리
                        (_daysIndex >= 0) ? registInfo.repeatDay.splice(_daysIndex, 1) : registInfo.repeatDay.push(_index);
                        setRegistInfo({ ...registInfo, repeatDay: registInfo.repeatDay });
                    }}
                >{_days[_index]}</div>
            );
        }
        return result;
    };

    // 계획 등록
    const planRegist = async () => {
        if (!registActive()) return;

        registInfo.repeatDay = checked ? registInfo.repeatDay : [];

        if (!openTime) {
            registInfo.startTime = null;
            registInfo.endTime = null;
        }

        const _result = await network.post('/plan', {
            ...registInfo,
            commonPlanUid: common ? props.query.commonPlanUid : null,
            startTime: (registInfo.startTime == null) ? null : moment(registInfo.startTime).format("HH:mm"),
            endTime: (registInfo.endTime == null) ? null : moment(registInfo.endTime).format("HH:mm"),
        });

        if (_result.status == 200) {
            router.push(`/calendar`);
        }
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

    // active 체크
    const registActive = () => {
        if (registInfo.name.trim() == "") return false;
        if (registInfo.subject == null) return false;
        if (checked && registInfo.length == 0) return false;
        if (registInfo.startDate == null || registInfo.endDate == null) return false;
        if (registInfo.startTime != null && registInfo.endTime == null) return false;
        if (registInfo.endTime != null && registInfo.startTime == null) return false;

        return true;
    }

    return (<>
        {(load)
            ? <div className="">
                <div className="relative flex py-4">
                    <span className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-base font-medium textGray1 z-40">{common ? "공동" : ""} 계획 등록</span>

                    <div className="flex flex-auto justify-between items-center z-50">
                        <svg className="w-7 h-8 ml-1 textGray2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => router.back()}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>

                        <span className={`pr-4 text-base font-medium ${registActive() ? "textOrange5" : "textGray4"}`} value="false" onClick={planRegist}>완료</span>
                    </div>
                </div>

                <div className="px-5">
                    <div className="text-sm font-medium textGray4 bg-gray2 rounded-xl py-5 flex items-center justify-center mt-4">
                        <input
                            type="text"
                            className="bg-transparent outline-none w-full px-10 text-sm text-black text-center"
                            placeholder='계획명을 입력해주세요.'
                            value={registInfo.name}
                            maxLength={30}
                            disabled={common}
                            onChange={(e) => setRegistInfo({ ...registInfo, name: e.currentTarget.value })}
                        />
                    </div>
                    {/* 분야 */}
                    <div className="mt-7  mb-8">
                        <span className="textGray2 text-sm font-medium">분야</span>
                        <div className="grid grid-cols-4 gap-3 mt-6">
                            {(subjects.map((_item, index) => {
                                return (
                                    <div
                                        className={`flex items-center py-2 border rounded justify-center ${(registInfo.subject == _item.subject) ? "border-[#FF6035] text-[#FF6035]" : "border-gary3 textGray4"}`}
                                        key={index}
                                        onClick={() => {
                                            if (common) return;

                                            registInfo.subject = _item.subject;
                                            registInfo.category = _item.category;
                                            setRegistInfo({ ...registInfo, subject: registInfo.subject });
                                        }}
                                    >
                                        <img src={_item.image} className='w-4 h-4' />
                                        <span className="text-sm font-medium ml-1">{_item.subject}</span>
                                    </div>
                                );
                            }))}
                        </div>
                    </div>

                    {(common) ? <p className="text-center m-0 text-xs textGray4 mb-7">공동 계획은 계획명과 분야를 수정할 수 없습니다.</p> : <></>}

                    {/* 반복요일 */}
                    <div className='mb-8'>
                        <div className='relative'>
                            <div className="flex justify-between items-center mb-4">
                                <span className='text-sm font-medium textGray2'>반복요일</span>
                                <Switch
                                    checked={checked}
                                    onChange={checked => {
                                        setChecked(checked);
                                        if (!checked) setRegistInfo({ ...registInfo, endDate: registInfo.startDate });
                                    }}
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
                                onChange={(date) => setRegistInfo({ ...registInfo, startDate: date })}
                                value={registInfo.startDate}
                                auto={true}
                                maxDate={checked ? registInfo.endDate : null}
                            >
                                <div className='flex-auto border border-gary3 rounded-md text-sm textGray2 text-center py-1 flex items-center justify-center'>
                                    <span className={`text-xs font-medium pl-2 ${registInfo.startDate == null ? "textGray4" : ""}`}>{registInfo.startDate == null ? "시작날짜" : moment(registInfo.startDate).format("YYYY년 M월 D일")}</span>
                                    <ChevronRight className="rotate-90" />
                                </div>
                            </CustomMobileDatepicker>
                            {(checked) ? <>
                                <div className='flex items-center justify-center'>
                                    <svg className="w-5 h-2 textGray4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                    </svg>
                                </div>

                                <CustomMobileDatepicker
                                    onChange={(date) => setRegistInfo({ ...registInfo, endDate: date })}
                                    value={registInfo.endDate}
                                    auto={true}
                                    minDate={registInfo.startDate}
                                >
                                    <div className='flex-auto border border-gary3 rounded-md text-sm textGray2 text-center py-1 flex items-center justify-center'>
                                        <span className={`text-xs font-medium pl-2 ${registInfo.endDate == null ? "textGray4" : ""}`}>{registInfo.endDate == null ? "종료날짜" : moment(registInfo.endDate).format("YYYY년 M월 D일")}</span>
                                        <ChevronRight className="rotate-90" />
                                    </div>
                                </CustomMobileDatepicker></>
                                : <></>}
                        </div>
                    </div>

                    {/* 한나님과 같이 작업 */}
                    {/* 시간 */}
                    <div className='mb-8 flex flex-col'>
                        <div className="flex justify-between items-center">
                            <span className="textGray2 text-sm font-medium">시간<span className='textGray4'> (선택)</span></span>
                            <Switch
                                checked={openTime}
                                onChange={() => setOpenTime(!openTime)}
                                offColor="#e0e0e0"
                                onColor="#3C81E1"
                            />
                        </div>
                        {(openTime) ? <div className='flex space-x-1.5 mt-3'>
                            <CustomTimepicker
                                onChange={(time) => setRegistInfo({ ...registInfo, startTime: time })}
                                value={registInfo.startTime}
                            >
                                <div className='flex-auto border border-gary3 rounded-md text-sm textGray2 text-center py-1 flex items-center justify-center'>
                                    <span className={`text-xs font-medium pl-2 ${registInfo.startTime == null ? "textGray4" : ""}`}>
                                        {registInfo.startTime == null ? "시작시간" : timeFormat(registInfo.startTime)}
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
                                onChange={(time) => setRegistInfo({ ...registInfo, endTime: time })}
                                value={registInfo.endTime}
                            >
                                <div className='flex-auto border border-gary3 rounded-md text-sm textGray2 text-center py-1 flex items-center justify-center'>
                                    <span className={`text-xs font-medium pl-2 ${registInfo.endTime == null ? "textGray4" : ""}`}>
                                        {registInfo.endTime == null ? "종료시간" : timeFormat(registInfo.endTime)}
                                    </span>
                                    <ChevronRight className="rotate-90" />
                                </div>
                            </CustomTimepicker>
                        </div> : <></>}
                    </div>

                    {/* 우선 빈값 */}
                    {/* 알림 */}
                    {/* <div className='mb-8'>
                    <div className='relative'>
                        <span className="textGray2 text-sm font-medium">알림
                            <span className='textGray4'> (선택)</span>
                        </span>
                        <div className={`${alarmMode && "dark"} mt-4`}>
                            <label className="absolute top-0 right-0 w-12 h-7 bg-[red] rounded-3xl">
                                <input type="checkbox" onClick={() => setAlarmMode(!alarmMode)}
                                    className="
                                        opacity-0 w-0 h-0
                                        checked:bg-blue4 checked:translate-x-5
                                        focus:shadow-[0 0 1px bg-gray3]   
                                    "
                                />
                                <span className="
                                    absolute top-0 left-0 right-0 bottom-0 bg-blue4 transition-property[0.4s] rounded-full
                                    before:absolute before:content-[''] before:w-5 before:h-5 before:left-1 before:bottom-1 before:bg-white before:transition-property[0.4s] before:translate-x-5 before:rounded-[50%]
                                " />
                            </label>

                            <div className="dark:hidden flex flex-col items-start space-y-2">
                                <div className='flex items-center justify-center border border-gary3 rounded-md p-2'>
                                    <img src='/images/bell.png' className='w-3 h-3.5' />
                                    <span className='ml-1 text-sm textGray2'>30분 전</span>
                                </div>
                                <div className='flex items-center justify-center border border-gary3 rounded-md p-2'>
                                    <img src='/images/bell.png' className='w-3 h-3.5' />
                                    <span className='ml-1 text-sm textGray2'>정시</span>
                                </div>
                                <span className='text-sm textGray3'>다른 알람 추가</span>
                            </div>
                        </div>
                    </div>
                </div> */}
                </div>
            </div>
            : <div className="w-screen h-screen flex items-center justify-center">
                <CircleLoading />
            </div>
        }
    </>)
}

Regist.getInitialProps = async (ctx) => {
    return {
        query: ctx.query
    }
}
