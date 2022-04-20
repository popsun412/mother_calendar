import React, { useEffect, useState } from 'react';
import { Box, Drawer } from '@material-ui/core';
import { Range, getTrackBackground } from 'react-range';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

const data = [
    {
        title: '가베가족 알파벳 교구',
        category: 1,
        tag1: '영어',
        tag2: '교구',
        imgUrl: '/images/itme.png',
        bookmark: true
    },
    {
        title: '가베가족 알파벳 교구',
        category: 2,
        tag1: '영어',
        tag2: '교구',
        imgUrl: '/images/itme.png',
        bookmark: false
    },{
        title: '가베가족 알파벳 교구',
        category: 3,
        tag1: '영어',
        tag2: '교구',
        imgUrl: '/images/itme.png',
        bookmark: false
    },{
        title: '가베가족 알파벳 교구',
        category: 5,
        tag1: '영어',
        tag2: '교구',
        imgUrl: '/images/itme.png',
        bookmark: false
    },{
        title: '가베가족 알파벳 교구',
        category: 5,
        tag1: '영어',
        tag2: '교구',
        imgUrl: '/images/itme.png',
        bookmark: false
    },{
        title: '가베가족 알파벳 교구',
        category: 5,
        tag1: '영어',
        tag2: '교구',
        imgUrl: '/images/itme.png',
        bookmark: false
    },{
        title: '가베가족 알파벳 교구',
        category: 4,
        tag1: '영어',
        tag2: '교구',
        imgUrl: '/images/itme.png',
        bookmark: false
    },{
        title: '가베가족 알파벳 교구',
        category: 4,
        tag1: '영어',
        tag2: '교구',
        imgUrl: '/images/itme.png',
        bookmark: false
    },
]

