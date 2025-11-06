// app/components/Footer.jsx
"use client";

export default function Footer() {
  return (
    <footer className="mt-12 py-6 bg-white/70 dark:bg-slate-900/70 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-6 text-center text-slate-600 dark:text-slate-400">
        <p className="text-sm">© {new Date().getFullYear()} Mohamed Anash A — All rights reserved</p>
      </div>
    </footer>
  );
}
