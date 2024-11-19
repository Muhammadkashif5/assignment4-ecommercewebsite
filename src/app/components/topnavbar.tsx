import React from "react";
import Image from "next/image";
import Vector from "@/app/assets/Vector.png";

const Topnavbar = () => {
  return (
    <div className="relative w-full h-[38px] bg-[#000000] flex items-center justify-center">
      <div className="flex items-center">
        <p className="font-normal text-[14px] leading-[18.9px] text-white">
          Sign up and get 20% off to your first order.
        </p>
        <span className="font-medium text-[14px] leading-[18.9px] underline text-white ml-2">
          Sign Up Now
        </span>
      </div>

      <div className="absolute right-24 top-1/2 w-[20px] h-[20px] transform -translate-y-1/2">
        <Image src={Vector} alt="Close-logo" />
      </div>
    </div>
  );
};

export default Topnavbar;