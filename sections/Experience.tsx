"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useSpring, useInView, useTransform } from "framer-motion";
import { Briefcase, GitPullRequest, Code2, Trophy, Database, Server, Activity, Radio, Terminal } from "lucide-react";

const experiences = [
    {
        id: 0,
        role: "Creator & Lead Developer",
        company: "SahiDawa",
        date: "Jan 2025 – Present",
        location: "Remote",
        icon: <Activity className="w-4 h-4 text-cyan-500" />,
        tech: ["Next.js", "Firebase", "TailwindCSS"],
        points: [
            "Leading the development of an open-source platform that helps citizens verify medicines and report suspicious drugs.",
            "Architecting the system for low-bandwidth environments with multi-lingual access across India."
        ]
    },
    {
        id: 1,
        role: "Summer Software Engineer Intern",
        company: "Assam Power Distribution Company Limited (APDCL)",
        date: "Jun 2026 – Present",
        location: "Guwahati, Assam",
        icon: <Server className="w-4 h-4 text-cyan-500" />,
        tech: ["FastAPI", "Celery", "Redis", "TimescaleDB", "PostgreSQL", "PostGIS", "Docker"],
        points: [
            "Developing GridMind, an asset monitoring system processing time-series telemetry data with FastAPI, Celery, and Redis.",
            "Logging power grid metrics in TimescaleDB and mapping transformer locations utilizing PostgreSQL/PostGIS."
        ]
    },
    {
        id: 2,
        role: "Project Admin – LegalHub",
        company: "GirlScript Summer of Code 2025",
        date: "May 2025 – Aug 2025",
        location: "Remote",
        icon: <Trophy className="w-4 h-4 text-cyan-500" />,
        tech: ["Express.js", "MongoDB", "Mistral AI", "Socket.io"],
        points: [
            "Led code reviews for 33+ contributors across 80+ PRs on LegalHub; ranked #53 on GSSoC leaderboard.",
            "Architected MVC backend; shipped AI legal Q&A and real-time WebSocket chat.",
            "Set up CI/CD via GitHub Actions with automated Jest test runs across 11 modules."
        ]
    },
    {
        id: 3,
        role: "Signal & Telecom Field Trainee",
        company: "Northeast Frontier Railway",
        date: "Jun 2025 – Jul 2025",
        location: "Guwahati",
        icon: <Radio className="w-4 h-4 text-cyan-500" />,
        tech: ["Signal Engineering", "Telecom Infra"],
        points: [
            "Completed intensive field training within the Signal & Telecom Department under the Dy. CSTE/Network office.",
            "Gained hands-on insights into railway networking architecture, telecommunications infrastructure, and signal engineering."
        ]
    },
    {
        id: 4,
        role: "Semifinalist – LearnSight",
        company: "Hack-A-Thon: AI for Education 2025",
        date: "Feb 2025",
        location: "Remote",
        icon: <Trophy className="w-4 h-4 text-cyan-500" />,
        tech: ["Next.js", "Firebase", "AI Integration"],
        points: [
            "Built an AI-powered adaptive diagnostic engine with Next.js and Firebase that dynamically adjusts question difficulty.",
            "Integrated real-time Firestore synchronization and a radar chart visualization to map student learning dimensions."
        ]
    },
    {
        id: 5,
        role: "Full Stack Developer Intern",
        company: "InnoByte Services",
        date: "Oct – Dec 2024",
        location: "Remote",
        icon: <Database className="w-4 h-4 text-cyan-500" />,
        tech: ["Node.js", "Express", "MongoDB", "Joi"],
        points: [
            "Architected the backend for a scalable e-commerce application using Node.js, Express, and MongoDB.",
            "Built robust RESTful APIs for product management, secure JWT authentication, and order processing with Joi validation."
        ]
    },
    {
        id: 6,
        role: "Open Source Contributor",
        company: "GSSoC Ext & Hacktoberfest",
        date: "Oct – Nov 2024",
        location: "Remote",
        icon: <GitPullRequest className="w-4 h-4 text-cyan-500" />,
        tech: ["Open Source", "Backend Optimization"],
        points: [
            "Merged 83+ PRs across multiple open-source repos; resolved critical backend bugs and optimized aggregation pipelines.",
            "Earned Hacktoberfest SuperContributor 2024 (6/6 fast-approved core optimizations)."
        ]
    },
    {
        id: 7,
        role: "CS Subject Matter Expert",
        company: "Chegg India",
        date: "Apr 2023 – Oct 2024",
        location: "Remote",
        icon: <Code2 className="w-4 h-4 text-cyan-500" />,
        tech: ["DSA", "System Design", "DBMS"],
        points: [
            "Evaluated and authored solutions for 500+ complex technical problems across DSA, System Design, and DBMS.",
            "Maintained a 4.8/5 quality rating over 18 months, breaking down advanced computing concepts."
        ]
    }
];

interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    date: string;
    location: string;
    icon: React.ReactNode;
    tech?: string[];
    points: string[];
}

