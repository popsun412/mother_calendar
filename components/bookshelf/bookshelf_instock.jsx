import React, { useState, useEffect } from 'react';
import network from '../../util/network';

const BookshelfInstock = () => {

    const [data, setData] = useState([]);

    // 500에러
    useEffect(() => {
        const getData = async () => {
            const res = await network.post('/locker/items', {
                limit: 20,
                status: 0,
                subject: '',
                field: '',
                lockerType: '책장',
                region: ''
            })
            res.data ? setData(res.data) : null;
        }
        getData();
    }, [])

    return (
        <div className='mt-5 mx-5'>
            {
                data.map((item, index) => {
                    return (
                        <div className='flex' key={index} style={{ marginBottom: '22px' }}>
                            <div className='mr-4'>
                                <img src={item.image} className='rounded-md border border-solid border-color4' style={{ width: '94px', height: '94px' }} />
                            </div>
                            <div>
                                <div className='font-semibold' style={{ fontSize: '15px', letterSpacing: '-0.3px' }}>{item.name}</div>
                                <div>
                                    <span className='px-1.5 text-xs textGray3 rounded mr-1.5'
                                        style={{ paddingTop: '3px', paddingBottom: '3px', backgroundColor: '#f0f5f8' }}>{item.subject}</span>
                                    <span className='px-1.5 text-xs textGray3 rounded'
                                        style={{ paddingTop: '3px', paddingBottom: '3px', backgroundColor: '#f0f5f8' }}>{item.field}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BookshelfInstock;