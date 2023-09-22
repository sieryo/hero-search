"use client";

import { useEffect, useState } from "react";
import Card, { CardType } from "./card";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Data = {
  heroes: Array<CardType>;
};
const roles = [
  {
    name: "All",
    role: "",
  },
  {
    name: "Tank",
    role: "tank",
  },
  {
    name: "Fighter",
    role: "fighter",
  },
  {
    name: "Assassin",
    role: "assassin",
  },
  {
    name: "Marksman",
    role: "marksman",
  },
  {
    name: "Mage",
    role: "mage",
  },
  {
    name: "Support",
    role: "support",
  },
];

const SearchHero = ({ heroes }: Data) => {
  const [role, setRole] = useState("");
  const [filteredHeroes, setFilteredHeroes] = useState<CardType[]>(heroes);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible((prev) => !prev);
    if (role === "") {
      setFilteredHeroes(heroes);
    } else {
      setFilteredHeroes(heroes.filter((hero) => hero.role === role));
    }
  }, [role, heroes]);

  return (
    <div className="md:p-10 w-full">
      <div className="flex justify-center w-full border p-2">
        <div className="flex gap-5">
          {roles.map((roleItem) => (
            <button
              onClick={() => setRole(roleItem.role)}
              className={cn(
                "capitalize",
                roleItem.role === role && " text-[#0073cf]"
              )}
              key={roleItem.name}
            >
              {roleItem.name}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.div
              className="md:p-10 p-3 flex gap-6 md:justify-start flex-wrap justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.5 }}
              onAnimationComplete={() => setIsVisible(true)}
            >
              {filteredHeroes.map((hero) => (
                <div key={hero.name}>
                  <Card {...hero} />
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SearchHero;
