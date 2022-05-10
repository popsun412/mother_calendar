import React, { useEffect, useState } from 'react';

const RuntypeData = (props) => {

    const {cal} = props;
    const [key, setKey] = useState([]);

    console.log(props)
    useEffect(() => {
    }, [])
    

    return (
        <>
            <section>
                <div className='mx-5 h-30'>
                    <div className='relative flex w-full' style={{top: '47px', bottom: '47px'}}>
                        <div className='rounded-tl-md rounded-bl-md' style={{backgroundColor: '#ff9d00', height: '26px', marginRight: '2.4px', width: '35%'}}/>
                        <div style={{backgroundColor: '#37cc53', height: '26px', marginRight: '2.4px', width: '25%'}}/>
                        <div style={{backgroundColor: '#f4d100', height: '26px', marginRight: '2.4px', width: '20%'}}/>
                        <div style={{backgroundColor: '#ff84bf', height: '26px', marginRight: '2.4px', width: '15%'}}/>
                        <div className='rounded-tr-md rounded-br-md' style={{backgroundColor: '#828282', height: '26px', width: '10%'}}/>
                    </div>
                </div>
            </section>
            <section>
                <div className='flex justify-between' style={{marginLeft: '30px', marginRight: '30px', height: '59px'}}>
                    <div className='flex items-center'>
                        <div className='w-3.5 h-3.5 rounded-full' style={{backgroundColor: '#ff9d00'}}/>
                        <div className='ml-3' style={{fontSize: '15px', letterSpacing: '-0.3px'}}>영어</div>
                    </div>
                    <div className='flex items-center'>
                        <div className='text-xs textGray4'>실행 5일</div>
                        <div className='ml-3.5 text-base textGray2'>43%</div>
                    </div>
                </div>
                <div className='flex justify-between' style={{marginLeft: '30px', marginRight: '30px', height: '59px'}}>
                    <div className='flex items-center'>
                        <div className='w-3.5 h-3.5 rounded-full' style={{backgroundColor: '#37cc53'}}/>
                        <div className='ml-3' style={{fontSize: '15px', letterSpacing: '-0.3px'}}>수학</div>
                    </div>
                    <div className='flex items-center'>
                        <div className='text-xs textGray4'>실행 5일</div>
                        <div className='ml-3.5 text-base textGray2'>43%</div>
                    </div>
                </div>
                <div className='flex justify-between' style={{marginLeft: '30px', marginRight: '30px', height: '59px'}}>
                    <div className='flex items-center'>
                        <div className='w-3.5 h-3.5 rounded-full' style={{backgroundColor: '#f4d100'}}/>
                        <div className='ml-3' style={{fontSize: '15px', letterSpacing: '-0.3px'}}>미술</div>
                    </div>
                    <div className='flex items-center'>
                        <div className='text-xs textGray4'>실행 5일</div>
                        <div className='ml-3.5 text-base textGray2'>43%</div>
                    </div>
                </div>
                <div className='flex justify-between' style={{marginLeft: '30px', marginRight: '30px', height: '59px'}}>
                    <div className='flex items-center'>
                        <div className='w-3.5 h-3.5 rounded-full' style={{backgroundColor: '#ff84bf'}}/>
                        <div className='ml-3' style={{fontSize: '15px', letterSpacing: '-0.3px'}}>영어</div>
                    </div>
                    <div className='flex items-center'>
                        <div className='text-xs textGray4'>실행 5일</div>
                        <div className='ml-3.5 text-base textGray2'>43%</div>
                    </div>
                </div>
                <div className='flex justify-between' style={{marginLeft: '30px', marginRight: '30px', height: '59px'}}>
                    <div className='flex items-center'>
                        <div className='w-3.5 h-3.5 rounded-full' style={{backgroundColor: '#828282'}}/>
                        <div className='ml-3' style={{fontSize: '15px', letterSpacing: '-0.3px'}}>그 외</div>
                    </div>
                    <div className='flex items-center'>
                        <div className='text-xs textGray4'>실행 5일</div>
                        <div className='ml-3.5 text-base textGray2'>43%</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RuntypeData;