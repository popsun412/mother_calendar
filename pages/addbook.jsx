/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Global } from '@emotion/react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import StarRatings from 'react-star-ratings';
import network from '../util/network';
import GlobalStyles from '@mui/material/GlobalStyles';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { getAuth } from "firebase/auth";
import { useRecoilState } from "recoil";
import { userInfoState } from "../states/user_info";
import { ko } from "date-fns/locale";
import CircleLoadingOpacity from "../components/common/circle_loading_opacity";
import moment from "moment";

const AddBook = (props) => {
    const [saving, setSaving] = useState(false);
    const auth = getAuth();
    const [userInfo, setUserInfo] = useRecoilState(userInfoState);
    const [load, setLoad] = useState(false);

    const router = useRouter();
    const commonItemUid = props.query.commonItemUid;

    const [itemInfo, setItemInfo] = useState({
        name: "",
        image: null,
        status: (props.query.status) ? parseInt(props.query.status) : null,
        subject: null,
        field: null,
        score: 0,
        regDt: new Date()
    });

    const [uploadImage, setUploadImage] = useState({
        imge_file: null,
        preview_URL: ''
    });

    const [loaded, setLoaded] = useState('loading');

    let inputRef;

    // 아이템 불러오기
    const getItem = async () => {
        setLoad(true);
    }

    // 유저 정보 갖고오기
    const getUser = async () => {
        const _result = await network.post('/userInfo');

        // data 통신
        if (_result.status == 200) {
            setUserInfo(_result.data);
        } else {
            router.push('/');
        }
    }

    useEffect(() => {
        if (userInfo == null) {
            auth.onAuthStateChanged(async (_user) => {
                if (_user) {
                    getUser();
                } else {
                    setUserInfo(null);
                    router.push('/');
                }
            });
        }

        if (userInfo != null && !load) getItem();
    })

    useEffect(() => {
        const getData = async () => {
            const res = await network.get('/item/commonItem/' + commonItemUid);
            let _regDt = null
            if (res.data.regDt != null) _regDt = moment(res.data.regDt).toDate();

            setItemInfo({
                ...itemInfo,
                image: res.data.image,
                name: res.data.name,
                status: res.data.status,
                subject: res.data.subject,
                field: res.data.field,
                regDt: _regDt ?? new Date(),
                score: res.data.score ?? 0,
            })
        }

        if (commonItemUid) getData();
    }, [])

    const saveImage = (e) => {
        e.preventDefault();
        const fileReader = new FileReader();

        if (e.target.files[0]) {
            setLoaded('loading');
            fileReader.readAsDataURL(e.target.files[0]);
        }

        fileReader.onload = () => {
            setUploadImage({ imge_file: e.target.files[0], preview_URL: fileReader.result });
            setLoaded(true);
        }
    }

    const onSubmit = async (e) => {
        setSaving(true);

        e.preventDefault();

        const formData = new FormData();
        formData.append('name', itemInfo.name);
        formData.append('status', itemInfo.status);
        formData.append('subject', itemInfo.subject);
        formData.append('field', itemInfo.field);
        formData.append('lockerType', "책장");
        formData.append('image', itemInfo.image);
        if (uploadImage.imge_file != null) formData.append('uploadImage', uploadImage.imge_file)
        itemInfo.status == 0 ? null : formData.append('regDt', itemInfo.regDt);
        itemInfo.status == 0 ? null : formData.append('score', itemInfo.score);

        await network.post('/locker', formData);
        router.push('/bookshelf');
        setSaving(false);
    }

    const disabled = () => {
        if (itemInfo.name.trim() == "") return true;
        if (itemInfo.image == null && uploadImage.imge_file == null) return true;
        if (itemInfo.status != 0 && itemInfo.status != 1 && itemInfo.status != 2) return true;
        if (["국어", "영어", "수학", "과학", "사회", "미술", "음악", "체육", "놀이", "기타", "부모"].findIndex((_item) => _item == itemInfo.subject) < 0) return true;
        if (["대전집", "소전집", "단행본", "기타"].findIndex((_item) => _item == itemInfo.field) < 0) return true;

        return false;
    }

    return (<>
        <div>
            <header className='sticky top-0 left-0 right-0 visible opacity-100 bg-white z-100' style={{ marginBottom: '-50px' }}>
                <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white' style={{ height: '50px' }}>
                    <div className='flex-1 flex items-center'>
                        <div onClick={() => { window.history.back(); }}>
                            <img src='/images/ic_back.png' />
                        </div>
                        <div className='my-0 mx-auto text-base font-medium' style={{ letterSpacing: '-0.3px' }}>책 등록</div>
                        <button disabled={disabled()} className={`flex ${disabled() ? 'textGray4' : 'textOrange5'}`} style={{ fontSize: '15px' }} onClick={onSubmit}>완료</button>
                    </div>
                </div>
            </header>
            <main style={{ marginTop: '50px' }}>
                <section className='pt-5 mx-5 my-6'>
                    <div className='mb-6'>
                        <div className='rounded-md my-0 mx-auto relative' style={{ width: '120px', height: '120px', backgroundColor: '#f2f2f2' }}>
                            {
                                itemInfo.image != null
                                    ? <img src={itemInfo.image} className='rounded-md' />
                                    : <button type='primary' onClick={() => inputRef.click()}>
                                        <input type='file' accept='image/*' onChange={saveImage} ref={refParam => inputRef = refParam} style={{ display: 'none' }} />
                                        {
                                            loaded == false || loaded == true ? (
                                                <img src={uploadImage.preview_URL} className='rounded-md' style={{ width: '120px', height: '120px' }} />
                                            ) : <img src='/images/ic_camera.png' className='absolute top-10 left-10' />
                                        }
                                    </button>
                            }
                        </div>
                    </div>
                    <div>
                        <div>
                            <input
                                value={itemInfo.name}
                                className='block w-full h-10 px-5 box-border border border-solid border-color4 rounded-md text-sm outline-none' onChange={(e) => {
                                    setItemInfo({
                                        ...itemInfo,
                                        name: e.currentTarget.value
                                    })
                                }}
                                placeholder="책 이름을 입력해주세요."
                            />
                        </div>
                    </div>
                </section>
                <section className='mx-5 mt-9 mb-6'>
                    <div className='text-sm textGray2 font-medium'>상태</div>
                    <div style={{ marginTop: '18px' }}>
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
                            value={itemInfo.status}
                            aria-label="status" className='w-full'>
                            <ToggleButton value={0} aria-label="purchase" className='w-full' onClick={() => setItemInfo({
                                ...itemInfo,
                                status: 0
                            })}>구매예정</ToggleButton>
                            <ToggleButton value={1} arai-label='inbox' className='w-full' onClick={() => setItemInfo({
                                ...itemInfo,
                                status: 1
                            })}>보유중</ToggleButton>
                            <ToggleButton value={2} arai-label='sell' className='w-full' onClick={() => setItemInfo({
                                ...itemInfo,
                                status: 2
                            })}>판매완료</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </section>
                <section className='mx-5 my-6'>
                    <div className='text-sm textGray2 font-medium'>분야</div>
                    <div className='mt-6'>
                        <div className='grid grid-cols-4 gap-3'>
                            <span
                                className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${itemInfo.subject === '국어' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}
                                onClick={() => setItemInfo({
                                    ...itemInfo,
                                    subject: "국어"
                                })}
                            >
                                <img src='/images/category1.png' className={`mr-1 ${itemInfo.subject == '국어' ? '' : 'grayscale'}`} style={{ width: '17px', height: '17px' }} />국어
                            </span>

                            <span
                                className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${itemInfo.subject === '영어' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}
                                onClick={() => setItemInfo({
                                    ...itemInfo,
                                    subject: "영어"
                                })}
                            >
                                <img src='/images/category2.png' className={`mr-1 ${itemInfo.subject == '영어' ? '' : 'grayscale'}`} style={{ width: '17px', height: '17px' }} />영어
                            </span>

                            <span
                                className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${itemInfo.subject === '수학' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}
                                onClick={() => setItemInfo({
                                    ...itemInfo,
                                    subject: "수학"
                                })}
                            >
                                <img src='/images/category3.png' className={`mr-1 ${itemInfo.subject == '수학' ? '' : 'grayscale'}`} style={{ width: '17px', height: '17px' }} />수학
                            </span>

                            <span
                                className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${itemInfo.subject === '과학' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}
                                onClick={() => setItemInfo({
                                    ...itemInfo,
                                    subject: "과학"
                                })}
                            >
                                <img src='/images/category4.png' className={`mr-1 ${itemInfo.subject == '과학' ? '' : 'grayscale'}`} style={{ width: '17px', height: '17px' }} />과학
                            </span>

                            <span
                                className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${itemInfo.subject === '사회' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}
                                onClick={() => setItemInfo({
                                    ...itemInfo,
                                    subject: "사회"
                                })}
                            >
                                <img src='/images/category5.png' className={`mr-1 ${itemInfo.subject == '사회' ? '' : 'grayscale'}`} style={{ width: '17px', height: '17px' }} />사회
                            </span>

                            <span
                                className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${itemInfo.subject === '미술' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}
                                onClick={() => setItemInfo({
                                    ...itemInfo,
                                    subject: "미술"
                                })}
                            >
                                <img src='/images/category6.png' className={`mr-1 ${itemInfo.subject == '미술' ? '' : 'grayscale'}`} style={{ width: '17px', height: '17px' }} />미술
                            </span>

                            <span
                                className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${itemInfo.subject === '음악' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}
                                onClick={() => setItemInfo({
                                    ...itemInfo,
                                    subject: "음악"
                                })}
                            >
                                <img src='/images/category7.png' className={`mr-1 ${itemInfo.subject == '음악' ? '' : 'grayscale'}`} style={{ width: '17px', height: '17px' }} />음악
                            </span>

                            <span
                                className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${itemInfo.subject === '체육' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}
                                onClick={() => setItemInfo({
                                    ...itemInfo,
                                    subject: "체육"
                                })}
                            >
                                <img src='/images/category8.png' className={`mr-1 ${itemInfo.subject == '체육' ? '' : 'grayscale'}`} style={{ width: '17px', height: '17px' }} />체육
                            </span>

                            <span
                                className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${itemInfo.subject === '놀이' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}
                                onClick={() => setItemInfo({
                                    ...itemInfo,
                                    subject: "놀이"
                                })}
                            >
                                <img src='/images/category9.png' className={`mr-1 ${itemInfo.subject == '놀이' ? '' : 'grayscale'}`} style={{ width: '17px', height: '17px' }} />놀이
                            </span>

                            <span
                                className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${itemInfo.subject === '기타' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}
                                onClick={() => setItemInfo({
                                    ...itemInfo,
                                    subject: "기타"
                                })}
                            >
                                <img src='/images/category11.png' className={`mr-1 ${itemInfo.subject == '기타' ? '' : 'grayscale'}`} style={{ width: '17px', height: '17px' }} />기타
                            </span>

                            <span
                                className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${itemInfo.subject === '부모' ? 'border-orange5 textOrange5' : 'textGray4 border-gray3'}`}
                                onClick={() => setItemInfo({
                                    ...itemInfo,
                                    subject: "부모"
                                })}
                            >
                                <img src='/images/category12.png' className={`mr-1 ${itemInfo.subject == '부모' ? '' : 'grayscale'}`} style={{ width: '17px', height: '17px' }} />부모
                            </span>
                        </div>
                    </div>
                </section>
                <section className='mx-5 my-6'>
                    <div className='text-sm textGray2 font-medium'>영역</div>
                    <div className='mt-5 flex flex-wrap'>
                        <span className={`block text-sm px-3 py-1.5 border border-solid rounded-sm mr-3 
                                ${itemInfo.field == '대전집' ? 'textOrange5 border-orange5' : 'textGray4 border-gray3'}`} onClick={() => setItemInfo({
                            ...itemInfo,
                            field: "대전집"
                        })}>대전집</span>
                        <span className={`block text-sm px-3 py-1.5 border border-solid rounded-sm mr-3 
                                ${itemInfo.field == '소전집' ? 'textOrange5 border-orange5' : 'textGray4 border-gray3'}`} onClick={() => setItemInfo({
                            ...itemInfo,
                            field: "소전집"
                        })}>소전집</span>
                        <span className={`block text-sm px-3 py-1.5 border border-solid rounded-sm mr-3 
                                ${itemInfo.field == '단행본' ? 'textOrange5 border-orange5' : 'textGray4 border-gray3'}`} onClick={() => setItemInfo({
                            ...itemInfo,
                            field: "단행본"
                        })}>단행본</span>
                        <span className={`block text-sm px-3 py-1.5 border border-solid rounded-sm mr-3 
                                ${itemInfo.field == '기타' ? 'textOrange5 border-orange5' : 'textGray4 border-gray3'}`} onClick={() => setItemInfo({
                            ...itemInfo,
                            field: "기타"
                        })}>기타</span>
                    </div>
                </section>
                {
                    itemInfo.status === 1 ?
                        <section className='mx-5 my-6'>
                            <div className='text-sm textGray2 font-medium'>구매시기 <span className='textGray4'>(선택)</span></div>
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
                                    selected={itemInfo.regDt}
                                    onChange={(date) => setItemInfo({ ...itemInfo, regDt: date })}
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
                    itemInfo.status != 0 ?
                        <section className='mx-5 my-6'>
                            <div className='text-sm textGray2 font-medium'>만족도 <span className='textGray4'>(선택)</span></div>
                            <div className='flex mt-3'>
                                <StarRatings
                                    rating={itemInfo.score}
                                    changeRating={(newVal) => setItemInfo({ ...itemInfo, score: newVal })}
                                    numberOfStars={5}
                                    name='score'
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
        {(saving) ? <CircleLoadingOpacity /> : <></>}
    </>
    )
}

export default AddBook;

AddBook.getInitialProps = async (ctx) => {
    return {
        query: ctx.query
    }
}