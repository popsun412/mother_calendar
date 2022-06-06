/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const SearchHeader = () => {
    const router = useRouter();

    const [value, setValue] = useState('');

    const onClick = () => {
        window.history.back();
    }

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className='mx-auto px-4 flex bg-white items-center border-b border-solid w-full border-gray3 h-12'>
            <div className='flex-1 flex items-center'>
                <img src='/images/ic_back.png' className='mr-4' onClick={onClick} />
                <input type='text' value={value} placeholder='검색어를 입력해주세요.' className='block w-full text-base font-light py-0'
                    style={{ letterSpacing: '-0.6px' }} onChange={onChange} onKeyDown={(e) => {
                        if (e.key == 'Enter' || e.key == 'enter') {
                            const _href = { pathname: `/result/`, query: { value: value } };
                            router.push(_href);
                        }
                    }} />
                <Link
                    href={{ pathname: `/result/`, query: { value: value } }}
                    as={`/result/`}
                    passHref
                >
                    <img src='/images/ic_search_black.png' className='ml-4' />
                </Link>
            </div>
        </div>
    )
}

export default SearchHeader;