/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { getSubjectImage } from "../../util/helper";

const PlanHeader = (props) => {

    const { name, subject } = props;
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
                                <div className='absolute flex justify-center items-center mx-3 left-0 right-0'>
                                    <img className="w-4 h-4 mr-2" src={getSubjectImage(subject)} onClick={() => { window.history.back() }} />
                                    <span>{name}</span>
                                </div>
                                <div className="relative -left-4">
                                    <img src='/images/ic_back.png' className="w-10" onClick={() => { window.history.back() }} />
                                </div>
                            </div> : <img src='/images/ic_banner_aos.png' onClick={() => { window.history.back() }} />
                    }
                </div>
            </header>
        </>
    )
}

export default PlanHeader;