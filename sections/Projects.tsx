"use client";

import { useState, useRef } from "react";
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
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
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

// ─── Monochrome Carousel ────────────────────────────────────────────────────
const ImageCarousel = ({ images, title }: { images: string[]; title: string; }) => {
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
        <div className="relative w-full h-full overflow-hidden bg-slate-100 dark:bg-black group/img grayscale hover:grayscale-0 transition-all duration-700">
            <AnimatePresence initial={false} custom={dir} mode="popLayout">
                <motion.img
                    key={idx}
                    src={images[idx]}
                    alt={`${title} - view ${idx + 1}`}
                    custom={dir}
                    initial={{ x: dir * 60, opacity: 0, scale: 0.97 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: dir * -60, opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className="w-full h-full object-cover object-top absolute inset-0"
                />
            </AnimatePresence>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent pointer-events-none z-10" />

            {/* Corner brackets - Red Accent */}
            {["top-4 left-4 border-t-2 border-l-2", "top-4 right-4 border-t-2 border-r-2",
              "bottom-4 left-4 border-b-2 border-l-2", "bottom-4 right-4 border-b-2 border-r-2"].map((cls, i) => (
                <div key={i} className={`absolute w-4 h-4 ${cls} border-red-600 pointer-events-none z-20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300`} />
            ))}

            {/* Image count badge */}
            <div className={`absolute top-4 right-4 z-20 px-2 py-0.5 text-[10px] font-mono font-bold border border-white/20 text-white bg-black/50 backdrop-blur-sm`}>
                {idx + 1}/{total}
            </div>

            {/* Nav arrows — visible on hover */}
            {total > 1 && (
                <>
                    <button
                        onClick={(e) => go(idx - 1, e)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/80 border border-white/20 text-white opacity-0 group-hover/img:opacity-100 transition-all duration-300 hover:bg-red-600 hover:border-red-600"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <button
                        onClick={(e) => go(idx + 1, e)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/80 border border-white/20 text-white opacity-0 group-hover/img:opacity-100 transition-all duration-300 hover:bg-red-600 hover:border-red-600"
                    >
                        <ChevronRight size={16} />
                    </button>
                    {/* Dot indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => go(i, e)}
                                className={`h-1.5 transition-all duration-300 ${i === idx ? `w-8 bg-red-600` : "w-2 bg-white/40 hover:bg-white"}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

// ─── Project number label ──────────────────────────────────────────────────────
const ProjectIndex = ({ n }: { n: number }) => (
    <div className={`font-mono text-2xl md:text-3xl font-black tracking-tighter text-slate-300 dark:text-slate-800`}>
        0{n}.
    </div>
);

// ─── Alternating Project Card ───────────────────────────────────────────────────
const ProjectCardTimeline = ({ project, index }: { project: Project; index: number }) => {
    const isEven = index % 2 === 0;
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });
    const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });

    const displayImages = project.images?.length ? project.images : project.image ? [project.image] : [];

    return (
        <div ref={ref} className={`relative flex items-center justify-between md:justify-normal w-full mb-24 md:mb-40 group ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}>
            
            {/* Timeline Center Node */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 z-20">
                <motion.div 
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${isInView ? "bg-red-600 border-red-600 scale-150 shadow-[0_0_20px_rgba(220,38,38,0.8)]" : "bg-white dark:bg-black border-slate-300 dark:border-slate-700"}`}
                />
            </div>

            {/* Empty space for alternating layout on desktop */}
            <div className="hidden md:block w-5/12" />

            {/* Card Content */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? 100 : -100, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`w-[calc(100%-4rem)] ml-auto md:ml-0 md:w-5/12 relative bg-white dark:bg-[#050505] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden group-hover:border-slate-400 dark:group-hover:border-slate-600 transition-colors duration-500`}
            >
                {/* Image Section */}
                {displayImages.length > 0 && (
                    <div className="w-full aspect-[16/10] border-b border-slate-200 dark:border-slate-800 overflow-hidden relative">
                        <ImageCarousel images={displayImages} title={project.title} />
                        
                        {/* Red Accent Bar */}
                        <div className="absolute bottom-0 left-0 h-1 bg-red-600 w-0 group-hover:w-full transition-all duration-700 ease-out z-30" />
                    </div>
                )}

                <div className="p-6 md:p-8 flex flex-col h-full relative z-10">
                    <div className="flex items-start justify-between mb-6">
                        <ProjectIndex n={index + 1} />
                        <div className="flex items-center gap-2">
                            {project.liveUrl && (
                                <span className="inline-flex items-center gap-1.5 px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-red-600 dark:text-red-500 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-500 animate-pulse" />
                                    LIVE
                                </span>
                            )}
                        </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-slate-950 dark:text-white mb-4 uppercase tracking-tight group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors duration-300">
                        {project.title}
                    </h3>

                    {project.highlight && (
                        <p className="text-xs font-semibold text-red-600 dark:text-red-500 font-mono mb-4 border-l-2 border-red-600 dark:border-red-500 pl-3">
                            {project.highlight}
                        </p>
                    )}

                    <p className="text-sm text-slate-600 dark:text-slate-400 font-mono leading-relaxed mb-6">
                        {project.description}
                    </p>

                    {/* Tech tags - Monochrome */}
                    <div className="flex flex-wrap gap-2 mt-auto mb-8">
                        {project.tech.map((t) => (
                            <span key={t} className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono font-bold border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0a0a0a] text-slate-700 dark:text-slate-300 transition-colors hover:border-slate-400 dark:hover:border-slate-600">
                                <TechIcon tech={t} />
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Footer CTA */}
                    <div className="flex gap-3 pt-6 border-t border-slate-200 dark:border-slate-800">
                        {project.liveUrl && (
                            <Link
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-950 dark:bg-white text-white dark:text-black text-xs font-bold font-mono hover:bg-red-600 dark:hover:bg-red-600 hover:text-white transition-colors duration-300"
                            >
                                <Globe size={14} />
                                VISIT SITE
                                <ArrowUpRight size={14} className="opacity-70" />
                            </Link>
                        )}
                        {project.github && (
                            <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${project.liveUrl ? "px-4" : "flex-1"} inline-flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs font-bold font-mono hover:border-slate-950 dark:hover:border-white transition-colors duration-300`}
                            >
                                <GitBranch size={14} />
                                {project.liveUrl ? "CODE" : "SOURCE CODE"}
                            </Link>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// ─── Section ───────────────────────────────────────────────────────────────────
export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"]
    });

    return (
        <section ref={sectionRef} id="projects" className="w-full px-4 md:px-6 py-24 md:py-32 relative bg-slate-50 dark:bg-black transition-colors duration-500 overflow-hidden">
            
            <div className="mx-auto max-w-7xl relative z-10">

                {/* ── Section header (Monochrome) ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 md:mb-32 flex flex-col items-center text-center"
                >
                    <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#050505]">
                        <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                        <span className="font-mono text-[10px] tracking-widest text-slate-900 dark:text-white font-bold uppercase">
                            Architecture Showcase
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-950 dark:text-white tracking-tighter uppercase leading-[0.9]">
                        Select <br />
                        <span className="text-red-600 dark:text-red-600 italic font-serif tracking-tight pr-4">Works</span>
                    </h2>
                </motion.div>

                {/* ── Alternating Timeline ── */}
                <div className="relative">
                    {/* Central Axis Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />
                    
                    {/* Animated Red Fill Line */}
                    <motion.div 
                        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-red-600 -translate-x-1/2 origin-top z-10"
                        style={{ scaleY: scrollYProgress }}
                    />

                    <div className="pt-10">
                        {projects.map((project, i) => (
                            <ProjectCardTimeline key={project.title} project={project} index={i} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
