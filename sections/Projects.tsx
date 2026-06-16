"use client";

import { projects } from "@/data/projects";
import { FolderGit2, GitBranch, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { Project } from "@/types/project";

// Unique Spotlight Card Component
const SpotlightCard = ({
    project,
    index,
}: {
    project: Project;
    index: number;
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: MouseEvent<HTMLDivElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    // Dynamic grid spans for 4 items in a 3-col grid logic
    const getGridClass = (i: number) => {
        if (i === 0) return "md:col-span-2 lg:col-span-2"; // Row 1 Left
        if (i === 1) return "md:col-span-1 lg:col-span-1"; // Row 1 Right
        if (i === 2) return "md:col-span-1 lg:col-span-1"; // Row 2 Left
        if (i === 3) return "md:col-span-2 lg:col-span-2"; // Row 2 Right
        return "col-span-1";
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
            }}
            onMouseMove={handleMouseMove}
            className={`group relative flex flex-col justify-between h-full rounded-3xl bg-slate-950/70 border border-cyan-500/10 p-8 md:p-10 overflow-hidden backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] ${getGridClass(
                index,
            )}`}
        >
            {/* Animated Inner Shine Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-overlay dark:mix-blend-normal"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(6,182,212,0.12),
                            transparent 80%
                        )
                    `,
                }}
            />
            {/* Glowing Border Overlay */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 z-0"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            300px circle at ${mouseX}px ${mouseY}px,
                            rgba(6,182,212,0.15),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative z-10 flex-1 flex flex-col">
                {/* Top Bar with Icon */}
                <div className="flex items-start justify-between mb-8">
                    <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-800/30 text-cyan-400 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                        <FolderGit2 className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div className="flex gap-3">
                        {project.github && (
                            <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-cyan-400 transition-all p-3 hover:bg-cyan-950/30 rounded-full shadow-xs ring-1 ring-transparent hover:ring-cyan-800/30 group-hover:-translate-y-1 duration-300"
                            >
                                <GitBranch className="w-5 h-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        )}
                    </div>
                </div>

                {/* Content */}
                <motion.h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 tracking-tight">
                    {project.title}
                </motion.h3>

                {project.highlight && (
                    <div className="mb-6 pl-4 border-l-2 border-cyan-500/40">
                        <p className="text-sm font-medium text-cyan-400/80 italic font-mono">
                            &quot;{project.highlight}&quot;
                        </p>
                    </div>
                )}

                <p className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed flex-1 group-hover:text-slate-300 transition-colors duration-300">
                    {project.description}
                </p>
            </div>

            {/* Technologies array with staggered hover styling */}
            <div className="relative z-10 mt-auto pt-6 border-t border-cyan-900/30 flex flex-wrap gap-2.5">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="px-3.5 py-1.5 rounded-lg bg-cyan-950/20 text-xs font-bold tracking-wide text-cyan-400/90 border border-cyan-800/30 hover:-translate-y-1 hover:bg-cyan-950/45 hover:text-cyan-300 hover:border-cyan-500/40 transition-all duration-300 cursor-default shadow-xs font-mono"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default function Projects() {
    return (
        <section
            id="projects"
            className="w-full px-4 py-20 md:px-6 relative overflow-hidden"
        >
            {/* Dynamic Background Effects matching About module */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.05, 0.08, 0.05],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-20 right-0 w-150 h-150 bg-cyan-500/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute bottom-20 left-0 w-125 h-125 bg-teal-500/10 rounded-full blur-[120px]"
                />
            </div>

            <div className="mx-auto max-w-7xl relative z-10">
                {/* Header Animating In */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col items-center mb-20 text-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/40 border border-cyan-800/30 text-sm font-semibold text-cyan-400 mb-8 shadow-sm backdrop-blur-sm font-mono"
                    >
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span>Featured Masterpieces</span>
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tighter">
                        My{" "}
                        <span className="text-cyan-400 font-bold">
                            Projects
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-mono">
                        {"// Curation of selected engineering works focusing on scalable backend architectures and AI cognitive systems."}
                    </p>
                </motion.div>

                {/* Projects Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <SpotlightCard
                            key={project.title}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
