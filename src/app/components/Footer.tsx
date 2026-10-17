"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { personalDetails, navItems } from "@/data/portfolio";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-base-content/10 bg-base-100 py-12 px-6">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="text-center md:text-left space-y-1">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-mono text-xs font-bold shadow-sm">
              SS
            </span>
            <span className="font-bold text-lg">{personalDetails.name}</span>
          </div>
          <p className="text-xs text-base-content/60">
            © 2026 {personalDetails.name}. Crafted with Next.js &amp; Tailwind CSS.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-base-content/75">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-sky-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {personalDetails.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-base-200/80 hover:bg-sky-500/15 hover:text-sky-500 border border-base-content/10 transition-colors text-xs font-semibold"
              aria-label={social.name}
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>

      {/* Floating Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 p-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-xl hover:shadow-sky-500/30 hover:scale-105 active:scale-95 transition-all z-40"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </footer>
  );
}
