import { useState } from 'react';
//import PlanTitle from '../calendar/plan_title';

export default function PlanExperience() {
    const [darkMode, setDarkMode] = useState(false);
    const [alarmMode, setAlarmMode] = useState(false);

    return (
        <>
            <div className="flex  py-4 items-center justify-center">
                <svg class="w-7 h-8 ml-1 textGray2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span className="flex-auto text-center text-base font-medium textGray1">체험장소 등록</span>
                <span className={`${darkMode && "dark"} pr-4 text-base font-medium textGray4 textOrange5`} value="false">완료</span>
            </div>
            <div className='px-5 mb-9'>
                <div className='flex items-center justify-center my-5'>
                    <div className='w-[7.5rem] h-[7.5rem] bg-gray2 rounded-md flex items-center justify-center'>
                        <img src='/images/camera.png' className='w-9 h-9' />
                    </div>
                </div>
                <div className='text-sm font-medium textGray4 border rounded-md border-color4 px-5 py-3'>체험장소 이름을 입력해주세요</div>
            </div>
            <div className='flex flex-col space-y-6 px-5 h-screen'>
                <div className=''>
                    <span className='text-sm font-medium textGray2'>상태</span>
                    <div className='mt-3 h-11 flex items-center justify-center border border-color4 rounded-md text-sm font-medium textGray2 relative'>
                        <div className='rounded-md flex items-center justify-center hover:border hover:text-[#ff6035] border-orange5 absolute -top-[1px] -bottom-[1px] -left-[1px] w-1/2'>방문예정</div>
                        <div className='rounded-md flex items-center justify-center hover:border hover:text-[#ff6035] border-orange5 absolute -top-[1px] -bottom-[1px] -right-[1px] w-1/2'>방문완료</div>
                    </div>
                </div>

                <div className=''>
                    <span className='text-sm font-medium textGray2 mb-4.5'>영역</span>
                    <div className='mt-3 flex space-x-3 mb-2'>
                        <span className='border border-gary3 rounded-sm py-1.5 px-3 text-sm font-medium textGray4'>놀이터</span>
                        <span className='border border-gary3 rounded-sm py-1.5 px-3 text-sm font-medium textGray4'>놀이터</span>
                        <span className='border border-gary3 rounded-sm py-1.5 px-3 text-sm font-medium textGray4'>놀이터</span>
                        <span className='border border-gary3 rounded-sm py-1.5 px-3 text-sm font-medium textGray4'>놀이터</span>
                    </div>
                </div>

                <div className=''>
                    <span className='text-sm font-medium textGray2'>주소 <span className='textGray4'>(선택)</span></span>
                    <div className='mt-3 flex items-center justify-center border border-color4 rounded-md'>
                        <input type="text" placeholder="주소를 입력해주세요" className='px-5 py-3 flex-auto focus:outline-none' />
                        <svg class="w-6 h-6 m-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                </div>

                <div className=''>
                    <span className='text-sm font-medium textGray2'>방문시기 <span className='textGray4'>(선택)</span></span>
                    <div className='mt-3 flex'>
                        {/* <select className='border border-color4 rounded-md p-2'>
                            <option>2022년 10년</option>
                        </select> */}
                        <div className='border border-color4 rounded-md text-sm textGray2 text-center p-2 flex items-center justify-center'>
                            <span className='mr-1'>2022년 10월 21일</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <span className='text-sm font-medium textGray2'>만족도 <span className='textGray4'>(선택)</span></span>
                    <div className='mt-3 flex'>
                        <svg class="w-11 h-11 textGray5 hover:text-[#FF6035]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg class="w-11 h-11 textGray5 hover:text-[#FF6035]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg class="w-11 h-11 textGray5 hover:text-[#FF6035]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg class="w-11 h-11 textGray5 hover:text-[#FF6035]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg class="w-11 h-11 textGray5 hover:text-[#FF6035]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    </div>
                </div>
            </div>
        </>
    )
}