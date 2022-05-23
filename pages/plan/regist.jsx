/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import subjects from ".././../constants/subjects";
import Switch from 'react-ios-switch';
import network from "../../util/network";

// firebase
import { getAuth } from "firebase/auth";

// 글로벌 상태관리
import { useRecoilState } from "recoil";
import { userInfoState } from "../../states/user_info";

export default function Regist() {
    const auth = getAuth();
    const router = useRouter();

    // 유저 정보 갖고오기
    const getUser = async () => {
        const _result = await network.post('/userInfo');

        // data 통신
        if (_result.status == 200) {
        } else {
            router.push('/');
        }
    }

    const [registInfo, setRegistInfo] = useState(
        {
            name: "",
            subject: null,
            category: null,
            repeatDay: [],
            startDate: null,
            endDate: null,
            notification: [],
        }
    );

    const [checked, setChecked] = useState(false);
    const [alarmMode, setAlarmMode] = useState(false);

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
        registInfo.startDate = "2022-05-18";
        registInfo.endDate = "2022-05-25";
        registInfo.startTime = "10:00";
        registInfo.endTime = "12:00";

        const _result = await network.post('/plan', registInfo);

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
    })

    return (
        <div className="">
            <div className="flex  py-4 items-center justify-center">
                <svg className="w-7 h-8 ml-1 textGray2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                    <div className='grid grid-cols-2 gap-6 mt-3'>
                        <div className='border border-gary3 rounded-md text-sm textGray2 text-center py-2 flex items-center justify-center'>
                            <span className='mr-1'>2022년 10월 21일</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        <div className='border border-gary3 rounded-md text-sm textGray2 text-center py-2 flex items-center justify-center'>
                            <span className='mr-1'>2022년 12월 31일</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* 한나님과 같이 작업 */}
                {/* 시간 */}
                <div className='mb-8 flex flex-col'>
                    <span className="textGray2 text-sm font-medium">시간
                        <span className='textGray4'> (선택)</span>
                    </span>
                    <div className='flex space-x-1.5 mt-3'>
                        <div className='border border-gary3 rounded-md text-sm textGray2 text-center p-2 flex items-center justify-center'>
                            <span className='mr-1'>오후 2시 30분</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        <div className='flex items-center justify-center'>
                            <svg className="w-3 h-2 textGray4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <div className='border border-gary3 rounded-md text-sm textGray2 text-center p-2 flex items-center justify-center'>
                            <span className='mr-1'>오후 2시 45분</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* 우선 빈값 */}
                {/* 알림 */}
                <div className='mb-8'>
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
                </div>
            </div>
        </div>
    )
}