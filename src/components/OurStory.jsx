"use client";
import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-[#06643A] mb-6">Our Story</h2>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              At <span className="font-bold">SYNVIA</span>, we believe in
              bringing hope through high-quality pharmaceutical products.
              Founded with the mission to improve global health, our company has
              grown to be a trusted name in the pharmaceutical export industry.
              With our WHO GMP certification, we are committed to maintaining
              the highest standards in manufacturing and quality assurance.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We pride ourselves on delivering products that meet the specific
              needs of healthcare professionals and patients worldwide.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 m-4">
            <Image
              className="rounded-md w-[364px] h-[144px] sm:w-[544px] sm:h-[186px] "
              src='/images/logo.png'
              alt="logoImage"
              width={400}
              height={300}
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
