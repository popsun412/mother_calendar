import React from 'react';

const JointPlanHeader = (props) => {

    const { data } = props;

    return (
        <header className='sticky top-0 left-0 right-0 opacity-100 visible z-100' style={{marginBottom: '-50px'}}>
            <div className='flex relative mx-auto my-0 box-border py-4 w-full bg-white' style={{height: '50px'}}>
                <div className='ml-5'>
                    <img src='/images/ic_back.png' onClick={() => {window.history.back()}}/>
                </div>
                <div className='my-0 mx-auto'>
                    <span className='text-base font-medium'>페파피그1 영상</span>
                </div>
                <div className='mr-4'>
                    <span className='text-base textOrange5'>완료</span>
                </div>
            </div>
        </header>
    )
}

export default JointPlanHeader;