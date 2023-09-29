"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const duration = 3;

const variants = {
  initial: {
    scaleY: 1,
  },
  animate: {
    scaleY: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, duration * 1000 - 400);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className=" w-screen z-[100] h-screen flex justify-center items-center origin-top bg-black absolute top-0"
          variants={variants}
          initial="initial"
          exit="exit"
          key="preloader"
          transition={{ duration: 1 }}
        >
          <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
            <div className="absolute rounded-full w-[600px] h-[600px] border border-blue-500"></div>
            <CountUp
              className=" text-white text-[100px] italic"
              end={100}
              duration={duration}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
