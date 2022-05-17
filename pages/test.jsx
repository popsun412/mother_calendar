/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import React, { useRef, useState } from 'react'
import StarRatings from 'react-star-ratings';
import moment from 'moment';
import { Global } from '@emotion/react';
import MonthPicker from "react-month-picker";
import "react-month-picker/css/month-picker.css";

import { DateRange, DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from "date-fns"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

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

        if (e.target.files[0]) {
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
                <div className='rounded-md my-0 mx-auto relative' style={{ width: '120px', height: '120px', backgroundColor: '#f2f2f2' }}>
                    <button type='primary' onClick={() => inputRef.click()}>
                        <input type='file' accept='image/*' onChange={saveImage} ref={refParam => inputRef = refParam} style={{ display: 'none' }} />
                        {
                            loaded == false || loaded == true ? (
                                <img src={image.preview_URL} className='rounded-md' style={{ width: '120px', height: '120px' }} />
                            ) : <img src='/images/ic_camera.png' className='absolute top-10 left-10' />
                        }
                    </button>
                </div>
            </div>
            <div>
                <div>
                    <input type='text' placeholder='교구 이름을 입력해주세요.' value={booktitle} onChange={titleChange}
                        className='block w-full h-10 px-5 box-border border border-solid border-color4 rounded-md text-sm textGray4' />
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

const Test4 = () => {

    const [value, setValue] = useState({ year: 2020, month: 9 });
    const monthPickerRef = useRef(null);

    const showPicker = () => {
        if (monthPickerRef && monthPickerRef.current) {
            console.log(monthPickerRef.current);
            monthPickerRef.current.show();
        }
    };

    const hidePicker = () => {
        if (monthPickerRef && monthPickerRef.current) {
            monthPickerRef.current.dismiss();
        }
    };

    const handlePickerChange = (...args) => {
        console.log(args);
        setValue({ year: args[0], month: args[1] });
        hidePicker(); // this works!
    };

    const lang = {
        months: [
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
            "11월",
            "12월"
        ],
        from: "From",
        to: "To"
    };

    return (
        <div>
            <MonthPicker
                lang={lang.months}
                ref={monthPickerRef}
                value={value}
                onChange={handlePickerChange}
            >
                <span onClick={showPicker}>{moment(value).format('YYYY년 MM월')}</span>
            </MonthPicker>
        </div>
    )
}

const Test5 = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <>
            <div className='flex'>
                <div>
                    <DatePicker selected={startDate} dateFormat='yyyy년 MM월 dd일' onChange={(date) => setStartDate(date)} 
                        className='text-center text-sm border border-solid rounded-md border-gary3'/>
                </div>
                <div>
                    <DatePicker selected={startDate} dateFormat='yyyy년 MM월 dd일' onChange={(date) => setStartDate(date)} 
                        className='text-center text-sm'/>
                </div>
            </div>
        </>
    )
}

export default Test5;