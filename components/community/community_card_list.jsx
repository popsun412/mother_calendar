import { useState } from "react";
import { useEffect } from "react";
import CommunityCard from "../community/community_card";

export default function CommunityCardList() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const getItems = () => {};

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="flex-auto flex flex-col px-5 pt-4 overflow-y-auto scrollbar-hide pb-36 bg-gray2">
      {items.map((_item, index) => {
        return <CommunityCard key={index} item={{ status: 2 }} />;
      })}
    </div>
  );
}
