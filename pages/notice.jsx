/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import NoticeItem from "../components/notice/notice_item";
import network from "../util/network";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const NoticeList = () => {
  const [hasMore, setHasMore] = useState(true);
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const _result = await network.get("/notice?offset=0");
    setItems(_result.data.items);
  };

  useEffect(() => {
    getItems();
  }, []);

  const moreItem = async () => {
    const res = await network.get(`/notice/items?offset=${items.length}`);
    if (res.data.items.length == 0) setHasMore(false);
    setItems(items.concat(res.data.items));
  };

  return (
    <InfiniteScroll dataLength={items.length} next={moreItem} hasMore={hasMore}>
      <div className="w-full h-screen overflow-y-auto scrollbar-hide">
        <div className="fixed max-w-500 bg-white top-0 flex items-center w-full px-4" style={{ height: 50 }}>
          <img
            src="/images/ic_back.png"
            className="w-10 relative -left-4"
            onClick={() => {
              window.history.back();
            }}
          />
          <span className="mx-12 absolute left-0 right-0 text-center text-base font-medium">공지사항</span>
        </div>
        <div className="flex flex-col space-y-2 mt-14 px-4">
          {items.map((_item, index) => (
            <NoticeItem key={index} noticeItem={_item} />
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default NoticeList;
