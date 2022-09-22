/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import network from "../../util/network";
import moment from "moment";
import PayOpenStep1 from "../../components/community/create/pay_open_step1";
import PayOpenStep2 from "../../components/community/create/pay_open_step2";
import CircleLoading from "../../components/common/circle_loading";
import { useEffect } from "react";
import { ArrowBackIosNewRounded } from "@mui/icons-material";

export default function PayOpen() {
  const auth = getAuth();
  const router = useRouter();
  const [userInfo, setUserInfo] = useState(null);
  const [step, setStep] = useState(1);
  const [load, setLoad] = useState(false);

  const [communityCreateDto, setCommunityCreateDto] = useState({
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

  useEffect(() => {
    auth.onAuthStateChanged(async (_user) => {
      if (_user) {
        getUser();
      } else {
        router.push("/");
      }
    });
  }, []);

  const nextBtnActive = () => {
    if (step == 1) {
      if (communityCreateDto.name.trim() == "") return false;
      if (communityCreateDto.subject.trim() == "") return false;
      if (communityCreateDto.communityDates.length == 0) return false;
      if (communityCreateDto.communityStartTime == null) return false;
      if (communityCreateDto.communityEndTime == null) return false;
      if (communityCreateDto.placeType == null) return false;
      if (communityCreateDto.placeType == 1 && communityCreateDto.address == null) return false;
      if (communityCreateDto.address != null && communityCreateDto.detailAddress.trim() == "") return false;
    }

    if (step == 2) {
      if (communityCreateDto.memberMaxCount == 0) return false;
      if (communityCreateDto.condition == null) return false;
      if (communityCreateDto.amount <= 0) return false;
      if (communityCreateDto.offers.length == 0) return false;
      if ((communityCreateDto.message ?? "").trim().length < 50) return false;
      if (communityCreateDto.minAge == null || communityCreateDto.maxAge == null) return false;
      if (communityCreateDto.images == null || communityCreateDto.images.length == 0) return false;
    }

    return true;
  };

  const createCommunity = async () => {
    const offerCheckIndex = communityCreateDto.offers.findIndex((_item) => _item == "직접입력");
    if (offerCheckIndex >= 0) communityCreateDto.offers[offerCheckIndex] = communityCreateDto.directOffer;

    const formData = new FormData();
    for (var key in communityCreateDto) {
      if (key == "directOffer") continue;

      if (key == "address") {
        formData.append(key, communityCreateDto.placeType == 0 ? userInfo.address : communityCreateDto.address);
        continue;
      }

      if (key == "communityStartTime") {
        formData.append(key, communityCreateDto.communityStartTime == null ? null : moment(communityCreateDto.communityStartTime).format("HH:mm"));
        continue;
      }

      if (key == "communityEndTime") {
        formData.append(key, communityCreateDto.communityEndTime == null ? null : moment(communityCreateDto.communityEndTime).format("HH:mm"));
        continue;
      }

      if (key != "images") {
        formData.append(key, communityCreateDto[key]);
      } else {
        communityCreateDto[key].map((_image) => {
          formData.append("images", _image);
        });
      }
    }
    const _result = await network.post("/community", formData);

    router.push("/community");
  };

  return load ? (
    <div className="w-full h-screen flex flex-col">
      <div className="flex-auto">
        <div className="relative flex py-4">
          <span className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-base font-medium textGray1 z-40">유료 모임 개설</span>

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
          <PayOpenStep1 setCommunityCreateDto={setCommunityCreateDto} communityCreateDto={communityCreateDto} />
        ) : (
          <PayOpenStep2 setCommunityCreateDto={setCommunityCreateDto} communityCreateDto={communityCreateDto} />
        )}
      </div>
      <div className={`rounded-md mx-5 mb-6 ${nextBtnActive() ? "bg-[#ff6035]" : "bg-gray3"}`}>
        <button
          className="w-full py-4 text-sm font-semibold text-white"
          disabled={!nextBtnActive()}
          onClick={() => {
            if (step == 1) setStep(2);
            if (step == 2) createCommunity();
          }}
        >
          {step == 1 ? "다음" : "모임 개설하기"}
        </button>
      </div>
    </div>
  ) : (
    <div className="h-screen w-full">
      <CircleLoading />
    </div>
  );
}
