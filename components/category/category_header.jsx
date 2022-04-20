import React from 'react';

const CategoryHeader = () => {

    const onClick = () => {
        window.history.back();
    }

    return (
        <header className='sticky top-0 left-0 right-0 visible opacity-100 pb-3.5 bg-white z-100' style={{marginBottom: '-50px'}}>
            <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white' style={{height: '50px'}}>
                <div className='flex-1 flex items-center'>
                    <img src='/images/ic_back.png' onClick={onClick}/>
                    <div className='my-0 mx-auto text-base font-medium' style={{letterSpacing: '-0.3px'}}>교육</div>
                </div>
            </div>
        </header>
    )
}

export default CategoryHeader;