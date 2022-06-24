/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const HomeCategory = () => {

    const data = [
        {
            id: 10,
            imgUrl: '/images/category10.png',
            url: '/category?id=10',
            title: '체험',
            recommend: true,

        },
        {
            id: 1,
            imgUrl: '/images/category1.png',
            url: '/category?id=1',
            title: '국어',
            recommend: false,
        },
        {
            id: 2,
            imgUrl: '/images/category2.png',
            url: '/category?id=2',
            title: '영어',
            recommend: false,
        },
        {
            id: 3,
            imgUrl: '/images/category3.png',
            url: '/category?id=3',
            title: '수학',
            recommend: false,
        },
        {
            id: 4,
            imgUrl: '/images/category4.png',
            url: '/category?id=4',
            title: '과학',
            recommend: false,
        },
        {
            id: 5,
            imgUrl: '/images/category5.png',
            url: '/category?id=5',
            title: '사회',
            recommend: false,
        },
        {
            id: 6,
            imgUrl: '/images/category6.png',
            url: '/category?id=6',
            title: '미술',
            recommend: false,
        },
        {
            id: 7,
            imgUrl: '/images/category7.png',
            url: '/category?id=7',
            title: '음악',
            recommend: false,
        },
        {
            id: 8,
            imgUrl: '/images/category8.png',
            url: '/category?id=8',
            title: '체육',
            recommend: false,
        },
        {
            id: 9,
            imgUrl: '/images/category9.png',
            url: '/category?id=9',
            title: '생활',
            recommend: false,
        },
        {
            id: 11,
            imgUrl: '/images/category11.png',
            url: '/etc',
            title: '기타',
            recommend: false,
        },
        {
            id: 12,
            imgUrl: '/images/category12.png',
            url: '/category?id=12',
            title: '부모',
            recommend: false,
        },
    ]

    return (
        <section className='mx-5'>
            <div className='my-8'>
                <div className='grid grid-cols-4'>
                    {
                        data.map((item, idx) => {
                            let category = '';
                            item.id == 10 ? category = '체험' : item.id == 12 ? category = '부모' : item.id == 11 ? category == '기타' : category = '교육'

                            if (item.id == 11) category = '기타';

                            let _href = { pathname: '/category', query: { type: category, id: item.title } };
                            if (category == "체험") _href = { pathname: '/experience' };
                            if (category == "부모") _href = { pathname: '/parents' };
                            if (category == "기타") _href = { pathname: '/etc' };

                            return (
                                <Link key={idx} href={_href}
                                    passHref
                                >
                                    <div className={`flex justify-center flex-col my-0 mx-auto`} style={{ height: '87px', width: '62px' }}>
                                        <div className={`${item.recommend ? 'block relative' : ''}`}>
                                            <img src={item.imgUrl} className='my-0 mx-auto w-full px-3' />
                                            <div className='text-center my-0 mx-auto'>
                                                <span className='text-xs font-medium textGray2' style={{ letterSpacing: '-0.26px' }}>{item.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default HomeCategory;