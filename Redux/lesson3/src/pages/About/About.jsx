import React from "react";
import { Navigation, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img1 from "../../assets/img/food-photographer-3Vp63sJWn1U-unsplash.jpg";

const About = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop
        autoplay={{ delay: 1000 }}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src={img1} alt="" style={{ width: "100%", height: "100vh" }} />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default About;
