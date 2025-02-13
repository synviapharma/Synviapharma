"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsDashLg } from "react-icons/bs";
import ProcessSection from "./ProcessSection";
import ProgressBar from "./ProgressBar";
import { timesNewRoman } from "@/utility/fonts-utility";

gsap.registerPlugin(ScrollTrigger);

const OurProcess = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const processRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const initAnimation = setTimeout(() => {
      ScrollTrigger.refresh();

      // Scroll-triggered animation for header
      gsap.from(headerRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          end: "bottom 60%",
          markers: false,
        },
      });

      // Scroll-triggered animation for progress bar
      gsap.from(progressRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: progressRef.current,
          start: "top 80%",
          end: "bottom 60%",
          markers: false,
        },
      });

      // Scroll-triggered animation for the process section
      gsap.fromTo(
        processRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 80%",
            end: "bottom 60%",
            markers: false,
          },
        }
      );
    }, 100);

    return () => {
      clearTimeout(initAnimation);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#50a9b4] pb-16 pt-4">
      <div className="flex justify-center items-center my-4">
        <div className="text-white text-center" ref={headerRef}>
          <div className="text-2xl m-1 p-2 tracking-wide justify-center items-center flex gap-2">
            <BsDashLg className="text-2xl" />
            <h2 style={timesNewRoman("700")} className="text-3xl">
              Our Process
            </h2>
            <BsDashLg className="text-2xl" />
          </div>
          <p className="text-4xl p-2 m-1 font-bold tracking-wide">
            Precision and Care in Every Phase
          </p>
        </div>
      </div>
      <div className="flex justify-around h-full w-full my-6">
        <div
          ref={progressRef}
          className="lg:pl-32 lg:pr-16 pl-8 pr-8 relative z-10 lg:py-4"
        >
          <ProgressBar sectionRef={sectionRef} />
        </div>
        <div ref={processRef} className="flex justify-center items-center mt-8">
          <ProcessSection />
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
