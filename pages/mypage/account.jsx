import React, { useEffect, useState } from 'react';
import { Checkbox } from '@material-ui/core';

const Account = () => {

    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(true);
    const [checked3, setChecked3] = useState(true);

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

    return (
        <div>
            <header className='sticky top-0 left-0 right-0 visible opacity-100 bg-white z-100' style={{marginBottom: '-50px'}}>
                <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white border-b border-solid' style={{height: '50px'}}>
                    <div className='flex-1 flex items-center'>
                        <div onClick={() => {window.history.back()}}>
                            <img src='/images/ic_back.png' />
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
                        <div className='text-sm textOrange5' style={{lineHeight: '50px'}}>비공개</div>
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
                    <div className='mx-5' style={{height: '50px'}}>
                        <div className='text-sm textGray4' style={{lineHeight: '50px'}}>{'회원탈퇴 >'}</div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Account;