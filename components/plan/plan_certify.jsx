/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import PlanTitle from "../calendar/plan_title";
import { TextareaAutosize } from "@mui/material";
import network from "../../util/network";
import { getLocktypeImage } from "../../util/helper";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import { useRecoilState } from "recoil";
import { selectedLockerState } from "../../states/certify_locker";
import { certifyUploadImageState, certifyRviewState } from "../../states/certify_info";
import CircleLoadingOpacity from "../../components/common/circle_loading_opacity";
import AuthSuccessPopup from "../auth/popup/auth_success_popup";
import { calcPercent } from "../../util/helper";
import moment from "moment";
import { useRef } from "react";

export default function PlanCertify(props) {
  const [date, setDate] = useState(null);
  const [saving, setSaving] = useState(false);

  const router = useRouter();

  const [selectedLockerIndex, setSelectedLockerIndex] = useRecoilState(selectedLockerState);
  const [uploadImage, setUploadImage] = useRecoilState(certifyUploadImageState);
  const [review, setReview] = useRecoilState(certifyRviewState);
  const [image, setImage] = useState(props.item?.auth?.image ?? null);

  // 팝업 파라미터
  const [isSuccessPopup, setIsSuccessPopup] = useState(false);
  const successPopupParam = useRef({ authCount: 0, totalCount: 0 });

  const saveImage = (e) => {
    const fileReader = new FileReader();

    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }

    fileReader.onload = () => {
      setUploadImage({
        image_file: e.target.files[0],
        preview_URL: fileReader.result,
      });
    };
  };

  const deleteFileImage = () => {
    setImage(null);
    setUploadImage({ image_file: null, preview_URL: "" });
  };

  // 실행 인증
  const onSave = async () => {
    if (saving) return;
    setSaving(true);

    const formData = new FormData();
    if ((props.item?.auth ?? null) != null) formData.append("planAuthUid", props.item.auth.planAuthUid);
    formData.append("planUid", props.plan.planUid);
    formData.append("commonPlanUid", props.plan.commonPlanUid);
    formData.append("image", image);
    formData.append("uploadImage", uploadImage.image_file);
    formData.append("review", review);
    formData.append("itemUids", props.lockers.length == 0 ? null : props.lockers.map((_locker) => _locker.itemUid));

    // 업데이트
    if ((props.item?.auth ?? null) != null) {
      await network.post("/plan/authupdate", formData);
      router.push("/calendar");
      // 오늘 인증하기
    } else {
      if (date && moment().format("YYYY-MM-DD") > date.format("YYYY-MM-DD")) formData.append("date", date);
      const _authResult = await network.post("/plan/auth", formData);

      if (_authResult.data && !_authResult.data.check) {
        alert("오늘 인증을 이미 완료했습니다.");
        router.back();
        return;
      }

      // 인증 후 프로세스
      authSuccess(_authResult.data);
    }

    setSaving(false);
  };

  // 인증완료
  const authSuccess = (_authResultData) => {
    const totalCount = props.plan.repeatDay != null ? calcPercent(props.plan) : 1;
    successPopupParam.current = { authCount: _authResultData.totalAuthCount, totalCount };
    setIsSuccessPopup(true);

    setTimeout(() => router.push("/calendar"), 1500);
  };

  useEffect(() => {
    if (router.query.date) setDate(moment(router.query.date));
    if (review == "") setReview(props.item?.auth?.review ?? "");
  }, [router]);

  return (
    <>
      <div className="flex py-5 items-center justify-center px-5">
        <ArrowBackIosNewRounded className="-ml-1" onClick={() => router.back()} style={{ width: 24, color: "#4f4f4f" }} />

        <span className="flex-auto text-center text-base font-medium textGray1">실행 인증</span>
        <span className={`text-base font-medium textOrange5`} onClick={onSave}>
          완료
        </span>
      </div>
      <div className="px-5 relative pb-20">
        <div className="flex mt-4 mb-6 items-center">
          <PlanTitle subject={props.plan.subject} />
          <p className="textGray1 text-lg font-semibold">{props.plan.name}</p>
        </div>
        {props.lockers.map((_locker, idx) => {
          return (
            <div
              className="flex items-center justify-center border border-color4 rounded-md mb-4 py-3"
              key={_locker.itemUid}
              onClick={() => {
                setSelectedLockerIndex(idx);
                router.push("/plan/items");
              }}
            >
              <img className="w-4 h-4 mr-2" src={getLocktypeImage(_locker.lockerType, props.item?.plan?.subject ?? "")} />
              <span className="text-sm font-semibold textOrange4">{_locker.name}</span>
            </div>
          );
        })}
        {props.lockers.length < 5 ? (
          <div
            className="flex items-center justify-center border border-color4 rounded-md mb-4 py-3"
            onClick={() => {
              setSelectedLockerIndex(null);
              router.push("/plan/items");
            }}
          >
            <svg className="w-4 h-5 textGray4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
            </svg>
            <span className="text-sm font-medium textGray4">아이템 추가하기</span>
          </div>
        ) : (
          <></>
        )}
        <div className="flex items-center justify-center mt-9 mb-20">
          {/* 이미지가 없을 때*/}
          {uploadImage.image_file == null && image == null ? (
            <label
              htmlFor="imgUpload"
              style={{ display: "inline-block", fontSize: "inherit", lineHeight: "normal", verticalAlign: "middle", cursor: "pointer" }}
            >
              <div className="flex items-center justify-center bg-gray2 border-4 w-[11.25rem] h-[11.25rem]">
                <img src="/images/camera.png" className="h-14 w-14 rounded-md" />
              </div>
            </label>
          ) : (
            <div className="relative flex items-center justify-center flex-col">
              <div className="rounded-md w-[11.25rem] h-[11.25rem]">
                <img src={image != null ? image : uploadImage.preview_URL} className="w-full h-full rounded-md" />
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
              </div>
              <label htmlFor="imgUpload">
                <span className="text-xs font-normal textGray3 underline mt-3">수정</span>
              </label>
            </div>
          )}
          <input type="file" id="imgUpload" accept="image/*" onChange={saveImage} className="hidden" />
        </div>

        <TextareaAutosize
          className="text-sm font-normal flex w-full resize-none outline-none text-center"
          placeholder="실행 리뷰를 입력해주세요."
          maxLength={2000}
          minRows={4}
          value={review}
          onChange={(e) => {
            setReview(e.currentTarget.value.length > 2000 ? e.currentTarget.value.substring(0, 2000) : e.currentTarget.value);
          }}
        />
        <p className="text-right w-full text-sm font-normal textGray3">{`${review.length}/2000`}</p>
      </div>
      {saving ? <CircleLoadingOpacity /> : <></>}
      {isSuccessPopup ? <AuthSuccessPopup param={successPopupParam.current} /> : <></>}
    </>
  );
}
