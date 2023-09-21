"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import Card from "./card";
import { useEffect, useState } from "react";

const SearchHero = () => {
  return (
    <div className="md:p-10 w-full ">
      <div className=" flex justify-center w-full ">
        <Input
          placeholder="Search Heroes"
          className="max-w-[924px] h-fit border-0 text-[1.2rem] bg-[#0073cf] py-5 pl-20 pr-8 text-white/90 !ring-0 !ring-offset-0 placeholder:text-white/45"
        />
      </div>
    </div>
  );
};

export default SearchHero;
