import { ArrowBackIosNewRounded } from "@mui/icons-material";

export default function Useinfo() {
  return (
    <div className="w-full h-screen overflow-y-auto scrollbar-hide">
      <div className="fixed max-w-500 bg-white top-0 flex items-center w-full px-4" style={{ height: 50 }}>
        <ArrowBackIosNewRounded className="relative flex-shrink-0" onClick={() => window.history.back()} style={{ width: 24, color: "#4f4f4f" }} />
        <div className="absolute left-0 right-0 mx-20 text-center text-base font-medium" style={{ letterSpacing: "-0.3px" }}>
          엄마의 캘린더 서비스 이용약관
        </div>
      </div>
      <div className="p-5">
        <br />
        <br />
        <h2 className="font-black text-xl mb-4">제 1 장 총칙</h2>
        <h3 className="font-black text-lg mb-2">제 1 조(목적)</h3>
        <p>
          본 약관은 주식회사 LG유플러스(이하 ‘회사’)가 운영하는 엄마의 캘린더 서비스(이하 ‘서비스’)를 이용함에 있어 필요한 그 이용조건 및 절차에 관한 사항을
          정함을 목적으로 합니다.
        </p>
        <br />
        <h3 className="font-black text-lg mb-2">제 2 조(용어의 정의)</h3>
        <p>본 약관에서 사용하는 용어의 정의는 다음 각 호와 같습니다.</p>
        <ul className="decimal ml-6">
          <div className="flex items-start">
            <span className="flex-shrink-0 mr-4">1.</span>
            <span>
              ‘서비스’란 구현되는 단말기(PC, 스마트폰, 휴대형단말기 등의 각종 유무선 장치를 포함)와 상관없이 이용자가 이용할 수 있는 ‘엄마의 캘린더’ 관련 제반
              서비스를 통칭합니다.
            </span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 mr-4">2.</span>
            <span>‘이용자’란 이 약관에 동의하며 회사와 서비스 이용계약을 체결하여 아이디(ID)와 비밀번호를 발급받고 서비스를 이용하는 자를 말합니다.</span>
          </div>
        </ul>
        <br />
        <h3 className="font-black text-lg mb-2">제 3 조 (약관의 명시, 효력 및 변경)</h3>
        <ul className="circleNumber">
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">1</span>
            <span>
              회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 홈페이지(mamadadacal.com) 의 초기화면(이하 ‘서비스 초기화면’)에 게시합니다. 다만, 약관의
              구체적인 내용은 이용자가 연결화면을 통하여 볼 수 있습니다.
            </span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">2</span>
            <span>
              회사는 「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보 보호 등에 관한 법률」 등 관련
              법령에 위배되지 않는 범위 에서 본 약관을 개정할 수 있습니다.
            </span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">3</span>
            <span>
              회사가 약관을 변경하는 경우에는 적용일자 및 개정사유를 명시하여 현행 약관과 함께 회사 서비스 초기화면에 최소 적용일자 15일전부터 적용일자까지
              고지합니다. 다만, 이용자에게 불리하게 약관의 내용을 변경하는 경우에는 적용일자 30일전부터 고지합니다.
            </span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">4</span>
            <span>
              회사가 제3항에 따라 약관 변경을 고지하면서 이용자에게 약관 변경 적용일까지 거부의사를 표시하지 아니할 경우 약관의 변경에 동의한 것으로 간주한다는
              내용을 고지하였음에도 이용 자가 명시적으로 약관 변경에 대한 거부의사를 표시하지 아니하면, 회사는 이용자가 변경 약 관에 동의한 것으로 간주합니다.
            </span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">5</span>
            <span>이용자가변경된약관에동의하지않을경우변경된약관의적용을받는해당서비스의제공 이 더 이상 불가능하게 됩니다.</span>
          </div>
        </ul>
        <br />
        <h3 className="font-black text-lg mb-2">제 4 조 (약관 외 준칙)</h3>
        <p>
          본 약관에 명시되지 아니한 사항에 대해서는 「약관의 규제에 관한 법률」, 「전자문서 및 전자 거래기본법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보
          보호 등에 관한 법률」 등 관련법 령에 따릅니다.
        </p>
        <br />
        <br />
        <h2 className="font-black text-xl mb-4">제 2 장 이용계약의 성립</h2>
        <h3 className="font-black text-lg mb-2">제 5 조 (이용계약의 성립)</h3>
        <ul className="circleNumber">
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">1</span>
            <span>이용계약은 이용자의 약관 동의 후 회사의 이용승낙에 따라 성립됩니다.</span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">2</span>
            <span>회사는 해당 서비스 화면에 이용승낙의 의사표시를 게시하거나 이용자에게 이용승낙의 의사표시를 제18조에서 정한 방법 등으로 통지합니다.</span>
          </div>
        </ul>
        <br />
        <h3 className="font-black text-lg mb-2">제 6 조 (이용신청)</h3>
        <p>서비스를 이용하고자 하는 자는 이용약관에 동의하거나 회사가 정하는 절차와 방법에 따라 이용 신청을 합니다.</p>
        <br />
        <h3 className="font-black text-lg mb-2">제 7 조 (이용신청의 승낙과 제한)</h3>
        <ul className="circleNumber">
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">1</span>
            <span>회사는 업무상 또는 기술상 장애가 없는 경우 이용자의 이용신청을 승낙합니다.</span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">2</span>
            <div className="flex-auto flex flex-col">
              <p>
                회사는 서비스 이용신청이 다음 각 호의 어느 하나에 해당하는 경우에 그 신청에 대하여 승낙제한 사유가 해소될 때까지 승낙을 유보할 수 있고, 승낙하지
                아니하거나 이미 승낙된 후 에는 승낙 취소할 수 있습니다.
              </p>
              <ul className="subNumbering">
                <div className="flex">
                  <span className="mr-2">1</span>
                  <p>회사의 설비에 여유가 없는 경우</p>
                </div>
                <div className="flex">
                  <span className="mr-2">2</span>
                  <p>회사의 기술상 지장이 있는 경우</p>
                </div>
                <div className="flex">
                  <span className="mr-2">3</span>
                  <p>기타 회사의 사정으로 이용승낙이 곤란한 경우</p>
                </div>
                <div className="flex">
                  <span className="mr-2">4</span>
                  <p>이용자가만14세미만인경우</p>
                </div>
                <div className="flex">
                  <span className="mr-2">5</span>
                  <p>서비스 중지 기록이 있는 이용자가 이용신청을 하는 경우</p>
                </div>
                <div className="flex">
                  <span className="mr-2">6</span>
                  <p>이용자가 부정한 목적으로 서비스를 이용하려는 경우</p>
                </div>
                <div className="flex">
                  <span className="mr-2">7</span>
                  <p>이용자가 제13조 각 호의 어느 하나에 해당하는 행위를 하려는 경우</p>
                </div>
                <div className="flex">
                  <span className="mr-2">8</span>
                  <p>그 밖에 위 각 호에 준하는 사유로서 이용신청 승낙이 곤란한 경우</p>
                </div>
              </ul>
            </div>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">3</span>
            <span>
              이용자는 이용자 정보에 변경이 있는 경우, 이용자 정보 수정 등의 방법으로 그 변경사항을 반영하여야 합니다. 이용자 정보 수정을 하지 않음으로써
              발생하는 이용자의 손해에 대하여 회사는 아무런 책임을 지지 않습니다.
            </span>
          </div>
        </ul>
        <br />
        <br />
        <h2 className="font-black text-xl mb-4">제 3 장 서비스의 제공</h2>
        <h3 className="font-black text-lg mb-2">제 8 조(서비스의 종류 및 이용요금)</h3>
        <ul className="circleNumber">
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">1</span>
            <div className="flex-auto flex flex-col">
              <p>회사가 이용자에게 제공하는 서비스의 종류는 다음 각 호와 같습니다.</p>
              <ul className="subNumbering">
                <div className="flex">
                  <span className="mr-2">1</span>
                  <p>영유아육아및교육관련계획(이하‘계획’)및계획을실행하는아이템등의정보</p>
                </div>
                <div className="flex">
                  <span className="mr-2">2</span>
                  <p>계획, 아이템, 타 이용자 검색</p>
                </div>
                <div className="flex">
                  <span className="mr-2">3</span>
                  <p>공개 캘린더 기반의 소셜네트워크서비스(SNS) 및 커뮤니티</p>
                </div>
                <div className="flex">
                  <span className="mr-2">4</span>
                  <p>개인및단체계획등록,실행인증및공유,아이템관리</p>
                </div>
                <div className="flex">
                  <span className="mr-2">5</span>
                  <p>지역모임 개설 및 참여</p>
                </div>
                <div className="flex">
                  <span className="mr-2">6</span>
                  <p>회사가 별도로 정한 서비스, 추가 개발하거나 다른 회사와의 제휴 등을 통해 이용자에게 제공하는 일체의 서비스</p>
                </div>
                <div className="flex">
                  <span className="mr-2">7</span>
                  <p>위 서비스에 수반되는 서비스(광고, 프로모션, 이벤트 포함)</p>
                </div>
              </ul>
            </div>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">2</span>
            <span>회사는 운영상 또는 기술상의 필요에 따라 제공하고 있는 전부 또는 일부 서비스를 변경할 수 있습니다.</span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">3</span>
            <span>회사가 제공하는 서비스는 기본적으로 무료입니다. 별도의 유료서비스의 경우 해당 서비스에 명시된 요금을 지불하여야 사용 가능합니다.</span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">3</span>
            <span>무선서비스 이용 시 발생하는 데이터 통신료는 별도이며, 회원이 가입한 각 이동통신사의 정 책에 따릅니다.</span>
          </div>
        </ul>
        <br />
        <h3 className="font-black text-lg mb-2">제 9 조 (서비스 개시 및 중지)</h3>
        <ul className="circleNumber">
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">1</span>
            <span>이용자의 서비스 이용기간은 서비스를 신청하여 이용승낙이 있는 날부터 개시되며, 이용자는 언제든 서비스 이용을 종료할 수 있습니다.</span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">2</span>
            <span>
              회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스의 제공을 제한하거나 일시중지할 수 있습니다.
            </span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">3</span>
            <div className="flex-auto flex flex-col">
              <p>회사는 이용자에게 다음 각 호의 어느 하나에 해당하는 사유가 발생하는 경우 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다.</p>
              <ul className="subNumbering">
                <div className="flex">
                  <span className="mr-2">1</span>
                  <p>본 약관에 규정된 이용자의 의무를 위반하는 경우</p>
                </div>
                <div className="flex">
                  <span className="mr-2">2</span>
                  <p>기타 관련 법령 등을 위반하는 경우</p>
                </div>
              </ul>
            </div>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">4</span>
            <span>
              회사가 제2항 또는 제3항에 따라 서비스 이용을 제한하거나 중지하고자 하는 때에는 그 사유, 일시 및 기간을 정하여 이용자에게 통지합니다. 다만, 회사가
              긴급하게 이용을 제한하거 나 중지해야 할 필요가 있다고 인정하는 경우에는 서비스 이용을 제한하거나 중지한 후 통지 할 수 있으며, 회사의 책임 없는
              사유로 통지할 수 없는 경우에는 서비스 초기화면 게시로 통지한 것으로 간주합니다.
            </span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">5</span>
            <span>
              회사가 시스템 개선공사, 장비증설, 정기점검 등 서비스를 제공할 수 없는 불가피한 사유가 있어 서비스 제공을 일시적으로 중지하고자 하는 경우에는 그
              사유 및 중지기간 등을 명시하 여 서비스 초기화면에 사전 공지하고 전화, 문자, E-mail, 우편 등을 통해 이용자 또는 그 대 리인에게 통보합니다. 다만,
              회사가 긴급하게 이용을 중지할 필요가 있다고 인정하는 경우나 이용자의 귀책사유로 인하여 통보할 수 없는 경우에는 그러하지 아니합니다.
            </span>
          </div>
        </ul>
        <br />
        <h3 className="font-black text-lg mb-2">제 10 조 (서비스의 변경)</h3>
        <p>회사는 서비스의 내용, 이용방법 등을 변경할 수 있으며, 변경이 있는 경우 그 변경 전에 서비스 초기화면에 게시합니다.</p>
        <br />
        <h3 className="font-black text-lg mb-2">제 11 조(서비스의 종료 또는 이전)</h3>
        <ul className="circleNumber">
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">1</span>
            <span>
              본 서비스는 베타 서비스로, 회사는 베타 서비스 기간(2022.6.7.~2022.6.30.) 종료 후에는 이용자에 대한 공지 및 책임 없이 서비스 제공을
              제한일시중지하거나 종료할 수 있습니다.
            </span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">2</span>
            <span>
              베타 서비스 기간 후, 향후 분할 또는 영업양수도로 인하여 본 서비스의 이용약관상 계약주체가 분할승계회사 또는 영업양수회사로 변경될 수 있습니다.
              회사는 분할 또는 영업양수도 의 경우 개인정보 관련 법령에서 규정하는 절차 및 개인정보 보호조치를 모두 준수하며 안전 하게 개인정보를 이전할
              것입니다.
            </span>
          </div>
        </ul>
        <br />
        <br />
        <h2 className="font-black text-xl mb-4">제 4 장 당사자의 권리와 의무</h2>
        <h3 className="font-black text-lg mb-2">제 12 조 (회사의 의무)</h3>
        <ul className="circleNumber">
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">1</span>
            <span>회사는 본 약관에서 정한 바에 따라 지속적·안정적으로 서비스를 제공할 의무가 있습니다.</span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">2</span>
            <span>
              회사는 서비스를 제공하기 위한 시스템에 장애가 발생하는 경우 신속히 장애를 복구합니다. 다만, 천재지변, 비상사태 또는 기타 부득이한 경우에는
              서비스를 일시 중단할 수 있습니다.
            </span>
          </div>
        </ul>
        <br />
        <h3 className="font-black text-lg mb-2">제 13 조 (이용자의 게시물에 대한 조치)</h3>
        <div className="flex items-start">
          <div className="flex-auto flex flex-col">
            <p>
              회사는 다음 각 호에 해당하는 게시물이나 자료(댓글, 채팅, 메시지 등 본 서비스에서 제공하는 게시발송 방식을 통한 것은 모두 포함됩니다. 문장, 음향,
              동영상 등 유형을 불문합니다.)가 다음 각 호의 경우에 해당한다고 판단하는 경우, 사전 통지 없이 조치(노출제한, 게시중단, 삭제 등)를 취할 수 있으며,
              이에 대해 회사는 어떠한 책임도 지지 않습니다.
            </p>
            <ul className="subNumbering">
              <div className="flex">
                <span className="mr-2">1</span>
                <p>회사, 본 서비스, 다른 이용자 또는 제3자를 비방하거나 명예를 손상시키는 내용을 포함 하는 경우</p>
              </div>
              <div className="flex">
                <span className="mr-2">2</span>
                <p>공공질서 및 미풍양속에 위반되는 내용을 포함하거나 링크시키는 경우</p>
              </div>
              <div className="flex">
                <span className="mr-2">3</span>
                <p>불법복제 또는 해킹을 조장하는 내용인 경우</p>
              </div>
              <div className="flex">
                <span className="mr-2">4</span>
                <p>회사의 사전승낙 없이 영리를 목적으로 하는 광고 내용을 포함한 경우</p>
              </div>
              <div className="flex">
                <span className="mr-2">5</span>
                <p>범죄 행위에 결부된다고 객관적으로 인정되는 내용일 경우</p>
              </div>
              <div className="flex">
                <span className="mr-2">6</span>
                <p>타인의 명의 등을 무단으로 도용하여 작성한 내용이거나, 타인이 입력한 정보를 무단으 로 위변조하여 작성한 경우</p>
              </div>
              <div className="flex">
                <span className="mr-2">7</span>
                <p>불필요하거나 승인되지 않은 광고, 판촉물을 게재하는 경우</p>
              </div>
              <div className="flex">
                <span className="mr-2">8</span>
                <p>동일한 내용을 중복하여 다수 게시하는 경우</p>
              </div>
              <div className="flex">
                <span className="mr-2">9</span>
                <p>회사, 다른 이용자 또는 제3자의 지식재산권 등 권리를 침해하는 내용인 경우</p>
              </div>
              <div className="flex">
                <span className="mr-2">10</span>
                <p>외부 사용 금지 사이트 내 정보(해당 사이트 URL 포함)를 수집해 게재하는 경우</p>
              </div>
              <div className="flex">
                <span className="mr-2">11</span>
                <p>회사가 규정한 게시물 원칙에 어긋나거나, 게시판 성격에 부합하지 않는 경우</p>
              </div>
              <div className="flex">
                <span className="mr-2">12</span>
                <p>기타 관계 법령 등에 위반된다고 판단되는 경우</p>
              </div>
            </ul>
          </div>
        </div>
        <br />
        <h3 className="font-black text-lg mb-2">제 14 조 (이용자의 의무)</h3>
        <ul className="circleNumber">
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">1</span>
            <span>
              이용자는 본 약관에서 규정하는 사항과 기타 회사가 정한 제반 규정, 공지사항등 회사가 공지하는 사항 및 관계법령을 준수하여야 하며, 기타 회사의 업무에
              방해가 되는 행위, 회사의 명예를 손상시키는 행위를 해서는 안됩니다.
            </span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">2</span>
            <span>이용자는 연락처, 전자우편 주소 등 이용계약사항이 변경된 경우에 이를 회사에 즉시 알려야합니다.</span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">3</span>
            <span>{`이용자의 ID와 비밀번호에 관한 관리 책임은 이용자 본인에게 있으며, 이용자는 자신의 ID 및 비밀번호를 제3자에게 제공, 공개하거나 제3자가 이용하도록 해서는 안 됩니다. 회원이 본 조의 의무를 준수하지 않아 발생하는 손실이나 손해 등 불이익이 발생하는 경우(이용자가 자신의 ID 및 비밀번호의 유출 또는 제3자 사용에 대해 인지하고도 비밀번호를 변경하지 않 아서 불이익이 발생한 경우, 또는 이와 같은 사정을 회사에 통지하지 않거나 회사의 조치에 응하지 않아서 불이익이 발생한 경우 등), 회사가 관계법령 및 '개인정보 처리방침'에 의거하 여 그 책임을 지는 경우를 제외하고 이용자에게 부여된 ID의 비밀번호 관리소홀, 부정사용에 의하여 발생하는 모든 결과에 대한 책임은 이용자에게 있습니다.`}</span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">4</span>
            <span>
              이용자는 회사의 사전 승낙 없이 서비스를 이용하여 영업활동을 할 수 없으며,그영업활동 의 결과에 대해 회사는 책임을 지지 않습니다. 또한 이용자는 이와
              같은 영업활동으로 회사 가 손해를 입은 경우, 이용자는 회사에 대해 손해배상 의무를 지며, 회사는 해당 이용자에 대해 서비스 이용제한 및 적법한 절차를
              거쳐 손해배상 등을 청구할 수 있습니다.
            </span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">5</span>
            <span>
              이용자는 회사의 명시적 동의가 없는 한 서비스의 이용권한, 기타 이용계약상의 지위를 타인 에게 양도, 증여할 수 없으며 이를 담보로 제공할 수 없습니다.
            </span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">6</span>
            <span>이용자는 회사 및 제3자의 지적 재산권을 침해해서는 안됩니다.</span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">7</span>
            <div className="flex-auto flex flex-col">
              <p>
                이용자는 다음 각 호의 행위를 해서는 안되며,해당행위를 하는 경우에 회사는 이용자의 서비스 이용에 대하여 제재(이용제한, 이용중지, 강제탈퇴 등)를
                가할 수 있습니다.
              </p>
              <ul className="subNumbering">
                <div className="flex">
                  <span className="mr-2">1</span>
                  <p>서비스 이용 신청 또는 회원정보 변경 시 허위 내용을 등록하는 행위</p>
                </div>
                <div className="flex">
                  <span className="mr-2">2</span>
                  <p>타인의 정보를 도용하는 행위</p>
                </div>
                <div className="flex">
                  <span className="mr-2">3</span>
                  <p>이용자 ID를 타인과 거래하는 행위</p>
                </div>
                <div className="flex">
                  <span className="mr-2">4</span>
                  <p>회사의 임직원 또는 관계자를 사칭하는 행위</p>
                </div>
                <div className="flex">
                  <span className="mr-2">5</span>
                  <p>다른 이용자의 정보를 무단으로 수집, 이용하거나 다른 사람들에게 제공하는 행위</p>
                </div>
                <div className="flex">
                  <span className="mr-2">6</span>
                  <p>제13조에 해당되는 게시물을 작성하는 행위</p>
                </div>
                <div className="flex">
                  <span className="mr-2">7</span>
                  <p>
                    본 서비스를 통해 얻은 정보를 회사의 사전 승낙 없이 서비스 이용 외의 목적으로 복제하거나, 이를 출판 및 방송 등에 사용하거나, 제3자에게
                    제공하는 행위
                  </p>
                </div>
                <div className="flex">
                  <span className="mr-2">8</span>
                  <p>음란 정보나 저작권 침해 정보 등 공서양속 및 법령에 위반되는 내용의 정보 등을 발송 하거나 게시하는 행위</p>
                </div>
                <div className="flex">
                  <span className="mr-2">9</span>
                  <p>회사의 임직원 또는 본 서비스 관계사의 임직원에게 공공질서 및 미풍양속에 위반되는 언행을 하는 행위</p>
                </div>
                <div className="flex">
                  <span className="mr-2">10</span>
                  <p>범죄와 결부된다고 객관적으로 판단되는 행위</p>
                </div>
                <div className="flex">
                  <span className="mr-2">11</span>
                  <p>서비스에 위해를 가하거나 방해하는 행위</p>
                </div>
                <div className="flex">
                  <span className="mr-2">12</span>
                  <p>회사의 서비스 제공 목적 외의 용도로 서비스를 이용하는 행위</p>
                </div>
                <div className="flex">
                  <span className="mr-2">13</span>
                  <p>
                    회사의 동의 없이 서비스 또는 이에 포함된 소프트웨어의 일부를 복사, 수정, 배포, 판매, 양도, 대여, 담보제공하거나 타인에게 그 이용을 허락하는
                    행위
                  </p>
                </div>
                <div className="flex">
                  <span className="mr-2">14</span>
                  <p>본 약관을 포함하여 기타 회사가 정한 제반 규정 또는 이용 조건을 위반하는 행위</p>
                </div>
                <div className="flex">
                  <span className="mr-2">15</span>
                  <p>기타 관계 법령에 위반되는 행위</p>
                </div>
              </ul>
            </div>
          </div>
        </ul>
        <br />
        <br />
        <h2 className="font-black text-xl mb-4">제 5 장 이용계약의 해지</h2>
        <h3 className="font-black text-lg mb-2">제 15 조 (이용계약의 해지)</h3>
        <ul className="circleNumber">
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">1</span>
            <div className="flex-auto flex flex-col">
              <p>이용자는 다음 각 호에서 정한 바에 따라 이용계약을 해지(서비스 탈퇴)할 수 있습니다.</p>
              <ul className="subNumbering">
                <div className="flex">
                  <span className="mr-2">1</span>
                  <p>
                    이용자는 언제든지 회사에 해지의 의사를 통지함으로써 이용계약을 해지할 수 있습니다. 다만, 거래사기 등의 부정이용 방지를 위해 거래를
                    진행중이거나 거래 관련 분쟁이 발생한 이용자는 이용계약 해지 및 서비스 탈퇴가 특정 기간 동안 제한될 수 있습니다.
                  </p>
                </div>
                <div className="flex">
                  <span className="mr-2">2</span>
                  <p>
                    이용자가 이용계약을 해지하고자 할 때에는 본인의 신분을 확인할 수 있는 구비서류를 첨부하여 본인이 직접 서비스 홈페이지 등을 통하여 회사에게
                    해지를 신청하여야 하며, 해지 희망일 전까지 구비서류를 제출하여야 합니다.
                  </p>
                </div>
                <div className="flex">
                  <span className="mr-2">3</span>
                  <p>
                    이용자의 서비스 해지로 인해 발생한 불이익에 대한 책임은 이용자 본인이 져야 하며, 이용계약이 종료되면 회사는 이용자에게 부가적으로 제공한
                    각종 혜택을 회수할 수 있습니다.
                  </p>
                </div>
              </ul>
            </div>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">2</span>
            <div className="flex-auto flex flex-col">
              <div className="flex-auto flex flex-col">
                <p>회사는 다음 각 호에서 정한 바에 따라 이용계약을 해지할 수 있습니다</p>
                <ul className="subNumbering">
                  <div className="flex">
                    <span className="mr-2">1</span>
                    <div className="flex-auto flex flex-col">
                      <p>회사는 이용자에게 다음 각 목의 어느 하나에 해당하는 사유가 발생하거나 확인된 경우 이용계약을 해지할 수 있습니다.</p>
                      <ul className="subNumbering">
                        <div className="flex">
                          <span className="mr-2">가. </span>
                          <p>이용자가 서비스의 원활한 진행을 방해하거나 방해할 우려가 있는 행위 등을 하거나 시도한 경우</p>
                        </div>
                        <div className="flex">
                          <span className="mr-2">나. </span>
                          <p>이용자에게 제7조 제2항의 승낙제한 사유가 있는 경우</p>
                        </div>
                        <div className="flex">
                          <span className="mr-2">다. </span>
                          <p>이용자가 제14조 제7항의 금지행위를 한 경우</p>
                        </div>
                        <div className="flex">
                          <span className="mr-2">라. </span>
                          <p>기타 회사가 합리적인 판단에 기하여 서비스 제공을 거부할 필요가 있다고 인정할 경우</p>
                        </div>
                      </ul>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="mr-2">2</span>
                    <p>회사가 이용계약을 해지하는 경우 회사는 이용자에게 전화, 문자, E-mail, 우편 등의 방법을 통하여 해지사유를 밝혀 해지의사를 통지합니다.</p>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">3</span>
            <span>
              이용계약이 해지되면 법령 및 개인정보처리방침에 따라 이용자 정보를 보유하는 경우를 제외 하고는 이용자 정보나 이용자가 작성한 게시물 등 모든
              데이터는 삭제됩니다. 다만, 이용자가 작성한 게시물이 제3자에 의하여 스크랩 또는 다른 공유 기능으로 게시되거나, 이용자가 제3 자의 게시물에 댓글,
              채팅 등 게시물을 추가하는 등의 경우에는 다른 이용자의 정상적 서비 스 이용을 위하여 필요한 범위 내에서 서비스 내에 삭제되지 않고 남아 있게 됩니다.
            </span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">4</span>
            <span>본 조에서 정한 바에 따라 이용계약이 종료되는 경우 이용자의 재이용 신청에 대하여 회사는 그 승낙을 거절할 수 있습니다.</span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">5</span>
            <span>이용계약의 종료와 관련하여 발생한 손해는 이용계약이 종료된 해당 이용자가 책임을 부담하 여야 하고, 회사는 일체의 책임을 지지 않습니다.</span>
          </div>
        </ul>
        <br />
        <br />
        <h2 className="font-black text-xl mb-4">제 6 장 손해배상 및 면책</h2>
        <h3 className="font-black text-lg mb-2">제 16 조 (손해배상)</h3>
        <ul className="circleNumber">
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">1</span>
            <span>
              회사는 서비스 이용과 관련하여 이용자에게 발생한 어떠한 손해에 대해서도 책임을 지지 않 습니다. 다만, 회사의 고의 또는 중대한 과실로 인하여 발생한
              손해의 경우는 제외합니다.
            </span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">2</span>
            <span>
              회사가 이용자로부터 서비스를 이용하지 못한 사실을 통지 받은 경우에 회사는 서비스 재개를 위해 가능한 조치를 취해야 하며, 서비스를 다시 이용할 수
              있게 된 경우 이 사실을 이용자에게 통지하여야 합니다.
            </span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">3</span>
            <span>
              이용자는 본 약관 및 관계법령에 위반하거나 기타 이용자의 의무를 위반하여 회사 또는 타인에게 피해를 준 경우 그 손해를 배상할 책임이 있습니다.
            </span>
          </div>
        </ul>
        <br />
        <h3 className="font-black text-lg mb-2">제 17 조 (손해배상의 청구)</h3>
        <p>이용자가 회사에게 손해배상청구를 하는 경우 청구사유, 청구금액 및 산출근거 등을 기재한 서면 으로 하여야 합니다.</p>
        <br />
        <h3 className="font-black text-lg mb-2">제 18 조 (회사의 책임제한)</h3>
        <ul className="circleNumber">
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">1</span>
            <span>회사는 천재지변 등 불가항력 또는 이용자의 귀책사유로 발생한 서비스 이용 장애에 대하여 책임지지 않습니다.</span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">2</span>
            <span>
              회사는 법령상 허용되는 한도 내에서, 서비스와 관련하여 본 약관에 명시되지 않은 어떠한 구체적인 사항(서비스에 속한 콘텐츠 등)에 대한 약정이나 보증을
              하지 않습니다.
            </span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">3</span>
            <span>회사는 이용자 상호 간 또는 이용자와 제3자 간 발생한 분쟁에 대해서는 개입할 의무가 없으며, 이로 인한 손해를 배상할 책임도 없습니다.</span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">4</span>
            <span>회사는 이용자가 자신의 개인정보를 타인에게 유출 또는 제공함으로써, 발생하는 피해에 대해서 회사는 책임을 지지 않습니다.</span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">5</span>
            <span>
              회사는 이용자의 컴퓨터 환경이나 회사의 관리 범위에 있지 아니한 보안 문제로 인하여 발생하는 제반 문제 또는 현재의 보안기술 수준으로 방어가 곤란한
              네트워크 해킹 등 회사의 귀 책사유 없이 발생하는 문제에 대한 책임을 지지 않습니다.
            </span>
          </div>
        </ul>
        <br />
        <br />
        <h2 className="font-black text-xl mb-4">제 7 장 저작권 및 개인정보의 보호</h2>
        <h3 className="font-black text-lg mb-2">제 19 조 (게시물의 저작권 보호)</h3>
        <ul className="circleNumber">
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">1</span>
            <span>이용자가 서비스 내에 게시한 게시물의 저작권은 해당 게시물의 저작자에게 귀속됩니다.</span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">2</span>
            <span>
              이용자가 서비스 내에 게시하는 게시물은 검색결과 내지 서비스 및 관련 프로모션, 광고등에 노출될 수 있으며, 해당 노출을 위해 필요한 범위 내에서는
              일부 수정, 복제, 편집되어 게 시될 수 있습니다. 이 경우, 회사는 저작권법 규정을 준수하며, 이용자는 언제든지 고객센터 또는 운영자 문의 기능을 통해
              해당 게시물에 대해 삭제, 검색결과 제외, 비공개 등의 조치를 요청할 수 있습니다.
            </span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">3</span>
            <span>
              회사가 위 제2항 이외의 방법으로 이용자의 게시물을 이용하고자 하는 경우에는 전화, 팩스, 전자우편 등을 통해 사전에 이용자의 동의를 얻어야 합니다.
            </span>
          </div>
        </ul>
        <br />
        <h3 className="font-black text-lg mb-2">제 20 조 (개인정보의 보호)</h3>
        <ul className="circleNumber">
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">1</span>
            <span>회사는 이용자의 개인정보를 보호하기 위해 개인정보 보호법 등 관련 법령에서 정하는 바를 준수합니다.</span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">2</span>
            <span>
              회사는 이용자의 개인정보를 보호하기 위하여 개인정보 처리방침을 제정하고 서비스 초기화 면에 게시합니다. 개인정보 처리방침의 구체적 내용은
              연결화면을 통하여 볼 수 있습니다.
            </span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">3</span>
            <span>회사는 개인정보 처리방침에 따라 이용자의 개인정보를 최대한 보호하기 위하여 노력합니다.</span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">4</span>
            <span>회사의 공식 사이트 이외의 링크된 사이트에서는 회사의 개인정보 처리방침이 적용되지 않습니다.</span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">5</span>
            <span>회사는 이용자의 귀책사유로 발생한 개인정보 유출 등 사고에 관하여 일체의 책임을 지지 않습니다.</span>
          </div>
        </ul>
        <br />
        <h3 className="font-black text-lg mb-2">제 21 조 (위치기반서비스 관련)</h3>
        <ul className="circleNumber">
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">1</span>
            <span>
              회사는 이용자의 실생활에 더욱 보탬이 되는 유용한 서비스를 제공하기 위하여 서비스에 위 치기반서비스를 포함시킬 수 있습니다. 회사가 포함시킬 수 있는
              위치기반서비스는 이용자의 단말기기의 위치정보를 수집하는 위치정보사업자로부터 위치정보를 전달받아 제공하는 무료 서비스고, 구체적으로는 이용자의
              현재 위치를 기준으로 특정 지역모임에 가입자격을 부여하 고 다른 이용자와 해당 지역과 관련된 게시물을 작성할 수 있도록 하는 서비스, 이용자의 현 재
              위치를 이용한 생활 정보나 광고성 정보를 제공하는 서비스가 있습니다.
            </span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">2</span>
            <span>
              이용자는 회사 서비스와 관련된 개인위치정보의 이용, 제공 목적, 제공받는 자의 범위 및 위 치기반서비스의 일부에 대하여 동의를 유보하거나, 이용제공에
              대한 동의의 전부 또는 일부 철회할 수 있으며, 일시적인 중지를 요구할 수 있습니다. 회사는 위치정보의 보호 및 이용 등 에 관한 법률의 규정에 따라
              개인위치정보 및 위치정보 이용제공사실 확인자료를 6개월 이 상 보관하며, 이용자가 동의의 전부 또는 일부를 철회한 때에는 회사는 철회한 부분에 해당
              하는 개인위치정보 및 위치정보 이용제공사실 확인자료를 지체 없이 파기하겠습니다.
            </span>
          </div>
        </ul>
        <br />
        <br />
        <h2 className="font-black text-xl mb-4">제 8 장 기타</h2>
        <h3 className="font-black text-lg mb-2">제 22 조 (이용자에 대한 통지)</h3>
        <ul className="circleNumber">
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">1</span>
            <span>회사가 이용자에게 통지를 하는 경우 이용자가 지정한 전화, 문자, E-mail, 우편 등으로 할 수 있습니다.</span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">2</span>
            <span>회사는 불특정다수 이용자에게 통지를 하는 경우 서비스 초기화면 또는 서비스 내 공지사항에 게시함으로써 개별 통지에 갈음할 수 있습니다.</span>
          </div>
        </ul>
        <br />
        <h3 className="font-black text-lg mb-2">제 23 조 (서비스 고지 및 홍보내용 표시)</h3>
        <p>
          회사는 이용자의 편의를 위해 서비스 이용과 관련된 각종 고지 및 기타 회사 서비스 홍보를 포함 한 다양한 정보를 회사 서비스에 표시하거나 이용자의 휴대폰
          문자, 알림 메시지(Push Notification) 등으로 발송할 수 있습니다. 이 경우 이용자의 통신환경 또는 요금구조에 따라 이 용자가 데이터 요금 등을 부담할 수
          있습니다. 이용자는 관련 법령상 필요한 내용을 제외하고는 언제든지 이러한 정보에 대한 수신을 거절할 수 있으며, 이 경우 회사는 즉시 위와 같은 정보를
          보내는 것을 중단합니다. 이용자의 수신 거절로 인하여 이용자가 필요한 정보를 제공받지 못한 경우 그에 대하여 회사는 책임이 없습니다.
        </p>
        <br />
        <h3 className="font-black text-lg mb-2">제 24 조 (기타)</h3>
        <ul className="circleNumber">
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">1</span>
            <span>
              이용자가 본 약관을 준수하지 않은 경우에, 회사가 즉시 조치를 취하지 않더라도 회사가 가지고 있는 권리를 포기하는 것이 아니며, 본 약관 중 일부 조항의
              집행이 불가능하게 되더라 도 다른 조항에는 영향을 미치지 않습니다.
            </span>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-full border w-4 h-4 flex items-center justify-center text-xs mt-1 mr-2">2</span>
            <span>본 약관과 회사와 이용자 간의 서비스 이용 계약에 대해서는 대한민국 법령이 적용됩니다.</span>
          </div>
        </ul>
        <br />
        <br />
        <p>서비스 이용약관 버전번호 : V20220613</p>
        <p>서비스 이용약관 시행일: 2022-06-13</p>
      </div>
    </div>
  );
}
