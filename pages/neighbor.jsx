/* eslint-disable react-hooks/exhaustive-deps */
// react, next
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import CircleLoading from "../components/common/circle_loading";

import FriendList from "../components/calendar/frind_list"; // api호출
import network from "../util/network";

// firebase
import { getAuth } from "firebase/auth";

export default function Neighbor() {
  const router = useRouter();

  const auth = getAuth();

  // 글로벌 상태관리
  const [userInfo, setUserInfo] = useState(null);

  // 화면 상태관리
  const [items, setItems] = useState([]);

  // 로그인 확인
  const [load, setLoad] = useState(false);

  // 유저 정보 갖고오기
  const getUser = async () => {
    const _result = await network.post("/userInfo");
    // data 통신
    if (_result.status == 200) {
      setUserInfo(_result.data);
    } else {
      router.push("/");
    }
  };

  // 데이터 갖고오기
  const getItem = async () => {
    const _result = await network.post("/calendar/neighbor");
    console.log(_result);
    setItems(_result.data);
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (_user) => {
      if (_user) {
        await getUser();
        await getItem();
        setLoad(true);
      } else {
        setUserInfo(null);
        router.push("/");
      }
    });
  }, []);

  return (
    <>
      {load ? (
        <div className="w-full h-screen flex flex-col">
          <FriendList items={items} />
        </div>
      ) : (
        <div className="h-screen w-full">
          <CircleLoading />
        </div>
      )}
    </>
  );
}
