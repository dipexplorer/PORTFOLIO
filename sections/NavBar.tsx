"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import NavLinks from "@/components/NavLinks";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto">
                    <div className="flex items-center gap-4">
                        <a
                            href="/"
                            className="text-2xl font-bold text-zinc-900 dark:text-white hover:text-zinc-500 dark:hover:text-zinc-500 transition-colors duration-300"
                        >
                            DIPJYOTI
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                            className="text-zinc-900 dark:text-white hover:text-zinc-500 dark:hover:text-zinc-500 transition-colors duration-300"
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                <div className={`${isOpen ? "block" : "hidden"}`}>
                    <nav className="flex flex-col items-center gap-4">
                        <NavLinks />
                    </nav>
                </div>
            </div>
        </header>
    );
}
