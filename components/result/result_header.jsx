/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { ArrowBackIosNewRounded } from "@mui/icons-material";

const ResultHeader = (props) => {
  const [value, setValue] = useState(props.keyword);

  return (
    <header className="sticky top-0 left-0 right-0 visible opacity-100 pb-3.5 bg-white" style={{ marginBottom: "-90px" }}>
      <div className="border-b border-solid my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white .border-gray3" style={{ height: "50px" }}>
        <div className="flex-1 flex items-center relative">
          <ArrowBackIosNewRounded className="relative flex-shrink-0" onClick={() => window.history.back()} style={{ width: 24, color: "#4f4f4f" }} />
          <div className="absolute left-0 right-0 mx-10 text-center text-base font-medium" style={{ letterSpacing: "-0.3px" }}>
            검색결과
          </div>
        </div>
      </div>
      <div className="border-b border-solid border-gray3" style={{ height: "40px" }}>
        <div className="flex mx-auto my-2.5">
          <input
            type="text"
            value={value}
            className="block w-full py-0 px-5 font-light text-base"
            style={{ letterSpacing: "-0.6px" }}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <div className="mr-4">
            <img
              className="w-6 h-6"
              src="/images/ic_search_black.png"
              onClick={() => {
                props.setKeyword(value);
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default ResultHeader;
