import React, { useState, useEffect } from 'react';
import moment from 'moment';
import network from '../../util/network';
import { getAuth } from "firebase/auth";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../states/user_info";

const BookshelfSell = () => {

        const auth = getAuth();
    const [userInfo, setUserInfo] = useRecoilState(userInfoState);
    const [load, setLoad] = useState(false);
    const [data, setData] = useState([]);

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
        const getData = async () => {
            const res = await network.post('/locker/items', {
                params: {
                    limit: 20,
                    status: 2,
                    subject: '',
                    field: '',
                    lockerType: '책장',
                    region: ''
                }
            })
            res.data ? setData(res.data) : null;
        }
        getData();
    }, [])

    return (
        <div className='mt-5 mx-5'>
        {
            data.map((item, index) => {
                return (
                    <div className='flex opacity-30' key={index} style={{marginBottom: '22px'}}>
                        <div className='mr-4'>
                            <img src={item.image} className='rounded-md border border-solid border-color4' style={{width: '94px', height: '94px'}}/>
                        </div>
                        <div>
                            <div className='font-semibold' style={{fontSize: '15px', letterSpacing: '-0.3px'}}>{item.name}</div>
                            <div className='textGray3' style={{fontSize: '13px'}}>{moment(item.regDt).format('YYYY.MM.DD')} 구매</div>
                            <div></div>
                            <div>
                                <span className='px-1.5 text-xs textGray3 rounded mr-1.5' 
                                    style={{paddingTop: '3px', paddingBottom: '3px', backgroundColor: '#f0f5f8'}}>{item.subject}</span>
                                <span className='px-1.5 text-xs textGray3 rounded' 
                                    style={{paddingTop: '3px', paddingBottom: '3px', backgroundColor: '#f0f5f8'}}>{item.field}</span>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default BookshelfSell;