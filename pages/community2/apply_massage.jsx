import React from "react";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { orange, pink } from '@mui/material/colors';

export default function ApplyMessage() {
    return <>
        <div className="w-full h-screen flex flex-col border relative overflow-y-auto">
            {/* 헤더 */}
            <div className="px-5 py-4 flex items-center">
                <img src="/images/back_ic.png" alt="" className="w-2 h-4" />
                <div className="flex flex-auto justify-center text-sm font-medium textGray1">
                    신청하기
                </div>
            </div>

            <div className="grid gap-6 px-5 py-4">
                <div>
                    <p className="textGray2 text-sm font-medium mb-3">유료 모임을 진행할 시간을 지정해주세요. </p>
                    <div className="flex">
                        <div className="flex justify-center items-center p-2 border border-gary3 rounded-md">
                            <span className="mr-2 textGray2 text-sm font-normal">오후 1시</span>
                            <img src="/images/down.png" alt="" className="w-2 h-1" />
                        </div>
                        <div className="mx-1.5 flex items-center">
                            <img src="/images/minus.png" alt="" className="w-2" />
                        </div>
                        <div className="flex justify-center items-center p-2 border border-gary3 rounded-md">
                            <span className="mr-2 textGray2 text-sm font-normal">오후 4시</span>
                            <img src="/images/down.png" alt="" className="w-2 h-1" />
                        </div>
                    </div>
                </div>

                <div>
                    <p className="textGray2 text-sm font-medium mb-3">유료 모임 관련 요청사항을 입력해주세요.<br />리더가 요청 사항를 확인 후 수락 예정입니다. </p>
                    <div className="textGray4 text-sm font-medium bg-gray2 rounded-lg py-9 flex justify-center items-end text-center">
                        함께 하고 싶은 계획 내용을<br />자세히 입력해주세요.
                    </div>
                </div>

                <div>
                    <p className="textGray2 text-sm font-medium mb-3">내 정보가 정확한지 확인해주세요!<br />리더가 수락 후 아래 전화번호로 유료 모임 안내드립니다. </p>
                    <div className="grid grid-cols-3 gap-3">
                        <div className="flex justify-center items-center p-2 border border-gary3 rounded-md textGray1 text-base font-normal">
                            010
                        </div>
                        <div className="flex justify-center items-center p-2 border border-gary3 rounded-md textGray1 text-base font-normal">
                            2222
                        </div>
                        <div className="flex justify-center items-center p-2 border border-gary3 rounded-md textGray1 text-base font-normal">
                            3333
                        </div>
                    </div>
                </div>

                <div className=" p-5 rounded-xl bg-[rgba(255,214,194,0.7)]">
                    <strong className="textOrange5 text-sm font-semibold">즐거운 유료 모임를 위해 꼭 지켜주세요.</strong>
                    <p className="textOrange5 text-xs font-medium mt-2 mb-3">
                        유료 모임 전 참여가 어려울 경우 리더에게 미리 알려주세요.<br />
                        유료 모임 중에 피해를 주지 않도록 노력해주세요.<br />
                        예약 시간을 준수하고 리더에게 비용을 지불해주세요.
                    </p>
                    <FormGroup className="">
                        <FormControlLabel
                            label="네, 알겠습니다"
                            className="textOrange5 text-xs font-semibold "
                            control={
                                <Checkbox
                                    defaultChecked
                                    sx={{
                                        color: orange[900],
                                        '&.Mui-checked': {
                                            color: orange[900],
                                        },
                                        '& .MuiSvgIcon-root': { fontSize: 18 }
                                    }}
                                />
                            }
                        />
                    </FormGroup>
                </div>
            </div>
        </div>
    </>
}