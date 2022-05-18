/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import network from '../util/network';

import PlanHeader from '../components/plandetail/plan_header';
import PlanItem from '../components/plandetail/plan_item';
import PlanCondition from '../components/plandetail/plan_condition';
import PlanConfirm from '../components/plandetail/plan_confirm';
import PlanRecommend from '../components/plandetail/plan_recommend';
import PlanDesc from '../components/plandetail/plan_desc';
import PlanWeek from '../components/plandetail/plan_week';

const Plan2 = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [data, setData] = useState([
        {
            planUid: 1,
            createUserUid: 1,
            name: '영어 원서읽기',
            description: '아이가 궁금해할만한 과학적/자연현상에 대해 귀여운 그림체로 흥미롭게 설명해놓은 과학전집이에요! 📒'+
                '공룡은 어떻게 멸망했는지, 우리의 음식은 어떤 과정을 통해 소화가 되는지 등 초등학교 교과서와 연계되는 배경 지식을 기를 수 있고 맨 뒤페이지에 나오는 간단한 과학실험도 따라해볼만 해요. 🥽🥼'+
                '저는 공룡덕후인 아들에게 어떻게 공룡이 멸망했는지에 설명해주기 힘들어서 구매했는데 다른 권들도 아이가 궁금해할만한 주제로 이루어져 있어서 좋았어요.'+
                '다만 추피처럼 서양 기준 캐릭터와 문화가 녹아있어 낯설 수 있고, 음원이나 리딩펜이 없어 엄마 목이 좀 아플 수 있지요. 😂',
            subject: '영어',
            field: '영어',
            level: 1,
            repeatDay: [1, 3],
            startDate: '2022-10-21',
            endDate: '2022-11-21',
            startTime: '1900',
            endTime: '2130',
        }
    ])

    useEffect(() => {
        const getData = async() => {
            const res = await network.post('')
            res.data ? setData(res.data) : null;
        }
        getData();
    }, [])

    const tabClick = (index) => {
        setActiveTab(index);
    }

    const obj = {
        0: <PlanConfirm data={data}/>,
        1: <PlanCondition data={data}/>
    }

    const clickCalendar = () => {
        alert('등록!');
    }

    return (
        <>
            <PlanHeader />
            <main>
                <section className='mb-6'>
                    <div className='block relative'>
                        <img src='/images/banner.png' />
                        <span className='block absolute text-white font-bold bottom-0 left-0 text-lg mb-12 ml-5'
                            style={{ letterSpacing: '-0.54px', fontFamily: 'NanumSquareRoundOTF' }}>영어 원서읽기</span>
                        <div className='block absolute bottom-0 left-0 mb-6 ml-5 mt-1 text-xs'>
                            <span className='mr-2 py-1 px-1.5 rounded textOrange1' style={{ letterSpacing: '-0.12px', backgroundColor: 'rgba(219, 239, 253, 0.2)' }}>영어</span>
                            <span className='py-1 px-1.5 rounded textOrange1' style={{ letterSpacing: '-0.12px', backgroundColor: 'rgba(219, 239, 253, 0.2)' }}>영어</span>
                        </div>
                        <div className='block absolute bottom-0 right-0'>
                            <div className='mr-5 mb-1'>
                                <img src='/images/ic_add_circle.png' className='mx-auto' />
                                <div className='mb-5 text-xs text-white text-center mx-auto'>135</div>
                            </div>
                        </div>
                    </div>
                </section>
                <PlanRecommend data={data}/>
                <PlanDesc data={data}/>
                <PlanWeek data={data}/>
                <PlanItem data={data}/>
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
            </main>
            <aside className='fixed bottom-0 left-0 right-0 z-100'>
                <div className='relative mx-auto my-0 bg-white'>
                    <nav className='flex items-center box-border relative' style={{ height: '90px' }}>
                        <span className='text-sm text-white text-center p-4 m-5 w-full rounded-md bg5'
                            style={{ letterSpacing: '-0.28px' }} onClick={clickCalendar}>캘린더에 등록하기</span>
                    </nav>
                </div>
            </aside>
        </>
    )
}

export default Plan2;