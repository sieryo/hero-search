import {motion} from 'framer-motion'
import Image from 'next/image';

const ImageLoad = () => {
    return (
      <motion.div
        className="w-[350px] bg-gradient-to-b z-10 from-slate-500 via-slate-200 to-transparent p-4"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0, duration: 0.5, ease: "backOut" }}
      >
        <div>
          <Image
            src="/bruno.webp"
            width={350}
            height={400}
            alt="Bruno"
            loading="eager"
            priority
          />
        </div>
      </motion.div>
    );
}
 
export default ImageLoad;