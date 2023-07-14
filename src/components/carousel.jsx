import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import pictures from "@/config/carousel.json";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';



export default function BannerCarousel() {
  return (
      <Swiper
        spaceBetween={30}
        loop={true}
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="rounded-2xl"
      >
        {
        pictures.images.map((img) => (
          <SwiperSlide>
            <img src={img} alt={img} />
          </SwiperSlide>
        ))
        }
      </Swiper>
  );
}