"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/styles/globals.css";

gsap.registerPlugin(ScrollTrigger);

const RCCertification = () => {
  useEffect(() => {
    const initAnimation = setTimeout(() => {
      ScrollTrigger.refresh();
      // Animate the text
      gsap.from(".certification-text3", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".certification-text",
          start: "top 80%",
          end: "bottom top",
        },
      });

      // Animate the image
      gsap.from(".certification-image3", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".certification-image",
          start: "top 80%",
          end: "bottom top",
        },
      });
    }, 100);
    return () => {
      clearTimeout(initAnimation);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="flex flex-wrap justify-around items-center gap-2 p-4 my-20 lg:my-32">
      <div>
        <div className="relative certification-image3">
          <Image
            className="map-effect rounded-md md:w-[296px] md:h-[244px] w-[292px] h-[244px]"
            src="/images/rc.png"
            alt="map Image"
            width={500}
            height={324}
          />
        </div>
      </div>
      <div className="text-left mb-10 lg:max-w-[40%] max-w-full certification-text3">
        <h2 className="text-3xl font-semibold text-[#02451E] leading-relaxed tracking-wider">
          Regulatory Compliance - Following Industry and Government Standards
        </h2>
        <p className="text-[#27312bd7] tracking-wider leading-loose text-justify mt-4 text-lg">
          Regulatory compliance is at the core of our operations. We strictly
          follow local and international pharmaceutical regulations to ensure
          that our products meet the highest standards of safety, efficacy, and
          legal requirements.
        </p>
      </div>
    </div>
  );
};

export default RCCertification;
