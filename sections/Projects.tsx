"use client";

import { useState, useRef } from "react";
import { projects } from "@/data/projects";
import { GitBranch, Globe, ArrowUpRight } from "lucide-react";
import { 
    SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFramer,
    SiNodedotjs, SiExpress, SiFastapi, SiPython, SiGo, SiRust,
    SiMongodb, SiPostgresql, SiRedis, SiDocker, SiFirebase, SiIpfs, SiJsonwebtokens
} from "react-icons/si";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, MotionValue, useSpring } from "framer-motion";
import { Project } from "@/types/project";

// ─── Tech Icon Helper ──────────────────────────────────────────────────────────
const TechIcon = ({ tech }: { tech: string }) => {
    const t = tech.toLowerCase();
    if (t.includes("next")) return <SiNextdotjs size={12} className="opacity-80" />;
    if (t.includes("react")) return <SiReact size={12} className="opacity-80" />;
    if (t.includes("typescript") || t.includes("ts")) return <SiTypescript size={12} className="opacity-80" />;
    if (t.includes("tailwind")) return <SiTailwindcss size={12} className="opacity-80" />;
    if (t.includes("framer")) return <SiFramer size={12} className="opacity-80" />;
    if (t.includes("node")) return <SiNodedotjs size={12} className="opacity-80" />;
    if (t.includes("express")) return <SiExpress size={12} className="opacity-80" />;
    if (t.includes("python")) return <SiPython size={12} className="opacity-80" />;
    if (t.includes("fastapi")) return <SiFastapi size={12} className="opacity-80" />;
    if (t.includes("go")) return <SiGo size={12} className="opacity-80" />;
    if (t.includes("redis")) return <SiRedis size={12} className="opacity-80" />;
    if (t.includes("rust")) return <SiRust size={12} className="opacity-80" />;
    if (t.includes("mongo")) return <SiMongodb size={12} className="opacity-80" />;
    if (t.includes("supabase") || t.includes("postgres") || t.includes("sql")) return <SiPostgresql size={12} className="opacity-80" />;
    if (t.includes("docker")) return <SiDocker size={12} className="opacity-80" />;
    if (t.includes("firebase") || t.includes("firestore")) return <SiFirebase size={12} className="opacity-80" />;
    if (t.includes("ipfs")) return <SiIpfs size={12} className="opacity-80" />;
    if (t.includes("jwt")) return <SiJsonwebtokens size={12} className="opacity-80" />;
    return <Globe size={12} className="opacity-80" />;
};

