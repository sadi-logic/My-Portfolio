import type { StaticImageData } from "next/image";
import fitlogImg from "@/assets/FItlog.png";
import bazarDorImg from "@/assets/BazarDor.png";

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  category: "Frontend" | "Backend" | "Database" | "Tools";
  skills: {
    name: string;
    level: "Proficient" | "Advanced" | "Intermediate" | "Exploring";
    tag?: string;
  }[];
}

export interface Project {
  id: string | number;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  image?: StaticImageData | string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "email" | "twitter";
}

export const personalDetails = {
  name: "Sadullah Sadi",
  title: "CSE Student | Full Stack Web Developer",
  tagline: "Crafting fast, accessible, and intuitive web experiences from front-end pixels to back-end logic.",
  bio: "I am a passionate Computer Science & Engineering student and web developer who loves transforming ideas into responsive, user-friendly digital solutions. Dedicated to clean architecture, modern React patterns, and continuous learning.",
  status: "Available for internships & freelance",
  email: "sadullasadi99@gmail.com",
  location: "Mymensingh, Bangladesh",
  resumeUrl: "/Sadi_Resume.pdf",
  college: "National University, Bangladesh",
  degree: "B.Sc. in Computer Science & Engineering",
  graduationYear: "Expected 2026",
  currentlyLearning: [
    "Next.js 16 App Router & Server Actions",
    "Scalable Backend Architecture & Cloud Deployment",
    "Modern System Design & Microservices",
  ],
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/sadi-logic",
      icon: "github" as const,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sadullah-sadi",
      icon: "linkedin" as const,
    },
  ],
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5 / Semantic Web", level: "Proficient" },
      { name: "CSS3 / Modern Layouts", level: "Proficient" },
      { name: "JavaScript (ES6+)", level: "Proficient" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "React.js", level: "Proficient" },
      { name: "Next.js (App Router)", level: "Advanced" },
      { name: "Tailwind CSS", level: "Proficient" },
      { name: "DaisyUI", level: "Proficient" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "RESTful APIs", level: "Intermediate" },
      { name: "Authentication", level: "Intermediate" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: "Intermediate" },
      { name: "Mongoose ODM", level: "Intermediate" },
      { name: "PostgreSQL / SQL Basics", level: "Exploring" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git & GitHub", level: "Proficient" },
      { name: "VS Code", level: "Proficient" },
      { name: "Vercel / Netlify", level: "Proficient" },
      { name: "Figma (UI Inspection)", level: "Intermediate" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "FitLog",
    description:
      "A fitness app with authentication, workout tracking, and progress monitoring.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "DaisyUI"],
    demoUrl: "https://fitlog-by-sadi.vercel.app/",
    githubUrl: "https://github.com/sadi-logic/Assignment-6",
    image: fitlogImg,
    featured: true,
  },
  {
    id: 2,
    title: "Bazar Dor",
    description:
      "A responsive e-commerce storefront with product browsing, real-time cart state, category filters, and simulated checkout flow.",
    tags: ["React 19", "Next.js 16", "Tailwind CSS v4", "TypeScript", "MongoDB", "Google Authentication"],
    demoUrl: "https://bazardor-tau.vercel.app/",
    githubUrl: "https://github.com/sadi-logic/Assignment-7",
    image: bazarDorImg,
    featured: true,
  },
];

