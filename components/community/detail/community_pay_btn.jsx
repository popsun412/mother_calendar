import { getAuth } from "firebase/auth";
import network from "../../../util/network";
import moment from "moment";
import { useRouter } from "next/router";

export default function CommunityPayBtn(props) {
  const router = useRouter();
  const auth = getAuth();
  const amountFormat = () => props.community.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

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

  // 모임 참여 취소
  const cancelAttend = async () => {
    const _memberIndex = props.members.findIndex((_member) => _member.uid == auth.currentUser.uid);
    await network.delete(`/communityAttend/${props.members[_memberIndex].communityAttendUid}`);
    props.getItem();
  };

  return (
    <div className="flex p-5 absolute bottom-0 left-0 right-0 bg-white">
      <div className="flex-1 flex-col">
        <div className="textGray3 text-base font-normal">1시간 당</div>
        <div className="text-black text-2xl font-semibold">{amountFormat()}원</div>
      </div>
      <div
        className={`flex flex-1 rounded-md text-white text-base font-semibold justify-center items-center ${nextBtnActive() ? "bg-[#ff6035]" : "bg-gray3"}`}
        onClick={() => {
          const isAttender = props.members.findIndex((_member) => _member.uid == auth.currentUser.uid) >= 0;
          if (isAttender) cancelAttend();

          const _href = { pathname: "/community/attend", query: { cid: props.community.communityUid } };
          router.push(_href);
        }}
      >
        {props.members.findIndex((_member) => _member.uid == auth.currentUser.uid) >= 0 ? "신청 취소하기" : "신청하기"}
      </div>
    </div>
  );
}
