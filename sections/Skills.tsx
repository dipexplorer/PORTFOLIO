"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Terminal, BrainCircuit, Search, MessageSquare,
    Database, Globe, Server, BookOpen, ArrowRight
} from "lucide-react";
import {
    SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFramer,
    SiNodedotjs, SiExpress, SiFastapi, SiPython,
    SiMongodb, SiPostgresql, SiRedis, SiDocker, SiFirebase,
    SiNumpy, SiPandas, SiScikitlearn, SiHuggingface, SiLangchain,
    SiVercel, SiSupabase, SiSocketdotio,
    SiShadcnui, SiRadixui, SiOpenjdk, SiGithubactions, SiPostman, SiJest
} from "react-icons/si";

// ─── Types ────────────────────────────────────────────────────────────────────
type Skill = { name: string; level: number; desc: string; icon: React.ReactNode; badge?: "CORE" | "ACTIVE" | "LEARNING" };
type Category = { id: string; title: string; subtitle: string; icon: React.ReactNode; color: string; glow: string; border: string; bg: string; skills: Skill[] };

const BADGE = { CORE: "bg-slate-700/60 text-slate-200 border-slate-600/50", ACTIVE: "bg-cyan-500/10 text-cyan-400 border-cyan-500/25", LEARNING: "bg-amber-500/10 text-amber-400 border-amber-500/25" };

// ─── Data ─────────────────────────────────────────────────────────────────────
const CATEGORIES: Category[] = [
    {
        id: "frontend", title: "Frontend Engineering", subtitle: "Immersive & responsive UI",
        icon: <Globe className="w-4 h-4" />, color: "text-cyan-400", glow: "rgba(6,182,212,0.18)",
        border: "border-cyan-500/35", bg: "bg-cyan-500/8",
        skills: [
            { name: "React", level: 95, desc: "Component-driven UI architecture", icon: <SiReact />, badge: "CORE" },
            { name: "Next.js", level: 90, desc: "Production React meta-framework", icon: <SiNextdotjs />, badge: "CORE" },
            { name: "TypeScript", level: 85, desc: "Static type-safe JavaScript", icon: <SiTypescript />, badge: "CORE" },
            { name: "Tailwind CSS", level: 95, desc: "Utility-first CSS framework", icon: <SiTailwindcss />, badge: "CORE" },
            { name: "Framer Motion", level: 80, desc: "Production animation library", icon: <SiFramer />, badge: "ACTIVE" },
            { name: "shadcn/ui", level: 90, desc: "Accessible UI components", icon: <SiShadcnui />, badge: "CORE" },
            { name: "Radix UI", level: 85, desc: "Unstyled primitive components", icon: <SiRadixui />, badge: "ACTIVE" },
        ]
    },
    {
        id: "backend", title: "Backend Systems", subtitle: "Scalable API architecture",
        icon: <Server className="w-4 h-4" />, color: "text-violet-400", glow: "rgba(139,92,246,0.18)",
        border: "border-violet-500/35", bg: "bg-violet-500/8",
        skills: [
            { name: "Node.js", level: 90, desc: "V8 JavaScript server runtime", icon: <SiNodedotjs />, badge: "CORE" },
            { name: "Express.js", level: 85, desc: "Minimalist HTTP web framework", icon: <SiExpress />, badge: "CORE" },
            { name: "FastAPI", level: 75, desc: "Async Python REST APIs", icon: <SiFastapi />, badge: "ACTIVE" },
            { name: "Python", level: 80, desc: "Scripting, pipelines & ML glue", icon: <SiPython />, badge: "CORE" },
            { name: "Java", level: 80, desc: "Object-oriented backend dev", icon: <SiOpenjdk />, badge: "CORE" },
            { name: "Socket.io", level: 70, desc: "Real-time bidirectional events", icon: <SiSocketdotio />, badge: "ACTIVE" },
            { name: "Jest", level: 75, desc: "JavaScript Testing Framework", icon: <SiJest />, badge: "ACTIVE" },
        ]
    },
    {
        id: "ai_ml", title: "AI & Machine Learning", subtitle: "LLMs, RAG & Data Science",
        icon: <BrainCircuit className="w-4 h-4" />, color: "text-amber-400", glow: "rgba(245,158,11,0.18)",
        border: "border-amber-500/35", bg: "bg-amber-500/8",
        skills: [
            { name: "LLMs / Mistral", level: 82, desc: "Prompt engineering & model integration", icon: <BrainCircuit className="w-4 h-4" />, badge: "CORE" },
            { name: "RAG Pipelines", level: 78, desc: "Retrieval-augmented generation", icon: <Search className="w-4 h-4" />, badge: "CORE" },
            { name: "Prompt Eng.", level: 90, desc: "Context window optimization", icon: <MessageSquare className="w-4 h-4" />, badge: "CORE" },
            { name: "LangChain", level: 68, desc: "LLM orchestration chains", icon: <SiLangchain />, badge: "LEARNING" },
            { name: "Hugging Face", level: 62, desc: "Open-source model hub & inference", icon: <SiHuggingface />, badge: "LEARNING" },
            { name: "Scikit-learn", level: 65, desc: "Classical ML algorithms", icon: <SiScikitlearn />, badge: "LEARNING" },
            { name: "NumPy", level: 75, desc: "Numerical computing arrays", icon: <SiNumpy />, badge: "ACTIVE" },
            { name: "Pandas", level: 72, desc: "Data wrangling & EDA", icon: <SiPandas />, badge: "ACTIVE" },
        ]
    },
    {
        id: "data_infra", title: "Data & Infra", subtitle: "Persistence & deployment",
        icon: <Database className="w-4 h-4" />, color: "text-emerald-400", glow: "rgba(16,185,129,0.18)",
        border: "border-emerald-500/35", bg: "bg-emerald-500/8",
        skills: [
            { name: "MongoDB", level: 85, desc: "NoSQL document database", icon: <SiMongodb />, badge: "CORE" },
            { name: "Firebase", level: 88, desc: "Realtime BAAS & Auth", icon: <SiFirebase />, badge: "CORE" },
            { name: "Supabase", level: 80, desc: "Open-source Firebase alternative", icon: <SiSupabase />, badge: "ACTIVE" },
            { name: "PostgreSQL", level: 78, desc: "Relational SQL database", icon: <SiPostgresql />, badge: "ACTIVE" },
            { name: "Redis", level: 72, desc: "In-memory caching layer", icon: <SiRedis />, badge: "ACTIVE" },
            { name: "Docker", level: 68, desc: "Container & microservice orchestration", icon: <SiDocker />, badge: "ACTIVE" },
            { name: "Vercel", level: 90, desc: "Edge-first deployment platform", icon: <SiVercel />, badge: "CORE" },
            { name: "GitHub Actions", level: 85, desc: "CI/CD pipelines automation", icon: <SiGithubactions />, badge: "CORE" },
            { name: "Postman", level: 90, desc: "API development & testing", icon: <SiPostman />, badge: "ACTIVE" },
        ]
    }
];

