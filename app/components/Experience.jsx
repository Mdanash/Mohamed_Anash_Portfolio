"use client";

export default function Experience() {
  const internships = [
    {
      title: "Machine Learning Intern",
      company: "Cognifyz Technologies",
      period: "Remote — Feb 2025 to Apr 2025",
      description:
        "Worked on projects including Restaurant Rating Prediction, Recommendation Systems, and Cuisine Classification using Python and Scikit-learn.",
    },
    {
      title: "Project Intern",
      company: "Tarcin Robotics",
      period: "Jan 2025 to Jun 2025",
      description:
        "Developed Python-based educational modules for school students and worked with Pandas for data manipulation and visualization.",
    },
  ];

  return (
    <section id="experience" className="relative">
      <h2 className="section-title">Experience</h2>

      <div className="flex flex-col items-center justify-center gap-10 max-w-5xl mx-auto px-6 md:px-12">
        {internships.map((exp, i) => (
          <div
            key={i}
            className="experience-card animate-exp-entry"
            style={{ animationDelay: `${i * 200}ms` }}
          >
            <h3 className="text-xl font-semibold text-[color:var(--accent)]">
              {exp.title}
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-400 mt-1">
              {exp.company} | <span>{exp.period}</span>
            </p>
            <p className="mt-3 text-slate-800 dark:text-slate-200 leading-relaxed text-sm">
              {exp.description}
            </p>
       </div>
        ))}
      </div>
    </section>
  );
}
