import { getAuth } from "firebase/auth";
import network from "../../../util/network";
import moment from "moment";
import { useRouter } from "next/router";

export default function CommunityPayBtn(props) {
  const router = useRouter();
  const auth = getAuth();
  const amountFormat = () => props.community.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

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

  // 모임 참여 취소
  const cancelAttend = async () => {
    const _memberIndex = props.members.findIndex((_member) => _member.uid == auth.currentUser.uid);
    await network.delete(`/communityAttend/${props.members[_memberIndex].communityAttendUid}`);
    props.getItem();
  };

  return (
    <div className="flex p-5 fixed bottom-0 left-0 right-0 bg-white">
      <div className="flex-1 flex-col">
        <div className="textGray3 text-base font-normal">1시간 당</div>
        <div className="text-black text-2xl font-semibold">{amountFormat()}원</div>
      </div>
      <div
        className={`flex flex-1 rounded-md text-white text-base font-semibold justify-center items-center ${nextBtnActive() ? "bg-[#ff6035]" : "bg-gray3"}`}
        onClick={() => {
          if (!nextBtnActive()) return;

          const isAttender = props.members.findIndex((_member) => _member.uid == auth.currentUser.uid) >= 0;
          if (isAttender) {
            cancelAttend();
            return;
          }

          const _href = { pathname: "/community/attend", query: { cid: props.community.communityUid } };
          router.push(_href);
        }}
      >
        {nextBtnText()}
      </div>
    </div>
  );
}
