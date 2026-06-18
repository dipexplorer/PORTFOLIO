"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import BookCover from "./BookCover";
import BookPages from "./BookPages";

export default function Book() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Spreads: 1, 2
  const totalSpreads = 2;

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalSpreads) {
      setCurrentPage(pageNumber);
    }
  };

  // Flip Page Animations
  const pageVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? "50%" : "-50%",
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
    }),
    animate: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 15,
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-50%" : "50%",
      opacity: 0,
      rotateY: direction > 0 ? -45 : 45,
      transition: {
        duration: 0.35,
      },
    }),
  };

  const [direction, setDirection] = useState(0);

  const navigatePage = (type: "next" | "prev") => {
    if (type === "next" && currentPage < totalSpreads) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    } else if (type === "prev" && currentPage > 1) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[80vh] py-12 px-4 select-none">
      <div className="w-full max-w-5xl relative perspective-3d">
        <AnimatePresence mode="wait" custom={direction}>
          {!isOpen ? (
            <motion.div
              key="cover"
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="transform-preserve-3d"
            >
              <BookCover onOpen={() => setIsOpen(true)} />
            </motion.div>
          ) : (
            <motion.div
              key={`spread-${currentPage}`}
              custom={direction}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="transform-preserve-3d relative"
            >
              {/* Outer Shell Wrapper (giving it a depth look) */}
              <div className="absolute inset-0 bg-slate-900 border border-slate-800 rounded-2xl -rotate-1 translate-y-1 shadow-lg pointer-events-none" />
              <div className="absolute inset-0 bg-slate-950 border border-cyan-900/30 rounded-2xl rotate-1 translate-y-2 shadow-lg pointer-events-none" />
              
              {/* Main Book Shell */}
              <div className="relative z-10">
                <BookPages currentPage={currentPage} goToPage={goToPage} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Book Navigation controls at the bottom */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-4 mt-8 font-mono text-xs text-slate-600 z-20"
        >
          {/* Main Controls Row */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigatePage("prev")}
              disabled={currentPage === 1}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-cyan-800/40 bg-cyan-950 text-cyan-400 hover:bg-cyan-900/60 transition-colors disabled:opacity-30 disabled:cursor-not-allowed select-none cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev Spread</span>
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalSpreads }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx + 1 > currentPage ? 1 : -1);
                    goToPage(idx + 1);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentPage === idx + 1
                      ? "bg-cyan-400 w-5"
                      : "bg-cyan-950 border border-cyan-800/50 hover:bg-cyan-900"
                  } cursor-pointer`}
                  title={`Go to Spread ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => navigatePage("next")}
              disabled={currentPage === totalSpreads}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-cyan-800/40 bg-cyan-950 text-cyan-400 hover:bg-cyan-900/60 transition-colors disabled:opacity-30 disabled:cursor-not-allowed select-none cursor-pointer"
            >
              <span>Next Spread</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Utility Row */}
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-slate-500">
              SPREAD {currentPage} OF {totalSpreads}
            </span>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => {
                setDirection(-1);
                setIsOpen(false);
                setCurrentPage(1);
              }}
              className="flex items-center gap-1 text-[10px] text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Close Logbook</span>
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
