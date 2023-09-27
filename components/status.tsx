"use client";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Status = {
  durability: number;
  dayaSerang: number;
  efekCrowdControl: number;
  tingkatKesulitan: number;
};

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

const Status = (hero: Status) => {
  const [init, setInit] = useState<boolean>(false);
  const toggleInit = () => {
    setInit((prevInit) => !prevInit);
  };
  const [statuses, setStatuses] = useState<any[]>([
    {
      status: "durability",
      value: 0,
    },
    {
      status: "daya serang",
      value: 0,
    },
    {
      status: "efek crowd control",
      value: 0,
    },
    {
      status: "tingkat kesulitan",
      value: 0,
    },
  ]);

  useEffect(() => {
    if (init) {
      setTimeout(() => {
        setStatuses([
          {
            status: "durability",
            value: hero.durability,
          },
          {
            status: "daya serang",
            value: hero.dayaSerang,
          },
          {
            status: "efek crowd control",
            value: hero.efekCrowdControl,
          },
          {
            status: "tingkat kesulitan",
            value: hero.tingkatKesulitan,
          },
        ]);
      }, 500);
    }
  }, [hero, init]);
  return (
    <div>
      <motion.div
        className="md:p-5 flex flex-col gap-5"
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        onAnimationComplete={toggleInit}
      >
        {statuses.map((status) => (
          <div key={status.status} className=" p-2 flex flex-col items-start">
            <div className="pl-3 capitalize">{status.status}</div>
            <Progress className="" value={status.value} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Status;
