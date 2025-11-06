"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply saved theme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  // Toggle light/dark mode
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  // Handle link click (close menu on mobile)
  const handleNavClick = () => setMenuOpen(false);

  const navItems = ["Home", "About", "Skills", "Experience", "Education", "Projects", "Certifications", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
        <h1 className="text-lg md:text-2xl font-bold text-[color:var(--accent)] tracking-wide">
          Mohamed <span className="text-slate-800 dark:text-slate-100">Anash</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[color:var(--accent)] transition-colors"
            >
              {item}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-3 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:scale-110 transition"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <MoonIcon className="h-5 w-5 text-slate-700" />
            ) : (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-700 px-6 py-4 space-y-4 text-center"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={handleNavClick}
                className="block text-lg font-medium hover:text-[color:var(--accent)] transition"
              >
                {item}
              </a>
            ))}

            {/* Theme Toggle in Mobile Menu */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:scale-110 transition"
            >
              {theme === "light" ? (
                <MoonIcon className="h-6 w-6 text-slate-700" />
              ) : (
                <SunIcon className="h-6 w-6 text-yellow-400" />
              )}
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
