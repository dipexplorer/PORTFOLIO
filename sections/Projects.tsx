"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { 
    GitBranch, Globe, ChevronLeft, ChevronRight, ArrowUpRight, Layers,
    Database, Code2, BrainCircuit
} from "lucide-react";
import { 
    SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFramer,
    SiNodedotjs, SiExpress, SiFastapi, SiPython, SiGo, SiRust,
    SiMongodb, SiPostgresql, SiRedis, SiDocker, SiFirebase, SiIpfs, SiJsonwebtokens
} from "react-icons/si";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types/project";

// ─── Tech Icon Helper ──────────────────────────────────────────────────────────
const TechIcon = ({ tech }: { tech: string }) => {
    const t = tech.toLowerCase();
    if (t.includes("next")) return <SiNextdotjs size={10} className="opacity-80" />;
    if (t.includes("react")) return <SiReact size={10} className="opacity-80" />;
    if (t.includes("typescript") || t.includes("ts")) return <SiTypescript size={10} className="opacity-80" />;
    if (t.includes("tailwind")) return <SiTailwindcss size={10} className="opacity-80" />;
    if (t.includes("framer")) return <SiFramer size={10} className="opacity-80" />;
    if (t.includes("node")) return <SiNodedotjs size={10} className="opacity-80" />;
    if (t.includes("express")) return <SiExpress size={10} className="opacity-80" />;
    if (t.includes("python")) return <SiPython size={10} className="opacity-80" />;
    if (t.includes("fastapi")) return <SiFastapi size={10} className="opacity-80" />;
    if (t.includes("go")) return <SiGo size={10} className="opacity-80" />;
    if (t.includes("redis")) return <SiRedis size={10} className="opacity-80" />;
    if (t.includes("rust")) return <SiRust size={10} className="opacity-80" />;
    if (t.includes("mongo")) return <SiMongodb size={10} className="opacity-80" />;
    if (t.includes("supabase") || t.includes("postgres") || t.includes("sql")) return <SiPostgresql size={10} className="opacity-80" />;
    if (t.includes("docker")) return <SiDocker size={10} className="opacity-80" />;
    if (t.includes("firebase") || t.includes("firestore")) return <SiFirebase size={10} className="opacity-80" />;
    if (t.includes("ipfs")) return <SiIpfs size={10} className="opacity-80" />;
    if (t.includes("ai") || t.includes("llm") || t.includes("rag") || t.includes("mistral")) return <BrainCircuit size={10} className="opacity-80" />;
    if (t.includes("jwt")) return <SiJsonwebtokens size={10} className="opacity-80" />;
    if (t.includes("cloudinary")) return <Globe size={10} className="opacity-80" />;
    if (t.includes("vector db") || t.includes("pinecone")) return <Database size={10} className="opacity-80" />;
    if (t.includes("database")) return <Database size={10} className="opacity-80" />;
    return <Code2 size={10} className="opacity-80" />;
};

