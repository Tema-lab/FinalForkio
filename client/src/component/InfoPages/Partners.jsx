import partners1 from "./images/partners/partners1.png";
import partners2 from "./images/partners/partners2.jpg";
import partners3 from "./images/partners/partners3.jpg";
import partners4 from "./images/partners/partners4.jpg";
import partners5 from "./images/partners/partners5.png";
import partners6 from "./images/partners/partners6.png";
import partners7 from "./images/partners/partners7.png";
import partners8 from "./images/partners/partners8.png";
import partners9 from "./images/partners/partners9.jpg";
import partners10 from "./images/partners/partners10.png";
import partners11 from "./images/partners/partners11.jpg";
import partners12 from "./images/partners/partners12.jpg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import styles from "./pages.module.scss";
// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

export function Partners() {
  return (
    <Swiper navigation={true} className={styles.swiper}>
      <SwiperSlide>
        <img src={partners1} alt="our partners" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={partners2} alt="our partners" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={partners3} alt="our partners" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={partners4} alt="our partners" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={partners5} alt="our partners" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={partners6} alt="our partners" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={partners7} alt="our partners" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={partners8} alt="our partners" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={partners9} alt="our partners" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={partners10} alt="our partners" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={partners11} alt="our partners" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={partners12} alt="our partners" />
      </SwiperSlide>
    </Swiper>
  );
}
