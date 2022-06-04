/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import SignUpBabyAvatar from "../../components/signup/sign_up_baby_avatar";
import CustomMobileDatepicker from "../../components/common/custom_mobile_datepicker";
import CircleLoadingOpacity from "../../components/common/circle_loading_opacity";
import network from "../../util/network";
import moment from "moment";

const ChildrenInfo = (props) => {
    const [saving, setSaving] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const addBaby = () => {
        if (props.userInfo.babys.length >= 5) {
            return;
        }

        setSelectedIndex((props.userInfo.babys.length));
        props.setUserInfo({ ...props.userInfo, babys: props.userInfo.babys.concat([{ babyUid: null, birth: moment().format("YYYY-MM-DD"), sex: "female" }]) });
    }

    const babyAge = (_datetime) => {
        const nowDate = moment(_datetime);
        return `${moment().year() - nowDate.year() + 1}세`;
    }

    // 성별 변경
    const changeSex = (_sex) => {
        props.userInfo.babys[selectedIndex].sex = _sex;
        props.setUserInfo({ ...props.userInfo, babys: props.userInfo.babys });
    }

    // 생일 변경
    const changeBirth = (datetime) => {
        props.userInfo.babys[selectedIndex].birth = moment(datetime).format("YYYY-MM-DD");
        props.setUserInfo({ ...props.userInfo, babys: props.userInfo.babys });
    }

    // 아이 정보 저장
    const onSave = async () => {
        setSaving(true);

        const _result = await network.put('/userInfo/babys', { babys: props.userInfo.babys });

        console.log(_result);

        setSaving(false);
    }

    return (
        <>
            <div className="pt-9 px-5 space-y-9">
                <div className="flex space-x-4">
                    {props.userInfo.babys.map((_item, index) =>
                        <SignUpBabyAvatar
                            key={index}
                            index={index}
                            active={index == selectedIndex}
                            onClick={() => setSelectedIndex(index)}
                            onDelete={() => {
                                props.userInfo.babys.splice(index, 1);
                                if (selectedIndex > (props.userInfo.babys.length - 1)) setSelectedIndex(props.userInfo.babys.length - 1);
                                props.setUserInfo({ ...props.userInfo, babys: [].concat(props.userInfo.babys) });
                            }}
                            deleteActive={props.userInfo.babys.length > 1}
                        />
                    )}
                    {(
                        props.userInfo.babys.length < 5 ? <button className="rounded-full w-9 h-9 border-dashed border-gary3 border flex items-center justify-center" onClick={addBaby}>
                            <svg className="w-6 h-6 text-[#bdbdbd]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                        </button> : <></>
                    )}
                </div>
                <div className="space-y-4">
                    <span className="text-sm font-medium textGray1">아이 생년월일</span>
                    <CustomMobileDatepicker
                        onChange={changeBirth}
                        value={moment(props.userInfo.babys[selectedIndex].birth).toDate()}
                        auto={true}
                    >
                        <div className="flex w-full space-x-3 text-center text-base font-normal textGray1 items-center justify-center">
                            <div className="flex-auto border border-color4 rounded-md py-2 col-span-3 text-center outline-none appearance-none bg-white">
                                <span>{`${moment(props.userInfo.babys[selectedIndex].birth).year()}년`}</span>
                            </div>
                            <div className="flex-auto border border-color4 rounded-md py-2 col-span-3 text-center outline-none appearance-none bg-white">
                                <span>{`${moment(props.userInfo.babys[selectedIndex].birth).format("M월")}`}</span>
                            </div>
                            <div className="flex-auto border border-color4 rounded-md py-2 col-span-3 text-center outline-none appearance-none bg-white">
                                <span>{`${moment(props.userInfo.babys[selectedIndex].birth).format("D일")}`}</span>
                            </div>
                            <div className="py-2 textOrange4">{babyAge(props.userInfo.babys[selectedIndex].birth)}</div>
                        </div>
                    </CustomMobileDatepicker>
                </div>
                <div className="space-y-4">
                    <span className="text-sm font-medium textGray1">아이 성별</span>
                    <div className="grid grid-cols-2 gap-3 items-center justify-center">
                        <div className={`border rounded-md py-2 text-center font-medium ${(props.userInfo.babys[selectedIndex].sex == 'female') ? " border-[#FF6035] text-[#FF6035]" : "border-color4  textGray4"}`} onClick={() => changeSex("female")}>여아</div>
                        <div className={`border rounded-md py-2 text-center font-medium ${(props.userInfo.babys[selectedIndex].sex == 'male') ? " border-[#FF6035] text-[#FF6035]" : "border-color4  textGray4"}`} onClick={() => changeSex("male")}>남아</div>
                    </div>
                </div>
                <div className="rounded-md bg-[#ff6035] absolute bottom-6 left-6 right-6">
                    <button
                        className="w-full py-4 text-sm font-semibold text-white"
                        onClick={onSave}
                    >완료</button>
                </div>
            </div>
            {(saving) ? <CircleLoadingOpacity /> : <></>}
        </>
    )
}

export default ChildrenInfo;