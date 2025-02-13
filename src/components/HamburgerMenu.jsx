"use client";
import { MotionConfig } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";

export const HamburgerMenu = ({ handleToogle, menuView }) => {
  return (
    <div onClick={handleToogle} className="">
      <AnimatedHamburgerButton menuView={menuView} />
    </div>
  );
};
const AnimatedHamburgerButton = ({ menuView }) => {

  const [active, setActive] = useState(false);
  return (
    <MotionConfig
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={menuView ? "open" : "closed"}
        // onClick={() => setActive((pv) => !pv)}
        className="relative h-11 w-14 rounded-full bg-white/0 transition-colors hover:bg-white/10"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-[0.1rem] w-6 bg-[#1b1b1bc6]"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "20%" }} // Decrease the top value
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-[0.1rem] w-6 bg-[#1b1b1bc6]"
          style={{ left: "50%", x: "-40%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-[0.1rem] w-6 bg-[#1b1b1bc6]"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "60%" }} // Decrease the top value
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: [0, 45],
      top: ["35%", "50%"],
    },
    closed: {
      rotate: [45, 0],
      top: ["50%", "35%"],
    },
  },
  middle: {
    open: {
      opacity: 0,
    },
    closed: {
      opacity: 1,
    },
  },
  bottom: {
    open: {
      rotate: [0, -45],
      top: ["65%", "50%"],
    },
    closed: {
      rotate: [-45, 0],
      top: ["50%", "65%"],
    },
  },
};
