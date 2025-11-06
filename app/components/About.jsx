"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        About Me
      </motion.h2>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Text content */}
        <motion.div
          className="lg:w-2/3 text-slate-700 dark:text-slate-300 leading-relaxed text-justify"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4">
            I’m a <span className="text-[color:var(--accent)] font-semibold">Computer Science graduate</span> specializing in{" "}
            <strong>Artificial Intelligence</strong> and <strong>Machine Learning</strong>. 
            I’m passionate about developing intelligent systems that bring automation and insight to real-world challenges.
          </p>
          <p className="mb-4">
            My technical stack includes Python, TensorFlow, Scikit-learn, and OpenCV. 
            I enjoy creating clean, efficient, and scalable solutions — from model training to deployment.
          </p>
          <p>
            I’m a curious learner with a growth mindset, constantly exploring emerging trends in AI, Data Science, 
            and MLOps to enhance my knowledge and contribute effectively to any project I’m part of.
          </p>
        </motion.div>

        {/* Profile Picture */}
        <motion.div
          className="lg:w-1/3 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group">
            {/* Glow effect (hidden until hover) */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[color:var(--accent)] to-indigo-400 blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>

            {/* Profile Image */}
            <Image
              src="/images/Mohamed Anash Profile.jpg"
              alt="Mohamed Anash A"
              width={260}
              height={260}
              className="rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-xl group-hover:scale-[1.05] transition-transform duration-500 relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
