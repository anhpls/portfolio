"use client";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";

const Hero = ({
  animate = { opacity: 1, y: 0 },
  transition = { duration: 1, delay: 4.5, ease: "easeInOut" },
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 z-20 mt-20 lg:mt-36 md:mb-20">
      {/* Typing Header */}
      <div className="col-span-7 place-self-center text-center sm:text-left">
        <motion.div
          initial={hasAnimated ? false : { opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="ml-16 md:ml-0"
        >
          <span className="font-sans font-semibold text-stone-900 text-4xl sm:text-5xl lg:text-6xl">
            <TypeAnimation
              sequence={["", 1000, "hello world", 200, "hi, i'm ", 200]}
              wrapper="span"
              speed={10}
              repeat={0}
              cursor={false}
              style={{ display: "inline" }}
            />
          </span>
          <TypeAnimation
            sequence={["", 4100, "anh"]}
            wrapper="span"
            speed={10}
            repeat={0}
            cursor={false}
            className="font-extrabold text-transparent text-4xl sm:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-bl from-orange-500 to-rose-500 transition-colors duration-100"
            style={{ display: "inline" }}
          />
          <span className="inline-block animate-blink">|</span>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={hasAnimated ? false : { opacity: 0, y: -20 }}
          animate={animate}
          transition={transition}
        >
          <div className="z-10 text-neutral-600 text-center md:text-left font-normal text-sm lg:text-md xl:text-xl leading-relaxed space-y-4 max-w-7xl mx-auto mt-2 ">
            <p>
              I’m a software developer based in San Diego, California, focused
              on integrating scalability and user-centric design into
              applications. I strive to leverage technology and creativity to
              solve complex problems, creating forward-thinking solutions that
              deliver impactful digital experiences through innovative
              applications and products.
            </p>
            <br />
            {/* Group the final paragraph with the button */}
            <div className="space-y-4">
              <p className="pb-6">
                Let’s connect and discuss creating impactful experiences through
                design, technology, and consumer engagement.
              </p>

              {/* Mail Button */}
              <div className="flex justify-center sm:justify-start">
                <motion.button
                  className="group flex items-center justify-center rounded-md px-6 py-2 bg-zinc-300 text-white hover:bg-black border-white border-2 hover:border-gray-700 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <EnvelopeIcon className="w-12 h-9 text-white" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div
        className="z-10 cols-span-5 place-self-center mt-10 lg:mt-20 sm:ml-96"
        initial={hasAnimated ? false : { opacity: 0, y: -50 }}
        animate={animate}
        transition={transition}
      >
        <div className="rounded-full bg-zinc-900 w-[300px] h-[300px] relative md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] overflow-hidden lg:ml-72 xl:transform xl:scale-125">
          {/* <Image
            src="/images/profpic.jpeg"
            alt="profilepic"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={600}
            height={600}
          /> */}
          <BackgroundBeams className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
