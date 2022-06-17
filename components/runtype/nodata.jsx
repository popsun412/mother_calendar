import React from 'react';

const NoData = () => {
    return (
        <>
            <section>
                <div className='mx-5 h-30'>
                    <div className='relative flex w-full' style={{ top: '47px', bottom: '47px' }}>
                        <div className='rounded-tl-md rounded-bl-md' style={{ backgroundColor: '#8e8e8e', height: '26px', marginRight: '2.4px', width: '35%' }} />
                        <div style={{ backgroundColor: '#b3b3b3', height: '26px', marginRight: '2.4px', width: '28%' }} />
                        <div style={{ backgroundColor: '#e0e0e0', height: '26px', marginRight: '2.4px', width: '20%' }} />
                        <div className='rounded-tr-md rounded-br-md' style={{ backgroundColor: '#ededed', height: '26px', marginRight: '2.4px', width: '17%' }} />
                    </div>
                </div>
            </section>
            <section>
                <div className='relative' style={{ marginBottom: '22px', marginTop: '100px' }}>
                    <img src='/images/img_empty.png' className='mx-auto' style={{ width: '97px', height: '108px' }} />
                </div>
                <div className='text-center'>
                    계획을 등록하고 실행해주세요!<br />
                    내 실행 유형을 그래프로 보여드려요.
                </div>
            </section>
        </>
    )
}

export default NoData;