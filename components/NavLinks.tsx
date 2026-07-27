"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function NavLinks({ isMobile = false }: { isMobile?: boolean }) {
    const [activeSection, setActiveSection] = useState(links[0]?.href ?? "");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]");
            let currentPath = "";
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                // If the section is scrolled into view (past half the screen)
                if (sectionTop < window.innerHeight * 0.4) {
                    currentPath = "#" + section.getAttribute("id");
                }
            });
            setActiveSection(currentPath || (links[0]?.href ?? ""));
        };
        window.addEventListener("scroll", handleScroll);
        setTimeout(handleScroll, 100); // Initial check after paint
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <ul className={`flex ${isMobile ? "flex-col items-center gap-6" : "items-center gap-1"} font-mono`}>
            {links.map((link) => {
                const isActive = activeSection === link.href;
                
                return (
                    <li key={link.name} className="relative z-10">
                        <Link
                            href={link.href}
                            onClick={() => setActiveSection(link.href)}
                            className={`relative z-10 block px-5 py-2 text-xs font-bold tracking-widest transition-colors duration-300 ${
                                isActive
                                    ? "text-cyan-600 dark:text-cyan-400"
                                    : "text-slate-500 dark:text-slate-400 hover:text-cyan-700 dark:hover:text-cyan-300"
                            }`}
                        >
                            {link.name}
                        </Link>
                        {isActive && (
                            <motion.div
                                layoutId={`magic-pill-${isMobile ? "mobile" : "desktop"}`}
                                className="absolute inset-0 z-0 rounded-full bg-cyan-100/50 dark:bg-cyan-950/40 border border-cyan-300 dark:border-cyan-500/30 shadow-xs dark:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-colors duration-300"
                                transition={{ type: "spring", stiffness: 400, damping: 35 }}
                            />
                        )}
                    </li>
                );
            })}
        </ul>
    );
}
