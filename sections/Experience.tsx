"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, Castle, Ghost, Coins, Terminal, Zap, Star } from "lucide-react";

const EXPERIENCES = [
    {
        id: "sahidawa",
        title: "Creator & Lead Developer",
        company: "SahiDawa",
        date: "JAN 2025 - PRESENT",
        location: "REMOTE",
        description: [
            "Leading the development of an open-source platform that helps citizens verify medicines and report suspicious drugs.",
            "Architecting the system for low-bandwidth environments with multi-lingual access across India.",
        ],
        tech: ["Next.js", "Firebase", "TailwindCSS"],
        icon: Castle,
        color: "text-cyan-400",
        shadow: "shadow-cyan-400/50",
        x: 20,
        y: 10,
    },
    {
        id: "apdcl",
        title: "Summer Software Engineer Intern",
        company: "Assam Power Distribution Company Limited (APDCL)",
        date: "JUN 2024 - JUL 2024",
        location: "GUWAHATI, ASSAM",
        description: [
            "Developed GridMind, an asset monitoring system processing time-series telemetry data with FastAPI, Celery, and Redis.",
            "Logged power grid metrics in TimescaleDB and mapped transformer locations utilizing PostgreSQL/PostGIS.",
            "Created data visualization dashboards in Next.js leveraging Tremor and Recharts for outage analysis.",
        ],
        tech: ["FastAPI", "Celery", "Redis", "TimescaleDB", "PostgreSQL", "PostGIS", "Docker"],
        icon: Zap,
        color: "text-yellow-400",
        shadow: "shadow-yellow-400/50",
        x: 60,
        y: 35,
    },
    {
        id: "r12",
        title: "Project Lead (Web & Automation)",
        company: "R-12 IT SOLUTION",
        date: "JUN 2024 - AUG 2024",
        location: "LANKA, ASSAM",
        description: [
            "Led frontend development for a large-scale e-commerce platform using Next.js and Tailwind CSS.",
            "Implemented an automated Google Apps Script (JavaScript) for form submissions, saving 25+ hours of manual data entry per week.",
        ],
        tech: ["Next.js", "Tailwind CSS", "Google Apps Script", "JavaScript"],
        icon: Gamepad2,
        color: "text-purple-400",
        shadow: "shadow-purple-400/50",
        x: 30,
        y: 65,
    },
    {
        id: "freelance",
        title: "Freelance Full Stack Developer",
        company: "Self-Employed",
        date: "JAN 2024 - PRESENT",
        location: "REMOTE",
        description: [
            "Building customized, high-performance web applications and automated workflows for diverse clients.",
            "Focusing on scalable architectures and modern UI/UX principles to deliver end-to-end solutions.",
        ],
        tech: ["React", "Node.js", "TypeScript", "MongoDB", "Express"],
        icon: Ghost,
        color: "text-emerald-400",
        shadow: "shadow-emerald-400/50",
        x: 75,
        y: 85,
    },
];

