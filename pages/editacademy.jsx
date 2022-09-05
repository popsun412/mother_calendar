/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { Global } from "@emotion/react";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import React, { useEffect, useRef, useState } from "react";
import StarRatings from "react-star-ratings";
import network from "../util/network";

import GlobalStyles from "@mui/material/GlobalStyles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CircleLoadingOpacity from "../components/common/circle_loading_opacity";
import { ko } from "date-fns/locale";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import moment from "moment";
import { ArrowBackIosNewRounded } from "@mui/icons-material";

const AddAcademy = (props) => {
  const auth = getAuth();
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  let inputRef;
  const [loaded, setLoaded] = useState("loading");

  const [itemInfo, setItemInfo] = useState({
    name: "",
    image: null,
    status: null,
    address: null,
    detailAddress: null,
    subject: null,
    region: null,
    score: 0,
    regDt: new Date(),
  });

  const [uploadImage, setUploadImage] = useState({
    image_file: null,
    preview_URL: "",
  });

  const getData = async () => {
    const _result = await network.get(`/item/${props.query.itemUid}`);

    setItemInfo({
      name: _result.data.name,
      image: _result.data.image,
      status: _result.data.status,
      address: _result.data.address,
      detailAddress: _result.data.detailAddress,
      subject: _result.data.subject,
      region: _result.data.region,
      score: _result.data.score,
      regDt: _result.data.regDt == null ? new Date() : moment(_result.data.regDt).toDate(),
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (_user) => {
      if (_user) {
        await getData();
      } else {
        router.back();
      }
    });
  }, []);

  const saveImage = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();

    if (e.target.files[0]) {
      setLoaded("loading");
      fileReader.readAsDataURL(e.target.files[0]);
    }

    fileReader.onload = () => {
      setUploadImage({ image_file: e.target.files[0], preview_URL: fileReader.result });
      setItemInfo({ ...itemInfo, image: null });
      setLoaded(true);
    };
  };

  const onSubmit = async (e) => {
    setSaving(true);

    e.preventDefault();

    const formData = new FormData();
    formData.append("itemUid", props.query.itemUid);
    formData.append("name", itemInfo.name);
    formData.append("status", itemInfo.status);
    formData.append("subject", itemInfo.subject);
    formData.append("lockerType", "학원");
    formData.append("image", itemInfo.image);
    formData.append("address", itemInfo.address);
    formData.append("detailAddress", itemInfo.detailAddress);
    formData.append("region", itemInfo.region);
    if (uploadImage.image_file != null) {
      formData.append("uploadImage", uploadImage.image_file);
    }
    itemInfo.status == 0 ? null : formData.append("regDt", itemInfo.regDt);
    itemInfo.status == 0 ? null : formData.append("score", itemInfo.score);

    await network.post("/locker/update", formData);

    router.push({ pathname: "/academymap", query: { userUid: auth.currentUser.uid } });

    setSaving(false);
  };

  const disabled = () => {
    if (itemInfo.name.trim() == "") return true;
    if (itemInfo.status != 0 && itemInfo.status != 1 && itemInfo.status != 2) return true;
    // if ((itemInfo.address ?? "").trim() == "") return true;
    if (["국어", "영어", "수학", "과학", "사회", "미술", "음악", "체육", "생활", "기타", "부모"].findIndex((_item) => _item == itemInfo.subject) < 0)
      return true;

    return false;
  };

  function sample6_execDaumPostcode() {
    new daum.Postcode({
      oncomplete: function (data) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

        // 각 주소의 노출 규칙에 따라 주소를 조합한다.
        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
        var addr = ""; // 주소 변수
        var extraAddr = ""; // 참고항목 변수

        //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
        if (data.userSelectedType === "R") {
          // 사용자가 도로명 주소를 선택했을 경우
          addr = data.roadAddress;
        } else {
          // 사용자가 지번 주소를 선택했을 경우(J)
          addr = data.jibunAddress;
        }

        // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
        if (data.userSelectedType === "R") {
          // 법정동명이 있을 경우 추가한다. (법정리는 제외)
          // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
          }
          // 건물명이 있고, 공동주택일 경우 추가한다.
          if (data.buildingName !== "" && data.apartment === "Y") {
            extraAddr += extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
          }
          // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
          if (extraAddr !== "") {
            extraAddr = " (" + extraAddr + ")";
          }
        } else {
        }

        setItemInfo({ ...itemInfo, address: addr, region: data.sido });
      },
    }).open();
  }

  const deleteFileImage = (e) => {
    setItemInfo({ ...itemInfo, image: null });
    setUploadImage({ image_file: null, preview_URL: "" });
  };

  return (
    <>
      <div>
        <header className="sticky top-0 left-0 right-0 visible opacity-100 bg-white z-100" style={{ marginBottom: "-50px" }}>
          <div className="my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white" style={{ height: "50px" }}>
            <div className="flex-1 flex items-center">
              <ArrowBackIosNewRounded className="relative flex-shrink-0" onClick={() => window.history.back()} style={{ width: 24, color: "#4f4f4f" }} />
              <div className="my-0 mx-auto text-base font-medium" style={{ letterSpacing: "-0.3px" }}>
                학원지도 수정
              </div>
              <button className={`flex ${disabled() ? "textGray4" : "textOrange5"}`} style={{ fontSize: "15px" }} disabled={disabled()} onClick={onSubmit}>
                완료
              </button>
            </div>
          </div>
        </header>
        <main className="bg-white" style={{ marginTop: "50px" }}>
          <section className="pt-5 mx-5 my-6">
            <div className="mb-6">
              <div className="rounded-md my-0 mx-auto relative" style={{ width: "120px", height: "120px", backgroundColor: "#f2f2f2" }}>
                <button className="w-full h-full" type="primary" onClick={() => inputRef.click()}>
                  <input type="file" accept="image/*" onChange={saveImage} ref={(refParam) => (inputRef = refParam)} style={{ display: "none" }} />
                  {itemInfo.image != null ? (
                    <div
                      className="before:top-0 before:right-0 before:bottom-0 before:left-0 before:absolute rounded-md"
                      style={{
                        backgroundImage: `url("${itemInfo.image}")`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        width: "100%",
                        paddingTop: "100%",
                        backgroundPosition: "center center",
                      }}
                    />
                  ) : (
                    <div>
                      {uploadImage.image_file ? (
                        <div
                          className="before:top-0 before:right-0 before:bottom-0 before:left-0 before:absolute rounded-md"
                          style={{
                            backgroundImage: `url("${uploadImage.preview_URL}")`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            width: "100%",
                            paddingTop: "100%",
                            backgroundPosition: "center center",
                          }}
                        />
                      ) : (
                        <img src="/images/ic_camera.png" className="absolute top-10 left-10" />
                      )}
                    </div>
                  )}
                </button>
                {itemInfo.image != null || uploadImage.image_file != null ? (
                  <svg
                    className="w-7 h-7 absolute -top-3 -right-3 bg-gray4 rounded-full ring ring-white p-1 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={deleteFileImage}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div>
              <div>
                <input
                  type="text"
                  placeholder="학원장소 이름을 입력해주세요."
                  value={itemInfo.name ?? ""}
                  onChange={(e) => setItemInfo({ ...itemInfo, name: e.currentTarget.value })}
                  className="block w-full h-10 px-5 box-border border border-solid border-color4 rounded-md text-sm outline-none"
                />
              </div>
            </div>
          </section>
          <section className="mx-5 mt-9 mb-6">
            <div className="text-sm textGray2 font-medium">상태</div>
            <div style={{ marginTop: "18px" }}>
              <Global
                styles={{
                  "MuiToggleButtonGroup-root": {
                    borderRadius: "6px",
                  },
                  ".MuiToggleButton-root.Mui-selected": {
                    backgroundColor: "#fff!important",
                    color: "#FF6035",
                    borderColor: "#FF6035",
                    borderRadius: "6px",
                  },
                }}
              />
              <ToggleButtonGroup value={itemInfo.status} aria-label="status" className="w-full">
                <ToggleButton value={0} aria-label="방문예정" className="w-full" onClick={() => setItemInfo({ ...itemInfo, status: 0 })}>
                  방문예정
                </ToggleButton>
                <ToggleButton value={1} arai-label="방문완료" className="w-full" onClick={() => setItemInfo({ ...itemInfo, status: 1 })}>
                  방문완료
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </section>
          <section className="mx-5 my-6">
            <div className="text-sm textGray2 font-medium">분야</div>
            <div className="mt-6">
              <div className="grid grid-cols-4 gap-3">
                <span
                  className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${
                    itemInfo.subject === "국어" ? "border-orange5 textOrange5" : "textGray4 border-gray3"
                  }`}
                  onClick={() =>
                    setItemInfo({
                      ...itemInfo,
                      subject: "국어",
                    })
                  }
                >
                  <img
                    src="/images/category1.png"
                    className={`mr-1 ${itemInfo.subject == "국어" ? "" : "grayscale"}`}
                    style={{ width: "17px", height: "17px" }}
                  />
                  국어
                </span>

                <span
                  className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${
                    itemInfo.subject === "영어" ? "border-orange5 textOrange5" : "textGray4 border-gray3"
                  }`}
                  onClick={() =>
                    setItemInfo({
                      ...itemInfo,
                      subject: "영어",
                    })
                  }
                >
                  <img
                    src="/images/category2.png"
                    className={`mr-1 ${itemInfo.subject == "영어" ? "" : "grayscale"}`}
                    style={{ width: "17px", height: "17px" }}
                  />
                  영어
                </span>

                <span
                  className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${
                    itemInfo.subject === "수학" ? "border-orange5 textOrange5" : "textGray4 border-gray3"
                  }`}
                  onClick={() =>
                    setItemInfo({
                      ...itemInfo,
                      subject: "수학",
                    })
                  }
                >
                  <img
                    src="/images/category3.png"
                    className={`mr-1 ${itemInfo.subject == "수학" ? "" : "grayscale"}`}
                    style={{ width: "17px", height: "17px" }}
                  />
                  수학
                </span>

                <span
                  className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${
                    itemInfo.subject === "과학" ? "border-orange5 textOrange5" : "textGray4 border-gray3"
                  }`}
                  onClick={() =>
                    setItemInfo({
                      ...itemInfo,
                      subject: "과학",
                    })
                  }
                >
                  <img
                    src="/images/category4.png"
                    className={`mr-1 ${itemInfo.subject == "과학" ? "" : "grayscale"}`}
                    style={{ width: "17px", height: "17px" }}
                  />
                  과학
                </span>

                <span
                  className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${
                    itemInfo.subject === "사회" ? "border-orange5 textOrange5" : "textGray4 border-gray3"
                  }`}
                  onClick={() =>
                    setItemInfo({
                      ...itemInfo,
                      subject: "사회",
                    })
                  }
                >
                  <img
                    src="/images/category5.png"
                    className={`mr-1 ${itemInfo.subject == "사회" ? "" : "grayscale"}`}
                    style={{ width: "17px", height: "17px" }}
                  />
                  사회
                </span>

                <span
                  className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${
                    itemInfo.subject === "미술" ? "border-orange5 textOrange5" : "textGray4 border-gray3"
                  }`}
                  onClick={() =>
                    setItemInfo({
                      ...itemInfo,
                      subject: "미술",
                    })
                  }
                >
                  <img
                    src="/images/category6.png"
                    className={`mr-1 ${itemInfo.subject == "미술" ? "" : "grayscale"}`}
                    style={{ width: "17px", height: "17px" }}
                  />
                  미술
                </span>

                <span
                  className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${
                    itemInfo.subject === "음악" ? "border-orange5 textOrange5" : "textGray4 border-gray3"
                  }`}
                  onClick={() =>
                    setItemInfo({
                      ...itemInfo,
                      subject: "음악",
                    })
                  }
                >
                  <img
                    src="/images/category7.png"
                    className={`mr-1 ${itemInfo.subject == "음악" ? "" : "grayscale"}`}
                    style={{ width: "17px", height: "17px" }}
                  />
                  음악
                </span>

                <span
                  className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${
                    itemInfo.subject === "체육" ? "border-orange5 textOrange5" : "textGray4 border-gray3"
                  }`}
                  onClick={() =>
                    setItemInfo({
                      ...itemInfo,
                      subject: "체육",
                    })
                  }
                >
                  <img
                    src="/images/category8.png"
                    className={`mr-1 ${itemInfo.subject == "체육" ? "" : "grayscale"}`}
                    style={{ width: "17px", height: "17px" }}
                  />
                  체육
                </span>

                <span
                  className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${
                    itemInfo.subject === "생활" ? "border-orange5 textOrange5" : "textGray4 border-gray3"
                  }`}
                  onClick={() =>
                    setItemInfo({
                      ...itemInfo,
                      subject: "생활",
                    })
                  }
                >
                  <img
                    src="/images/category9.png"
                    className={`mr-1 ${itemInfo.subject == "생활" ? "" : "grayscale"}`}
                    style={{ width: "17px", height: "17px" }}
                  />
                  생활
                </span>

                <span
                  className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${
                    itemInfo.subject === "기타" ? "border-orange5 textOrange5" : "textGray4 border-gray3"
                  }`}
                  onClick={() =>
                    setItemInfo({
                      ...itemInfo,
                      subject: "기타",
                    })
                  }
                >
                  <img
                    src="/images/category11.png"
                    className={`mr-1 ${itemInfo.subject == "기타" ? "" : "grayscale"}`}
                    style={{ width: "17px", height: "17px" }}
                  />
                  기타
                </span>

                <span
                  className={`flex text-sm py-2 px-2 border border-solid rounded justify-center ${
                    itemInfo.subject === "부모" ? "border-orange5 textOrange5" : "textGray4 border-gray3"
                  }`}
                  onClick={() =>
                    setItemInfo({
                      ...itemInfo,
                      subject: "부모",
                    })
                  }
                >
                  <img
                    src="/images/category12.png"
                    className={`mr-1 ${itemInfo.subject == "부모" ? "" : "grayscale"}`}
                    style={{ width: "17px", height: "17px" }}
                  />
                  부모
                </span>
              </div>
            </div>
          </section>
          <section className="mx-5 my-6">
            <div className="text-sm textGray2 font-medium mb-6">주소</div>
            <div className="mb-8">
              <div
                className="flex relative mb-2.5"
                onClick={() => {
                  sample6_execDaumPostcode();
                }}
              >
                <input
                  type="text"
                  placeholder="지번, 도로명, 건물명으로 검색"
                  value={itemInfo.address ?? ""}
                  className="h-9 rounded-md bg-gray2 w-full text-sm px-5 outline-none border-0"
                  readOnly
                  style={{ height: "39px" }}
                />
              </div>

              {itemInfo.address != null && itemInfo.address.length > 0 ? (
                <input
                  type="text"
                  value={itemInfo.detailAddress ?? ""}
                  className="h-9 rounded-md bg-gray2 w-full text-sm px-5 outline-none border-0"
                  style={{ height: "39px" }}
                  placeholder="상세주소"
                  onChange={(e) => setItemInfo({ ...itemInfo, detailAddress: e.currentTarget.value })}
                />
              ) : (
                <></>
              )}
            </div>
          </section>
          {itemInfo.status != 0 ? (
            <section className="mx-5 my-6">
              <div className="text-sm textGray2 font-medium">
                방문시기 <span className="textGray4">(선택)</span>
              </div>
              <div className="mt-5">
                <GlobalStyles
                  styles={{
                    input: {
                      width: "114px",
                      fontSize: "14px",
                      borderRadius: "6px",
                      border: "solid 1px #bdbdbd",
                    },
                  }}
                />
                <DatePicker
                  locale={ko}
                  selected={itemInfo.regDt}
                  onChange={(date) => setItemInfo({ ...itemInfo, regDt: date })}
                  dateFormat="yyyy년 MM월"
                  showMonthYearPicker
                  showFullMonthYearPicker
                  showTwoColumnMonthYearPicker
                  className="mr-6 py-1 px-4 text-sm border border-solid border-gray3 rounded-md bg-white"
                />
              </div>
            </section>
          ) : (
            ""
          )}
          {itemInfo.status != 0 ? (
            <section className="mx-5 my-6">
              <div className="text-sm textGray2 font-medium">
                만족도 <span className="textGray4">(선택)</span>
              </div>
              <div className="flex mt-3">
                <StarRatings
                  rating={itemInfo.score}
                  changeRating={(value) => setItemInfo({ ...itemInfo, score: value })}
                  numberOfStars={5}
                  name="rating"
                  starDimension="36px"
                  starSpacing="3px"
                  starRatedColor="rgb(255, 96, 53)"
                  starHoverColor="rgb(255, 96, 53)"
                />
              </div>
            </section>
          ) : (
            ""
          )}
        </main>
      </div>
      {saving ? <CircleLoadingOpacity /> : <></>}
    </>
  );
};

export default AddAcademy;

AddAcademy.getInitialProps = async (ctx) => {
  return {
    query: ctx.query,
  };
};
