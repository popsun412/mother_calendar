import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const data = [
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
    {
        id: 11,
        title: '기타',
        imgUrl: '/images/category11.png'
    },
    {
        id: 12,
        title: '부모',
        imgUrl: '/images/category12.png'
    }
]

const CategoryMenu = (props) => {

    console.log(props);

    const categoryClick = (param) => {
        alert(param);
        props.setCategory(param);
    }

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
                                <div className={`p-3 flex flex-col textGray2 font-normal text-xs ${item.id === parseInt(props.category) ? 'bg-gray2' : ''}`} 
                                    style={{ borderRadius: "1.25rem", width: "3.25rem" }} onClick={() => props.setCategory(item.id)}>
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