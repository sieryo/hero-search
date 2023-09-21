"use client";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

type Status = {
  durability: number;
  dayaSerang: number;
  efekCrowdControl: number;
  tingkatKesulitan: number;
};

const Status = (hero: Status) => {
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
  }, [statuses]);

  return (
    <div className="md:p-5 flex flex-col gap-5">
      {statuses.map((status) => (
        <div key={status.status} className=" p-2 flex flex-col items-start">
          <div className="pl-3 capitalize">{status.status}</div>
          <Progress className="" value={status.value} />
        </div>
      ))}
    </div>
  );
};

export default Status;
