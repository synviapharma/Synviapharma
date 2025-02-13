"use client";

import React, { useEffect } from "react";
import { BsDashLg } from "react-icons/bs";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/styles/globals.css";

gsap.registerPlugin(ScrollTrigger);

const ExploreSection = () => {
  useEffect(() => {
    const initAnimation = setTimeout(() => {
      ScrollTrigger.refresh();

      // Parallax Background Effect
      gsap.to(".parallax-bg", {
        backgroundPosition: "50% 20%", // Adjust for parallax effect
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-bg",
          start: "top bottom",
          end: "bottom top",
          scrub: 2, // Smooth scrolling effect
        },
      });

      // Text Animation
      gsap.from(".explore-text", {
        x: -200,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".explore-text",
          start: "top 85%",
          end: "bottom top",
          markers: false,
        },
      });

      gsap.from(".explore-image", {
        x: 200,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".explore-image",
          start: "top 85%",
          end: "bottom top",
          markers: false,
        },
      });
    }, 100);

    return () => {
      clearTimeout(initAnimation);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
  <div
        className="parallax-bg absolute top-0 left-0 w-full h-full bg-cover bg-fixed bg-center"
        style={{ backgroundImage: "url('/images/multivitamin.jpg')" }}
      ></div>

      {/* White Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-80"></div>
      <div className="relative flex flex-wrap justify-around items-center gap-2 p-4 my-20 lg:my-32">
        <div className="text-left mb-10 lg:max-w-[40%] max-w-full explore-text">
          <h2 className="text-3xl font-semibold text-[#02451E] leading-relaxed tracking-wider">
            We Provide Therapeutic Solutions in Over 10+ Countries.
          </h2>
          <p className="text-[#27312bd7] tracking-wider leading-loose text-justify mt-4 text-lg">
            We deliver high-quality pharmaceutical products to over 10 countries, ensuring access to reliable and effective healthcare solutions worldwide.
          </p>
        </div>

        <div>
          <div className="relative explore-image ">
            <Image
              className="map-effect rounded-md md:w-[496px] md:h-[244px] w-[392px] h-[244px] "
              src="/images/map.png"
              alt="map Image"
              width={500}
              height={324}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
