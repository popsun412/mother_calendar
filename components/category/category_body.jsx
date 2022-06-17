/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import CategoryItem from './category_item';
import CategoryMenu from './category_menu';
import CategoryPlan from './category_plan';
// firebase
import { getAuth } from "firebase/auth";

import { useEffect } from "react";
import { useRouter } from 'next/router';

const CategoryBody = (props) => {
    const router = useRouter();
    const auth = getAuth();

    const [load, setLoad] = useState(false);

    const [activeTab, setActiveTab] = useState(parseInt(props.activeTab));
    const [category, setCategory] = useState(props.category);
    const type = props.type;

    const tabClick = (index) => {
        setActiveTab(index);
        const _href = { pathname: '/category', query: { ...router.query, activeTab: index } }
        router.replace(_href);
    }

    const obj = {
        0: <CategoryPlan type={type} category={category} setCategory={setCategory} />,
        1: <CategoryItem type={type} category={category} setCategory={setCategory} scrollCheckRef={props.scrollCheckRef} />
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (_user) => {
            if (_user) {
                setLoad(true);
            } else {
                router.push('/');
            }
        });
    }, []);

    useEffect(() => {
        setCategory(router.query.id);
    }, [router.query.id])

    return (load) ?
        <main className='mt-12'>
            <CategoryMenu type={type} category={category} setCategory={setCategory} />
            <div className='my-4'>
                <ul className='flex w-full border-b' style={{ height: '36px' }}>
                    <li className={`flex-1 my-0 mx-6 pb-2 text-center text-sm ${activeTab === 0 ? 'textBlue4 border-b-3 border-solid border-blue4' : ''}`} onClick={() => { tabClick(0) }}>계획</li>
                    <li className={`flex-1 my-0 mx-6 pb-2 text-center text-sm ${activeTab === 1 ? 'textBlue4 border-b-3 border-solid border-blue4' : ''}`} onClick={() => { tabClick(1) }}>아이템</li>
                </ul>
            </div>
            <div className='mt-5'>{obj[activeTab]}</div>
        </main>
        : <></>
}

export default CategoryBody;