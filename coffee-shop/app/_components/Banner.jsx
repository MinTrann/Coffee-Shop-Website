"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <>
      <div className="container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="container">
              {/* *************** */}
              <div className="grid grid-cols-2">
                {/* ************ */}
                <div className="">
                  {/* ************ */}
                  <h1>
                    Alowishus Delicious Coffee
                    <Image
                      alt="Logo coffee" 
                      src="/coffee/cafe.png"
                      className=""
                      width={80}
                      height={80}
                    />
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat sed velit neque, quisquam minima dolorem ratione dolores sint suscipit reiciendis, facere et eveniet labore blanditiis explicabo expedita fuga dolorum dolor!
                  </p>
                  {/* * **************/}
                  <div className="flex gap-4 py-4">
                    <Button className="p-3 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">Download App</Button>
                    <Button className="" variant="outline">Shop Caffee</Button>
                  </div>
                  {/* ************** */}
                </div>
                <div className="">hello</div>
              </div>
              {/* ************** */}
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
};
export default Banner;
