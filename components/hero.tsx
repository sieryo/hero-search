"use client";

import { cn } from "@/lib/utils";
import { myFont } from "@/lib/fonts";
import { Separator } from "@/components/ui/separator";
import { motion, cubicBezier } from "framer-motion";
import ImageLoad from "@/components/image-load";
import Status from "@/components/status";

export type HeroType = {
  name: string;
  description: string;
  durability: number;
  dayaSerang: number;
  efekCrowdControl: number;
  tingkatKesulitan: number;
  image: string;
};

const Hero = (hero: HeroType) => {
  return (
    <div className=" md:p-20 flex gap-6 max-lg:items-center max-lg:flex-col relative">
      <motion.div
        className="w-full absolute top-[120px] left-0 "
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 1, ease: "linear" }}
      >
        <Separator className="bg-black/40" />
      </motion.div>
      <ImageLoad {...hero} />
      <div className="md:p-10 p-3">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: "backIn", type: "spring" }}
        >
          <h1 className={cn("uppercase text-5xl", myFont.className)}>
            {hero.name}
          </h1>
          <motion.p
            className="max-w-[600px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 1.5,
              type: "bounce",
            }}
          >
            {hero.description}
          </motion.p>
        </motion.div>
        <Status {...hero} />
      </div>
    </div>
  );
};

export default Hero;
