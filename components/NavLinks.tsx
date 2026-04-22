"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function NavLinks({ isMobile = false }) {
    const [activeSection, setActiveSection] = useState("");

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
            setActiveSection(currentPath);
        };
        window.addEventListener("scroll", handleScroll);
        setTimeout(handleScroll, 100); // Initial check after paint
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <ul className={`flex ${isMobile ? "flex-col items-center gap-6" : "items-center gap-1"}`}>
            {links.map((link) => {
                const isClient = typeof window !== "undefined";
                const isActive = activeSection === link.href || (activeSection === "" && link.href === "#projects" && isClient && window.scrollY < 400); // Fallback logic
                
                return (
                    <li key={link.name} className="relative z-10">
                        <Link
                            href={link.href}
                            onClick={() => setActiveSection(link.href)}
                            className={`relative z-10 block px-5 py-2 text-sm font-bold tracking-wide transition-colors duration-300 ${
                                isActive
                                    ? "text-white"
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            {link.name}
                        </Link>
                        {isActive && (
                            <motion.div
                                layoutId={`magic-pill-${isMobile ? "mobile" : "desktop"}`}
                                className="absolute inset-0 z-0 rounded-full bg-linear-to-r from-blue-500/20 to-purple-500/20 border border-white/10 shadow-sm"
                                transition={{ type: "spring", stiffness: 400, damping: 35 }}
                            />
                        )}
                    </li>
                );
            })}
        </ul>
    );
}
