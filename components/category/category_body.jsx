import React, { useState } from 'react';
import CategoryItem from './category_item';
import CategoryMenu from './category_menu';
import CategoryPlan from './category_plan';

const CategoryBody = (props) => {

    const [activeTab, setActiveTab] = useState(0);
    const [category, setCategory] = useState(props.category);
    const type = props.type;

    const tabClick = (index) => {
        setActiveTab(index);
    }

    const obj = {
        0: <CategoryPlan category={category} setCategory={setCategory}/>,
        1: <CategoryItem category={category} setCategory={setCategory}/>
    }

    return (
        <main className='mt-14'>
            <CategoryMenu type={type} category={category} setCategory={setCategory}/>
            <div className='my-4'>
                <ul className='flex w-full border-b' style={{height: '36px'}}>
                    <li className={`flex-1 my-0 mx-6 pb-2 text-center text-sm ${activeTab === 0 ? 'textBlue4 border-b-3 border-solid border-blue4' : ''}`} onClick={() => {tabClick(0)}}>계획</li>
                    <li className={`flex-1 my-0 mx-6 pb-2 text-center text-sm ${activeTab === 1 ? 'textBlue4 border-b-3 border-solid border-blue4' : ''}`} onClick={() => {tabClick(1)}}>아이템</li>
                </ul>
            </div>
            <div className='mt-5'>
            {
            obj[activeTab]
            }
            </div>
        </main>
    )
}

export default CategoryBody;