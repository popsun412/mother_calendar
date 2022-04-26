import React, { useState } from 'react';
import { Box, Drawer } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { Range, getTrackBackground } from 'react-range';
import FeedItem from '../components/feed/feed_item';
import Navigation from '../components/common/navigation';

const data = [
    {
        nickname: '수민맘',
        date: '202204151430',
        tag: '5세 6세 8세, 서울, 엄마표',
        type: '국어',
        target: '한글 떼기 워크북 풀기',
        title: '잉글리시 에그 Step 1',
        img: 'https://picsum.photos/id/550/400/400',
        contents: '집중력 떨어질까봐 책상은 다 비웠었는데, 교재 종류가 증가하다보니 어쩔 수 없이 매일 보는 것은 가까이 꽂아두었습니다. 가나다라마바사 가나다라마바사'
    },
    {
        nickname: '유민맘',
        date: '202204151430',
        tag: '5세 6세, 서울, 엄마표',
        type: '영어',
        target: '한글 떼기 워크북 풀기',
        title: '잉글리시 에그 Step 1',
        img: 'https://picsum.photos/id/560/400/400',
        contents: '집중력 떨어질까봐 책상은 다 비웠었는데, 교재 종류가 증가하다보니 어쩔 수 없이 매일 보는 것은 가까이 꽂아두었습니다. 가나다라마바사 가나다라마바사'
    }
]

const Feed = () => {

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

    const [field, setField] = useState({});

    const [location, setLocation] = useState({
        0: false,
        1: false,
        2: false
    })

    const [interest, setInterest] = useState({});

    const valuetext = (value) => {
        return `${value}`;
    }

    const fieldClick = (e) => {
        setField({ ...field, [e.target.value]: e.target.checked});
    }
    
    const locationClick = (e) => {
        setLocation({ ...location, [e.target.value]: e.target.checked});
    }

    const interestClick = (e) => {
        setInterest({ ...interest, [e.target.value]: e.target.checked});
    }

    const clickReturn = () => {
        setField({});
        setLocation({});
        setInterest({});
        setValues([0, 30]);
    }

    const clickApply = () => {
        onClick(anchor, false);
    }

    const STEP = 10;
    const MIN = 0;
    const MAX = 30;
    const [values, setValues] = useState([0, 30]);

    const fields = [
        {
            id: 1,
            label: '체험'
        },
        {
            id: 2,
            label: '국어'
        },
        {
            id: 3,
            label: '영어'
        },
        {
            id: 4,
            label: '수학'
        },
        {
            id: 5,
            label: '과학'
        },
        {
            id: 6,
            label: '미술'
        },
        {
            id: 7,
            label: '음악'
        },
        {
            id: 8,
            label: '체육'
        },
        {
            id: 9,
            label: '놀이'
        },
        {
            id: 10,
            label: '기타'
        },
        {
            id: 11,
            label: '부모'
        }
    ]

    const interests = [
        {
            id: 1,
            label: '체험'
        },
        {
            id: 2,
            label: '엄마표 교육'
        },
        {
            id: 3,
            label: '사교육'
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
                    <div className='mb-4 text-base font-semibold'>분야 <span className='text-sm textGray4'>(필터)</span></div>
                    <div className='flex flex-wrap'>
                        <div className='grid grid-cols-5 gap-1.5'>
                        {
                            fields.map((item, idx) => {
                                return (
                                <label className='block relative' key={idx}>
                                    <input type='checkbox' value={item.id} className='opacity-0 absolute top-0 left-0' onChange={fieldClick}/>
                                    <span className={`block border border-solid bg-white py-1.5 px-2 text-xs 
                                        ${field[item.id]? 'textBlue4 border-blue4' : 'textGray4 border-gray3'}`} style={{borderRadius: '2px'}}>{item.label}</span>
                                </label>
                                )
                            })
                        }
                        </div>                 
                    </div>
                </div>
                <div className='mb-7 mx-3.5'>
                    <div className='mb-4 text-base font-semibold'>지역 <span className='text-sm textGray4'>(필터)</span></div>
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
                <div className='mx-3.5'>
                    <div className='mb-4 text-base font-semibold'>연령 <span className='text-sm textGray4'>(필터)</span></div>
                    <div className='w-full justify-center'>
                        <div className='my-0 mx-2.5'>
                            <Range
                                key='age'
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
                <div className='mb-7 flex textGray3'>
                    <span className='flex-1 text-center text-xs'>영아<br/>(1-3세)</span>
                    <span className='flex-1 text-center text-xs'>유아<br/>(4-6세)</span>
                    <span className='flex-1 text-center text-xs'>취학전<br/>(7세)</span>
                    <span className='flex-1 text-center text-xs'>초등<br/>저학년</span>
                </div>
                <div className='mb-7 mx-3.5'>
                    <div className='mb-4 text-base font-semibold'>주관심사 <span className='text-sm textGray4'>(필터)</span></div>
                    <div className='flex flex-wrap'>
                        {
                            interests.map((item, idx) => {
                                return (
                                <label className='block relative mr-2 mb-2' key={idx}>
                                    <input type='checkbox' value={item.id} className='opacity-0 absolute top-0 left-0' onChange={interestClick}/>
                                    <span className={`block border border-solid bg-white py-1.5 px-2 text-xs 
                                        ${interest[item.id]? 'textBlue4 border-blue4' : 'textGray4 border-gray3'}`} style={{borderRadius: '2px'}}>{item.label}</span>
                                </label>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='block absolute bottom-0 mb-6 mx-3.5' style={{width: '90%'}}>
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
        <div>
            <header className='sticky top-0 left-0 right-0 visible opacity-100 bg-white z-100' style={{marginBottom: '-50px'}}>
                <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white border-b border-solid border-gray3' style={{height: '50px'}}>
                    <div className='flex-1 flex items-center justify-between'>
                        <div>
                            <img src='/images/logo_new.png'/>
                        </div>
                        <div onClick={onClick('right', true)}>
                            <img src='/images/filter.png' className='w-5' style={{height: '18px'}}/>
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
            <main style={{marginTop: '50px', marginBottom: '72px'}}>
                <section className='pt-3.5'>
                    <FeedItem data={data}/>
                </section>
            </main>
            <Navigation path={'feed'}/>
        </div>
    )
}

export default Feed;