// ─── Spherical 3D Project Card ────────────────────────────────────────────────
const SphericalProjectCard = ({ 
    project, 
    index, 
    total, 
    scrollYProgress 
}: { 
    project: Project; 
    index: number; 
    total: number;
    scrollYProgress: MotionValue<number>;
}) => {
    // Calculate the perfect "active" scroll point for this card.
    // Spread them evenly across the 0 to 1 scroll range.
    const active = (index + 0.5) / total; 

    // Spherical Math:
    // When scroll reaches 'active', y=0, z=0, rotateX=0 (front and center)
    // When scroll is BEFORE 'active', it is down (y>0), pushed back (z<0), and tilted back (rotateX>0)
    // When scroll is AFTER 'active', it flies up (y<0), pushed back (z<0), and tilted forward (rotateX<0)
    
    // Wrap in useSpring to disable WAAPI hardware-acceleration (which crashes on negative offsets) and add smooth inertia
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 300, damping: 40, mass: 1 });

    const yOffset = useTransform(smoothProgress, [active - 0.3, active, active + 0.3], [1200, 0, -1200]); 
    const zOffset = useTransform(smoothProgress, [active - 0.3, active, active + 0.3], [-1500, 0, -1500]); 
    const rotateX = useTransform(smoothProgress, [active - 0.3, active, active + 0.3], [70, 0, -70]); 
    const opacity = useTransform(smoothProgress, [active - 0.25, active - 0.1, active + 0.1, active + 0.25], [0, 1, 1, 0]);
    const scale = useTransform(smoothProgress, [active - 0.3, active, active + 0.3], [0.6, 1, 0.6]);

    const displayImages = project.images?.length ? project.images : project.image ? [project.image] : [];

    return (
        <motion.div
            style={{ 
                y: yOffset, 
                z: zOffset, 
                rotateX, 
                opacity, 
                scale,
                willChange: "transform, opacity"
            }}
            className="absolute w-[92vw] md:w-[75vw] lg:w-[65vw] max-w-5xl bg-[#030303] border border-slate-800 shadow-2xl flex flex-col md:flex-row overflow-hidden group hover:border-slate-600 transition-colors duration-500 rounded-xl"
        >
            {/* Image Side */}
            {displayImages.length > 0 && (
                <div className="w-full md:w-1/2 aspect-video md:aspect-auto md:h-[500px] border-b md:border-b-0 md:border-r border-slate-800 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img 
                        src={displayImages[0]} 
                        alt={project.title}
                        className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#030303] via-transparent to-transparent pointer-events-none" />
                    
                    {/* Red Hover Accent */}
                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-red-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-20" />
                </div>
            )}

            {/* Content Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col h-full bg-[#030303] relative z-10">
                <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-3xl font-black text-slate-800 group-hover:text-red-600/50 transition-colors duration-500">
                        0{index + 1}
                    </span>
                    {project.liveUrl && (
                        <span className="inline-flex items-center gap-2 px-3 py-1 font-mono text-[10px] font-bold text-red-500 border border-red-500/30 bg-red-950/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                            ONLINE
                        </span>
                    )}
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-red-500 transition-colors duration-300">
                    {project.title}
                </h3>

                {project.highlight && (
                    <p className="text-sm font-bold text-red-500 font-mono mb-6 border-l-2 border-red-500 pl-4">
                        {project.highlight}
                    </p>
                )}

                <p className="text-sm text-slate-400 font-mono leading-relaxed mb-8">
                    {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.slice(0, 8).map((t) => (
                        <span key={t} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono font-bold border border-slate-800 bg-[#0a0a0a] text-slate-300">
                            <TechIcon tech={t} />
                            {t}
                        </span>
                    ))}
                    {project.tech.length > 8 && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono font-bold border border-slate-800 bg-[#0a0a0a] text-slate-500">
                            +{project.tech.length - 8} MORE
                        </span>
                    )}
                </div>

                {/* Footer Buttons */}
                <div className="flex gap-4 mt-auto">
                    {project.liveUrl && (
                        <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-4 bg-white text-black text-xs font-bold font-mono hover:bg-red-600 hover:text-white transition-colors duration-300"
                        >
                            <Globe size={14} />
                            ENTER
                            <ArrowUpRight size={14} className="opacity-70" />
                        </Link>
                    )}
                    {project.github && (
                        <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${project.liveUrl ? "px-6" : "flex-1"} inline-flex items-center justify-center gap-2 px-6 py-4 border border-slate-800 text-white text-xs font-bold font-mono hover:border-white transition-colors duration-300`}
                        >
                            <GitBranch size={14} />
                            {project.liveUrl ? "SYS" : "SYSTEM CODE"}
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

// ─── Main Section ────────────────────────────────────────────────────────────────
export default function Projects() {
    const trackRef = useRef<HTMLElement>(null);
    
    // We bind the scroll progress to the huge 400vh track.
    const { scrollYProgress } = useScroll({
        target: trackRef,
        offset: ["start start", "end end"]
    });

    return (
        // The Track: We make it massive (100vh per project) so the user has plenty of scroll distance
        <section ref={trackRef} id="projects" className="relative w-full bg-[#000]" style={{ height: `${projects.length * 100}vh` }}>
            
            {/* The Pinned Canvas: Sticks to the screen while you scroll through the track */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center perspective-[1500px]">
                
                {/* Minimalist Header locked to the back */}
                <div className="absolute top-10 md:top-16 left-1/2 -translate-x-1/2 z-0 opacity-20 text-center pointer-events-none">
                    <h2 className="text-[10vw] font-black text-white uppercase tracking-tighter leading-none whitespace-nowrap">
                        ARCHIVES
                    </h2>
                </div>

                {/* Sub-header instruction */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 text-center pointer-events-none">
                    <p className="font-mono text-xs tracking-widest text-slate-500 uppercase flex flex-col items-center gap-2">
                        <span className="w-px h-8 bg-linear-to-b from-red-600 to-transparent" />
                        Scroll to traverse
                    </p>
                </div>

                {/* 3D Carousel Container */}
                <div className="relative w-full h-full flex items-center justify-center perspective-[1500px]">
                    {projects.map((project, i) => (
                        <SphericalProjectCard 
                            key={project.title} 
                            project={project} 
                            index={i} 
                            total={projects.length}
                            scrollYProgress={scrollYProgress} 
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
