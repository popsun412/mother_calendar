import React from 'react';
import CategoryHeader from '../components/category/category_header';
import CategoryBody from '../components/category/category_body';
import { useRouter } from 'next/router';

const Category = () => {

    const router = useRouter();
    const category = router.query.id;

    return (
        <div className='w-screen h-screen overflow-y-auto scrollbar-hide'>
            <CategoryHeader />
            <CategoryBody category={category}/>
        </div>
    )
}

export default Category;