import axios from 'axios';
import React, { useState } from 'react'
import StarRatings from 'react-star-ratings';
import DatePicker from 'react-mobile-datepicker';
import moment from 'moment';
import { Global } from '@emotion/react';

const Test = () => {

    const [booktitle, setBooktitle] = useState();
    const [image, setImage] = useState({
        image_file: '',
        preview_URL: ''
    });
    const [loaded, setLoaded] = useState('loading');
    let inputRef;

    const titleChange = (e) => {
        setBooktitle(e.target.value);
    }

    const saveImage = (e) => {
        e.preventDefault();
        const fileReader = new FileReader();

        if(e.target.files[0]) {
            setLoaded('loading');
            fileReader.readAsDataURL(e.target.files[0]);
        }

        fileReader.onload = () => {
            setImage(
                {
                    imge_file: e.target.files[0],
                    preview_URL: fileReader.result
                }
            )
            setLoaded(true)
        }
    }

    return (
        <div>
            <div className='mb-6'>
                <div className='rounded-md my-0 mx-auto relative' style={{width: '120px', height: '120px', backgroundColor: '#f2f2f2'}}>
                    <button type='primary' onClick={() => inputRef.click()}>
                        <input type='file' accept='image/*' onChange={saveImage} ref={refParam => inputRef = refParam} style={{display: 'none'}} />
                        {
                            loaded == false || loaded == true ? (
                                <img src={image.preview_URL} className='rounded-md' style={{width:'120px', height: '120px'}}/>
                            ) : <img src='/images/ic_camera.png' className='absolute top-10 left-10'/>
                        }
                    </button>
                </div>
            </div>
            <div>
                <div>
                    <input type='text' placeholder='교구 이름을 입력해주세요.' value={booktitle} onChange={titleChange}
                        className='block w-full h-10 px-5 box-border border border-solid border-color4 rounded-md text-sm textGray4'/>
                </div>
            </div>
        </div>
    )
}


const Test2 = () => {

    const [rating, setRating] = useState(0) // initial rating value

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
    }

    return (
        <div className='App'>
            <StarRatings 
                rating={rating}
                changeRating={handleRating}
                numberOfStars={5}
                name='rating'
                starDimension='36px'
                starSpacing='3px'
                starHoverColor='rgb(255, 96, 53)'
            />
        </div>
    )
}

const Test3 = () => {

    const [time, setTime] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);
    const dateConfig = {
        'year': {
            format: 'YYYY년',
            caption: 'Year',
            step: 1
        },
        'month': {
            format: 'MM월',
            caption: 'Mon',
            step: 1,
        },
    }

    const handleClick = () => {
        setIsOpen(true);
    }

    const handleCancel = () => {
        setIsOpen(false);
    }

    const handleSelect = (time) => {
        setTime(time);
        console.log(moment(time).format('YYYYMMDD'))
        setIsOpen(false);
    }

    return (
        <div>
            <a onClick={handleClick}>{moment(time).format('YYYY-MM')}</a>
            <Global
                styles={{
                    '.datepicker.default': {
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px'
                    },
                    '.datepicker.default .datepicker-wheel': {
                        backgroundColor: '#f2f2f2',
                        border: 'none',
                    },
                    '.datepicker.default .datepicker-scroll li': {
                        color: '#bdbdbd'
                    },
                    '.datepicker.default .datepicker-navbar-btn': {
                        color: '#ff6035'
                    }
                }}
            />
            <DatePicker 
                value={time}
                isOpen={isOpen}
                showHeader={false}
                onSelect={handleSelect}
                onCancel={handleCancel}
                dateConfig={dateConfig}
                cancelText=''
                confirmText='확인'
            />
        </div>
    )
}

export default Test3;