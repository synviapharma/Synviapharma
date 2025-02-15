"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="h-full bg-[#0c3035] py-8">
      <div className="grid grid-cols-12 gap-8 mx-6 lg:mx-16">
        {/* Logo and "Dose of Hope" */}
        <div className="col-span-12 lg:col-span-2 flex lg:flex-col justify-around lg:justify-start items-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="flex flex-col items-center  justify-center"
          >
            <div className="flex justify-center items-center">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={210}
                height={60}
                className="w-auto h-12 sm:h-16 md:h-20 lg:h-24"
              />
            </div>
          </motion.div>
          <div className="flex gap-3 text-white my-4 justify-center lg:justify-start items-center text-center">
            <FaFacebook className="text-xl" />
            <FaLinkedin className="text-xl" />
            <BiLogoGmail className="text-xl" />
            <FaXTwitter className="text-xl" />
          </div>
        </div>

        {/* Pharmaceutical Needs */}
        <div className="col-span-12 lg:col-span-6 order-4 lg:order-4 text-center lg:text-left ">
          <div className="lg:max-w-full text-white flex flex-col gap-6 md:items-left items-center">
            <h2 className="text-[28px] md:text-[32px] font-bold tracking-[0.04]">
              Have specific pharmaceutical needs?
            </h2>
            <p className="text-white font-light text-justify md:text-left text-[14px] md:text-[16px] tracking-wide max-w-[80%] md:max-w-[60%] lg:max-w-[80%] leading-7">
              Whether it’s manufacturing, packaging, or ensuring compliance with
              country-specific regulations, we’ve got you covered. Reach out to
              us today for reliable and customized solutions that meet global
              healthcare standards.
            </p>
            <div>
              <button className="bg-white text-[#08261d] px-8 py-2 rounded-full">
                <Link href="/contact">Contact</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="col-span-6 lg:col-span-2 order-3 lg:order-2">
          <div className="text-white flex flex-col gap-8 items-start">
            <p className="underline underline-offset-[12px] md:text-justify text-center text-[16px] md:text-[20px]">
              Contact
            </p>
            <ul className="flex flex-col justify-center items-start lg:items-start gap-4 tracking-wide">
              <li className="text-sm">+91 70697 95648</li>
              <li className="text-sm">contact@synviapharma.com</li>
            </ul>
          </div>
        </div>

        {/* Links Section */}
        <div className="col-span-6 lg:col-span-2 order-2 lg:order-3">
          <div className="text-white flex flex-col gap-8  text-center">
            <p className="underline underline-offset-[12px] text-[16px] md:text-[20px]">
              Links
            </p>
            <ul className="flex flex-col justify-center items-center gap-4 tracking-wide">
              <li className="text-sm">
                <Link href="/">Home</Link>
              </li>
              <li className="text-sm">
                <Link href="/about">About</Link>
              </li>
              <li className="text-sm">
                <Link href="/products">Products</Link>
              </li>
              <li className="text-sm">
                <Link href="/contact">Inquire</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
