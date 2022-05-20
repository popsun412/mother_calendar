import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ToggleSwitch from '../components/common/toggle';
import GlobalStyles from '@mui/material/GlobalStyles';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

import network from '../util/network';
import JointPlanHeader from '../components/jointplan/jointplan_header';

const JointPlan = () => {

    const router = useRouter();
    const planUid = router.query.planUid;

    const [data, setData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [active, setActive] = useState(false);
    const [activeField, setActiveField] = useState(0);
    const [activeDay, setActiveDay] = useState({ 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false });

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();

    useEffect(() => {
        const getData = async() => {
            const res = await network.get('/plan/commonPlan/' + planUid);
            res.data ? setData(res.data) : null;
        }
        // getData();
    }, [])

    const handleDay = (e) => {
        setActiveDay({...activeDay, [e.target.value]: e.target.checked});
    }

    const handleField = (param) => {
        setActiveField(param);
    }

    const onChange = (target) => {
        setActiveIndex(target.value);
        setActive(target.checked);
    }

    return (
        <div>
            <JointPlanHeader data={data}/>
            <main className='mt-16'>
                <section className='mx-8 pt-4'>
                    <div className='bg-gray2 text-center text-sm py-4' style={{borderRadius: '10px'}}>영어 원서 읽기</div>
                </section>
                <section className='mt-6 mx-6'>
                    <div className='text-sm textGray2'>분야</div>
                    <div className='my-6'>
                        <div className='flex mb-3 justify-between'>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField === 1 ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField(1)}>
                                <img src='/images/category1.png' className={`${activeField === 1 ? 'grayscale-0' : 'grayscale'}`} style={{height: '20px'}}/>
                                <span className='my-auto ml-1'>국어</span>
                            </div>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField === 2 ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField(2)}>
                                <img src='/images/category2.png' className={`${activeField === 2 ? 'grayscale-0' : 'grayscale'}`} style={{height: '20px'}}/>
                                <span className='my-auto ml-1'>영어</span>
                            </div>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField === 3 ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField(3)}>
                                <img src='/images/category3.png' className={`${activeField === 3 ? 'grayscale-0' : 'grayscale'}`} style={{height: '20px'}}/>
                                <span className='my-auto ml-1'>수학</span>
                            </div>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField === 4 ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField(4)}>
                                <img src='/images/category4.png' className={`${activeField === 4 ? 'grayscale-0' : 'grayscale'}`} style={{height: '20px'}}/>
                                <span className='my-auto ml-1'>과학</span>
                            </div>
                        </div>
                        <div className='flex mb-3 justify-between'>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField === 5 ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField(5)}>
                                <img src='/images/category5.png' className={`${activeField === 5 ? 'grayscale-0' : 'grayscale'}`} style={{height: '20px'}}/>
                                <span className='my-auto ml-1'>사회</span>
                            </div>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField === 6 ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField(6)}>
                                <img src='/images/category6.png' className={`${activeField === 6 ? 'grayscale-0' : 'grayscale'}`} style={{height: '20px'}}/>
                                <span className='my-auto ml-1'>미술</span>
                            </div>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField === 7 ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField(7)}>
                                <img src='/images/category7.png' className={`${activeField === 7 ? 'grayscale-0' : 'grayscale'}`} style={{height: '20px'}}/>
                                <span className='my-auto ml-1'>음악</span>
                            </div>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField === 8 ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField(8)}>
                                <img src='/images/category8.png' className={`${activeField === 8 ? 'grayscale-0' : 'grayscale'}`} style={{height: '20px'}}/>
                                <span className='my-auto ml-1'>체육</span>
                            </div>
                        </div>
                        <div className='flex mb-3 justify-between'>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField === 9 ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField(9)}>
                                <img src='/images/category9.png' className={`${activeField === 9 ? 'grayscale-0' : 'grayscale'}`} style={{height: '20px'}}/>
                                <span className='my-auto ml-1'>놀이</span>
                            </div>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField === 10 ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField(10)}>
                                <img src='/images/category10.png' className={`${activeField === 10 ? 'grayscale-0' : 'grayscale'}`} style={{height: '20px'}}/>
                                <span className='my-auto ml-1'>체험</span>
                            </div>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField === 11 ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField(11)}>
                                <img src='/images/category11.png' className={`${activeField === 11 ? 'grayscale-0' : 'grayscale'}`} style={{height: '20px'}}/>
                                <span className='my-auto ml-1'>기타</span>
                            </div>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField === 12 ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField(12)}>
                                <img src='/images/category12.png' className={`${activeField === 12 ? 'grayscale-0' : 'grayscale'}`} style={{height: '20px'}}/>
                                <span className='my-auto ml-1'>부모</span>
                            </div>
                        </div>
                    </div>
                    <div className='text-center text-xs textGray4'>
                        공동 계획은 계획명과 분야를 수정할 수 없습니다.
                    </div>
                </section>
                <section className='mt-8 mx-6'>
                    <div className='flex text-sm textGray2'>
                        <div className='flex-1'>반복 요일</div>
                        <ToggleSwitch label='day'/>
                    </div>
                    <div className='flex text-sm mt-4'>
                        <div className={`flex items-center justify-center my-0 mx-auto ${activeDay[1]? 'bg5' : 'border border-solid border-gray3'}`} style={{width: '36px', height: '36px', borderRadius: '18px'}}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='1' className='box-border p-0' onChange={handleDay}/>
                            </span>
                            <span className={`p-0 text-sm inline-block ${activeDay[1]? 'text-white': 'textGray4'}`}>월</span>
                        </div>
                        <div className={`flex items-center justify-center my-0 mx-auto ${activeDay[2]?  'bg5' : 'border border-solid border-gray3'}`} style={{width: '36px', height: '36px', borderRadius: '18px'}}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='2' className='box-border p-0'onChange={handleDay}/>
                            </span>
                            <span className={`p-0 text-sm inline-block ${activeDay[2]?  'text-white': 'textGray4'}`}>화</span>
                        </div>
                        <div className={`flex items-center justify-center my-0 mx-auto ${activeDay[3]? 'bg5' : 'border border-solid border-gray3'}`} style={{width: '36px', height: '36px', borderRadius: '18px'}}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='3' className='box-border p-0' onChange={handleDay}/>
                            </span>
                            <span className={`p-0 text-sm inline-block ${activeDay[3]? 'text-white': 'textGray4'}`}>수</span>
                        </div>
                        <div className={`flex items-center justify-center my-0 mx-auto ${activeDay[4]?  'bg5' : 'border border-solid border-gray3'}`} style={{width: '36px', height: '36px', borderRadius: '18px'}}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='4' className='box-border p-0' onChange={handleDay}/>
                            </span>
                            <span className={`p-0 text-sm inline-block ${activeDay[4]?  'text-white': 'textGray4'}`}>목</span>
                        </div>
                        <div className={`flex items-center justify-center my-0 mx-auto ${activeDay[5]? 'bg5' : 'border border-solid border-gray3'}`} style={{width: '36px', height: '36px', borderRadius: '18px'}}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='5' className='box-border p-0' onChange={handleDay}/>
                            </span>
                            <span className={`p-0 text-sm inline-block ${activeDay[5]? 'text-white': 'textGray4'}`}>금</span>
                        </div>
                        <div className={`flex items-center justify-center my-0 mx-auto ${activeDay[6]? 'bg5' : 'border border-solid border-gray3'}`} style={{width: '36px', height: '36px', borderRadius: '18px'}}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='6' className='box-border p-0' onChange={handleDay}/>
                            </span>
                            <span className={`p-0 text-sm inline-block ${activeDay[6]? 'text-white': 'textGray4'}`}>토</span>
                        </div>
                        <div className={`flex items-center justify-center my-0 mx-auto ${activeDay[7]? 'bg5' : 'border border-solid border-gray3'}`} style={{width: '36px', height: '36px', borderRadius: '18px'}}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='7' className='box-border p-0' onChange={handleDay}/>
                            </span>
                            <span className={`p-0 text-sm inline-block ${activeDay[7]? 'text-white': 'textGray4'}`}>일</span>
                        </div>
                    </div>
                </section>
                <section className='mt-8 mx-6'>
                    <div className='text-sm textGray2'>기간 <span className='textGray4'>(선택)</span></div>
                    <div className='mt-3 flex'>
                        <GlobalStyles 
                            styles={{
                                'input': {
                                    padding: '7px 8px',
                                    textAlign: 'center',
                                    fontSize: '14px',
                                    border: 'solid 1px #bdbdbd',
                                    borderRadius: '6px',
                                    width: '145px',
                                    height: '32px'
                                }
                            }}
                        />
                        <DatePicker selected={startDate} dateFormat='yyyy년 MM월 dd일' onChange={(date) => setStartDate(date)} className='mr-6'/>
                        <DatePicker selected={endDate} dateFormat='yyyy년 MM월 dd일' onChange={(date) => setEndDate(date)}/>
                    </div>
                </section>
                <section className='mt-8 mx-6'>
                    <div className='text-sm textGray2'>시간 <span className='textGray4'>(선택)</span></div>
                    <div className='mt-3'>
                        <select className='mr-6 p-1.5 text-sm border border-solid border-gray3 rounded-md'>
                            <option>오후 2시</option>
                        </select>
                        <select className='text-sm p-1.5 border border-solid border-gray3 rounded-md'>
                            <option>오후 2시</option>
                        </select>
                    </div>
                </section>
                <section className='my-8 mx-6'>
                    <div className='flex text-sm textGray2'>
                        <div className='flex-1'>
                            <span>알림 <span className='textGray4'>(선택)</span></span>
                        </div>
                        <ToggleSwitch label='alarm'/>
                    </div>
                    <div className='mt-3'>
                        <div className='mb-2'>
                            <button className='p-2 flex border border-solid border-gray3 rounded-md text-sm'>
                                <img src='/images/bell.png' className='my-auto mx-0'/>
                                <span className='ml-1'>30분 전</span>
                            </button>
                        </div>
                        <div>
                            <button className='p-2 flex border border-solid border-gray3 rounded-md text-sm'>
                                <img src='/images/bell.png' className='my-auto mx-0'/>
                                <span className='ml-1'>정시</span>
                            </button>
                        </div>
                    </div>
                    <div className='mt-4 text-sm textGray3'>다른 알림 추가</div>
                </section>
            </main>
        </div>
    )
}

export default JointPlan;