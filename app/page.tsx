"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { ProjectSection } from "@/components/ProjectSection";
import { FloatingDock } from "@/components/ui/floating-dock";
import { TracingBeam } from "@/components/ui/tracing-beam";
import {
  IconHome,
  IconBrandGithub,
  IconMail,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { time } from "console";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { title: "Home", icon: <IconHome />, href: "/" },
  {
    title: "GitHub",
    icon: <IconBrandGithub />,
    href: "https://github.com/anhpls/",
  },
  {
    title: "LinkedIn",
    icon: <IconBrandLinkedin />,
    href: "https://www.linkedin.com/in/anhpls/",
  },
  { title: "Contact", icon: <IconMail />, href: "/contact" },
];

export default function Home() {
  const [isDockVisible, setIsDockVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDockVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {" "}
      <TracingBeam>
        <main className="flex min-h-screen flex-col bg-zinc-50">
          <Navbar />

          <div className="container mx-auto px-12 py-4">
            <Hero />
          </div>
          {/* <BackgroundBeams /> */}
          {isDockVisible && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="flex"
            >
              <FloatingDock items={navItems} />
            </motion.div>
          )}
          <About />
          <ProjectSection />
        </main>{" "}
      </TracingBeam>
    </>
  );
}
