"use client";

import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { useActiveSectionContext } from "@/src/context/active-section-context";

export default function ScrollToTopBtn() {

    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <button
            id="scroll-to-top-btn"
            className="fixed bottom-20 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border-2 border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 cursor-pointer duration-300 ease-linear"
            onClick={() => {
                setActiveSection("Home");
                setTimeOfLastClick(Date.now());
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
        >
            <FaArrowUp />
        </button >
    );
}
