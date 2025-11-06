"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SpaceBackground() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    setIsDark(document.documentElement.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {isDark ? (
        // 🌌 Dark mode: space particles + nebula
        <div className="sb-background-container">
          <div className="sb-nebula-layer">
            <div className="sb-nebula-blob sb-nebula-1"></div>
            <div className="sb-nebula-blob sb-nebula-2"></div>
          </div>
          <div className="sb-stars-layer">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="sb-star"
                style={{
                  width: Math.random() * 2 + 1 + "px",
                  height: Math.random() * 2 + 1 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        // 🌈 Light mode: animated gradient wave
        <div className="sb-gradient-wave">
          <div className="sb-wave sb-wave1"></div>
          <div className="sb-wave sb-wave2"></div>
          <div className="sb-wave sb-wave3"></div>
        </div>
      )}
    </div>
  );
}
