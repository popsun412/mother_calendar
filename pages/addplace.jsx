import { Global } from '@emotion/react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import DaumPostcode from 'react-daum-postcode';
import StarRatings from 'react-star-ratings';
import network from '../util/network';

import GlobalStyles from '@mui/material/GlobalStyles';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { ko } from 'date-fns/locale';

const AddPlace = () => {

    const router = useRouter();
    const commonItemUid = router.query.commonItemUid;

    const [data, setData] = useState([]);
    const [disabled, setDisabled] = useState(true);
    const [placetitle, setPlaceTitle] = useState('');
    const [image, setImage] = useState({
        image_file: '',
        preview_URL: ''
    });
    const [loaded, setLoaded] = useState('loading');
    const [status, setStatus] = useState('방문예정');
    const [field, setField] = useState();
    const [area, setArea] = useState();
    const [rating, setRating] = useState(0);
    const [address, setAddress] = useState('');
    const [open, setOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    let inputRef;

    useEffect(() => {
        const getData = async() => {
            const res = await network.get('/item/commonItem/'+commonItemUid);
            if (res.data) {
                setData(res.data);
                setLoaded(true);
                setImage({image_file: res.data.image, preview_URL: res.data.image});
                setPlaceTitle(res.data.name);
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
        data.name ? setPlaceTitle(data.name) : setPlaceTitle(e.target.value);
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
        if (status === '방문예정') {
            rating > 0 && placetitle != '' && image.image_file != '' && field != '' && area != '' ? setDisabled(false) : setDisabled(true)
        } else {
            placetitle != '' && image.image_file != '' && field != '' && area != '' ? setDisabled(false) : setDisabled(true)
        }
    }, [status, rating, image, field, area]);

    const onSubmit = async(e) => {
        e.preventDefault();

        let statusVal = 0;
        let name = '';
        let image = '';

        status == '방문예정' ? statusVal = 0 : statusVal = 1;
        data.name ? name = data.name : name = placetitle;
        data.image ? image = data.image : image.imge_file;

        const formData = new FormData();
        formData.append('name', name);
        formData.append('status', statusVal);
        formData.append('subject', field);
        formData.append('lockerType', "학원지도");
        formData.append('image', image);
        status == '방문완료' ? formData.append('buyDt', startDate) : null;
        status == '방문완료' ? formData.append('score', rating) : null;

        const res = await network.post('/locker', formData)
            .then((res) => {
                if(res.status == 200) {
                    alert('보관함 등록을 완료했습니다.');
                    window.history.back();
                }
            })
            .catch((err) => console.log(err));
    }

    const onCompletePost = (data) => {
        setAddress(data.address);
        setOpen(false);
    }

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
                            <input type='text' placeholder='체험장소 이름을 입력해주세요.' value={placetitle} onChange={titleChange}
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
                            <ToggleButton value="방문예정" aria-label="방문예정" className='w-full'>방문예정</ToggleButton>
                            <ToggleButton value='방문완료' arai-label='방문완료' className='w-full'>방문완료</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </section>
                <section className='mx-5 my-6'>
                    <div className='text-sm textGray2 font-medium'>분야</div>
                    <div className='mt-6'>
                        <div className='grid grid-cols-4 gap-3'>
                            <label>
                                <input type='checkbox' value='국어' className='absolute top-0 left-0 opacity-0 hidden' onChange={fieldClick}/>
                                <span className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${field === '국어' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}>
                                    <img src='/images/category1.png' className={`mr-1 ${field == '국어' ? '' : 'grayscale'}`}
                                        style={{width: '17px', height: '17px'}}/>국어
                                </span>
                            </label>
                            <label>
                                <input type='checkbox' value='영어' className='absolute top-0 left-0 opacity-0 hidden' onChange={fieldClick}/>
                                <span className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${field === '영어' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}>
                                    <img src='/images/category2.png' className={`mr-1 ${field == '영어' ? '' : 'grayscale'}`}
                                        style={{width: '17px', height: '17px'}}/>영어
                                </span>
                            </label>
                            <label>
                                <input type='checkbox' value='수학' className='absolute top-0 left-0 opacity-0 hidden' onChange={fieldClick}/>
                                <span className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${field === '수학' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}>
                                    <img src='/images/category3.png' className={`mr-1 ${field == '수학' ? '' : 'grayscale'}`}
                                        style={{width: '17px', height: '17px'}}/>수학
                                </span>
                            </label>
                            <label>
                                <input type='checkbox' value='과학' className='absolute top-0 left-0 opacity-0 hidden' onChange={fieldClick}/>
                                <span className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${field === '과학' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}>
                                    <img src='/images/category4.png' className={`mr-1 ${field == '과학' ? '' : 'grayscale'}`}
                                        style={{width: '17px', height: '17px'}}/>과학
                                </span>
                            </label>
                            <label>
                                <input type='checkbox' value='사회' className='absolute top-0 left-0 opacity-0 hidden' onChange={fieldClick}/>
                                <span className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${field === '사회' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}>
                                    <img src='/images/category5.png' className={`mr-1 ${field == '사회' ? '' : 'grayscale'}`}
                                        style={{width: '17px', height: '17px'}}/>사회
                                </span>
                            </label>
                            <label>
                                <input type='checkbox' value='미술' className='absolute top-0 left-0 opacity-0 hidden' onChange={fieldClick}/>
                                <span className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${field === '미술' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}>
                                    <img src='/images/category6.png' className={`mr-1 ${field == '미술' ? '' : 'grayscale'}`}
                                        style={{width: '17px', height: '17px'}}/>미술
                                </span>
                            </label>
                            <label>
                                <input type='checkbox' value='음악' className='absolute top-0 left-0 opacity-0 hidden' onChange={fieldClick}/>
                                <span className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${field === '음악' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}>
                                    <img src='/images/category7.png' className={`mr-1 ${field == '음악' ? '' : 'grayscale'}`}
                                        style={{width: '17px', height: '17px'}}/>음악
                                </span>
                            </label>
                            <label>
                                <input type='checkbox' value='체육' className='absolute top-0 left-0 opacity-0 hidden' onChange={fieldClick}/>
                                <span className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${field === '체육' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}>
                                    <img src='/images/category8.png' className={`mr-1 ${field == '체육' ? '' : 'grayscale'}`}
                                        style={{width: '17px', height: '17px'}}/>체육
                                </span>
                            </label>
                            <label>
                                <input type='checkbox' value='놀이' className='absolute top-0 left-0 opacity-0 hidden' onChange={fieldClick}/>
                                <span className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${field === '놀이' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}>
                                    <img src='/images/category9.png' className={`mr-1 ${field == '놀이' ? '' : 'grayscale'}`}
                                        style={{width: '17px', height: '17px'}}/>놀이
                                </span>
                            </label>
                            <label>
                                <input type='checkbox' value='기타' className='absolute top-0 left-0 opacity-0 hidden' onChange={fieldClick}/>
                                <span className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${field === '기타' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}>
                                    <img src='/images/category11.png' className={`mr-1 ${field == '기타' ? '' : 'grayscale'}`}
                                        style={{width: '17px', height: '17px'}}/>기타
                                </span>
                            </label>
                            <label>
                                <input type='checkbox' value='부모' className='absolute top-0 left-0 opacity-0 hidden' onChange={fieldClick}/>
                                <span className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${field === '부모' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}>
                                    <img src='/images/category12.png' className={`mr-1 ${field == '부모' ? '' : 'grayscale'}`}
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
                    status === '방문완료' ?
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
                                    locale={ko}
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
                    status === '방문완료' ?
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
            </main>
        </div>
    )
}

export default AddPlace;