"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

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

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
                opacity: isVisible ? 1 : 0, 
                y: isVisible ? 0 : 20,
                pointerEvents: isVisible ? "auto" : "none"
            }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] cursor-pointer"
            onClick={scrollToTop}
            title="Scroll to Top"
        >
            <div className="w-12 h-12 flex items-center justify-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full shadow-lg hover:scale-110 transition-transform duration-200">
                <ArrowUp size={20} strokeWidth={2.5} />
            </div>
        </motion.div>
    );
}
