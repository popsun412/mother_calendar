import { Global } from '@emotion/react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import StarRatings from 'react-star-ratings';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import { useRouter } from 'next/router';
import network from '../util/network';
import GlobalStyles from '@mui/material/GlobalStyles';

const AddPlace = () => {

    const router = useRouter();
    const commonItemUid = router.query.commonItemUid;

    const [data, setData] = useState([]);
    const [disabled, setDisabled] = useState(true);
    const [booktitle, setBooktitle] = useState('');
    const [image, setImage] = useState({
        image_file: '',
        preview_URL: ''
    });
    const [loaded, setLoaded] = useState('loading');
    const [status, setStatus] = useState('expected');
    const [field, setField] = useState();
    const [area, setArea] = useState();
    const [rating, setRating] = useState(0);
    const [address, setAddress] = useState('');
    const [open, setOpen] = useState(false);
    // const [value, setValue] = useState({ year: 2022, month: 5 });
    const [startDate, setStartDate] = useState(new Date());
    const monthPickerRef = useRef(null);
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

    let inputRef;

    useEffect(() => {
        const getData = async() => {
            const res = await network.get('/item/commonItem/'+commonItemUid);
            if (res.data) {
                setData(res.data);
                setLoaded(true);
                setImage({image_file: res.data.image, preview_URL: res.data.image});
                setBooktitle(res.data.name);
            }
        }
        commonItemUid != undefined ? getData() : null;
    }, [])

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

    const deleteImage = (e) => {
        e.preventDefault();
        setImage({
            image_file: '',
            preview_URL: ''
        });
        setLoaded('loading');
    }

    const titleChange = (e) => {
        data.name ? setBooktitle(data.name) : setBooktitle(e.target.value);
    }

    const handleStatus = (e) => {
        const val = e.target.offsetParent.value;
        setStatus(val);
    }

    const fieldClick = (e) => {
        e.target.checked ? setField(e.target.value) : setField('');
    }

    const areaClick = (e) => {
        e.target.checked ? setArea(e.target.value) : setArea('');
    }

    const handleRating = (newVal) => {
        setRating(newVal);
    }

    useEffect(() => {
        if (status === 'expected') {
            rating > 0 && booktitle != '' && image.image_file != '' && field != '' && area != '' ? setDisabled(false) : setDisabled(true)
        } else {
            booktitle != '' && image.image_file != '' && field != '' && area != '' ? setDisabled(false) : setDisabled(true)
        }
    }, [status, rating, image, field, area]);

    const onSubmit = async(e) => {
        e.preventDefault();

        const res = await axios('/item/commonItem', {
            method: 'POST',
            params: {
                
            }
        }).then( e => {
            console.log(e);
        }).catch(err => console.log(err));
    }

    const onCompletePost = (data) => {
        setAddress(data.address);
        setOpen(false);
    }

    const showPicker = () => {
        if (monthPickerRef && monthPickerRef.current) {
            monthPickerRef.current.show();
        }
    };

    const hidePicker = () => {
        if (monthPickerRef && monthPickerRef.current) {
            monthPickerRef.current.dismiss();
        }
    };

    const handlePickerChange = (...args) => {
        setValue({ year: args[0], month: args[1] });
        hidePicker();
    };

    return (
        <div>
            <header className='sticky top-0 left-0 right-0 visible opacity-100 bg-white z-100' style={{marginBottom: '-50px'}}>
                <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white' style={{height: '50px'}}>
                    <div className='flex-1 flex items-center'>
                        <div onClick={() => {window.history.back()}}>
                            <img src='/images/ic_back.png' />
                        </div>
                        <div className='my-0 mx-auto text-base font-medium' style={{letterSpacing: '-0.3px'}}>체험장소 등록</div>
                        <button className={`flex ${disabled ? 'textGray4' : 'textOrange5'}`} style={{fontSize: '15px'}} disabled={disabled} onClick={onSubmit}>완료</button>
                    </div>
                </div>
            </header>
            <main className='bg-white' style={{marginTop: '50px'}}>
                <section className='pt-5 mx-5 my-6'>
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
                            {
                                (loaded == false || loaded == true) && !data.image ?
                                    <button className='block absolute' style={{top: '-10px', right: '-10px'}} onClick={deleteImage}>
                                        <img src='/images/ic_delete.png' />
                                    </button> : ''
                            }
                        </div>
                        {
                            (loaded == false || loaded == true) && !data.image ?
                            <button className='flex pt-2 mx-auto text-xs textGray3 underline' onClick={() => inputRef.click()}>수정</button> : ''
                        }
                    </div>
                    <div>
                        <div>
                            <input type='text' placeholder='체험장소 이름을 입력해주세요.' value={booktitle} onChange={titleChange}
                                className='block w-full h-10 px-5 box-border border border-solid border-color4 rounded-md text-sm textGray4'/>
                        </div>
                    </div>
                </section>
                <section className='mx-5 mt-9 mb-6'>
                    <div className='text-sm textGray2 font-medium'>상태</div>
                    <div style={{marginTop: '18px'}}>
                        <Global
                            styles={{
                                'MuiToggleButtonGroup-root': {
                                    borderRadius: '6px'
                                },
                                '.MuiToggleButton-root.Mui-selected': {
                                    backgroundColor: '#fff!important',
                                    color: '#FF6035',
                                    borderColor: '#FF6035',
                                    borderRadius: '6px'
                                },
                            }}
                        />
                        <ToggleButtonGroup 
                            value={status}
                            onChange={handleStatus}
                            aria-label="status" className='w-full'>
                            <ToggleButton value="expected" aria-label="purchase" className='w-full'>방문예정</ToggleButton>
                            <ToggleButton value='completed' arai-label='inbox' className='w-full'>방문완료</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </section>
                <section className='mx-5 my-6'>
                    <div className='text-sm textGray2 font-medium'>분야</div>
                    <div className='mt-6'>
                        <div className='grid grid-cols-4 gap-3'>
                            <label>
                                <input type='checkbox' value='kor' className='absolute top-0 left-0 opacity-0 hidden' onChange={fieldClick}/>
                                <span className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${field === 'kor' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}>
                                    <img src='/images/category1.png' className={`mr-1 ${field == 'kor' ? '' : 'grayscale'}`}
                                        style={{width: '17px', height: '17px'}}/>국어
                                </span>
                            </label>
                            <label>
                                <input type='checkbox' value='eng' className='absolute top-0 left-0 opacity-0 hidden' onChange={fieldClick}/>
                                <span className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${field === 'eng' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}>
                                    <img src='/images/category2.png' className={`mr-1 ${field == 'eng' ? '' : 'grayscale'}`}
                                        style={{width: '17px', height: '17px'}}/>영어
                                </span>
                            </label>
                            <label>
                                <input type='checkbox' value='mat' className='absolute top-0 left-0 opacity-0 hidden' onChange={fieldClick}/>
                                <span className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${field === 'mat' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}>
                                    <img src='/images/category3.png' className={`mr-1 ${field == 'mat' ? '' : 'grayscale'}`}
                                        style={{width: '17px', height: '17px'}}/>수학
                                </span>
                            </label>
                            <label>
                                <input type='checkbox' value='sci' className='absolute top-0 left-0 opacity-0 hidden' onChange={fieldClick}/>
                                <span className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${field === 'sci' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}>
                                    <img src='/images/category4.png' className={`mr-1 ${field == 'sci' ? '' : 'grayscale'}`}
                                        style={{width: '17px', height: '17px'}}/>과학
                                </span>
                            </label>
                            <label>
                                <input type='checkbox' value='soc' className='absolute top-0 left-0 opacity-0 hidden' onChange={fieldClick}/>
                                <span className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${field === 'soc' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}>
                                    <img src='/images/category5.png' className={`mr-1 ${field == 'soc' ? '' : 'grayscale'}`}
                                        style={{width: '17px', height: '17px'}}/>사회
                                </span>
                            </label>
                            <label>
                                <input type='checkbox' value='art' className='absolute top-0 left-0 opacity-0 hidden' onChange={fieldClick}/>
                                <span className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${field === 'art' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}>
                                    <img src='/images/category6.png' className={`mr-1 ${field == 'art' ? '' : 'grayscale'}`}
                                        style={{width: '17px', height: '17px'}}/>미술
                                </span>
                            </label>
                            <label>
                                <input type='checkbox' value='mus' className='absolute top-0 left-0 opacity-0 hidden' onChange={fieldClick}/>
                                <span className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${field === 'mus' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}>
                                    <img src='/images/category7.png' className={`mr-1 ${field == 'mus' ? '' : 'grayscale'}`}
                                        style={{width: '17px', height: '17px'}}/>음악
                                </span>
                            </label>
                            <label>
                                <input type='checkbox' value='ath' className='absolute top-0 left-0 opacity-0 hidden' onChange={fieldClick}/>
                                <span className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${field === 'ath' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}>
                                    <img src='/images/category8.png' className={`mr-1 ${field == 'ath' ? '' : 'grayscale'}`}
                                        style={{width: '17px', height: '17px'}}/>체육
                                </span>
                            </label>
                            <label>
                                <input type='checkbox' value='play' className='absolute top-0 left-0 opacity-0 hidden' onChange={fieldClick}/>
                                <span className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${field === 'play' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}>
                                    <img src='/images/category9.png' className={`mr-1 ${field == 'play' ? '' : 'grayscale'}`}
                                        style={{width: '17px', height: '17px'}}/>놀이
                                </span>
                            </label>
                            <label>
                                <input type='checkbox' value='etc' className='absolute top-0 left-0 opacity-0 hidden' onChange={fieldClick}/>
                                <span className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${field === 'etc' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}>
                                    <img src='/images/category11.png' className={`mr-1 ${field == 'etc' ? '' : 'grayscale'}`}
                                        style={{width: '17px', height: '17px'}}/>기타
                                </span>
                            </label>
                            <label>
                                <input type='checkbox' value='par' className='absolute top-0 left-0 opacity-0 hidden' onChange={fieldClick}/>
                                <span className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${field === 'par' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}>
                                    <img src='/images/category12.png' className={`mr-1 ${field == 'par' ? '' : 'grayscale'}`}
                                        style={{width: '17px', height: '17px'}}/>부모
                                </span>
                            </label>
                        </div>
                    </div>
                </section>
                <section className='mx-5 my-6'>
                    <div className='text-sm textGray2 font-medium'>주소</div>
                    <div className='mt-3 relative'>
                    {
                        address.length > 0 ? 
                        <>
                            <div className='bg-gray2 rounded-md'>
                                <div className='flex mx-5 justify-between' style={{paddingTop: '11px'}}>
                                    <div className='textGray1 text-sm'>{address}</div>
                                    <div className='textGray2 text-sm underline' onClick={() => {setOpen(!open)}}>수정</div>
                                </div>
                                <div className='textGray3 text-sm mx-5' style={{paddingTop: '5px', paddingBottom: '11px'}}>
                                    {address}
                                </div>
                            </div>
                            {
                                open ?
                                <DaumPostcode autoClose onComplete={onCompletePost}/> : ''
                            }
                        </>
                        : <>
                        <i className='block absolute top-1/2 right-2.5' onClick={() => {setOpen(!open)}}>
                            <img src='/images/ic_search_black.png' className='w-4 h-4' style={{transform: 'translateY(-50%)'}} />
                        </i>
                        <input type='text' placeholder='주소를 입력해주세요' className='h-9 rounded-md border border-solid border-color4 w-full text-sm pr-3 pl-5' style={{height: '39px'}} onChange={() => {}}/>
                        {
                            open ?
                            <DaumPostcode autoClose onComplete={onCompletePost}/> : ''
                        }
                        </> 
                    }
                </div>
                </section>
                {
                    status === 'expected' ?
                        <section className='mx-5 my-6'>
                            <div className='text-sm textGray2 font-medium'>방문시기 <span className='textGray4'>(선택)</span></div>
                            <div className='mt-5'>
                                <GlobalStyles 
                                    styles={{
                                        'input': {
                                            width: '114px',
                                            fontSize: '14px',
                                            borderRadius: '6px',
                                            border: 'solid 1px #bdbdbd'
                                        }
                                    }}
                                />
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    dateFormat='yyyy년 MM월'
                                    showMonthYearPicker
                                    showFullMonthYearPicker
                                    showTwoColumnMonthYearPicker
                                    className='mr-6 py-1 px-4 text-sm border border-solid border-gray3 rounded-md bg-white'
                                />
                            </div>
                        </section> : ''
                }
                {
                    status === 'expected' ?
                        <section className='mx-5 my-6'>
                            <div className='text-sm textGray2 font-medium'>만족도 <span className='textGray4'>(선택)</span></div>
                            <div className='flex mt-3'>
                                <StarRatings 
                                    rating={rating}
                                    changeRating={handleRating}
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension='36px'
                                    starSpacing='3px'
                                    starRatedColor='rgb(255, 96, 53)'
                                    starHoverColor='rgb(255, 96, 53)'
                                />
                            </div>
                        </section> : ''
                }
                <form onSubmit={onSubmit}>
                    <input type='hidden' value={booktitle}/>
                    <input type='hidden' value={image} />
                    <input type='hidden' value={status} />
                    <input type='hidden' value={field} />
                    <input type='hidden' value={area} />
                    <input type='hidden' value={rating} />
                </form>
            </main>
        </div>
    )
}

export default AddPlace;