import React from 'react';

const PlanMain = (props) => {

    const { data } = props;

    return (
        <>
            <section className='mb-6'>
                <div className='block relative'>
                    <img src='/images/banner.png' />
                    <span className='block absolute text-white font-bold bottom-0 left-0 text-lg mb-12 ml-5'
                        style={{ letterSpacing: '-0.54px', fontFamily: 'NanumSquareRoundOTF' }}>{data.name}</span>
                    <div className='block absolute bottom-0 left-0 mb-6 ml-5 mt-1 text-xs'>
                        <span className='mr-2 py-1 px-1.5 rounded textOrange1' style={{ letterSpacing: '-0.12px', backgroundColor: 'rgba(219, 239, 253, 0.2)' }}>{data.subject}</span>
                        <span className='py-1 px-1.5 rounded textOrange1' style={{ letterSpacing: '-0.12px', backgroundColor: 'rgba(219, 239, 253, 0.2)' }}>{data.field}</span>
                    </div>
                    <div className='block absolute bottom-0 right-0'>
                        <div className='mr-5 mb-1'>
                            <img src='/images/ic_add_circle.png' className='mx-auto' />
                            <div className='mb-5 text-xs text-white text-center mx-auto'>{data.recommTerm}</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PlanMain;