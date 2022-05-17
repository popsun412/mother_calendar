import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Toast from '../common/toast';

const CategoryPlan = (props) => {

    const [visible, setVisible] = React.useState(false);
    const [ToastStatus, setToastStatus] = useState(false);
    const [data, setData] = useState([]);

    const onClick = () => {
        setVisible(true);
    }

    const handleToast = (type) => {
        if (!ToastStatus) {
            setToastStatus(true);
        }
    }

    useEffect(() => {
        if (ToastStatus) {
            setTimeout(() => {
                setToastStatus(false);
            }, 1000);
        }
    }, [ToastStatus]);

    useEffect(() => {
        const getData = async(param) => {
            const res = await axios('http://localhost:4000/', {
                method: 'GET',
                params: {
                    category: param
                }
            })

            res.data ? setData() : null;
        }

        getData(props.category);
    }, [props.category])

    return (
        <div className='mx-5'>
            {ToastStatus && (
                <>
                <Toast msg={'보관함에 추가되었습니다.'} />
                </>
            )}
            <div className='mb-6'>
                <span className='py-1.5 px-3 bg5 text-sm text-white' style={{borderRadius: '13.5px'}}>1️⃣  단계 추천 계획</span>
                <div className='mt-3.5'>
                    <div className='py-5 px-4 rounded-2xl text-sm flex mb-4' style={{backgroundColor: '#f8f6f5'}}>
                        <img src='/images/category1.png' className='mr-4'/>
                        <div className='my-auto mx-0'>한글 떼기 워크북 풀기</div>
                        <a className='ml-auto' onClick={handleToast}>
                            <img src='/images/ic_check_circle.png' />
                        </a>
                        
                    </div>
                    <div className='py-5 px-4 rounded-2xl text-sm flex mb-4' style={{backgroundColor: '#f8f6f5'}}>
                        <img src='/images/category2.png' className='mr-4'/>
                        <div className='my-auto mx-0'>과학 전집 부록의 실험 해보기</div>
                        <a className='ml-auto' onClick={handleToast}>
                            <img src='/images/ic_add_circle.png' />
                        </a>
                    </div>
                    <div className='py-5 px-4 rounded-2xl text-sm flex mb-4' style={{backgroundColor: '#f8f6f5'}}>
                        <img src='/images/category3.png' className='mr-4'/>
                        <div className='my-auto mx-0'>미니카로 숫자 모양 1-10 만들기</div>
                        <a className='ml-auto' onClick={handleToast}>
                            <img src='/images/ic_add_circle.png' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='mb-6'>
                <span className='py-1.5 px-3 bg5 text-sm text-white' style={{borderRadius: '13.5px'}}>2️⃣ 단계 추천 계획</span>
                <div className='mt-3.5'>
                    <div className='py-5 px-4 rounded-2xl text-sm flex mb-4' style={{backgroundColor: '#f8f6f5'}}>
                        <img src='/images/category7.png' className='mr-4'/>
                        <div className='my-auto mx-0'>엄마와 함께 피아노 연주하기</div>
                        <img src='/images/ic_check_circle.png' className='ml-auto'/>
                    </div>
                    <div className='py-5 px-4 rounded-2xl text-sm flex mb-4' style={{backgroundColor: '#f8f6f5'}}>
                        <img src='/images/category6.png' className='mr-4'/>
                        <div className='my-auto mx-0'>종이접기로 간단한 동물 만들기</div>
                        <a className='ml-auto' onClick={handleToast}>
                            <img src='/images/ic_add_circle.png' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='mb-6'>
                <span className='py-1.5 px-3 bg5 text-sm text-white' style={{borderRadius: '13.5px'}}>3️⃣ 단계 추천 계획</span>
                <div className='mt-3.5'>
                    <div className='py-5 px-4 rounded-2xl text-sm flex mb-4' style={{backgroundColor: '#f8f6f5'}}>
                        <img src='/images/category9.png' className='mr-4'/>
                        <div className='my-auto mx-0'>주방 놀이로 요리사 손님 변신하기</div>
                        <a className='ml-auto'>
                            <img src='/images/ic_add_circle.png' />
                        </a>
                    </div>
                    <div className='py-5 px-4 rounded-2xl text-sm flex mb-4' style={{backgroundColor: '#f8f6f5'}}>
                        <img src='/images/category2.png' className='mr-4'/>
                        <div className='my-auto mx-0'>A-Z까지 파닉스 워크북 풀기</div>
                        <a className='ml-auto'>
                            <img src='/images/ic_add_circle.png' />
                        </a>
                    </div>
                    <div className='py-5 px-4 rounded-2xl text-sm flex mb-4' style={{backgroundColor: '#f8f6f5'}}>
                        <img src='/images/category6.png' className='mr-4'/>
                        <div className='my-auto mx-0'>종이접기로 간단한 동물 만들기</div>
                        <a className='ml-auto'>
                            <img src='/images/ic_add_circle.png' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryPlan;
