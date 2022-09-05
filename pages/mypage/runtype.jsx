/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import NoData from "../../components/runtype/nodata";
import RuntypeData from "../../components/runtype/runtype_data";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import CircleLoading from "../../components/common/circle_loading";
import network from "../../util/network";

import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";

const RunType = () => {
  const auth = getAuth();
  const router = useRouter();

  const [items, setItems] = useState(null);

  const getData = async () => {
    const _result = await network.get("/user/runtype");

    setItems(_result.data);
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (_user) => {
      if (_user) {
        getData();
      } else {
        router.push("/");
      }
    });
  }, []);

  return items != null ? (
    <>
      <div className="flex items-center px-4" style={{ height: 50 }}>
        <ArrowBackIosNewRounded onClick={() => router.back()} style={{ width: 24, color: "#4f4f4f" }} />
        <span className="mx-10 absolute left-0 right-0 text-center text-base font-medium textGray1 z-40">내 실행 유형</span>
      </div>
      {items.length == 0 ? <NoData /> : <RuntypeData items={items} />}
    </>
  ) : (
    <div className="w-full h-screen flex justify-center items-center">
      <CircleLoading />
    </div>
  );
};

export default RunType;
