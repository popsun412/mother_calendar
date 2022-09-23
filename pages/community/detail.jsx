/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import CommunityMember from "../../components/community/detail/community_member";
import CommunityAppBar from "../../components/community/detail/app_bar";
import CommunityDeatilHeader from "../../components/community/detail/community_detail_header";
import CommunityDetailCreator from "../../components/community/detail/community_detail_creator";
import CommunityMemberEmpty from "../../components/community/detail/community_member_empty";
import CommunityFreeBtn from "../../components/community/detail/community_free_btn";
import CommunityPayBtn from "../../components/community/detail/community_pay_btn";
import CircleLoading from "../../components/common/circle_loading";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import network from "../../util/network";
import moment from "moment";

export default function CommunityDetail() {
  const auth = getAuth();
  const router = useRouter();
  const [load, setLoad] = useState(false);
  const [community, setCommunity] = useState(null);
  const [creator, setCreator] = useState(null);
  const [members, setMembers] = useState(null);

  const getItem = async () => {
    setLoad(false);

    const _result = await network.get(`/community/${router.query.cid}`);

    setCommunity(_result.data.community);
    setCreator(_result.data.creator);
    setMembers(_result.data.members);

    setLoad(true);
  };

  useEffect(() => {
    if (router.query.cid) {
      auth.onAuthStateChanged(async (_user) => {
        if (_user) {
          getItem();
        } else {
          router.push("/");
        }
      });
    }
  }, [router.query.cid]);

  // 버튼 활성화
  const nextBtnActive = () => {
    const _checkCreator = creator.uid == auth.currentUser.uid;
    if (moment() >= moment(community.communityDate)) return false;
    if (community.status == 1) return false;

    // 참여자
    if (!_checkCreator) {
      if (members.filter((_member) => _member.status == 1).length >= community.memberMaxCount) return false;
    }

    return true;
  };

  return load ? (
    <>
      <div className="w-full h-screen flex flex-col border overflow-y-auto pb-5">
        <div className="flex-auto">
          <div className="px-5">
            {/* 앱바 */}
            <CommunityAppBar checkCreator={creator.uid == auth.currentUser.uid} community={community} />

            {/* 헤더 */}
            <CommunityDeatilHeader community={community} />

            {/* 개설자 */}
            <CommunityDetailCreator creator={creator} community={community} />
          </div>

          {/* 구분선 */}
          <div className="h-px bg-gray bg-gray4" style={{ marginTop: 18, marginBottom: 18 }} />

          {/* 참여자 목록 */}
          <div className="px-5 mb-20">
            <div className="mb-4">
              <span className="font-semibold text-base">
                모임에 참여 신청한 이웃입니다. ({members.map((_member) => _member.status == 1).length}/{community.memberMaxCount})
              </span>
            </div>
            {members.length == 0 ? (
              <CommunityMemberEmpty />
            ) : (
              <div className="space-y-6">
                {members.map((_member, index) => (
                  <CommunityMember key={index} member={_member} community={community} checkCreator={creator.uid == auth.currentUser.uid} />
                ))}
              </div>
            )}
          </div>
        </div>
        {community.communityType == 1 && community.status == 0 && community.userUid != auth.currentUser.uid ? (
          <CommunityPayBtn community={community} members={members} creator={creator} getItem={getItem} />
        ) : (
          <CommunityFreeBtn community={community} members={members} creator={creator} getItem={getItem} />
        )}
      </div>
    </>
  ) : (
    <div className="h-screen w-full">
      <CircleLoading />
    </div>
  );
}
