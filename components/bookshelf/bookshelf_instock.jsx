import React from 'react';

const BookshelfInstock = () => {

    const data = [
        {
            title: '잉글리시 에그 Step 1',
            imgUrl : 'https://picsum.photos/id/511/200/200',
            tag1: '전집',
            tag2: '자연동물'
        },
        {
            title: '잉글리시 에그 Step 1',
            imgUrl : 'https://picsum.photos/id/512/200/200',
            tag1: '전집',
            tag2: '자연동물'
        },
        {
            title: '잉글리시 에그 Step 1',
            imgUrl : 'https://picsum.photos/id/513/200/200',
            tag1: '전집',
            tag2: '자연동물'
        },
        {
            title: '잉글리시 에그 Step 1',
            imgUrl : 'https://picsum.photos/id/514/200/200',
            tag1: '전집',
            tag2: '자연동물'
        },
        {
            title: '잉글리시 에그 Step 1',
            imgUrl : 'https://picsum.photos/id/515/200/200',
            tag1: '전집',
            tag2: '자연동물'
        },
        {
            title: '잉글리시 에그 Step 1',
            imgUrl : 'https://picsum.photos/id/516/200/200',
            tag1: '전집',
            tag2: '자연동물'
        },
        {
            title: '잉글리시 에그 Step 1',
            imgUrl : 'https://picsum.photos/id/517/200/200',
            tag1: '전집',
            tag2: '자연동물'
        },
        {
            title: '잉글리시 에그 Step 1',
            imgUrl : 'https://picsum.photos/id/518/200/200',
            tag1: '전집',
            tag2: '자연동물'
        }
    ]

    return (
        <div className='mt-5 mx-5'>
        {
            data.map((item, index) => {
                return (
                    <div className='flex' key={index} style={{marginBottom: '22px'}}>
                        <div className='mr-4'>
                            <img src={item.imgUrl} className='rounded-md border border-solid border-color4' style={{width: '94px', height: '94px'}}/>
                        </div>
                        <div>
                            <div className='font-semibold' style={{fontSize: '15px', letterSpacing: '-0.3px'}}>{item.title}</div>
                            <div>
                                <span className='px-1.5 text-xs textGray3 rounded mr-1.5' 
                                    style={{paddingTop: '3px', paddingBottom: '3px', backgroundColor: '#f0f5f8'}}>{item.tag1}</span>
                                <span className='px-1.5 text-xs textGray3 rounded' 
                                    style={{paddingTop: '3px', paddingBottom: '3px', backgroundColor: '#f0f5f8'}}>{item.tag2}</span>
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