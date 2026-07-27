"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    // Only show the button after scrolling down a bit (5% of the page)
    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            setIsVisible(latest > 0.05);
        });
    }, [scrollYProgress]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Calculate stroke dashoffset for the circular progress ring
    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ 
                opacity: isVisible ? 1 : 0, 
                scale: isVisible ? 1 : 0.5,
                y: isVisible ? 0 : 20
            }}
            transition={{ duration: 0.4, ease: "backOut" }}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] cursor-pointer group pointer-events-auto"
            onClick={scrollToTop}
        >
            <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/40 dark:bg-slate-950/40 backdrop-blur-md rounded-full border border-slate-200/50 dark:border-slate-700/50 shadow-lg dark:shadow-xl hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/30 transition-all duration-300">
                
                {/* SVG Radial Progress Ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                    <circle 
                        cx="50" cy="50" r="46" 
                        fill="none" 
                        className="stroke-slate-200/50 dark:stroke-slate-800/50" 
                        strokeWidth="3" 
                    />
                    <motion.circle
                        cx="50" cy="50" r="46"
                        fill="none"
                        className="stroke-cyan-500 dark:stroke-cyan-400"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        style={{ pathLength }}
                    />
                </svg>

                {/* 3D Tesseract / Twisting Stair Spiral Icon */}
                <div className="relative w-7 h-7 md:w-8 md:h-8 flex items-center justify-center pointer-events-none">
                    {[0, 1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={i}
                            className="absolute border border-slate-600 dark:border-slate-400 group-hover:border-cyan-600 dark:group-hover:border-cyan-400 transition-colors duration-300"
                            style={{
                                width: `${100 - i * 20}%`,
                                height: `${100 - i * 20}%`,
                                // Differential rotation: inner squares rotate much faster, 
                                // creating a twisting 3D spiral staircase illusion mapped to scroll!
                                rotate: useTransform(scrollYProgress, [0, 1], [0, 180 + (i * 270)]), 
                                opacity: 1 - i * 0.15,
                                borderRadius: `${2 + i}px`
                            }}
                        />
                    ))}
                    
                    {/* Glowing Core */}
                    <motion.div 
                        className="absolute w-1.5 h-1.5 bg-cyan-500 rounded-full group-hover:shadow-[0_0_10px_rgba(6,182,212,1)] transition-shadow duration-300"
                        style={{
                            scale: useTransform(scrollYProgress, [0, 1], [0.5, 1.5])
                        }}
                    />
                </div>

                {/* Hover Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[10px] font-mono px-3 py-1.5 rounded-md whitespace-nowrap pointer-events-none shadow-md">
                    SYS_LOG // TOP
                </div>
            </div>
        </motion.div>
    );
}
