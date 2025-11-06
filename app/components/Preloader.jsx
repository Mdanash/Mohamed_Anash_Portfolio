// app/components/Preloader.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 flex items-center justify-center bg-[color:var(--page-bg)] z-[9999]"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              repeat: 1,
              repeatType: "reverse",
            }}
            className="text-5xl md:text-6xl font-bold tracking-wide text-[color:var(--accent)]"
          >
            MA
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
