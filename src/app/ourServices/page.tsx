"use client";

import { useState, useLayoutEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../components/header";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Service = {
  id: string;
  title: string;
  desc: string;
  cover: string;
};

function OurServices() {
  const searchParams = useSearchParams();
  const activeId = searchParams.get("active");
  const shouldAnimate = searchParams.get("animate") === "true";

  const OurServicesData: Service[] = [
    {
      id: "data-analytics",
      title: "Data analytics",
      desc: "Our software company offers comprehensive data analytics services, transforming data into actionable insights for informed decision-making and business growth.",
      cover: "/images/all/dataAnalytics.png",
    },
    {
      id: "mobile-app",
      title: "Mobile App Development",
      desc: "We offer expert mobile app development, creating intuitive, secure, high-performing apps for iOS and Android.",
      cover: "/images/all/mobile.png",
    },
    {
      id: "web",
      title: "Web Design & Development",
      desc: "We provide high-quality, responsive, and secure web development using the latest technologies.",
      cover: "/images/all/web.png",
    },
    {
      id: "uxui",
      title: "UI/UX consultancy",
      desc: "Prognil offers expert UI/UX consultancy, creating intuitive, user-friendly, and visually appealing designs to enhance user experience.",
      cover: "/images/all/ux.png",
    },
    {
      id: "AI",
      title: "AI tools for business",
      desc: "We provides advanced AI tools for business, automating processes, gaining insights, and enabling data-driven decisions to enhance efficiency and growth.",
      cover: "/images/all/ai.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(() => {
    if (activeId) {
      const index = OurServicesData.findIndex((item) => item.id === activeId);
      return index !== -1 ? index : 2;
    }
    return 2;
  });

  const [screenCenterOffset, setScreenCenterOffset] = useState(0);
  const [allowTransition, setAllowTransition] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useLayoutEffect(() => {
    const cardWidth = 365;
    setScreenCenterOffset((window.innerWidth - cardWidth) / 2);
    setIsReady(true);
  }, []);

  const getTranslateX = () => {
    const cardWidthWithGap = 365 + 28;
    return -(activeIndex * cardWidthWithGap - screenCenterOffset);
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setAllowTransition(true);
      setActiveIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < OurServicesData.length - 1) {
      setAllowTransition(true);
      setActiveIndex((prev) => prev + 1);
    }
  };

  const leftGroup = {
    hidden: { x: -150, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: "easeOut" as const },
    },
  };

  const rightGroup = {
    hidden: { x: 150, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: "easeOut" as const },
    },
  };

  return (
    <div>
      <Header />

      <div className="bg-[#F2F4F8]">
        <motion.h1
          initial={
            shouldAnimate ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }
          }
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[290px] font-poppins font-semibold text-[40px] m-auto pt-10 text-center tracking-[0.15em] "
        >
          OUR SERVICES
        </motion.h1>

        <div className="h-full mt-5 flex flex-col items-center justify-center">
          <div className="relative w-full h-[386px] overflow-hidden">
            {isReady && (
              <motion.div
                className={`flex gap-7 ${
                  allowTransition ? "transition-transform duration-500" : ""
                }`}
                style={{
                  transform: `translateX(${getTranslateX()}px)`,
                }}
              >
                <motion.div
                  variants={leftGroup}
                  initial={shouldAnimate ? "hidden" : "visible"}
                  animate="visible"
                  className="flex gap-7"
                >
                  {OurServicesData.slice(0, 2).map((service, index) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      index={index}
                      activeIndex={activeIndex}
                    />
                  ))}
                </motion.div>

                <div>
                  <ServiceCard
                    service={OurServicesData[2]}
                    index={2}
                    activeIndex={activeIndex}
                  />
                </div>

                <motion.div
                  variants={rightGroup}
                  initial={shouldAnimate ? "hidden" : "visible"}
                  animate="visible"
                  className="flex gap-7"
                >
                  {OurServicesData.slice(3).map((service, index) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      index={index + 3}
                      activeIndex={activeIndex}
                    />
                  ))}
                </motion.div>
              </motion.div>
            )}
          </div>

          <div className="relative w-full mt-10 px-20 flex items-center justify-between">
            {activeIndex > 0 ? (
              <button
                onClick={handlePrev}
                className="w-10 h-10 flex items-center justify-center cursor-pointer"
              >
                <Image
                  src="/images/all/leftArow.svg"
                  alt="Previous"
                  width={50}
                  height={50}
                />
              </button>
            ) : (
              <div className="w-10 h-10"></div>
            )}

            {activeIndex < OurServicesData.length - 1 ? (
              <button
                onClick={handleNext}
                className="w-10 h-10 flex items-center justify-center cursor-pointer"
              >
                <Image
                  src="/images/all/rightArow.svg"
                  alt="Next"
                  width={50}
                  height={50}
                />
              </button>
            ) : (
              <div className="w-10 h-10"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({
  service,
  index,
  activeIndex,
}: {
  service: Service;
  index: number;
  activeIndex: number;
}) {
  return (
    <div
      className={`w-[365px] h-[338px] rounded-lg shadow-lg transition-all duration-300 flex-shrink-0
        ${
          index === activeIndex
            ? "gradient translate-y-12"
            : "bg-white translate-y-0"
        }
        group
      `}
    >
      <div className="w-full h-[174px] overflow-hidden rounded-t-lg">
        <Image
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          alt="service"
          sizes="100vh"
          src={service.cover}
          width={0}
          height={0}
        />
      </div>

      <div className="ps-5 font-inter pe-10 flex flex-col gap-[1px] pt-2 ">
        <h1
          className={`text-[20px] font-semibold ${
            index === activeIndex ? "text-white" : "text-black"
          }`}
        >
          {service.title}
        </h1>
        <p
          className={`text-[13px] ${
            index === activeIndex ? "text-[#FFFFFF80]" : "text-[#00000080]"
          }`}
        >
          {service.desc}
        </p>

        {index === activeIndex && (
          <Link className="self-end" href={`/services/${service.id}`}>
            <button className="mt-3 p-1  cursor-pointer font-semibold bg-transparent text-white border text-[10px] transition">
              Read More
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default OurServices;
