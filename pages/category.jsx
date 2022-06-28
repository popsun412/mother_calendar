import React, { useRef, useCallback, useEffect } from 'react';
import CategoryHeader from '../components/category/category_header';
import CategoryBody from '../components/category/category_body';

const Category = (props) => {
    const ref = useRef();

    const type = props.query.type;
    const category = props.query.id;
    const activeTab = props.query.activeTab ?? 0;

    return (
        <div className='w-full h-screen overflow-y-auto scrollbar-hide' ref={ref}>
            <CategoryHeader type={type} />
            <CategoryBody type={type} category={category} activeTab={activeTab} scrollCheckRef={ref} />
        </div>
    )
}

export default Category;

Category.getInitialProps = async (ctx) => {
    return {
        query: ctx.query
    }
}
