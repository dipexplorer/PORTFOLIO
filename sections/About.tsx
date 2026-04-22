"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    Code2, Database, Globe, Server, Smartphone,
    Zap, Sparkles, Target, Rocket, Award, TrendingUp,
} from "lucide-react";

export default function About() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const skills = [
        {
            category: "Frontend Dev",
            icon: <Globe className="w-6 h-6" />,
            gradient: "from-blue-500 to-cyan-500",
            technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        },
        {
            category: "Backend Dev",
            icon: <Server className="w-6 h-6" />,
            gradient: "from-purple-500 to-pink-500",
            technologies: ["Node.js", "Express", "Python", "GraphQL", "REST APIs"],
        },
        {
            category: "Data & Storage",
            icon: <Database className="w-6 h-6" />,
            gradient: "from-green-500 to-emerald-500",
            technologies: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "SQL"],
        },
        {
            category: "Cloud & Ops",
            icon: <Zap className="w-6 h-6" />,
            gradient: "from-yellow-500 to-orange-500",
            technologies: ["Git", "Docker", "AWS", "Vercel", "CI/CD"],
        },
        {
            category: "Mobile Dev",
            icon: <Smartphone className="w-6 h-6" />,
            gradient: "from-red-500 to-rose-500",
            technologies: ["React Native", "PWA", "Responsive UI"],
        },
        {
            category: "Architecture",
            icon: <Code2 className="w-6 h-6" />,
            gradient: "from-indigo-500 to-violet-500",
            technologies: ["System Design", "Agile", "Testing", "Security"],
        },
    ];

    const stats = [
        { icon: <Target className="w-8 h-8" />, value: "3+", label: "Years Experience" },
        { icon: <Rocket className="w-8 h-8" />, value: "20+", label: "Projects Completed" },
        { icon: <Award className="w-8 h-8" />, value: "10+", label: "Technologies" },
        { icon: <TrendingUp className="w-8 h-8" />, value: "100%", label: "Client Satisfaction" },
    ];

    return (
        <section id="about" className="w-full px-4 py-32 md:px-6 relative overflow-hidden" ref={containerRef}>
            {/* Background elements inherited from global style/transparency */}
            <div className="mx-auto max-w-7xl relative z-10">
                
                {/* Top Section - Text & Stats */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                    
                    {/* Intro Block */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7 space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/50 text-sm font-semibold text-zinc-900 dark:text-zinc-200 shadow-sm backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 text-purple-500" />
                            <span>My Journey</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                            Engineering Digital <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500">Excellence</span>
                        </h2>
                        <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                            <p>
                                I'm a passionate Full Stack Developer with a strong foundation in building modern web applications. My journey in technology started with curiosity and has evolved into a dedicated career focused on creating impactful digital solutions.
                            </p>
                            <p>
                                I specialize in developing scalable applications using cutting-edge technologies like React, Next.js, and Node.js. My experience spans from highly responsive frontend interfaces to robust backend microservices, database design, and cloud deployment.
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6 pt-4 lg:pt-0">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                                className="group p-6 rounded-3xl bg-white/50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center text-center space-y-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-md"
                            >
                                <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                    {stat.icon}
                                </div>
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                                    className="text-3xl font-extrabold text-zinc-900 dark:text-white"
                                >
                                    {stat.value}
                                </motion.div>
                                <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Skills Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {skills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="group p-8 rounded-3xl bg-white/50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 backdrop-blur-xl hover:shadow-2xl hover:border-purple-500/50 transition-all duration-500 overflow-hidden relative"
                        >
                            {/* Hover Gradient Mask */}
                            <div className={`absolute inset-0 bg-linear-to-br ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                            
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-4 rounded-2xl bg-linear-to-br ${skill.gradient} text-white shadow-md group-hover:scale-110 transition-transform duration-500`}>
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{skill.category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skill.technologies.map((tech) => (
                                        <span 
                                            key={tech} 
                                            className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm font-semibold text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-white/5 hover:bg-white dark:hover:bg-zinc-700 hover:shadow-sm hover:-translate-y-0.5 transition-all cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
                
            </div>
        </section>
    );
}
