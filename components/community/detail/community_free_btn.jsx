import { getAuth } from "firebase/auth";
import network from "../../../util/network";
import moment from "moment";

export default function CommunityFreeBtn(props) {
  const auth = getAuth();

  const nextBtnActive = () => {
    const _checkCreator = props.creator.uid == auth.currentUser.uid;

    if (moment() >= moment(props.community.communityDate)) return false;
    if (props.community.status == 1) return false;

    // 참여자
    if (!_checkCreator) {
      if (props.members.length >= props.community.memberMaxCount) return false;
    }

    return true;
  };

  // 버튼 텍스트
  const nextBtnText = () => {
    const _checkCreator = props.creator.uid == auth.currentUser.uid;

    if (_checkCreator) {
      return props.community.status == 1 ? "신청 마감된 모임입니다." : "수락한 이웃과 모임 시작하기";
    }

    if (!_checkCreator) {
      if (props.members.findIndex((_member) => _member.uid == auth.currentUser.uid) >= 0) return "신청 취소하기";
      if (props.community.status == 1) return "리더가 모임 시작 예정입니다.";
      if (moment() >= moment(props.community.communityDate)) return "신청 마감된 모임입니다.";
      if (props.members.length >= props.community.memberMaxCount) return "신청 마감된 모임입니다.";

      return "신청하기";
    }

    return "";
  };

  // 모임 시작하기
  const startCommunity = async () => {
    await network.patch("/community", {
      communityUid: props.community.communityUid,
      status: 1,
    });

    props.getItem();
  };

  // 모임 참여하기
  const attendCommunity = async () => {
    const _attendData = {
      communityUid: props.community.communityUid,
      startTime: props.community.communityStartTime,
      endTime: props.community.communityEndTime,
      requestMessage: null,
    };

    await network.post("/community/attend", _attendData);

    props.getItem();
  };

  // 모임 참여 취소
  const cancelAttend = async () => {
    const _memberIndex = props.members.findIndex((_member) => _member.uid == auth.currentUser.uid);
    await network.delete(`/communityAttend/${props.members[_memberIndex].communityAttendUid}`);
    props.getItem();
  };

  return (
    <div className={`rounded-md mx-5 ${nextBtnActive() ? "bg-[#ff6035]" : "bg-gray3"}`}>
      <button
        className="w-full py-4 text-sm font-semibold text-white"
        disabled={!true}
        onClick={() => {
          if (props.creator.uid == auth.currentUser.uid) startCommunity();

          const isAttender = props.members.findIndex((_member) => _member.uid == auth.currentUser.uid) >= 0;
          if (props.creator.uid != auth.currentUser.uid) isAttender ? cancelAttend() : attendCommunity();
        }}
      >
        {nextBtnText()}
      </button>
    </div>
  );
}