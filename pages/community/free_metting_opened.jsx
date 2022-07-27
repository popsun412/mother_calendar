/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function FreeMettingOpened() {
    return (
        <>
            <div className="w-full h-screen flex flex-col border">
                {/* 헤더 */}
                <div className="px-5 py-4 flex items-center">
                    <img src="/images/back_ic.png" alt="" className="w-2 h-4" />
                    <div className="flex flex-auto justify-center text-sm font-medium textGray1">무료 모임 개설</div>
                </div>
                {/* 중간 */}
                <div className="pt-4 px-6 flex flex-col">
                    <div className="mb-7">
                        <TextField className="text-center" fullWidth placeholder="함께 하고 싶은 계획명을 입력해주세요." type="text"></TextField>
                    </div>
                    <div className="grid gap-8">
                        <div>
                            <div className="mb-3 text-sm font-medium textGray2">분야</div>
                            <div className="grid grid-cols-4 gap-3">
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
                                <div className="flex px-3 py-2 border rounded-md align-middle items-center justify-center">
                                    <img src="/images/category10_off.png" alt="" className=" w-4 h-4 mr-2" />
                                    <span className="text-sm font-medium textGray4">체험</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="mb-3 text-sm font-medium textGray2">날짜</div>
                            <FormControl fullWidth hiddenLabel="false">
                                <InputLabel>2022년 10월 21일</InputLabel>
                                <Select>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <div className="mb-3 text-sm font-medium textGray2">시간</div>
                            <div className="flex">
                                <FormControl>
                                    <InputLabel>시작 시간</InputLabel>
                                    <Select>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <div className="mx-1.5 flex items-center">
                                    <img src="/images/minus.png" alt="" className="w-3" />
                                </div>
                                <FormControl>
                                    <InputLabel>종료 시간</InputLabel>
                                    <Select>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
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
    );
}
