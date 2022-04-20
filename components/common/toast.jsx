import React from 'react';

const Toast = ({msg}) => {
    return (
        <div className='absolute top-1/2 left-1/2 right-1/2 text-center' style={{height: '30px', minWidth: '200px', transform: 'translate(-50%, -50%)'}}>
            <span className='py-1.5 px-3 rounded-md text-white text-center' style={{backgroundColor: '#4f4f4f'}}>{msg}</span>
        </div>
    )
}

export default Toast;