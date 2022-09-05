/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Link from "next/link";
import { HomeOutlined, ChatBubbleOutline, CalendarTodayOutlined, PersonOutline } from "@material-ui/icons";

const Navigation = (props) => {
  const pathname = props.path;

  return (
    <>
      <aside className="fixed max-w-500 inset-x-0 bottom-0 z-100">
        <div className="relative bg-white border border-solid my-0 mx-auto" style={{ borderColor: "#f9f9f9" }}>
          <nav className="flex relative box-border" style={{ height: "70px" }}>
            <Link href="/home">
              <div className="flex-1 mt-2.5 my-0 mx-auto">
                <div className="text-center">
                  <img src={`${pathname === "home" ? "/images/home_select.png" : "/images/home.png"}`} className="mx-auto w-6 h-6" />
                </div>
                <div className="text-center">
                  <span className={`text-xs ${pathname === "home" ? "textOrange5" : "textGray4"}`} style={{ letterSpacing: "-0.36px" }}>
                    홈
                  </span>
                </div>
              </div>
            </Link>
            <Link href="/feed">
              <div className="flex-1 mt-2.5 my-0 mx-auto">
                <div className="text-center">
                  <img src={`${pathname === "feed" ? "/images/message-circle-select.png" : "/images/message-circle.png"}`} className="mx-auto w-6 h-6" />
                </div>
                <div className="text-center">
                  <span className={`text-xs ${pathname === "feed" ? "textOrange5" : "textGray4"}`} style={{ letterSpacing: "-0.36px" }}>
                    피드
                  </span>
                </div>
              </div>
            </Link>
            <Link href="/calendar">
              <div className="flex-1 mt-2.5 my-0 mx-auto">
                <div className="text-center">
                  <img src={`${pathname === "calendar" ? "/images/calendar_navi_select.png" : "/images/calendar_navi.png"}`} className="mx-auto w-6 h-6" />
                </div>
                <div className="text-center">
                  <span className={`text-xs ${pathname === "calendar" ? "textOrange5" : "textGray4"}`} style={{ letterSpacing: "-0.36px" }}>
                    캘린더
                  </span>
                </div>
              </div>
            </Link>
            <Link href="/community">
              <div className="flex-1 mt-2.5 my-0 mx-auto">
                <div className="text-center">
                  <img
                    src={`${pathname === "community" ? "/images/community_navi_select.png" : "/images/community_navi_select.png"}`}
                    className="mx-auto w-6 h-6"
                  />
                </div>
                <div className="text-center">
                  <span className={`text-xs ${pathname === "community" ? "textOrange5" : "textGray4"}`} style={{ letterSpacing: "-0.36px" }}>
                    우리동네
                  </span>
                </div>
              </div>
            </Link>
            <Link href="/mypage">
              <div className="flex-1 mt-2.5 my-0 mx-auto">
                <div className="text-center">
                  <img src={`${pathname === "mypage" ? "/images/user_select.png" : "/images/user.png"}`} className="mx-auto w-6 h-6" />
                </div>
                <div className="text-center">
                  <span className={`text-xs ${pathname === "mypage" ? "textOrange5" : "textGray4"}`} style={{ letterSpacing: "-0.36px" }}>
                    내정보
                  </span>
                </div>
              </div>
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Navigation;
