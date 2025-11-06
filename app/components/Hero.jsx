"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import SpaceBackground from "./SpaceBackground";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero relative overflow-hidden flex flex-col justify-center items-center text-center"
    >
      <SpaceBackground />

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        {/* Greeting */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-3 text-slate-800 dark:text-white">
          Hi, I’m <span className="text-[color:var(--accent)]">Mohamed Anash A</span>
        </h1>

        {/* Typewriter text */}
        <div className="text-lg md:text-2xl font-medium mb-6 text-slate-600 dark:text-slate-300">
          <Typewriter
            options={{
              strings: ["AIML Enthusiast", "Data Analyst", "Python Developer"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 justify-center mt-6">
          <a
            href="#contact"
            className="btn-primary"
          >
            Hire Me
          </a>
          <a
            href="/Mohamed Anash Resume.pdf"
            download
            className="btn-outline flex items-center gap-2"
          >
            <FaDownload /> Resume
          </a>
        </div>
      </motion.div>

      {/* Optional profile picture (if you want it here too) */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mt-10"
      >
        <Image
          src="/images/profile.jpg"
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full border-4 border-white dark:border-slate-800 shadow-lg"
        />
      </motion.div> */}
    </section>
  );
}
