'use client'

import { cn } from "@/lib/utils";
import { myFont } from "@/lib/fonts";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import ImageLoad from "./image-load";

const Hero = () => {
  return (
    <div className=" p-20 flex gap-6 max-lg:items-center max-lg:flex-col relative">
      <motion.div
        className="w-full absolute top-[120px] left-0 "
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
      >
        <Separator className="bg-black/40" />
      </motion.div>
      <ImageLoad />
      <div className="p-10">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: "backIn", type: "spring" }}
        >
          <h1 className={cn("uppercase text-5xl", myFont.className)}>bruno</h1>
          <motion.p
            className="max-w-[600px]"
            initial={{  opacity: 0 }}
            animate={{  opacity: 1, }}
            transition={{ delay: 1.5, duration: 1.5, ease: 'ease', type: 'bounce' }}
          >
            Bruno merupakan Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Ex distinctio, modi minima veritatis cum iusto. Unde, at?
            Tempora fugit magni esse est, delectus aut, cumque praesentium ea,
            officia ex ad?
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
