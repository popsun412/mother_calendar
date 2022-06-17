/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Toast from '../common/toast';
import network from '../../util/network';
import Link from 'next/link';
import { getSubjectImage } from "../../util/helper";
import { useRouter } from "next/router";


const CategoryPlan = (props) => {
    const router = useRouter();

    const { type, category, setCategory } = props;
    const [visible, setVisible] = useState(false);
    const [ToastStatus, setToastStatus] = useState(false);
    const [data, setData] = useState([]);
    const [level, setLevel] = useState([1, 2, 3]);

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

    const getData = async (param) => {
        const res = await network.post('/home/recommPlans', {
            subject: category == '전체' ? "" : category
        });

        res.data ? setData(res.data) : null;
    }

    useEffect(() => {
        getData(props.category);
    }, [props.category])

    return (
        <div className='mx-5'>
            {ToastStatus && (
                <>
                    <Toast msg={'보관함에 등록되었습니다.'} />
                </>
            )}
            {
                level.map((_level) => {
                    return (
                        <div className='mb-6' key={_level}>
                            <span
                                className='py-1.5 px-3 bg5 text-sm text-white flex items-center max-w-fit'
                                style={{ borderRadius: '13.5px' }}
                            >
                                {<img src={`/images/level${_level}.png`} className="w-4 mr-1" />} 단계 추천 계획
                            </span>
                            <div className='mt-3.5'>
                                {
                                    data.map((_item, _index) => {
                                        return (
                                            _item.level == _level
                                                ? <Link
                                                    href={{ pathname: '/plandetail', query: { commonPlanUid: _item.commonPlanUid } }}
                                                    key={_index}
                                                    passHref
                                                >
                                                    <div className='py-5 px-4 rounded-2xl text-sm flex items-center mb-4' style={{ backgroundColor: '#f8f6f5' }}>

                                                        <div className='flex flex-auto'>
                                                            <img src={`${getSubjectImage(_item.subject)}`} className='mr-4 w-6 h-6' />
                                                            <div className='my-auto mx-0'>{_item.name}</div>
                                                        </div>
                                                        <img className="w-6" src={`${_item.bookmark ? "/images/vector.png" : "/images/ic_check_circle.png"}`} onClick={(e) => {
                                                            e.preventDefault();
                                                            router.push(`/plan/regist?commonPlanUid=${_item.commonPlanUid}`);
                                                        }} />
                                                    </div>
                                                </Link>
                                                : <></>
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
