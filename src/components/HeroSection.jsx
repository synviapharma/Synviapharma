"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { timesNewRoman } from "@/utility/fonts-utility";

const HeroSection = () => {
  const videoRef = useRef(null);
  const headingRef = useRef(null);
  const headingTextRef = useRef([]);

  useEffect(() => {
    const video = videoRef.current;
    const heading = headingRef.current;

    gsap.fromTo(
      heading,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out" }
    );

    gsap.fromTo(
      headingTextRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.out",
      }
    );

    const fadeIn = () => {
      gsap.to(video, { opacity: 1, duration: 1 });
    };

    const fadeOut = () => {
      gsap.to(video, {
        opacity: 0.5,
        duration: 1,
        onComplete: () => video.play(),
      });
    };

    if (video) {
      video.addEventListener("ended", () => {
        fadeOut();
      });

      video.addEventListener("play", fadeIn);
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", fadeOut);
        video.removeEventListener("play", fadeIn);
      }
    };
  }, []);

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src="./images/synvia-intro.mp4"
        autoPlay
        muted
        playsInline
        className="w-full h-auto object-cover"
        style={{ opacity: 1 }}
      ></video>

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div
          ref={headingRef}
          className="p-6 md:p-12 rounded-md max-w-full sm:max-w-[90%] md:max-w-[75%] lg:max-w-[50%] "
        >
          <h2
            style={timesNewRoman("700")}
            ref={(el) => (headingTextRef.current[0] = el)}
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center drop-shadow-lg py-1 "
          >
            Connecting the World
          </h2>
          <h2
            style={timesNewRoman("700")}
            ref={(el) => (headingTextRef.current[1] = el)}
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center drop-shadow-lg py-1"
          >
            with a Dose of Hope
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
