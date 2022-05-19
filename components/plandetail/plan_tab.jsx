import React, { useState } from 'react';
import PlanCondition from './plan_condition';
import PlanConfirm from './plan_confirm';

const PlanTab = (props) => {

    const { data } = props;
    const [activeTab, setActiveTab] = useState(0);

    const tabClick = (index) => {
        setActiveTab(index);
    }

    const obj = {
        0: <PlanConfirm data={data}/>,
        1: <PlanCondition data={data}/>
    }

    return (
        <>
            <section className='mb-24'>
                <div>
                    <ul className='flex w-full border-b' style={{ height: '40px' }}>
                        <li className={`flex-1 my-0 mx-auto text-center ${activeTab === 0 ? 'textBlue4 border-blue4 border-b border-solid border-b-3' : ''}`} onClick={() => { tabClick(0) }}>실행 인증</li>
                        <li className={`flex-1 my-0 mx-auto text-center ${activeTab === 1 ? 'textBlue4 border-blue4 border-b border-solid border-b-3' : ''}`} onClick={() => { tabClick(1) }}>실행 현황</li>
                    </ul>
                </div>
                <div>
                    {
                        obj[activeTab]
                    }
                </div>
            </section>
        </>
    )
}

export default PlanTab;