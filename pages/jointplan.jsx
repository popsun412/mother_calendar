import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ToggleSwitch from '../components/common/toggle';
import GlobalStyles from '@mui/material/GlobalStyles';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css"
import 'rc-time-picker/assets/index.css';
import { ko } from "date-fns/locale";

import network from '../util/network';

const JointPlan = () => {

    const router = useRouter();
    const planUid = router.query.planUid;

    const [data, setData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [active, setActive] = useState(false);
    const [activeField, setActiveField] = useState('');
    const [activeDay, setActiveDay] = useState({ 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false });

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [startTime, setStartTime] = useState(moment());
    const [endTime, setEndTime] = useState(moment());

    useEffect(() => {
        const getData = async () => {
            const res = await network.get('/plan/commonPlan/' + planUid);
            res.data ? setData(res.data) : null;
            res.data ? setActiveField(res.data.subject) : null;
            console.log(activeField);
        }
        getData();
    }, [])

    const handleDay = (e) => {
        setActiveDay({ ...activeDay, [e.target.value]: e.target.checked });
    }

    const handleField = (param) => {
        data.subject ? setActiveField(data.subject) : setActiveField(param);
    }

    const onChange = (target) => {
        setActiveIndex(target.value);
        setActive(target.checked);
    }

    const activeDayArr = (activeDay) => {
        const arr = [];

        activeDay[1] ? arr.push(1) : null;
        activeDay[2] ? arr.push(2) : null;
        activeDay[3] ? arr.push(3) : null;
        activeDay[4] ? arr.push(4) : null;
        activeDay[5] ? arr.push(5) : null;
        activeDay[6] ? arr.push(6) : null;
        activeDay[7] ? arr.push(0) : null;

        return arr;
    }

    const goAddPlan = async () => {
        const res = await network.post('/plan/commonPlan', {
            params: {
                subject: activeField,
                field: '',
                repeatDay: activeDayArr(activeDay),
                startTime: moment(startTime).format('hhmm'),
                endTime: moment(endTime).format('hhmm')
            }
        })
    }

    return (
        <div className='w-full h-full overflow-y-auto scrollbar-hide'>
            <header className='sticky top-0 left-0 right-0 opacity-100 visible z-100' style={{ marginBottom: '-50px' }}>
                <div className='flex relative mx-auto my-0 box-border py-4 w-full bg-white' style={{ height: '50px' }}>
                    <div className='ml-5'>
                        <img src='/images/ic_back.png' onClick={() => { window.history.back() }} />
                    </div>
                    <div className='my-0 mx-auto'>
                        <span className='text-base font-medium'>{data.name}</span>
                    </div>
                    <div className='mr-4' onClick={goAddPlan}>
                        <span className='text-base textOrange5'>완료</span>
                    </div>
                </div>
            </header>
            <main className='mt-16'>
                <section className='mx-8 pt-4'>
                    <div className='bg-gray2 text-center text-sm py-4' style={{ borderRadius: '10px' }}>{data.name}</div>
                </section>
                <section className='mt-6 mx-6'>
                    <div className='text-sm textGray2'>분야</div>
                    <div className='my-6'>
                        <div className='flex mb-3 justify-between'>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField == '국어' ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField('국어')}>
                                <img src='/images/category1.png' className={`${activeField == '국어' ? 'grayscale-0' : 'grayscale'}`} style={{ height: '20px' }} />
                                <span className='my-auto ml-1'>국어</span>
                            </div>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField == '영어' ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField('영어')}>
                                <img src='/images/category2.png' className={`${activeField == '영어' ? 'grayscale-0' : 'grayscale'}`} style={{ height: '20px' }} />
                                <span className='my-auto ml-1'>영어</span>
                            </div>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField == '수학' ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField('수학')}>
                                <img src='/images/category3.png' className={`${activeField == '수학' ? 'grayscale-0' : 'grayscale'}`} style={{ height: '20px' }} />
                                <span className='my-auto ml-1'>수학</span>
                            </div>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField == '과학' ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField('과학')}>
                                <img src='/images/category4.png' className={`${activeField == '과학' ? 'grayscale-0' : 'grayscale'}`} style={{ height: '20px' }} />
                                <span className='my-auto ml-1'>과학</span>
                            </div>
                        </div>
                        <div className='flex mb-3 justify-between'>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField == '사회' ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField('사회')}>
                                <img src='/images/category5.png' className={`${activeField == '사회' ? 'grayscale-0' : 'grayscale'}`} style={{ height: '20px' }} />
                                <span className='my-auto ml-1'>사회</span>
                            </div>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField == '미술' ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField('미술')}>
                                <img src='/images/category6.png' className={`${activeField == '미술' ? 'grayscale-0' : 'grayscale'}`} style={{ height: '20px' }} />
                                <span className='my-auto ml-1'>미술</span>
                            </div>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField == '음악' ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField('음악')}>
                                <img src='/images/category7.png' className={`${activeField == '음악' ? 'grayscale-0' : 'grayscale'}`} style={{ height: '20px' }} />
                                <span className='my-auto ml-1'>음악</span>
                            </div>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField == '체육' ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField('체육')}>
                                <img src='/images/category8.png' className={`${activeField == '체육' ? 'grayscale-0' : 'grayscale'}`} style={{ height: '20px' }} />
                                <span className='my-auto ml-1'>체육</span>
                            </div>
                        </div>
                        <div className='flex mb-3 justify-between'>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField == '놀이' ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField('놀이')}>
                                <img src='/images/category9.png' className={`${activeField == '놀이' ? 'grayscale-0' : 'grayscale'}`} style={{ height: '20px' }} />
                                <span className='my-auto ml-1'>놀이</span>
                            </div>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField == '체험' ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField('체험')}>
                                <img src='/images/category10.png' className={`${activeField == '체험' ? 'grayscale-0' : 'grayscale'}`} style={{ height: '20px' }} />
                                <span className='my-auto ml-1'>체험</span>
                            </div>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField == '기타' ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField('기타')}>
                                <img src='/images/category11.png' className={`${activeField == '기타' ? 'grayscale-0' : 'grayscale'}`} style={{ height: '20px' }} />
                                <span className='my-auto ml-1'>기타</span>
                            </div>
                            <div className={`flex border border-solid rounded text-sm px-2.5 py-2 ${activeField == '부모' ? 'textOrange5 border-orange5' : 'textGray3 border-gray3'}`} onClick={() => handleField('부모')}>
                                <img src='/images/category12.png' className={`${activeField == '부모' ? 'grayscale-0' : 'grayscale'}`} style={{ height: '20px' }} />
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
                        <ToggleSwitch label='day' />
                    </div>
                    <div className='flex text-sm mt-4'>
                        <div className={`flex items-center justify-center my-0 mx-auto ${activeDay[1] ? 'bg5' : 'border border-solid border-gray3'}`} style={{ width: '36px', height: '36px', borderRadius: '18px' }}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='1' className='box-border p-0' onChange={handleDay} />
                            </span>
                            <span className={`p-0 text-sm inline-block ${activeDay[1] ? 'text-white' : 'textGray4'}`}>월</span>
                        </div>
                        <div className={`flex items-center justify-center my-0 mx-auto ${activeDay[2] ? 'bg5' : 'border border-solid border-gray3'}`} style={{ width: '36px', height: '36px', borderRadius: '18px' }}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='2' className='box-border p-0' onChange={handleDay} />
                            </span>
                            <span className={`p-0 text-sm inline-block ${activeDay[2] ? 'text-white' : 'textGray4'}`}>화</span>
                        </div>
                        <div className={`flex items-center justify-center my-0 mx-auto ${activeDay[3] ? 'bg5' : 'border border-solid border-gray3'}`} style={{ width: '36px', height: '36px', borderRadius: '18px' }}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='3' className='box-border p-0' onChange={handleDay} />
                            </span>
                            <span className={`p-0 text-sm inline-block ${activeDay[3] ? 'text-white' : 'textGray4'}`}>수</span>
                        </div>
                        <div className={`flex items-center justify-center my-0 mx-auto ${activeDay[4] ? 'bg5' : 'border border-solid border-gray3'}`} style={{ width: '36px', height: '36px', borderRadius: '18px' }}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='4' className='box-border p-0' onChange={handleDay} />
                            </span>
                            <span className={`p-0 text-sm inline-block ${activeDay[4] ? 'text-white' : 'textGray4'}`}>목</span>
                        </div>
                        <div className={`flex items-center justify-center my-0 mx-auto ${activeDay[5] ? 'bg5' : 'border border-solid border-gray3'}`} style={{ width: '36px', height: '36px', borderRadius: '18px' }}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='5' className='box-border p-0' onChange={handleDay} />
                            </span>
                            <span className={`p-0 text-sm inline-block ${activeDay[5] ? 'text-white' : 'textGray4'}`}>금</span>
                        </div>
                        <div className={`flex items-center justify-center my-0 mx-auto ${activeDay[6] ? 'bg5' : 'border border-solid border-gray3'}`} style={{ width: '36px', height: '36px', borderRadius: '18px' }}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='6' className='box-border p-0' onChange={handleDay} />
                            </span>
                            <span className={`p-0 text-sm inline-block ${activeDay[6] ? 'text-white' : 'textGray4'}`}>토</span>
                        </div>
                        <div className={`flex items-center justify-center my-0 mx-auto ${activeDay[7] ? 'bg5' : 'border border-solid border-gray3'}`} style={{ width: '36px', height: '36px', borderRadius: '18px' }}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='7' className='box-border p-0' onChange={handleDay} />
                            </span>
                            <span className={`p-0 text-sm inline-block ${activeDay[7] ? 'text-white' : 'textGray4'}`}>일</span>
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
                        <DatePicker locale={ko} selected={startDate} dateFormat='yyyy년 MM월 dd일' onChange={(date) => setStartDate(date)} className='mr-6' />
                        <DatePicker locale={ko} selected={endDate} dateFormat='yyyy년 MM월 dd일' onChange={(date) => setEndDate(date)} />
                    </div>
                </section>
                <section className='mt-8 mx-6'>
                    <div className='text-sm textGray2'>시간 <span className='textGray4'>(선택)</span></div>
                    <div className='mt-3 flex'>
                        <GlobalStyles
                            styles={{
                                '.rc-time-picker-input': {
                                    padding: '7px 8px',
                                    textAlign: 'center',
                                    color: 'black',
                                    fontSize: '14px',
                                    border: 'solid 1px #bdbdbd',
                                    borderRadius: '6px',
                                    width: '145px',
                                    height: '32px'
                                }
                            }}
                        />
                        <TimePicker
                            value={startTime}
                            onChange={(val) => setStartTime(val)}
                            showSecond={false}
                            allowEmpty
                            className='mr-6'
                        />
                        <TimePicker
                            value={endTime}
                            onChange={(val) => setEndTime(val)}
                            showSecond={false}
                            allowEmpty
                        />
                    </div>
                </section>
                <section className='my-8 mx-6'>
                    <div className='flex text-sm textGray2'>
                        <div className='flex-1'>
                            <span>알림 <span className='textGray4'>(선택)</span></span>
                        </div>
                        <ToggleSwitch label='alarm' />
                    </div>
                    <div className='mt-3'>
                        <div className='mb-2'>
                            <button className='p-2 flex border border-solid border-gray3 rounded-md text-sm'>
                                <img src='/images/bell.png' className='my-auto mx-0' />
                                <span className='ml-1'>30분 전</span>
                            </button>
                        </div>
                        <div>
                            <button className='p-2 flex border border-solid border-gray3 rounded-md text-sm'>
                                <img src='/images/bell.png' className='my-auto mx-0' />
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