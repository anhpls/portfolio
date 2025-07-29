"use client";
import React, { useState } from "react";
import ProjectCards from "./ProjectCards";
import { ProjectTagButtons } from "./ProjectTagButtons";
import { motion } from "framer-motion";

export const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  interface ProjectDetail {
    id: number;
    title: string;
    description: string;
    image: string;
    gitUrl: string;
    pageUrl: string;
    tag: string[];
    livePreview: boolean;
  }

  const projectDetails: ProjectDetail[] = [
    {
      id: 1,
      title: "Uniflo",
      description:
        "UniFLO is an AI-powered task management platform that optimizes student schedules by parsing course syllabi, generating dynamic calendars, and prioritizing assignments for better productivity and time management.",
      image: "/images/uniflo/pic.png",
      gitUrl: "https://github.com/anhpls/uniflo",
      pageUrl: "https://uniflo-beta.vercel.app/",
      tag: ["Web", "All"],
      livePreview: true,
    },
    {
      id: 2,
      title: "AristoVLT",
      description:
        "A sleek and scalable e-commerce platform built for a premium streetwear brand. Developed with Next.js and Tailwind CSS, it features dynamic product rendering, smooth animations, and a seamless user experience. Optimized for performance, accessibility, and future scalability.",
      image: "/images/aristovlt/ss4.png",
      gitUrl: "https://github.com/anhpls/aristovlt",
      pageUrl: "https://aristovlt.vercel.app/",
      tag: ["Web", "All"],
      livePreview: true,
    },
    {
      id: 3,
      title: "Portfolio",
      description:
        "My portfolio showcasing web development, game design, and creative projects. Built with Next.js and Tailwind CSS, it features smooth animations, dynamic project displays, and a sleek UI.",
      image: "/images/portfolio/ss.png",
      gitUrl: "https://github.com/anhpls/portfolio",
      pageUrl: "#",
      tag: ["Web", "All"],
      livePreview: true,
    },
    {
      id: 4,
      title: "RecipeBook",
      description:
        "A user-friendly web app that lets you save, organize, and browse recipes effortlessly. Designed for home cooks and food enthusiasts, it features a clean UI for quick access to favorite dishes, ingredient lists, and step-by-step instructions. Whether you’re meal planning or discovering new recipes, Recipe Book makes cooking easier and more enjoyable! 🍽️📖✨",
      image: "/images/recipebook/ss2.png",
      gitUrl: "https://github.com/anhpls/recipebook",
      pageUrl: "https://anhpls.github.io/recipebook/",
      tag: ["Web", "All"],
      livePreview: true,
    },
    {
      id: 5,
      title: "MichelinCatStar",
      description:
        "A charming idle RPG where adorable chef cats battle enemies to collect rare ingredients, craft gourmet dishes, and upgrade their kitchens. Players progress by mastering recipes, unlocking new skills, and exploring different themed maps while earning rewards even when offline. Inspired by MapleStory and Cats & Soup, the game blends cooking, combat, and strategy in a delightful, whimsical world. 🍜🐱✨",
      image: "/images/meowstrycatstar/1.PNG",
      gitUrl: "https://github.com/anhpls/michelincatstar",
      pageUrl: "https://uniflo-beta.vercel.app/",
      tag: ["Web", "All"],
      livePreview: false,
    },
  ];

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    whileinview: { opacity: 1, y: 0 },
  };

  const filteredProjects =
    tag === "All"
      ? projectDetails
      : projectDetails.filter((project) => project.tag.includes(tag));

  return (
    <div className="lg:mt-20 mt-10 py-10 px-4 md:px-16 lg:px-32 bg-zinc-50">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-1"
        id="projects"
      >
        See What I'm Building
      </motion.div>
      {/* <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-zinc-500 font-sans font-semibold flex flex-row justify-center items-center gap-4 text-md"
      >
        <ProjectTagButtons
          onClick={handleTagChange}
          name="All"
          isActive={tag === "All"}
        />
        <ProjectTagButtons
          onClick={handleTagChange}
          name="Web"
          isActive={tag === "Web"}
        />
        <ProjectTagButtons
          onClick={handleTagChange}
          name="Mobile"
          isActive={tag === "Mobile"}
        />
      </motion.div> */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 p-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className={`transition-opacity duration-300 ${
              tag === "All" || project.tag.includes(tag)
                ? "opacity-100 block"
                : "opacity-0 hidden"
            }`}
          >
            <ProjectCards
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project.tag}
              gitUrl={project.gitUrl}
              pageUrl={project.pageUrl}
              livePreview={project.livePreview}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
