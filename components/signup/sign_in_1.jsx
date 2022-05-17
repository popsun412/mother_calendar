/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useState } from "react";
import SignupHeader from "./sign_up_header";

export default function SignIn1(props) {
    const _selectSexStyle = "border border-[#FF6035] rounded-md py-2 text-center text-[#FF6035] font-medium";
    const _nonSelectSexStyle = "border border-color4 rounded-md py-2 text-center text-base font-medium textGray4";
    const interests = ["체험", "엄마표 교육", "사교육"];

    return (
        <>
            <SignupHeader step={props.step} setStep={props.setStep} />
            <div className="pt-4 px-5 text-2xl font-normal textGray1">
                회원님 정보를 입력해주세요.
            </div>
            <div className="pt-9 px-5 space-y-9 h-screen">
                <div className="space-y-4">
                    <span className="text-sm font-medium textGray1">닉네임</span>
                    <div className="border border-color4 rounded-md py-2.5 px-5">
                        <input
                            className="placeholder-[#bdbdbd] text-base font-normal w-full"
                            type="text"
                            placeholder="ex. OO맘"
                            value={props.signupInfo.nickName}
                            onChange={(e) => props.setSignupInfo({ ...props.signupInfo, nickName: e.currentTarget.value })}
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <span className="text-sm font-medium textGray1">성별</span>
                    <div className="grid grid-cols-2 gap-3 items-center justify-center">
                        <div
                            className={(props.signupInfo.sex == "female") ? _selectSexStyle : _nonSelectSexStyle}
                            onClick={() => props.setSignupInfo({ ...props.signupInfo, sex: "female" })}
                        >여성</div>
                        <div
                            className={(props.signupInfo.sex == "male") ? _selectSexStyle : _nonSelectSexStyle}
                            onClick={() => props.setSignupInfo({ ...props.signupInfo, sex: "male" })}
                        >남성</div>
                    </div>
                </div>

                <div className="space-y-4">
                    <span className="text-sm font-medium textGray1">전화번호</span>
                    <form className="">
                        <div className="items-center justify-center grid grid-cols-3 gap-3">
                            <input type="number" className="border border-color4 rounded-md py-2 text-center placeholder-[#333333] text-base font-normal" placeholder="010" value={props.signupInfo.tel1} required disabled />
                            <input type="number" className="border border-color4 rounded-md py-2 text-center text-base font-normal" value={props.signupInfo.tel2} onChange={(e) => props.setSignupInfo({ ...props.signupInfo, tel2: e.currentTarget.value })} />
                            <input type="number" className="border border-color4 rounded-md py-2 text-center text-base font-normal" value={props.signupInfo.tel3} onChange={(e) => props.setSignupInfo({ ...props.signupInfo, tel3: e.currentTarget.value })} />
                        </div>
                    </form>
                </div>

                <div className="space-y-4">
                    <span className="text-sm font-medium textGray1">주소</span>
                    <div className="text-sm font-medium p-2.5 flex items-center justify-start textGray4 bg-gray2 rounded-md">
                        <svg className="w-6 h-6 mr-2.5 textGray1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        지번, 도로명, 건물명으로 검색
                    </div>
                </div>

                <div className="space-y-4 mb-10">
                    <span className="text-sm font-medium textGray1">주 관심사</span>
                    <div className="grid grid-cols-3 gap-3 text-center text-sm font-medium textGray4">
                        {(interests.map((_interest, index) => {
                            const _check = props.signupInfo.interest.findIndex((_item) => _item == _interest);

                            return (
                                <div
                                    key={index}
                                    className={`border rounded-md py-2 ${_check >= 0 ? "text-[#FF6035] border-[#FF6035]" : "border-color4"}`}
                                    onClick={() => {
                                        if (_check >= 0) props.signupInfo.interest.splice(_check, 1)
                                        if (_check < 0) props.signupInfo.interest.push(_interest);
                                        props.setSignupInfo({ ...props.signupInfo })
                                    }}
                                >
                                    {_interest}
                                </div>
                            );
                        }))}
                    </div>
                </div>

                <div className="bg-gray3 rounded-md hover:bg-[#ff6035]">
                    <button className="w-full py-4 text-sm font-semibold text-white" onClick={() => props.setStep(2)}>다음</button>
                </div>
            </div>
        </>
    )
}