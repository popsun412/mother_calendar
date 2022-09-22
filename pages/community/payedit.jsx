/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import network from "../../util/network";
import moment from "moment";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import PayOpenStep1 from "../../components/community/create/pay_open_step1";
import PayOpenStep2 from "../../components/community/create/pay_open_step2";
import CircleLoading from "../../components/common/circle_loading";

export default function PayEdit() {
  const auth = getAuth();
  const router = useRouter();
  const [userInfo, setUserInfo] = useState(null);
  const [step, setStep] = useState(1);
  const [load, setLoad] = useState(false);

  const [communityEditDto, setCommunityEditDto] = useState({
    name: "",
    subject: "",
    category: "",
    communityType: 1,
    communityDates: [],
    communityStartTime: null,
    communityEndTime: null,
    placeType: null,
    address: null,
    detailAddress: null,
    region: null,
    memberMaxCount: 0,
    condition: null,
    minAge: null,
    maxAge: null,
    message: "",
    amount: 0,
    offers: [],
    directOffer: "",
    images: [],
  });

  // 유저 정보 갖고오기
  const getUser = async () => {
    const _result = await network.post("/userInfo");

    // data 통신
    if (_result.status == 200) {
      setUserInfo(_result.data);
      setLoad(true);
    } else {
      router.push("/");
    }
  };

  const getItem = async () => {
    setLoad(false);

    const _result = await network.get(`/community/${router.query.cid}`);

    setCommunityEditDto({
      amount: _result.data.community.amount,
      communityUid: _result.data.community.communityUid,
      name: _result.data.community.name,
      subject: _result.data.community.subject,
      communityType: _result.data.community.communityType,
      communityDates: [moment(_result.data.community.communityDate).toDate()],
      communityStartTime: moment(`${_result.data.community.communityDate} ${_result.data.community.communityStartTime}`).toDate(),
      communityEndTime: moment(`${_result.data.community.communityDate} ${_result.data.community.communityEndTime}`).toDate(),
      placeType: _result.data.community.placeType,
      address: _result.data.community.address,
      detailAddress: _result.data.community.detailAddress,
      memberMaxCount: _result.data.community.memberMaxCount,
      condition: _result.data.community.condition,
      minAge: _result.data.community.minAge,
      maxAge: _result.data.community.maxAge,
      message: _result.data.community.message,
      offers: _result.data.community.offers ?? [],
      images: _result.data.community.images ?? [],
    });

    setLoad(true);
  };

  useEffect(() => {
    if (router.query.cid) {
      auth.onAuthStateChanged(async (_user) => {
        if (_user) {
          getUser();
          getItem();
        } else {
          router.push("/");
        }
      });
    }
  }, [router.query.cid]);

  const nextBtnActive = () => {
    if (step == 1) {
      if (communityEditDto.name.trim() == "") return false;
      if (communityEditDto.subject.trim() == "") return false;
      if (communityEditDto.communityDates.length == 0) return false;
      if (communityEditDto.communityStartTime == null) return false;
      if (communityEditDto.communityEndTime == null) return false;
      if (communityEditDto.placeType == null) return false;
      if (communityEditDto.placeType == 1 && communityEditDto.address == null) return false;
      if (communityEditDto.placeType == 1 && communityEditDto.detailAddress.trim() == "") return false;
    }

    if (step == 2) {
      if (communityEditDto.memberMaxCount == 0) return false;
      if (communityEditDto.condition == null) return false;
      if (communityEditDto.amount <= 0) return false;
      if (communityEditDto.offers.length == 0) return false;
      if ((communityEditDto.message ?? "").trim().length < 50) return false;
      if (communityEditDto.minAge == null || communityEditDto.maxAge == null) return false;
      if (communityEditDto.images == null || communityEditDto.images.length == 0) return false;
    }

    return true;
  };

  const editCommunity = async () => {
    const offerCheckIndex = communityEditDto.offers.findIndex((_item) => _item == "직접입력");
    if (offerCheckIndex >= 0) communityEditDto.offers[offerCheckIndex] = communityEditDto.directOffer;

    const formData = new FormData();
    for (var key in communityEditDto) {
      if (key == "directOffer") continue;

      if (key == "address") {
        formData.append(key, communityEditDto.placeType == 0 ? userInfo.address : communityEditDto.address);
        continue;
      }

      if (key == "communityStartTime") {
        formData.append(key, communityEditDto.communityStartTime == null ? null : moment(communityEditDto.communityStartTime).format("HH:mm"));
        continue;
      }

      if (key == "communityEndTime") {
        formData.append(key, communityEditDto.communityEndTime == null ? null : moment(communityEditDto.communityEndTime).format("HH:mm"));
        continue;
      }

      if (key != "images") {
        formData.append(key, communityEditDto[key]);
      } else {
        communityEditDto[key].map((_image) => {
          formData.append("images", _image);
        });
      }
    }

    const _imageTypes = [];
    (communityEditDto.images ?? []).map((_image) => {
      _imageTypes.push(typeof _image == "string" ? "string" : "file");
    });

    if (_imageTypes.length > 0) formData.append("imageTypes", _imageTypes.join(","));

    const _result = await network.put("/community", formData);

    if (_result.status == 200) router.push({ pathname: "/community/detail", query: { cid: communityEditDto.communityUid } });
  };

  return load ? (
    <div className="w-full h-screen flex flex-col">
      <div className="flex-auto">
        <div className="relative flex py-4">
          <span className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-base font-medium textGray1 z-40">유료 모임 수정</span>

          <div className="flex flex-auto justify-between items-center z-50 ml-4">
            <ArrowBackIosNewRounded
              onClick={() => {
                if (step == 1) router.back();
                if (step == 2) setStep(1);
              }}
              style={{ width: 24, color: "#4f4f4f" }}
            />
          </div>
        </div>
        {step == 1 ? (
          <PayOpenStep1 setCommunityCreateDto={setCommunityEditDto} communityCreateDto={communityEditDto} />
        ) : (
          <PayOpenStep2 setCommunityCreateDto={setCommunityEditDto} communityCreateDto={communityEditDto} />
        )}
      </div>
      <div className={`rounded-md mx-5 mb-6 ${nextBtnActive() ? "bg-[#ff6035]" : "bg-gray3"}`}>
        <button
          className="w-full py-4 text-sm font-semibold text-white"
          disabled={!nextBtnActive()}
          onClick={() => {
            if (step == 1) setStep(2);
            if (step == 2) editCommunity();
          }}
        >
          {step == 1 ? "다음" : "모임 수정하기"}
        </button>
      </div>
    </div>
  ) : (
    <div className="h-screen w-full">
      <CircleLoading />
    </div>
  );
}
