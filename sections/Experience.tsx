"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { Briefcase, GitPullRequest, Code2, Trophy, Database, Server, Activity, Radio } from "lucide-react";

const experiences = [
    {
        id: 0,
        role: "Creator & Lead Developer",
        company: "SahiDawa",
        date: "Jan 2025 – Present",
        location: "Remote",
        icon: <Activity className="w-6 h-6 text-teal-400" />,
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
        icon: <Server className="w-6 h-6 text-emerald-400" />,
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
        icon: <Briefcase className="w-6 h-6 text-cyan-400" />,
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
        icon: <Radio className="w-6 h-6 text-indigo-400" />,
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
        icon: <Trophy className="w-6 h-6 text-amber-400" />,
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
        icon: <Database className="w-6 h-6 text-blue-400" />,
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
        icon: <GitPullRequest className="w-6 h-6 text-rose-400" />,
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
        icon: <Code2 className="w-6 h-6 text-emerald-400" />,
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
        icon: <Server className="w-6 h-6 text-orange-400" />,
        tech: ["Cisco IOS", "PuTTY", "VLAN", "Routing"],
        points: [
            "Gained hands-on experience setting up and maintaining network systems, including enterprise routers and switches.",
            "Navigated device CLIs and utilized tools to execute configuration commands and diagnose network issues."
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
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} group`}
        >
            {/* Animated Timeline Diamond Node */}
            <div className="absolute left-8 md:left-[50%] w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center -translate-x-1/2 rotate-45 z-20 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-500 hidden md:flex">
                <div className="w-3 h-3 rounded-sm bg-slate-700 group-hover:bg-cyan-400 transition-colors duration-500 group-hover:shadow-[0_0_15px_rgba(6,182,212,1)]" />
            </div>

            {/* Mobile Timeline Node */}
            <div className="absolute left-8 w-6 h-6 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center -translate-x-1/2 z-20 group-hover:border-cyan-500/50 transition-all duration-500 md:hidden mt-6">
                <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors duration-500" />
            </div>

            {/* Content Card */}
            <div className={`w-full md:w-[47%] ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'} pl-16 md:pl-0`}>
                <div 
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative p-6 sm:p-8 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 overflow-hidden shadow-md dark:shadow-xl hover:shadow-cyan-900/10 dark:hover:shadow-cyan-900/20 transition-all duration-500"
                >
                    {/* Spotlight Mouse Tracking Effect */}
                    <div 
                        className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out pointer-events-none"
                        style={{
                            opacity: isHovered ? 1 : 0,
                            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6,182,212,0.06), transparent 40%)`,
                        }}
                    />
                    
                    <div className="relative z-10">
                        {/* Header Area */}
                        <div className={`flex flex-col sm:flex-row items-start gap-5 mb-6 ${isEven ? 'md:flex-row-reverse md:text-right' : 'text-left'}`}>
                            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-inner group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-500 shrink-0">
                                {exp.icon}
                            </div>
                            <div className="flex-1 w-full">
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-300">{exp.role}</h3>
                                <div className="text-sm font-mono text-cyan-600 dark:text-cyan-400/80 mt-1">{exp.company}</div>
                                
                                <div className={`flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-3 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                                    <span className="px-2 py-1 bg-cyan-50 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-400/80 rounded border border-cyan-200 dark:border-cyan-900/30 font-bold tracking-widest">{exp.date}</span>
                                    <span className="hidden sm:inline">{"//"}</span>
                                    <span>{exp.location}</span>
                                </div>
                            </div>
                        </div>

                        {/* Bullet Points */}
                        <ul className={`text-sm text-slate-600 dark:text-slate-400 leading-relaxed space-y-3 list-none pl-0 mt-6 ${isEven ? 'md:text-right' : 'text-left'}`}>
                            {exp.points.map((point: string, i: number) => (
                                <li key={i} className={`flex items-start gap-3 ${isEven ? 'md:flex-row-reverse' : 'flex-row'}`}>
                                    <span className="text-cyan-600 dark:text-cyan-500/60 mt-1 select-none text-[10px]">❖</span>
                                    <span className="flex-1 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors duration-300">{point}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Tech Stack Badges */}
                        {exp.tech && (
                            <div className={`flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-200 dark:border-slate-800/50 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                                {exp.tech.map((t: string, i: number) => (
                                    <span key={i} className="px-3 py-1 text-[10px] font-mono bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 rounded-md group-hover:border-cyan-500/30 dark:group-hover:border-cyan-900/60 group-hover:text-cyan-800 dark:group-hover:text-cyan-100 transition-colors duration-300 shadow-xs">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    // Scroll Progress for Timeline
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="experience" className="w-full px-4 py-32 md:px-6 relative overflow-hidden" ref={containerRef}>
            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/5 dark:bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="mx-auto max-w-5xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center mb-24 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800/30 mb-6 shadow-xs">
                        <Briefcase className="w-4 h-4 text-cyan-600 dark:text-cyan-500" />
                        <span className="text-xs font-mono tracking-widest text-cyan-600 dark:text-cyan-400 uppercase font-semibold">SYS_LOG // CAREER</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight mb-4">
                        Experience & <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-400">Internships</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 font-mono text-sm max-w-xl">
                        {"// " + "Tracking my professional timeline, open-source leadership, and architectural challenges."}
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Base Dim Line */}
                    <div className="absolute left-8 md:left-[50%] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />
                    
                    {/* Scroll Animated Glow Line */}
                    <motion.div 
                        className="absolute left-8 md:left-[50%] top-0 bottom-0 w-px md:w-[2px] bg-linear-to-b from-cyan-600 via-teal-600 to-transparent dark:from-cyan-400 dark:via-teal-400 dark:to-transparent -translate-x-1/2 origin-top drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] z-10"
                        style={{ scaleY }}
                    />

                    <div className="space-y-16 md:space-y-24">
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={exp.id} exp={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
