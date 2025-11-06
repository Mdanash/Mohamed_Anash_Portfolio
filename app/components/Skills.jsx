"use client";

import Image from "next/image";
import skillsData from "./skillsData"; // { name, icon } format
import { useState, useRef } from "react";

export default function Skills() {
  const scrollRef = useRef(null);
  const [isScrolling, setScrolling] = useState(false);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === "left" ? -250 : 250;
    setScrolling(true);
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setTimeout(() => setScrolling(false), 500);
  };

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      <h2 className="section-title">Skills</h2>

      {/* Desktop & Tablet Grid */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6 md:px-12">
        {skillsData.map((skill, i) => (
          <div
            key={i}
            className="skill-card animate-skill-entry"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div className="skill-icon">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="mt-3 font-medium text-slate-700 dark:text-slate-200">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile Side Scroll */}
      <div className="sm:hidden relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto hide-scrollbar gap-5 px-6 py-4 scroll-smooth"
        >
          {skillsData.map((skill, i) => (
            <div
              key={i}
              className="min-w-[140px] skill-card flex-shrink-0 text-center"
            >
              <div className="skill-icon mx-auto">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={55}
                  height={55}
                  className="object-contain"
                />
              </div>
              <p className="mt-2 text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full p-2 shadow-md"
          aria-label="Scroll Left"
        >
          ◀
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full p-2 shadow-md"
          aria-label="Scroll Right"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
