/* eslint-disable react-hooks/exhaustive-deps */
import SignupHeader from "./sign_up_header";

export default function SignIn1(props) {
    const _selectSexStyle = "border border-[#FF6035] rounded-md py-2 text-center text-[#FF6035] font-medium";
    const _nonSelectSexStyle = "border border-color4 rounded-md py-2 text-center text-base font-medium textGray4";
    const interests = ["체험", "엄마표 교육", "사교육"];

    const nextBtnActive = () => {
        if (props.signupInfo.nickName.trim() == "") return false;
        if (props.signupInfo.sex != 'male' && props.signupInfo.sex != 'female') return false;
        if (props.signupInfo.tel1.length < 3 || props.signupInfo.tel2.length < 4 || props.signupInfo.tel3.length < 4) return false;
        if (props.signupInfo.address.trim() == "") return false;
        if (props.signupInfo.interest == null) return false;

        return true;
    }

    function daumPostcode() {
        new daum.Postcode({
            oncomplete: function (data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if (data.userSelectedType === 'R') {
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if (data.buildingName !== '' && data.apartment === 'Y') {
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if (extraAddr !== '') {
                        extraAddr = ' (' + extraAddr + ')';
                    }
                } else {
                }

                props.setSignupInfo({ ...props.signupInfo, address: addr, region: data.sido, zonecode: data.zonecode });
            }
        }).open();
    }

    return (<>
        <SignupHeader step={props.step} setStep={props.setStep} />
        <div className="pt-4 px-5 text-2xl font-normal textGray1" style={{ fontFamily: "Bazzi" }}>
            회원님 정보를 입력해주세요.
        </div>
        <div className="pt-9 px-5 space-y-9">
            <div className="space-y-4">
                <span className="text-sm font-medium textGray1">닉네임</span>
                <div className="border border-color4 rounded-md py-2.5 px-5">
                    <input
                        className="placeholder-[#bdbdbd] text-base font-normal w-full outline-none"
                        type="text"
                        placeholder="예: OO엄마"
                        value={props.signupInfo.nickName}
                        onChange={(e) => props.setSignupInfo({ ...props.signupInfo, nickName: e.currentTarget.value })}
                    />
                </div>
            </div>

            <div className="space-y-4">
                <span className="text-sm font-medium textGray1">성별</span>
                <div className="grid grid-cols-2 gap-3 items-center justify-center">
                    <div
                        className={(props.signupInfo.sex == "female") ? _selectSexStyle : _nonSelectSexStyle}
                        onClick={() => props.setSignupInfo({ ...props.signupInfo, sex: "female" })}
                    >여성</div>
                    <div
                        className={(props.signupInfo.sex == "male") ? _selectSexStyle : _nonSelectSexStyle}
                        onClick={() => props.setSignupInfo({ ...props.signupInfo, sex: "male" })}
                    >남성</div>
                </div>
            </div>

            <div className="space-y-4">
                <span className="text-sm font-medium textGray1">휴대폰번호</span>
                <form className="">
                    <div className="items-center justify-center grid grid-cols-3 gap-3">
                        <input type="number" className="border border-color4 rounded-md py-2 text-center text-base font-normal bg-white" placeholder="010" value={props.signupInfo.tel1} required disabled />
                        <input type="number" className="border border-color4 rounded-md py-2 text-center text-base font-normal bg-white" value={props.signupInfo.tel2} onChange={(e) => props.setSignupInfo({ ...props.signupInfo, tel2: e.currentTarget.value })} />
                        <input type="number" className="border border-color4 rounded-md py-2 text-center text-base font-normal bg-white" value={props.signupInfo.tel3} onChange={(e) => props.setSignupInfo({ ...props.signupInfo, tel3: e.currentTarget.value })} />
                    </div>
                </form>
            </div>

            <div className="space-y-2 mb-3">
                <span className="text-sm font-medium textGray1">주소</span>
                <div className={`text-sm font-medium p-2.5 flex items-center justify-start bg-gray2 rounded-md ${(props.signupInfo.address == "") ? "textGray4" : ""}`} onClick={daumPostcode}>
                    <svg className="w-6 h-6 mr-2.5 textGray1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    {(props.signupInfo.address == "") ? "지번, 도로명, 건물명으로 검색" : props.signupInfo.address}
                </div>
                {(props.signupInfo.address.length > 0)
                    ? <input
                        type='text'
                        value={props.signupInfo.detailAddress}
                        className='h-10 rounded-md bg-gray2 w-full text-sm px-5'
                        onChange={(e) => props.setSignupInfo({ ...props.signupInfo, detailAddress: e.currentTarget.value })}
                        placeholder="상세주소"
                    />
                    : <></>
                }
            </div>

            <div className="space-y-4 mb-10">
                <span className="text-sm font-medium textGray1">주 관심사</span>
                <div className="grid grid-cols-3 gap-3 text-center text-sm font-medium textGray4">
                    {(interests.map((_interest, index) => {
                        const _check = props.signupInfo.interest == _interest;

                        return (
                            <div
                                key={index}
                                className={`border rounded-md py-2 ${_check ? "text-[#FF6035] border-[#FF6035]" : "border-color4"}`}
                                onClick={() => {
                                    props.setSignupInfo({ ...props.signupInfo, interest: _interest })
                                }}
                            >
                                {_interest}
                            </div>
                        );
                    }))}
                </div>
            </div>

            <div className={`rounded-md ${nextBtnActive() ? "bg-[#ff6035]" : "bg-gray3"}`}>
                <button className="w-full py-4 text-sm font-semibold text-white" disabled={!nextBtnActive()} onClick={() => {
                    // 닉네임을 입력해주세요.
                    // 성별을 선택해주세요.
                    // 휴대폰번호를 입력해주세요.
                    // 주소를 입력해주세요.
                    // 상세주소를 입력해주세요.
                    // 주 관심사를 선택해주세요.
                    props.setStep(2);
                }}>다음</button>
            </div>
        </div>
    </>)
}