"use client";

import { myFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import SkillIcon from "./skill-icon";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type heroSkillType = {
  id: number;
  name: string;
  type: string;
  description: string;
  image: string;
};

const HeroSkills = ({ heroSkill }: { heroSkill: heroSkillType[] }) => {
  const [id, setId] = useState(1);
  const [visible, setVisible] = useState<Boolean>(true);
  const [loading, setLoading] = useState<Boolean>(false);

  if (!heroSkill) return null;

  return (
    <>
      <div className="relative">
        <motion.h1
          className={cn(
            "text-[90px] pt-[100px]  w-[500px] origin-left ",
            myFont.className
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          skills
        </motion.h1>
        <div className="relative mt-16 bg-black/10 h-[150px] w-full flex items-center">
          <div className="w-full absolute ">
            <Separator className="bg-black/50" />
          </div>
          <div className="z-10 w-full flex lg:justify-between  justify-center">
            <div className="flex md:gap-8 gap-2 lg:pl-[80px] ">
              {heroSkill.map((skill) => (
                <div className="flex items-center" key={skill.id}>
                  <button
                    className={cn(
                      "w-[70px] border border-black/30 p-1 transition-all delay-100  rounded-sm",
                      skill.id === id && " border-black"
                    )}
                    onClick={() => setId(skill.id)}
                  >
                    <SkillIcon {...skill} />
                  </button>
                </div>
              ))}
            </div>
            <div className="w-[500px]  h-[300px] relative mr-[20px] border border-black lg:block hidden ">
              <div className=" p-5">
                <div className="absolute w-full h-full  bg-slate-700"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:pl-[80px] pl-5 max-w-[600px] ">
          {heroSkill
            .filter((skill) => skill.id === id)
            .map((skill) => (
              <div key={skill.id} className="md:p-7">
                <span className=" text-black/75 uppercase">{skill.type}</span>
                <motion.h2
                  className="text-2xl font-bold origin-bottom uppercase"
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {skill.name}
                </motion.h2>
                <motion.p
                  className=" border-l-2 pl-3 border-black/50"
                  initial={{ translateY: 20, opacity: 0 }}
                  whileInView={{ translateY: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {skill.description}
                </motion.p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default HeroSkills;
