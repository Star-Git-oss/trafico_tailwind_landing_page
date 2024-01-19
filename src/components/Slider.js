import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Slider = ({ clients }) => {
  return (
    <Swiper
      breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
        1120: {
          width: 1120,
          slidesPerView: 3,
        },
      }}
      // slidesPerView={3}
      spaceBetween={20}
      slidesOffsetBefore={60}
      grabCursor={true}
      className="testimonialSlider"
    >
      {clients.map((client, index) => {
        const { message, name } = client;
        return (
          <SwiperSlide key={index}>
            <div className="bg-white h-[360px] drop-shadow-primary rounded-[10px] px-[50px] pt-[60px] lg:pb-[40px] pb-[80px] flex flex-col justify-between">
              <p className="font-light leading-[30px]">{message}</p>
              <div className="flex items-center gap-x-5">
                <span className="font-semibold">{name}</span>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
