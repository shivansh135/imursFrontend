import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './courosal.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Feedback } from '../feedback-cards/card';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><Feedback/></SwiperSlide>
        <SwiperSlide><Feedback/></SwiperSlide>
        <SwiperSlide><Feedback/></SwiperSlide>
        <SwiperSlide><Feedback/></SwiperSlide>
      </Swiper>
    </>
  );
}
