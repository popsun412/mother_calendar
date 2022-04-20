import React, { useState } from 'react';
import ParentsInfo from '../../components/myinfo/myinfo_parents';
import ChildrenInfo from '../../components/myinfo/myinfo_children';

const MyInfo = () => {

    const [activeIdx, setActiveIdx] = useState(0);

    const changeTab = (param) => {
        setActiveIdx(param);
    }

    const obj = {
        0: <ParentsInfo />,
        1: <ChildrenInfo />
    }

    return (
        <div>
            <header className='sticky top-0 left-0 right-0 visible opacity-100 bg-white z-100' style={{marginBottom: '-50px'}}>
                <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white' style={{height: '50px'}}>
                    <div className='flex-1 flex items-center'>
                        <div onClick={() => {window.history.back()}}>
                            <img src='/images/ic_back.png' />
                        </div>
                        <div className='my-0 mx-auto text-base' style={{letterSpacing: '-0.3px', fontSize: '15px'}}>내 정보 수정</div>
                    </div>
                </div>
            </header>
            <main style={{marginTop: '50px'}}>
                <div className='grid grid-cols-2 items-center text-center textGray3 h-10 border-b border-solid border-gray4' style={{fontSize: '13.4px'}}>
                    <div className={`h-10 leading-10 ${activeIdx === 0 ? 'textGray1 border-b-3 border-solid border-gary1' : ''}`} onClick={() => changeTab(0)}>부모 정보</div>
                    <div className={`h-10 leading-10 ${activeIdx === 1 ? 'textGray1 border-b-3 border-solid border-gary1' : ''}`} onClick={() => changeTab(1)}>아이 정보</div>
                </div>
                <section>
                {
                    obj[activeIdx]
                }
                </section>
            </main>
        </div>
    )
}

export default MyInfo;