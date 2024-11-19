import React from "react";
import Image from "next/image";
import image1 from "@/app/assets/PL2-1.png";
import image2 from "@/app/assets/PL2-2.png";
import image3 from "@/app/assets/PL2-3.png";
import image4 from "@/app/assets/PL2-4.png";
import image5 from "@/app/assets/viewall.png";
import img1 from "@/app/assets/1.png";
import img2 from "@/app/assets/2.png";
import img3 from "@/app/assets/3.png";
import img4 from "@/app/assets/4.png";
import cardimg2 from "@/app/assets/price-img2.png";

const P_List2 = () => {
  return (
    <div className="font-extrabold text-3xl sm:text-5xl flex flex-col items-center mt-12 sm:mt-24">
      <h1 className="mb-6 sm:mb-10">TOP SELLING</h1>

      <div className="flex flex-wrap justify-center gap-8 sm:gap-10">
        <div className="flex flex-col items-start gap-2 w-[150px] sm:w-auto">
          <Image src={image1} alt="img-1" />
          <p className="text-[#000000] text-sm sm:text-xl text-center">
            Vertical Striped Shirt
          </p>
          <Image src={img1} alt="img1" />
          <Image src={cardimg2} alt="card-img2" />
        </div>

        <div className="flex flex-col items-start gap-2 w-[150px] sm:w-auto">
          <Image src={image2} alt="image-3" />
          <p className="text-[#000000] text-sm sm:text-xl text-center">
            Courage Graphic T-shirt
          </p>
          <Image src={img2} alt="img2" />
          <h5 className="text-[#000000] text-lg sm:text-2xl font-bold">$145</h5>
        </div>

        <div className="flex flex-col items-start gap-2 w-[150px] sm:w-auto">
          <Image src={image3} alt="img-5" />
          <p className="text-[#000000] text-sm sm:text-xl text-center">
            Loose Fit Bermuda Shorts
          </p>
          <Image src={img3} alt="img3" />
          <h5 className="text-[#000000] text-lg sm:text-2xl font-bold">$80</h5>
        </div>

        <div className="flex flex-col items-start gap-2 w-[150px] sm:w-auto">
          <Image src={image4} alt="img-7" />
          <p className="text-[#000000] text-sm sm:text-xl text-center">
            Faded Skinny Jeans
          </p>
          <Image src={img4} alt="img4" />
          <h5 className="text-[#000000] text-lg sm:text-2xl font-bold">$210</h5>
        </div>
      </div>

      <div className="mt-12 sm:mt-16 flex justify-center">
        <Image src={image5} alt="view all" />
      </div>
    </div>
  );
};

export default P_List2;