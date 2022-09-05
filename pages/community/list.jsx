/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { getAuth } from "firebase/auth";
import CircleLoading from "../../components/common/circle_loading";
import network from "../../util/network";
import { useEffect } from "react";
import { useRouter } from "next/router";
import moment from "moment";
import { ArrowBackIosNewRounded } from "@mui/icons-material";

export default function CommunityList() {
  const auth = getAuth();
  const router = useRouter();
  const [load, setLoad] = useState(false);
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const _result = await network.get("/community/my");

    setItems(_result.data);

    setLoad(true);
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (_user) => {
      if (_user) {
        getItems();
      } else {
        router.push("/");
      }
    });
  }, [auth]);

  const _isActive = (_item) => {
    // 마감
    if (moment(_item.communityDate) <= moment()) return false;
    if (_item.status != 0) return false;
    if (_item.memberMaxCount <= _item.members.length) return false;

    // 정상
    return true;
  };

  // 분류 백그라운드
  const _subjectBg = (_item) => {
    if (!_isActive(_item)) return "bg-gray4";
    if (_item.communityType == 0) return "bg4";
    if (_item.communityType == 1) return "bg-blue4";
  };

  const statusText = (_item) => {
    if (_item.members.length >= _item.memberMaxCount) return "마감";
    if (_item.status != 0) return "마감";
    if (moment(_item.communityDate) <= moment()) return "마감";

    return "모집 중";
  };

  return load ? (
    <div className="w-full h-screen flex flex-col">
      <div className="relative flex py-4">
        <span className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-base font-medium textGray1 z-40">참여 모임 관리</span>

        <div className="flex flex-auto justify-between items-center z-50 ml-4">
          <ArrowBackIosNewRounded onClick={() => router.back()} style={{ width: 24, color: "#4f4f4f" }} />
        </div>
      </div>
      <div className="flex-auto bg-gray2 py-4 px-5 space-y-4">
        {items.map((_item, index) => {
          return (
            <div
              className="flex bg-white rounded-md p-3 items-center"
              key={index}
              onClick={() => {
                let _href = { pathname: "/community/detail", query: { cid: _item.communityUid } };
                router.push(_href);
              }}
            >
              <div className="flex-auto overflow-hidden">
                <div className="flex">
                  <div
                    className={`inline-flex flex-shrink-0 max-h-6 justify-center items-center px-1 py-0.5 mr-2 rounded text-white text-xs ${_subjectBg(_item)}`}
                  >
                    <span>{_item.subject}</span>
                  </div>
                  <span className={`text-sm whitespace-nowrap break-words text-ellipsis overflow-hidden ${true ? "" : "textGray4 line-through"}`}>
                    {_item.name}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                {_item.creator.uid == auth.currentUser.uid ? <img src="/images/community/creator.png" alt="" className="w-3" /> : <></>}
                <span className={`${_isActive(_item) ? "textOrange4" : "textGray4"}`}>{statusText(_item)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="h-screen w-full">
      <CircleLoading />
    </div>
  );
}
