"use client";
import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";
import { animateScroll } from "react-scroll";

const navTabs = [
  {
    title: "About",
    path: "about",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "Experience",
    path: "experience",
  },
];

const Navbar = ({
  initial = { opacity: 0, y: -50 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 1, delay: 4.5, ease: "easeInOut" },
}) => {
  const [navbarOpen, setNavBarOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 bg-opacity-5 z-50"
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <div className="z-50 flex flex-wrap items-center justify-between mx-auto pt-3 px-9 bg-zinc-50">
        <button
          onClick={() =>
            animateScroll.scrollToTop({ smooth: true, duration: 500 })
          }
          className="text-white ml-6 text-2xl"
        >
          <Image
            src="/images/logo.png"
            alt="logo"
            className="absolute transform top-2 pb-2 left-4 md:left-6 w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]"
            width={50}
            height={50}
          />
        </button>
        <div className="mobile-menu block md:hidden z-20">
          {!navbarOpen ? (
            <button
              onClick={() => setNavBarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-800 text-slate-800 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-800 text-slate-800 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-2">
            {navTabs.map((link, index) => (
              <li key={index} className="hover:text-white">
                <NavTabs href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        {navbarOpen ? <MobileMenu links={navTabs} /> : null}
      </div>
    </motion.nav>
  );
};

export default Navbar;
