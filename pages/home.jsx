import React, { useEffect, useState } from 'react';
import HomeHeader from '../components/home/home_header';
import HomeSlider from '../components/home/home_slider';
import HomeCategory from '../components/home/home_category';
import HomeItem from '../components/home/home_item';
import HomePlace from '../components/home/home_place';
import HomeTheme from '../components/home/home_theme';
import Navigation from '../components/common/navigation';

import { getAuth } from "firebase/auth";
import { useRecoilState } from "recoil";
import { userInfoState } from "../states/user_info";

import network from '../util/network';
import { useRouter } from 'next/router';

const Home = () => {

    const auth = getAuth();
    const router = useRouter();

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

    return (
        <div className="w-screen h-screen overflow-y-auto scrollbar-hide">
            <HomeHeader />
            <main>
                <HomeSlider />
                <HomeCategory />
                <hr className='h-1.5 border-0 mt-8 mb-5 mx-0 p-0' style={{ background: '#ececec' }} />
                <HomeItem />
                <hr className='h-1.5 border-0 mt-8 mb-5 mx-0 p-0' style={{ background: '#ececec' }} />
                <HomePlace />
                <hr className='h-1.5 border-0 mt-8 mb-5 mx-0 p-0' style={{ background: '#ececec' }} />
                <HomeTheme />
            </main>
            <Navigation path={'home'} />
        </div>
    )
}

export default Home;