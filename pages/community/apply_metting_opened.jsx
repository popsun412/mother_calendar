import React, { useState } from "react";
import { TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ApplyMettingOpened() {

    return <>
        <div className="w-full h-screen flex flex-col border overflow-y-auto">
            {/* 헤더 */}
            <div className="px-5 py-4 flex items-center">
                <img src="/images/back_ic.png" alt="" className="w-2 h-4" />
                <div className="flex flex-auto justify-center text-sm font-medium textGray1">
                    유료 모임 개설
                </div>
            </div>
            {/* 중간 */}
            <div className="pt-4 px-6 flex flex-col">
                <div className="p-5 rounded-lg bg-[rgba(219,239,253,0.50)] mb-8">
                    <strong className="text-[#3C81E1] text-sm font-semibold flex mb-3">
                        <img src="/images/bi-question-circle-fill.png" alt="" className="w-4 h-4 mr-1.5" />
                        유료 모임은 어떻게 진행되나요
                    </strong>
                    <p className="text-[#3C81E1] text-xs font-medium leading-6">
                        유료 모임은 무료 모임과 달리 참가들에게 참여를 위한 비용이<br />
                        부과됩니다. 참여비는 리더에게 지급되며, 리더는 참가자들에게<br />
                        특정 서비스를 제공할 수 있습니다.
                    </p>
                </div>
                <div className="flex mb-7 rounded-lg bg-gray2 py-5 text-center justify-center textGray4 text-sm font-medium">
                    함께 하고 싶은 계획명을 입력해주세요.
                </div>
                <div className="grid gap-8">
                    <div>
                        <div className="mb-3 text-sm font-medium textGray2">분야</div>
                        <div className="grid grid-cols-4 gap-3">
                            <div className="flex px-3 py-2 border border-orange5 rounded-md align-middle items-center justify-center">
                                <img src="/images/category10.png" alt="" className=" w-4 h-4 mr-2" />
                                <span className="text-sm font-medium textOrange5">체험</span>
                            </div>
                            <div className="flex px-3 py-2 border rounded-md align-middle items-center justify-center">
                                <img src="/images/category10_off.png" alt="" className=" w-4 h-4 mr-2" />
                                <span className="text-sm font-medium textGray4">체험</span>
                            </div>
                            <div className="flex px-3 py-2 border rounded-md align-middle items-center justify-center">
                                <img src="/images/category10_off.png" alt="" className=" w-4 h-4 mr-2" />
                                <span className="text-sm font-medium textGray4">체험</span>
                            </div>
                            <div className="flex px-3 py-2 border rounded-md align-middle items-center justify-center">
                                <img src="/images/category10_off.png" alt="" className=" w-4 h-4 mr-2" />
                                <span className="text-sm font-medium textGray4">체험</span>
                            </div>
                            <div className="flex px-3 py-2 border rounded-md align-middle items-center justify-center">
                                <img src="/images/category10_off.png" alt="" className=" w-4 h-4 mr-2" />
                                <span className="text-sm font-medium textGray4">체험</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="mb-3 text-sm font-medium textGray2">
                            날짜
                            <span className="textGray4"> (중복가능)</span>
                        </div>
                        <div>
                            <div className="flex">
                                <div className="flex border border-gary3 rounded-md p-2 text-center justify-center items-center mb-4">
                                    <span className="textGray2 text-sm font-normal mr-1">2022년 10월 21일</span>
                                    <img src="/images/chevron-down.png" alt="" className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 w-3/4">
                                <div className="flex items-center bg-gray2 rounded-md p-2">
                                    <span className="textGray2 text-sm font-normal mr-2.5">2022년 10월 21일</span>
                                    <img src="/images/ic-close_black.png" alt="" className="w-3 h-3" />
                                </div>
                                <div className="flex items-center bg-gray2 rounded-md p-2">
                                    <span className="textGray2 text-sm font-normal mr-2.5">2022년 10월 21일</span>
                                    <img src="/images/ic-close_black.png" alt="" className="w-3 h-3" />
                                </div>
                                <div className="flex items-center bg-gray2 rounded-md p-2">
                                    <span className="textGray2 text-sm font-normal mr-2.5">2022년 10월 21일</span>
                                    <img src="/images/ic-close_black.png" alt="" className="w-3 h-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-3 text-sm font-medium textGray2">시간</div>
                        <div className="flex">
                            <div className="flex border border-gary3 rounded-md p-2 text-center justify-center items-center">
                                <span className="textGray2 text-sm font-normal mr-1">시작 시간</span>
                                <img src="/images/chevron-down.png" alt="" className="w-4 h-4" />
                            </div>
                            <div className="mx-1.5 flex items-center">
                                <img src="/images/minus.png" alt="" className="w-3" />
                            </div>
                            <div className="flex border border-gary3 rounded-md p-2 text-center justify-center items-center">
                                <span className="textGray2 text-sm font-normal mr-1">종료 시간</span>
                                <img src="/images/chevron-down.png" alt="" className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-3 text-sm font-medium textGray2">장소</div>
                        <div className="grid grid-cols-3 gap-3 mb-3">
                            <div className="border border-orange5 rounded-md textOrange5 font-normal text-sm py-2 text-center">우리집</div>
                            <div className="border border-gary3 rounded-md textGray2 font-normal text-sm py-2 text-center">직접입력</div>
                            <div className="border border-gary3 rounded-md textGray2 font-normal text-sm py-2 text-center">온라인</div>
                        </div>
                        <div className="border border-color4 rounded-md p-2 flex justify-between items-center">
                            <div className="text-sm font-medium textGray4">주소를 입력해주세요</div>
                            <img src="/images/ic_search_black.png" alt="" className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}