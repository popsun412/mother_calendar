import { Box, Button, Drawer } from '@material-ui/core';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Locker = () => {

    const [state, setState] = useState({
        top: false,
        left: true,
        bottom: false,
        right: false
    })
    
    const toggleDrawer = (anchor, open) => () => {
        setState({...state, [anchor]: open})
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 240 }}
            role="presentation"
            onClick={toggleDrawer('left', false)}
            onKeyDown={toggleDrawer('left', false)}
        >
            <div className='' style={{margin: '24px 22px'}}>
                <h3 className='text-2xl font-semibold'>보관함</h3>
                <div className='mt-8 grid grid-rows-4'>
                    <div className='flex justify-center items-center' 
                        style={{width: '200px', height: '140px', borderRadius: '15px', backgroundColor: '#f8f6f5', marginBottom: '18px'}}>
                        <Link href={{
                            pathname: '/bookshelf'
                        }}>
                            <div className='text-center'>
                                <div className='flex justify-center'><img src='/images/ic_book@2x.png' style={{width: '44px', height: '44px'}}/></div>
                                <div className='mt-2 text-lg font-semibold'>책장</div>
                                <div className='text-base'>5개</div>
                            </div>
                        </Link>
                    </div>
                    <div className='flex justify-center items-center' 
                        style={{width: '200px', height: '140px', borderRadius: '15px', backgroundColor: '#f8f6f5', marginBottom: '18px'}}>
                        <Link href={{
                            pathname: '/edutool'
                        }}>
                            <div className='text-center'>
                                <div className='flex justify-center'><img src='/images/ic_teaching_aid@2x.png' style={{width: '44px', height: '44px'}}/></div>
                                <div className='mt-2 text-lg font-semibold'>교구장</div>
                                <div className='text-base'>5개</div>
                            </div>
                        </Link>
                    </div>
                    <div className='flex justify-center items-center' 
                        style={{width: '200px', height: '140px', borderRadius: '15px', backgroundColor: '#f8f6f5', marginBottom: '18px'}}>
                        <Link href={{
                            pathname: '/instimap'
                        }}>
                            <div className='text-center'>
                                <div className='flex justify-center'><img src='/images/ic_academy@2x.png' style={{width: '44px', height: '44px'}}/></div>
                                <div className='mt-2 text-lg font-semibold'>학원지도</div>
                                <div className='text-base'>5개</div>
                            </div>
                        </Link>
                    </div> 
                    <div className='flex justify-center items-center' 
                        style={{width: '200px', height: '140px', borderRadius: '15px', backgroundColor: '#f8f6f5', marginBottom: '18px'}}>
                        <Link href={{
                            pathname: '/exmap'
                        }}>
                            <div className='text-center'>
                                <div className='flex justify-center'><img src='/images/ic_field_trip@2x.png' style={{width: '44px', height: '44px'}}/></div>
                                <div className='mt-2 text-lg font-semibold'>체험지도</div>
                                <div className='text-base'>5개</div>
                            </div>
                        </Link>
                    </div> 
                </div>
            </div>
        </Box>
    );

    return (
        <React.Fragment key={'left'}>
            <Drawer
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
            >
                {list('left')}
            </Drawer>
        </React.Fragment>
    )
}

export default Locker;