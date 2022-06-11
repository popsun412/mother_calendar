/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function FeedHeader(props) {
    return <header className='fixed top-0 left-0 right-0 visible opacity-100 bg-white z-100'>
        <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white border-b border-solid border-gray3' style={{ height: '50px' }}>
            <div className='flex-1 flex items-center justify-between'>
                <div>
                    <img src='/images/logo_new.png' width={139} />
                </div>
                <div onClick={() => props.setFilterOpen(true)}>
                    <img src='/images/filter.png' className='w-5' style={{ height: '18px' }} />
                </div>
            </div>
        </div>
    </header>
}