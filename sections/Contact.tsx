"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, GitBranch, MessageSquare, Terminal } from "lucide-react";

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

export default function Contact() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section
            id="contact"
            className="w-full px-4 py-32 md:px-6 relative overflow-hidden"
            ref={containerRef}
        >
            {/* Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.05, 0.08, 0.05],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px]"
                />
            </div>

            <div className="mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/30 text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-6 font-mono shadow-xs">
                        <MessageSquare className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                        <span>TRANSMISSION // CHANNEL</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tighter transition-colors duration-300">
                        Let&apos;s Build{" "}
                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">
                            Together
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-mono transition-colors duration-300">
                        {
                            "// The communication socket is open. Drop an inquiry payload below or connect via email."
                        }
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={
                        isInView
                            ? { opacity: 1, y: 0, scale: 1 }
                            : { opacity: 0, y: 50, scale: 0.95 }
                    }
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl mx-auto rounded-3xl bg-white/80 dark:bg-slate-950/70 border border-slate-200 dark:border-cyan-500/20 p-8 md:p-12 overflow-hidden backdrop-blur-2xl shadow-lg shadow-slate-200/50 dark:shadow-2xl relative transition-all duration-300"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-cyan-600 via-cyan-400 to-teal-400" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6 text-slate-900 dark:text-white font-mono">
                                <Terminal className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                                <h3 className="text-xl font-bold">
                                    [EMAIL_DISPATCH]
                                </h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 font-mono text-sm leading-relaxed transition-colors duration-300">
                                {
                                    "// Ready to compile clean architectures? Dispatch a message and establish the handshake."
                                }
                            </p>
                            <a
                                href="mailto:contact@dipjyoti.dev"
                                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-100 dark:bg-cyan-950 border border-slate-300 dark:border-cyan-500/40 text-slate-800 dark:text-cyan-400 rounded-xl font-bold text-base hover:scale-105 hover:bg-slate-200 dark:hover:bg-cyan-900/60 hover:text-slate-950 dark:hover:text-cyan-300 transition-all duration-300 shadow-sm dark:shadow-lg hover:shadow-cyan-950/40 font-mono tracking-wider cursor-pointer"
                            >
                                Establish Connection_
                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>

                        <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-l border-slate-200 dark:border-cyan-900/30 pt-8 md:pt-0 md:pl-12">
                            <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-4 font-mono transition-colors duration-300">
                                {"// Connect via Nodes"}
                            </h4>

                            <a
                                href="https://github.com/dipexplorer"
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-cyan-100/30 dark:hover:bg-cyan-950/20 transition-all border border-transparent hover:border-cyan-200 dark:hover:border-cyan-500/20"
                            >
                                <span className="p-3 bg-cyan-50 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/30 rounded-lg group-hover:scale-110 transition-transform">
                                    <GitBranch className="w-6 h-6" />
                                </span>
                                <span className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors font-mono text-sm">
                                    GitHub // dipexplorer
                                </span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/dip-jyoti22/"
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-cyan-100/30 dark:hover:bg-cyan-950/20 transition-all border border-transparent hover:border-cyan-200 dark:hover:border-cyan-500/20"
                            >
                                <span className="p-3 bg-cyan-50 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/30 rounded-lg group-hover:scale-110 transition-transform">
                                    <LinkedinIcon className="w-6 h-6" />
                                </span>
                                <span className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors font-mono text-sm">
                                    LinkedIn // dipjyoti-das
                                </span>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Signature / Footer Bottom */}
                <div className="mt-32 text-center text-slate-500 font-mono text-xs flex flex-col items-center gap-2">
                    <p>{"// Designed & Built by Dipjyoti Das"}</p>
                    <p className="flex items-center gap-1 justify-center">
                        {"// Systems consultation: "}{" "}
                        <a
                            href="mailto:contact@dipjyoti.dev"
                            className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 underline decoration-cyan-400/30 underline-offset-4 font-bold cursor-pointer transition-colors duration-300"
                        >
                            [ENGAGE_LOG]
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
