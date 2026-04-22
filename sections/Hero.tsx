"use client";

import { Suspense } from "react";
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
    return (
        <section className="w-full px-4 pb-8 pt-24 md:px-6">
            <div className="mx-auto flex max-w-7xl justify-between flex-col md:flex-row">
                {/* Left Side - Content with Framer Motion */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col justify-center min-h-[50vh] md:h-[70vh] md:min-h-130 w-full px-8 py-8 md:w-[48%] md:px-12 md:py-10 z-10"
                >
                    <div className="space-y-6">
                        {/* Greeting */}
                        <motion.div variants={itemVariants} className="inline-block">
                            <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                                Hello, I'm
                            </p>
                        </motion.div>

                        {/* Name */}
                        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white tracking-tighter leading-tight drop-shadow-sm">
                            Dipjyoti Das
                        </motion.h1>



                        {/* Description */}
                        <motion.p variants={itemVariants} className="text-base md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg font-medium">
                            Passionate about building exceptional digital experiences. 
                            I specialize in creating modern web applications with 
                            cutting-edge technologies.
                        </motion.p>

                        {/* Social Links */}
                        <motion.div variants={itemVariants} className="flex gap-4 pt-2">
                            <Link
                                href="https://github.com/dipexplorer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all duration-300 shadow-sm border border-zinc-200 dark:border-zinc-700 hover:-translate-y-1 hover:shadow-md"
                            >
                                <GitBranch className="w-5 h-5" />
                            </Link>
                            <Link
                                href="https://linkedin.com/in/dipjyoti-das"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all duration-300 shadow-sm border border-zinc-200 dark:border-zinc-700 hover:-translate-y-1 hover:shadow-md hover:text-blue-600 dark:hover:text-blue-400"
                            >
                                <LinkedinIcon className="w-5 h-5" />
                            </Link>
                            <Link
                                href="mailto:contact@dipjyoti.dev"
                                className="p-3 rounded-xl bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all duration-300 shadow-sm border border-zinc-200 dark:border-zinc-700 hover:-translate-y-1 hover:shadow-md hover:text-purple-600 dark:hover:text-purple-400"
                            >
                                <Mail className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-6">
                            <Link
                                href="#projects"
                                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold overflow-hidden transition-transform active:scale-95 shadow-lg"
                            >
                                <div className="absolute inset-0 w-full h-full bg-linear-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Projects</span>
                            </Link>
                            <Link
                                href="/DIPJYOTI_DAS_resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm text-zinc-900 dark:text-white font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 active:scale-95"
                            >
                                <Download className="w-5 h-5" />
                                Resume
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Side - 3D Model */}
                <div 
                    className="relative h-[60vh] md:h-[70vh] min-h-130 w-full overflow-hidden px-4 md:px-8 py-8 md:w-[50%] md:py-10 flex items-center justify-center"
                >
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
                </div>
            </div>
        </section>
    );
}
