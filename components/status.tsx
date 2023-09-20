"use client"
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {useEffect,useState} from 'react'




const Status = () => {
    const [statuses,setStatuses] = useState<any[]>([
    {
        status: 'durability',
        value: 0
    },
    {
        status: 'daya serang',
        value: 0
    },
    {
        status: 'efek crowd control',
        value: 0
    },
    {
        status: 'tingkat kesulitan',
        value: 0
    },
])
    useEffect(() => {
        setTimeout(() => {
           setStatuses([
             {
               status: "durability",
               value: 73,
             },
             {
               status: "daya serang",
               value: 53,
             },
             {
               status: "efek crowd control",
               value: 44,
             },
             {
               status: "tingkat kesulitan",
               value: 80,
             },
           ]);
        },500)
    }, [statuses])

    return (
      <div className="p-5 flex flex-col gap-5">
        {statuses.map((status) => (
          <div key={status.status} className=" p-2 flex flex-col items-start">
            <div className="pl-3 capitalize">{status.status}</div>
            <Progress className="" value={status.value} />
          </div>
        ))}
      </div>
    );
}
 
export default Status;