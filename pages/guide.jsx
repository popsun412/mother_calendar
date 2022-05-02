import { MoreVert } from '@material-ui/icons';
import React from 'react';
import ReactPlayer from 'react-player';

const Guide = () => {
    return (
        <div>
            <header className='sticky top-0 left-0 right-0 visible opacity-100 bg-white z-100' style={{marginBottom: '-50px'}}>
                <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white border-b border-solid border-gray3' style={{height: '50px'}}>
                    <div className='flex-1 flex items-center'>
                        <div style={{width: '50px'}}>
                            <img src='/images/ic_back.png' onClick={() => {window.history.back()}}/>
                        </div>
                        <div className='my-0 mx-auto text-base font-medium' style={{letterSpacing: '-0.3px'}}>가이드 영상</div>
                        <div style={{width: '50px'}}>
                        </div>
                    </div>
                </div>
            </header>
            <main style={{marginTop: '50px'}}>
                <section className='mx-5' style={{paddingTop: '18px'}}>
                    <div className='flex mb-6 justify-between'>
                        <div>
                            <img src='https://picsum.photos/200/200' className='w-10 h-10' style={{borderRadius: '20px'}}/>
                        </div>
                        <div>
                            <div className='text-sm' style={{letterSpacing: '-0.56px'}}>수민맘</div>
                            <div className='text-xs textGray3' style={{letterSpacing: '-0.36px'}}>2022년 1월 31일</div>
                        </div>
                        <div className='flex'>
                                <div className='text-xs textOrange3 border border-solid border-color3' 
                                    style={{borderRadius: '13.5px', padding: '0 9px', maxHeight: '22px'}}>5세 5세 8세, 서울, 엄마표</div>
                            <MoreVert className='textGray3'/>
                        </div>
                    </div>
                    <div className='flex mb-3'>
                        <div className='bg5 text-white text-xs px-1.5 rounded' style={{paddingTop: '3px', paddingBottom: '3px'}}>국어</div>
                        <div className='ml-2 text-base'>한글 떼기 워크북 풀기</div>
                    </div>
                    <div className='flex border border-solid rounded-md justify-center items-center' style={{height: '38px'}}>
                        <div className='textGray2 text-base font-semibold mr-1' style={{letterSpacing: '-0.32px'}}>1주차</div>
                        <div className='textGray2' style={{fontSize: '15px', letterSpacing: '-0.3px'}}>우리아이 습관기르기 첫번째</div>
                    </div>
                </section>
                <section className='mt-4'>
                    {/* <video controls loop muted autoPlay style={{width: '360px', height: '360px'}}>
                        <source src="https://youtu.be/hX_XYdgjGkw" />
                    </video> */}
                    <ReactPlayer url='https://youtu.be/hX_XYdgjGkw' playing={false} controls={true} width='360px' height='360px'/>
                </section>
                <section className='mt-4'>
                    <div className='mx-5' style={{fontSize: '13px', letterSpacing: '-0.52px'}}>
                        집중력 떨어질까봐 책상은 다 비웠었는데, 교재 종류가 증가하다보니 어쩔 수 없이 매일 보는 것은 가까이 꽂아두었습니다니다니나디나디나디나디나디나디나
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Guide;