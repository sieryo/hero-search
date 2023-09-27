"use client";

import { cn } from "@/lib/utils";
import { myFont } from "@/lib/fonts";
import { Separator } from "@/components/ui/separator";
import { motion, cubicBezier } from "framer-motion";
import ImageLoad from "@/components/image-load";
import Status from "@/components/status";
import Link from "next/link";

export type HeroType = {
  name: string;
  description: string;
  durability: number;
  dayaSerang: number;
  efekCrowdControl: number;
  tingkatKesulitan: number;
  image: string;
  role: string;
};

const Hero = (hero: HeroType) => {
  return (
    <div className="  flex gap-6 max-lg:items-center max-lg:flex-col relative">
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
        <Link className="p-10" href="/heroes">
          Heroes List
        </Link>
      </div>
    </div>
  );
};

export default Hero;
