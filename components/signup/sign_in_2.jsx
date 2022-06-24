/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import SignupHeader from "./sign_up_header";
import SignUpBabyAvatar from "./sign_up_baby_avatar";
import { useState } from "react";
import moment from "moment";
import CustomMobileDatepicker from "../../components/common/custom_mobile_datepicker";

export default function SignIn2(props) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const addBaby = () => {
        if (props.signupInfo.babys.length >= 5) {
            return;
        }

        setSelectedIndex((props.signupInfo.babys.length));
        props.setSignupInfo({ ...props.signupInfo, babys: props.signupInfo.babys.concat([{ birth: null, sex: null }]) });
    }

    const babyAge = (_datetime) => {
        if (_datetime == null) return "세";

        const nowDate = moment(_datetime);
        return `${moment().year() - nowDate.year() + 1}세`;
    }

    // 생일 변경
    const changeBirth = (datetime) => {
        props.signupInfo.babys[selectedIndex].birth = moment(datetime).format("YYYY-MM-DD");
        props.setSignupInfo({ ...props.signupInfo, babys: props.signupInfo.babys });
    }

    // 성별 변경
    const changeSex = (_sex) => {
        props.signupInfo.babys[selectedIndex].sex = _sex;
        props.setSignupInfo({ ...props.signupInfo, babys: props.signupInfo.babys });
    }

    const nextActive = () => {
        const _findIndex = props.signupInfo.babys.findIndex((_baby) => _baby.birth == null || _baby.sex == null);
        return _findIndex < 0;
    }

    return (
        <div className="h-screen relative">
            <SignupHeader step={props.step} setStep={props.setStep} />
            <div className="pt-4 px-5 text-2xl font-normal textGray1" style={{ fontFamily: "Bazzi" }}>
                아이 정보를 입력해주세요.
            </div>
            <div className="pt-9 px-5 space-y-9">
                <div className="flex space-x-4">
                    {props.signupInfo.babys.map((_item, index) =>
                        <SignUpBabyAvatar
                            key={index}
                            index={index}
                            active={index == selectedIndex}
                            onClick={() => {
                                setSelectedIndex(index);
                            }}
                            onDelete={() => {
                                props.signupInfo.babys.splice(index, 1);
                                if (selectedIndex > (props.signupInfo.babys.length - 1)) setSelectedIndex(props.signupInfo.babys.length - 1);
                                props.setSignupInfo({ ...props.signupInfo, babys: [].concat(props.signupInfo.babys) });
                            }}
                            deleteActive={props.signupInfo.babys.length > 1}
                        />
                    )}
                    {props.signupInfo.babys.length < 5 ? <button className="rounded-full w-9 h-9 border-dashed border-gary3 border flex items-center justify-center" onClick={addBaby}>
                        <svg className="w-6 h-6 text-[#bdbdbd]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                    </button> : <></>}
                </div>
                <div className="space-y-4">
                    <span className="text-sm font-medium textGray1">아이 생년월일</span>
                    <CustomMobileDatepicker
                        onChange={changeBirth}
                        maxDate={moment().add(1, "Y").toDate()}
                        value={moment(props.signupInfo.babys[selectedIndex].birth).toDate()}
                    >
                        <div className={`flex w-full space-x-3 text-center text-base font-normal textGray1 items-center justify-center ${props.signupInfo.babys[selectedIndex].birth == null ? "textGray4" : ""}`}>
                            <div className="flex-auto border border-color4 rounded-md py-2 col-span-3 text-center outline-none appearance-none bg-white">
                                <span>{`${props.signupInfo.babys[selectedIndex].birth == null ? "년" : moment(props.signupInfo.babys[selectedIndex].birth).format("YYYY년")}`}</span>
                            </div>
                            <div className="flex-auto border border-color4 rounded-md py-2 col-span-3 text-center outline-none appearance-none bg-white">
                                <span>{`${props.signupInfo.babys[selectedIndex].birth == null ? "월" : moment(props.signupInfo.babys[selectedIndex].birth).format("M월")}`}</span>
                            </div>
                            <div className="flex-auto border border-color4 rounded-md py-2 col-span-3 text-center outline-none appearance-none bg-white">
                                <span>{`${props.signupInfo.babys[selectedIndex].birth == null ? "일" : moment(props.signupInfo.babys[selectedIndex].birth).format("D일")}`}</span>
                            </div>
                            <div className="py-2 textOrange4">{babyAge(props.signupInfo.babys[selectedIndex].birth)}</div>
                        </div>
                    </CustomMobileDatepicker>
                </div>
                <div className="space-y-4">
                    <span className="text-sm font-medium textGray1">아이 성별</span>
                    <div className="grid grid-cols-2 gap-3 items-center justify-center">
                        <div className={`border rounded-md py-2 text-center font-medium ${(props.signupInfo.babys[selectedIndex].sex == 'female') ? " border-[#FF6035] text-[#FF6035]" : "border-color4  textGray4"}`} onClick={() => changeSex("female")}>여아</div>
                        <div className={`border rounded-md py-2 text-center font-medium ${(props.signupInfo.babys[selectedIndex].sex == 'male') ? " border-[#FF6035] text-[#FF6035]" : "border-color4  textGray4"}`} onClick={() => changeSex("male")}>남아</div>
                    </div>
                </div>
                <div className={`${nextActive() ? "bg-[#ff6035]" : "bg-gray3"} rounded-md absolute bottom-6 left-6 right-6`}>
                    <button
                        className="w-full py-4 text-sm font-semibold text-white"
                        disabled={!nextActive()}
                        onClick={() => { props.setStep(3) }}
                    >다음</button>
                </div>
            </div>
        </div>
    )
}