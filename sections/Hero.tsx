"use client";

import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "@/components/Model";
import CanvasLoader from "@/components/CanvasLoader";
import { GitBranch, Mail, Download } from "lucide-react";
import Link from "next/link";

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

export default function Hero() {
    return (
        <section className="w-full px-4 pb-8 pt-24 md:px-6">
            <div className="mx-auto flex max-w-7xl justify-between">
                {/* Left Side - Content */}
                <div className="flex flex-col justify-center h-[70vh] min-h-130 w-full px-8 py-8 md:w-[44%] md:px-16 md:py-10">
                    <div className="space-y-6">
                        {/* Greeting */}
                        <div className="inline-block">
                            <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                                Hello, I'm
                            </p>
                        </div>

                        {/* Name */}
                        <h1 className="text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                            Dipjyoti Das
                        </h1>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-bold text-zinc-700 dark:text-zinc-300">
                            Full Stack Developer
                        </h2>

                        {/* Description */}
                        <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg">
                            Passionate about building exceptional digital experiences. 
                            I specialize in creating modern web applications with 
                            cutting-edge technologies.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-2">
                            <Link
                                href="https://github.com/dipexplorer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-300"
                            >
                                <GitBranch className="w-5 h-5" />
                            </Link>
                            <Link
                                href="https://linkedin.com/in/dipjyoti-das"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-300"
                            >
                                <LinkedinIcon className="w-5 h-5" />
                            </Link>
                            <Link
                                href="mailto:contact@dipjyoti.dev"
                                className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-300"
                            >
                                <Mail className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex gap-4 pt-4">
                            <Link
                                href="#projects"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors duration-300"
                            >
                                View Projects
                            </Link>
                            <Link
                                href="/DIPJYOTI_DAS_resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-300"
                            >
                                <Download className="w-4 h-4" />
                                Resume
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Side - 3D Model */}
                <div className="relative h-[70vh] min-h-130 w-full overflow-hidden px-8 py-8 md:w-[56%] md:px-16 md:py-10">
                    <Canvas
                        className="w-full h-full"
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
                            enablePan
                            enableZoom
                            enableRotate
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