export default function Experience() {
    const [hoveredLevel, setHoveredLevel] = useState<string | null>(null);

    return (
        <section id="experience" className="w-full py-24 relative overflow-hidden bg-slate-950 retro-scanlines">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* Retro Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-3 text-yellow-400 font-mono font-black text-xl md:text-2xl tracking-widest uppercase drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]">
                        <Star className="w-6 h-6 animate-pulse" fill="currentColor" />
                        <span>Select Level</span>
                        <Star className="w-6 h-6 animate-pulse" fill="currentColor" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white font-mono uppercase tracking-tight drop-shadow-[4px_4px_0_rgba(6,182,212,0.8)]">
                        Experience Map
                    </h2>
                    <p className="text-cyan-400 font-mono text-sm uppercase tracking-widest mt-2 animate-blink">
                        Insert Coin to Continue...
                    </p>
                </div>

                {/* The Arcade Map Container */}
                <div className="relative w-full aspect-[4/5] md:aspect-[21/9] bg-slate-900/40 border-4 border-cyan-800 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.15)] pixel-border p-4 md:p-8">
                    
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                    {/* Dotted Connection Path (SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
                        <path
                            d={`M 20% 10% 
                                C 40% 10%, 40% 35%, 60% 35% 
                                C 80% 35%, 50% 65%, 30% 65%
                                C 10% 65%, 50% 85%, 75% 85%`}
                            fill="none"
                            stroke="rgba(6,182,212,0.4)"
                            strokeWidth="4"
                            strokeDasharray="12 12"
                            className="drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]"
                        />
                    </svg>

                    {/* Level Nodes */}
                    {EXPERIENCES.map((exp, index) => {
                        const Icon = exp.icon;
                        const isHovered = hoveredLevel === exp.id;

                        return (
                            <div
                                key={exp.id}
                                className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                                style={{ left: `${exp.x}%`, top: `${exp.y}%` }}
                                onMouseEnter={() => setHoveredLevel(exp.id)}
                                onMouseLeave={() => setHoveredLevel(null)}
                            >
                                {/* Level Number Label */}
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-slate-400 uppercase tracking-widest whitespace-nowrap bg-slate-950 px-2 border border-slate-800 rounded">
                                    Lvl {EXPERIENCES.length - index}
                                </div>

                                {/* Node Icon */}
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    className={`relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-slate-950 border-4 ${isHovered ? 'border-white' : 'border-slate-700'} rounded-lg ${exp.color} pixel-border transition-colors duration-200`}
                                >
                                    <Icon className={`w-8 h-8 ${isHovered ? 'animate-pulse drop-shadow-[0_0_8px_currentColor]' : ''}`} />
                                    
                                    {/* Glowing Base */}
                                    <div className={`absolute -bottom-2 w-10 h-2 bg-current blur-md opacity-50`} />
                                </motion.div>

                                {/* Title below node */}
                                <div className={`absolute top-full mt-3 left-1/2 -translate-x-1/2 text-center transition-opacity duration-200 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                                    <div className={`text-xs font-mono font-bold whitespace-nowrap ${exp.color} drop-shadow-[0_0_2px_currentColor]`}>
                                        {exp.company}
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Hover Stats Popup */}
                    <AnimatePresence>
                        {hoveredLevel && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                className="absolute bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 md:w-96 z-50 pointer-events-none"
                            >
                                {EXPERIENCES.map((exp) => exp.id === hoveredLevel && (
                                    <div key={`popup-${exp.id}`} className="bg-slate-950 border-4 border-white pixel-border p-5 shadow-[8px_8px_0_rgba(6,182,212,0.4)]">
                                        
                                        {/* Popup Header */}
                                        <div className="flex justify-between items-start mb-3 border-b-2 border-slate-800 pb-2">
                                            <div>
                                                <div className={`text-sm font-mono font-black uppercase ${exp.color} drop-shadow-[0_0_5px_currentColor]`}>
                                                    {exp.company}
                                                </div>
                                                <div className="text-xs font-mono text-white mt-1">
                                                    {exp.title}
                                                </div>
                                            </div>
                                            <div className="text-[9px] font-mono text-slate-400 text-right">
                                                <div>{exp.date}</div>
                                                <div>{exp.location}</div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="space-y-2 mb-4">
                                            {exp.description.map((desc, i) => (
                                                <div key={i} className="flex gap-2 text-xs font-mono text-slate-300 leading-relaxed">
                                                    <span className={exp.color}>{">"}</span>
                                                    <span>{desc}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-1.5 mt-auto">
                                            {exp.tech.map((t, i) => (
                                                <span key={i} className="px-1.5 py-0.5 bg-slate-900 border border-slate-700 text-[9px] font-mono text-slate-400 uppercase">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                    
                </div>
            </div>
        </section>
    );
}
