import ProductsHero from "@/components/ProductsHero";
import ProductTypeAccordion from "@/components/ProductTypeAccordian";
import React from "react";

const page = () => {
  return (
    <>
      <div
        className="bg-cover bg-center min-h-screen py-8"
        style={{ backgroundImage: "url('/images/loader.jpg')" }}
      >
        <ProductsHero />
        <ProductTypeAccordion />
      </div>
    </>
  );
};

export default page;
