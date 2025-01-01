"use client";
import React from "react";
import { Carousel, Card } from "./ui/cards-carousel";
import { motion } from "framer-motion";
import Image from "next/image";

const sampleCards = [
  {
    src: "/images/recipebook/2.JPG",
    title: "Recipe Book",
    category: "Web Application",
    content: (
      <div className="bg-zinc-400 p-8 md:p-14 rounded-3xl">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">
            The first rule of Apple club is that you boast about Apple club.
          </span>{" "}
          Keep a journal, quickly jot down a grocery list, and take amazing
          class notes. Want to convert those notes to text? No problem.
          Langotiya jeetu ka mara hua yaar is ready to capture every thought.
        </p>
        <Image
          src="/images/recipebook/6.png"
          alt=""
          height={500}
          width={500}
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    ),
  },
  {
    src: "/images/meowstrycatstar/1.PNG",
    title: "Meowstry Cat Star",
    category: "IOS",
    content: <p>This is the detailed content for Card 2.</p>,
  },
  {
    src: "/images/recipebook/7.PNG",
    title: "CineScope",
    category: "Web Application",
    content: <p>This is the detailed content for Card 3.</p>,
  },
  {
    src: "/images/recipebook/7.PNG",
    title: "Test",
    category: "Web Application",
    content: <p>This is the detailed content for Card 3.</p>,
  },
];

export default function Projects2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="container mx-auto p-4"
    >
      <h1 className="text-lg md:text-4xl font-bold mb-2 ml-4 ">Projects</h1>
      <Carousel
        items={sampleCards.map((card, index) => (
          <Card card={card} index={index} key={index} layout />
        ))}
      />
    </motion.div>
  );
}