const ExperienceCard = ({ exp, index }: { exp: ExperienceItem, index: number }) => {
    const isEven = index % 2 === 0;
    const cardRef = useRef<HTMLDivElement>(null);
    const isFocused = useInView(cardRef, { margin: "-25% 0px -25% 0px" });

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} group mb-12 md:mb-24`}
        >
            {/* Timeline Node - Blueprint Diamond */}
            <div className="absolute left-8 md:left-1/2 w-8 h-8 -translate-x-1/2 z-20 hidden md:flex items-center justify-center rotate-45">
                <motion.div 
                    className={`w-full h-full border transition-all duration-700 ease-out ${
                        isFocused 
                            ? "bg-slate-100 dark:bg-slate-900 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]" 
                            : "bg-slate-50 dark:bg-slate-950 border-slate-300 dark:border-slate-800"
                    }`}
                />
                <motion.div 
                    className={`absolute w-3 h-3 transition-all duration-700 delay-100 ${
                        isFocused ? "bg-cyan-500 shadow-[0_0_10px_#67e8f9]" : "bg-slate-300 dark:bg-slate-700"
                    }`} 
                />
            </div>

            {/* Mobile Node */}
            <div className="absolute left-8 w-4 h-4 rounded-full -translate-x-1/2 z-20 flex md:hidden items-center justify-center mt-6">
                <div className={`w-full h-full rounded-full transition-all duration-700 ${
                    isFocused ? "bg-cyan-500 shadow-[0_0_12px_rgba(34,211,238,0.5)]" : "bg-slate-300 dark:bg-slate-700 border border-slate-300 dark:border-slate-800"
                }`} />
            </div>

            {/* Content Container */}
            <div className={`w-full md:w-[45%] ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'} pl-16 md:pl-0`}>
                <div 
                    ref={cardRef}
                    className={`relative p-6 sm:p-8 rounded-2xl transition-all duration-700 ease-out 
                        bg-white/80 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-slate-800
                        hover:border-cyan-500/40 hover:shadow-[0_8px_30px_rgba(6,182,212,0.1)]
                        ${isFocused ? "scale-100 opacity-100 translate-y-0" : "scale-[0.97] opacity-60 translate-y-4"}
                    `}
                >
                    {/* Top accent line matching Projects.tsx */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                        style={{ background: "linear-gradient(90deg, transparent, #22d3ee 50%, transparent)" }}
                    />

                    {/* Header */}
                    <div className={`flex flex-col sm:flex-row items-start gap-4 mb-6 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 flex shrink-0 transition-all duration-500 ${isFocused ? 'border-cyan-300/50 dark:border-cyan-700/50 bg-cyan-50/50 dark:bg-cyan-950/40 scale-110' : ''}`}>
                            {exp.icon}
                        </div>
                        <div className="flex-1 w-full">
                            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                                {exp.role}
                            </h3>
                            <div className="text-sm font-semibold text-cyan-700 dark:text-cyan-400 font-mono mt-1">{exp.company}</div>
                            
                            <div className={`flex flex-wrap items-center gap-3 text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-3 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 backdrop-blur-sm">
                                    {exp.date}
                                </span>
                                <span className="opacity-50">{"//"}</span>
                                <span>{exp.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Description Points */}
                    <ul className={`space-y-3 list-none pl-0 ${isEven ? 'md:text-right' : 'text-left'}`}>
                        {exp.points.map((point: string, i: number) => (
                            <li key={i} className={`flex items-start gap-3 text-xs text-slate-600 dark:text-slate-300 font-mono leading-relaxed ${isEven ? 'md:flex-row-reverse' : 'flex-row'}`}>
                                <span className="text-cyan-500 mt-[2px]">▹</span>
                                <span className="flex-1">{point}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Tech Tags */}
                    {exp.tech && (
                        <div className={`flex flex-wrap gap-1.5 mt-6 pt-6 border-t border-slate-200 dark:border-slate-800/60 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                            {exp.tech.map((t: string, i: number) => (
                                <span key={i} className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 group-hover:border-cyan-500/30 transition-colors duration-300">
                                    {t}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

    return (
        <section id="experience" className="w-full px-4 md:px-6 py-16 md:py-24 relative overflow-hidden" ref={containerRef}>
            {/* Background ambience consistent with Projects.tsx */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.02, 0.04, 0.02] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px]"
                />
                <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
                    style={{
                        backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                    }}
                />
            </div>

            <div className="mx-auto max-w-6xl relative z-10">
                {/* Header Section matching Projects.tsx */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 mb-5">
                        <div className="flex gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                        </div>
                        <span className="font-mono text-xs text-slate-500 ml-2">~/portfolio/experience</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 dark:text-white tracking-tight uppercase">
                        Experience & <br className="md:hidden" />
                        <span className="bg-linear-to-r from-slate-700 to-cyan-600 dark:from-white dark:to-cyan-400 bg-clip-text text-transparent">
                            Internships
                        </span>
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-500 font-mono max-w-xl mt-4">
                        {"//"} career journey · open-source leadership · architectural challenges
                    </p>
                </motion.div>

                {/* Ribbon Timeline Container */}
                <div className="relative mt-8">
                    {/* SVG Winding Ribbon Base (Tech Blueprint Style) */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:w-full -translate-x-1/2 overflow-visible hidden md:block z-0 pointer-events-none opacity-50 dark:opacity-40">
                        <svg className="w-full h-full" preserveAspectRatio="none">
                            <path 
                                d="M 50% 0 Q 30% 10%, 50% 20% T 50% 40% Q 70% 50%, 50% 60% T 50% 80% Q 30% 90%, 50% 100%" 
                                fill="none" 
                                className="stroke-slate-300 dark:stroke-slate-700"
                                strokeWidth="2" 
                                strokeDasharray="4 4"
                            />
                        </svg>
                    </div>

                    {/* Base Vertical Line (Mobile & fallback) */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 -translate-x-1/2 z-0" />
                    
                    {/* Scrolling Blueprint Ribbon Effect */}
                    <motion.div 
                        className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 origin-top z-10"
                        style={{ scaleY, opacity }}
                    >
                        <div className="w-full h-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                    </motion.div>

                    {/* Nodes Container */}
                    <div className="relative z-10 w-full pt-10">
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={exp.id} exp={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
