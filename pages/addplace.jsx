/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { Global } from "@emotion/react";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import network from "../util/network";

import GlobalStyles from "@mui/material/GlobalStyles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CircleLoadingOpacity from "../components/common/circle_loading_opacity";
import { ko } from "date-fns/locale";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { ArrowBackIosNewRounded } from "@mui/icons-material";

const AddPlace = (props) => {
  const router = useRouter();
  const auth = getAuth();
  const [saving, setSaving] = useState(false);

  let inputRef;
  const _fields = ["놀이터", "키즈카페", "지식전시", "자연동물", "식당숙박", "기타"];
  const [loaded, setLoaded] = useState("loading");

  const [itemInfo, setItemInfo] = useState({
    name: "",
    image: null,
    status: 1,
    address: null,
    detailAddress: null,
    field: null,
    region: null,
    score: 0,
    regDt: new Date(),
  });

  const [uploadImage, setUploadImage] = useState({
    image_file: null,
    preview_URL: "",
  });

  const getData = async () => {
    if (!props.query.commonItemUid) return;

    const res = await network.get("/item/commonItem/" + props.query.commonItemUid);
    setItemInfo({
      ...itemInfo,
      name: res.data.name,
      image: res.data.image,
      status: res.data.status,
      address: res.data.address,
      detailAddress: res.data.detailAddress,
      field: res.data.field,
      region: res.data.region,
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (_user) => {
      if (_user) {
        if (props.query.isLocker) setItemInfo({ ...itemInfo, status: 1 });
        await getData();
      } else {
        router.push("/");
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
      setLoaded(true);
    };
  };

  const onSubmit = async (e) => {
    setSaving(true);

    e.preventDefault();

    const formData = new FormData();
    formData.append("name", itemInfo.name);
    formData.append("status", itemInfo.status);
    formData.append("field", itemInfo.field);
    formData.append("subject", "체험");
    formData.append("lockerType", "체험");
    formData.append("image", itemInfo.image);
    formData.append("address", itemInfo.address);
    formData.append("detailAddress", itemInfo.detailAddress);
    formData.append("region", itemInfo.region);
    if (uploadImage.image_file != null) {
      formData.append("uploadImage", uploadImage.image_file);
    }
    itemInfo.status == 0 ? null : formData.append("regDt", itemInfo.regDt);
    itemInfo.status == 0 ? null : formData.append("score", itemInfo.score);
    await network.post("/locker", formData);

    if (props.query.isLocker) {
      router.back();
    } else {
      router.push({ pathname: "/placemap", query: { userUid: auth.currentUser.uid } });
    }

    setSaving(false);
  };

  const disabled = () => {
    if (itemInfo.name.trim() == "") return true;
    if (itemInfo.status != 0 && itemInfo.status != 1 && itemInfo.status != 2) return true;
    // if ((itemInfo.address ?? "").trim() == "") return true;
    if (_fields.findIndex((_item) => _item == itemInfo.field) < 0) return true;

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

  const deleteFileImage = () => {
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
                체험장소 등록
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
                {itemInfo.image != null ? (
                  <div
                    className="rounded-md"
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
                  <button type="primary" onClick={() => inputRef.click()}>
                    <input type="file" accept="image/*" onChange={saveImage} ref={(refParam) => (inputRef = refParam)} style={{ display: "none" }} />
                    {uploadImage.image_file != null ? (
                      <div
                        className="rounded-md"
                        style={{
                          backgroundImage: `url("${uploadImage.preview_URL}")`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          width: 120,
                          height: 120,
                          paddingTop: "100%",
                          backgroundPosition: "center center",
                        }}
                      />
                    ) : (
                      <img src="/images/ic_camera.png" className="absolute top-10 left-10" />
                    )}
                  </button>
                )}

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
                  placeholder="체험장소 이름을 입력해주세요."
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
                <ToggleButton
                  value={0}
                  aria-label="방문예정"
                  className="w-full"
                  onClick={() => {
                    if (props.query.isLocker) return;
                    setItemInfo({
                      ...itemInfo,
                      status: 0,
                    });
                  }}
                >
                  방문예정
                </ToggleButton>
                <ToggleButton
                  value={1}
                  arai-label="방문완료"
                  className="w-full"
                  onClick={() => {
                    if (props.query.isLocker) return;
                    setItemInfo({
                      ...itemInfo,
                      status: 1,
                    });
                  }}
                >
                  방문완료
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </section>
          <section className="mx-5 my-6">
            <div className="text-sm textGray2 font-medium">영역</div>
            <div className="mt-5 flex flex-wrap">
              {_fields.map((_fieldItem, index) => {
                return (
                  <span
                    className={`block text-sm px-3 py-1.5 border border-solid rounded-sm mr-3 mb-3
                            ${itemInfo.field == _fieldItem ? "textOrange5 border-orange5" : "textGray4 border-gray3"}`}
                    onClick={() =>
                      setItemInfo({
                        ...itemInfo,
                        field: _fieldItem,
                      })
                    }
                    key={index}
                  >
                    {_fieldItem}
                  </span>
                );
              })}
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

export default AddPlace;

AddPlace.getInitialProps = async (ctx) => {
  return {
    query: ctx.query,
  };
};
