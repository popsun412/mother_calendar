/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ArrowBackIosNewRounded } from "@mui/icons-material";

const CategoryHeader = (props) => {
  const { type } = props;

  return (
    <header className="sticky top-0 left-0 right-0 visible opacity-100 bg-white z-100" style={{ marginBottom: "-50px" }}>
      <div className="my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white" style={{ height: "50px" }}>
        <div className="flex-1 flex items-center relative">
          <ArrowBackIosNewRounded onClick={() => window.history.back()} style={{ width: 24, color: "#333" }} />
          <div className="absolute left-0 right-0 mx-20 text-center text-base font-medium" style={{ letterSpacing: "-0.3px" }}>
            {type}
          </div>
        </div>
      </div>
    </header>
  );
};

export default CategoryHeader;
