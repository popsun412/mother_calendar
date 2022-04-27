import axios from 'axios';
import React, { useEffect, useState } from 'react';

const HomePlace = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async() => {
            const res = await axios.get('http://localhost:4000/home/place');
            if (res) {
                setData(res.data);
            }
        }
        getData();
    }, [])

    return (
        <section className='my-0 mx-5'>
            <h3 className='text-xl font-semibold mb-5 mt-5' style={{letterSpacing: '-0.4px'}}>인기 체험장소</h3>
            <div className='mt-2'>
                {
                    data.map((item, idx) => {
                        return (
                            <div className='flex mx-0 my-5' key={idx}>
                                <div className='mr-3 block relative'>
                                    <span className='absolute block top-0 py-1 px-2 text-xs text-white bg-blue3 rounded-tl-md rounded-br-md'>{item.ranking}위</span>
                                    <img src='/images/place1.png' width={'96px'} height={'96px'} className='rounded-md'/>
                                    <img src='/images/ic_bookmark.png' className='absolute block bottom-0 right-0 mr-2 mb-1.5'/>
                                </div>
                                <div>
                                    <h3 className='text-base font-semibold' style={{letterSpacing: '-0.3px'}}>{item.title}</h3>
                                    <div className='flex mt-1.5'>
                                        <span className='h-5 py-0.5 px-1.5 mr-1.5 rounded text-xs' style={{ backgroundColor: '#f0f5f8'}}>{item.tag1}</span>
                                        <span className='h-5 py-0.5 px-1.5 mr-1.5 rounded text-xs' style={{ backgroundColor: '#f0f5f8'}}>{item.tag2}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default HomePlace;
