/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { getCookie, setCookies } from "cookies-next";
import { Check } from "@mui/icons-material";

export default function CommunityTop(props) {
  const [open, setOpen] = useState(false);

  const _regions = [
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "도봉구",
    "동대문구",
    "동작구",
    "마포구",
    "서대문구",
    "서초구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "중구",
    "중랑구",
  ];

  useEffect(() => {
    let _myRegion = getCookie("myRegion");

    if (!_myRegion) {
      _regions.map((_region) => {
        if (props.userInfo.address.search(_region) >= 0) {
          _myRegion = _region;
        }
      });
    }

    setCookies("myRegion", _myRegion, { maxAge: 60 * 60 * 24 * 1000 });
    props.setMyRegion(_myRegion ?? "용산구");
  }, []);

  return (
    <>
      <div className="flex align-middle items-center mb-4 hover:cursor-pointer" onClick={() => setOpen(true)}>
        <img src="/images/vector.png" className="w-3.5 h-5" />
        <div className="textGray1 text-xl font-semibold	pl-2">서울시 {props.myRegion}</div>
      </div>
      {open ? (
        <div
          className="bg-black/60 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center"
          style={{ zIndex: 110 }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            setOpen(false);
          }}
        >
          <div className="bg-white p-5 rounded-md flex flex-col max-h-80 my-5 overflow-auto scrollbar-hide py-2 space-y-3">
            {_regions.map((_region, index) => {
              return (
                <div
                  key={index}
                  className="flex"
                  onClick={() => {
                    setCookies("myRegion", _region, { maxAge: 60 * 60 * 24 * 1000 });
                    props.setMyRegion(_region);
                  }}
                >
                  <span>{_region}</span>
                  {_region == props.myRegion ? <Check /> : <></>}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
