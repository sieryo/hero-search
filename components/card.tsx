import { cn } from "@/lib/utils";
import Image from "next/image";
import { myFont } from "@/lib/fonts";
import Link from "next/link";

export type CardType = {
  image: string;
  name: string;
  role: string;
};

const variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Card = (hero: CardType) => {
  return (
    <Link href={`/heroes/${hero.name}`} target="_top">
      <div
        className={cn(
          "  md:w-[200px] md:h-[300px]  w-[150px] h-[200px] bg-black/20 relative"
        )}
      >
        <Image
          src={hero.image}
          fill
          alt="heroes"
          className=" object-cover object-top"
          sizes="90"
          priority
        />
        <div
          className={cn(
            "absolute bottom-0  h-[30px] text-center w-full text-white text-xl bg-gradient-to-t from-[#00223e] via-[#00223e] to-transparent",
            myFont.className
          )}
        >
          {hero.name}
        </div>
      </div>
    </Link>
  );
};

export default Card;
