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
import moment from 'moment';

import PlanHeader from '../components/plandetail/plan_header';
import PlanItem from '../components/plandetail/plan_item';
// import PlanWeek from '../components/plandetail/plan_week';
import PlanTab from '../components/plandetail/plan_tab';

const Plan2 = () => {

    const auth = getAuth();
    const router = useRouter();

    const commonPlanUid = router.query.commonPlanUid;

    const [data, setData] = useState({});
    const [field, setField] = useState('');
    const [subject, setSubject] = useState('');
    const [num, setNum] = useState(0);

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
                setNum(res.data.repeatDay.length);
            }
        }
        getData();
    }, []);

    const getRepeatDay = (param) => {
        const result = [];
        let repDay = '';

        if (param) {
            for(let i=0; i<param.length; i++) {
                param[i] == 0 ? result.push('일요일') : param[i] == 1 ? result.push('월요일') : param[i] == 2 ? result.push('화요일') : 
                    param[i] == 3 ? result.push('수요일') : param[i] == 4 ? result.push('목요일') : param[i] == 5 ? result.push('금요일') : result.push('토요일')
            }
        }

        if (result.length > 1) {
            result.forEach(item => {
                repDay = repDay + item + ', ';
            })
            repDay = repDay.slice(0, -2);
        } else {
            repDay = result[0];
        }

        return repDay;
    }

    const getTime = (param) => {
        let result = '';

        if (param) {
            const time = param.substring(0, 2) + ':' + param.substring(2, 4);
            const arr = time.split(':');
    
            parseInt(arr[0]) > 11 ? result += ('오후 ' + parseInt(arr[0]-12) + '시') : result += ('오전 ' + arr[0] + '시');
            parseInt(arr[1]) > 0 ? result += (arr[1] + '분') : '';
        }

        return result;
    }

    return (
        <>
            <PlanHeader name={data.name}/>
            <main>
                <section className='mb-6'>
                    <div className='block relative'>
                        <img src='/images/banner.png' />
                        <span className='block absolute text-white font-bold bottom-0 left-0 text-lg mb-12 ml-5'
                            style={{ letterSpacing: '-0.54px', fontFamily: 'NanumSquareRoundOTF' }}>{data.name}</span>
                        <div className='block absolute bottom-0 left-0 mb-6 ml-5 mt-1 text-xs'>
                            <span className='mr-2 py-1 px-1.5 rounded textOrange1' style={{ letterSpacing: '-0.12px', backgroundColor: 'rgba(219, 239, 253, 0.2)' }}>{data.subject}</span>
                            <span className='py-1 px-1.5 rounded textOrange1' style={{ letterSpacing: '-0.12px', backgroundColor: 'rgba(219, 239, 253, 0.2)' }}>{data.field}</span>
                        </div>
                        <div className='block absolute bottom-0 right-0'>
                            <div className='mr-5 mb-1'>
                                <img src='/images/ic_add_circle.png' className='mx-auto' />
                                <div className='mb-5 text-xs text-white text-center mx-auto'>{data.recommTerm}</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='mb-8 mx-5'>
                    <div>
                        <h3 className='text-base font-semibold mb-3' style={{ letterSpacing: '-0.32px' }}>추천 루틴</h3>
                        <div className="bg-gray2 rounded-md px-5 py-3.5 mb-5">
                            <p className="textGray2 font-semibold text-base mb-3">주 {num}회  |  매주 {getRepeatDay(data.repeatDay)}</p>
                            <div className="textGray3 font-normal text-sm flex flex-col space-y-2.5">
                                <div className="flex flex-row">
                                    <img src="/images/calendar.png" alt="캘린더이미지" className="w-3.5 h-3.5 my-auto mx-0" />
                                    <span className='ml-1.5'>{moment(data.startDate).format('YYYY년 M월 D일')} - {moment(data.endDate).format('YYYY년 M월 D일')}</span>
                                </div>
                                <div className="flex flex-row">
                                    <img src="/images/clock.png" alt="시계이미지" className="w-3.5 h-3.5 my-auto mx-0" />
                                    <span className='ml-1.5'>{getTime(data.startTime)} - {getTime(data.endTime)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='mb-8 mx-5'>
                    <div>
                        <h3 className='text-base font-semibold mb-3' style={{ letterSpacing: '-0.32px' }}>어떤 계획인가요?</h3>
                        <div className='mt-4'>
                            <div className='text-sm textGray2' style={{ letterSpacing: '-0.28px' }}>
                                {data.description}
                            </div>
                        </div>
                    </div>
                </section>
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