// ─── Carousel sub-component ────────────────────────────────────────────────────
const ImageCarousel = ({ images, title }: { images: string[]; title: string }) => {
    const [idx, setIdx] = useState(0);
    const [dir, setDir] = useState(1);
    const total = images.length;

    const go = (next: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setDir(next > idx ? 1 : -1);
        setIdx((next + total) % total);
    };

    if (total === 0) return null;

    return (
        <div className="relative w-full h-full overflow-hidden rounded-xl bg-slate-100/60 dark:bg-slate-950/60 group/img">
            <AnimatePresence initial={false} custom={dir} mode="popLayout">
                <motion.img
                    key={idx}
                    src={images[idx]}
                    alt={`${title} - view ${idx + 1}`}
                    custom={dir}
                    initial={{ x: dir * 60, opacity: 0, scale: 0.97 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: dir * -60, opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                    className="w-full h-full object-cover object-top absolute inset-0 filter grayscale group-hover/img:grayscale-0 transition-all duration-700"
                />
            </AnimatePresence>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/10 to-transparent pointer-events-none z-10" />

            {/* Scanline overlay for hacker feel */}
            <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]"
                style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)" }} />

            {/* Corner brackets */}
            {["top-2 left-2 border-t-2 border-l-2", "top-2 right-2 border-t-2 border-r-2",
              "bottom-2 left-2 border-b-2 border-l-2", "bottom-2 right-2 border-b-2 border-r-2"].map((cls, i) => (
                <div key={i} className={`absolute w-3 h-3 ${cls} border-cyan-500/40 pointer-events-none z-20 opacity-80`} />
            ))}

            {/* Image count badge */}
            <div className="absolute top-3 right-3 z-20 px-2 py-0.5 rounded text-[10px] font-mono font-bold border border-cyan-500/30 bg-black/40 text-cyan-400 backdrop-blur-sm">
                {idx + 1}/{total}
            </div>

            {/* Nav arrows — visible on hover */}
            {total > 1 && (
                <>
                    <button
                        onClick={(e) => go(idx - 1, e)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-lg bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700/60 text-slate-800 dark:text-white opacity-0 group-hover/img:opacity-100 transition-all duration-200 hover:scale-110 hover:border-cyan-500/50 hover:text-cyan-400"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <button
                        onClick={(e) => go(idx + 1, e)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-lg bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700/60 text-slate-800 dark:text-white opacity-0 group-hover/img:opacity-100 transition-all duration-200 hover:scale-110 hover:border-cyan-500/50 hover:text-cyan-400"
                    >
                        <ChevronRight size={16} />
                    </button>
                    {/* Dot indicators */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => go(i, e)}
                                className={`h-1 rounded-full transition-all duration-300 ${i === idx ? "w-5 bg-cyan-400" : "w-1.5 bg-white/30"}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

// ─── Individual project card ───────────────────────────────────────────────────
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    // Wide cards: index 0 (spans 2 cols), index 3 (spans 2 cols)  
    // Keep 6-project bento: [wide][narrow][narrow][wide][narrow][narrow]
    const isWide = index === 0 || index === 3;
    const colClass = isWide
        ? "md:col-span-2 lg:col-span-2"
        : "md:col-span-1 lg:col-span-1";

    const displayImages = project.images?.length ? project.images : project.image ? [project.image] : [];

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className={`${colClass} group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_8px_30px_rgba(6,182,212,0.1)]`}
        >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                style={{ background: "linear-gradient(90deg, transparent, #22d3ee 50%, transparent)" }}
            />

            <div className="relative z-10 p-6 flex flex-col h-full">

                {/* ── Header row ── */}
                <div className="flex items-start justify-between mb-4">
                    <div className="font-mono text-[11px] font-bold tracking-widest text-slate-400 dark:text-slate-500 group-hover:text-cyan-500 transition-colors duration-300">
                        {String(index + 1).padStart(2, "0")} {"//"} PROJECT
                    </div>

                    {/* Live/GitHub badges */}
                    <div className="flex items-center gap-2">
                        {project.liveUrl && (
                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 backdrop-blur-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                                LIVE
                            </span>
                        )}
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold border border-slate-200 dark:border-slate-700/60 bg-slate-100/60 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400">
                            <Layers size={10} />
                            {project.tech.length} DEPS
                        </span>
                    </div>
                </div>

                {/* ── Main content area ── */}
                {isWide ? (
                    // Wide card: side-by-side layout
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 flex-1">
                        {/* Text side */}
                        <div className="lg:col-span-3 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl lg:text-2xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 leading-tight tracking-tight">
                                    {project.title}
                                </h3>

                                {project.highlight && (
                                    <div className="mb-4 pl-3 border-l-2 border-cyan-500/40 py-1">
                                        <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 leading-relaxed font-mono">
                                            {project.highlight}
                                        </p>
                                    </div>
                                )}

                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-mono mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {project.features && (
                                    <ul className="space-y-1.5">
                                        {project.features.map((f, i) => (
                                            <li key={i} className="flex items-start text-xs text-slate-600 dark:text-slate-300 font-mono">
                                                <span className="text-cyan-500 mr-2 mt-0.5 shrink-0">▹</span>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-1.5 mt-4">
                                {project.tech.map((t) => (
                                    <span key={t} className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 group-hover:border-cyan-500/30 transition-colors duration-300">
                                        <TechIcon tech={t} />
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Image side */}
                        <div className="lg:col-span-2 min-h-[220px] lg:min-h-0">
                            <ImageCarousel images={displayImages} title={project.title} />
                        </div>
                    </div>
                ) : (
                    // Narrow card: stacked layout
                    <div className="flex flex-col flex-1">
                        <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 leading-tight tracking-tight">
                            {project.title}
                        </h3>

                        {project.highlight && (
                            <div className="mb-3 pl-3 border-l-2 border-cyan-500/40 py-1">
                                <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 leading-relaxed font-mono">
                                    {project.highlight}
                                </p>
                            </div>
                        )}

                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-mono mb-4 line-clamp-3">
                            {project.description}
                        </p>

                        {/* Image */}
                        {displayImages.length > 0 && (
                            <div className="w-full aspect-video mb-4 rounded-xl overflow-hidden shrink-0">
                                <ImageCarousel images={displayImages} title={project.title} />
                            </div>
                        )}

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                            {project.tech.map((t) => (
                                <span key={t} className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 group-hover:border-cyan-500/30 transition-colors duration-300">
                                    <TechIcon tech={t} />
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Footer CTA ── */}
                <div className="flex gap-2 mt-5 pt-4 border-t border-slate-200 dark:border-slate-800/60">
                    {project.liveUrl && (
                        <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold font-mono transition-all duration-300 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/50"
                        >
                            <Globe size={13} />
                            Live Demo
                            <ArrowUpRight size={12} className="opacity-60" />
                        </Link>
                    )}
                    {project.github && (
                        <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${project.liveUrl ? "px-3" : "flex-1"} inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold font-mono transition-all duration-300 border border-slate-200 dark:border-slate-700/60 bg-slate-100 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500`}
                        >
                            <GitBranch size={13} />
                            {project.liveUrl ? "Code" : "Source Code"}
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

// ─── Section ───────────────────────────────────────────────────────────────────
export default function Projects() {
    return (
        <section id="projects" className="w-full px-4 md:px-6 py-16 md:py-24 relative overflow-hidden">

            {/* Background ambience */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Clean, simple background lighting (no heavy colors) */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.02, 0.04, 0.02] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px]"
                />
                
                {/* Grid dots background */}
                <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
                    style={{
                        backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl relative z-10">

                {/* ── Section header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16"
                >
                    {/* Terminal prompt label */}
                    <div className="inline-flex items-center gap-2 mb-5">
                        <div className="flex gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                        </div>
                        <span className="font-mono text-xs text-slate-500 ml-2">~/portfolio/projects</span>
                        <span className="font-mono text-xs text-slate-500 dark:text-slate-600">— {projects.length} entries found</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 dark:text-white tracking-tight uppercase">
                        Recent <br className="md:hidden" />
                        <span className="bg-linear-to-r from-slate-700 to-cyan-600 dark:from-white dark:to-cyan-400 bg-clip-text text-transparent">
                            Deployments
                        </span>
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-500 font-mono max-w-xl">
                        {"//"} production systems · AI integrations · open-source contributions
                    </p>
                </motion.div>

                {/* ── Bento grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
