"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import ProductsList from "./ProductsList";
import CustomProductForm from "./CustomProductForm";

const ProductTypeAccordion = () => {
  const [openType, setOpenType] = useState("Tablets"); // Set default open type to "Tablets"
  const contentRefs = useRef({}); // Reference to track accordion content elements

  const toggleTypeAccordion = (type) => {
    const isClosing = openType === type;
    setOpenType(isClosing ? null : type);
  };

  useEffect(() => {
    Object.keys(contentRefs.current).forEach((type) => {
      const content = contentRefs.current[type];
      if (content) {
        if (openType === type) {
          gsap.to(content, {
            height: "auto",
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        } else {
          gsap.to(content, {
            height: 0,
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
          });
        }
      }
    });
  }, [openType]);

  const productData = {
    Tablets: [
      {
        id: 1,
        name: "Doloxin Tablet",
        description: "Paracetamol (325mg) + Diclofenac (50mg)",
      },
      {
        id: 2,
        name: "Apira Plus Tablet",
        description: "Aceclofenac (100mg) + Paracetamol (325mg)",
      },
      { id: 3, name: "Apira-500 Tablet", description: "Paracetamol (500mg)" },
      {
        id: 4,
        name: "Clavixin Tablet",
        description: "Amoxicillin (500mg) + Potassium Clavulanate (125mg)",
      },
      {
        id: 5,
        name: "Cefloxim-200 Tablet",
        description: "Cefixime (200mg) + Ofloxacin (200mg)",
      },
      {
        id: 6,
        name: "Azmycin-500 Tablet",
        description: "Azithromycin (500mg)",
      },
      {
        id: 7,
        name: "Apira Plus Tablet",
        description: "Aceclofenac (100mg) + Paracetamol (325mg)",
      },
      {
        id: 8,
        name: "Cefoperin Tablet",
        description: "Cefoperazone (100mg) + Sulbactam (500mg)",
      },
    ],
    Capsules: [
      {
        id: 1,
        name: "Pelodome-40 Capsule",
        description: "Pantoprazole + Domperidone (40mg)",
      },
      {
        id: 2,
        name: "Ompral-D Capsule",
        description: "Omeprazole + Domperidone",
      },
    ],
    Injections: [
      { id: 1, name: "Axtria Injection", description: "Ceftriaxone (1mg)" },
      {
        id: 2,
        name: "Cefoperin Injection",
        description: "Cefoperazone (100mg) + Sulbactam (500mg)",
      },
      { id: 3, name: "Amiko Injection", description: "Amikacin (500mg)" },
    ],
    Syrups: [
      {
        id: 1,
        name: "Vitaloxin Gold Syrup",
        description: "Antioxidant, Multivitamins & Multiminerals",
      },
      {
        id: 2,
        name: "Fevexin Plus Syrup",
        description:
          "Paracetamol (250mg) + Phenylephrine (5mg) + CPM (2mg/5ml)",
      },
    ],
    Nutraceuticals: [
      { id: 1, name: "Nutri-Strength", description: "Nutritional supplement" },
      { id: 2, name: "Nutri-Calm", description: "For stress relief" },
    ],
    Gels: [
      {
        id: 1,
        name: "Flexirax Gel",
        description:
          "Diclofenac, Oleum Lini, Methyl Salicylate, Menthol Gel (30gm)",
      },
    ],
    Customized: [],
  };

  return (

      <div className="m-8">
        <h1 className="text-4xl py-4 font-bold mb-6 text-center text-white">Products</h1>
        <div className="grid grid-cols-1 gap-4">
          {Object.keys(productData).map((type) => (
            <div
              key={type}
              className="border bg-white rounded shadow overflow-hidden"
            >
              {/* Accordion Header */}
              <div
                className={`flex justify-between items-center p-4 cursor-pointer transition-all duration-300 hover:bg-[#50a9b4] ${
                  openType === type
                    ? "bg-[#50a9b4] text-white text-xl"
                    : "bg-gray-100 text-gray-700 text-xl"
                }`}
                onClick={() => toggleTypeAccordion(type)}
              >
                <span className="font-semibold">{type}</span>
                <span className="text-lg">{openType === type ? "-" : "+"}</span>
              </div>
              {/* Accordion Content */}
              <div
                ref={(el) => (contentRefs.current[type] = el)}
                className="p-4 overflow-hidden"
                style={{
                  height: openType === type ? "auto" : 0,
                  opacity: openType === type ? 1 : 0,
                }}
              >
                {type === "Customized" ? (
                  <CustomProductForm />
                ) : (
                  <ProductsList
                    products={productData[type]}
                    productType={type}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default ProductTypeAccordion;
