"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { navItems, personalDetails } from "@/data/portfolio";

const subscribeTheme = (callback: () => void) => {
  window.addEventListener("storage", callback);
  window.addEventListener("portfolio-theme-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("portfolio-theme-change", callback);
  };
};

const getThemeSnapshot = (): "dark" | "light" => {
  if (typeof window === "undefined") return "dark";
  return (localStorage.getItem("portfolio-theme") as "dark" | "light") || "dark";
};

const getThemeServerSnapshot = () => "dark" as const;

export default function Navbar() {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sync the data-theme attribute with the current theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("portfolio-theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.dispatchEvent(new Event("portfolio-theme-change"));
  };

  // Scroll spy to highlight active section and track navbar scroll shadow
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 140;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-base-100/85 backdrop-blur-md shadow-md border-b border-base-content/10"
        : "bg-base-100/60 backdrop-blur-sm"
        }`}
    >
      <nav className="container mx-auto px-6 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#home"
          className="group flex items-center gap-2 text-xl font-bold tracking-tight"
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-mono text-sm shadow-md group-hover:scale-105 transition-transform">
            SS
          </span>
          <span className="bg-gradient-to-r from-cyan-900 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
            {personalDetails.name}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${isActive
                    ? "text-sky-500 bg-sky-500/10 font-semibold"
                    : "text-base-content/75 hover:text-base-content hover:bg-base-content/5"
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Action Buttons: Theme Toggle & Resume */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            className="p-2.5 rounded-xl border border-base-content/10 hover:bg-base-content/5 text-base-content/80 transition-colors cursor-pointer"
          >
            {theme === "dark" ? (
              <svg
                className="w-5 h-5 text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          {/* Resume Download / Open Button */}
          <a
            href={personalDetails.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            Resume
          </a>
        </div>

        {/* Mobile Controls (Theme Toggle + Hamburger) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-base-content/10 text-base-content/80 cursor-pointer"
          >
            {theme === "dark" ? (
              <svg
                className="w-4 h-4 text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-lg border border-base-content/10 text-base-content hover:bg-base-content/5 cursor-pointer"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-base-content/10 bg-base-100/95 backdrop-blur-xl px-6 py-4 space-y-2 animate-fadeIn">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${isActive
                  ? "bg-sky-500/15 text-sky-500 font-semibold"
                  : "text-base-content/80 hover:bg-base-content/5"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="pt-2">
            <a
              href={personalDetails.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 rounded-xl font-semibold bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}