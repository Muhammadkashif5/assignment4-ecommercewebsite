import React from "react";
import Image from "next/image";
import image1 from "@/app/assets/PL1-1.png";
import image2 from "@/app/assets/PL1-2.png";
import image3 from "@/app/assets/PL1-3.png";
import image4 from "@/app/assets/PL1-4.png";
import image5 from "@/app/assets/viewall.png";
import Image1 from "@/app/assets/PL1-5.png";
import Image2 from "@/app/assets/PL1-6.png";
import priceimg1 from "@/app/assets/price-img1.png";
import priceimg2 from "@/app/assets/price-img2.png";

const P_list1 = () => {
  return (
    <div className="font-extrabold text-3xl md:text-5xl flex flex-col items-center mt-12 md:mt-24 px-4">
      <h1 className="mb-6 md:mb-10 text-center">NEW ARRIVALS</h1>

      <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-6 md:gap-10">
        <div className="flex flex-col items-start gap-2">
          <Image src={image1} alt="T-Shirt" />
          <p className="text-[#000000] text-base md:text-xl text-center">
            T-shirt with Tape Details
          </p>
          <Image src={Image1} alt="Star Rating" />
          <h5 className="text-[#000000] text-lg md:text-2xl font-bold tracking-[-0.1em] leading-tight">
            $120
          </h5>
        </div>

        <div className="flex flex-col items-start gap-2">
          <Image src={image2} alt="img-4" />
          <p className="text-[#000000] text-base md:text-xl text-center">
            Skinny Fit Jeans
          </p>
          <Image src={Image2} alt="Star Rating" />
          <Image src={priceimg1} alt="Price Tag" />
        </div>

        <div className="flex flex-col items-start gap-2">
          <Image src={image3} alt="img-6" />
          <p className="text-[#000000] text-base md:text-xl text-center">
            Checkered Shirt
          </p>
          <Image src={Image1} alt="image-3" />
          <h5 className="text-[#000000] text-lg md:text-2xl font-bold leading-[1] tracking-[-0.1em]">
            $180
          </h5>
        </div>

        <div className="flex flex-col items-censtartter gap-2">
          <Image src={image4} alt="img-8" />
          <p className="text-[#000000] text-base md:text-xl text-center">
            Sleeve Striped T-shirt
          </p>
          <Image src={Image1} alt="Star Rating" />
          <Image src={priceimg2} alt="Price Tag" />
        </div>
      </div>

      <div className="md:mt-16 flex items-center justify-center">
        <Image src={image5} alt="view all" />
      </div>
    </div>
  );
};

export default P_list1;