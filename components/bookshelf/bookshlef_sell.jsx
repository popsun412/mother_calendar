import React, { useState, useEffect } from 'react';
import moment from 'moment';
import network from '../../util/network';

const BookshelfSell = (props) => {

    const { params } = props;
    const [data, setData] = useState([]);

    // 500에러
    useEffect(() => {
        const getData = async () => {
            const res = await network.post('/locker/items', params)
            res.data ? setData(res.data) : null;
        }
        getData();
    }, [params])

    return (
        <div className='mt-5 mx-5'>
            {
                data.map((item, index) => {
                    return (
                        <div className='flex opacity-30' key={index} style={{ marginBottom: '22px' }}>
                            <div className='mr-4'>
                                <img src={item.image} className='rounded-md border border-solid border-color4' style={{ width: '94px', height: '94px' }} />
                            </div>
                            <div>
                                <div className='font-semibold' style={{ fontSize: '15px', letterSpacing: '-0.3px' }}>{item.name}</div>
                                <div className='textGray3' style={{ fontSize: '13px' }}>{moment(item.regDt).format('YYYY.MM.DD')} 구매</div>
                                <div></div>
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

export default BookshelfSell;