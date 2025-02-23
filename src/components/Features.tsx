import React from 'react';
import Image from 'next/image';
import flawless from '@/Features/Flawless.png';
import compact from '@/Features/Compact.png';
import product_mobile from '@/Features/product mobile.png';

const Features = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center justify-items-center"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 items-center justify-items-center">
            <div className="text-center my-8 md:my-0 md:flex md:justify-end">
            <Image
              src={flawless}
              alt="Flawless"
              className="w-32 sm:w-48 md:w-40 h-auto" 
            />
            </div>
          <div className="flex justify-center">
            <Image
              src={product_mobile}
              alt="Product Image"
              className="w-full md:scale-110 sm:w-64 md:w-80 md:pt-8 md:pb-4 h-auto" 
            />
          </div>
          <div className="text-center my-8 md:my-0 md:flex md:justify-start">
            <Image
              src={compact}
              alt="Compact"
              className="w-32 sm:w-48 md:w-40 h-auto"
            />
          </div>
        </div>
        <p className="text-gray-500 font-light text-center pb-6 md:text-lg">minimal effort. Maximum clean</p>
      </div>
    </section>
  );
};

export default Features;
