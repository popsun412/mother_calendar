import React, { useEffect, useState } from 'react';
import PlaceHeader from '../components/place/place_header';
import network from '../util/network';

const Place = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async() => {
            const res = await network.post();
            res.data ? setData(res.data) : null;
        }
        // getData();
    }, []);

    return (
        <div>
            <PlaceHeader />
            <main className='mb-28'>
                <section className='mb-7'>
                    <div className='block relative'>
                        <img src='/images/banner.png' />
                        <span className='block absolute bottom-0 left-0 text-lg text-white font-bold ml-5 mb-11' style={{fontFamily: 'NanumSquareRoundOTF'}}>애니메이션 센터</span>
                        <div className='block absolute bottom-0 left-0 ml-5 mb-5'>
                            <span className='textOrange1 text-xs rounded p-1 mr-1' style={{fontFamily: 'NanumSquareRoundOTF', backgroundColor: 'rgba(219, 239, 253, 0.2)'}}>서울</span>
                            <span className='textOrange1 text-xs rounded p-1' style={{fontFamily: 'NanumSquareRoundOTF', backgroundColor: 'rgba(219, 239, 253, 0.2)'}}>영어</span>
                        </div>
                        <div className='block absolute bottom-0 right-0 mr-5 mb-5'>
                            <img src='/images/ic_bookmarked.png' className='mx-auto'/>
                            <span className='text-xs text-white'>135</span>
                        </div>
                    </div>
                </section>
                <section className='mx-5'>
                    <div className='text-base font-semibold mb-2' style={{letterSpacing: '-0.32px'}}>어떤 체험장소인가요?</div>
                    <div className='text-sm' style={{letterSpacing: '-0.28px', lineHeight: '21px'}}>
                        아이가 궁금해할만한 과학적/자연현상에 대해 귀여운 그림체로 흥미롭게 설명해놓은 과학전집이에요! 📒 <br/>
                        공룡은 어떻게 멸망했는지, 우리의 음식은 어떤 과정을 통해 소화가 되는지 등 초등학교 교과서와 연계되는 배경 지식을 기를 수 있고 맨 뒤페이지에 나오는 간단한 과학실험도 따라해볼만 해요. 🥽🥼<br/><br/>

                        저는 공룡덕후인 아들에게 어떻게 공룡이 멸망했는지에 설명해주기 힘들어서 구매했는데 다른 권들도 아이가 궁금해할만한 주제로 이루어져 있어서 좋았어요.<br/>
                        다만 추피처럼 서양 기준 캐릭터와 문화가 녹아있어 낯설 수 있고, 음원이나 리딩펜이 없어 엄마 목이 좀 아플 수 있지요. 😂<br/><br/>

                        1. 이름: 물아저씨 과학그림책<br/>
                        2. 영역: 과학, 소전집, 자연과학지식<br/>
                        3. 연령: 유아(4-6세), 취학전(7세), 초등저학년<br/>
                        ※ 6세부터 초등저학년까지 잘보는 책입니다.<br/>
                        4. 유사상품: #내친구과학공룡 #지식특공대 #공룡대발이과학동화 #교원솔루토이과학<br/>
                        5. 구성: 책 18권, 1월에 18번째 신간이 새로 추가됐어요.<br/>
                        6. 가격: 18권 기준 네이버 10만원대, 15권짜리 중고 4~5만원, 17권짜리 6~7만원<br/><br/>

                        ❗ 신규구매팁: 22년 1월에 특별판이 한권 더 추가되어 총 18권이 되었어요. 17권짜리는 9만원대, 맘카페/인스타 공구에선 7만원대에 구매 가능합니다.<br/>
                        -공구를 통해 구매할 경우는 저렴하기도 하지만 별다른 사은품이나 활동지가 없는 일반 상품에 비해 참고자료나 영상을 함께주니 당장 필요하지않으면 공구를 기다려보는것도 좋아요.<br/>
                        ❗ 중고구매팁: 특별판 2권은 별도로 옥션 등 오픈마켓에서 구매할 수 있어요. 15권 본권만 중고로 사고 특별판만 신간으로 사는 것도 방법입니다. 다만 특별판 3번째 권은 금년에 새로 출시되어 아직 18권짜리 중고는 구매하기 어려워요. 😢<br/><br/>

                        ✔ 활용팁: 각 권마다 맨 뒤페이지에 간단한 과학실험이 있는데 재료도 보통 집에 있는 것이라 따라해볼만 합니다.<br/>
                        ✔ 참고자료: 유튜브 https://youtu.be/hKelOA7Uxw8 출판사 예림당이 올려놓은 영상입니다.<br/>
                        -인스타나 네이버까페를 통해 공구할 경우 판매자가 활동지나 놀이팁 강의를 같이 주는 경우가 많아요.<br/>

                    </div>
                </section>
            </main>
            <aside className='fixed bottom-0 left-0 right-0 z-100'>
                <div className='relative mx-auto my-0 bg-white'>
                    <nav className='flex items-center box-border relative' style={{height: '90px'}}>
                        <span className='text-sm text-white text-center p-4 m-5 w-full rounded-md bg5' 
                            style={{letterSpacing: '-0.28px'}}>내 보관함에 등록하기</span>
                    </nav>
                </div>
            </aside>
        </div>
    )
}

export default Place;