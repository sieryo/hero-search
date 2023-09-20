"use client"

import Link from "next/link";
import {motion} from 'framer-motion'
import { variants } from "@/lib/utils";

const items = [
    {
        name: 'Home',
        link: '#home'
    },
    {
        name: 'Heroes',
        link: '#heroes'
    },
    {
        name: 'Projects',
        link: '#projects'
    },
    {
        name: 'Profile',
        link: '#profile'
    },
    {
        name: 'Settings',
        link: '#settings'
    },
]

const Navbar = () => {
    return (
      <motion.nav
        className="w-full  h-[60px] fixed z-[99] flex justify-center"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ type: 'tween', duration: 1, delay: 0.6 }}
      >
        <div className="w-[700px] h-full flex items-center pl-10    md:rounded-b-full bg-white/70 backdrop-blur-sm shadow-xl">
          <ul className="flex justify-center w-full md:gap-11 gap-8">
            {items.map((item) => (
              <li key={item.link}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>
    );
}
 
export default Navbar;