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
      title: "AristoVLT",
      description:
        "A luxury brand e-commerce app lorem ipsum sdkfaejsla laksefjlasef asejfllasejkll esafjlasefjljlkaseklj asefksflejklas as jlkfejal jslljk jsljka kslajf lsaj ",
      image: "",
      gitUrl: "https://github.com/anhpls/aristovlt",
      pageUrl: "https://aristovlt.com/",
      tag: ["Web", "All"],
      livePreview: true,
    },
    {
      id: 2,
      title: "RecipeBook",
      description:
        "A user-friendly web app that lets you save, organize, and browse recipes effortlessly. Designed for home cooks and food enthusiasts, it features a clean UI for quick access to favorite dishes, ingredient lists, and step-by-step instructions. Whether you’re meal planning or discovering new recipes, Recipe Book makes cooking easier and more enjoyable! 🍽️📖✨",
      image: "/images/recipebook/6.png",
      gitUrl: "#",
      pageUrl: "#",
      tag: ["Web", "All"],
      livePreview: true,
    },
    {
      id: 3,
      title: "MichelinStarCat",
      description:
        "A charming idle RPG where adorable chef cats battle enemies to collect rare ingredients, craft gourmet dishes, and upgrade their kitchens. Players progress by mastering recipes, unlocking new skills, and exploring different themed maps while earning rewards even when offline. Inspired by MapleStory and Cats & Soup, the game blends cooking, combat, and strategy in a delightful, whimsical world. 🍜🐱✨",
      image: "/images/meowstrycatstar/1.PNG",
      gitUrl: "#",
      pageUrl: "#",
      tag: ["Mobile", "All"],
      livePreview: false,
    },
    {
      id: 4,
      title: "Portfolio",
      description:
        "A charming idle RPG where adorable chef cats battle enemies to collect rare ingredients, craft gourmet dishes, and upgrade their kitchens. Players progress by mastering recipes, unlocking new skills, and exploring different themed maps while earning rewards even when offline. Inspired by MapleStory and Cats & Soup, the game blends cooking, combat, and strategy in a delightful, whimsical world. 🍜🐱✨",
      image: "/images/meowstrycatstar/1.PNG",
      gitUrl: "https://github.com/anhpls/portfolio",
      pageUrl: "#",
      tag: ["Web", "All"],
      livePreview: true,
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
    <div className="lg:mt-20 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-10"
        id="projects"
      >
        Projects
      </motion.div>
      <motion.div
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
      </motion.div>
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 p-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.id} variants={cardVariants}>
            <ProjectCards
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project.tag}
              gitUrl={project.gitUrl}
              pageUrl={project.pageUrl}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
