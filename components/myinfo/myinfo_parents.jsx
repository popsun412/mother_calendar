/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { CameraAlt, Clear } from '@material-ui/icons';
import DaumPostcode from 'react-daum-postcode';
import { profileImageCheck } from "../../util/helper";
import CircleLoadingOpacity from "../../components/common/circle_loading_opacity";
import network from "../../util/network";
import Toast from '../../components/common/toast';


const ParentsInfo = (props) => {
    const [ToastStatus, setToastStatus] = useState(false);
    useEffect(() => {
        if (ToastStatus) setTimeout(() => setToastStatus(false), 1000);
    }, [ToastStatus]);

    const [saving, setSaving] = useState(false);

    const [nickname, setNickname] = useState(props.userInfo.nickName);
    const [address, setAddress] = useState(props.userInfo.address);
    const [detailAddress, setDetailAddress] = useState(props.userInfo.detailAddress ?? "");
    const [tel1, setTel1] = useState(props.userInfo.tel.substr(0, 3));
    const [tel2, setTel2] = useState(props.userInfo.tel.substr(3, 4));
    const [tel3, setTel3] = useState(props.userInfo.tel.substr(7, 4));
    const [interest, setInterest] = useState(props.userInfo.interest);
    const [region, setRegion] = useState(props.userInfo.region);

    const [uploadImage, setUploadImage] = useState({
        image_file: null,
        preview_URL: ''
    });

    const [gender, setGender] = useState(props.userInfo.sex);

    const saveImage = (e) => {
        const fileReader = new FileReader();

        if (e.target.files[0]) {
            fileReader.readAsDataURL(e.target.files[0]);
        }

        fileReader.onload = () => {
            setUploadImage(
                {
                    image_file: e.target.files[0],
                    preview_URL: fileReader.result
                }
            )
        }
    }

    const deleteFileImage = () => {
        props.setUserInfo({
            ...props.userInfo,
            profileImage: null
        });

        setUploadImage({ image_file: null, preview_URL: '' });
    }

    const getButtonActive = () => {
        if (gender != "male" && gender != "female") return false;
        if (tel1.trim() == "" || tel2.trim() == "" || tel3.trim() == "") return false;
        if (address.trim() == "") return false;
        if (detailAddress.trim() == "") return false;
        if (interest != "체험" && interest != "엄마표 교육" && interest != "사교육") return false;

        return true;
    }

    const onSave = async () => {
        setSaving(true);

        const formData = new FormData();
        formData.append('profileImage', props.userInfo.profileImage);

        if (uploadImage.image_file != null) {
            console.log(uploadImage.image_file);
            formData.append('uploadImage', uploadImage.image_file);
        }
        formData.append('nickName', nickname);
        formData.append('sex', gender);
        formData.append('tel', `${tel1}${tel2}${tel3}`);
        formData.append('address', address);
        formData.append('detailAddress', detailAddress);
        formData.append('interest', interest);
        formData.append('region', region);

        const _result = await network.post("/userInfo/update", formData);
        props.setUserInfo({
            ...props.userInfo,
            nickName: _result.data.nickName,
            sex: _result.data.sex,
            tel: _result.data.tel,
            address: _result.data.address,
            detailAddress: _result.data.detailAddress,
            interest: _result.data.interest,
            profileImage: _result.data.profileImage,
            region: _result.data.region,
        });

        setToastStatus(true);
        setSaving(false);
    };

    function sample6_execDaumPostcode() {
        new daum.Postcode({
            oncomplete: function (data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if (data.userSelectedType === 'R') {
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if (data.buildingName !== '' && data.apartment === 'Y') {
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if (extraAddr !== '') {
                        extraAddr = ' (' + extraAddr + ')';
                    }
                } else {
                }

                setAddress(addr);
                setRegion(data.sido);
                setDetailAddress("");
            }
        }).open();
    }

    const selectedInterestStyle = "textOrange4 border-orange5";
    const nonSelectedInterstStyle = "textGray4 border-gray3";

    return (<>
        <div className='mx-5'>
            <div className='mt-9 mb-4'>
                <div className='mb-8'>
                    <div className='relative'>
                        <img src={profileImageCheck(props.userInfo, uploadImage)} className='w-30 h-30 border border-solid rounded-full mx-auto' />
                        <button className='block absolute border border-solid rounded-full bg-white bottom-0 right-4 mr-25' style={{ width: '30px', height: '30px', borderColor: '#FFBCA1' }}>
                            {uploadImage.preview_URL === '' && props.userInfo.profileImage == null
                                ? <>
                                    <label htmlFor='imgUpload' style={{ display: 'inline-block', fontSize: 'inherit', lineHeight: 'normal', verticalAlign: 'middle', cursor: 'pointer' }}>
                                        <CameraAlt style={{ fontSize: '20px', color: '#ff6045', marginBottom: '2px' }} />
                                        <input type='file' id='imgUpload' accept='image/*' onChange={saveImage}
                                            style={{ position: 'absolute', width: 0, height: 0, padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }} />
                                    </label>
                                </>
                                : <Clear style={{ fontSize: '20px', color: '#ff6045', marginBottom: '2px' }} onClick={deleteFileImage} />
                            }
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
                        <input type='text' value={tel1} className='border border-solid border-color4 rounded-md text-center' style={{ height: '44px' }} onChange={(e) => { setTel1(e.currentTarget.value) }} />
                        <input type='text' value={tel2} className='border border-solid border-color4 rounded-md text-center' style={{ height: '44px' }} onChange={(e) => { setTel2(e.currentTarget.value) }} />
                        <input type='text' value={tel3} className='border border-solid border-color4 rounded-md text-center' style={{ height: '44px' }} onChange={(e) => { setTel3(e.currentTarget.value) }} />
                    </div>
                </div>
            </div>
            <div className='mb-8'>
                <div className='mb-4' style={{ fontSize: '15px' }}>주소</div>
                <div className="flex relative mb-2.5" onClick={() => sample6_execDaumPostcode()}>
                    <input type='text'
                        value={address}
                        className='h-9 rounded-md bg-gray2 w-full text-sm px-5 outline-none'
                        readOnly style={{ height: '39px' }}
                    />
                </div>

                {(address.length > 0) ? <input
                    type='text'
                    value={detailAddress}
                    className='h-9 rounded-md bg-gray2 w-full text-sm px-5'
                    style={{ height: '39px' }}
                    onChange={(e) => setDetailAddress(e.currentTarget.value)}
                    placeholder="상세주소"
                /> : <></>}
            </div>
            <div className='mb-8'>
                <div className='mb-4' style={{ fontSize: '15px' }}>주 관심사</div>
                <div className='flex space-x-3 text-center text-base'>
                    <div className={`flex items-center justify-center flex-auto border rounded-md w-11 h-11 ${interest == "체험" ? selectedInterestStyle : nonSelectedInterstStyle}`} onClick={() => setInterest("체험")}>체험</div>
                    <div className={`flex items-center justify-center flex-auto border rounded-md w-11 h-11 ${interest == "엄마표 교육" ? selectedInterestStyle : nonSelectedInterstStyle}`} onClick={() => setInterest("엄마표 교육")}>엄마표 교육</div>
                    <div className={`flex items-center justify-center flex-auto border rounded-md w-11 h-11 ${interest == "사교육" ? selectedInterestStyle : nonSelectedInterstStyle}`} onClick={() => setInterest("사교육")}>사교육</div>
                </div>
            </div>
            <div className='mt-14 mb-9'>
                <button
                    className={`w-full h-12 text-center rounded-md text-white ${getButtonActive() ? "bg5" : "bg-gray4"}`}
                    disabled={!getButtonActive()}
                    onClick={onSave}
                >완료</button>
            </div>
        </div>
        {(saving) ? <CircleLoadingOpacity /> : <></>}
        {ToastStatus && (<><Toast msg={'수정되었습니다.'} /></>)}
    </>)
}

export default ParentsInfo;