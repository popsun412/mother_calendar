/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import CommunityTop from "../../components/community/community_top";
import CommunityDate from "../../components/community/community_date";
import CommunityWeek from "../../components/community/community_week";
import CommunityCardList from "../../components/community/community_card_list";
import CommunityAddBtn from "../../components/community/community_add_btn";
import Navigation from "../../components/common/navigation";

export default function Community() {
  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <div className="flex flex-col w-full h-full relative">
          <div className="flex flex-col px-5 pt-5">
            <CommunityTop />
            <CommunityDate />
            <CommunityWeek />
          </div>
          <CommunityCardList />
          <CommunityAddBtn />
        </div>
        <Navigation path={"community"} />
      </div>
    </>
  );
}
