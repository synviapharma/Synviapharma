"use client";
import Image from "next/image";
import React from "react";

const GlobalReach = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-[#295960] mb-6 text-center my-4">Global Reach</h2>
        <div className="flex flex-col items-center gap-8">
          <Image
            className="rounded-md w-[75%] h-[3  0rem]"
            src="/images/connections.jpg"
            alt="logoImage"
            width={400}
            height={300}
            priority
            unoptimized
          />
          <p className="text-gray-700 text-lg text-justify leading-relaxed">
            We take immense pride in serving an extensive network of
            international markets, ensuring that our pharmaceutical products
            reach healthcare providers and patients around the globe. From Asia
            to Africa, Europe to the Americas, SYNVIA has established a
            strong presence in key markets, making healthcare solutions more
            accessible to those who need them most. Our WHO GMP-certified
            products are tailored to meet diverse regulatory and cultural
            requirements, reflecting our commitment to adaptability and
            precision. By working closely with trusted distributors, healthcare
            organizations, and government agencies, we ensure seamless delivery
            and unwavering quality, even in the most challenging environments.
            Leveraging a highly efficient supply chain, we maintain rapid and
            reliable logistics, enabling us to deliver life-saving medications
            promptly. Through strategic partnerships with global logistics
            providers and state-of-the-art warehousing facilities, we optimize
            every step of the export process to ensure that hope transcends
            borders. At SYNVIA, our vision extends beyond commerce; we aim
            to create a healthier world by bridging the gap between
            pharmaceutical innovation and those in need. Together with our
            partners, we are transforming lives, one dose of hope at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
