import React, { useEffect, useState } from 'react';
import { getLocktypeImage } from "../../util/helper";

const PlaceHeader = (props) => {

    const { name, lockerType } = props;
    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    }, []);

    return (
        <>
            <header className='sticky top-0 left-0 right-0 opacity-100 visible z-100' style={{ marginBottom: '-50px' }}>
                <div className={`mx-auto my-0 border-box relative flex items-center py-4 w-full 
                        ${scrollPosition > 60 ? 'bg-white border-b border-solid border-gray3' : ''}`} style={{ height: '50px' }}>
                    {
                        scrollPosition > 60 ?
                            <div className='flex mx-5 w-full items-center relative'>
                                <div>
                                    <img src='/images/ic_back.png' onClick={() => { window.history.back() }} />
                                </div>
                                <div className='text-center flex-1 flex items-center absolute left-0 right-0 justify-center mx-6'>
                                    <img className="w-4 h-4 mr-2" src="/images/locker/locker4.png" /><span> {name}</span>
                                </div>
                                <img src='/images/ic_back.png' className='hidden' />
                            </div> : <img src='/images/ic_banner_aos.png' onClick={() => { window.history.back() }} />
                    }
                </div>
            </header>
        </>
    )
}

export default PlaceHeader;