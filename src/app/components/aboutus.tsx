"use client";

import Button from "./button";
import Image from "next/image";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

type AboutusProps = {
  animate?: boolean;
  mode?: "scrol" | "link";
  onFaqClick?: () => void;
};

function Aboutus({
  animate = false,
  mode = "scrol",
  onFaqClick,
}: AboutusProps) {
  const Container = animate ? motion.div : "div";

  return (
    <div>
      <div className="grid grid-cols-12 pt-[100px] px-[78px]">
        <Container
          className="col-span-6 h-full"
          {...(animate
            ? {
                initial: { x: -100, y: -50, opacity: 0 },
                whileInView: { x: 0, y: 0, opacity: 1 },
                transition: { duration: 0.8, ease: "easeOut" },
                viewport: { once: true },
              }
            : {})}
        >
          <h1 className="font-inter font-semibold text-[27px] text-[#4E94D0] mb-8">
            About Us
          </h1>
          <p className="font-poppins font-light max-w-[610px] text-[clamp(16px,2vw,23px)] text-[#000000B2]">
            Welcome every one. We are PROGNIL. We specialize in developing
            cutting-edge websites and applications using advanced technologies
            like AI. Our focus is on delivering high-quality digital products
            with the latest designs and technical advancements. By leveraging
            innovative solutions, we ensure rapid development and deployment,
            allowing our clients to obtain top-tier digital solutions in record
            time. Join us on the forefront of digital innovation and experience
            the power of technology to transform your business.
          </p>

          {mode === "scrol" ? (
            <Button
              title="F A Q"
              clssName="p-[16px]  w-[123px] h-[59px] text-[23px] font-poppins  mb-15 mt-10"
              onClick={onFaqClick}
            />
          ) : (
            <Link href="/FAQ">
              <Button
                title="F A Q"
                clssName="p-[16px]  w-[123px] h-[59px] text-[23px] font-poppins  mb-15 mt-10"
              />
            </Link>
          )}
        </Container>

        <Container
          className="col-span-6 relative h-full"
          {...(animate
            ? {
                initial: { x: 100, y: 50, opacity: 0 },
                whileInView: { x: 0, y: 0, opacity: 1 },
                transition: { duration: 0.8, ease: "easeOut" },
                viewport: { once: true },
              }
            : {})}
        >
          <div className="w-full h-full flex justify-center items-center">
            <Image
              className="w-full h-fit m-auto"
              alt="aboutUs"
              width={0}
              height={0}
              src="/images/all/aboutUs.gif"
            />
          </div>
        </Container>
      </div>

      <div className="max-w-[1080px] h-[100px] flex justify-start items-center blue1  bg-[#DEE5F3] rounded-tr-[100px] relative">
        <PhoneCall
          size={50}
          strokeWidth={2}
          className="absolute top-[-15] right-10"
        />
        <p className="font-poppins text-[23px] ms-[60px] ">
          We are here to help you get your best digital solution
        </p>
      </div>
    </div>
  );
}
export default Aboutus;
