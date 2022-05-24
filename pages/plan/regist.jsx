/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import subjects from ".././../constants/subjects";
import Switch from 'react-ios-switch';
import network from "../../util/network";
import GlobalStyles from '@mui/material/GlobalStyles';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import { ko } from "date-fns/locale";
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import CircleLoading from "../../components/common/circle_loading";

// firebase
import { getAuth } from "firebase/auth";

export default function Regist(props) {
    const router = useRouter();
    const [load, setLoad] = useState(false);
    const auth = getAuth();

    // 상태관리
    const [checked, setChecked] = useState(false);
    const [common, setCommon] = useState(false);

    const [registInfo, setRegistInfo] = useState(
        {
            name: "",
            subject: null,
            category: null,
            repeatDay: [],
            startDate: new Date(),
            endDate: new Date(),
            startTime: moment(),
            endTime: moment(),
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
            if (_result.data.recommTerm != null) registInfo.endDate = moment(registInfo.endDate).add('M', _result.data.recommTerm).toDate();
            if (_result.data.startTime != null) registInfo.startTime = moment(_result.data.startTime, "HH:mm:ss");
            if (_result.data.endTime != null) registInfo.endTime = moment(_result.data.endTime, "HH:mm:ss")
            setCommon(true);
        }
    }

    // 요일 렌더링
    const daysRendering = () => {
        const result = [];
        const _days = ["일", "월", "화", "수", "목", "금", "토"];
        for (let i = 1; i <= 7; i++) {
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
        registInfo.repeatDay = checked ? registInfo.repeatDay : [];

        const _result = await network.post('/plan', {
            ...registInfo,
            commonPlanUid: common ? props.query.commonPlanUid : null,
            startTime: (registInfo.startTime == null) ? null : registInfo.startTime.format("HH:mm"),
            endTime: (registInfo.endTime == null) ? null : registInfo.endTime.format("HH:mm"),
        });

        if (_result.status == 200) {
            router.push(`/plan/${_result.data.planUid}`);
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

    return (<>
        {(load)
            ? <div className="">
                <div className="flex py-4 items-center justify-center">
                    <svg className="w-7 h-8 ml-1 textGray2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => router.back()}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    <span className="flex-auto text-center text-base font-medium textGray1">계획 등록</span>
                    <span className={`pr-4 text-base font-medium textGray4 textOrange5`} value="false" onClick={planRegist}>완료</span>
                </div>
                <div className="px-5 h-screen">
                    <div className="text-sm font-medium textGray4 bg-gray2 rounded-xl py-5 flex items-center justify-center mt-4">
                        <input
                            type="text"
                            className="bg-transparent outline-none w-full px-10 text-sm text-black text-center"
                            placeholder='계획명을 입력해주세요.'
                            value={registInfo.name}
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
                                        className={`flex px-3 py-2 border rounded items-center justify-center ${(registInfo.subject == _item.subject) ? "border-[#FF6035] text-[#FF6035]" : "border-gary3 textGray4"}`}
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

                    {/* 한나님과 같이 작업 */}
                    {/* 기간 */}
                    <div className='mb-8'>
                        <span className="textGray2 text-sm font-medium">기간</span>
                        <div className='mt-3 flex'>
                            <DatePicker
                                locale={ko}
                                selected={registInfo.startDate}
                                dateFormat='yyyy년 MM월 dd일'
                                className='mr-6 border border-gary3 rounded-md text-sm textGray2 text-center py-2 flex items-center justify-center'
                                onChange={(date) => setRegistInfo({ ...registInfo, startDate: date })}
                            />
                            <DatePicker
                                locale={ko}
                                selected={registInfo.endDate}
                                dateFormat='yyyy년 MM월 dd일'
                                className='mr-6 border border-gary3 rounded-md text-sm textGray2 text-center py-2 flex items-center justify-center'
                                onChange={(date) => setRegistInfo({ ...registInfo, endDate: date })}
                            />
                        </div>
                    </div>

                    {/* 한나님과 같이 작업 */}
                    {/* 시간 */}
                    <div className='mb-8 flex flex-col'>
                        <span className="textGray2 text-sm font-medium">시간
                            <span className='textGray4'> (선택)</span>
                        </span>
                        <div className='flex space-x-1.5 mt-3'>
                            <GlobalStyles
                                styles={{
                                    '.rc-time-picker-input': {
                                        padding: '8',
                                        textAlign: 'center',
                                        color: 'black',
                                        fontSize: '14px',
                                        border: 'solid 1px #bdbdbd',
                                        borderRadius: '6px',
                                        width: '130px',
                                        height: '32px'
                                    }
                                }}
                            />
                            <TimePicker
                                value={registInfo.startTime}
                                format={"A hh시mm분"}
                                onChange={(val) => {
                                    let _startTime = val;
                                    if (registInfo.endTime != null && _startTime > registInfo.endTime) _startTime = registInfo.endTime;
                                    setRegistInfo({ ...registInfo, startTime: _startTime })
                                }}
                                showSecond={false}
                                allowEmpty
                            />
                            <div className='flex items-center justify-center'>
                                <svg className="w-3 h-2 textGray4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <TimePicker
                                value={registInfo.endTime}
                                format={"A hh시mm분"}
                                onChange={(val) => {
                                    let _endTime = val;
                                    if (registInfo.startTime != null && _endTime < registInfo.startTime) _endTime = registInfo.startTime;
                                    setRegistInfo({ ...registInfo, endTime: _endTime })
                                }}
                                showSecond={false}
                                allowEmpty
                            />
                        </div>
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
            : <CircleLoading />
        }
    </>)
}

Regist.getInitialProps = async (ctx) => {
    return {
        query: ctx.query
    }
}
