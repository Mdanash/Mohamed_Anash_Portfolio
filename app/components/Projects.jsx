"use client";

import Image from "next/image";
import projectsData from "./projectsData";

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <h2 className="section-title">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 md:px-12">
        {projectsData.map((p, i) => (
          <div
            key={i}
            className="project-card animate-project-entry"
            style={{ animationDelay: `${i * 200}ms` }}
          >
            {/* Project Image */}
            <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Project Content */}
            <div className="p-5 flex flex-col gap-4">
              <div>
                <h3 className="text-xl font-semibold text-[color:var(--accent)] mb-2">
                  {p.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>

              {/* Source Code Button */}
              <div className="mt-4">
                <a
                  href={p.code || "#"}
                  target={p.code ? "_blank" : "_self"}
                  rel={p.code ? "noreferrer" : undefined}
                  className={`project-button block text-center px-4 py-2 rounded-lg text-sm font-medium border ${
                    p.code
                      ? "border-[color:var(--accent)] text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-white"
                      : "border-slate-200 text-slate-500 dark:border-slate-700 dark:text-slate-400 cursor-not-allowed opacity-80"
                  }`}
                >
                  💻 {p.code ? "Source Code" : "No Code"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
