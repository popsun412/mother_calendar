/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useState } from 'react';

const HomeHeader = () => {

    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return (<header className='sticky top-0 left-0 right-0 visible opacity-100 bg-white z-100'>
        <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white border-b border-solid border-gray3' style={{ height: '50px' }}>
            <div className='flex-1 flex items-center justify-between'>
                <div>
                    <img src='/images/logo_new.png' width={139} />
                </div>
                <Link href='/search' passHref>
                    <img src='/images/ic_search.png' className='w-6 h-6' />
                </Link>
            </div>
        </div>
    </header>
    )
}

export default HomeHeader;
