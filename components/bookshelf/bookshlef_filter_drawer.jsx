/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { useEffect } from 'react';

export default function BookshlefFilterDrawer(props) {
    const [filterParams, setFilterParams] = useState(JSON.parse(JSON.stringify(props.params)));

    const subjects = ['국어', '영어', '수학', '과학', '사회', '미술', '음악', '체육', '생활', '기타', '부모'];
    const fields = ['대전집', '소전집', '단행본', '기타'];
    const _orders = [
        { value: "reg", label: "구매순" },
        { value: "name", label: "이름순" },
        { value: "score", label: "별점순" }
    ]

    return <div className='my-2.5'>
        <div className='mx-3.5'>
            <img src='/images/ic_close.png' className='ml-auto w-6' onClick={() => props.setFilterOpen(false)} />
        </div>
        <div className='mb-7 mx-3.5'>
            <h3 className='mb-4 text-base font-semibold'>정렬</h3>
            <div className='flex'>
                <div className='flex space-x-1 w-full text-sm'>
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
        </div>
        <div className='mb-7 mx-3.5'>
            <h3 className='mb-4 text-base font-semibold'>분야 <span className="textGray4 text-xs">(필터)</span></h3>
            <div className='flex flex-wrap gap-x-1.5 gap-y-2'>
                {
                    subjects.map((item, idx) => {
                        const _selectedIndex = filterParams.subject.findIndex((_subject) => _subject == item);

                        return (
                            <span
                                key={idx}
                                className={`block border border-solid bg-white text-xs ${_selectedIndex >= 0 ? 'textBlue4 border-blue4' : 'textGray4 border-gray3'}`}
                                style={{ borderRadius: '2px', padding: '5px 8px 6px' }}
                                onClick={() => {
                                    if (_selectedIndex >= 0) {
                                        filterParams.subject.splice(_selectedIndex, 1);
                                    } else {
                                        filterParams.subject.push(item);
                                    }

                                    setFilterParams({ ...filterParams, subject: filterParams.subject });
                                }}
                            >
                                {item}
                            </span>
                        )
                    })
                }
            </div>
        </div>
        <div className='mb-7 mx-3.5'>
            <h3 className='mb-4 text-base font-semibold'>영역 <span className="textGray4 text-xs">(필터)</span></h3>
            <div className='flex flex-wrap gap-y-2' style={{ columnGap: '7px' }}>
                {
                    fields.map((item, idx) => {
                        const _selectedIndex = filterParams.field.findIndex((_field) => _field == item);

                        return (
                            <span
                                key={idx}
                                className={`border border-solid bg-white text-xs ${_selectedIndex >= 0 ? 'textBlue4 border-blue4' : 'textGray4 border-gray3'}`}
                                style={{ borderRadius: '2px', padding: '5px 8px 6px' }}
                                onClick={() => {
                                    if (_selectedIndex >= 0) {
                                        filterParams.field.splice(_selectedIndex, 1);
                                    } else {
                                        filterParams.field.push(item);
                                    }

                                    setFilterParams({ ...filterParams, field: filterParams.field });
                                }}
                            >
                                {item}
                            </span>
                        )
                    })
                }
            </div>
        </div>
        <div className='block absolute bottom-0 mb-6 mx-3.5' style={{ width: '90%' }}>
            <div className='grid grid-cols-2 gap-x-2 text-center text-sm' style={{ height: '44px' }}>
                <div className='flex justify-center rounded-md bg-gray2 items-center' onClick={() => {
                    setFilterParams({ order: "reg", subject: [], field: [], lockerType: '책장' });
                }}>
                    <img src='/images/ic_refresh.png' className='w-4 h-4 mr-1' />다시설정
                </div>
                <div className='rounded-md bg-blue4 text-white' style={{ lineHeight: '44px' }} onClick={() => {
                    props.setParams(JSON.parse(JSON.stringify(filterParams)));
                    props.setFilterOpen(false);
                }}>적용하기</div>
            </div>
        </div>
    </div>
}