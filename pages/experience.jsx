import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Drawer, Slider } from '@material-ui/core';
import { GlobalStyles } from '@mui/material';

const Experience = () => {

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
        setLocation({ ...location, [e.target.value]: e.target.checked});
    }

    const areaClick = (e) => {
        setArea({ ...area, [e.target.value]: e.target.checked});
    }

    const clickReturn = () => {
        setLocation({...location, 0: false, 1: false, 2: false});
        setArea({...area, 0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11:false});
    }

    const clickApply = () => {
        onClick(anchor, false);
        
    }

    const list = (anchor) => (

        <Box
        sx={{ width: 250 }}
        role="presentation"
        onKeyDown={onClick(anchor, false)}
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
            <div className='my-2.5 mx-3.5'>
                <div>
                    <img src='images/ic_close.png' className='ml-auto' onClick={onClick(anchor, false)}/>
                </div>
                <div className='mb-7'>
                    <h3 className='mb-4 text-base font-semibold'>정렬</h3>
                    <div className='flex'>
                        <div className='text-sm rounded-md border border-solid py-3 px-10 border-blue4 textBlue4'>등록순</div>
                        <div className='text-sm rounded-md border border-solid py-3 px-10 border-l-white' style={{marginLeft: '-15px'}}>↑↓ 이름순</div>
                    </div>
                </div>
                <div className='mb-7'>
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
                <div className='mb-7'>
                    <h3 className='mb-4 text-base font-semibold'>영역</h3>
                    <div className='flex mb-2'>
                        <div className={`mr-1 py-1.5 px-2 rounded border text-xs ${area[0] ? 'border-blue4' : 'border-gray3'}`}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='0' className='box-border p-0' onChange={areaClick}/>
                            </span>
                            <span className={`inline-block ${area[0] ? 'textBlue4' : 'textGray4'}`}>학원</span>
                        </div>
                        <div className={`mr-1 py-1.5 px-2 rounded border text-xs ${area[1] ? 'border-blue4' : 'border-gray3'}`}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='1' className='box-border p-0' onChange={areaClick}/>
                            </span>
                            <span className={`inline-block ${area[1] ? 'textBlue4' : 'textGray4'}`}>대전집</span>
                        </div>
                        <div className={`mr-1 py-1.5 px-2 rounded border text-xs ${area[2] ? 'border-blue4' : 'border-gray3'}`}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='2' className='box-border p-0' onChange={areaClick}/>
                            </span>
                            <span className={`inline-block ${area[2] ? 'textBlue4' : 'textGray4'}`}>소전집</span>
                        </div>
                        <div className={`mr-1 py-1.5 px-2 rounded border text-xs ${area[3] ? 'border-blue4' : 'border-gray3'}`}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='3' className='box-border p-0' onChange={areaClick}/>
                            </span>
                            <span className={`inline-block ${area[3] ? 'textBlue4' : 'textGray4'}`}>단행본</span>
                        </div>
                    </div>
                    <div className='flex mb-2'>
                        <div className={`mr-1 py-1.5 px-2 rounded border text-xs ${area[4] ? 'border-blue4' : 'border-gray3'}`}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='4' className='box-border p-0' onChange={areaClick}/>
                            </span>
                            <span className={`inline-block ${area[4] ? 'textBlue4' : 'textGray4'}`}>교구</span>
                        </div>
                        <div className={`mr-1 py-1.5 px-2 rounded border text-xs ${area[5] ? 'border-blue4' : 'border-gray3'}`}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='5' className='box-border p-0' onChange={areaClick}/>
                            </span>
                            <span className={`inline-block ${area[5] ? 'textBlue4' : 'textGray4'}`}>교재</span>
                        </div>
                        <div className={`mr-1 py-1.5 px-2 rounded border text-xs ${area[6] ? 'border-blue4' : 'border-gray3'}`}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='6' className='box-border p-0' onChange={areaClick}/>
                            </span>
                            <span className={`inline-block ${area[6] ? 'textBlue4' : 'textGray4'}`}>영상</span>
                        </div>
                        <div className={`mr-1 py-1.5 px-2 rounded border text-xs ${area[7] ? 'border-blue4' : 'border-gray3'}`}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='7' className='box-border p-0' onChange={areaClick}/>
                            </span>
                            <span className={`inline-block ${area[7] ? 'textBlue4' : 'textGray4'}`}>게임</span>
                        </div>
                        <div className={`mr-1 py-1.5 px-2 rounded border text-xs ${area[8] ? 'border-blue4' : 'border-gray3'}`}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='8' className='box-border p-0' onChange={areaClick}/>
                            </span>
                            <span className={`inline-block ${area[8] ? 'textBlue4' : 'textGray4'}`}>블록</span>
                        </div>
                    </div>
                    <div className='flex mb-2'>
                        <div className={`mr-1 py-1.5 px-2 rounded border text-xs ${area[9] ? 'border-blue4' : 'border-gray3'}`}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='9' className='box-border p-0' onChange={areaClick}/>
                            </span>
                            <span className={`inline-block ${area[9] ? 'textBlue4' : 'textGray4'}`}>퍼즐</span>
                        </div>
                        <div className={`mr-1 py-1.5 px-2 rounded border text-xs ${area[10] ? 'border-blue4' : 'border-gray3'}`}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='10' className='box-border p-0' onChange={areaClick}/>
                            </span>
                            <span className={`inline-block ${area[10] ? 'textBlue4' : 'textGray4'}`}>재료</span>
                        </div>
                        <div className={`mr-1 py-1.5 px-2 rounded border text-xs ${area[11] ? 'border-blue4' : 'border-gray3'}`}>
                            <span className='none absolute opacity-0'>
                                <input type='checkbox' aria-hidden='false' value='11' className='box-border p-0' onChange={areaClick}/>
                            </span>
                            <span className={`inline-block ${area[11] ? 'textBlue4' : 'textGray4'}`}>기타</span>
                        </div>
                    </div>
                </div>
                <div className='mb-5'>
                    <h3 className='mb-4 text-base font-semibold'>연령</h3>
                    <div className='my-0 mx-2.5'>
                        <Slider
                            aria-label="Custom marks"
                            defaultValue={0}
                            getAriaValueText={valuetext}
                            step={20}
                            max={60}
                            valueLabelDisplay="false"
                            marks={marks}
                        />
                    </div>
                </div>
                <div className='block absolute bottom-0 mb-7'>
                    <span className='py-3.5 px-7 mr-2.5 rounded-md bg-gray2 text-sm text-center' onClick={clickReturn}>다시설정</span>
                    <span className='py-3.5 px-7 rounded-md bg-blue4 text-white text-sm text-center' onClick={clickApply}>적용하기</span>
                </div>
            </div>
        </Box>
    );

    return (
        <div>
            <header className='sticky top-0 left-0 right-0 visible opacity-100 pb-3.5 bg-white z-100' style={{marginBottom: '-50px'}}>
                <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white border-b border-solid border-gray3' style={{height: '50px'}}>
                    <div className='flex-1 flex items-center'>
                        <div style={{width: '50px'}}>
                            <img src='/images/ic_back.png' onClick={() => {window.history.back()}}/>
                        </div>
                        <div className='my-0 mx-auto text-base font-medium' style={{letterSpacing: '-0.3px'}}>체험</div>
                        <div className='flex mr-2' style={{width: '50px'}}>
                            <Link href='/map'>
                                <img src='/images/ic_map.png' className='mr-3'/>
                            </Link>
                            <img src='/images/filter.png' onClick={onClick('right', true)}/>
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
            <main style={{marginTop: '55px'}}>
                <div className='my-2 mx-5'>
                    {
                        data.map((item, idx) => {
                            return (
                                <div className='flex mb-5' key={idx}>
                                    <div className='mr-4'>
                                        <img src={item.imgUrl} className='rounded-md'/>
                                    </div>
                                    <div>
                                        <h3 className='text-base font-semibold mb-1.5'>{item.title}</h3>
                                        <div className='flex'>
                                            <span className='py-1 px-1.5 mr-1.5 rounded text-xs textGray3' style={{backgroundColor: '#f0f5f8'}}>{item.tag1}</span>
                                            <span className='py-1 px-1.5 mr-1.5 rounded text-xs textGray3' style={{backgroundColor: '#f0f5f8'}}>{item.tag2}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </main>
        </div>
    )
}

export default Experience;