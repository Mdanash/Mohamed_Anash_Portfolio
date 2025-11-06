// app/components/Certifications.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Certifications() {
  const certs = [
    {
      title: "Python Programming",
      provider: "Guvi",
      image: "/images/python certification.png",
    },
    {
      title: "Data Analyst",
      provider: "Honeywell",
      image: "/images/data analyst.png",
    },
    {
      title: "AWS Cloud Practitioner",
      provider: "Amazon Web Services",
      image: "/images/aws certification.jpg",
    },
    {
      title: "Codex Hackathon",
      provider: "Periyar Maniammai University",
      image: "/images/codex hackathon.jpg",
    },
    {
      title: "CyberSecurity Analyst",
      provider: "Tata",
      image: "/images/Cybersecurity Analyst Certificate .jpg",
    },
    
  ];

  return (
    <section id="certifications" className="relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Certifications
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 md:px-12">
        {certs.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
            transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 200 }}
            className="bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-md hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] card-hover"
          >

            {/* Certification Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={c.image}
                alt={c.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>

            {/* Certification Info */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                {c.title}
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {c.provider}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