// ─── Glitch Text ──────────────────────────────────────────────────────────────
const GlitchText = ({ text }: { text: string }) => {
    const [display, setDisplay] = useState(text);
    const chars = "!<>-_\\/[]{}=+*^?#";
    useEffect(() => {
        let i = 0;
        const iv = setInterval(() => {
            setDisplay(text.split("").map((ch, idx) => idx < i ? text[idx] : chars[Math.floor(Math.random() * chars.length)]).join(""));
            if (i >= text.length) clearInterval(iv);
            i += 1 / 3;
        }, 28);
        return () => clearInterval(iv);
    }, [text]);
    return <span>{display}</span>;
};

// ─── Animated Progress Bar ────────────────────────────────────────────────────
const ProgressBar = ({ level, color, animate }: { level: number; color: string; animate: boolean }) => (
    <div className="flex items-center gap-2.5 mt-2.5">
        <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
                className={`h-full rounded-full ${color.replace("text-", "bg-")}`}
                initial={{ width: 0 }}
                animate={{ width: animate ? `${level}%` : 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
        </div>
        <span className={`text-[10px] font-mono font-bold tabular-nums ${color}`}>{level}%</span>
    </div>
);

// ─── Skill Card ───────────────────────────────────────────────────────────────
const SkillCard = ({ skill, cat, index, animate }: { skill: Skill; cat: Category; index: number; animate: boolean }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, delay: index * 0.055 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group relative p-4 rounded-xl border border-slate-800/70 bg-slate-900/40 transition-all duration-300 cursor-default overflow-hidden"
            style={{
                borderColor: hovered ? cat.glow.replace("0.18", "0.5") : undefined,
                boxShadow: hovered ? `0 0 18px ${cat.glow}` : "none",
            }}
        >
            {/* Glow fill */}
            <div className="absolute inset-0 transition-opacity duration-300 pointer-events-none rounded-xl"
                style={{ background: `radial-gradient(ellipse at 20% 20%, ${cat.glow}, transparent 65%)`, opacity: hovered ? 1 : 0 }} />

            {/* Corner brackets */}
            <div className={`absolute top-2 left-2 w-2 h-2 border-t border-l ${cat.color.replace("text-", "border-")} opacity-0 group-hover:opacity-80 transition-all duration-300`} />
            <div className={`absolute bottom-2 right-2 w-2 h-2 border-b border-r ${cat.color.replace("text-", "border-")} opacity-0 group-hover:opacity-80 transition-all duration-300`} />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                        <span className={`text-base transition-transform duration-300 group-hover:scale-110 ${cat.color}`}>{skill.icon}</span>
                        <span className="text-sm font-bold text-white font-mono">{skill.name}</span>
                    </div>
                    {skill.badge && (
                        <span className={`text-[8px] font-mono font-bold px-1.5 py-0.5 rounded border tracking-widest ${BADGE[skill.badge]}`}>
                            {skill.badge === "LEARNING" ? <span className="flex items-center gap-1"><BookOpen className="w-2.5 h-2.5" />{skill.badge}</span> : skill.badge}
                        </span>
                    )}
                </div>
                <p className="text-[11px] text-slate-500 font-mono leading-snug mb-0.5">{skill.desc}</p>
                <ProgressBar level={skill.level} color={cat.color} animate={animate} />
            </div>
        </motion.div>
    );
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Skills() {
    const [activeId, setActiveId] = useState(CATEGORIES[0].id);
    const active = CATEGORIES.find(c => c.id === activeId)!;

    const handleTab = (id: string) => { setActiveId(id); };

    const stats = { core: active.skills.filter(s => s.badge === "CORE").length, learning: active.skills.filter(s => s.badge === "LEARNING").length };

    return (
        <section id="skills" className="w-full px-4 md:px-6 py-20 md:py-28 relative overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-slate-950" />
                <div className="absolute inset-0 opacity-[0.022]"
                    style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="mx-auto max-w-7xl relative z-10">

                {/* ── Header ── */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.55 }} className="mb-14 text-center">
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded border border-slate-800 bg-slate-900/60">
                        <Terminal className="w-3.5 h-3.5 text-slate-500" />
                        <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">sys.stack.diagnostics</span>
                        <span className="w-1 h-3 bg-slate-500 animate-pulse ml-1" />
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
                        Technical <span className="text-slate-600">Arsenal_</span>
                    </h2>
                    <div className="flex flex-wrap items-center justify-center gap-3 mt-5 text-[9px] font-mono">
                        {[
                            { label: "CORE SKILL", cls: "bg-slate-700/50 text-slate-300 border-slate-600/50" },
                            { label: "ACTIVELY USING", cls: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30" },
                            { label: "CURRENTLY LEARNING", cls: "bg-amber-500/10 text-amber-400 border-amber-500/30" },
                        ].map(({ label, cls }) => (
                            <span key={label} className={`px-2.5 py-1 rounded border tracking-widest ${cls}`}>{label}</span>
                        ))}
                    </div>
                </motion.div>

                {/* ── Main Layout ── */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 max-w-6xl mx-auto">

                    {/* ── Left Panel: Category Nav ── */}
                    <div className="lg:w-[280px] shrink-0 flex flex-col gap-2.5">
                        <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest pl-1 mb-1">{"//"} SELECT MODULE</p>

                        {CATEGORIES.map((cat) => {
                            const isActive = cat.id === activeId;
                            return (
                                <motion.button
                                    key={cat.id}
                                    onClick={() => handleTab(cat.id)}
                                    whileHover={{ x: isActive ? 0 : 4 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    className={`relative flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-300 overflow-hidden w-full ${
                                        isActive
                                            ? `${cat.border} ${cat.bg}`
                                            : "border-slate-800/60 bg-slate-900/20 hover:bg-slate-800/30 hover:border-slate-700"
                                    }`}
                                    style={{ boxShadow: isActive ? `0 0 20px ${cat.glow}` : "none" }}
                                >
                                    {/* Active scan line */}
                                    {isActive && (
                                        <motion.div layoutId="scanline"
                                            className="absolute inset-0 opacity-[0.06]"
                                            style={{ background: `repeating-linear-gradient(0deg, transparent, transparent 3px, ${cat.glow} 3px, ${cat.glow} 4px)` }}
                                        />
                                    )}

                                    {/* Icon */}
                                    <div className={`p-2 rounded-lg shrink-0 transition-all duration-300 ${isActive ? cat.bg : "bg-slate-800/60"}`}
                                        style={{ boxShadow: isActive ? `0 0 10px ${cat.glow}` : "none" }}>
                                        <span className={isActive ? cat.color : "text-slate-500"}>{cat.icon}</span>
                                    </div>

                                    {/* Text */}
                                    <div className="flex flex-col min-w-0">
                                        <span className={`text-sm font-bold font-mono truncate ${isActive ? "text-white" : "text-slate-400"}`}>
                                            {cat.title}
                                        </span>
                                        <span className="text-[10px] text-slate-600 mt-0.5 truncate">{cat.subtitle}</span>
                                    </div>

                                    {/* Skill count + arrow */}
                                    <div className="ml-auto flex items-center gap-1.5 shrink-0">
                                        <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${isActive ? `${cat.color} bg-white/10` : "text-slate-600 bg-slate-800"}`}>
                                            {cat.skills.length}
                                        </span>
                                        <ArrowRight className={`w-3 h-3 transition-all duration-300 ${isActive ? `${cat.color} translate-x-0.5` : "text-slate-700"}`} />
                                    </div>

                                    {/* Active indicator bar */}
                                    {isActive && (
                                        <motion.div layoutId="activebar"
                                            className={`absolute right-0 top-2 bottom-2 w-0.5 rounded-l-full ${cat.color.replace("text-", "bg-")}`}
                                        />
                                    )}
                                </motion.button>
                            );
                        })}

                        {/* System telemetry panel */}
                        <div className="mt-4 p-4 rounded-xl border border-slate-800 bg-slate-900/30 font-mono text-[10px]">
                            <div className="text-slate-600 mb-3 tracking-widest">{"//"} SYS_INFO</div>
                            {[
                                { label: "STATUS", value: "ONLINE", cls: "text-emerald-400" },
                                { label: "MODULES", value: CATEGORIES.length.toString(), cls: "text-slate-300" },
                                { label: "SKILLS", value: CATEGORIES.reduce((a, c) => a + c.skills.length, 0).toString(), cls: "text-slate-300" },
                                { label: "LEARNING", value: CATEGORIES.reduce((a, c) => a + c.skills.filter(s => s.badge === "LEARNING").length, 0).toString(), cls: "text-amber-400" },
                            ].map(({ label, value, cls }) => (
                                <div key={label} className="flex justify-between items-center py-1 border-b border-slate-800/50 last:border-0">
                                    <span className="text-slate-600">{label}:</span>
                                    <span className={`font-bold ${cls}`}>{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right Panel: Skill Grid ── */}
                    <div className="flex-1 min-w-0">

                        {/* Terminal header */}
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                            <div className="flex gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                            </div>
                            <div className="flex-1 font-mono text-xs flex items-center gap-2">
                                <span className="text-slate-600">›</span>
                                <span className={`${active.color} font-bold`}>
                                    <GlitchText key={activeId} text={`${active.title.toUpperCase()} // ${active.subtitle.toUpperCase()}`} />
                                </span>
                                <span className="w-1.5 h-4 bg-slate-500 animate-pulse" />
                            </div>
                            <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500">
                                {stats.core > 0 && <span><span className="text-white font-bold">{stats.core}</span> core</span>}
                                {stats.learning > 0 && (
                                    <span className="flex items-center gap-1 text-amber-400">
                                        <BookOpen className="w-3 h-3" />
                                        <span className="font-bold">{stats.learning}</span> learning
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Cards */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.22 }}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                            >
                                {active.skills.map((skill, i) => (
                                    <SkillCard key={skill.name} skill={skill} cat={active} index={i} animate={true} />
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* ── Bottom "Secondary Protocols" ── */}
                <div className="mt-24 relative w-full max-w-5xl mx-auto">
                    {/* Glowing Top Line */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-2xl h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" />
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1/4 h-[2px] bg-linear-to-r from-transparent via-cyan-400 to-transparent blur-[2px]" />
                    
                    <div className="pt-10 flex flex-col items-center">
                        <motion.div 
                            initial={{ opacity: 0 }} 
                            whileInView={{ opacity: 1 }} 
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <span className="w-12 h-px bg-slate-800" />
                            <span className="font-mono text-xs text-slate-400 tracking-widest uppercase flex items-center gap-2">
                                <Terminal className="w-4 h-4 text-cyan-500" />
                                Secondary_Protocols
                            </span>
                            <span className="w-12 h-px bg-slate-800" />
                        </motion.div>

                        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                            {["Mongoose", "Passport.js", "JWT Auth", "OAuth 2.0", "Cloudinary", "pgvector", "PostGIS", "REST APIs", "WebSockets", "Webhooks", "Zod", "EJS", "IPFS", "Whisper ASR", "TF Lite", "ESLint", "CRON", "Git"].map((tech, i) => (
                                <motion.div 
                                    key={tech}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.2 + (i * 0.04) }}
                                    className="group relative px-4 py-2 rounded-lg border border-slate-800/80 bg-slate-900/40 hover:bg-slate-800/80 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-default overflow-hidden"
                                >
                                    {/* Shine effect on hover */}
                                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                                    
                                    <span className="relative z-10 font-mono text-xs font-bold text-slate-400 group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                                        <span className="text-slate-600 group-hover:text-cyan-500 transition-colors">~</span>
                                        {tech}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
