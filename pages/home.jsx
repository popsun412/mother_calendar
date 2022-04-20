import React from 'react';
import HomeHeader from '../components/home/home_header';
import HomeSlider from '../components/home/home_slider';
import HomeCategory from '../components/home/home_category';
import HomeItem from '../components/home/home_item';
import HomePlace from '../components/home/home_place';
import HomeTheme from '../components/home/home_theme';
import Navigation from '../components/common/navigation';

const Home = () => {

    return (
        <div className="w-screen h-screen overflow-y-auto scrollbar-hide">
            <HomeHeader />
            <main className='block' style={{paddingTop: '74px'}}>
                <HomeSlider />
                <HomeCategory />
                <hr className='h-1.5 border-0 mt-8 mb-5 mx-0 p-0' style={{background: '#ececec'}}/>
                <HomeItem />
                <hr className='h-1.5 border-0 mt-8 mb-5 mx-0 p-0' style={{background: '#ececec'}}/>
                <HomePlace />
                <hr className='h-1.5 border-0 mt-8 mb-5 mx-0 p-0' style={{background: '#ececec'}}/>
                <HomeTheme />
            </main>
            <Navigation path={'home'}/>
        </div>
    )
}

export default Home;