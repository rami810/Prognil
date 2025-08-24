"use client";
import { useState, useRef } from "react";
import Image from "next/image";

function Loading() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const totalImages = 3;
  const loadedRef = useRef(0);

  const handleImageLoad = () => {
    loadedRef.current++;
    const percent = Math.round((loadedRef.current / totalImages) * 100);
    setProgress(percent);

    if (percent === 100) {
      setTimeout(() => setIsVisible(false), 500);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`loading-screen h-screen fixed z-[10000] top-0 left-0 bg-white w-full flex justify-center items-center transition-opacity duration-700 ${
        progress >= 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-[626px] h-[758px] absolute top-[-293px] left-[-163px] flex justify-end items-end">
        <Image
          alt="left"
          src="/images/all/LOADINGL.svg"
          fill
          className="object-contain"
          onLoad={handleImageLoad}
        />
      </div>

      <div className="w-[626px] h-[758px] absolute top-[295px] left-[977px] flex justify-center items-start">
        <Image
          alt="right"
          src="/images/all/loadingR.svg"
          fill
          className="object-contain"
          onLoad={handleImageLoad}
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-5 z-[10]">
        <div className="w-[109px] h-[132px] relative">
          <Image
            alt="center"
            src="/images/all/LoadingC.png"
            fill
            className="object-contain"
            onLoad={handleImageLoad}
          />
        </div>

        <div className="w-[303px] h-[9px] rounded-full bg-gray-200 overflow-hidden mb-5">
          <div
            className="h-full transition-all duration-200 ease-linear"
            style={{
              width: `${progress}%`,
              background:
                "linear-gradient(270deg, #15CC70 0.03%, #026BD3 99.98%)",
            }}
          ></div>
        </div>

        <p className="font-poppins font-medium text-[20px] w-[735px] text-center">
          Great things take a moment—PROGNIL is preparing to deliver innovative
          solutions tailored just for you. Hang tight, we&apos;re almost there!
        </p>
      </div>
    </div>
  );
}

export default Loading;
