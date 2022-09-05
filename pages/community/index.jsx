/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import CommunityTop from "../../components/community/community_top";
import CommunityDate from "../../components/community/community_date";
import CommunityWeek from "../../components/community/community_week";
import CommunityCardList from "../../components/community/community_card_list";
import CommunityAddBtn from "../../components/community/community_add_btn";
import Navigation from "../../components/common/navigation";
import { useState } from "react";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import CircleLoading from "../../components/common/circle_loading";
import network from "../../util/network";

export default function Community() {
  const auth = getAuth();
  const [load, setLoad] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [myRegion, setMyRegion] = useState(null);

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
  }, [auth]);

  return load ? (
    <>
      <div className="w-full h-screen flex flex-col">
        <div className="flex flex-col w-full h-full relative">
          <div className="flex flex-col px-5 pt-5">
            <CommunityTop userInfo={userInfo} myRegion={myRegion} setMyRegion={setMyRegion} />
            <CommunityDate />
            <CommunityWeek />
          </div>
          <CommunityCardList myRegion={myRegion} />
          <CommunityAddBtn />
        </div>
        <Navigation path={"community"} />
      </div>
    </>
  ) : (
    <div className="h-screen w-full">
      <CircleLoading />
    </div>
  );
}
