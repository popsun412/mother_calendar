/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useEffect } from "react";
import CommunityCard from "../community/community_card";
import { useRecoilState } from "recoil";
import { selectedDateState } from "../../states/community_state";
import CommunityEmpty from "./community_empty";
import network from "../../util/network";
import moment from "moment";
import CircleLoading from "../../components/common/circle_loading";

export default function CommunityCardList(props) {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);

  const [load, setLoad] = useState(false);
  const [items, setItems] = useState([]);

  const getItems = async () => {
    setLoad(false);

    const _result = await network.get(`/community?date=${moment(selectedDate).format("YYYY-MM-DD")}&region=${props.myRegion}`);
    setItems(_result.data);

    setLoad(true);
  };

  useEffect(() => {
    if (props.myRegion != null) getItems();
  }, [selectedDate, props.myRegion]);

  return load ? (
    <div className="flex-auto flex flex-col px-5 pt-4 overflow-y-auto scrollbar-hide pb-36 bg-gray2">
      {items.length == 0 ? (
        <CommunityEmpty />
      ) : (
        items.map((_item, index) => {
          return <CommunityCard key={index} item={_item} />;
        })
      )}
    </div>
  ) : (
    <div className="h-screen w-full bg-gray2">
      <CircleLoading />
    </div>
  );
}
