import React, { useEffect, useState } from 'react';
import { Box, Checkbox, Drawer } from '@material-ui/core';
import { GlobalStyles } from '@mui/material';



const Account = () => {

    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(true);
    const [checked3, setChecked3] = useState(true);

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const onClick = (anchor, open, filter) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const handleChange = (e) => {
        if (e.target.value === '1') {
            setChecked1(e.target.checked);
            setChecked2(e.target.checked);
            setChecked3(e.target.checked);
        } else {
            e.target.value === '2' ? setChecked2(e.target.checked) : setChecked3(e.target.checked);
        }
    }

    useEffect(() => {
        checked2 && checked3 ? 
            setChecked1(true) : '';
    }, [])

    const list = (anchor) => (
        <Box
        sx={{ height: 230 }}
        role="presentation"
        onKeyDown={onClick(anchor, false, false)}
        >
            <GlobalStyles 
                styles={{
                    '.MuiPaper-root': {
                        borderRadius: '15px 15px 0 0'
                    }
                }}
            />
            <div className='mx-5 my-6'>
                <div className='text-right text-xs mb-6' onClick={onClick('bottom', false, false)}>닫기</div>
                <div>
                    <div className='text-base mb-5'>캘린더 공개 전환하시겠어요?</div>
                    <div className='text-sm textGray4 mb-8'>누구나 회원님의 캘린더 및 보관함을 볼 수 있습니다.</div>
                    <div className='w-full h-12 bg5 leading-12 text-center text-white rounded-md'>캘린더 공개로 전환</div>
                </div>
            </div>
        </Box>
    );

    return (
        <div>
            <header className='sticky top-0 left-0 bottom-0 visible opacity-100 bg-white z-100' style={{marginBottom: '-50px'}}>
                <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white border-b border-solid' style={{height: '50px'}}>
                    <div className='flex-1 flex items-center'>
                        <div>
                            <img src='/images/ic_back.png' onClick={() => {window.history.back()}}/>
                        </div>
                        <div className='my-0 mx-auto text-base' style={{letterSpacing: '-0.3px', fontSize: '15px'}}>계정 관리</div>
                    </div>
                </div>
            </header>
            <main style={{marginTop: '50px'}}>
                <section className='pt-6'>
                    <div className='flex mx-5 mb-4 justify-between' style={{height: '50px'}}>
                        <div style={{fontSize: '15px', lineHeight: '50px'}}>이메일</div>
                        <div className='text-sm textGray2' style={{lineHeight: '50px'}}>umma@umma.com</div>
                    </div>
                    <div className='flex mx-5 my-4 justify-between' style={{height: '50px'}}>
                        <div style={{fontSize: '15px', lineHeight: '50px'}}>비밀번호</div>
                        <div className='text-sm textOrange5' style={{lineHeight: '50px'}}>변경하기</div>
                    </div>
                    <div className='flex mx-5 my-4 justify-between' style={{height: '50px'}}>
                        <div style={{fontSize: '15px', lineHeight: '50px'}}>캘린더 비공개</div>
                        <div className='text-sm textOrange5' style={{lineHeight: '50px'}} onClick={onClick('bottom', true)}>비공개</div>
                    </div>
                    <div className='mx-5 my-4 justify-between'>
                        <div style={{fontSize: '15px', lineHeight: '50px'}}>마케팅 정보 수신 동의</div>
                        <div>
                            <Checkbox
                                value={1}
                                checked={checked1}
                                onChange={handleChange}
                                style={{color: '#FF6035'}}
                            />
                            <span className='textGray3 text-xs font-medium'>마케팅 정보 수신에 동의합니다.</span>
                        </div>
                        <div className='ml-9' style={{marginTop: '-10px'}}>
                            <Checkbox value={2} checked={checked2} onChange={handleChange} style={{color: '#FF6035'}} /><span className='textGray3 text-xs font-medium'>이메일</span>
                            <Checkbox value={3}checked={checked3} onChange={handleChange} style={{color: '#FF6035'}} /><span className='textGray3 text-xs font-medium'>SMS</span>
                        </div>
                    </div>
                    {/* <div className='mx-5' style={{height: '50px'}}>
                        <div className='text-sm textGray4' style={{lineHeight: '50px'}}>{'회원탈퇴 >'}</div>
                    </div> */}
                    <div className='flex absolute bottom-0 w-full items-center justify-evenly text-sm textGray4' style={{height: '70px'}}>
                        <div>로그아웃</div>
                        <div>|</div>
                        <div>회원탈퇴</div>
                    </div>
                    <Drawer
                        anchor='bottom'
                        open={state['bottom']}
                        onClose={onClick('bottom', false)}
                    >
                        {list('bottom')}
                    </Drawer>
                </section>
            </main>
        </div>
    )
}

export default Account;