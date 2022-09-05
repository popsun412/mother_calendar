import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

export default function CommonItemSlider(props) {
  return (
    <section className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        centeredSlides
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: false }}
      >
        {props.images.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div>
                <div
                  style={{
                    backgroundImage: `url("${item}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "100%",
                    paddingTop: "100%",
                    backgroundPosition: "center center",
                  }}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
