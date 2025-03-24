"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/src/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating, I decided to pursue my
        passion for programming. I self-study in a coding website, youtube and learned{" "}
        <span className="font-medium">web development after a long time without programming due to influence epidemic Covid</span>.{" "}
        I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, React Native and Next.js
        </span>
        . I am also familiar with <span className="font-medium">TypeScript and Swift</span>. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">{`When I'm not coding`}</span>, I enjoy playing
        video games, watching movies, and playing football. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">finance and business</span>. {`I'm`} also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
