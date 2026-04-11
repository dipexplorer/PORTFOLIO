"use client";

import Link from "next/link";
import { useState } from "react";
import NavLinks from "@/components/NavLinks";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mt-3 flex items-center justify-between rounded-2xl border border-zinc-800/60 bg-black/60 px-5 py-3 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-extrabold tracking-tight bg-linear-to-r from-zinc-900 via-zinc-700 to-zinc-500 bg-clip-text text-transparent dark:from-white dark:via-zinc-300 dark:to-zinc-500"
                    >
                        DIPJYOTI
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <NavLinks />
                    </nav>

                    {/* Custom Hamburger */}
                    <button
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="md:hidden relative w-10 h-10 flex items-center justify-center"
                    >
                        <div className="relative w-6 h-5">
                            <span
                                className={`absolute left-0 h-0.5 w-full bg-white transition-all duration-300 ${
                                    isOpen ? "top-2 rotate-45" : "top-0"
                                }`}
                            />
                            <span
                                className={`absolute left-0 top-2 h-0.5 w-full bg-white transition-all duration-300 ${
                                    isOpen ? "opacity-0" : ""
                                }`}
                            />
                            <span
                                className={`absolute left-0 h-0.5 w-full bg-white transition-all duration-300 ${
                                    isOpen ? "top-2 -rotate-45" : "top-4"
                                }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Premium Panel Style) */}
            <div
                className={`md:hidden fixed top-21 left-4 right-4 rounded-2xl border border-zinc-800 bg-black/90 backdrop-blur-xl shadow-xl transition-all duration-300 ${
                    isOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-15 pointer-events-none"
                }`}
            >
                <nav className="flex flex-col items-center gap-6 py-8 text-lg font-medium">
                    <NavLinks />
                </nav>
            </div>
        </header>
    );
}
