"use client";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { RiGlobalLine } from "react-icons/ri";
import { TbChecklist } from "react-icons/tb";
const OurValues = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-[#06643A] mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          <div className="flex flex-col justify-center items-center text-center gap-6 my-8">
            <div>
              <FaCheck size={48} className="text-[#29646c]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                Adhering to WHO GMP standards, we ensure our products are safe,
                effective, and of the highest quality.
              </p>
            </div>
          </div>
          <div className="flex flex-col  justify-center items-center text-center gap-6">
            <div>
              <FaHandshakeSimple size={48} className="text-[#29646c]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Integrity
              </h3>
              <p className="text-gray-600">
                Transparency and honesty are at the core of our business,
                ensuring long-term trust with our partners and customers.
              </p>
            </div>
          </div>
          <div className="flex flex-col  justify-center items-center text-center gap-6">
            <div>
              <RiGlobalLine size={48} className="text-[#29646c]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Global Impact
              </h3>
              <p className="text-gray-600">
                With international exports, we are helping bridge the gap in
                healthcare by supplying essential medicines worldwide.
              </p>
            </div>
          </div>

          <div className="flex flex-col  justify-center items-center text-center gap-6">
            <div>
              <TbChecklist size={48} className="text-[#29646c]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Regularity Compliance
              </h3>
              <p className="text-gray-600">
                We strictly follows global regulatory standards, ensuring our
                products meet all legal and industry requirements for safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
