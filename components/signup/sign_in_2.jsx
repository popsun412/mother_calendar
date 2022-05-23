/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import SignupHeader from "./sign_up_header";
import SignUpBabyAvatar from "./sign_up_baby_avatar";
import { useState } from "react";

export default function SignIn2(props) {
    const addBaby = () => {
        props.signupInfo.babys.push({ year: "2022", month: "01", day: "01", sex: "" })
        props.setSignupInfo({ ...props.signupInfo, babys: props.signupInfo.babys });
        setSelectedIndex((props.signupInfo.babys.length - 1));
    }

    const babyAge = (year) => {
        const nowDate = new Date();

        return `${nowDate.getFullYear() - year + 1}살`;
    }

    // 성별 변경
    const changeSex = (_sex) => {
        props.signupInfo.babys[selectedIndex].sex = _sex;
        props.setSignupInfo({ ...props.signupInfo, babys: props.signupInfo.babys });
    }

    const [selectedIndex, setSelectedIndex] = useState(0);

    const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
    const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", 10, 11, 12];
    const days = ["01", "02", "03", "04", "05", "06", "07", "08", "09", 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    return (
        <div className="h-screen relative">
            <SignupHeader step={props.step} setStep={props.setStep} />
            <div className="pt-4 px-5 text-2xl font-normal textGray1">
                아이 정보를 입력해주세요.
            </div>
            <div className="pt-9 px-5 space-y-9">
                <div className="flex space-x-4">
                    {props.signupInfo.babys.map((_item, index) =>
                        <SignUpBabyAvatar key={index} active={index == selectedIndex} onClick={() => setSelectedIndex(index)} />
                    )}
                    <button className="rounded-full w-9 h-9 border-dashed border-gary3 border flex items-center justify-center" onClick={addBaby}>
                        <svg className="w-6 h-6 text-[#bdbdbd]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                    </button>
                </div>
                <div className="space-y-4">
                    <span className="text-sm font-medium textGray1">아이 생년월일</span>
                    <div className="grid grid-cols-8 gap-3 text-center text-base font-normal textGray1 items-center justify-center">
                        <select
                            value={props.signupInfo.babys[selectedIndex].year}
                            className="border border-color4 rounded-md py-2 col-span-3 text-center outline-none appearance-none"
                            onChange={(e) => {
                                props.signupInfo.babys[selectedIndex].year = e.currentTarget.value;
                                props.setSignupInfo({ ...props.signupInfo, babys: props.signupInfo.babys });
                            }}
                        >
                            {years.map((_year, index) => <option value={_year} key={index}>{_year}년</option>)}
                        </select>
                        <select
                            value={props.signupInfo.babys[selectedIndex].month}
                            className="border border-color4 rounded-md py-2 col-span-2 text-center outline-none appearance-none"
                            onChange={(e) => {
                                props.signupInfo.babys[selectedIndex].month = e.currentTarget.value;
                                props.setSignupInfo({ ...props.signupInfo, babys: props.signupInfo.babys });
                            }}
                        >
                            {months.map((_month, index) => <option value={_month} key={index}>{_month}월</option>)}
                        </select>
                        <select
                            value={props.signupInfo.babys[selectedIndex].day}
                            className="border border-color4 rounded-md py-2 col-span-2 text-center outline-none appearance-none"
                            onChange={(e) => {
                                props.signupInfo.babys[selectedIndex].day = e.currentTarget.value;
                                props.setSignupInfo({ ...props.signupInfo, babys: props.signupInfo.babys });
                            }}
                        >
                            {days.map((_day, index) => <option value={_day} key={index}>{_day}일</option>)}
                        </select>
                        <div className="py-2 textOrange4">{babyAge(props.signupInfo.babys[selectedIndex].year)}</div>
                    </div>
                </div>
                <div className="space-y-4">
                    <span className="text-sm font-medium textGray1">아이 성별</span>
                    <div className="grid grid-cols-2 gap-3 items-center justify-center">
                        <div className={`border rounded-md py-2 text-center font-medium ${(props.signupInfo.babys[selectedIndex].sex == 'female') ? " border-[#FF6035] text-[#FF6035]" : "border-color4  textGray4"}`} onClick={() => changeSex("female")}>여아</div>
                        <div className={`border rounded-md py-2 text-center font-medium ${(props.signupInfo.babys[selectedIndex].sex == 'male') ? " border-[#FF6035] text-[#FF6035]" : "border-color4  textGray4"}`} onClick={() => changeSex("male")}>남아</div>
                    </div>
                </div>
                <div className="bg-gray3 rounded-md hover:bg-[#ff6035] absolute bottom-6 left-6 right-6">
                    <button
                        className="w-full py-4 text-sm font-semibold text-white"
                        onClick={() => {
                            props.setStep(3)
                        }}
                    >다음</button>
                </div>
            </div>
        </div>
    )
}