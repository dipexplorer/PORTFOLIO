"use client";

import NodeConnectorFallback from "@/components/NodeConnectorFallback";
import { GitBranch, Mail, Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Custom LinkedIn icon component
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

// Framer Motion variants for staggered animation
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } },
};

import { Contribution } from "@/lib/github";

export default function Hero({ contributions }: { contributions: Contribution[] }) {
    return (
        <section className="w-full px-4 pb-8 pt-24 md:px-6 relative">
            <div className="mx-auto flex max-w-7xl justify-between flex-col md:flex-row items-center gap-8 md:gap-4">
                {/* Left Side - Content with Framer Motion */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col justify-center min-h-[50vh] md:h-[70vh] md:min-h-130 w-full px-4 py-8 md:w-[48%] md:px-12 md:py-10 z-10 border border-slate-200 dark:border-cyan-800/10 bg-white/40 dark:bg-slate-950/30 rounded-2xl relative overflow-hidden transition-colors duration-300"
                >
                    {/* Technical framing lines */}
                    <div className="absolute top-3 left-3 text-[8px] text-slate-400 dark:text-cyan-500/35 font-mono">{"NODE // HERO_INIT"}</div>
                    <div className="absolute bottom-3 right-3 text-[8px] text-slate-400 dark:text-cyan-500/35 font-mono">LOC: 26°11&apos;N 91°44&apos;E</div>
                    
                    <div className="space-y-6">
                        {/* Greeting */}
                        <motion.div variants={itemVariants} className="inline-block">
                            <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 border border-slate-200 dark:border-cyan-500/25 px-2.5 py-1 rounded-sm uppercase tracking-widest bg-cyan-100/30 dark:bg-cyan-950/20">
                                IDENTITY // SYSTEMS_DEV
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black tracking-tighter leading-tight bg-clip-text text-transparent bg-linear-to-r from-slate-900 via-slate-800 to-cyan-600 dark:from-white dark:via-slate-100 dark:to-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.15)] select-none">
                            Dipjyoti Das
                        </motion.h1>

                        {/* Description */}
                        <motion.p variants={itemVariants} className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg font-mono">
                            <span className="text-slate-400 dark:text-slate-500">{"// Architecting "}</span>
                            <span className="text-cyan-600 dark:text-cyan-400">scalable software systems</span>
                            <span className="text-slate-400 dark:text-slate-500">{" and "}</span>
                            <span className="text-slate-800 dark:text-slate-200">data-driven intelligence</span>
                            <span className="text-slate-400 dark:text-slate-500">{"."}</span>
                            <br />
                            <span className="text-slate-400 dark:text-slate-500">{"// Building "}</span>
                            <span className="text-slate-800 dark:text-slate-200">resilient, production-grade applications</span>
                            <span className="text-slate-400 dark:text-slate-500">{" that solve "}</span>
                            <span className="text-cyan-600 dark:text-cyan-400">real-world problems</span>
                            <span className="text-slate-400 dark:text-slate-500">{"."}</span>
                            <br />
                            <span className="text-slate-400 dark:text-slate-500">{"// Specializing in "}</span>
                            <span className="text-slate-800 dark:text-slate-200">high-performance backends</span>
                            <span className="text-slate-400 dark:text-slate-500">{", "}</span>
                            <span className="text-slate-800 dark:text-slate-200">AI integration</span>
                            <span className="text-slate-400 dark:text-slate-500">{" & "}</span>
                            <span className="text-cyan-600 dark:text-cyan-400">open-source governance</span>
                            <span className="text-slate-400 dark:text-slate-500">{"."}</span>
                        </motion.p>


                        {/* Social Links */}
                        <motion.div variants={itemVariants} className="flex gap-4 pt-2">
                            <Link
                                href="https://github.com/dipexplorer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-slate-100 dark:bg-cyan-950/20 text-slate-600 dark:text-cyan-400 border border-slate-200 dark:border-cyan-800/30 hover:border-cyan-500/50 hover:bg-slate-200 dark:hover:bg-cyan-950/45 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                            >
                                <GitBranch className="w-5 h-5" />
                            </Link>
                            <Link
                                href="https://linkedin.com/in/dipjyoti-das"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-slate-100 dark:bg-cyan-950/20 text-slate-600 dark:text-cyan-400 border border-slate-200 dark:border-cyan-800/30 hover:border-cyan-500/50 hover:bg-slate-200 dark:hover:bg-cyan-950/45 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                            >
                                <LinkedinIcon className="w-5 h-5" />
                            </Link>
                            <Link
                                href="mailto:contact@dipjyoti.dev"
                                className="p-3 rounded-xl bg-slate-100 dark:bg-cyan-950/20 text-slate-600 dark:text-cyan-400 border border-slate-200 dark:border-cyan-800/30 hover:border-cyan-500/50 hover:bg-slate-200 dark:hover:bg-cyan-950/45 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                            >
                                <Mail className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="#projects"
                                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-slate-100 dark:bg-cyan-950 border border-slate-300 dark:border-cyan-500/40 text-slate-800 dark:text-cyan-400 font-mono text-xs uppercase tracking-[0.2em] transition-all active:scale-95 shadow-sm dark:shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:bg-slate-200 dark:hover:bg-cyan-900/60 hover:text-slate-950 dark:hover:text-cyan-300 duration-300 cursor-pointer"
                            >
                                <span className="relative z-10">View Projects_</span>
                            </Link>
                            <Link
                                href="/DIPJYOTI_SD_resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-slate-300 dark:border-cyan-800/40 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 font-mono text-xs uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer shadow-xs"
                            >
                                <Download className="w-4 h-4" />
                                Resume
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Side - Interactive Node Connector Visualizer */}
                <div 
                    className="relative h-[60vh] md:h-[70vh] min-h-130 w-full overflow-hidden px-4 md:px-8 py-8 md:w-[50%] md:py-10 flex items-center justify-center border border-slate-200 dark:border-cyan-800/10 bg-slate-100/10 dark:bg-slate-950/20 rounded-2xl backdrop-blur-xs transition-colors duration-300"
                >

                    
                    <NodeConnectorFallback contributions={contributions} />
                </div>
            </div>
        </section>
    );
}