const CategoryItem = (props) => {

    const marks = [
        {
            value: 0,
            label: '영아(1-3세)',
        },
        {
            value: 20,
            label: '유아(4-6세)',
        },
        {
            value: 40,
            label: '취학전(7세)',
        },
        {
            value: 60,
            label: '초등 저학년',
        },
    ];

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const [filterValue, setFilterValue] = useState('필터');

    const onClick = (anchor, open, filter) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });

        if(filter) {
            let chk1 = false;
            let chk2 = false;

            for (const key in location) {
                if (location[key]) {
                    chk1 = true;
                }
            }

            for (const key2 in area) {
                if (area[key2]) {
                    chk2 = true;
                }
            }

            if (chk1 && chk2) {
                setFilterValue('필터, 지역, 영역');
            } else if (chk1 && !chk2) {
                setFilterValue('필터, 지역');
            } else if (!chk1 && chk2) {
                setFilterValue('필터, 영역');
            } else {
                setFilterValue('필터');
            }
        }
    };

    const valuetext = (value) => {
        return `${value}`;
    }

    const [location, setLocation] = useState({
        0: false,
        1: false,
        2: false
    });

    const [area, setArea] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false
    })

    const locationClick = (e) => {
        setLocation({ ...location, [e.target.value]: e.target.checked});
    }

    const areaClick = (e) => {
        setArea({ ...area, [e.target.value]: e.target.checked});
    }

    const clickReturn = () => {
        setLocation({...location, 0: false, 1: false, 2: false});
        setArea({...area, 0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11:false});
    }

    const STEP = 10;
    const MIN = 0;
    const MAX = 30;
    const [values, setValues] = useState([0, 30]);

    const [aligns, setAligns] = useState(() => ['register']);

    const handleAligns = (e) => {
        setAligns([e.target.offsetParent.value]);
        console.log(aligns[0]);
    };

    const areas = [
        {
            id: 1,
            label: '학원'
        },
        {
            id: 2,
            label: '대전집'
        },
        {
            id: 3,
            label: '소전집'
        },
        {
            id: 4,
            label: '단행본'
        },
        {
            id: 5,
            label: '교구'
        },
        {
            id: 6,
            label: '교재'
        },
        {
            id: 7,
            label: '영상'
        },
        {
            id: 8,
            label: '게임'
        },
        {
            id: 9,
            label: '블록'
        },
        {
            id: 10,
            label: '퍼즐'
        },
        {
            id: 11,
            label: '재료'
        },
        {
            id: 12,
            label: '기타'
        }
    ]

    const list = (anchor) => (

        <Box
        sx={{ width: 250 }}
        role="presentation"
        onKeyDown={onClick(anchor, false, false)}
        >
            <div className='my-2.5'>
                <div className='mx-3.5'>
                    <img src='/images/ic_close.png' className='ml-auto' onClick={onClick(anchor, false, false)}/>
                </div>
                <div className='mb-7 mx-3.5'>
                    <h3 className='mb-4 text-base font-semibold'>정렬</h3>
                    <div className='flex'>
                        <ToggleButtonGroup value={aligns} onChange={handleAligns} aria-label='aligns' className='w-full'>
                            <ToggleButton value='register' aria-label='register' className='w-full'>등록순</ToggleButton>
                            <ToggleButton value='name' aria-label='name' className='w-full'>이름순</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <div className='mb-7 mx-3.5'>
                    <h3 className='mb-4 text-base font-semibold'>지역</h3>
                    <div className='flex'>
                        <div className={`flex-1 mr-1.5 py-2 px-5 rounded border ${location[0] ? 'border-blue4' : 'border-gray3'}`}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='0' className='box-border p-0' onChange={locationClick}/>
                            </span>
                            <span className={`p-0 text-sm inline-block ${location[0] ? 'textBlue4' : 'textGray4'}`}>서울</span>
                        </div>
                        <div className={`flex-1 mr-1.5 py-2 px-5 rounded border ${location[1] ? 'border-blue4' : 'border-gray3'}`}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='1' className='box-border p-0' onChange={locationClick}/>
                            </span>
                            <span className={`p-0 text-sm inline-block ${location[1] ? 'textBlue4' : 'textGray4'}`}>경기</span>
                        </div>
                        <div className={`flex-1 mr-1.5 py-2 px-5 rounded border ${location[2] ? 'border-blue4' : 'border-gray3'}`}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='2' className='box-border p-0' onChange={locationClick}/>
                            </span>
                            <span className={`p-0 text-sm inline-block ${location[2] ? 'textBlue4' : 'textGray4'}`}>기타</span>
                        </div>
                    </div>
                </div>
                <div className='mb-7 mx-3.5'>
                    <h3 className='mb-4 text-base font-semibold'>영역</h3>
                    <div className='flex flex-wrap'>
                        {
                            areas.map((item, idx) => {
                                return (
                                <label className='block relative mr-2 mb-2.5' key={idx}>
                                    <input type='checkbox' value={item.id} className='opacity-0 absolute top-0 left-0' onChange={areaClick}/>
                                    <span className={`block border border-solid bg-white py-1.5 px-2 text-xs 
                                        ${area[item.id]? 'textBlue4 border-blue4' : 'textGray4 border-gray3'}`} style={{borderRadius: '2px'}}>{item.label}</span>
                                </label>
                                )
                            })
                        }                       
                    </div>
                </div>
                <div className='mx-3.5'>
                    <h3 className='mb-4 text-base font-semibold'>연령</h3>
                    <div className='w-full justify-center'>
                        <div className='my-0 mx-2.5'>
                            <Range
                                values={values}
                                step={STEP}
                                min={MIN}
                                max={MAX}
                                onChange={values => {
                                    console.log(values);
                                    setValues(values);
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
                <div className='flex textGray3'>
                    <span className='flex-1 text-center text-xs'>영아<br/>(1-3세)</span>
                    <span className='flex-1 text-center text-xs'>유아<br/>(4-6세)</span>
                    <span className='flex-1 text-center text-xs'>취학전<br/>(7세)</span>
                    <span className='flex-1 text-center text-xs'>초등<br/>저학년</span>
                </div>
                <div className='block absolute bottom-0 mb-7 mx-3.5' style={{width: '90%'}}>
                    <div className='grid grid-cols-2 gap-x-2 text-center text-sm' style={{height: '44px'}} onClick={clickReturn}>
                        <div className='flex justify-center rounded-md bg-gray2 items-center'>
                            <img src='/images/ic_refresh.png' className='w-4 h-4 mr-1'/>다시설정
                        </div>
                        <div className='rounded-md bg-blue4 text-white' style={{lineHeight: '44px'}} onClick={onClick(anchor, false, true)}>적용하기</div>
                    </div>
                </div>
            </div>
        </Box>
    );

    return (
        <div className='mx-5'>
            <React.Fragment key={0}>
            <div className='my-4 text-right'>
                <div>
                    <span className={`py-1.5 px-3 border border-solid rounded text-xs ${filterValue === '필터' ? 'border-gray3 textGray4' : 'border-blue4 textBlue4'}`} onClick={onClick('right', true)}>
                        {filterValue}
                    </span>
                </div>
            </div>
            <Drawer
                anchor='right'
                open={state['right']}
                onClose={onClick('right', false)}
            >
                {list('right')}
            </Drawer>
            <div>
                <div className='grid grid-cols-2 gap-x-4 gap-y-6'>
                {
                    data.map((item, idx) => {
                        return (
                            props.category === item.category || props.category === 0 ?
                            <div key={idx}>
                                <div className='block relative'>
                                    <img src={item.imgUrl} className='rounded-md' style={{width: '154px', height: '154px'}}/>
                                    {
                                        item.bookmark ? <img src='/images/ic_bookmarked.png' className='block absolute bottom-0 right-0 pr-2.5 pb-3'/>
                                                    : <img src='/images/ic_bookmark.png' className='block absolute bottom-0 right-0 pr-2.5 pb-3'/>
                                    }
                                    
                                </div>
                                <div className='my-2 text-sm'>가베가족 알파벳 교구</div>
                                <div>
                                    <span className='mr-1.5 py-1 px-1.5 rounded text-xs text-center textGray3' style={{backgroundColor: '#f0f5f8'}}>영어</span>
                                    <span className='mr-1.5 py-1 px-1.5 rounded text-xs text-center textGray3' style={{backgroundColor: '#f0f5f8'}}>교구</span>
                                </div>
                            </div> : ''
                        )
                    })
                }
                </div>
            </div>
            </React.Fragment>
        </div>
    )
}

export default CategoryItem;