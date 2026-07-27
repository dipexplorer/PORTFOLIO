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
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types/project";

// ─── Color palette per project index ──────────────────────────────────────────
const ACCENT_COLORS = [
    { text: "text-emerald-400", border: "border-emerald-500/40", bg: "bg-emerald-500/10", dot: "bg-emerald-400", glow: "rgba(52,211,153,0.12)", badge: "bg-emerald-950/60 text-emerald-300 border-emerald-700/50" },
    { text: "text-violet-400",  border: "border-violet-500/40",  bg: "bg-violet-500/10",  dot: "bg-violet-400",  glow: "rgba(167,139,250,0.12)", badge: "bg-violet-950/60 text-violet-300 border-violet-700/50" },
    { text: "text-amber-400",   border: "border-amber-500/40",   bg: "bg-amber-500/10",   dot: "bg-amber-400",   glow: "rgba(251,191,36,0.12)",  badge: "bg-amber-950/60 text-amber-300 border-amber-700/50"   },
    { text: "text-sky-400",     border: "border-sky-500/40",     bg: "bg-sky-500/10",     dot: "bg-sky-400",     glow: "rgba(56,189,248,0.12)",  badge: "bg-sky-950/60 text-sky-300 border-sky-700/50"         },
    { text: "text-rose-400",    border: "border-rose-500/40",    bg: "bg-rose-500/10",    dot: "bg-rose-400",    glow: "rgba(251,113,133,0.12)", badge: "bg-rose-950/60 text-rose-300 border-rose-700/50"       },
    { text: "text-orange-400",  border: "border-orange-500/40",  bg: "bg-orange-500/10",  dot: "bg-orange-400",  glow: "rgba(251,146,60,0.12)",  badge: "bg-orange-950/60 text-orange-300 border-orange-700/50" },
];

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
const ImageCarousel = ({ images, title, accent }: { images: string[]; title: string; accent: typeof ACCENT_COLORS[0] }) => {
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
        <div className="relative w-full h-full overflow-hidden rounded-xl bg-slate-950/60 group/img">
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
                    className="w-full h-full object-cover object-top absolute inset-0"
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
                <div key={i} className={`absolute w-3 h-3 ${cls} ${accent.border} pointer-events-none z-20 opacity-80`} />
            ))}

            {/* Image count badge */}
            <div className={`absolute top-3 right-3 z-20 px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${accent.badge} backdrop-blur-sm`}>
                {idx + 1}/{total}
            </div>

            {/* Nav arrows — visible on hover */}
            {total > 1 && (
                <>
                    <button
                        onClick={(e) => go(idx - 1, e)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-lg bg-slate-900/70 border border-slate-700/60 text-white opacity-0 group-hover/img:opacity-100 transition-all duration-200 hover:scale-110"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <button
                        onClick={(e) => go(idx + 1, e)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-lg bg-slate-900/70 border border-slate-700/60 text-white opacity-0 group-hover/img:opacity-100 transition-all duration-200 hover:scale-110"
                    >
                        <ChevronRight size={16} />
                    </button>
                    {/* Dot indicators */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => go(i, e)}
                                className={`h-1 rounded-full transition-all duration-300 ${i === idx ? `w-5 ${accent.dot}` : "w-1.5 bg-white/30"}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

// ─── Project number label ──────────────────────────────────────────────────────
const ProjectIndex = ({ n, accent }: { n: number; accent: typeof ACCENT_COLORS[0] }) => (
    <div className={`font-mono text-[11px] font-bold tracking-widest ${accent.text} opacity-60`}>
        {String(n).padStart(2, "0")} {"//"} 
        <span className="opacity-40 text-slate-500 ml-1">PROJECT</span>
    </div>
);

// ─── Individual project card ───────────────────────────────────────────────────
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];
    const cardRef = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        const rX = -((my - rect.height / 2) / rect.height) * 7;
        const rY = ((mx - rect.width / 2) / rect.width) * 7;
        setTilt({ x: rX, y: rY });
        setGlowPos({ x: (mx / rect.width) * 100, y: (my / rect.height) * 100 });
    };

    const displayImages = project.images?.length ? project.images : project.image ? [project.image] : [];

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setIsHovered(false); }}
            style={{
                transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: isHovered ? "transform 0ms" : "transform 500ms cubic-bezier(0.25, 1, 0.5, 1)",
            }}
            className="w-full group relative rounded-2xl overflow-hidden border border-slate-800/70 bg-slate-950/50 backdrop-blur-xl"
        >
            {/* Radial glow on hover */}
            <div
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(600px circle at ${glowPos.x}% ${glowPos.y}%, ${accent.glow}, transparent 70%)`,
                }}
            />

            {/* Top accent line */}
            <div className={`absolute top-0 left-0 right-0 h-[2px] ${accent.bg} group-hover:opacity-100 opacity-60 transition-opacity`} 
                style={{ background: `linear-gradient(90deg, transparent, ${accent.dot.replace("bg-", "").replace("-400", "")} 40%, transparent)` }}
            />

            <div className="relative z-10 p-6 flex flex-col h-full">

                {/* ── Header row ── */}
                <div className="flex items-start justify-between mb-4">
                    <ProjectIndex n={index + 1} accent={accent} />

                    {/* Live/GitHub badges */}
                    <div className="flex items-center gap-2">
                        {project.liveUrl && (
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${accent.badge} backdrop-blur-sm`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${accent.dot} animate-pulse`} />
                                LIVE
                            </span>
                        )}
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold border border-slate-700/60 bg-slate-900/60 text-slate-400">
                            <Layers size={10} />
                            {project.tech.length} DEPS
                        </span>
                    </div>
                </div>

                {/* ── Main content area ── */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 flex-1">
                    {/* Text side */}
                    <div className={`${displayImages.length > 0 ? "lg:col-span-3" : "lg:col-span-5"} flex flex-col justify-between ${displayImages.length > 0 && index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                        <div>
                            <h3 className={`text-xl lg:text-2xl font-black text-white mb-3 group-hover:${accent.text} transition-colors duration-300 leading-tight tracking-tight`}>
                                {project.title}
                            </h3>

                            {project.highlight && (
                                <div className={`mb-4 pl-3 border-l-2 ${accent.border} py-1.5`}>
                                    <p className={`text-xs font-semibold ${accent.text} leading-relaxed font-mono`}>
                                        {project.highlight}
                                    </p>
                                </div>
                            )}

                            <p className="text-sm text-slate-400 leading-relaxed font-mono mb-4">
                                {project.description}
                            </p>

                            {project.features && (
                                <ul className="space-y-1.5">
                                    {project.features.map((f, i) => (
                                        <li key={i} className="flex items-start text-xs text-slate-300 font-mono">
                                            <span className={`${accent.text} mr-2 mt-0.5 shrink-0`}>▹</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5 mt-4">
                            {project.tech.map((t) => (
                                <span key={t} className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${accent.badge} transition-all duration-200`}>
                                    <TechIcon tech={t} />
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Image side */}
                    {displayImages.length > 0 && (
                        <div className={`lg:col-span-2 min-h-[220px] lg:min-h-0 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                            <ImageCarousel images={displayImages} title={project.title} accent={accent} />
                        </div>
                    )}
                </div>

                {/* ── Footer CTA ── */}
                <div className="flex gap-2 mt-5 pt-4 border-t border-slate-800/60">
                    {project.liveUrl && (
                        <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold font-mono transition-all duration-300 ${accent.bg} ${accent.text} border ${accent.border} hover:brightness-125 hover:shadow-lg`}
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
                            className={`${project.liveUrl ? "px-3" : "flex-1"} inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold font-mono transition-all duration-300 border border-slate-700/60 bg-slate-900/50 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500`}
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
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.09, 0.04] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[160px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.07, 0.03] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                    className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-violet-500/15 rounded-full blur-[160px]"
                />
                {/* Grid dots background */}
                <div className="absolute inset-0 opacity-[0.025]"
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
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                        </div>
                        <span className="font-mono text-xs text-slate-500 ml-2">~/portfolio/projects</span>
                        <span className="font-mono text-xs text-slate-600">— {projects.length} entries found</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
                        Recent <br className="md:hidden" />
                        <span className="bg-linear-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                            Deployments
                        </span>
                    </h2>
                    <p className="text-sm text-slate-500 font-mono max-w-xl">
                        {"//"} production systems · AI integrations · open-source contributions
                    </p>
                </motion.div>

                {/* ── Vertical stack ── */}
                <div className="flex flex-col gap-6 md:gap-8">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
