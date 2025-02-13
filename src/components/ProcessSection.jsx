"use client";
import React from "react";
import Process from "./Process";

const ProcessSection = () => {
  const processData = [
    {
      title: "1. Choosing the Right API",
      text: "We begin with the careful selection of high-quality Active Pharmaceutical Ingredients (APIs) to ensure the foundation of our products is robust and reliable. Every API is chosen based on its efficacy, safety profile, and compliance with international pharmaceutical standards. This ensures that our products meet the highest benchmarks of performance and reliability.",
      img: "/images/api.jpg",
    },
    {
      title: "2. Manufacturing of Therapeutic Products",
      text: "Our manufacturing process is carried out in state-of-the-art facilities, adhering to strict regulatory and industry standards. From formulation to production, every step is meticulously monitored to ensure the creation of safe, effective, and consistent therapeutic products. We strive to deliver solutions that address diverse medical needs worldwide.",
      img: "/images/manufacturing.jpg",
    },
    {
      title: "3. Packaging Standards",
      text: "Packaging plays a crucial role in preserving product integrity and extending shelf life. We implement advanced packaging techniques, ensuring compliance with international regulations while maintaining the safety and usability of the products. Our packaging processes are designed to meet both functional and aesthetic requirements.",
      img: "/images/medicine-package.jpg",
    },
    {
      title: "4. Quality and Safety",
      text: "Quality and safety are at the core of our process. Each product undergoes rigorous testing at multiple stages of production to ensure it meets global quality and safety standards. This comprehensive approach guarantees that every product reaching the market is reliable, effective, and safe for use.",
      img: "/images/lab-test.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-12 px-4 sm:px-8 lg:px-20">
      {processData.map((process, index) => (
        <Process
          key={index}
          title={process.title}
          text={process.text}
          img={process.img}
          // reverse={index % 2 !== 0} // Reverse order for alternating layouts
        />
      ))}
    </div>
  );
};

export default ProcessSection;
