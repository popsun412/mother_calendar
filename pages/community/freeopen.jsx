/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import network from "../../util/network";
import FreeOpenStep1 from "../../components/community/create/free_open_step1";
import FreeOpenStep2 from "../../components/community/create/free_open_step2";
import { useEffect } from "react";
import CircleLoading from "../../components/common/circle_loading";
import moment from "moment";

export default function FreeOpen() {
  const auth = getAuth();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [load, setLoad] = useState(false);

  const [communityCreateDto, setCommunityCreateDto] = useState({
    name: "",
    subject: "",
    category: "",
    communityType: 0,
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
  });

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
      if (communityCreateDto.minAge != null && communityCreateDto.maxAge == null) return false;
      if (communityCreateDto.maxAge != null && communityCreateDto.minAge == null) return false;
    }

    return true;
  };

  const createCommunity = async () => {
    const _result = await network.post("/community", {
      ...communityCreateDto,
      communityStartTime: communityCreateDto.communityStartTime == null ? null : moment(communityCreateDto.communityStartTime).format("HH:mm"),
      communityEndTime: communityCreateDto.communityEndTime == null ? null : moment(communityCreateDto.communityEndTime).format("HH:mm"),
    });

    if (_result.status == 200) router.push("/community");
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (_user) => {
      if (_user) {
        setLoad(true);
      } else {
        router.push("/");
      }
    });
  });

  return load ? (
    <div className="w-full h-screen flex flex-col">
      <div className="flex-auto">
        <div className="relative flex py-4">
          <span className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-base font-medium textGray1 z-40">무료 모임 개설</span>

          <div className="flex flex-auto justify-between items-center z-50 ml-2.5">
            <svg
              className="w-7 h-8 ml-1 textGray2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                if (step == 1) router.back();
                if (step == 2) setStep(1);
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </div>
        </div>
        {step == 1 ? (
          <FreeOpenStep1 setCommunityCreateDto={setCommunityCreateDto} communityCreateDto={communityCreateDto} />
        ) : (
          <FreeOpenStep2 setCommunityCreateDto={setCommunityCreateDto} communityCreateDto={communityCreateDto} />
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
