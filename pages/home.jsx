/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import HomeHeader from '../components/home/home_header';
import HomeSlider from '../components/home/home_slider';
import HomeCategory from '../components/home/home_category';
import HomeItem from '../components/home/home_item';
import HomePlace from '../components/home/home_place';
import HomeTheme from '../components/home/home_theme';
import Navigation from '../components/common/navigation';
import CircleLoading from "../components/common/circle_loading";

import { getAuth } from "firebase/auth";

import network from '../util/network';
import { useRouter } from 'next/router';

const Home = () => {

    const auth = getAuth();
    const router = useRouter();

    // 글로벌 상태관리
    const [userInfo, setUserInfo] = useState(null);
    const [load, setLoad] = useState(false);

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
        auth.onAuthStateChanged(async (_user) => {
            if (_user) {
                await getUser();
                setLoad(true);
            } else {
                setUserInfo(null);
                router.push('/');
            }
        });
    }, [])

    return (load) ?
        <div className="w-full h-full overflow-y-auto scrollbar-hide">
            <HomeHeader />
            <main style={{ marginTop: 50 }}>
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
        </div> : <div className="h-screen w-full">
            <CircleLoading />
        </div>

}

export default Home;