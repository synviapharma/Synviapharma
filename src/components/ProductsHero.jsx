"use client";
import React from "react";

const ProductsHero = () => {
  return (
    <section className="relative bg-cover bg-center h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-sm bg-black bg-opacity-20"></div>

      <div className="relative text-center z-10">
        <h2 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg p-2">
          Your Needs, Our Priority
        </h2>
        <h2 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg p-2">
          Customized pharmaceutical solutions for a global market
        </h2>
      </div>
    </section>
  );
};

export default ProductsHero;
