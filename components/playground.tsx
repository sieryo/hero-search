"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const Playground = () => {
  const constraintRef = useRef(null);

  return (
    <motion.div ref={constraintRef} className="w-[100%] h-screen border">
      <motion.div
        className="w-[100px] h-[80px] bg-black"
        drag
        dragConstraints={constraintRef}
      ></motion.div>
      <motion.div
        className="w-[100px] h-[80px] bg-black"
        drag
        dragConstraints={constraintRef}
      ></motion.div>
    </motion.div>
  );
};

export default Playground;
