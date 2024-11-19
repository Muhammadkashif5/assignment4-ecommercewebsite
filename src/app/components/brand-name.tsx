import React from 'react';
import Image from 'next/image';
import image1 from '@/app/assets/calvin.png';
import image2 from '@/app/assets/versace.png';
import image3 from '@/app/assets/gucci.png';
import image4 from '@/app/assets/prada.png';
import image5 from '@/app/assets/zara.png';

const BrandName = () => {
  return (
    <div className="bg-[#000000] px-4 py-4 flex flex-wrap gap-4 text-white items-center justify-center md:justify-around">
      <Image src={image2} alt="Versace" width={166} height={33} className="sm:w-[120px] sm:h-[24px]" />
      <Image src={image5} alt="Zara" width={91} height={37} className="sm:w-[80px] sm:h-[30px]" />
      <Image src={image3} alt="Gucci" width={156} height={36} className="sm:w-[110px] sm:h-[26px]" />
      <Image src={image4} alt="Prada" width={194} height={32} className="sm:w-[140px] sm:h-[24px]" />
      <Image src={image1} alt="Calvin Kelin" width={206} height={33} className="sm:w-[150px] sm:h-[25px] sm:mr-0" />
    </div>
  );
};

export default BrandName;