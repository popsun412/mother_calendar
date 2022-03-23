
export default function ItemDetail() {
    return (
        <div className="relative">
            <div className="w-full h-full verflow-y-scroll scrollbar-hide">
                <div className="bg-[url('/images/banner.png')] bg-cover" style={{ height: "12.93rem" }}>
                    {/* 흑, 아이콘이 안 넣어져요.... 도와주세요*/}

                    <img src="/images/arrow-right-circle.png" className="absolute bottom-3 right-3" alt="상세보기버튼" />
                    <div className="absolute left-4 top-24 text-xs font-semibold text-white bg5 rounded-2xl py-1 px-2">99명 참여중 👦</div>
                    <p className="absolute left-4 top-36 textWhite text-base font-extrabold">A-Z까지 파닉스 워크북 풀기</p>
                    <div
                        className="absolute left-4 top-44 text-xs font-bold textOrange1 rounded"
                        style={{ backgroundColor: "rgba(219, 239, 253, 0.2)", padding: "3px 4px", }}
                    >
                        <div>영어</div>
                    </div>
                </div>
                <div className="px-5 py-6 textGray1">
                    <p className="font-semibold text-base mb-2">어떤 아이템인가요?</p>
                    <p className="font-normal text-sm"> {/* p로 하면 엔터가 안 먹히네요; 이럴땐 어떻게 해야해요? */}
                        아이가 궁금해할만한 과학적/자연현상에 대해 귀여운 그림체로 흥미롭게 설명해놓은 과학전집이에요! 📒 공룡은 어떻게 멸망했는지, 우리의 음식은 어떤 과정을 통해 소화가 되는지 등 초등학교 교과서와 연계되는 배경 지식을 기를 수 있고 맨 뒤페이지에 나오는 간단한 과학실험도 따라해볼만 해요.

                        🥽🥼 저는 공룡덕후인 아들에게 어떻게 공룡이 멸망했는지에 설명해주기 힘들어서 구매했는데 다른 권들도 아이가 궁금해할만한 주제로 이루어져 있어서 좋았어요. 다만 추피처럼 서양 기준 캐릭터와 문화가 녹아있어 낯설 수 있고, 음원이나 리딩펜이 없어 엄마 목이 좀 아플 수 있지요. 😂

                        1. 이름: 물아저씨 과학그림책 2. 영역: 과학, 소전집, 자연과학지식 3. 연령: 유아(4-6세), 취학전(7세), 초등저학년 ※ 6세부터 초등저학년까지 잘보는 책입니다. 4. 유사상품: #내친구과학공룡 #지식특공대 #공룡대발이과학동화 #교원솔루토이과학 5. 구성: 책 18권, 1월에 18번째 신간이 새로 추가됐어요. 6. 가격: 18권 기준 네이버 10만원대, 15권짜리 중고 4~5만원, 17권짜리 6~7만원 ❗ 신규구매팁: 22년 1월에 특별판이 한권 더 추가되어 총 18권이 되었어요. 17권짜리는 9만원대, 맘카페/인스타 공구에선 7만원대에 구매 가능합니다. -공구를 통해 구매할 경우는 저렴하기도 하지만 별다른 사은품이나 활동지가 없는 일반 상품에 비해 참고자료나 영상을 함께주니 당장 필요하지않으면 공구를 기다려보는것도 좋아요. ❗ 중고구매팁: 특별판 2권은 별도로 옥션 등 오픈마켓에서 구매할 수 있어요. 15권 본권만 중고로 사고 특별판만 신간으로 사는 것도 방법입니다. 다만 특별판 3번째 권은 금년에 새로 출시되어 아직 18권짜리 중고는 구매하기 어려워요. 😢 ✔ 활용팁: 각 권마다 맨 뒤페이지에 간단한 과학실험이 있는데 재료도 보통 집에 있는 것이라 따라해볼만 합니다. ✔ 참고자료: 유튜브 https://youtu.be/hKelOA7Uxw8 출판사 예림당이 올려놓은 영상입니다. -인스타나 네이버까페를 통해 공구할 경우 판매자가 활동지나 놀이팁 강의를 같이 주는 경우가 많아요.
                    </p>
                </div>
            </div>
            {/* footer에 붙여놓고 싶은데 position을 잘못 썼을까요? */}
            <div className="px-4 py-5 absolute bottom-0 left-0 right-0 bg-white">
                <span className="flex justify-center py-4 bg5 rounded-md text-white font-semibold text-sm">내 보관함에 등록하기</span>
            </div>

        </div>
    )
}