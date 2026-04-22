"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Send, GitBranch, MessageSquare, Terminal } from "lucide-react";

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
        <section id="contact" className="w-full px-4 py-32 md:px-6 relative overflow-hidden" ref={containerRef}>
            {/* Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[150px]" 
                />
            </div>

            <div className="mx-auto max-w-5xl relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
                        <MessageSquare className="w-4 h-4" />
                        <span>What's Next?</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tighter">
                        Let's Build <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-cyan-500">Together</span>
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl mx-auto rounded-3xl bg-white/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 overflow-hidden backdrop-blur-2xl shadow-2xl relative"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-500" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6 text-zinc-900 dark:text-white">
                                <Terminal className="w-8 h-8 text-indigo-500" />
                                <h3 className="text-2xl font-bold">Connect via Email</h3>
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                                Ready to bring your ideas to life? Send me an email and let's start the conversation.
                            </p>
                            <a 
                                href="mailto:contact@dipjyoti.dev"
                                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg hover:shadow-indigo-500/25"
                            >
                                Say Hello
                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>

                        <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-l border-zinc-200 dark:border-zinc-800 pt-8 md:pt-0 md:pl-12">
                            <h4 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4">Or find me on</h4>
                            
                            <a href="https://github.com/dipexplorer" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700">
                                <span className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg group-hover:scale-110 transition-transform text-zinc-900 dark:text-white">
                                    <GitBranch className="w-6 h-6" />
                                </span>
                                <span className="font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">GitHub</span>
                            </a>

                            <a href="https://linkedin.com/in/dipjyoti-das" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-colors border border-transparent hover:border-indigo-100 dark:hover:border-indigo-500/20">
                                <span className="p-3 bg-indigo-100 dark:bg-indigo-500/20 rounded-lg group-hover:scale-110 transition-transform text-indigo-600 dark:text-indigo-400">
                                    <LinkedinIcon className="w-6 h-6" />
                                </span>
                                <span className="font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Signature / Footer Bottom */}
                <div className="mt-32 text-center text-zinc-500 dark:text-zinc-500 font-medium text-sm flex flex-col items-center gap-2">
                    <p>Designed & Built by Dipjyoti Das</p>
                    <p className="flex items-center gap-1 justify-center">
                        Need an ultra-modern website? <a href="mailto:contact@dipjyoti.dev" className="text-indigo-500 hover:text-indigo-400 underline decoration-indigo-500/30 underline-offset-4">Let's talk.</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
