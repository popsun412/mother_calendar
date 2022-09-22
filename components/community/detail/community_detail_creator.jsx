/* eslint-disable @next/next/no-img-element */
const moment = require("moment");
import { Swiper, SwiperSlide } from "swiper/react";

export default function CommunityDetailCreator(props) {
  // show model
  const showModel = {
    get profileImage() {
      if (!props.creator.isShare) return "/images/profile_lock.png";

      if (props.creator.profileImage == null) {
        return props.creator.sex == "female" ? "/images/img_profile_mom.png" : "/images/img_profile_dad.png";
      }

      return props.creator.profileImage;
    },
    get babysAge() {
      const _now = new Date();
      const _ages = [];
      (props.creator.babys ?? []).map((_baby) => {
        const _birth = moment(_baby.birth, "YYYY-MM-DD").toDate();
        const _age = _now.getFullYear() - _birth.getFullYear() + 1;
        _ages.push(`${_age}세`);
      });

      if (_ages.length == 0) return "";
      return `${_ages.join(" ")}, `;
    },
    get region() {
      return `${props.creator.region ?? ""}, `;
    },
    get interest() {
      return props.creator.interest == "엄마표 교육" ? "엄마표" : props.creator.interest;
    },
  };

  return (
    <>
      <div className="flex mb-5">
        <img src={showModel.profileImage} alt="" className="w-9 h-9 rounded-full mr-3" />
        <div className="flex-auto">
          <div className="flex justify-between">
            <span className="text-black font-semibold text-base">{props.creator.nickName}</span>
            <div className="textOrange3 text-xs font-medium align-middle border border-color3 rounded-full px-2 py-1">
              {showModel.babysAge}
              {showModel.region}
              {showModel.interest}
            </div>
          </div>
          <div className="textGray3 text-xs font-normal">{props.creator.address}</div>
        </div>
      </div>
      {props.community.communityType == 1 ? (
        <div className="mb-5">
          <span>제공 사항 : </span>
          <span className="text-sm">{props.community.offers.join(", ")}</span>
        </div>
      ) : (
        <></>
      )}

      <div className="textGray1 text-sm font-normal">{props.community.message}</div>

      <section className="relative mt-5">
        <Swiper slidesPerView={1} centeredSlides>
          {(props.community.images ?? []).map((_image, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div
                  className="rounded-full"
                  style={{
                    backgroundImage: `url("${_image}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "100%",
                    paddingTop: "100%",
                    backgroundPosition: "center center",
                  }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}
