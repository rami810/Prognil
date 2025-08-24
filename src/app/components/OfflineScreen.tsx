import Button from "./button";
import Image from "next/image";
import { oflineImage } from "@/assets";
export default function OfflineScreen() {
  return (
    <div className="flex items-center justify-center h-screen w-full p-10 relative bg-white">
      <div className="absolute bottom-0 right-[15px]   ">
        <div className="relative w-auto h-[350px] ">
          <Image
            alt="offline"
            src={oflineImage}
            width={0}
            height={0}
            sizes="100vh"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="bg-[#F2F4F8] w-full h-full font-poppins ">
        <div className="flex flex-col ps-20 pt-10">
          <h1 className="font-bold text-[50px]">Ooops...</h1>
          <p className="text-[40px] text-[#1A2E35] mb-2">Page not found</p>
          <p className="font-[18px]">
            Sorry, we can&apos;t find the page you&apos;re looking for.
            Let&apos;s help you get back on track!
          </p>
          <Button
            clssName="text-[23px] w-[172px] h-[48px] mt-10"
            title="Go back"
          />
        </div>
      </div>
    </div>
  );
}
