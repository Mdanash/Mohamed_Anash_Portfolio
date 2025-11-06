// app/layout.jsx
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import ScrollTop from "./components/ScrollTop";
import Preloader from "./components/Preloader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohamed Anash | Portfolio",
  description: "Personal portfolio of Mohamed Anash — Python / AI/ML",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[var(--page-bg)] text-[var(--page-text)] transition-colors duration-300`}>
        <Preloader />
        <Header />
        <main>{children}</main>
        <ScrollTop />
        {/* SINGLE FOOTER — keep only this one */}
        <footer className="text-center py-6 mt-10 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700">
          © {new Date().getFullYear()} Mohamed Anash. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
