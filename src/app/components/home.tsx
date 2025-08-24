"use client";

import Header from "./header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import Button from "./button";
import Link from "next/link";

const images = [
  "/images/all/homepage-1.jpg",
  "/images/all/homepage-2.jpg",
  "/images/all/homepage-3.jpg",
  "/images/all/homepage-4.jpg",
];

function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="flex-1 relative">
        <div className="absolute w-full h-full z-10 inset-0 overlay-gradient">
          <div className=" text-white flex flex-col justify-center items-center gap-15 h-full">
            <h1 className="lg:text-[54px] md:text-[40px] px-5 text-center font-poppins font-bold ">
              The right place to expand your business
            </h1>
            <p className="text-[#FFFFFFB2] font-poppin">
              we provide you with Innovative Software Solutions
            </p>

            <span className="flex fle-col gap-4">
              <Link href="/about">
                <Button
                  clssName=" w-[160px] h-[56px] hover:border-3  hover:![background-image:none] hover:!bg-transparent   transition duration-1000"
                  title="About Us"
                />
              </Link>

              <Link href="/contactUs">
                <button className="w-[160px] h-[56px] cursor-pointer py-4 border-3 bg-transparent hover:[background:linear-gradient(180deg,#15CC70_-34.62%,#026BD3_100%)] hover:border-0 hover:py-[18.5px]">
                  {" "}
                  Contsct Us{" "}
                </button>
              </Link>
            </span>
          </div>
        </div>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 1500 }}
          speed={1000}
          className="w-full h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Slide ${index}`}
                  fill
                  className="object-cover transition-opacity duration-1000"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
