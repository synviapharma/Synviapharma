"use client";
import React from "react";

const ContactHero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[400px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/pharma-contact.jpg')", // Replace with your image path
      }}
    >
      {/* Blur effect */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black bg-opacity-20"></div>

      {/* Centered Content */}
      <div className="relative text-center z-10">
        <h2 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
          CONTACT US
        </h2>
      </div>
    </section>
  );
};

export default ContactHero;
