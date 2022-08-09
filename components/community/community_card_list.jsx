/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useEffect } from "react";
import CommunityCard from "../community/community_card";
import { useRecoilState } from "recoil";
import { selectedDateState } from "../../states/community_state";

export default function CommunityCardList() {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);

  const [items, setItems] = useState([]);

  const getItems = () => {};

  useEffect(() => {
    getItems();
  }, [selectedDate]);

  return (
    <div className="flex-auto flex flex-col px-5 pt-4 overflow-y-auto scrollbar-hide pb-36 bg-gray2">
      {items.map((_item, index) => {
        return <CommunityCard key={index} item={{ status: 2 }} />;
      })}
    </div>
  );
}
