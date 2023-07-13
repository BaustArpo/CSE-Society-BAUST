import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import event1 from '../../images/E1.jpg';
import event2 from '../../images/E2.jpg';
import event3 from '../../images/E3.jpg';
import event4 from '../../images/E4.jpg';
import event5 from '../../images/E5.jpg';
import event6 from '../../images/E6.jpeg';

import event8 from '../../images/E8.jpeg';
import event9 from '../../images/E9.jpeg';

import { EffectCoverflow, Pagination } from "swiper/modules";

const Events = () => {
  return (
  <div className="container p-6">
        <h1 className="font-Kanit text-4xl text-center font-bold mb-6">Events Hosted By CSB</h1>
    <div className="p-6">
    <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={event1} alt="" className=" p-6" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={event2} alt="" className="h-[50%] w-[80%] p-6 rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={event3} className=" h-[50%] w-[80%] p-6 rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={event4} alt="" className="h-[50%] w-[80%] p-6 rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={event5} alt="" className="h-[50%] w-[80%] p-6 rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={event6} alt="" className="h-[50%] w-[80%] p-6 rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={event8} alt="" className="h-[50%] w-[80%] p-6 rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={event9} alt="" className="h-[50%] w-[80%] p-6 rounded-xl" />
          </SwiperSlide>
          
        </Swiper>
    </div>
  </div>
  );
};

export default Events;
