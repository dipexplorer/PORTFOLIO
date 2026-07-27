"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ShieldCheck, FileText, ExternalLink, Trophy } from "lucide-react";

export default function Credentials() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const badges = [
        {
            title: "Hacktoberfest 2024",
            role: "SuperContributor",
            image: "https://holopin.io/@dipexplorer",
            fallbackIcon: <Trophy className="w-10 h-10 text-rose-500" />,
            glow: "shadow-rose-500/20",
            border: "border-rose-500/30",
            linkLabel: "Official Profile"
        },
        {
            title: "GSSoC 2025",
            role: "Project Admin",
            image: "/certificates/GSSOC_25_project_admin_Certificate_Dipjyoti_Das.png",
            fallbackIcon: <ShieldCheck className="w-10 h-10 text-amber-500" />,
            glow: "shadow-amber-500/20",
            border: "border-amber-500/30",
            linkLabel: "View Certificate"
        },
        {
            title: "GSSoC 2024",
            role: "Core Contributor",
            image: "/certificates/gssoc24_contributor_badges.jpeg",
            fallbackIcon: <Award className="w-10 h-10 text-emerald-500" />,
            glow: "shadow-emerald-500/20",
            border: "border-emerald-500/30",
            linkLabel: "View Badge"
        }
    ];

    const certificates = [
        {
            title: "Project Admin - LegalHub",
            issuer: "GSSoC 2025",
            date: "2025",
            link: "/certificates/GSSOC_25_project_admin_Certificate_Dipjyoti_Das.png"
        },
        {
            title: "Signal & Telecom Field Training",
            issuer: "Northeast Frontier Railway",
            date: "2025",
            link: "/certificates/NFR_summer_internship_certificate.png"
        },
        {
            title: "LearnSight Hackathon Semifinalist",
            issuer: "AI for Education",
            date: "2025",
            link: "/certificates/hack-a-thon_certificate.jpeg"
        },
        {
            title: "Full Stack Developer Internship",
            issuer: "InnoByte Services",
            date: "2024",
            link: "/certificates/innobyte_internship_certificate.jpeg"
        }
    ];

    return (
        <section id="credentials" className="w-full px-4 py-24 md:px-6 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300" ref={containerRef}>
            <div className="mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800/30 mb-6">
                        <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-500" />
                        <span className="text-xs font-mono tracking-widest text-cyan-600 dark:text-cyan-400 uppercase">SYS_LOG // VAULT</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-slate-200 tracking-tight">
                        Credentials & <span className="text-cyan-600 dark:text-cyan-400">Achievements_</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left: Badges */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7 flex flex-col gap-6"
                    >
                        <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-slate-200 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                            <ShieldCheck className="w-5 h-5 text-cyan-650 dark:text-cyan-500" />
                            Official Badges
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {badges.map((badge, i) => (
                                <a 
                                    key={i} 
                                    href={badge.image || "#"}
                                    target={badge.image ? "_blank" : undefined}
                                    rel={badge.image ? "noopener noreferrer" : undefined}
                                    className={`p-6 rounded-xl bg-white/60 dark:bg-slate-900/40 border border-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all group flex flex-col items-center text-center shadow-md dark:shadow-lg ${badge.image ? "cursor-pointer" : "cursor-default"} ${badge.glow} ${badge.border}`}
                                >
                                    <div className="w-20 h-20 mb-4 rounded-full bg-slate-50 dark:bg-slate-950/80 flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-800 relative">
                                        <div className="flex items-center justify-center opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                                            {badge.fallbackIcon}
                                        </div>
                                    </div>
                                    <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">{badge.title}</div>
                                    <div className="text-[10px] font-mono text-cyan-600 dark:text-cyan-500/80 uppercase tracking-widest">{badge.role}</div>
                                    {badge.image && (
                                        <div className="mt-3 text-[9px] text-slate-500 flex items-center gap-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                            <ExternalLink className="w-3 h-3" /> {badge.linkLabel || "View Badge"}
                                        </div>
                                    )}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Certificates */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-5 flex flex-col gap-6"
                    >
                        <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-slate-200 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                            <FileText className="w-5 h-5 text-cyan-650 dark:text-cyan-500" />
                            Certificates & Awards
                        </h3>
                        <div className="flex flex-col gap-3">
                            {certificates.map((cert, i) => (
                                <a 
                                    key={i}
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-lg bg-white/60 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors group flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-900/50 flex items-center justify-center text-cyan-600 dark:text-cyan-500 group-hover:scale-110 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/60 transition-all">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-cyan-650 dark:group-hover:text-cyan-400 transition-colors">{cert.title}</div>
                                            <div className="text-[10px] font-mono text-slate-500 mt-0.5">{cert.issuer} • {cert.date}</div>
                                        </div>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-slate-400 dark:text-slate-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
