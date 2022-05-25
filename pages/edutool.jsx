import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Box, Drawer } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import EduToolInstock from '../components/edutool/edutool_instock';
import EduToolPurchase from '../components/edutool/edutool_purchase';
import EduToolSell from '../components/edutool/edutool_sell';
import { Global } from '@emotion/react';

import network from '../util/network';
import { getAuth } from "firebase/auth";
import { useRouter } from 'next/router';
import CircleLoading from '../components/common/circle_loading';

const EduTool = () => {

    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [activeTab, setActiveTab] = useState(1);

    const auth = getAuth();
    const router = useRouter();

    // 유저 정보 갖고오기
    const getUser = async () => {
        const _result = await network.post('/userInfo');

        // data 통신
        if (_result.status == 200) {
        } else {
            router.push('/');
        }
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (_user) => {
            if (_user) {
                await getUser();
                setLoad(true);
            } else {
                router.push('/');
            }
        });

        fields.forEach((item, idx) => {
            field[idx] = false;
            returnField[idx] = false;
        })

        areas.forEach((item, idx) => {
            area[idx] = false;
            returnArea[idx] = false;
        })
    }, []);

    useEffect(() => {

        const getData = async() => {
            const res = await network.post('/locker/items', {
                offset: 0,
                limit: 20,
                status: 1,
                subject: "",
                field: "",
                lockerType: "교구장",
                region: ""
            });

            res.data ? setData(res.data) : null;
        }

        getData();

    }, []);

    const tabClick = (index) => {
        setActiveTab(index);
    }

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
    const [area, setArea] = useState({});

    const returnField = {};
    const returnArea = {};

    useEffect(() => {
        fields.forEach((item, index) => {
            field[index] = false;
            returnField[index] = false;
        })

        areas.forEach((item, index) => {
            area[index] = false;
            returnArea[index] = false;
        })

    }, [])

    const fieldClick = (e) => {
        setField({ ...field, [e.target.value]: e.target.checked});
    }

    const areaClick = (e) => {
        setArea({ ...area, [e.target.value]: e.target.checked});
    }

    const clickReturn = () => {
        setField(returnField);
        setArea(returnArea);
    }

    const clickApply = () => {
        onClick(anchor, false);
    }

    const [aligns, setAligns] = useState(() => []);

    const handleAligns = (e) => {
        setAligns([e.target.offsetParent.value]);
        console.log(aligns[0]);
    };

    const fields = [
        {
            id: 1,
            label: '국어'
        },
        {
            id: 2,
            label: '영어'
        },
        {
            id: 3,
            label: '수학'
        },
        {
            id: 4,
            label: '과학'
        },
        {
            id: 5,
            label: '사회'
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

    const areas = [
        {
            id: 1,
            label: '교구'
        },
        {
            id: 2,
            label: '교재'
        },
        {
            id: 3,
            label: '영상'
        },
        {
            id: 4,
            label: '게임'
        },
        {
            id: 5,
            label: '블록'
        },
        {
            id: 6,
            label: '퍼즐'
        },
        {
            id: 7,
            label: '재료'
        },
        {
            id: 8,
            label: '기타'
        },
    ]

    const obj = {
        0: <EduToolInstock />,
        1: <EduToolPurchase />,
        2: <EduToolSell />
    }

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
                        <Global
                            styles={{
                                'MuiToggleButtonGroup-root': {
                                    borderRadius: '6px'
                                },
                                '.MuiToggleButton-root.Mui-selected': {
                                    backgroundColor: '#fff!important',
                                    color: '#3C81E1',
                                    borderColor: '#3C81E1',
                                    borderRadius: '6px'
                                },
                            }}
                        />
                        <ToggleButtonGroup value={aligns} onChange={handleAligns} aria-label='aligns' className='w-full'>
                            <ToggleButton value='purchase' aria-label='purchase' className='w-full'>구매순</ToggleButton>
                            <ToggleButton value='name' aria-label='name' className='w-full'>이름순</ToggleButton>
                            <ToggleButton value='star' aria-label='star' className='w-full'>별점순</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <div className='mb-7 mx-3.5'>
                    <h3 className='mb-4 text-base font-semibold'>분야</h3>
                    <div className='flex flex-wrap gap-y-2' style={{columnGap: '7px'}}>
                        {
                            fields.map((item, idx) => {
                                return (
                                <label className='block relative' key={idx}>
                                    <input type='checkbox' value={item.id} className='opacity-0 absolute top-0 left-0' onChange={fieldClick}/>
                                    <span className={`block border border-solid bg-white text-xs 
                                        ${field[item.id]? 'textBlue4 border-blue4' : 'textGray4 border-gray3'}`} 
                                        style={{borderRadius: '2px', padding: '5px 8px 6px'}}>{item.label}</span>
                                </label>
                                )
                            })
                        }                       
                    </div>
                </div>
                <div className='mb-7 mx-3.5'>
                    <h3 className='mb-4 text-base font-semibold'>영역</h3>
                    <div className='flex flex-wrap gap-y-2' style={{columnGap: '7px'}}>
                        {
                            areas.map((item, idx) => {
                                return (
                                <label className='block relative' key={idx}>
                                    <input type='checkbox' value={item.id} className='opacity-0 absolute top-0 left-0' onChange={areaClick}/>
                                    <span className={`block border border-solid bg-white text-xs 
                                        ${area[item.id]? 'textBlue4 border-blue4' : 'textGray4 border-gray3'}`} 
                                        style={{borderRadius: '2px', padding: '5px 8px 6px'}}>{item.label}</span>
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

    return (<>{
        (load)
            ? <div>
            <header className='sticky top-0 left-0 right-0 visible opacity-100 bg-white z-100' style={{marginBottom: '-50px'}}>
                <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white' style={{height: '50px'}}>
                    <div className='flex-1 flex items-center'>
                        <div>
                            <img src='/images/ic_back.png' />
                        </div>
                        <div className='my-0 mx-auto text-base font-medium' style={{letterSpacing: '-0.3px'}}>교구장</div>
                        <div className='flex'>
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
            <main className='mt-12'>
                <div className='grid grid-cols-3 text-center text-sm textGray4 border-b border-solid border-gray3' style={{height: '40px'}}>
                    <div className={`font-semibold ${activeTab === 0 ? 'textBlue4 border-b-3 border-solid border-blue4' : ''}`} 
                        style={{lineHeight: '40px'}} onClick={() => {tabClick(0)}}>구매예정</div>
                    <div className={`font-semibold ${activeTab === 1 ? 'textBlue4 border-b-3 border-solid border-blue4' : ''}`} 
                        style={{lineHeight: '40px'}} onClick={() => {tabClick(1)}}>보유중</div>
                    <div className={`font-semibold ${activeTab === 2 ? 'textBlue4 border-b-3 border-solid border-blue4' : ''}`} 
                        style={{lineHeight: '40px'}} onClick={() => {tabClick(2)}}>판매완료</div>
                </div>
                <section>
                {
                    obj[activeTab]
                }
                </section>
            </main>
            <Link href='/addtool'>
                <div className='fixed bottom-0 right-0 z-100'>
                    <img src='/images/ic_float.png'/>
                </div>
            </Link>
        </div>
            : <CircleLoading />
    }</>)
}

export default EduTool;