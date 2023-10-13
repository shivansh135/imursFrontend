import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './courosal.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { Feedback } from '../feedback-cards/card';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Feedback/>
        </SwiperSlide>
        <SwiperSlide>
        <Feedback/>
        </SwiperSlide><SwiperSlide>
        <Feedback/>
        </SwiperSlide><SwiperSlide>
        <Feedback/>
        </SwiperSlide><SwiperSlide>
        <Feedback/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
