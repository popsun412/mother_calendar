/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';

export default function FeedFilter(props) {
    const STEP = 1;
    const MIN = 1;
    const MAX = 4;
    const [values, setValues] = useState(props.param.age);

    return <>
        <div className='my-2.5 flex flex-col h-full items-stretch'>
            <div className='mx-3.5'>
                <img src='/images/ic_close.png' className='ml-auto w-6' onClick={() => props.setFilterOpen(false)} />
            </div>

            <div className='mb-7 mx-3.5'>
                <h3 className='mb-4 text-base font-semibold'>계획 분야 <span className="textGray4 text-xs">(필터)</span></h3>
                <div className='flex flex-wrap'>
                    {["국어", "영어", "수학", "과학", "사회", "미술", "음악", "체육", "놀이", "기타", "부모"].map((_subject, index) => {
                        const _checkIndex = props.param.subjects.findIndex((_item) => _item == _subject);
                        return (
                            <div className={`py-2 px-2 mr-3 mb-3 rounded border text-center ${_checkIndex >= 0 ? "border-orange4 textOrange4" : "border-gray4 textGray4"}`} key={index} onClick={() => {
                                if (_checkIndex >= 0) {
                                    props.param.subjects.splice(_checkIndex, 1);
                                } else {
                                    props.param.subjects.push(_subject);
                                }

                                props.setParam({ ...props.param, subjects: [].concat(props.param.subjects) });
                            }}>
                                <span>{_subject}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='mb-7 mx-3.5'>
                <h3 className='mb-4 text-base font-semibold'>사는 지역 <span className="textGray4 text-xs">(필터)</span></h3>
                <div className='flex justify-between space-x-2'>
                    {["서울", "경기", "기타"].map((_region, index) => {
                        const _checkIndex = props.param.regions.findIndex((_item) => _item == _region);

                        return (
                            <div className={`flex-auto py-2 px-3 rounded border text-center ${_checkIndex >= 0 ? "border-orange4 textOrange4" : "border-gray4 textGray4"}`} key={index} onClick={() => {
                                if (_checkIndex >= 0) {
                                    props.param.regions.splice(_checkIndex, 1);
                                } else {
                                    props.param.regions.push(_region);
                                }

                                props.setParam({ ...props.param, region: [].concat(props.param.regions) });
                            }}>
                                <span>{_region}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='mx-3.5'>
                <h3 className='mb-4 text-base font-semibold'>아이 연령 <span className="textGray4 text-xs">(필터)</span></h3>
                <div className='w-full justify-center'>
                    <div className='my-0 mx-2.5'>
                        <Range
                            values={values}
                            step={STEP}
                            min={MIN}
                            max={MAX}
                            onChange={values => {
                                setValues(values);
                                props.setParam({ ...props.param, age: values });
                            }}
                            renderTrack={({ props, children }) => (
                                <div
                                    onMouseDown={props.onMouseDown}
                                    onTouchStart={props.onTouchStart}
                                    style={{
                                        ...props.style,
                                        height: "36px",
                                        display: "flex",
                                        width: "100%"
                                    }}
                                >
                                    <div
                                        ref={props.ref}
                                        style={{
                                            height: "5px",
                                            width: "100%",
                                            borderRadius: "4px",
                                            background: getTrackBackground({
                                                values,
                                                colors: ["#ccc", "#548BF4", "#ccc"],
                                                min: MIN,
                                                max: MAX
                                            }),
                                            alignSelf: "center"
                                        }}
                                    >
                                        {children}
                                    </div>
                                </div>
                            )}
                            renderThumb={({ props, isDragged }) => (
                                <>
                                    <div
                                        {...props}
                                        style={{
                                            ...props.style,
                                            height: "20px",
                                            width: "20px",
                                            borderRadius: "10px",
                                            backgroundColor: "#FFF",
                                            border: '1px solid #3C81E1',
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                    </div>
                                </>
                            )}
                        />
                    </div>
                </div>
            </div>
            <div className='flex textGray3 justify-between mx-1.5 mb-7'>
                <span className='text-center text-xs'>영아<br />(1-3세)</span>
                <span className='text-center text-xs'>유아<br />(4-6세)</span>
                <span className='text-center text-xs'>취학전<br />(7세)</span>
                <span className='text-center text-xs'>초등<br />저학년</span>
            </div>

            <div className='mb-7 mx-3.5'>
                <h3 className='mb-4 text-base font-semibold'>주 관심사 <span className="textGray4 text-xs">(필터)</span></h3>
                <div className='flex justify-between space-x-2'>
                    {["체험", "엄마표 교육", "사교육"].map((_interest, index) => {
                        const _checkIndex = props.param.interests.findIndex((_item) => _item == _interest);

                        return (
                            <div className={`flex-auto py-2 px-3 rounded border text-center ${_checkIndex >= 0 ? "border-orange4 textOrange4" : "border-gray4 textGray4"}`} key={index} onClick={() => {
                                if (_checkIndex >= 0) {
                                    props.param.interests.splice(_checkIndex, 1);
                                } else {
                                    props.param.interests.push(_interest);
                                }

                                props.setParam({ ...props.param, interests: [].concat(props.param.interests) });
                            }}>
                                <span>{_interest}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="flex-auto"></div>

            <div className='block bottom-0 mb-6 mx-3.5' style={{ width: '90%' }}>
                <div className='grid grid-cols-2 gap-x-2 text-center text-sm' style={{ height: '44px' }}>
                    <div className='flex justify-center rounded-md bg-gray2 items-center' onClick={() => {
                        props.setParam({
                            regions: [],
                            subjects: [],
                            age: [1, 4],
                            interests: [],
                        });

                        setValues([1, 4]);
                    }}>
                        <img src='/images/ic_refresh.png' className='w-4 h-4 mr-1' />다시설정
                    </div>
                    <div className='rounded-md bg-blue4 text-white' style={{ lineHeight: '44px' }} onClick={() => {
                        props.setFilterOpen(false);
                        props.getItems();
                    }}>적용하기</div>
                </div>
            </div>
        </div>
    </>
}