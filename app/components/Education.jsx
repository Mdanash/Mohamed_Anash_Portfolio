"use client";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
      institution: "Periyar Maniammai Institute of Science and Technology",
      period: "2021 - 2025",
      description:
        "Focused on Artificial Intelligence, Machine Learning, and Data Science with strong foundations in programming and algorithms.",
      percent:"CGPA-7.75/10"
    },
    {
      degree: "Higher Secondary Education (HSC)",
      institution: "St.Antony's Matric Hr.Sec.School",
      period: "2019 - 2021",
      description:
        "Specialized in Computer Science stream.",
      percent:"Percentage-89%"
    },
  ];

  return (
    <section id="education" className="relative">
      <h2 className="section-title">Education</h2>

      <div className="timeline-container max-w-5xl mx-auto px-6 md:px-12">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`education-card animate-edu-entry ${
              index % 2 === 0 ? "slide-left" : "slide-right"
            }`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="education-content">
              <h3 className="text-lg md:text-xl font-semibold text-[color:var(--accent)] mb-1">
                {edu.degree}
              </h3>
              <p className="text-slate-700 dark:text-slate-400 text-sm mb-1">
                {edu.institution} | <span>{edu.period}</span>
              </p>
              <p className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
                {edu.description}
              </p>
              <p className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
                {edu.percent}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
