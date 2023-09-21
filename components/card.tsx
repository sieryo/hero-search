"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { myFont } from "@/lib/fonts";
import Link from "next/link";

type Card = {
  image: string;
  name: string;
};

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Card = (hero: Card) => {
  return (
    <Link href={`/?hero=${hero.name}`} target="_top">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="  md:w-[200px] md:h-[300px]  w-[150px] h-[200px] bg-black/20 relative"
      >
        <Image
          src={hero.image}
          fill
          alt="heroes"
          className=" object-cover object-top"
        />
        <div
          className={cn(
            "absolute bottom-0  h-[30px] text-center w-full text-white text-xl bg-gradient-to-t from-[#00223e] via-[#00223e] to-transparent",
            myFont.className
          )}
        >
          {hero.name}
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
