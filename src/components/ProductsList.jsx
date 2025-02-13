"use client";
import React, { useState } from "react";

const ProductsList = ({ products, productType }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="m-8">
      {/* <h2 className="text-2xl font-semibold mb-4">{productType}</h2> */}
      <div className="grid grid-cols-1 gap-4 w-full">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="border overflow-hidden self-start bg-white"
          >
            <div
              className={`flex justify-between items-center p-2 cursor-pointer ${
                openIndex === index ? "bg-[#50a8b460] text-teal-700" : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-medium">{product.name}</span>
              <span className="text-lg">{openIndex === index ? "-" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="p-2 bg-white transition-all duration-300">
                <p className="p-1">{product.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
