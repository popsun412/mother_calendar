import React, { useEffect, useState } from 'react';
import PlaceHeader from '../components/place/place_header';

import { getAuth } from "firebase/auth";
import { useRecoilState } from "recoil";
import { userInfoState } from "../states/user_info";
import network from '../util/network';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Place = () => {

    const [data, setData] = useState({});
    const router = useRouter();
    const auth = getAuth();
    const commonItemUid = router.query.commonItemUid;

    // 글로벌 상태관리
    const [userInfo, setUserInfo] = useRecoilState(userInfoState);
    const [load, setLoad] = useState(false);

    // 아이템 불러오기
    const getItem = async () => {
        console.log(userInfo);
        setLoad(true);
        getData();
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

    const getData = async() => {
        const res = await network.get('/item/commonItem/'+commonItemUid);
        res.data ? setData(res.data) : null;
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

    return (
        <div>
            <PlaceHeader name={data.name}/>
            <main className='mb-28'>
                <section className='mb-7'>
                    <div className='block relative'>
                        <img src='/images/banner.png' />
                        <span className='block absolute bottom-0 left-0 text-lg text-white font-bold ml-5 mb-11' style={{fontFamily: 'NanumSquareRoundOTF'}}>{data.name}</span>
                        <div className='block absolute bottom-0 left-0 ml-5 mb-5'>
                            <span className='textOrange1 text-xs rounded p-1 mr-1' style={{fontFamily: 'NanumSquareRoundOTF', backgroundColor: 'rgba(219, 239, 253, 0.2)'}}>{data.subject}</span>
                            <span className='textOrange1 text-xs rounded p-1' style={{fontFamily: 'NanumSquareRoundOTF', backgroundColor: 'rgba(219, 239, 253, 0.2)'}}>{data.field}</span>
                        </div>
                        <div className='block absolute bottom-0 right-0 mr-5 mb-5'>
                            <img src={`/images/ic_${data.bookmark? 'bookmarked.png' : 'bookmark.png'}`} className='mx-auto'/>
                            <span className='text-xs text-white'>135</span>
                        </div>
                    </div>
                </section>
                <section className='mx-5'>
                    <div className='text-base font-semibold mb-2' style={{letterSpacing: '-0.32px'}}>어떤 체험장소인가요?</div>
                    <div className='text-sm' style={{letterSpacing: '-0.28px', lineHeight: '21px'}}>
                        {data.description}
                    </div>
                </section>
            </main>
            <aside className='fixed bottom-0 left-0 right-0 z-100'>
                <Link href={{
                    pathname: 'addplace',
                    query: {
                        commonItemUid: commonItemUid
                    }
                }}>
                    <div className='relative mx-auto my-0 bg-white'>
                        <nav className='flex items-center box-border relative' style={{height: '90px'}}>
                            <span className='text-sm text-white text-center p-4 m-5 w-full rounded-md bg5' 
                                style={{letterSpacing: '-0.28px'}}>내 보관함에 등록하기</span>
                        </nav>
                    </div>
                </Link>
            </aside>
        </div>
    )
}

export default Place;