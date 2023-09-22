"use client";

import { useEffect, useState } from "react";
import Card, { CardType } from "./card";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

  const handleRole = (newRole : string) => {
    setRole(newRole)
  }
  const handleSelectClick = (event : any) => {
    // Prevent click event from propagating to elements underneath
    event.stopPropagation();
  };
  return (
    <div className="md:p-10 w-full">
      <div className="flex justify-center max-md:justify-start w-full border p-2">
        <div className="md:hidden">
        <Select onValueChange={handleRole} value={role}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Role" onClick={handleSelectClick} />
          </SelectTrigger>
          <SelectContent >
            {roles.map((roleItem) => (
            <SelectItem key={roleItem.name}onSelectCapture={() => console.log('adad')} className=" pointer-events-auto" value={roleItem.role}>
              <button
            onClick={() => handleRole(roleItem.role)}
            className={cn(
              "capitalize z-40",
              roleItem.role === role && " text-[#0073cf]"
            )}
            key={roleItem.name}
          >
            {roleItem.name}
          </button></SelectItem>
            ))}
          </SelectContent>
        </Select>
        </div>
        <div className="flex gap-5 max-md:hidden">
          {roles.map((roleItem) => (
            <button
              onClick={() =>console.log(roleItem.role) }
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
              animate={{ opacity: 1, y: 0,  }}
              exit={{ opacity: 0, y: 0, pointerEvents: 'none' }}
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
