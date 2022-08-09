/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import network from "../../util/network";
import { useRouter } from "next/router";

const HomeSlider = () => {
  const router = useRouter();
  const [data, setData] = useState([
    { isGuide: true, image: "/images/banner/serviceinfo.png", url: "/serviceinfo" },
    { isGuide: true, image: "/images/banner/useinfo.png", url: "/useguide" },
  ]);

  useEffect(() => {
    const getData = async () => {
      const res = await network.post("/common/banners");
      res.data ? setData(data.concat(res.data)) : null;
    };
    getData();
  }, []);

  SwiperCore.use([Pagination, Autoplay]);

  return (
    <section className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        centeredSlides
        onSlideChange={() => console.log("change slide")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
      >
        {data.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              {item.isGuide ? (
                <div onClick={() => router.push(item.url)}>
                  <div
                    style={{
                      backgroundImage: `url("${item.image}")`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "100%",
                      paddingTop: "60%",
                      backgroundPosition: "center center",
                    }}
                  />
                </div>
              ) : (
                <div
                  onClick={() => {
                    router.push(`/plandetail?commonPlanUid=${item.commonPlanUid}`);
                  }}
                >
                  <div
                    className="before:bg-black before:bg-opacity-50 before:top-0 before:right-0 before:bottom-0 before:left-0 before:absolute"
                    style={{
                      backgroundImage: `url("${item.image}")`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "100%",
                      paddingTop: "60%",
                      backgroundPosition: "center center",
                    }}
                  />
                  <span className="bottom-14 left-4 block text-center absolute py-2 pr-2.5 text-white text-lg font-bold" style={{ letterSpacing: "-0.48px" }}>
                    {item.name}
                  </span>
                  <div className="flex absolute bottom-8 left-4">
                    <span className="text-xs font-bold text-center textOrange1 py-1 px-2 mr-2 rounded" style={{ backgroundColor: "rgba(219, 239, 253, 0.3)" }}>
                      {item.subject}
                    </span>
                    <span className="text-xs font-bold text-center textOrange1 py-1 px-2 mr-2 rounded" style={{ backgroundColor: "rgba(219, 239, 253, 0.3)" }}>
                      {item.field}
                    </span>
                  </div>
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default HomeSlider;
