"use client";
import React from "react";
import Image from "next/image";

const ProcessCircle = ({ index }, ref) => {
    return (
        <div
          ref={ref}
          className="absolute w-10 h-10 md:w-12 md:h-12 bg-[#3FBE97] rounded-full 
                     transform -translate-x-1/2 transition-all duration-300 
                     flex items-center justify-center overflow-hidden"
          style={{ left: "50%" }}
        >
          <Image
            src={`/images/circle${index + 1}.png`}
            alt={`Process Step ${index + 1}`}
            width={70}
            height={70}
            className="w-full h-full object-contain"
          />
        </div>
      );
}

export default ProcessCircle