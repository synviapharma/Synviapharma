"use client";
import React, { useEffect, useRef } from "react";
import { BsDashLg } from "react-icons/bs";
import {
  FaMedal,
  FaGlobe,
  FaCheck,
  FaUsers,
  FaHandshake,
  FaFlask,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { timesNewRoman } from "@/utility/fonts-utility";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: 1,
    icon: <FaMedal size={40} className="text-white" />,
    title: "Providing High-Quality Medications",
    description:
      "We deliver premium-quality medicines that meet international standards, ensuring safety, efficacy, and reliability for patients worldwide.",
  },
  {
    id: 2,
    icon: <FaGlobe size={40} className="text-white" />,
    title: "Expanding Global Reach",
    description:
      "Operating across multiple countries, we are dedicated to delivering high-quality pharmaceuticals globally, advancing health, and fostering well-being.",
  },
  {
    id: 3,
    icon: <FaCheck size={40} className="text-white" />,
    title: "Ensuring Regulatory Compliance",
    description:
      "We strictly adhere to global regulatory standards, ensuring all our products are safe, effective, and compliant with international requirements.",
  },
  {
    id: 4,
    icon: <FaUsers size={40} className="text-white" />,
    title: "Improving Health Outcomes",
    description:
      "Our products are designed to enhance patient care and support healthier communities, contributing to better health outcomes globally.",
  },
  {
    id: 5,
    icon: <FaHandshake size={40} className="text-white" />,
    title: "Fostering Strategic Partnerships",
    description:
      "We build long-term relationships with stakeholders, creating impactful collaborations that support innovation and global health initiatives.",
  },
  {
    id: 6,
    icon: <FaFlask size={40} className="text-white" />,
    title: "Driving Research & Development",
    description:
      "We strictly adhere to global regulatory standards, ensuring all our products are safe, effective, and compliant with international requirements.",
  },
];

const ChooseUsSection = () => {
  const headerRef = useRef(null);
  const subheadingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const initAnimation = setTimeout(() => {
      ScrollTrigger.refresh();
      // Heading Animation
      gsap.from(headerRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          end: "bottom 80%",
        },
      });

      // Subheading Animation
      gsap.from(subheadingRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subheadingRef.current,
          start: "top 85%",
          end: "bottom 80%",
        },
      });

      // Cards Animation
      cardsRef.current.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "bottom 85%",
            },
          }
        );
      });
    }, 100);

    return () => {
      clearTimeout(initAnimation);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50 bg-[url('/images/choose.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex justify-center items-center flex-col gap-8">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex gap-2 text-[#1a4147] font-bold text-3xl"
        >
          <BsDashLg className="text-2xl" />
          <h2 style={timesNewRoman("700")}>Why Choose Us</h2>
          <BsDashLg className="text-2xl" />
        </div>
        {/* Subheading */}
        <p
          ref={subheadingRef}
          className="text-[#265c63] text-xl px-6 text-center mb-8 leading-relaxed"
        >
          We are committed to making a difference in global healthcare by
          providing high-quality pharmaceutical solutions.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto px-6 hover:cursor-pointer">
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => (cardsRef.current[index] = el)} // Store references for each card
              className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-all hover:scale-105"
            >
              <div className="mb-6 p-4 rounded-full bg-[#50a9b4] flex justify-center items-center">
                {card.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#024527] text-xl mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
