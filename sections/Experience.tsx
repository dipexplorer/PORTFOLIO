"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import { Briefcase, GitPullRequest, Code2, Trophy, Database, Server, Activity, Radio } from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────────
const experiences = [
    {
        id: 0,
        role: "Creator & Lead Developer",
        company: "SahiDawa",
        date: "Jan 2025 – Present",
        location: "Remote",
        icon: <Activity className="w-5 h-5" />,
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
        icon: <Server className="w-5 h-5" />,
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
        icon: <Briefcase className="w-5 h-5" />,
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
        icon: <Radio className="w-5 h-5" />,
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
        icon: <Trophy className="w-5 h-5" />,
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
        icon: <Database className="w-5 h-5" />,
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
        icon: <GitPullRequest className="w-5 h-5" />,
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
        icon: <Code2 className="w-5 h-5" />,
        tech: ["DSA", "System Design", "DBMS"],
        points: [
            "Evaluated and authored solutions for 500+ complex technical problems across DSA, System Design, and DBMS.",
            "Maintained a 4.8/5 quality rating over 18 months, breaking down advanced computing concepts."
        ]
    },
    {
        id: 8,
        role: "Computer Networking Intern",
        company: "Trans Virtual Private Limited",
        date: "Jan 2024",
        location: "Guwahati",
        icon: <Server className="w-5 h-5" />,
        tech: ["Cisco IOS", "PuTTY", "VLAN", "Routing"],
        points: [
            "Gained hands-on experience setting up and maintaining network systems, including enterprise routers and switches.",
            "Navigated device CLIs and utilized tools to execute configuration commands and diagnose network issues."
        ]
    }
];

