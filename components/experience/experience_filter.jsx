/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Range, getTrackBackground } from 'react-range';

export default function ExperienceFilter(props) {
    const [filterParams, setFilterParams] = useState(JSON.parse(JSON.stringify(props.param)));

    const _orders = [
        { value: "reg", label: "최신순" },
        { value: "name", label: "이름순" }
    ]

    const STEP = 1;
    const MIN = 1;
    const MAX = 4;
    const [values, setValues] = useState(filterParams.age);

    return <>
        <div className='my-2.5 flex flex-col h-full items-stretch'>
            <div className='mx-3.5'>
                <img src='/images/ic_close.png' className='ml-auto w-6' onClick={() => props.setFilterOpen(false)} />
            </div>
            <div className='mb-7 mx-3.5'>
                <h3 className='mb-4 text-base font-semibold'>정렬</h3>
                <div className='flex space-x-1'>
                    {_orders.map((_order, index) => {
                        return (
                            <div
                                className={`flex-auto py-2 rounded border text-center ${filterParams.order == _order.value ? "border-blue4 textBlue4" : "border-gray4 textGray4"}`}
                                key={index}
                                onClick={() => setFilterParams({ ...filterParams, order: _order.value })}>
                                <span>{_order.label}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='mb-7 mx-3.5'>
                <h3 className='mb-4 text-base font-semibold'>지역 <span className="textGray4 text-xs">(필터)</span></h3>
                <div className='flex justify-between space-x-2'>
                    {["서울", "경기", "기타"].map((_region, index) => {
                        const _checkIndex = filterParams.regions.findIndex((_item) => _item == _region);

                        return (
                            <div className={`flex-auto py-2 px-3 rounded border text-center ${_checkIndex >= 0 ? "border-blue4 textBlue4" : "border-gray4 textGray4"}`} key={index} onClick={() => {
                                if (_checkIndex >= 0) {
                                    filterParams.regions.splice(_checkIndex, 1);
                                } else {
                                    filterParams.regions.push(_region);
                                }

                                setFilterParams({ ...filterParams, region: [].concat(filterParams.regions) });
                            }}>
                                <span>{_region}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='mb-7 mx-3.5'>
                <h3 className='mb-4 text-base font-semibold'>영역 <span className="textGray4 text-xs">(필터)</span></h3>
                <div className='flex flex-wrap gap-x-1.5 gap-y-2'>
                    {["놀이터", "키즈카페", "지식전시", "자연동물", "식당숙박", "기타"].map((_field, index) => {
                        const _checkIndex = filterParams.fields.findIndex((_item) => _item == _field);

                        return (
                            <span
                                key={index}
                                className={`block border border-solid bg-white text-xs ${_checkIndex >= 0 ? 'textBlue4 border-blue4' : 'textGray4 border-gray3'}`}
                                style={{ borderRadius: '2px', padding: '5px 8px 6px' }}
                                onClick={() => {
                                    if (_checkIndex >= 0) {
                                        filterParams.fields.splice(_checkIndex, 1);
                                    } else {
                                        filterParams.fields.push(_field);
                                    }

                                    setFilterParams({ ...filterParams, fields: [].concat(filterParams.fields) })
                                }}
                            >
                                {_field}
                            </span>
                        )
                    })}
                </div>
            </div>

            <div className='mx-3.5'>
                <h3 className='mb-4 text-base font-semibold'>연령 <span className="textGray4 text-xs">(필터)</span></h3>
                <div className='w-full justify-center'>
                    <div className='my-0 mx-2.5'>
                        <Range
                            values={values}
                            step={STEP}
                            min={MIN}
                            max={MAX}
                            onChange={values => {
                                setValues(values);
                                setFilterParams({ ...filterParams, age: values });
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
            <div className='flex textGray3 justify-between mx-1.5'>
                <span className='text-center text-xs'>영아<br />(1-3세)</span>
                <span className='text-center text-xs'>유아<br />(4-6세)</span>
                <span className='text-center text-xs'>취학전<br />(7세)</span>
                <span className='text-center text-xs'>초등<br />저학년</span>
            </div>

            <div className="flex-auto"></div>

            <div className='block bottom-0 mb-6 mx-3.5' style={{ width: '90%' }}>
                <div className='grid grid-cols-2 gap-x-2 text-center text-sm' style={{ height: '44px' }}>
                    <div className='flex justify-center rounded-md bg-gray2 items-center' onClick={() => {
                        setFilterParams({
                            order: "reg",
                            regions: [],
                            fields: [],
                            age: [1, 4]
                        })
                    }}>
                        <img src='/images/ic_refresh.png' className='w-4 h-4 mr-1' />다시설정
                    </div>
                    <div className='rounded-md bg-blue4 text-white' style={{ lineHeight: '44px' }} onClick={() => {
                        props.setParam(JSON.parse(JSON.stringify(filterParams)));
                        props.setFilterOpen(false);
                    }}>적용하기</div>
                </div>
            </div>
        </div>
    </>
}