"use client";

import Link from "next/link";

import { loadingState } from "@/global-state";

const BelajarNavbar = () => {
  const { isLoading } = loadingState();

  return (
    <div className="w-full h-[80px] bg-slate-500 p-2 items-center flex justify-between">
      <ul className="flex gap-3 w-full text-xl">
        <li>
          <Link href="/belajar/home">Home</Link>
        </li>
        <li>
          <Link href="/belajar/upload">Upload</Link>
        </li>
      </ul>
      {isLoading && <div>Uploading....</div>}
    </div>
  );
};

export default BelajarNavbar;
