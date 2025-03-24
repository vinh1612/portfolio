import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaSwift } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import vihoImg from "@/public/viho-application.jpg";
import seemtApp from "@/public/seemt-app.png";
import ttlDashboard from "@/public/ttl-dashboard.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated BTEC FPT",
    location: "Building F, Software Park Quang Trung, Tan Chanh Hiep ward, 12 district, HCM City",
    description: "I graduated after about 2 years of studying. I chosen core is front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "08/2017 - 06/2020",
  },
  {
    title: "Front-End Developer",
    location: "303, Pham Van Dong street, Ward 1, District Go Vap, HCM City",
    description: "I worked as a front-end developer for about 1 year in company product start up.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "IOS Developer",
    location: "303, Pham Van Dong street, Ward 1, District Go Vap, HCM City",
    description: "After this i as a ios developer for about more than 1 year in right this company.",
    icon: React.createElement(FaSwift),
    date: "2023 - 2024",
  },
  {
    title: "Front-End Developer",
    location: "92, Yen The street, Ward 2, District Tan Binh, HCM City",
    description: " To meet the job requirements, I learned about the react and react native use typescript. And worked with react and react native use typescript",
    icon: React.createElement(FaReact),
    date: "2024 - 2025",
  },
  {
    title: "Front-End Developer",
    location: "42, Luong Ngoc Quyen street, Ward 5, District Go Vap, HCM City",
    description:
      "I'm now a front-end developer working as a freelancer. My stack includes React, React Native, Next.js, TypeScript, Tailwind and Swift. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2025 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Techres Seemt - Operations Management",
    description: "I worked as a ios developer on this startup project for about 2 years. This application can manage all the business processes of the restaurant, including human resource management.",
    tags: ["Swift 5", "Socket.io", "Firebase", "Push Notification", "Rest API", "Realm"],
    imageUrl: seemtApp,
  },
  {
    title: "ViHo - Expense Management",
    description:
      "A mobile app for quick expense management. It's built with React Native and has features expense management. Data is stored local storage.",
    tags: ["React Native", "MMKV", "Tailwind", "React Navigation", "Gifted Charts"],
    imageUrl: vihoImg,
  },
  {
    title: "TTL Dashboard",
    description:
      "I worked as a front-end developer for about more than 1 year. Users can management products, orders, customer, affiliate and partner to website.",
    tags: ["React", "React Redux", "Tailwind", "Easy Email Editor", "Mantine Datatable", "Rest API"],
    imageUrl: ttlDashboard,
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Nest.js",
  "MongoDB",
  "Resend Email",
  "Easy Email",
  "Swift",
  "SwiftUI",
  "Socket.io",
  "Firebase",
  "Push notifications",
  "Git",
  "Tailwind",
  "Bootstrap",
  "React Redux",
  "Framer Motion",
] as const;
