"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPills, FaIndustry, FaBox, FaCheckCircle } from "react-icons/fa"; // Import relevant icons
import { GiMedicines } from "react-icons/gi"; // Additional relevant icons

gsap.registerPlugin(ScrollTrigger);

const ProgressBar = ({ sectionRef }) => {
  const progressRef = useRef(null);
  const circleRefs = useRef([]);

  // Define icons corresponding to each process step
  const icons = [FaPills, FaIndustry, FaBox, FaCheckCircle]; 

  useEffect(() => {
    if (sectionRef.current) {
      gsap.to(progressRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 0.9,
          markers: false,
        },
        height: "100%",
        ease: "none",
      });

      circleRefs.current.forEach((circle, index) => {
        const position = index * 25; 
        gsap.to(circle, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `${position}% center`,
            end: `${position}% center`,
            scrub: true,
            markers: false,
          },
          backgroundColor: "#FFFFFF",
        });
      });
    }
  }, [sectionRef]);

  return (
    <div className="relative w-2 bg-[#77c9d4] h-full">
      <div
        ref={progressRef}
        className="absolute top-0 left-0 w-full bg-[#E5FFF3] h-0"
      ></div>

      {icons.map((Icon, index) => (
        <div
          key={index}
          ref={(el) => (circleRefs.current[index] = el)}
          className="flex justify-center items-center absolute w-10 h-10 md:w-12 md:h-12 bg-[#77c9d4] rounded-full transform -translate-x-1/2 transition-all duration-300 text-white"
          style={{ top: `${index * 25}%`, left: "50%" }}
        >
          <Icon className="lg:w-6 lg:h-6 h-4 w-4 text-[#50a9b4]" /> {/* Render the icon dynamically */}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
