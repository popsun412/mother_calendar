/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import network from '../util/network';
import { useRouter } from 'next/router';

import PlanHeader from '../components/plandetail/plan_header';
import PlanItem from '../components/plandetail/plan_item';
import PlanRecommend from '../components/plandetail/plan_recommend';
import PlanDesc from '../components/plandetail/plan_desc';
import PlanWeek from '../components/plandetail/plan_week';
import PlanTab from '../components/plandetail/plan_tab';
import PlanMain from '../components/plandetail/plan_main';

const Plan2 = () => {

    const router = useRouter();
    const planUid = router.query.planUid;
    const field = router.query.field;
    const subject = router.query.subject;
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
            const res = await network.post('/plan/'+planUid)
            res.data ? setData(res.data) : null;
        }
        getData();
    }, []);

    return (
        <>
            <PlanHeader />
            <main>
                <PlanMain data={data}/>
                <PlanRecommend data={data}/>
                <PlanDesc data={data}/>
                <PlanWeek data={data}/>
                <PlanItem subject={subject} field={field}/>
                <PlanTab data={data}/>
            </main>
            <aside className='fixed bottom-0 left-0 right-0 z-100'>
                <div className='relative mx-auto my-0 bg-white'>
                    <Link
                        href={{
                            pathname: '/jointplan',
                            query: {
                                planUid: planUid
                            }
                    }}>
                        <nav className='flex items-center box-border relative' style={{ height: '90px' }}>
                            <span className='text-sm text-white text-center p-4 m-5 w-full rounded-md bg5'
                                style={{ letterSpacing: '-0.28px' }}>캘린더에 등록하기</span>
                        </nav>
                    </Link>
                </div>
            </aside>
        </>
    )
}

export default Plan2;