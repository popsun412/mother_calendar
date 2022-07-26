import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ApplyMettingOpened2() {

    return <>
        <div className="w-full h-screen flex flex-col overflow-auto border">
            {/* 헤더 */}
            <div className="px-5 py-4 flex items-center">
                <img src="/images/back_ic.png" alt="" className="w-2 h-4" />
                <div className="flex flex-auto justify-center text-sm font-medium textGray1">
                    유료 모임 개설
                </div>
            </div>
            {/* 중간 */}
            <div className="pt-4 px-6 flex flex-col">
                <div className="grid gap-8">
                    <div>
                        <div className="mb-3 text-sm font-medium textGray2">참여자</div>
                        <div className="grid grid-cols-4 gap-3 mb-3 font-normal items-center">
                            <div className="border border-gary3 rounded-md textGray4 text-sm py-2 text-center">1팀</div>
                            <div className="border border-orange5 rounded-md textOrange5 text-sm py-2 text-center">아이랑</div>
                            <div className="border border-gary3 rounded-md textGray2 font-normal text-sm py-2 text-center">엄마만</div>
                            <div className="border border-gary3 rounded-md textGray2 font-normal text-sm py-2 text-center">아빠만</div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-3 text-sm font-medium textGray2">
                            참여자의 아이 연령
                            <span className="textGray4"> (선택)</span>
                        </div>
                        <div className="flex">
                            <div className="flex border border-gary3 rounded-md p-2 text-center justify-center items-center">
                                <span className="textGray4 text-sm font-normal mr-1">최소 나이</span>
                                <img src="/images/chevron-down.png" alt="" className="w-4 h-4" />
                            </div>
                            <div className="mx-1.5 flex items-center">
                                <img src="/images/minus.png" alt="" className="w-3" />
                            </div>
                            <div className="flex border border-gary3 rounded-md p-2 text-center justify-center items-center">
                                <span className="textGray4 text-sm font-normal mr-1">최대 나이</span>
                                <img src="/images/chevron-down.png" alt="" className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-3 text-sm font-medium textGray2">1시간당 가격</div>
                        <div className="flex p-3 border border-color4 rounded-md">
                            <input
                                type='text'
                                placeholder="1시간당 가격을 입력해주세요."
                                className="flex-auto text-sm font-medium text-end focus:outline-none textGray1 placeholder:textGray5 placeholder:text-start"
                            />
                            <span className="textGray2 text-lg font-medium ml-2">원</span>
                        </div>
                    </div>
                    <div>
                        <div className="mb-3 text-sm font-medium textGray2">
                            리더의 제공 사항
                            <span className="textGray4"> (중복가능)</span>
                        </div>
                        <div className="grid grid-cols-3 gap-3 mb-4 font-normal items-center">
                            <div className="border border-gary3 rounded-md textGray2 text-sm py-2 text-center">전집 제공</div>
                            <div className="border border-orange5 rounded-md textOrange5 text-sm py-2 text-center">교구 제공</div>
                            <div className="border border-gary3 rounded-md textGray2 font-normal text-sm py-2 text-center">간식 제공</div>
                            <div className="border border-gary3 rounded-md textGray2 font-normal text-sm py-2 text-center">책 읽어주기</div>
                            <div className="border border-gary3 rounded-md textGray2 text-sm py-2 text-center">교구 활용해주기</div>
                            <div className="border border-orange5 rounded-md textOrange5 text-sm py-2 text-center">직접입력</div>
                        </div>
                        <div className="flex p-3 border border-color4 rounded-md">
                            <input
                                type='text'
                                placeholder="그 외 리더의 역할을 적어주세요."
                                className="flex-auto text-sm font-medium focus:outline-none textGray1 placeholder:textGray5 placeholder:text-start"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="mb-3 text-sm font-medium textGray2">리더의 메시지</div>
                        <div className="bg-gray2 rounded-xl py-9 flex text-center justify-center textGray4 text-sm font-medium mb-3">
                            리더로서 함께 하고 싶은 계획 내용을<br />자세히 소개해주세요. (50자 이상)
                        </div>
                        <div className="grid gap-3 grid-cols-4">

                            <div className="flex flex-col justify-center text-center items-center border border-gary3 rounded-md p-4 w-16 h-16">
                                <img src="/images/component-64.png" alt="" className="w-5 h-4 mb-2" />
                                <p className="textGray3 text-xs font-normal">
                                    <span className="textOrange5">1</span>/3
                                </p>
                            </div>
                            <div className="relative w-16 h-16">
                                <img src="/images/itme.png" alt="" className="w-full" />
                                <img src="/images/ic-delete.png" alt="" className="w-4 h-4 absolute top-[-0.375rem] right-[-0.375rem]" />
                            </div>
                            <div className="relative w-16 h-16">
                                <img src="/images/itme.png" alt="" className="w-full" />
                                <img src="/images/ic-delete.png" alt="" className="w-4 h-4 absolute top-[-0.375rem] right-[-0.375rem]" />
                            </div>
                            <div className="relative w-16 h-16">
                                <img src="/images/itme.png" alt="" className="w-full" />
                                <img src="/images/ic-delete.png" alt="" className="w-4 h-4 absolute top-[-0.375rem] right-[-0.375rem]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}