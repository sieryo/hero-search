import { motion } from "framer-motion";
import Image from "next/image";

type imageUrlHero = {
  name: string;
  image: string;
};

const ImageLoad = (hero: imageUrlHero) => {
  return (
    <div className="z-10 p-4">
      <motion.div
        className="md:w-[350px] w-[280px] bg-gradient-to-b  from-[#00223e] via-slate-200 to-transparent p-4"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: "backOut" }}
      >
        <div>
          <Image
            src={hero.image}
            width={350}
            height={400}
            alt={hero.name}
            priority
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ImageLoad;
