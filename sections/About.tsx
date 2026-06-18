"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Terminal, Code2, Cpu, Activity } from "lucide-react";

export default function About() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const stats = [
        { icon: <Terminal className="w-5 h-5" />, value: "3+", label: "YRS_EXPERIENCE" },
        { icon: <Code2 className="w-5 h-5" />, value: "15+", label: "SYSTEMS_BUILT" },
        { icon: <Cpu className="w-5 h-5" />, value: "3", label: "AI_MODELS_INTEGRATED" },
        { icon: <Activity className="w-5 h-5" />, value: "100%", label: "UPTIME_FOCUS" },
    ];

    return (
        <section id="about" className="w-full px-4 py-24 md:px-6 relative overflow-hidden" ref={containerRef}>
            <div className="mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-cyan-950/30 border border-cyan-800/30 mb-6">
                        <Terminal className="w-4 h-4 text-cyan-500" />
                        <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">SYS_LOG // PROFILE</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-200 tracking-tight">
                        About <span className="text-cyan-400">The Engineer_</span>
                    </h2>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Left side: Terminal bio block */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7 relative"
                    >
                        {/* Terminal Window Frame */}
                        <div className="w-full rounded-xl bg-[#0a0a0a] border border-slate-800 overflow-hidden shadow-2xl shadow-cyan-900/10">
                            {/* Window Top Bar */}
                            <div className="flex items-center px-4 py-3 bg-slate-900/50 border-b border-slate-800">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                                </div>
                                <div className="mx-auto text-xs font-mono text-slate-500">dipjyoti@systems:~</div>
                            </div>
                            
                            {/* Terminal Content */}
                            <div className="p-6 md:p-8 space-y-6 font-mono text-sm md:text-base leading-relaxed text-slate-300">
                                <p>
                                    <span className="text-cyan-500">❯</span> <span className="text-purple-400">whoami</span>
                                    <br />
                                    I am <span className="text-cyan-300 font-semibold">Dipjyoti Das</span>, a Full-Stack Developer & AI Systems Integrator. I specialize in architecting highly scalable platforms, real-time web applications, and intelligent backend services.
                                </p>
                                
                                <p>
                                    <span className="text-cyan-500">❯</span> <span className="text-purple-400">cat</span> <span className="text-slate-200">philosophy.md</span>
                                    <br />
                                    I believe in code that is not just functional, but <span className="italic text-cyan-400">resilient</span>. Whether it&apos;s building a secure architecture for LegalHub, optimizing video streaming pipelines for VideTube, or implementing facial recognition for Acadence—my goal is to engineer solutions that solve real-world problems with elegance and efficiency.
                                </p>
                                
                                <p className="pt-4 border-t border-slate-800/50">
                                    <span className="text-slate-500">/*</span>
                                    <br />
                                    &nbsp;&nbsp;When I&apos;m not optimizing queries or deploying containers,<br />
                                    &nbsp;&nbsp;you can find me exploring the latest in ML models,<br />
                                    &nbsp;&nbsp;tweaking system configurations, or conceptualizing my next build.
                                    <br />
                                    <span className="text-slate-500">*/</span>
                                </p>

                                {/* Blinking cursor */}
                                <div className="flex items-center mt-2">
                                    <span className="text-cyan-500">❯</span> 
                                    <motion.div 
                                        animate={{ opacity: [1, 0, 1] }} 
                                        transition={{ duration: 1, repeat: Infinity }} 
                                        className="w-2.5 h-5 bg-cyan-400 ml-2"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side: Personal Touch & Stats */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-5 flex flex-col gap-6"
                    >
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/30 transition-colors group"
                                >
                                    <div className="text-cyan-500 mb-3 group-hover:scale-110 group-hover:text-cyan-400 transition-all origin-left">
                                        {stat.icon}
                                    </div>
                                    <div className="text-2xl font-bold text-slate-200 mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest group-hover:text-cyan-500/70 transition-colors">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Signature / Personal Touch Card */}
                        <div className="p-8 rounded-xl bg-gradient-to-br from-cyan-950/20 to-slate-900/40 border border-cyan-800/30 relative overflow-hidden flex-1 flex flex-col justify-center">
                            {/* Decorative background grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d41a_1px,transparent_1px),linear-gradient(to_bottom,#06b6d41a_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
                            
                            <div className="relative z-10">
                                <p className="text-sm text-slate-400 italic mb-6 leading-relaxed">
                                    &quot;Technology is only as good as the impact it makes. I don&apos;t just write code; I engineer digital experiences that push boundaries.&quot;
                                </p>
                                
                                <div className="mt-auto pt-4 border-t border-cyan-800/30">
                                    <div className="text-[10px] font-mono text-cyan-500 mb-2 tracking-widest uppercase">// Architected by</div>
                                    {/* Stylized Signature using serif font */}
                                    <div className="text-3xl font-serif italic text-slate-200 drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]">
                                        Dipjyoti Das
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
