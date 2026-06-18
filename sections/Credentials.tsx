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
            image: "/credentials/hacktoberfest-badge.png", // User needs to upload
            fallbackIcon: <Trophy className="w-10 h-10 text-rose-500" />,
            glow: "shadow-rose-500/20",
            border: "border-rose-500/30"
        },
        {
            title: "GSSoC 2025",
            role: "Project Admin",
            image: "/credentials/gssoc-admin.png",
            fallbackIcon: <ShieldCheck className="w-10 h-10 text-amber-500" />,
            glow: "shadow-amber-500/20",
            border: "border-amber-500/30"
        },
        {
            title: "GSSoC 2024",
            role: "Core Contributor",
            image: "/credentials/gssoc-contributor.png",
            fallbackIcon: <Award className="w-10 h-10 text-emerald-500" />,
            glow: "shadow-emerald-500/20",
            border: "border-emerald-500/30"
        }
    ];

    const certificates = [
        {
            title: "Chegg Subject Matter Expert",
            issuer: "Chegg India",
            date: "2023 - 2024",
            link: "/credentials/chegg-cert.pdf"
        },
        {
            title: "Hackathon Winner / Participant",
            issuer: "Global Hackathons",
            date: "2024",
            link: "/credentials/hackathon-cert.pdf"
        },
        {
            title: "Open Source Contributor",
            issuer: "GirlScript Foundation",
            date: "2024 - 2025",
            link: "/credentials/gssoc-cert.pdf"
        }
    ];

    return (
        <section id="credentials" className="w-full px-4 py-24 md:px-6 relative overflow-hidden" ref={containerRef}>
            <div className="mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-cyan-950/30 border border-cyan-800/30 mb-6">
                        <Award className="w-4 h-4 text-cyan-500" />
                        <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">SYS_LOG // VAULT</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-200 tracking-tight">
                        Credentials & <span className="text-cyan-400">Achievements_</span>
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
                        <h3 className="text-xl font-serif font-bold text-slate-200 flex items-center gap-2 border-b border-slate-800 pb-3">
                            <ShieldCheck className="w-5 h-5 text-cyan-500" />
                            Official Badges
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {badges.map((badge, i) => (
                                <div key={i} className={`p-6 rounded-xl bg-slate-900/40 border hover:bg-slate-800/60 transition-all group flex flex-col items-center text-center shadow-lg ${badge.glow} ${badge.border}`}>
                                    <div className="w-20 h-20 mb-4 rounded-full bg-slate-950/80 flex items-center justify-center overflow-hidden border border-slate-800 relative">
                                        {/* Image overlay (shows if user adds image, otherwise falls back to icon) */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                                            {badge.fallbackIcon}
                                        </div>
                                        {/* React img tag handling missing src gracefully */}
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img 
                                            src={badge.image} 
                                            alt={badge.title} 
                                            className="w-full h-full object-cover relative z-10"
                                            onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                                        />
                                    </div>
                                    <div className="text-sm font-bold text-slate-200 mb-1">{badge.title}</div>
                                    <div className="text-[10px] font-mono text-cyan-500/80 uppercase tracking-widest">{badge.role}</div>
                                </div>
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
                        <h3 className="text-xl font-serif font-bold text-slate-200 flex items-center gap-2 border-b border-slate-800 pb-3">
                            <FileText className="w-5 h-5 text-cyan-500" />
                            Certificates & Awards
                        </h3>
                        <div className="flex flex-col gap-3">
                            {certificates.map((cert, i) => (
                                <a 
                                    key={i}
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-lg bg-slate-900/30 border border-slate-800/80 hover:border-cyan-500/50 transition-colors group flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded bg-cyan-950/40 border border-cyan-900/50 flex items-center justify-center text-cyan-500 group-hover:scale-110 group-hover:bg-cyan-900/60 transition-all">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">{cert.title}</div>
                                            <div className="text-[10px] font-mono text-slate-500 mt-0.5">{cert.issuer} • {cert.date}</div>
                                        </div>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
