import React from 'react';

const Toast = ({ msg }) => {
    return (
        <div className='fixed min-w-fit top-1/2 left-1/2 right-1/2 text-center' style={{ transform: 'translate(-50%, -50%)', zIndex: 100000 }}>
            <span className='py-1.5 px-3 rounded-md text-white text-center' style={{ backgroundColor: '#4f4f4f' }}>{msg}</span>
        </div>
    )
}

export default Toast;