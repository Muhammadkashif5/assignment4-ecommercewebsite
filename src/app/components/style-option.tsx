import React from "react";
import Image from "next/image";
import img9 from "@/app/assets/SO-casual.png";
import img10 from "@/app/assets/SO-formal.png";
import img12 from "@/app/assets/SO-party.png";
import img11 from "@/app/assets/SO-gym.png";

const StyleOptions = () => {
  return (
    <div className="justify-center items-center ml-48">
      <div className="ml-5 sm:ml-0 px-6 sm:px-4 w-full max-w-screen-xl h-auto bg-[#F0F0F0] rounded-xl mt-16">
        <h1 className="font-bold text-3xl sm:text-4xl text-center p-6 sm:p-12">
          BROWSE BY DRESS STYLE
        </h1>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="flex justify-center">
            <Image src={img9} alt="img-9" width={407} height={289} />
          </div>

          <div className="flex justify-center">
            <Image src={img10} alt="img-10" width={689} height={289} />
          </div>

          <div className="flex justify-center">
            <Image src={img12} alt="img-12" width={689} height={289} />
          </div>

          <div className="flex justify-center">
            <Image src={img11} alt="img-11" width={407} height={289} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleOptions;