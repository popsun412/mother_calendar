import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Drawer } from '@material-ui/core';
import { Range, getTrackBackground } from 'react-range';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { GlobalStyles } from '@mui/material';

const ExMapHeader = () => {

    const data = [
        {
            title: '직업체험 테마파크 키자니아',
            imgUrl: 'https://picsum.photos/id/510/100/100',
            tag1: '서울',
            tag2: '자연동물'
        },
        {
            title: '직업체험 테마파크 키자니아',
            imgUrl: 'https://picsum.photos/id/511/100/100',
            tag1: '서울',
            tag2: '자연동물'
        },
        {
            title: '직업체험 테마파크 키자니아',
            imgUrl: 'https://picsum.photos/id/512/100/100',
            tag1: '서울',
            tag2: '자연동물'
        },
        {
            title: '직업체험 테마파크 키자니아',
            imgUrl: 'https://picsum.photos/id/513/100/100',
            tag1: '서울',
            tag2: '자연동물'
        },
        {
            title: '직업체험 테마파크 키자니아',
            imgUrl: 'https://picsum.photos/id/514/100/100',
            tag1: '서울',
            tag2: '자연동물'
        },
        {
            title: '직업체험 테마파크 키자니아',
            imgUrl: 'https://picsum.photos/id/515/100/100',
            tag1: '서울',
            tag2: '자연동물'
        }
    ]

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

    const onClick = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
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
        0: false,
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
        11: false
    })

    const locationClick = (e) => {
        setLocation({ ...location, [e.target.value]: e.target.checked });
    }

    const areaClick = (e) => {
        setArea({ ...area, [e.target.value]: e.target.checked });
    }

    const clickReturn = () => {
        setLocation({ ...location, 0: false, 1: false, 2: false });
        setArea({ ...area, 0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false });
        setValues([0, 30]);
    }

    const clickApply = () => {
        onClick(anchor, false);
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
            label: '놀이터'
        },
        {
            id: 2,
            label: '키즈카페'
        },
        {
            id: 3,
            label: '지식전시'
        },
        {
            id: 4,
            label: '자연동물'
        },
        {
            id: 5,
            label: '식당숙박'
        },
        {
            id: 6,
            label: '기타'
        }
    ]

    const list = (anchor) => (

        <Box
            sx={{ width: 250 }}
            role="presentation"
            onKeyDown={onClick(anchor, false, false)}
        >
            <GlobalStyles
                styles={{
                    '.MuiToggleButton-root.Mui-selected': {
                        color: '#3C81E1',
                        border: '1px solid #3C81E1',
                        backgroundColor: '#fff!important'
                    }
                }}
            />
            <div className='my-2.5'>
                <div className='mx-3.5'>
                    <img src='/images/ic_close.png' className='ml-auto' onClick={onClick(anchor, false, false)} />
                </div>
                <div className='mb-7 mx-3.5'>
                    <h3 className='mb-4 text-base font-semibold'>정렬</h3>
                    <div className='flex'>
                        <ToggleButtonGroup value={aligns} onChange={handleAligns} aria-label='aligns' className='w-full'>
                            <ToggleButton value='register' aria-label='register' className='w-full'>최신순</ToggleButton>
                            <ToggleButton value='name' aria-label='name' className='w-full'>이름순</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <div className='mb-7 mx-3.5'>
                    <h3 className='mb-4 text-base font-semibold'>지역</h3>
                    <div className='flex'>
                        <div className={`flex-1 mr-1.5 py-2 px-5 rounded border ${location[0] ? 'border-blue4' : 'border-gray3'}`}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='0' className='box-border p-0' onChange={locationClick} />
                            </span>
                            <span className={`p-0 text-sm inline-block ${location[0] ? 'textBlue4' : 'textGray4'}`}>서울</span>
                        </div>
                        <div className={`flex-1 mr-1.5 py-2 px-5 rounded border ${location[1] ? 'border-blue4' : 'border-gray3'}`}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='1' className='box-border p-0' onChange={locationClick} />
                            </span>
                            <span className={`p-0 text-sm inline-block ${location[1] ? 'textBlue4' : 'textGray4'}`}>경기</span>
                        </div>
                        <div className={`flex-1 mr-1.5 py-2 px-5 rounded border ${location[2] ? 'border-blue4' : 'border-gray3'}`}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='2' className='box-border p-0' onChange={locationClick} />
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
                                        <input type='checkbox' value={item.id} className='opacity-0 absolute top-0 left-0' onChange={areaClick} />
                                        <span className={`block border border-solid bg-white py-1.5 px-2 text-xs 
                                        ${area[item.id] ? 'textBlue4 border-blue4' : 'textGray4 border-gray3'}`} style={{ borderRadius: '2px' }}>{item.label}</span>
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
                    <span className='flex-1 text-center text-xs'>영아<br />(1-3세)</span>
                    <span className='flex-1 text-center text-xs'>유아<br />(4-6세)</span>
                    <span className='flex-1 text-center text-xs'>취학전<br />(7세)</span>
                    <span className='flex-1 text-center text-xs'>초등<br />저학년</span>
                </div>
                <div className='block absolute bottom-0 mb-7 mx-3.5' style={{ width: '90%' }}>
                    <div className='grid grid-cols-2 gap-x-2 text-center text-sm' style={{ height: '44px' }} onClick={clickReturn}>
                        <div className='flex justify-center rounded-md bg-gray2 items-center'>
                            <img src='/images/ic_refresh.png' className='w-4 h-4 mr-1' />다시설정
                        </div>
                        <div className='rounded-md bg-blue4 text-white' style={{ lineHeight: '44px' }} onClick={onClick(anchor, false, true)}>적용하기</div>
                    </div>
                </div>
            </div>
        </Box>
    );

    return (
        <>
            <header className='sticky top-0 left-0 right-0 visible opacity-100 bg-white z-100' style={{ marginBottom: '-50px' }}>
                <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white border-b border-solid border-gray3' style={{ height: '50px' }}>
                    <div className='flex-1 flex items-center'>
                        <div style={{ width: '50px' }}>
                            <img src='/images/ic_back.png' onClick={() => { window.history.back() }} />
                        </div>
                        <div className='my-0 mx-auto text-base font-medium' style={{ letterSpacing: '-0.3px' }}>체험지도</div>
                        <div className='flex mr-2' style={{ width: '50px' }}>
                            <Link href='/instimap'>
                                <img src='/images/ic_list.png' className='mr-3' />
                            </Link>
                            <img src='/images/filter.png' onClick={onClick('right', true)} />
                        </div>
                    </div>
                </div>
            </header>
            <Drawer
                anchor='right'
                open={state['right']}
                onClose={onClick('right', false)}
            >
                {list('right')}
            </Drawer>
        </>
    )
}

export default ExMapHeader;