// app/components/Contact.jsx
"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "580683cc-ba02-4455-81d4-50331d88f021"); // <-- replace with your Web3Forms key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setLoading(false);
      if (data.success) {
        setResult({ type: "success", message: "Thank you! Your message has been sent 🚀" });
        event.target.reset();
      } else {
        setResult({ type: "error", message: "Oops! Something went wrong. Please try again." });
      }
    } catch (err) {
      setLoading(false);
      setResult({ type: "error", message: "Network error. Please try again later." });
    }
  };

  return (
    <section id="contact" className="relative py-20">
      <h2 className="section-title">Contact Me</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6 md:px-12">
        {/* Contact Form */}
        <div className="bg-white/90 dark:bg-slate-800/90 p-8 rounded-xl shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input className="input" type="text" name="name" placeholder="Your Name" required />
            <input className="input" type="email" name="email" placeholder="Your Email" required />
            <textarea className="input" name="message" placeholder="Your Message" required></textarea>

            <button type="submit" disabled={loading} className="btn-primary w-full">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {result && (
            <p className={`mt-4 text-center ${result.type === "success" ? "text-green-600 dark:text-green-400" : "text-red-500"}`}>
              {result.message}
            </p>
          )}
        </div>

        {/* Why Hire Me Section */}
        <div className="bg-white/80 dark:bg-slate-800/80 p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-[color:var(--accent)]">Why Hire Me?</h3>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            I’m an AI/ML enthusiast and Python developer experienced in data analysis and model building. I deliver practical, production-ready solutions.
          </p>

          <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <p>📧 <strong>Email:</strong> mohamedanash0404@gmail.com</p>
            <p>📞 <strong>Phone:</strong> +91 93634 79968</p>
            <p>📍 <strong>Location:</strong> Tamil Nadu, India</p>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <a href="https://github.com/mdanash" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-2xl hover:text-[color:var(--accent)] transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/Mohamed-anash" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-2xl hover:text-[color:var(--accent)] transition">
              <FaLinkedin />
            </a>
            <a href="mailto:mohamedanash0404@gmail.com" aria-label="Email" className="text-2xl hover:text-[color:var(--accent)] transition">
              <FaEnvelope/>
            </a>
            <a href="http://instagram.com/mohamed_anash_04" aria-label="Instagram" className="text-2xl hover:text-[color:var(--accent)] transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
