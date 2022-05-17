import { useState } from 'react';
import PlanTitle from '../calendar/plan_title';

export default function PlanCertify() {
    const [darkMode, setDarkMode] = useState(false);
    const [alarmMode, setAlarmMode] = useState(false);

    return (
        <>
            <div className="flex  py-4 items-center justify-center">
                <svg className="w-7 h-8 ml-1 textGray2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span className="flex-auto text-center text-base font-medium textGray1">실행 인증</span>
                <span className={`${darkMode && "dark"} pr-4 text-base font-medium textGray4 textOrange5`} value="false">완료</span>
            </div>
            <div className='px-5 relative h-screen'>
                <div className="flex mt-4">
                    <PlanTitle />
                    <p className="textGray1 text-lg font-semibold">페파피그1 영상</p>
                </div>
                <div className="flex items-center justify-center border border-color4 rounded-md mt-6 py-3">
                    <svg className="w-4 h-5 textGray4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                    </svg>
                    <span className="text-sm font-medium textGray4">아이템 추가하기</span>
                </div>
                <div className='flex items-center justify-center mt-9'>
                    {/* 이미지가 없을 때*/}
                    {/* <div className='flex items-center justify-center bg-gray2 border-4 w-[11.25rem] h-[11.25rem]'>
                        <img src='/images/camera.png' className='h-14 w-14 rounded-md' />
                    </div> */}

                    {/* 이미지가 있을 때 */}
                    <div className='relative flex items-center justify-center flex-col'>
                        <div className='rounded-md w-[11.25rem] h-[11.25rem]'>
                            <img src='/images/banner.png' className='w-full h-full rounded-md' />
                            <svg className="w-7 h-7 absolute -top-3 -right-3 bg-gray4 rounded-full ring ring-white p-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </div>
                        <span className='text-xs font-normal textGray3 underline mt-3'>수정</span>
                    </div>
                </div>
                <span className='text-sm font-normal textGray4 flex items-center justify-center mt-[4.8rem]'>실행 리뷰를 입력해주세요.</span>
                <span className='absolute bottom-12 right-5 text-sm font-normal textGray3'>0/2000</span>
            </div>
        </>
    )
}