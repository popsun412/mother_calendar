/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

import network from "../util/network";
import { useRouter } from "next/router";
import moment from "moment";

import PlanHeader from "../components/plandetail/plan_header";
import PlanItem from "../components/plandetail/plan_item";
import PlanTab from "../components/plandetail/plan_tab";
import CircleLoading from "../components/common/circle_loading";

const Plan2 = () => {
  let commonPlanUid = null;

  const auth = getAuth();
  const router = useRouter();

  const [data, setData] = useState({});
  const [field, setField] = useState("");
  const [subject, setSubject] = useState("");
  const [num, setNum] = useState(0);

  const [load, setLoad] = useState(false);

  // 아이템 불러오기
  const getData = async () => {
    const res = await network.get("/plan/commonPlan/" + commonPlanUid);

    if (res.status == 200) {
      setData(res.data);
      setField(res.data.field);
      setSubject(res.data.subject);
      setNum(res.data.repeatDay.length);
    }

    setLoad(true);
  };

  useEffect(async () => {
    if (router.query.commonPlanUid) {
      auth.onAuthStateChanged(async (_user) => {
        if (_user) {
          commonPlanUid = router.query.commonPlanUid;
          await getData();
        } else {
          setUserInfo(null);
          router.push("/");
        }
      });
    }
  }, [router.query]);

  const getRepeatDay = (param) => {
    const result = [];
    let repDay = "";

    if (param) {
      for (let i = 0; i < param.length; i++) {
        param[i] == 0
          ? result.push("일")
          : param[i] == 1
          ? result.push("월")
          : param[i] == 2
          ? result.push("화")
          : param[i] == 3
          ? result.push("수")
          : param[i] == 4
          ? result.push("목")
          : param[i] == 5
          ? result.push("금")
          : result.push("토");
      }
    }

    if (result.length > 1) {
      result.forEach((item) => {
        repDay = repDay + item + ", ";
      });
      repDay = repDay.slice(0, -2);
    } else {
      repDay = result[0];
    }

    return repDay;
  };

  const getTime = (_time) => {
    if (_time == null) return "";
    const _dateTime = moment(`${moment().format("yyyy-MM-DD")} ${_time}`);

    const koA = _dateTime.format("a") == "am" ? "오전" : "오후";
    const koH = _dateTime.format("h시");
    const koM = _dateTime.format("mm");
    return `${koA} ${koH}${koM == "00" ? "" : " " + koM + "분"}`;
  };

  return load ? (
    <>
      <PlanHeader name={data.name} subject={data.subject} />
      <main style={{ fontFamily: "SuncheonR" }}>
        <section className="mb-6">
          <div className="block relative">
            <div
              className="before:bg-black before:bg-opacity-50 before:top-0 before:right-0 before:bottom-0 before:left-0 before:absolute"
              style={{
                backgroundImage: `url("${data.image}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "100%",
                paddingTop: "60%",
                backgroundPosition: "center center",
              }}
            />
            <span className="block absolute text-white font-bold bottom-0 left-0 text-lg mb-12 ml-5" style={{ letterSpacing: "-0.54px" }}>
              {data.name}
            </span>
            <div className="block absolute bottom-0 left-0 mb-6 ml-5 mt-1 text-xs">
              <span className="mr-2 py-1 px-1.5 rounded textOrange1" style={{ letterSpacing: "-0.12px", backgroundColor: "rgba(219, 239, 253, 0.2)" }}>
                {data.subject}
              </span>
              <span className="py-1 px-1.5 rounded textOrange1" style={{ letterSpacing: "-0.12px", backgroundColor: "rgba(219, 239, 253, 0.2)" }}>
                {data.field}
              </span>
            </div>
            <div className="block absolute bottom-0 right-0">
              <div className="mr-5 mb-1">
                <img
                  className={`w-6 mb-1`}
                  src={`${data.isMyPlan ? "/images/ic_add_complete.png?v=1" : "/images/ic_add_03.png"}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    if (data.isMyPlan) return;

                    router.push(`/plan/regist?commonPlanUid=${data.commonPlanUid}`);
                  }}
                />
                <div className="mb-5 text-xs text-white text-center mx-auto">
                  <p>{data.planCount}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-8 mx-5">
          <div>
            <span className="text-base font-semibold mb-3">추천 계획</span>
            <div className="bg-gray2 rounded-md px-5 py-3.5 mb-5">
              <p className="textGray2 font-semibold text-base mb-3">
                주 {num}회 | 매주 {getRepeatDay(data.repeatDay)}
              </p>
              <div className="textGray3 font-normal text-sm flex flex-col space-y-2.5">
                <div className="flex flex-row">
                  <img src="/images/calendar.png" alt="캘린더이미지" className="w-3.5 h-3.5 my-auto mx-0" />
                  <span className="ml-1.5">{data.recommTerm}개월</span>
                </div>
                <div className="flex flex-row">
                  <img src="/images/clock.png" alt="시계이미지" className="w-3.5 h-3.5 my-auto mx-0" />
                  <span className="ml-1.5">
                    {getTime(data.startTime)} - {getTime(data.endTime)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-8 mx-5">
          <div>
            <h3 className="text-base font-semibold mb-3" style={{ letterSpacing: "-0.32px" }}>
              어떤 계획인가요?
            </h3>
            <div className="mt-4">
              <div className="text-sm textGray2" style={{ letterSpacing: "-0.28px" }}>
                <pre className="max-w-full whitespace-pre-wrap" style={{ fontFamily: "SuncheonR" }}>
                  {data.description}
                </pre>
              </div>
            </div>
          </div>
        </section>
        <PlanItem subject={subject} field={field} />
        <PlanTab commonPlanUid={data.commonPlanUid} />
      </main>
      <aside className="fixed max-w-500 bottom-0 left-0 right-0 z-100">
        <div className="relative mx-auto my-0 bg-white">
          <nav
            className="flex items-center box-border relative"
            style={{ height: "90px" }}
            onClick={() => {
              if (data.isMyPlan) return;

              router.push({ pathname: "/plan/regist", query: { commonPlanUid: data.commonPlanUid } });
            }}
          >
            <span className={`text-sm text-white text-center p-4 m-5 w-full rounded-md ${data.isMyPlan ? "bg-gray4" : "bg5"}`}>내 캘린더에 등록하기</span>
          </nav>
        </div>
      </aside>
    </>
  ) : (
    <div className="h-screen w-full">
      <CircleLoading />
    </div>
  );
};

export default Plan2;
