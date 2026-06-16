"use client";

import { Suspense, useState, useEffect } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "@/components/Model";
import CanvasLoader from "@/components/CanvasLoader";
import { GitBranch, Mail, Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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

// 2D SVG Technical Blueprint Fallback for systems without WebGL support
const WebGLFallback = () => (
    <div className="w-full h-full flex flex-col items-center justify-center relative p-6 select-none font-mono">
        <div className="absolute inset-0 opacity-10 border border-dashed border-cyan-500/30 rounded-xl m-4 pointer-events-none" />
        
        {/* Animated concentric tech circles */}
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative w-48 h-48 border border-dashed border-cyan-500/30 rounded-full flex items-center justify-center mb-6"
        >
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-40 h-40 border border-cyan-500/20 rounded-full border-t-cyan-500/50 flex items-center justify-center"
            >
                <div className="w-28 h-28 border border-dashed border-cyan-500/10 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 border border-cyan-500/40 rounded-full flex items-center justify-center bg-cyan-950/20">
                        <span className="text-[10px] text-cyan-400 font-bold">2D_GRID</span>
                    </div>
                </div>
            </motion.div>
            
            {/* Compass ticks */}
            <div className="absolute top-0 w-0.5 h-2 bg-cyan-500/60" />
            <div className="absolute bottom-0 w-0.5 h-2 bg-cyan-500/60" />
            <div className="absolute left-0 h-0.5 w-2 bg-cyan-500/60" />
            <div className="absolute right-0 h-0.5 w-2 bg-cyan-500/60" />
        </motion.div>
        
        {/* Technical specs readout */}
        <div className="text-center space-y-1.5 text-xs text-slate-400 max-w-xs">
            <p className="text-cyan-400 font-bold text-sm tracking-widest">[SYS_SCHEMATIC_NODE]</p>
            <p className="text-[10px] text-cyan-500/60">// hardware accelerated canvas disabled</p>
            <div className="h-[1px] w-12 bg-cyan-500/30 mx-auto my-2" />
            <p className="text-[10px]">TARGET_REF: DIP_CORE_v2.0</p>
            <p className="text-[9px] text-slate-500">STATUS: RENDER_FALLBACK_ACTIVE</p>
        </div>
    </div>
);

// Framer Motion variants for staggered animation
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } },
};

