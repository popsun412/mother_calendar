/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

const CategoryHeader = (props) => {

    const { type } = props;

    return (
        <header className='sticky top-0 left-0 right-0 visible opacity-100 pb-3.5 bg-white z-100' style={{ marginBottom: '-50px' }}>
            <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white' style={{ height: '50px' }}>
                <div className='flex-1 flex items-center'>
                    <img src='/images/ic_back.png' onClick={() => { window.history.back() }} />
                    <div className='my-0 mx-auto text-base font-medium' style={{ letterSpacing: '-0.3px' }}>{type}</div>
                </div>
            </div>
        </header>
    )
}

export default CategoryHeader;
