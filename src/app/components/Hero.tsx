"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { personalDetails } from "@/data/portfolio";

const rotatingTitles = [
  "CSE Student",
  "Full Stack Web Developer",
  "Next.js & React Developer",
  "UI / Front-End Enthusiast",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Cycling titles every 3 seconds with smooth fade
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
        setFade(true);
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4.5rem)] flex items-center justify-center py-16 px-6 overflow-hidden"
    >
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 dark:bg-sky-500/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto max-w-6xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Introduction & CTAs */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {personalDetails.status}
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-base sm:text-lg font-medium text-base-content/70">
              Hello there! I&apos;m
            </p>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-cyan-900 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
                {personalDetails.name}
              </span>
            </h1>

            {/* Dynamic Rotating Title */}
            <div className="h-9 sm:h-11 flex items-center justify-center lg:justify-start">
              <span
                className={`text-xl sm:text-2xl md:text-3xl font-semibold text-base-content transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"
                  }`}
              >
                {rotatingTitles[titleIndex]}
              </span>
            </div>
          </div>

          {/* Bio Tagline */}
          <p className="text-base sm:text-lg text-base-content/75 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {personalDetails.tagline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              href="#projects"
              className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/35 transition-all active:scale-95"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 rounded-xl font-semibold text-base-content bg-base-200/80 hover:bg-base-300 border border-base-content/10 transition-all active:scale-95"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Quick Links */}
          <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-base-content/70">
            <span className="text-xs uppercase tracking-wider font-semibold text-base-content/50">
              Connect:
            </span>
            {personalDetails.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:text-sky-500 hover:bg-base-200 transition-colors"
                aria-label={social.name}
              >
                {social.icon === "github" ? (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Profile Image Presentation */}
        <div className="relative group flex items-center justify-center">
          {/* Subtle spinning animated decorative ring */}
          <div className="absolute -inset-2 rounded-full bg-[conic-gradient(from_0deg,#2dd4bf,#0ea5e9,#4f46e5,#2dd4bf)] opacity-60 blur-md group-hover:opacity-90 transition duration-500 animate-[spin_8s_linear_infinite]" />
          {/* Profile Card Container */}
          <div className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-84 md:h-84 rounded-full overflow-hidden p-1.5 bg-base-100 shadow-2xl">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900/10">
              <Image
                src="/zero.png"
                alt={personalDetails.name}
                fill
                priority
                sizes="(max-width: 768px) 280px, 340px"
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