export default function Hero() {
    const [webglAvailable, setWebglAvailable] = useState<boolean | null>(null);

    useEffect(() => {
        try {
            const canvas = document.createElement("canvas");
            const available = !!(
                window.WebGLRenderingContext &&
                (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
            );
            setWebglAvailable(available);
        } catch (e) {
            setWebglAvailable(false);
        }
    }, []);

    return (
        <section className="w-full px-4 pb-8 pt-24 md:px-6 relative">
            <div className="mx-auto flex max-w-7xl justify-between flex-col md:flex-row items-center gap-8 md:gap-4">
                {/* Left Side - Content with Framer Motion */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col justify-center min-h-[50vh] md:h-[70vh] md:min-h-130 w-full px-4 py-8 md:w-[48%] md:px-12 md:py-10 z-10 border border-cyan-800/10 bg-slate-950/30 rounded-2xl relative overflow-hidden"
                >
                    {/* Technical framing lines */}
                    <div className="absolute top-3 left-3 text-[8px] text-cyan-500/35 font-mono">NODE // HERO_INIT</div>
                    <div className="absolute bottom-3 right-3 text-[8px] text-cyan-500/35 font-mono">LOC: 26°11&apos;N 91°44&apos;E</div>
                    
                    <div className="space-y-6">
                        {/* Greeting */}
                        <motion.div variants={itemVariants} className="inline-block">
                            <span className="text-[10px] font-mono text-cyan-400 border border-cyan-500/25 px-2.5 py-1 rounded-sm uppercase tracking-widest bg-cyan-950/20">
                                IDENTITY // SYSTEMS_DEV
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                            Dipjyoti Das
                        </motion.h1>

                        {/* Description */}
                        <motion.p variants={itemVariants} className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-lg font-mono">
                            {"// Building robust backend systems, distributed architectures, and AI-powered platforms."}
                            <br />
                            {"// Specializing in real-time Socket communication and high-load database optimization."}
                        </motion.p>

                        {/* Social Links */}
                        <motion.div variants={itemVariants} className="flex gap-4 pt-2">
                            <Link
                                href="https://github.com/dipexplorer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-cyan-950/20 text-cyan-400 border border-cyan-800/30 hover:border-cyan-500/50 hover:bg-cyan-950/45 hover:text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                            >
                                <GitBranch className="w-5 h-5" />
                            </Link>
                            <Link
                                href="https://linkedin.com/in/dipjyoti-das"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-cyan-950/20 text-cyan-400 border border-cyan-800/30 hover:border-cyan-500/50 hover:bg-cyan-950/45 hover:text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                            >
                                <LinkedinIcon className="w-5 h-5" />
                            </Link>
                            <Link
                                href="mailto:contact@dipjyoti.dev"
                                className="p-3 rounded-xl bg-cyan-950/20 text-cyan-400 border border-cyan-800/30 hover:border-cyan-500/50 hover:bg-cyan-950/45 hover:text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                            >
                                <Mail className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="#projects"
                                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 font-mono text-xs uppercase tracking-[0.2em] transition-all active:scale-95 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:bg-cyan-900/60 hover:text-cyan-300 duration-300 cursor-pointer"
                            >
                                <span className="relative z-10">View Projects_</span>
                            </Link>
                            <Link
                                href="/DIPJYOTI_DAS_resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-cyan-800/40 bg-slate-950 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 font-mono text-xs uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer"
                            >
                                <Download className="w-4 h-4" />
                                Resume
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Side - 3D Model / Fallback */}
                <div 
                    className="relative h-[60vh] md:h-[70vh] min-h-130 w-full overflow-hidden px-4 md:px-8 py-8 md:w-[50%] md:py-10 flex items-center justify-center border border-cyan-800/10 bg-slate-950/20 rounded-2xl backdrop-blur-xs"
                >
                    {/* Technical framing lines */}
                    <div className="absolute top-3 left-3 text-[8px] text-cyan-500/35 font-mono">SYS_3D_MODEL</div>
                    <div className="absolute bottom-3 right-3 text-[8px] text-cyan-500/35 font-mono">COORD: [2.55, 0.25, 0]</div>
                    
                    {webglAvailable === false ? (
                        <WebGLFallback />
                    ) : (
                        <Canvas
                            className="w-full h-full cursor-grab active:cursor-grabbing"
                            dpr={[1, 1.25]}
                            frameloop="always"
                            gl={{
                                antialias: false,
                                powerPreference: "low-power",
                            }}
                        >
                            <ambientLight intensity={1.3} />
                            <directionalLight
                                position={[6, 8, 6]}
                                intensity={1.45}
                            />
                            <pointLight position={[-4, 3, 4]} intensity={1.1} />
                            <Suspense fallback={<CanvasLoader />}>
                                <PerspectiveCamera
                                    makeDefault
                                    position={[3.4, 1.1, 10.8]}
                                />
                                <Model
                                    position={[2.8, -1.55, 0]}
                                    rotation={[0, -0.3, 0]}
                                    scale={2.5}
                                />
                            </Suspense>
                            <OrbitControls
                                enablePan={true}
                                enableZoom={true}
                                enableRotate={true}
                                minDistance={3.2}
                                maxDistance={22}
                                minPolarAngle={0}
                                maxPolarAngle={Math.PI}
                                target={[2.55, 0.25, 0]}
                            />
                        </Canvas>
                    )}
                </div>
            </div>
        </section>
    );
}
