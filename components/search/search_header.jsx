import Link from 'next/link';
import React, { useState } from 'react';

const SearchHeader = () => {

    const [value, setValue] = useState('');

    const onClick = () => {
        window.history.back();
    }

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <header className='sticky top-0 left-0 right-0 opacity-100 visible pb-3.5 bg-white z-100' style={{marginBottom: '-74px'}}>
            <div className='my-0 mx-auto py-0 px-4 relative flex bg-white items-center border-b border-solid w-full h-15 border-gray3'>
                <div className='flex-1 flex items-center'>
                    <img src='/images/ic_back.png' className='mr-4' onClick={onClick}/>
                    <input type='text' value={value} placeholder='검색어를 입력해주세요.' className='block w-full text-base font-light py-0' 
                        style={{letterSpacing: '-0.6px'}} onChange={onChange}/>
                    <Link
                        href={{
                            pathname: `/result/`,
                            query: { value: value },
                        }}
                        as={`/result/`}
                    >
                        <img src='/images/ic_search_black.png' className='ml-4'/>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default SearchHeader;