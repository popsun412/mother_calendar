import React, { useState, useEffect } from 'react';
import { CameraAlt, Clear } from '@material-ui/icons';
import DaumPostcode from 'react-daum-postcode';

const ParentsInfo = () => {

    const data = {
        nickname: '세림맘',
        gender: 'female',
        phone: '010-2222-3333',
        address: '서울시 중구 한강대로 421',
        interest: '체험,엄마표 교육,사교육'
    }

    const [open, setOpen] = useState(false);
    const [nickname, setNickname] = useState(data.nickname);
    const [address, setAddress] = useState('서울시 용산구 청파동 101-10');
    const [phone, setPhone] = useState(data.phone.split('-'));
    const interest = data.interest.split(',');
    const [image, setImage] = useState({
        image_file: '',
        preview_URL: ''
    });
    const [gender, setGender] = useState(data.gender);
    const [loaded, setLoaded] = useState('loading');

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

    const deleteFileImage = () => {
        setImage({ image_file: '', preview_URL: '' });
    }

    const onCompletePost = (data) => {
        setAddress(data.address);
        setOpen(false);
    }

    return (
        <div className='mx-5'>
            <div className='mt-9 mb-4'>
                <div className='mb-8'>
                    <div className='relative'>
                        <img src={`${image.preview_URL !== '' ? image.preview_URL : '/images/img_profile_'}${image.preview_URL === '' && gender === 'female' ? 'mom@2x.png' : image.preview_URL === '' && gender === 'male' ? 'dad@2x.png' : ''}`}
                            className='w-30 h-30 border border-solid rounded-full mx-auto' />
                        <button className='block absolute border border-solid rounded-full bg-white bottom-0 right-0 mr-25' style={{ width: '30px', height: '30px', borderColor: '#FFBCA1' }}>
                            <label htmlFor='imgUpload' style={{ display: 'inline-block', fontSize: 'inherit', lineHeight: 'normal', verticalAlign: 'middle', cursor: 'pointer' }}>
                                {
                                    image.preview_URL === '' ?
                                        <CameraAlt style={{ fontSize: '20px', color: '#ff6045', marginBottom: '2px' }} /> :
                                        <Clear style={{ fontSize: '20px', color: '#ff6045', marginBottom: '2px' }} onClick={deleteFileImage} />
                                }
                            </label>
                            <input type='file' id='imgUpload' accept='image/*' onChange={saveImage}
                                style={{ position: 'absolute', width: 0, height: 0, padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }} />
                        </button>
                    </div>
                </div>
                <div>
                    <div>
                        <input type='text' value={nickname} className='border border-solid border-color4 rounded-md text-center text-lg w-full'
                            style={{ height: '44px', lineHeight: '44px' }} onChange={(e) => { setNickname(e.target.value) }} />
                    </div>
                    <div className='mt-4 text-xs textGray4 text-center'>프로필 사진과 닉네임을 입력해주세요.</div>
                </div>
            </div>
            <div className='mb-8'>
                <div className='mb-4' style={{ fontSize: '15px' }}>성별</div>
                <div className='grid grid-cols-2 w-full gap-x-3'>
                    <label className='relative'>
                        <input type='checkbox' value='female' className='absolute top-0 left-0 opacity-0 hidden' onChange={(e) => { setGender('female') }} />
                        <span className={`border border-solid rounded-md text-base flex w-full box-border justify-center ${gender === 'female' ? 'border-orange5 textOrange5' : 'border-color4 textColor4'}`}
                            style={{ height: '46px', lineHeight: '46px' }}>여성</span>
                    </label>
                    <label className='relative'>
                        <input type='checkbox' value='male' className='absolute top-0 left-0 opacity-0 hidden' onChange={(e) => { setGender('male') }} />
                        <span className={`border border-solid rounded-md text-base flex w-full box-border justify-center ${gender === 'male' ? 'border-orange5 textOrange5' : 'border-color4 textColor4'}`}
                            style={{ height: '46px', lineHeight: '46px' }}>남성</span>
                    </label>
                </div>
            </div>
            <div className='mb-8'>
                <div className='mb-4' style={{ fontSize: '15px' }}>휴대폰번호</div>
                <div className=''>
                    <div className='grid grid-cols-3 w-full gap-x-3'>
                        <input type='text' value={phone[0]} className='border border-solid border-color4 rounded-md text-center' style={{ height: '44px' }} onChange={(e) => { }} />
                        <input type='text' value={phone[1]} className='border border-solid border-color4 rounded-md text-center' style={{ height: '44px' }} onChange={(e) => { }} />
                        <input type='text' value={phone[2]} className='border border-solid border-color4 rounded-md text-center' style={{ height: '44px' }} onChange={(e) => { }} />
                    </div>
                </div>
            </div>
            <div className='mb-8'>
                <div className='mb-4' style={{ fontSize: '15px' }}>주소</div>
                <div className='relative'>
                    {
                        address.length > 0 ?
                            <>
                                <input type='text' value={address} className='h-9 rounded-md bg-gray2 w-full text-sm px-5' readOnly style={{ height: '39px' }} />
                                <i className='block absolute top-1/2 right-0 mr-3 text-sm textBlue4 not-italic' style={{ transform: 'translateY(-50%)' }} onClick={() => { setOpen(!open) }}>수정</i>
                                {
                                    open ?
                                        <DaumPostcode autoClose onComplete={onCompletePost} /> : ''
                                }
                            </>
                            : <>
                                <i className='block absolute top-1/2 left-2.5'>
                                    <img src='/images/ic_search_black.png' className='w-4 h-4' style={{ transform: 'translateY(-50%)' }} />
                                </i>
                                <input type='text' placeholder='지번, 도로명, 건물명으로 검색' className='h-9 rounded-md bg-gray2 w-full text-sm pr-3' style={{ paddingLeft: '38px', height: '39px' }} onChange={() => { }} />
                            </>
                    }

                </div>
            </div>
            <div className='mb-8'>
                <div className='mb-4' style={{ fontSize: '15px' }}>주 관심사</div>
                <div className='grid grid-cols-3 gap-x-3 text-center textGray4 text-base'>
                    <div className='border border-b border-gray3 rounded-md' style={{ height: '44px', lineHeight: '44px' }}>{interest[0]}</div>
                    <div className='border border-b border-gray3 rounded-md' style={{ height: '44px', lineHeight: '44px' }}>{interest[1]}</div>
                    <div className='border border-b border-gray3 rounded-md' style={{ height: '44px', lineHeight: '44px' }}>{interest[2]}</div>
                </div>
            </div>
            <div className='mt-14 mb-9'>
                <button className='w-full h-12 text-center bg-gray3 rounded-md text-white' disabled={true}>완료</button>
            </div>
        </div>
    )
}

export default ParentsInfo;