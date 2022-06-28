/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useState } from "react"

export default function UseGuide() {
    const [activeTab, setActiveTab] = useState(0);

    return <div className="w-full h-screen overflow-y-auto scrollbar-hide">
        <div className="fixed w-max-500 bg-white top-0 flex items-center w-full px-4" style={{ height: 50 }}>
            <img src='/images/ic_back.png' className="w-10 relative -left-4" onClick={() => { window.history.back() }} />
            <span className="mx-12 absolute left-0 right-0 text-center text-base font-medium">이용 안내</span>
        </div>
        <div className="w-full flex flex-col" alt="서비스 소개" style={{ marginTop: 50 }}>
            <div className='grid grid-cols-3 text-center text-sm textGray4 border-b border-solid border-gray3'>
                <div className={`font-semibold ${activeTab === 0 ? 'textBlue4 border-b-3 border-solid border-blue4' : ''}`}
                    style={{ lineHeight: '40px' }} onClick={() => { setActiveTab(0) }}>계획등록</div>
                <div className={`font-semibold ${activeTab === 1 ? 'textBlue4 border-b-3 border-solid border-blue4' : ''}`}
                    style={{ lineHeight: '40px' }} onClick={() => { setActiveTab(1) }}>실행인증</div>
                <div className={`font-semibold ${activeTab === 2 ? 'textBlue4 border-b-3 border-solid border-blue4' : ''}`}
                    style={{ lineHeight: '40px' }} onClick={() => { setActiveTab(2) }}>아이템관리</div>
            </div>
            {activeTab == 0 ? <img className="w-full" src="/images/guide/useguide1.png" alt="이용 안내1" /> : <></>}
            {activeTab == 1 ? <img className="w-full" src="/images/guide/useguide2.png" alt="이용 안내2" /> : <></>}
            {activeTab == 2 ? <img className="w-full" src="/images/guide/useguide3.png" alt="이용 안내3" /> : <></>}
        </div>
    </div>
}