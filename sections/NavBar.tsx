"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import NavLinks from "@/components/NavLinks";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (typeof window !== "undefined") {
            const isDark = document.documentElement.classList.contains("dark");
            setTheme(isDark ? "dark" : "light");
        }
    }, []);

    const toggleTheme = () => {
        if (theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setTheme("light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mt-3 flex items-center justify-between rounded-2xl border border-slate-200 dark:border-cyan-500/20 bg-white/80 dark:bg-slate-950/80 px-5 py-3 backdrop-blur-xl shadow-md dark:shadow-xl dark:shadow-cyan-950/10 transition-all duration-300">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-sm font-bold font-mono tracking-[0.2em] text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                        DIPJYOTI <span className="text-cyan-600 dark:text-cyan-500 font-bold">{"// SYS"}</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        <nav className="flex items-center text-sm font-medium">
                            <NavLinks />
                        </nav>
                        
                        {/* Theme Toggle Button */}
                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg border border-slate-200 dark:border-cyan-500/20 bg-slate-100/50 hover:bg-slate-200/50 dark:bg-cyan-950/20 dark:hover:bg-cyan-950/45 text-slate-700 dark:text-cyan-400 hover:text-slate-900 dark:hover:text-cyan-300 transition-all duration-300 shadow-xs cursor-pointer"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? (
                                    <Sun className="w-4 h-4 text-amber-500" />
                                ) : (
                                    <Moon className="w-4 h-4 text-indigo-500" />
                                )}
                            </button>
                        )}
                    </div>

                    {/* Custom Hamburger */}
                    <button
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="md:hidden relative w-10 h-10 flex items-center justify-center cursor-pointer"
                    >
                        <div className="relative w-6 h-5">
                            <span
                                className={`absolute left-0 h-0.5 w-full bg-slate-700 dark:bg-cyan-400 transition-all duration-300 ${
                                    isOpen ? "top-2 rotate-45" : "top-0"
                                }`}
                            />
                            <span
                                className={`absolute left-0 top-2 h-0.5 w-full bg-slate-700 dark:bg-cyan-400 transition-all duration-300 ${
                                    isOpen ? "opacity-0" : ""
                                }`}
                            />
                            <span
                                className={`absolute left-0 h-0.5 w-full bg-slate-700 dark:bg-cyan-400 transition-all duration-300 ${
                                    isOpen ? "top-2 -rotate-45" : "top-4"
                                }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Premium Panel Style) */}
            <div
                className={`md:hidden fixed top-21 left-4 right-4 rounded-2xl border border-slate-200 dark:border-cyan-500/20 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl shadow-lg dark:shadow-2xl transition-all duration-300 ${
                    isOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-15 pointer-events-none"
                }`}
            >
                <nav className="flex flex-col items-center gap-6 py-8 text-lg font-medium">
                    <NavLinks isMobile={true} />
                    
                    {/* Mobile Theme Toggle Button */}
                    {mounted && (
                        <button
                            onClick={toggleTheme}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-cyan-500/20 bg-slate-100/50 dark:bg-cyan-950/20 text-xs font-mono text-slate-700 dark:text-cyan-400 font-bold transition-all duration-300 cursor-pointer shadow-xs"
                        >
                            {theme === "dark" ? (
                                <>
                                    <Sun className="w-4 h-4 text-amber-500" />
                                    <span>LIGHT_MODE</span>
                                </>
                            ) : (
                                <>
                                    <Moon className="w-4 h-4 text-indigo-500" />
                                    <span>DARK_MODE</span>
                                </>
                            )}
                        </button>
                    )}
                </nav>
            </div>
        </header>
    );
}
