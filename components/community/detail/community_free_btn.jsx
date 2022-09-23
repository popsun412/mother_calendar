import { getAuth } from "firebase/auth";
import network from "../../../util/network";
import { useRouter } from "next/router";
import moment from "moment";

export default function CommunityFreeBtn(props) {
  const router = useRouter();
  const auth = getAuth();

  const communityDateTime = moment(`${props.community.communityDate} ${props.community.communityStartTime}`);

  const attendCount = () => props.members.filter((_member) => _member.status == 1 && _member.uid != auth.currentUser.uid).length;

  const nextBtnActive = () => {
    const _checkCreator = props.creator.uid == auth.currentUser.uid;
    if (moment() >= communityDateTime) return false;
    if (props.community.status == 1) return false;

    // 참여자
    if (!_checkCreator) {
      if (attendCount() >= props.community.memberMaxCount) return false;
    }

    return true;
  };

  // 버튼 텍스트
  const nextBtnText = () => {
    const _checkCreator = props.creator.uid == auth.currentUser.uid;

    if (_checkCreator) {
      if (moment() >= communityDateTime) return "신청 마감된 모임입니다.";
      return props.community.status == 1 ? "신청 마감된 모임입니다." : "수락한 이웃과 모임 시작하기";
    }

    if (!_checkCreator) {
      if (props.members.findIndex((_member) => _member.uid == auth.currentUser.uid) >= 0 && props.community.status == 1) return "리더가 모임 시작 예정입니다.";
      if (moment() >= communityDateTime) return "신청 마감된 모임입니다.";
      if (attendCount() >= props.community.memberMaxCount) return "신청 마감된 모임입니다.";
      if (props.members.findIndex((_member) => _member.uid == auth.currentUser.uid) >= 0) return "신청 취소하기";

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
    const _href = { pathname: "/community/attend", query: { cid: props.community.communityUid } };
    router.push(_href);
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
        disabled={!nextBtnActive()}
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