// ─── Math & Physics ────────────────────────────────────────────────────────────
function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// ─── 3D Experience Node ────────────────────────────────────────────────────────
const ExperienceNode = ({
    exp,
    index,
    total,
    scrollYProgress,
}: {
    exp: typeof experiences[0];
    index: number;
    total: number;
    scrollYProgress: MotionValue<number>;
}) => {
    // 1. Determine active window
    const start = index / total;
    const active = start + 1 / (total * 2);
    
    // 2. Physics Transforms
    // Wrap scrollYProgress in useSpring mathematically inside useTransform to prevent Safari native WAAPI crash on negative values
    // Using opacity and CSS 2D transforms (no heavy preserve-3d) to ensure smooth 60fps
    
    const scale = useTransform(scrollYProgress, 
        [active - 0.25, active - 0.1, active + 0.1, active + 0.25], 
        [0.4, 1, 1, 0.4]
    );

    const opacity = useTransform(scrollYProgress, 
        [active - 0.2, active - 0.05, active + 0.05, active + 0.2], 
        [0, 1, 1, 0]
    );

    const yOffset = useTransform(scrollYProgress,
        [active - 0.25, active],
        [150, 0]
    );
    
    const yOffsetExit = useTransform(scrollYProgress,
        [active, active + 0.25],
        [0, -150]
    );

    const translateY = useTransform(scrollYProgress, (v) => {
        if (v < active) return yOffset.get();
        return yOffsetExit.get();
    });

    const rotateX = useTransform(scrollYProgress, 
        [active - 0.2, active, active + 0.2], 
        [45, 0, -45]
    );

    return (
        <motion.div
            className="absolute top-1/2 left-1/2 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 will-change-transform"
            style={{
                scale,
                opacity,
                y: translateY,
                rotateX,
                pointerEvents: useTransform(opacity, (v) => v > 0.8 ? "auto" : "none"),
                zIndex: useTransform(scale, (v) => Math.round(v * 100))
            }}
        >
            <div className="relative p-6 sm:p-10 rounded-2xl bg-white/10 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row gap-6">
                
                {/* Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-60 bg-linear-to-r from-transparent via-cyan-500 to-transparent" />

                {/* Left Side: Meta */}
                <div className="md:w-1/3 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800/60 pb-6 md:pb-0 md:pr-6">
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-700/50 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-5 shadow-inner">
                            {exp.icon}
                        </div>
                        <div className="font-mono text-[11px] font-bold tracking-widest text-cyan-600 dark:text-cyan-500 mb-1">
                            {exp.date}
                        </div>
                        <div className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                            {exp.location}
                        </div>
                    </div>

                    {/* Tech Badges */}
                    {exp.tech && (
                        <div className="flex flex-wrap gap-1.5 mt-6">
                            {exp.tech.map((t, i) => (
                                <span key={i} className="px-2 py-0.5 text-[10px] font-mono border rounded bg-slate-100 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                                    {t}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right Side: Content */}
                <div className="md:w-2/3 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
                        {exp.role}
                    </h3>
                    <div className="text-lg font-semibold text-cyan-700 dark:text-cyan-400 mb-6">
                        {exp.company}
                    </div>

                    <ul className="space-y-4">
                        {exp.points.map((point, i) => (
                            <li key={i} className="flex items-start text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                                <span className="text-cyan-500 mr-3 mt-1 shrink-0 font-bold">❖</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </motion.div>
    );
};

// ─── Main Section ──────────────────────────────────────────────────────────────
export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const timelineHeight = experiences.length * 100; // 100vh per item

    // Raw scroll progress
    const { scrollYProgress: rawScrollY } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Spring wrapper to fix WAAPI errors on negative scroll / out of bounds
    const scrollYProgress = useSpring(rawScrollY, {
        stiffness: 400,
        damping: 40,
        restDelta: 0.001
    });

    return (
        <section 
            id="experience" 
            ref={containerRef}
            className="w-full relative bg-slate-50 dark:bg-[#020617]"
            style={{ height: `${timelineHeight}vh` }}
        >
            {/* Sticky Viewport */}
            <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center perspective-[1200px]">
                
                {/* Background Ambience */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/10 dark:bg-cyan-900/20 rounded-full blur-[150px]" />
                    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
                        style={{
                            backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
                            backgroundSize: "32px 32px",
                        }}
                    />
                </div>

                {/* Central Axis Glow Line */}
                <div className="absolute top-1/2 left-1/2 w-full h-[1px] -translate-x-1/2 -translate-y-1/2 bg-cyan-500/10 dark:bg-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.2)]" />
                <div className="absolute top-1/2 left-1/2 w-[1px] h-full -translate-x-1/2 -translate-y-1/2 bg-cyan-500/10 dark:bg-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.2)]" />

                {/* Title Overlay in Background */}
                <div className="absolute top-10 w-full text-center z-0 opacity-20 pointer-events-none select-none">
                    <h2 className="text-[10vw] font-black text-slate-800 dark:text-slate-100 tracking-tighter uppercase whitespace-nowrap opacity-10">
                        SYS_LOG
                    </h2>
                </div>

                {/* Render the 3D Timeline Nodes */}
                <div className="relative w-full max-w-5xl mx-auto px-4 h-full">
                    {experiences.map((exp, index) => (
                        <ExperienceNode 
                            key={exp.id} 
                            exp={exp} 
                            index={index} 
                            total={experiences.length} 
                            scrollYProgress={scrollYProgress} 
                        />
                    ))}
                </div>

                {/* Progress Indicators */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-50">
                    {experiences.map((_, i) => (
                        <motion.div 
                            key={i}
                            className="h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                            style={{
                                width: useTransform(scrollYProgress, (v) => {
                                    const start = i / experiences.length;
                                    const end = (i + 1) / experiences.length;
                                    const active = v >= start && v < end;
                                    return active ? 24 : 6;
                                }),
                                opacity: useTransform(scrollYProgress, (v) => {
                                    const start = i / experiences.length;
                                    const end = (i + 1) / experiences.length;
                                    const active = v >= start && v < end;
                                    return active ? 1 : 0.3;
                                })
                            }}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
