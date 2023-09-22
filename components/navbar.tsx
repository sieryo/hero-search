"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { variants } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const items = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Heroes",
    link: "/heroes",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Profile",
    link: "/profile",
  },
  {
    name: "Settings",
    link: "/settings",
  },
];

const Navbar = () => {
  return (
    <motion.nav
      className="w-full  h-[60px] fixed z-[99] flex justify-center"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ type: "tween", duration: 1, delay: 0.6 }}
    >
      <div className="w-[700px] h-full flex items-center md:pl-10 max-md:px-6 border-b-2 border-slate-200    md:rounded-b-full bg-white/70 backdrop-blur-sm shadow-xl">
        <ul className="flex justify-center w-full md:gap-11 gap-8 max-md:hidden">
          {items.map((item) => (
            <li key={item.link}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-between w-full items-center md:hidden">
          <div>
            <Image alt="logo" src="/logo2.png" width={40} height={40} />
          </div>

          <Sheet>
            <SheetTrigger>
              <Menu className=" cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="top" className=" z-[100] h-screen">
              <SheetHeader className="">
                <Image alt="logo" src="/logo2.png" width={40} height={40} />
              </SheetHeader>
              <ul className="flex justify-center w-full  gap-3 flex-col mt-4 ">
                {items.map((item) => (
                  <li key={item.link} className="">
                    <Link
                      className="bg-slate-200 p-2 hover:text-black text-black/40 block"
                      href={item.link}
                      target="_top"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
