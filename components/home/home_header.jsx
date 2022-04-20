import Link from 'next/link';
import React, { useState } from 'react';

const HomeHeader = () => {

    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <header className='sticky top-0 left-0 right-0 opacity-100 visible px-3.5 bg-white z-100' style={{marginBottom: '-74px'}}>
            <div className='relative box-border flex items-center h-18 my-0 mx-auto' style={{height: '74px'}}>
                    <div className='my-0'>
                        <img src={`/images/logo_new.png`} alt='logo'/>
                    </div>
                    <Link href='/search'>
                        <div className='relative'>
                            <input className='rounded-3xl block box-border border border-solid px-4' type='text' value={value} placeholder='' 
                                style={{width: '190px', height: '30px', borderColor: '#ff734d'}} onChange={onChange}/>
                            <img src='/images/ic_search.png' className='absolute right-3 top-1' />
                        </div>
                    </Link>
            </div>
        </header>
    )
}

export default HomeHeader;
