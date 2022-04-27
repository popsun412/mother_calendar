import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Parents = () => {

    const [data, setData] = useState([]);
    const [order, setOrder] = useState(true);

    const getData = async(param) => {
        let order = '';
        param ? order = 'DESC' : order = 'ASC';
        const res = await axios('http://localhost:4000/etc/data', {
            method: 'GET',
            params: {
                order: order
            }
        })
        if (res.data) setData(res.data);
    }

    const addBookmark = (item) => () => {
        console.log(item);
        
        const res = axios('http://localhost:4000/common/bookmark', {
            method: 'POST',
            params: {
                category: 'etc',
                itemid: item.id,
                title: item.title,
                userid: 'hanna'
            }
        })
        if (res.data) alert('완료!')
    }

    useEffect(() => {
        getData(order);
    }, [])

    const clickOrder = () => {
        setOrder(!order);
        getData(order);
    }

    return (
        <div>
            <header className='sticky top-0 left-0 right-0 visible opacity-100 pb-3.5 bg-white z-100' style={{marginBottom: '-50px'}}>
                <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white border-b border-solid border-gray3' style={{height: '50px'}}>
                    <div className='flex-1 flex items-center'>
                        <img src='/images/ic_back.png' onClick={() => {window.history.back()}}/>
                        <div className='my-0 mx-auto text-base font-medium' style={{letterSpacing: '-0.3px'}}>기타</div>
                    </div>
                </div>
            </header>
            <main className='my-14'>
                <div className='mx-4'>
                    <div className='block relative' style={{height: '26px'}}>
                        <div className='block absolute right-0'>
                            <span className='bg-gray2 py-1.5 px-2 text-xs text-center textGray2 rounded' onClick={clickOrder}>↑↓ 이름순</span>
                        </div>
                    </div>
                    <div className='mt-5'>
                        {
                            data.map((item, idx) => {
                                return (
                                    <div className='flex mt-5' key={idx}>
                                        <div className='mr-4 block relative'>
                                            <img src={item.img} className='rounded-md'/>
                                            <img src='/images/ic_bookmark.png' className='block absolute bottom-0 right-0 mr-2 mb-1.5' onClick={addBookmark(item)}/>
                                        </div>
                                        <div>
                                            <h3 className='text-base font-semibold mb-1.5' style={{letterSpacing: '-0.3px'}}>{item.title}</h3>
                                            <div className='flex'>
                                                <span className='py-1 px-1.5 mr-1.5 rounded text-xs textGray3' style={{backgroundColor: '#f0f5f8'}}>{item.tag1}</span>
                                                <span className='py-1 px-1.5 mr-1.5 rounded text-xs textGray3' style={{backgroundColor: '#f0f5f8'}}>{item.tag2}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Parents;