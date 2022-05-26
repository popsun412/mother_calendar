import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import network from '../../util/network';

const ResultBody = (props) => {

    const {keyword, setKeword} = props;
    const [data, setData] = useState([]);

    useEffect(() => {
        
        const getData = async() => {
            const res = await network.post('/search', {
                keyword: props.keyword
            })
            res.data ? setData(res.data) : '';
        }

        getData();

    }, [keyword]);

    return (
        <main style={{marginTop: '90px'}}>
            <div className='m-5'>
                {
                    data.length > 0 ? 
                        data.map((item, idx) => {
                            return (
                                <Link key={idx}
                                    href={{
                                        pathname: item.category == 'place' ? '/place' : '/item',
                                        query: {
                                            commonItemUid: item.commonItemUid
                                        }
                                    }}>
                                    <div className='flex py-3 px-0'>
                                        <div style={{marginRight: '15px'}}>
                                            <img src={item.image} width={'94px'} height={'94px'} className='rounded-md'/>
                                        </div>
                                        <div>
                                            <h3 className='font-semibold text-base' style={{letterSpacing: '-0.3px'}}>{item.name}</h3>
                                            <div>
                                                <span className='text-center font-medium text-xs rounded textGray3 px-1.5 py-1 mr-1.5' style={{backgroundColor: '#f0f5f8'}}>{item.field}</span>
                                                <span className='text-center font-medium text-xs rounded textGray3 px-1.5 py-1 mr-1.5' style={{backgroundColor: '#f0f5f8'}}>{item.subject}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }) : <div className='absolute top-1/2 left-4 right-4' style={{transform: 'translateY(-50%)'}}>
                                    <div className='items-center justify-center'>
                                        <img src='/images/no_result.png' width={'93px'} height={'113px'} style={{margin: '0 auto'}}/>
                                        <div className='text-sm text-center textGray4 mt-2.5' style={{lineHeight: 1.7, letterSpacing: '-0.28px'}}>검색 결과가 없습니다.</div>
                                    </div>
                                </div>
                }
            </div>
        </main>
    )
}

export default ResultBody;