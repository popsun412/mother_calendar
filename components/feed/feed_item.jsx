import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeedItem = (props) => {

    const [data, setData] = useState([]);
    const [closed, setClosed] = useState(false);

    useEffect(() => {
        const getData = async() => {
            const res = await axios('http://localhost:4000/feed/data', {
                method: 'GET'
            })

            if (res.data) setData(res.data);
        }
        getData();
    }, [])

    const handleMoreBtn = () => {
        setClosed(!closed);
    }

    return (
        <>
        {
            data.map((item, idx) => {
                return (
                    <div className='pb-8' style={{ marginTop: '18px' }} key={idx}>
                        <div className='mx-5 mb-6 flex justify-between'>
                            <div className='flex'>
                                <div className='mr-3'>
                                    <img src='https://picsum.photos/200/200' className='w-10 h-10 rounded-full'/>
                                </div>
                                <div>
                                    <div className='text-sm' style={{letterSpacing: '-0.56px'}}>{item.nickname}</div>
                                    <div className='text-xs textGray4' style={{letterSpacing: '-0.36px'}}>5분 전</div>
                                </div>
                            </div>
                            <div className='flex'>
                                <span className='textOrange3 border border-solid border-color3' 
                                    style={{borderRadius: '13.5px', fontSize: '11px', height: '22px', lineHeight: '22px', paddingLeft: '5px', paddingRight: '5px'}}>{item.tag}</span>
                                <img src='/images/more-horizontal.png' className='w-6 h-6 ml-2'/>
                            </div>
                        </div>
                        <div className='mx-5 mb-3 flex'>
                            <div className='px-1.5 text-xs text-white bg5 items-center rounded' style={{paddingTop: '3px', paddingBottom: '3px'}}>{item.type}</div>
                            <div className='ml-2 text-base' style={{fontFamily: 'NanumSquareRoundOTF', letterSpacing: '-0.48px'}}>{item.target}</div>
                        </div>
                        <div className='mx-5 mb-4 flex border border-solid border-color4 rounded-md justify-center' style={{height: '38px'}}>
                            <div className='mr-1.5'><img src='/images/ic_book.png'  className='mt-2'/></div>
                            <div className='textOrange5' style={{fontSize: '15px', letterSpacing: '-0.3px', lineHeight: '38px'}}>{item.title}</div>
                        </div>
                        <div>
                            <img src={item.img} className='w-90 h-90'/>
                        </div>
                        <div className='mx-5'>
                            <div className='mt-4'>
                                <div className={closed ? 'text' : 'text-close'}>
                                    {item.contents}
                                    <div className={`absolute textGray3 bottom-0 right-0 bg-white px-2.5`} onClick={handleMoreBtn}>{closed ? '숨기기' : '... 더보기'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}

export default FeedItem;