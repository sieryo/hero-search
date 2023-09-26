"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { variants } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };
  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mobileLinkVariants = {
    initial: {
      y: "20vh",
      background: "#FF6969",

      transition: {
        duration: 0.7,
        ease: [0.37, 0, 0.63, 1],
        type: "tween",
      },
    },
    animate: {
      y: 0,

      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.5,
        type: "tween",
      },
    },
  };
  const mobileHeaderVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        delay: 0.5,
        duration: 0.9,
      },
    },
  };
  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    animate: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  return (
    <header>
      <motion.nav
        className="w-full  h-[60px] fixed z-[50] flex justify-center"
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
            <div>
              <Menu className=" cursor-pointer" onClick={toggleMenu} />
            </div>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed left-0 top-0 w-full z-[99] origin-top h-screen bg-slate-600 text-white p-10"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="flex h-full flex-col">
              <div className="overflow-hidden">
                <motion.div
                  className="flex justify-between items-center "
                  variants={mobileHeaderVariants}
                  initial="initial"
                  animate="animate"
                  exit="initial"
                >
                  <Image alt="logo" src="/logo2.png" width={50} height={50} />
                  <div>
                    <Menu className=" cursor-pointer" onClick={toggleMenu} />
                  </div>
                </motion.div>
              </div>
              <motion.ul
                className="flex uppercase justify-center w-full h-full gap-4 flex-col my-auto "
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="initial"
              >
                {items.map((item) => (
                  <div className="overflow-hidden" key={item.link}>
                    <motion.li className="" variants={mobileLinkVariants}>
                      <Link
                        className=" p-2 hover:text-black text-black block"
                        href={item.link}
                        target="_top"
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  </div>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
