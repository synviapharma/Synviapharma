"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HamburgerMenu } from "./HamburgerMenu";

import { usePathname } from "next/navigation";
const navMenuVariant = {
  hidden: {
    opacity: 0,
    y: "-4vw",
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      type: "spring",
      damping: 10,
      stiffness: 80,
      staggerChildren: 0.12,
      delayChildren: 0,
    },
  },
};

const menuLinkVariants = {
  hidden: {
    opacity: 0,
    y: "-4vw",
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close menu and reset body overflow when route changes
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    document.body.style.overflow = !menuOpen ? "hidden" : "auto";
  };

  return (
    <>
      <nav className="">
        <div className="flex flex-row justify-between px-4 py-4">
          {/* Logo */}
          <Link href="/">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
              className="flex flex-col items-center"
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
          </Link>
          {/* Mobile Menu Toggle */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="sm:hidden flex justify-center items-center"
          >
            <HamburgerMenu handleToogle={toggleMenu} menuView={menuOpen} />
          </motion.div>

          {/* Desktop Menu */}
          <div className="sm:flex justify-center items-center hidden">
            <div className="flex justify-between gap-8">
              <motion.ul
                className="flex gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.3 } },
                }}
              >
                <motion.li
                  variants={menuLinkVariants}
                  className="p-2 cursor-pointer"
                >
                  <Link href="/">Home</Link>
                </motion.li>
                <motion.li
                  variants={menuLinkVariants}
                  className="p-2 cursor-pointer"
                >
                  <Link href="/products">Products</Link>
                </motion.li>
                <motion.li
                  variants={menuLinkVariants}
                  className="p-2 cursor-pointer"
                >
                  <Link href="/about">About</Link>
                </motion.li>
              </motion.ul>
              <div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="focus:outline-none tracking-wide text-white bg-[#50a9b4] hover:bg-[#3d8189] font-normal rounded-full text-sm px-5 py-2.5"
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  transition={{
                    opacity: { delay: 1.6, duration: 1.75 },
                    x: {
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      duration: 1.25,
                    },
                  }}
                >
                  <Link href="/contact">Inquire</Link>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            variants={navMenuVariant}
            initial="hidden"
            animate="visible"
            className="sm:hidden h-screen px-4 py-5 flex bg-[#50a9b4] text-white overflow-y-auto"
          >
            <ul className="flex flex-col gap-4 text-4xl">
              <motion.li
                variants={menuLinkVariants}
                className="p-3 cursor-pointer"
              >
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </motion.li>
              <motion.li
                variants={menuLinkVariants}
                className="p-3 cursor-pointer"
              >
                <Link href="/products" onClick={() => setMenuOpen(false)}>
                  Products
                </Link>
              </motion.li>
              <motion.li
                variants={menuLinkVariants}
                className="p-3 cursor-pointer"
              >
                <Link href="/about" onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              </motion.li>
              <motion.li
                variants={menuLinkVariants}
                className="p-3 cursor-pointer"
              >
                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
