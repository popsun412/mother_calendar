import React from 'react';

const CategoryHeader = (props) => {

    const type = props.type;
    let header = '';

    type == 'edu' ? header = '교육' : type == 'exp' ? header = '체험' : type == 'etc' ? header = '기타' : header = '부모' 

    return (
        <header className='sticky top-0 left-0 right-0 visible opacity-100 pb-3.5 bg-white z-100' style={{marginBottom: '-50px'}}>
            <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white' style={{height: '50px'}}>
                <div className='flex-1 flex items-center'>
                    <img src='/images/ic_back.png' onClick={() => {window.history.back()}}/>
                    <div className='my-0 mx-auto text-base font-medium' style={{letterSpacing: '-0.3px'}}>{header}</div>
                </div>
            </div>
        </header>
    )
}

export default CategoryHeader;
