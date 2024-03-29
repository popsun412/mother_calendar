/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from "react";
import network from "../util/network";
import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link";
import { ArrowBackIosNewRounded } from "@mui/icons-material";

const Parents = () => {
  const [hasMore, setHasMore] = useState(true);
  const _orders = [
    { value: "reg", label: "최신순" },
    { value: "name", label: "이름순" },
  ];
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState(_orders[0]);

  const getItems = async () => {
    const res = await network.post("/home/recommParents", { order: order.value });
    setItems(res.data);
  };

  useEffect(() => {
    getItems();
  }, [order]);

  const clickOrder = () => {
    setOrder(order.value == "name" ? _orders[0] : _orders[1]);
  };

  const moreITems = async () => {
    const res = await network.post("/home/recommParents", { order: order.value, offset: items.length, limit: 20 });
    if (res.data.length == 0) setHasMore(false);
    setItems(items.concat(res.data));
  };

  return (
    <InfiniteScroll dataLength={items.length} next={moreITems} hasMore={hasMore}>
      <div>
        <header className="fixed top-0 left-0 right-0 visible opacity-100  bg-white z-100" style={{ marginBottom: "-50px" }}>
          <div className="my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white border-b border-solid border-gray3" style={{ height: "50px" }}>
            <div className="flex-1 flex items-center relative">
              <ArrowBackIosNewRounded className="relative flex-shrink-0" onClick={() => window.history.back()} style={{ width: 24, color: "#4f4f4f" }} />
              <div className="absolute left-0 right-0 mx-10 text-center text-base font-medium" style={{ letterSpacing: "-0.3px" }}>
                부모
              </div>
            </div>
          </div>
        </header>
        <main className="my-14">
          <div className="mx-4">
            <div className="block relative" style={{ height: "26px" }}>
              <div className="block absolute right-0 items-center">
                <span className="bg-gray2 py-1.5 px-2 text-xs text-center textGray2 rounded flex items-center" onClick={clickOrder}>
                  <img src="/images/order_icon.png" className="w-4 mr-1" />
                  {order.label}
                </span>
              </div>
            </div>
            <div className="mt-5">
              {items.map((item, idx) => {
                return (
                  <Link href={{ pathname: "/item", query: { commonItemUid: item.commonItemUid } }} key={idx} passHref>
                    <div className="flex mt-5">
                      <div className="mr-4 w-24 h-24">
                        <img src={item.image} className="rounded-md" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1.5" style={{ fontSize: 15 }}>
                          {item.name}
                        </h3>
                        <div className="flex items-center">
                          <span className="py-0.5 px-1 mr-1.5 rounded text-xs textGray3" style={{ backgroundColor: "#f0f5f8" }}>
                            {item.subject}
                          </span>
                          <span className="py-0.5 px-1 mr-1.5 rounded text-xs textGray3" style={{ backgroundColor: "#f0f5f8" }}>
                            {item.field}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </InfiniteScroll>
  );
};

export default Parents;
