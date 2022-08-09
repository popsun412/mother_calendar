import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { ChevronRight } from "@mui/icons-material";

export default function FreeMettingOpened2() {

    return <>
        <div className="w-full h-screen flex flex-col border">
            {/* 헤더 */}
            <div className="px-5 py-4 flex items-center">
                <img src="/images/back_ic.png" alt="" className="w-2 h-4" />
                <div className="flex flex-auto justify-center text-sm font-medium textGray1">
                    무료 모임 개설
                </div>
            </div>
            {/* 중간 */}
            <div className="pt-4 px-6 flex flex-col">
                <div className="flex flex-col space-y-8">
                    <div>
                        <div className="mb-3 text-sm font-medium textGray2">참여자</div>
                        <div className="grid grid-cols-4 gap-3 mb-3 font-normal items-center">
                            <div className="border border-gary3 rounded-md py-1.5 text-center">
                                <span className="textGray4 text-sm font-normal">팀 수</span>
                                <ChevronRight className="rotate-90" />
                            </div>
                            <div className="border border-orange5 rounded-md textOrange5 font-normal text-sm py-2 text-center">아이랑</div>
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
                            <div className="border border-gary3 rounded-md p-2 text-center">
                                <span className="textGray4 text-sm font-normal">최소 나이</span>
                                <ChevronRight className="rotate-90" />
                            </div>
                            <div className="mx-1.5 flex items-center">
                                <img src="/images/minus.png" alt="" className="w-3" />
                            </div>
                            <div className="border border-gary3 rounded-md p-2 text-center">
                                <span className="textGray4 text-sm font-normal">최대 나이</span>
                                <ChevronRight className="rotate-90" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-3 text-sm font-medium textGray2">리더의 메시지</div>
                        <div className="bg-gray2 rounded-xl py-9 flex text-center justify-center textGray4 text-sm font-medium align-middle">
                            리더로서 함께 하고 싶은 계획 내용을<br />자세히 소개해주세요. (50자 이상)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}