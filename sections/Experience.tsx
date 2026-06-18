"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GitPullRequest, Code2, Trophy, Database, Server, Activity, Radio } from "lucide-react";

export default function Experience() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const experiences = [
        {
            id: 0,
            role: "Creator & Lead Developer",
            company: "SahiDawa",
            date: "Jan 2025 – Present",
            location: "Remote",
            icon: <Activity className="w-5 h-5 text-teal-400" />,
            points: [
                "Leading the development of an open-source platform that helps citizens verify medicines and report suspicious drugs.",
                "Architecting the system for low-bandwidth environments with multi-lingual access across India, built with Next.js and Firebase."
            ]
        },
        {
            id: 1,
            role: "Project Admin – LegalHub",
            company: "GirlScript Summer of Code (GSSoC) 2025",
            date: "May 2025 – Aug 2025",
            location: "Remote",
            icon: <Briefcase className="w-5 h-5 text-cyan-400" />,
            points: [
                "Led code reviews for 33+ contributors across 80+ PRs on LegalHub (18 stars, 56 forks); ranked #53 on GSSoC leaderboard.",
                "Architected MVC backend with Express.js and MongoDB; shipped Mistral AI legal Q&A and real-time WebSocket chat.",
                "Set up CI/CD via GitHub Actions with automated Jest test runs across 11 modules."
            ]
        },
        {
            id: 2,
            role: "Signal & Telecom Field Trainee",
            company: "Northeast Frontier Railway",
            date: "Jun 2025 – Jul 2025",
            location: "Guwahati",
            icon: <Radio className="w-5 h-5 text-purple-400" />,
            points: [
                "Completed intensive field training within the Signal & Telecom Department under the Dy. CSTE/Network office.",
                "Gained hands-on insights into railway networking architecture, telecommunications infrastructure, and signal engineering."
            ]
        },
        {
            id: 3,
            role: "Semifinalist – LearnSight",
            company: "Hack-A-Thon: AI for Education 2025",
            date: "Feb 2025",
            location: "Remote",
            icon: <Trophy className="w-5 h-5 text-yellow-400" />,
            points: [
                "Built an AI-powered adaptive diagnostic engine with Next.js and Firebase that dynamically adjusts question difficulty.",
                "Integrated real-time Firestore synchronization and a radar chart visualization to map student learning dimensions."
            ]
        },
        {
            id: 4,
            role: "Full Stack Developer Intern",
            company: "InnoByte Services",
            date: "Oct – Dec 2024",
            location: "Remote",
            icon: <Database className="w-5 h-5 text-blue-400" />,
            points: [
                "Architected the backend for a scalable e-commerce application using Node.js, Express, and MongoDB.",
                "Built robust RESTful APIs for product management, secure JWT authentication, and order processing with Joi validation."
            ]
        },
        {
            id: 5,
            role: "Open Source Contributor",
            company: "GSSoC Ext & Hacktoberfest",
            date: "Oct – Nov 2024",
            location: "Remote",
            icon: <GitPullRequest className="w-5 h-5 text-rose-400" />,
            points: [
                "Merged 83+ PRs across multiple open-source repos; resolved critical backend bugs and optimized aggregation pipelines.",
                "Earned Hacktoberfest SuperContributor 2024 (6/6 fast-approved core optimizations)."
            ]
        },
        {
            id: 6,
            role: "Computer Science Subject Matter Expert",
            company: "Chegg India",
            date: "Apr 2023 – Oct 2024",
            location: "Remote",
            icon: <Code2 className="w-5 h-5 text-emerald-400" />,
            points: [
                "Evaluated and authored solutions for 500+ complex technical problems across DSA, System Design, and DBMS.",
                "Maintained a 4.8/5 quality rating over 18 months, breaking down advanced computing concepts."
            ]
        },
        {
            id: 7,
            role: "Computer Networking Intern",
            company: "Trans Virtual Private Limited",
            date: "Jan 2024",
            location: "Guwahati",
            icon: <Server className="w-5 h-5 text-orange-400" />,
            points: [
                "Gained hands-on experience setting up and maintaining network systems, including enterprise routers and switches.",
                "Navigated device CLIs and utilized tools like PuTTY to execute configuration commands and diagnose network issues."
            ]
        }
    ];

    return (
        <section id="experience" className="w-full px-4 py-24 md:px-6 relative overflow-hidden" ref={containerRef}>
            <div className="mx-auto max-w-5xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-cyan-950/30 border border-cyan-800/30 mb-6">
                        <Briefcase className="w-4 h-4 text-cyan-500" />
                        <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">SYS_LOG // CAREER</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-200 tracking-tight">
                        Experience & <span className="text-cyan-400">Internships_</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative pl-8 md:pl-0">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-[50%] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent -translate-x-1/2"></div>

                    <div className="space-y-12 md:space-y-16">
                        {experiences.map((exp, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div 
                                    key={exp.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-0 md:left-[50%] w-8 h-8 rounded-full bg-slate-950 border border-cyan-500/80 shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center justify-center -translate-x-1/2 mt-1 z-10">
                                        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-[47%] ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 text-left'}`}>
                                        <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/30 transition-all hover:bg-slate-800/60 group relative overflow-hidden shadow-lg shadow-black/50">
                                            {/* Hover Glow Effect */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-tr from-cyan-500 to-transparent transition-opacity duration-500 rounded-xl"></div>
                                            
                                            <div className={`flex flex-col sm:flex-row sm:items-start gap-4 mb-4 ${isEven ? 'md:flex-row-reverse md:text-right' : 'text-left'}`}>
                                                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 self-start">
                                                    {exp.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                                                    <div className="text-sm font-mono text-cyan-400 mt-1">{exp.company}</div>
                                                    
                                                    <div className={`flex flex-wrap items-center gap-3 text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-3 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                                                        <span className="px-2 py-1 bg-slate-950 rounded border border-slate-800">{exp.date}</span>
                                                        <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                                                        <span>{exp.location}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <ul className={`text-sm text-slate-400 leading-relaxed space-y-2 list-none pl-0 mt-4 ${isEven ? 'md:text-right' : 'text-left'}`}>
                                                {exp.points.map((point, i) => (
                                                    <li key={i} className={`flex items-start gap-2 ${isEven ? 'md:flex-row-reverse' : 'flex-row'}`}>
                                                        <span className="text-cyan-600 mt-1 select-none">▸</span>
                                                        <span className="flex-1">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
