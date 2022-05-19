import React, { useEffect, useState } from 'react';
import Toast from '../common/toast';
import network from '../../util/network';
import Link from 'next/link';

const CategoryPlan = (props) => {

    const {type, category, setCategory} = props;
    const [visible, setVisible] = useState(false);
    const [ToastStatus, setToastStatus] = useState(false);
    const [data, setData] = useState([]);
    const [level, setLevel] = useState([]);

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
            const res = await network.post('/home/recommPlans', {
                params: {
                    subject: category == '전체' ? type : category
                }
            });

            res.data ? setData(res.data) : null;
            res.data ? getLevel(res.data) : null;
        }

        getData(props.category);
    }, [props.category])

    const getLevel = (data) => {
        const arr = [];
        const result = [];

        data.map((item, idx) => {
            arr.push(item.level);
        })

        const set = new Set(arr);
        const level = [...set];

        for(let i=0; i<level.length; i++) {
            result.push({id: i, level: level[i]});
        }

        result ? setLevel(result) : null;
    }

    return (
        <div className='mx-5'>
            {ToastStatus && (
                <>
                <Toast msg={'보관함에 추가되었습니다.'} />
                </>
            )}
            {
                level.map((item, idx) => {
                    return (
                        <div className='mb-6' key={idx}>
                            <span className='py-1.5 px-3 bg5 text-sm text-white' style={{borderRadius: '13.5px'}}>{item.level} 단계 추천 계획</span>
                            <div className='mt-3.5'>
                                {
                                    data.map((item2, idx2) => {
                                        return (
                                            item.level == item2.level ?
                                                <Link href={{
                                                    pathname: '/plandetail',
                                                    query: {
                                                        planUid: item2.commonPlanUid
                                                    }
                                                }}>
                                                    <div className='py-5 px-4 rounded-2xl text-sm flex mb-4' style={{backgroundColor: '#f8f6f5'}}>
                                                        <img src='/images/category1.png' className='mr-4'/>
                                                        <div className='my-auto mx-0'>{item2.name}</div>
                                                        <a className='ml-auto' onClick={handleToast}>
                                                            <img src='/images/ic_check_circle.png' />
                                                        </a>
                                                    </div>
                                                </Link>: ''
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoryPlan;
