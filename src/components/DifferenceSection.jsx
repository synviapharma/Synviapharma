"use client";
import React, { useLayoutEffect, useRef } from "react";
import { BsDashLg } from "react-icons/bs";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import "@/styles/globals.css";
import { timesNewRoman } from "@/utility/fonts-utility";

gsap.registerPlugin(ScrollTrigger);

const DifferenceSection = () => {
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    document.documentElement.style.overflowX = "hidden"; // Prevents horizontal scrolling

    const initAnimation = setTimeout(() => {
      ScrollTrigger.refresh();

      gsap.from(".difference-text", {
        xPercent: 100, // Keeps animation within element width
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".difference-text",
          start: "top 80%",
          end: "bottom top",
        },
      });

      gsap.from(".difference-image", {
        xPercent: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".difference-image",
          start: "top 80%",
          end: "bottom top",
        },
      });

      // Button Hover Animation
      if (buttonRef.current) {
        gsap.to(buttonRef.current, {
          scale: 1.1,
          duration: 0.3,
          ease: "power1.out",
          paused: true,
          overwrite: "auto",
        });

        buttonRef.current.addEventListener("mouseenter", () => {
          gsap.to(buttonRef.current, { scale: 1.1 });
        });

        buttonRef.current.addEventListener("mouseleave", () => {
          gsap.to(buttonRef.current, { scale: 1 });
        });
      }
    }, 100);

    return () => {
      clearTimeout(initAnimation);
      ScrollTrigger.getAll().forEach((st) => st.kill());
      document.documentElement.style.overflowX = "auto"; // Reset on unmount
      if (buttonRef.current) {
        buttonRef.current.removeEventListener("mouseenter", () => {});
        buttonRef.current.removeEventListener("mouseleave", () => {});
      }
    };
  }, []);

  return (
    <div className="overflow-hidden relative bg-cover bg-center" style={{ backgroundImage: "url('/images/difference.jpg')" }}>
      <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-sm pointer-events-none"></div> {/* Non-interfering overlay */}

      <div className="relative flex flex-wrap justify-around items-center gap-8 py-16 px-4">
        {/* Image */}
        <div className="difference-image will-change-transform">
          <div className="relative">
            <Image
              className="map-effect rounded-md md:w-[396px] md:h-[264px] w-[392px] h-[244px]"
              src="/images/heart.jpg"
              alt="Heart Image"
              width={500}
              height={324}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-left mb-10 lg:max-w-[40%] max-w-full difference-text will-change-transform">
          <h2 style={timesNewRoman("700")} className="text-3xl font-semibold text-[#010302d7] leading-relaxed tracking-wider">
            Making a Difference in Global Healthcare.
          </h2>
          <p className="text-[#27312bd7] tracking-wider leading-loose text-justify mt-4 text-lg">
            At <span className="font-bold text-[#010302d7]">SYNVIA</span>, our mission is to change the world by improving lives, supporting healthier communities, and creating a better future for all through continuous care and innovation.
          </p>

          {/* Button */}
          <div className="mt-6">
            <button ref={buttonRef} className="difference-button flex gap-2 tracking-wider items-center transition-transform hover:scale-110">
              <BsDashLg className="text-xl" /> <Link href="/about">About Us</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifferenceSection;
