import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const edu = [
    {
        id: 0,
        title: '전체',
        imgUrl: '/images/all.png'
    },
    {
        id: 1,
        title: '국어',
        imgUrl: '/images/category1.png'
    },
    {
        id: 2,
        title: '영어',
        imgUrl: '/images/category2.png'
    },
    {
        id: 3,
        title: '수학',
        imgUrl: '/images/category3.png'
    },
    {
        id: 4,
        title: '과학',
        imgUrl: '/images/category4.png'
    },
    {
        id: 5,
        title: '사회',
        imgUrl: '/images/category5.png'
    },
    {
        id: 6,
        title: '미술',
        imgUrl: '/images/category6.png'
    },
    {
        id: 7,
        title: '음악',
        imgUrl: '/images/category7.png'
    },
    {
        id: 8,
        title: '체육',
        imgUrl: '/images/category8.png'
    },
    {
        id: 9,
        title: '놀이',
        imgUrl: '/images/category9.png'
    },
]

const CategoryMenu = (props) => {
    
    const { type, category } = props;
    const [data, setData] = useState(
        [{ id: 0, title: '전체', imgUrl: '/images/all.png' }]
    );

    const categoryClick = (param) => {
        alert(param);
        props.setCategory(param);
    }

    useEffect(() => {
        type == '교육' ? setData(edu) : null;
        type != '교육' ? props.setCategory('전체') : props.setCategory(category);
    }, [])

    return (
        <div className='ml-4'>
            <Swiper
                slidesPerView={5.6}
                onSlideChange={() => console.log('change slide')}
                onSwiper={swiper => console.log(swiper)}
            >
                {
                    data.map((item, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <div className={`p-3 flex flex-col textGray2 font-normal text-xs ${item.title === props.category ? 'bg-gray2' : ''}`} 
                                    style={{ borderRadius: "1.25rem", width: "3.25rem" }} onClick={() => props.setCategory(item.title)}>
                                    <img src={item.imgUrl} className="m-auto w-7 h-7" />
                                    <span className='text-center mt-2 textGray2 font-normal text-xs'>{item.title}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }                  
            </Swiper>
        </div>
    )
}

export default CategoryMenu;