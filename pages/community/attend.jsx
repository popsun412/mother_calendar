/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import CircleLoading from "../../components/common/circle_loading";
import CommunityAttendInfo from "../../components/community/attend/community_attend_info";
import moment from "moment";
import network from "../../util/network";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import { useRef } from "react";

export default function CommunityAttend() {
  const router = useRouter();
  const auth = getAuth();

  const [load, setLoad] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [infoCheck, setInfoCheck] = useState(false);

  const communityInfo = useRef(null);

  const [attendCommunityDto, setAttendCommunityDto] = useState({
    communityUid: router.query.cid,
    startTime: null,
    endTime: null,
    requestMessage: null,
  });

  const getUser = async () => {
    const _result = await network.post("/userInfo");

    // data 통신
    if (_result.status == 200) {
      setUserInfo(_result.data);
    } else {
      router.push("/");
    }

    const _communityResult = await network.get(`/community/${router.query.cid}`);
    communityInfo.current = _communityResult.data.community;
    setAttendCommunityDto({
      ...attendCommunityDto,
      startTime: moment(`${communityInfo.current.communityDate} ${communityInfo.current.communityStartTime}`).toDate(),
      endTime: moment(`${communityInfo.current.communityDate} ${communityInfo.current.communityEndTime}`).toDate(),
    });

    setLoad(true);
  };

  useEffect(() => {
    if (router.query.cid) {
      auth.onAuthStateChanged(async (_user) => {
        if (_user) {
          getUser();
        } else {
          router.push("/");
        }
      });
    }
  }, [router.query.cid]);

  const attend = async () => {
    const _result = await network.post("/community/attend", {
      ...attendCommunityDto,
      communityUid: communityInfo.current.communityUid,
      startTime: attendCommunityDto.startTime == null ? null : moment(attendCommunityDto.startTime).format("HH:mm"),
      endTime: attendCommunityDto.endTime == null ? null : moment(attendCommunityDto.endTime).format("HH:mm"),
    });

    if (_result.status == 200) {
      router.back();
    }
  };

  const nextBtnActive = () => {
    if (communityInfo.communityType == 1 && attendCommunityDto.startTime == null) return false;
    if (communityInfo.communityType == 1 && attendCommunityDto.endTime == null) return false;
    if (attendCommunityDto.requestMessage == null) return false;
    if (attendCommunityDto.requestMessage.length < 50) return false;
    if (!infoCheck) return false;

    const communtiyAttendDateTime = moment(`${communityInfo.communityDate} ${moment(attendCommunityDto.startTime).format("HH:mm")}`);
    if (communtiyAttendDateTime < moment()) return false;

    return true;
  };

  return load ? (
    <div className="w-full h-screen flex flex-col">
      <div className="flex-auto">
        <div className="relative flex py-4">
          <span className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-base font-medium textGray1 z-40">신청하기</span>

          <div className="flex flex-auto justify-between items-center z-50 ml-4">
            <ArrowBackIosNewRounded onClick={() => router.back()} style={{ width: 24, color: "#4f4f4f" }} />
          </div>
        </div>
        <CommunityAttendInfo
          attendCommunityDto={attendCommunityDto}
          setAttendCommunityDto={setAttendCommunityDto}
          userInfo={userInfo}
          infoCheck={infoCheck}
          communityInfo={communityInfo.current}
          setInfoCheck={setInfoCheck}
        />
      </div>
      <div className={`rounded-md mx-5 mb-6 ${nextBtnActive() ? "bg-[#ff6035]" : "bg-gray3"}`}>
        <button className="w-full py-4 text-sm font-semibold text-white" disabled={!nextBtnActive()} onClick={attend}>
          신청완료
        </button>
      </div>
    </div>
  ) : (
    <div className="h-screen w-full">
      <CircleLoading />
    </div>
  );
}
