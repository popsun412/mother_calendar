import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Add } from '@material-ui/icons';

const children = [
    {
        id: 1,
        birth: '20130302',
        gender: 'male',
        img: '/images/child1.png'
    },
    {
        id: 2,
        birth: '20160202',
        gender: 'female',
        img: '/images/child2.png'
    }
]

const ChildrenInfo = () => {

    const [select, setSelect] = useState(1);
    const [gender, setGender] = useState(children[0].gender);
    const [age, setAge] = useState(0);
    const [birthday, setBirthday] = useState(children[0].birth);

    const changeTab = (param) => {
        setSelect(param+1);
        console.log(children[0]);
        const birth = parseInt(children[param].birth.substring(0,4));
        const year = parseInt(moment(new Date()).format('YYYY'));

        setAge(year - birth);
        setGender(children[param].gender);
        setBirthday(children[param].birth);
    }

    return (
        <div className=''>
            <div className='mt-9 mb-10 mx-5'>
                <div className='flex'>
                    {
                        children.map((item, idx) => {
                            return (
                                <div className='mr-3' key={idx} onClick={() => {changeTab(idx)}}>
                                    <img src={`/images/child${select === item.id ? '2.png' : '1.png'}`} style={{width: '37px', height: '37px'}}/>
                                    <div className={`mt-2.5 text-xs text-center ${select === item.id? 'textOrange5' : 'textGray4'}`}>
                                        {item.id === 1 ? '첫째아이' : item.id === 2 ? '둘째아이' : item.id === 3 ? '셋째아이' : item.id === 4 ? '넷째아이' : '다섯째아이'}
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='border-2 border-dotted border-color4 rounded-full text-center' style={{width: '37px', height: '37px'}}>
                        <Add className='textGray4 mt-1'/>
                    </div>
                </div>
            </div>
            <div className='mb-8 mx-5'>
                <div className='mb-4' style={{fontSize: '15px'}}>아이 생년월일</div>
                <div className='grid grid-cols-9 w-full gap-x-3 text-center text-base' style={{letterSpacing: '-0.32px'}}>
                    <div className='col-span-3 border border-solid rounded-md border-color4' style={{height: '44px', lineHeight: '44px'}}>{moment(birthday).format('YYYY')}년</div>
                    <div className='col-span-2 border border-solid rounded-md border-color4' style={{height: '44px', lineHeight: '44px'}}>{moment(birthday).format('M')}월</div>
                    <div className='col-span-2 border border-solid rounded-md border-color4' style={{height: '44px', lineHeight: '44px'}}>{moment(birthday).format('D')}일</div>
                    <div className='col-span-2' style={{height: '44px', lineHeight: '44px', color: '#FF734D'}}>{age}세</div>
                </div>
            </div>
            <div className='mb-8 mx-5'>
                <div className='mb-4' style={{fontSize: '15px'}}>아이 성별</div>
                <div className='grid grid-cols-2 w-full gap-x-3'>
                    <label className='relative'>
                        <input type='checkbox' value='female' className='absolute top-0 left-0 opacity-0 hidden' onChange={() => {}}/>
                        <span className={`border border-solid rounded-md text-base flex w-full box-border justify-center ${gender === 'female'? 'textOrange5 border-orange5' : 'textColor4 border-color4'}`} 
                            style={{height: '46px', lineHeight: '46px'}}>여아</span>
                    </label>
                    <label className='relative'>
                        <input type='checkbox' value='male' className='absolute top-0 left-0 opacity-0 hidden' onChange={() => {}}/>
                        <span className={`border border-solid rounded-md text-base flex w-full box-border justify-center ${gender === 'male'? 'textOrange5 border-orange5' : 'textColor4 border-color4'}`} 
                            style={{height: '46px', lineHeight: '46px'}}>남아</span>
                    </label>
                </div>
            </div>
            <div className='mt-14 mb-9 absolute bottom-0 flex flex-1 w-full'>
                <button className='w-full h-12 text-center bg-gray3 rounded-md text-white mx-5' disabled={true}>완료</button>
            </div>
        </div>
    )
}

export default ChildrenInfo;