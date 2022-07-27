/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CustomMobileDatepicker from "../../components/common/custom_mobile_datepicker";
import CustomTimepicker from "../../components/common/custom_timepicker";
import moment from "moment";
import { ChevronRight } from "@mui/icons-material";

export default function ApplyMettingOpened() {
    return (
        <>
            <div className="w-full h-screen flex flex-col border overflow-y-auto">
                {/* 헤더 */}
                <div className="px-5 py-4 flex items-center">
                    <img src="/images/back_ic.png" alt="" className="w-2 h-4" />
                    <div className="flex flex-auto justify-center text-sm font-medium textGray1">유료 모임 개설</div>
                </div>
                <div className="grid gap-8">
                    <div>
                        <div className="mb-3 text-sm font-medium textGray2">분야</div>
                        <div className="grid grid-cols-4 gap-3">
                            <div className="flex items-center py-2 border rounded justify-center border-gary3 textGray4 space-x-1">
                                <img src="/images/category10_off.png" className="w-4 h-4" />
                                <span className="text-sm font-medium">체험</span>
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
                            <div className="max-w-fit">
                                <CustomMobileDatepicker>
                                    <div className="flex-auto border border-gary3 rounded-md text-sm textGray2 text-center py-1 flex items-center justify-center">
                                        <span className="text-xs font-medium pl-2">{moment().format("YYYY년 M월 D일")}</span>
                                        <ChevronRight className="rotate-90" />
                                    </div>
                                </CustomMobileDatepicker>
                            </div>

                            <div className="flex flex-wrap gap-2.5">
                                <div className="flex items-center bg-gray2 rounded-md p-2">
                                    <span className="textGray2 text-sm font-normal mr-2.5">2022년 10월 21일</span>
                                    <img src="/images/ic-close_black.png" alt="" className="w-3 h-3" />
                                </div>
                                <div className="flex items-center bg-gray2 rounded-md p-2">
                                    <span className="textGray2 text-sm font-normal mr-2.5">2022년 10월 21일</span>
                                    <img src="/images/ic-close_black.png" alt="" className="w-3 h-3" />
                                </div>
                                <div className="flex border border-gary3 rounded-md p-2 text-center justify-center items-center">
                                    <span className="textGray2 text-sm font-normal mr-1">종료 시간</span>
                                    <img src="/images/chevron-down.png" alt="" className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-3 text-sm font-medium textGray2">시간</div>
                        <div className="flex">
                            <CustomTimepicker>
                                <div className="flex-auto border border-gary3 rounded-md text-sm textGray2 text-center py-1 flex items-center justify-center">
                                    <span className={`text-sm font-medium pl-2`}>시작 시간</span>
                                    <ChevronRight className="rotate-90" />
                                </div>
                            </CustomTimepicker>
                            <div className="mx-1.5 flex items-center">
                                <img src="/images/minus.png" alt="" className="w-3" />
                            </div>
                            <CustomTimepicker>
                                <div className="flex-auto border border-gary3 rounded-md text-sm textGray2 text-center py-1 flex items-center justify-center">
                                    <span className={`text-sm font-medium pl-2`}>종료 시간</span>
                                    <ChevronRight className="rotate-90" />
                                </div>
                            </CustomTimepicker>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
