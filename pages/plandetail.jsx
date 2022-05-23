/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import { useRecoilState } from "recoil";
import { userInfoState } from "../states/user_info";

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

    const auth = getAuth();
    const router = useRouter();

    const commonPlanUid = router.query.commonPlanUid;

    const [data, setData] = useState({});
    const [field, setField] = useState('');
    const [subject, setSubject] = useState('');

    // 글로벌 상태관리
    const [userInfo, setUserInfo] = useRecoilState(userInfoState);
    const [load, setLoad] = useState(false);

    // 아이템 불러오기
    const getItem = async () => {
        setLoad(true);
    }

    // 유저 정보 갖고오기
    const getUser = async () => {
        const _result = await network.post('/userInfo');

        // data 통신
        if (_result.status == 200) {
            setUserInfo(_result.data);
        } else {
            router.push('/');
        }
    }

    useEffect(() => {
        if (userInfo == null) {
            auth.onAuthStateChanged(async (_user) => {
                if (_user) {
                    getUser();
                } else {
                    setUserInfo(null);
                    router.push('/');
                }
            });
        }

        if (userInfo != null && !load) getItem();
    })

    useEffect(() => {
        const getData = async() => {
            const res = await network.get('/plan/commonPlan/'+commonPlanUid)
            if (res.data) {
                setData(res.data);
                setField(res.data.field);
                setSubject(res.data.subject);
            }
            console.log(res.data);
        }
        getData();
    }, []);

    return (
        <>
            <PlanHeader name={data.name}/>
            <main>
                <PlanMain data={data}/>
                {/* <PlanRecommend planId={commonPlanUid}/> */}
                <PlanDesc data={data}/>
                {/* <PlanWeek data={data}/> */}
                <PlanItem subject={subject} field={field}/>
                <PlanTab commonPlanUid={commonPlanUid}/>
            </main>
            <aside className='fixed bottom-0 left-0 right-0 z-100'>
                <div className='relative mx-auto my-0 bg-white'>
                    <Link
                        href={{
                            pathname: '/plan/'+commonPlanUid,
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