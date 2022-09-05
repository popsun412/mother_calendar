/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import BookCard from "../locker/book_card";
import EduCard from "../locker/edu_card";
import PlaceCard from "../locker/place_card";
import AcademyCard from "../locker/academy_card";
import network from "../../util/network";
import { ArrowBackIosNewRounded } from "@mui/icons-material";

import CircleLoading from "../../components/common/circle_loading";

// react, next
import { useRouter } from "next/router";

// firebase
import { getAuth } from "firebase/auth";

// 글로벌 상태관리
import { useRecoilState } from "recoil";
import { certifyLockerState, selectedLockerState } from "../../states/certify_locker";
import { planLockerTypeState } from "../../states/locker_type";

export default function PlanItemAdd(props) {
  const auth = getAuth();
  const router = useRouter();
  const [lockers, setLockers] = useRecoilState(certifyLockerState);
  const [planLockerType, setPlanLockerType] = useRecoilState(planLockerTypeState);
  const [selectedLockerIndex, setSelectedLockerIndex] = useRecoilState(selectedLockerState);

  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(false);
  const [getting, setGetting] = useState(false);

  const selectedStyle = "border-b-2 text-[#3c81e1] border-[#3c81e1]";
  const nonSelectedStyle = "textGray4 font-normal text-sm";

  const getItems = async () => {
    setItems([]);
    setGetting(true);

    const _result = await network.post("/locker/items", {
      order: "reg",
      status: 1,
      lockerType: planLockerType ?? "책장",
      removeLockers: lockers.map((_locker) => _locker.itemUid),
    });

    setItems(_result.data);
    setGetting(false);
  };

  // 유저 정보 갖고오기
  const getUser = async () => {
    const _result = await network.post("/userInfo");

    // data 통신
    if (_result.status == 200) {
    } else {
      router.push("/");
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (_user) => {
      if (_user) {
        await getUser();
        await getItems();
        setLoad(true);
      } else {
        router.push("/");
      }
    });
  }, [router, planLockerType]);

  const addLocker = (_item) => {
    if (selectedLockerIndex == null) {
      lockers = lockers.concat([_item]);
    } else {
      const _tempLockers = lockers.map((_locker, index) => {
        if (index !== selectedLockerIndex) return _locker;
        return _item;
      });

      console.log(_tempLockers);

      lockers = [].concat(_tempLockers);
    }

    setLockers([].concat(lockers));
    router.back();
  };

  const _infoText = () => {
    if (planLockerType == "책장") return "내가 보유중인 아이템으로 채워주세요.";
    if (planLockerType == "교구장") return "내가 보유중인 아이템으로 채워주세요.";
    if (planLockerType == "학원") return "내가 방문한 아이템으로 채워주세요.";
    if (planLockerType == "체험") return "내가 방문한 아이템으로 채워주세요.";
  };

  return load ? (
    <div className="flex flex-col w-full h-screen overflow-y-auto">
      <div className="relative py-4 items-center justify-center px-5">
        <span className="absolute mx-4 top-0 right-10 bottom-0 left-10 flex justify-center items-center" style={{ zIndex: 10 }}>
          보관함
        </span>
        <ArrowBackIosNewRounded className="-ml-1" onClick={() => router.back()} style={{ width: 24, color: "#4f4f4f" }} />
      </div>
      <span className="text-sm font-normal textGray2 flex items-center justify-center my-3">추가할 아이템을 선택해주세요.</span>

      <div className="flex-auto flex flex-col">
        <div
          className="grid grid-cols-4 text-center border-b-[0.38px] border-gary4 mb-2.5 justify-center items-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
        >
          <span className={`py-3 ${planLockerType == "책장" ? selectedStyle : nonSelectedStyle}`} onClick={() => setPlanLockerType("책장")}>
            책장
          </span>
          <span className={`py-3 ${planLockerType == "교구장" ? selectedStyle : nonSelectedStyle}`} onClick={() => setPlanLockerType("교구장")}>
            교구장
          </span>
          <span className={`py-3 ${planLockerType == "학원" ? selectedStyle : nonSelectedStyle}`} onClick={() => setPlanLockerType("학원")}>
            학원지도
          </span>
          <span className={`py-3 ${planLockerType == "체험" ? selectedStyle : nonSelectedStyle}`} onClick={() => setPlanLockerType("체험")}>
            체험지도
          </span>
        </div>

        <div className="flex-auto flex flex-col px-5">
          {getting ? (
            <div className="flex-auto flex justify-center items-center">
              <CircleLoading />
            </div>
          ) : (
            <>
              {items.map((_item) => {
                if (planLockerType == "책장") return <BookCard key={_item.itemUid} item={_item} onClick={() => addLocker(_item)} />;
                if (planLockerType == "교구장") return <EduCard key={_item.itemUid} item={_item} onClick={() => addLocker(_item)} />;
                if (planLockerType == "학원") return <AcademyCard key={_item.itemUid} item={_item} onClick={() => addLocker(_item)} />;
                if (planLockerType == "체험") return <PlaceCard key={_item.itemUid} item={_item} onClick={() => addLocker(_item)} />;
              })}

              {/* 아이템이 없습니다 */}
              {items.length == 0 ? (
                <div className="flex-auto flex flex-col items-center justify-center">
                  <img src="/images/no_result.png" width={"93px"} height={"113px"} style={{ margin: "0 auto" }} />
                  <div className="text-sm text-center textGray4 mt-2.5" style={{ lineHeight: 1.7, letterSpacing: "-0.28px" }}>
                    아이템이 없습니다.
                    <br />
                    {_infoText()}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </>
          )}
          {!props.menuOpen ? (
            <div className="fixed flex justify-end max-w-500 pr-4 bottom-6 z-100" onClick={() => props.setMenuOpen(true)}>
              <img src="/images/ic_float.png" style={{ width: 72, height: 72 }} />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-screen flex justify-center items-center">
      <CircleLoading />
    </div>
  );
}
