import { useState } from 'react';


export default function PlanRegistartion() {
    const [darkMode, setDarkMode] = useState(false);
    const [alarmMode, setAlarmMode] = useState(false);

    return (
        <>
            <div className="flex  py-4 items-center justify-center">
                <svg class="w-7 h-8 ml-1 textGray2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span className="flex-auto text-center text-base font-medium textGray1">계획 등록</span>
                <span className={`${darkMode && "dark"} pr-4 text-base font-medium textGray4 textOrange5`} value="false">완료</span>
            </div>
            <div className="px-5 h-screen">
                <div className="text-sm font-medium textGray4 bg-gray2 rounded-xl py-5 flex items-center justify-center mt-4">계획명을 입력해주세요.</div>
                {/* 분야 */}
                <div className="mt-7  mb-8">
                    <span className="textGray2 text-sm font-medium">분야</span>
                    <div className="grid grid-cols-4 gap-3 mt-6">
                        <div className="flex px-3 py-2 border rounded border-gary3 items-center justify-center hover:border-[#FF6035]">
                            <img src="/images/category1_off.png" className='w-4 h-4' />
                            <span className="textGray4 text-sm font-medium ml-1 hover:text-[#FF6035]">체험</span>
                        </div>
                    </div>
                </div>
                {/* 반복요일 */}
                <div className='mb-8'>
                    <div className='relative'>
                        <span className='mb-4 text-sm font-medium textGray2'>반복요일</span>
                        <div className={`${darkMode && "dark"} mt-4`}>
                            <label className="absolute top-0 right-0 w-12 h-7 bg-[red] rounded-3xl">
                                <input type="checkbox" onClick={() => setDarkMode(!darkMode)}
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

                            <div className="dark:hidden flex space-x-2">
                                <div className='px-3 py-2 rounded-full bg5 text-white text-xs'>월</div>
                                <div className='px-3 py-2 rounded-full border border-gray3 textGray4 text-xs'>화</div>
                                <div className='px-3 py-2 rounded-full bg5 text-white text-xs'>수</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 기간 */}
                <div className='mb-8'>
                    <span className="textGray2 text-sm font-medium">기간</span>
                    <div className='grid grid-cols-2 gap-6 mt-3'>
                        <div className='border border-gary3 rounded-md text-sm textGray2 text-center py-2 flex items-center justify-center'>
                            <span className='mr-1'>2022년 10월 21일</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        <div className='border border-gary3 rounded-md text-sm textGray2 text-center py-2 flex items-center justify-center'>
                            <span className='mr-1'>2022년 12월 31일</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                {/* 시간 */}
                <div className='mb-8 flex flex-col'>
                    <span className="textGray2 text-sm font-medium">시간
                        <span className='textGray4'> (선택)</span>
                    </span>
                    <div className='flex space-x-1.5 mt-3'>
                        <div className='border border-gary3 rounded-md text-sm textGray2 text-center p-2 flex items-center justify-center'>
                            <span className='mr-1'>오후 2시 30분</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        <div className='flex items-center justify-center'>
                            <svg class="w-3 h-2 textGray4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <div className='border border-gary3 rounded-md text-sm textGray2 text-center p-2 flex items-center justify-center'>
                            <span className='mr-1'>오후 2시 45분</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                </div>
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
        </>
    )
}