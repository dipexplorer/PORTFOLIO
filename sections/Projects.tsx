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
            className={`group relative flex flex-col justify-between h-full rounded-3xl bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-8 md:p-10 overflow-hidden backdrop-blur-xl transition-shadow duration-500 hover:shadow-2xl hover:shadow-blue-500/10 ${getGridClass(
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
                            rgba(59,130,246,0.12),
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
                            rgba(99,102,241,0.15),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative z-10 flex-1 flex flex-col">
                {/* Top Bar with Icon */}
                <div className="flex items-start justify-between mb-8">
                    <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-white/5 text-blue-600 dark:text-blue-400 ring-1 ring-blue-100 dark:ring-white/10 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                        <FolderGit2 className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div className="flex gap-3">
                        {project.github && (
                            <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-all p-3 hover:bg-zinc-100/80 dark:hover:bg-white/10 rounded-full shadow-xs ring-1 ring-transparent hover:ring-zinc-200 dark:hover:ring-white/10 group-hover:-translate-y-1 duration-300"
                            >
                                <GitBranch className="w-5 h-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        )}
                    </div>
                </div>

                {/* Content */}
                <motion.h3 className="text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 tracking-tight">
                    {project.title}
                </motion.h3>

                {project.highlight && (
                    <div className="mb-6 pl-4 border-l-2 border-blue-500/50 dark:border-blue-500/30">
                        <p className="text-sm font-medium text-blue-600/80 dark:text-blue-400/80 italic">
                            "{project.highlight}"
                        </p>
                    </div>
                )}

                <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed flex-1 group-hover:text-zinc-800 dark:group-hover:text-zinc-300 transition-colors duration-300">
                    {project.description}
                </p>
            </div>

            {/* Technologies array with staggered hover styling */}
            <div className="relative z-10 mt-auto pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-wrap gap-2.5">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="px-3.5 py-1.5 rounded-lg bg-zinc-100/50 dark:bg-zinc-800/50 text-xs font-bold tracking-wide text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-white/5 hover:-translate-y-1 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-300 cursor-default shadow-xs"
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
                        opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-20 right-0 w-150 h-150 bg-blue-500/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute bottom-20 left-0 w-125 h-125 bg-purple-500/10 rounded-full blur-[120px]"
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/50 text-sm font-semibold text-zinc-900 dark:text-zinc-200 mb-8 shadow-sm backdrop-blur-sm"
                    >
                        <Sparkles className="w-4 h-4 text-blue-500" />
                        <span>Featured Masterpieces</span>
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tighter">
                        My{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-indigo-500 to-purple-600">
                            Projects
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                        A curation of my recent engineering work focusing on
                        scalable architecture, artificial intelligence, and
                        beautiful user experiences.
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
