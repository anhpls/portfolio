"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li className="text-zinc-700">
          Languages
          <br />
          <span className="text-sm text-zinc-500">
            Java, JavaScript, TypeScript, C#, C++, HTML, CSS
          </span>
        </li>
        <br />
        <li className="text-zinc-700">
          Frameworks
          <br />
          <span className="text-sm text-zinc-500">
            NextJS, ReactJS, TailwindCSS
          </span>
        </li>
        <br />
        <li className="text-zinc-700">
          Tools
          <br />
          <span className="text-sm text-zinc-500">Git</span>
        </li>
        <br />
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li className="text-zinc-700">
          California State University, Long Beach <br />
          <span className="text-sm text-zinc-500">
            B.S.E in Computer Science (In-Progress)
            <br />
            B.F.A in 3D Animation
          </span>
        </li>
        <br />
        <li>
          iAnimate
          <br />
          <span className="text-sm text-zinc-500">
            Game Workshop I, II, III
          </span>
        </li>
        <br />
        <li>
          Codecademy
          <br />
          <span className="text-sm text-zinc-500">JavaScript</span>
          <br />
          <span className="text-sm text-zinc-500">Intermediate JavaScript</span>
          <br />
          <span className="text-sm text-zinc-500">C++</span>
        </li>
        <br />
        <li>
          FCC
          <br />
          <span className="text-sm text-zinc-500">Responsive Web Design</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li>#test</li>
      </ul>
    ),
  },
];
const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, moveTab] = useTransition();

  interface TabData {
    title: string;
    id: string;
    content: JSX.Element;
  }

  const TAB_DATA: TabData[] = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul>
          <li className="text-zinc-700">
            Languages
            <br />
            <span className="text-sm text-zinc-500">
              TypeScript, Java, JavaScript, C#, C++, HTML, CSS
            </span>
          </li>
          <br />
          <li className="text-zinc-700">
            Frameworks and Libraries
            <br />
            <span className="text-sm text-zinc-500">
              NextJS, ReactJS, TailwindCSS
            </span>
          </li>
          <br />
          <li className="text-zinc-700">
            Tools
            <br />
            <span className="text-sm text-zinc-500">Git, REST APIs</span>
          </li>
          <br />
          <li className="text-zinc-700">
            Databases
            <br />
            <span className="text-sm text-zinc-500">PostgreSQL</span>
          </li>
          <br />
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul>
          <li className="text-zinc-700">
            California State University, Long Beach <br />
            <span className="text-sm text-zinc-500">
              B.S in Computer Science (In-Progress)
              <br />
              B.F.A in 3D Animation
            </span>
          </li>
          <br />
          <li>
            iAnimate
            <br />
            <span className="text-sm text-zinc-500">
              Game Workshop I, II, III
            </span>
          </li>
          <br />
          <li>
            Codecademy
            <br />
            <span className="text-sm text-zinc-500">JavaScript</span>
            <br />
            <span className="text-sm text-zinc-500">
              Intermediate JavaScript
            </span>
            <br />
            <span className="text-sm text-zinc-500">C++</span>
          </li>
          <br />
          <li>
            FCC
            <br />
            <span className="text-sm text-zinc-500">Responsive Web Design</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Experience",
      id: "experience",
      content: (
        <ul>
          <li>#test</li>
        </ul>
      ),
    },
  ];

  const handleTabChange = (id: string) => {
    moveTab(() => {
      setTab(id);
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="text-zinc-600 font-semibold font-sans mb-10 mt-10 md:mt-24 lg:mt-36 md:mb-0"
      id="about"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        {/* Image */}
        <div className="hidden md:flex justify-center items-center bg-zinc-300 w-[300px] h-[300px] relative md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] overflow-hidden mx-auto mb-36 ">
          <Image
            src="/images/1.JPG"
            alt=""
            width={600}
            height={600}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:opacity-0 md:opacity-100"
          />
        </div>

        {/* Header and Bio */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3 md:mb-5 text-center md:text-left">
            About
          </h1>
          <p className="text-base text-md font-medium text-center md:text-lg md:leading-7 text-zinc-500 md:text-justify md:w-10/12">
            I am pursuing a Bachelor of Science in Engineering, specifically in
            Computer Science, while actively building my personal brand through
            social media platforms. Alongside formal education in backend
            engineering, I am actively expanding my knowledge of frontend
            frameworks to transform concepts into fully functional software
            solutions. <br />
            <br />
            Outside of my professional and academic pursuits, I enjoy mountain
            biking and strength training as part of my regular fitness routine.
            I am also passionate about competitive gaming and the intricacies of
            multiplayer game design.
          </p>

          {/* Tab Buttons */}
          <div className="grid grid-cols-1 mt-10 md:mt-10 md:w-full">
            <div className="text-center md:text-left ">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              {/* <TabButton
                selectTab={() => handleTabChange("experience")}
                active={tab === "experience"}
              >
                Experience
              </TabButton> */}
            </div>
            <div className="mt-5 h-[350px] overflow-auto relative">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full "
              >
                {TAB_DATA.find((t) => t.id === tab)?.content || null}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
