/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

export default function FeedReport(props) {
    const [value, setValue] = useState("");

    return (
        <div className="bg-white flex flex-col items-center">
            <div className="py-2 border-b border-gray4 w-full text-center">
                <h3 className="text-lg font-black">신고</h3>
            </div>
            <div className="p-5 flex flex-col items-center w-full">
                <span className="textGray4 text-sm mb-2">문제에 대해 자세히 알려주세요</span>
                <div className="bg-gray3 rounded-xl w-full flex space-x-2 py-2 px-2 items-center mb-4">
                    <input type="text" className="border border-solid border-color4 rounded-md bg-transparent outline-none flex-auto px-2" placeholder="무엇을 신고하시겠어요?" value={value} onChange={(e) => setValue(e.currentTarget.value)} />
                </div>
                <div
                    className="border-orange4 w-full border rounded h-12 mx-5 mb-6 flex justify-center items-center text-white text-sm font-semibold hover:cursor-pointer"
                    onClick={() => props.onReport(value)}
                >
                    <span className="textOrange5">신고</span>
                </div>
            </div>
        </div>
    )
}