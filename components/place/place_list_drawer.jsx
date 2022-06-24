/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

export default function PlaceListDrawer(props) {
    const _orders = [
        { value: "reg", label: "방문순" },
        { value: "name", label: "이름순" },
        { value: "score", label: "별점순" }
    ]

    return <>
        <div className='my-2.5 flex flex-col h-full items-stretch'>
            <div className='mx-3.5'>
                <img src='/images/ic_close.png' className='ml-auto w-6' onClick={() => props.setDrawerOpen(false)} />
            </div>
            <div className='mb-7 mx-3.5'>
                <h3 className='mb-4 text-base font-semibold'>정렬</h3>
                <div className='flex'>
                    <div className='flex space-x-1 w-full text-sm'>
                        {_orders.map((_order, index) => {
                            return (
                                <div
                                    className={`flex-auto py-2 rounded border text-center ${props.param.order == _order.value ? "border-blue4 textBlue4" : "border-gray4 textGray4"}`}
                                    key={index}
                                    onClick={() => props.setParam({ ...props.param, order: _order.value })}>
                                    <span>{_order.label}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className='mb-7 mx-3.5'>
                <h3 className='mb-4 text-base font-semibold'>상태 <span className="textGray4 text-xs">(필터)</span></h3>
                <div className='flex justify-between space-x-2 text-sm'>
                    <div className={`flex-auto py-2 rounded border text-center ${props.param.status.findIndex((_status) => _status == 0) >= 0 ? "border-blue4 textBlue4" : "border-gray4 textGray4"}`}
                        onClick={() => {
                            const _checkIndex = props.param.status.findIndex((_status) => _status == 0);

                            if (_checkIndex >= 0) {
                                props.param.status.splice(_checkIndex, 1);
                            } else {
                                props.param.status.push(0);
                            }

                            props.setParam({ ...props.param, status: [].concat(props.param.status) });
                        }}>
                        <span>방문예정</span>
                    </div>
                    <div className={`flex-auto py-2 rounded border text-center ${props.param.status.findIndex((_status) => _status == 1) >= 0 ? "border-blue4 textBlue4" : "border-gray4 textGray4"}`}
                        onClick={() => {
                            const _checkIndex = props.param.status.findIndex((_status) => _status == 1);

                            if (_checkIndex >= 0) {
                                props.param.status.splice(_checkIndex, 1);
                            } else {
                                props.param.status.push(1);
                            }

                            props.setParam({ ...props.param, status: [].concat(props.param.status) });
                        }}>
                        <span>방문완료</span>
                    </div>
                </div>
            </div>
            <div className='mb-7 mx-3.5'>
                <h3 className='mb-4 text-base font-semibold'>지역 <span className="textGray4 text-xs">(필터)</span></h3>
                <div className='flex justify-between space-x-2 text-sm'>
                    {["서울", "경기", "기타"].map((_region, index) => {
                        const _checkIndex = props.param.region.findIndex((_checkItem) => _checkItem == _region);

                        return (
                            <div className={`flex-auto py-2 px-3 rounded border text-center ${_checkIndex >= 0 ? "border-blue4 textBlue4" : "border-gray4 textGray4"}`} key={index} onClick={() => {

                                if (_checkIndex >= 0) {
                                    props.param.region.splice(_checkIndex, 1);
                                } else {
                                    props.param.region.push(_region);
                                }

                                props.setParam({ ...props.param, region: [].concat(props.param.region) });
                            }}>
                                <span>{_region}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            {(props.param.lockerType == "학원")
                ? <div className='mb-7 mx-3.5'>
                    <h3 className='mb-4 text-base font-semibold'>분야 <span className="textGray4 text-xs">(필터)</span></h3>
                    <div className='flex flex-wrap gap-x-1.5 gap-y-2'>
                        {["국어", "영어", "수학", "과학", "사회", "미술", "음악", "체육", "생활", "기타", "부모"].map((_subject, index) => {
                            const _checkIndex = props.param.subject.findIndex((_checkItem) => _checkItem == _subject);

                            return (
                                <span
                                    className={`block border border-solid bg-white text-xs ${_checkIndex >= 0 ? 'textBlue4 border-blue4' : 'textGray4 border-gray3'}`}
                                    style={{ borderRadius: '2px', padding: '5px 8px 6px' }}
                                    key={index}
                                    onClick={() => {
                                        if (_checkIndex >= 0) {
                                            props.param.subject.splice(_checkIndex, 1);
                                        } else {
                                            props.param.subject.push(_subject);
                                        }

                                        props.setParam({ ...props.param, subject: props.param.subject });
                                    }}>
                                    {_subject}
                                </span>
                            )
                        })}
                    </div>
                </div>
                : <div className='mb-7 mx-3.5'>
                    <h3 className='mb-4 text-base font-semibold'>영역 <span className="textGray4 text-xs">(필터)</span></h3>
                    <div className='flex flex-wrap gap-x-1.5 gap-y-2'>
                        {["놀이터", "키즈카페", "지식전시", "자연동물", "식당숙박", "기타"].map((_field, index) => {
                            const _checkIndex = props.param.field.findIndex((_checkItem) => _checkItem == _field);

                            return (
                                <span
                                    className={`block border border-solid bg-white text-xs ${_checkIndex >= 0 ? 'textBlue4 border-blue4' : 'textGray4 border-gray3'}`}
                                    style={{ borderRadius: '2px', padding: '5px 8px 6px' }}
                                    key={index}
                                    onClick={() => {
                                        if (_checkIndex >= 0) {
                                            props.param.field.splice(_checkIndex, 1);
                                        } else {
                                            props.param.field.push(_field);
                                        }

                                        props.setParam({ ...props.param, field: props.param.field });
                                    }}
                                >
                                    {_field}
                                </span>
                            )
                        })}
                    </div>
                </div>
            }
            <div className="flex-auto"></div>

            <div className='block bottom-0 mb-6 mx-3.5' style={{ width: '90%' }}>
                <div className='grid grid-cols-2 gap-x-2 text-center text-sm' style={{ height: '44px' }}>
                    <div className='flex justify-center rounded-md bg-gray2 items-center' onClick={() => {
                        props.setParam({
                            ...props.param,
                            order: "reg",
                            status: [],
                            region: [],
                            subject: [],
                            field: [],
                        })
                    }}>
                        <img src='/images/ic_refresh.png' className='w-4 h-4 mr-1' />다시설정
                    </div>
                    <div className='rounded-md bg-blue4 text-white' style={{ lineHeight: '44px' }} onClick={() => {
                        props.setDrawerOpen(false);
                        props.getItems();
                    }}>적용하기</div>
                </div>
            </div>
        </div>
    </>
}