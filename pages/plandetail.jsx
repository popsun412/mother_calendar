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

    // 글로벌 상태관리
    const [userInfo, setUserInfo] = useRecoilState(userInfoState);
    const [load, setLoad] = useState(false);

    // 아이템 불러오기
    const getItem = async () => {
        console.log(userInfo);
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
    
    const planUid = router.query.planUid;
    const field = router.query.field;
    const subject = router.query.subject;
    const [data, setData] = useState(
        {
            "commonPlanUid": 3,
            "name": "그림책 읽기",
            "description": "√ 아이에게 매일매일 다양한 종류의 책을 읽어주는것은 엄마표 학습의 가장 기본이에요. 아이가 책에 관심이 없더라도 재미있는 토이북 혹은 좋아할만한 스토리를 가진 책을 시간을 정해 꾸준히 읽어주세요.  혹은 아이의 눈에 보이는 곳에 화려한 색채를 가진 그림책이나 아이가 좋아할만한 캐릭터(예: 뽀로로,공주님,공룡 등)가 나오는 그림책을 놓아만 두셔도 됩니다. 책을 좋아하는 아이라면 엄마에게 끊임없는 책을 가져와서 읽어달라고 할거에요. 집안일도 해야하고 밥도 해야하고 할 일이 산더미지만 하루에 30분만 오롯이 아이에게 시간을 내주세요.  √국어 그림책은 보통 2~3세 시점에 놀이북/토이북/플랩북 위주의 보드북으로 아이의 흥미를 이끈 다음 3~4세부터 국내창작/세계창작을 읽고 6세 이후 전래/명작을 읽히곤 합니다.  생활동화류는 나이에 상관없이 아이가 스스로 무언가를 해내야하는 시점부터(홀로 밥먹기, 배변가리기, 장난감 정리하기 등) 자연스럽게 노출해주면 좋아요.   1주차: 생활동화류 또는 국내 문화를 담고있는 창작 전집류 읽기(예: 우리아람이)   2주차: 유명 세계 창작 전집류 읽기(예: 토들피카소, 피리부는카멜레온) 3주차: 전래/명작 전집류 읽기(예: 마마파파, 요술항아리, 호야토야옛이야기) 4주차: 유명 단행본류 다양하게 읽기(예: 최숙희, 백희나, 안녕달 등)",
            "subject": "국어",
            "field": "대전집",
            "level": 1,
            "repeatDay": [
                1,
                2,
                3,
                4,
                5
            ],
            "startTime": "20:30:00",
            "endTime": "21:00:00",
            "category": "edu",
            "recommTerm": 12,
            "image": null,
            "isBanner": false
        }
    )

    useEffect(() => {
        const getData = async() => {
            const res = await network.post('/plan/commonPlan/'+planUid)
            res.data ? setData(res.data) : null;
        }
        getData();
    }, []);

    return (
        <>
            <PlanHeader name={data.name}/>
            <main>
                <PlanMain data={data}/>
                <PlanRecommend data={data}/>
                <PlanDesc data={data}/>
                <PlanWeek data={data}/>
                <PlanItem subject={subject} field={field}/>
                <PlanTab planUid={data.commonPlanUid}/>
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