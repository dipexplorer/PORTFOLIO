"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

interface BookCoverProps {
  onOpen: () => void;
}

export default function BookCover({ onOpen }: BookCoverProps) {
  return (
    <div className="relative w-full h-[600px] md:h-[650px] bg-white dark:bg-slate-950 rounded-2xl shadow-md dark:shadow-2xl border-4 border-slate-200 dark:border-slate-800 flex flex-col justify-between p-8 overflow-hidden blueprint-grid transition-all duration-300 transform-gpu translate-z-0 backface-hidden">
      {/* Decorative Technical Border Lines */}
      <div className="absolute inset-4 border border-cyan-300 dark:border-cyan-500/20 pointer-events-none transition-colors duration-300" />
      <div className="absolute inset-5 border border-cyan-200 dark:border-cyan-500/10 pointer-events-none transition-colors duration-300" />
      
      {/* Crosshair corners */}
      <div className="absolute top-6 left-6 text-cyan-600 dark:text-cyan-500/35 font-mono text-[9px] transition-colors duration-300">L-01</div>
      <div className="absolute top-6 right-6 text-cyan-600 dark:text-cyan-500/35 font-mono text-[9px] transition-colors duration-300">R-01</div>
      <div className="absolute bottom-6 left-6 text-cyan-600 dark:text-cyan-500/35 font-mono text-[9px] transition-colors duration-300">L-02</div>
      <div className="absolute bottom-6 right-6 text-cyan-600 dark:text-cyan-500/35 font-mono text-[9px] transition-colors duration-300">R-02</div>

      {/* Grid coordinates */}
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 text-[9px] text-cyan-500/50 dark:text-cyan-500/20 font-mono tracking-[0.3em] transition-colors duration-300">
        COORDINATE GRID SYSTEM X-99
      </div>
      
      {/* Cover Header */}
      <div className="flex justify-between items-start z-10">
        <div>
          <span className="text-[10px] bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800/40 px-2.5 py-1 rounded-sm font-mono tracking-widest uppercase transition-colors duration-300">
            ENGINEERING LOGBOOK
          </span>
          <p className="text-[9px] text-cyan-600/70 dark:text-cyan-500/40 font-mono mt-1.5 transition-colors duration-300">
            SPEC ID: GU-BTECH-24.27
          </p>
        </div>
        <div className="text-right text-[10px] text-cyan-600/70 dark:text-cyan-500/50 font-mono transition-colors duration-300">
          <div>LOC // GUWAHATI</div>
          <div>2026 EDITION</div>
        </div>
      </div>

      {/* Main Titles */}
      <div className="my-auto text-center z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight select-none transition-colors duration-300">
          The System Log.
        </h1>
        <div className="w-16 h-[2px] bg-cyan-400/60 dark:bg-cyan-500/30 my-4 transition-colors duration-300" />
        <p className="text-sm font-mono text-cyan-600 dark:text-cyan-400 tracking-[0.15em] uppercase transition-colors duration-300">
          Dipjyoti Das
        </p>
        <p className="text-[11px] text-cyan-600/70 dark:text-cyan-500/60 font-mono mt-1 max-w-sm leading-relaxed transition-colors duration-300">
          AI-POWERED PLATFORMS • BACKEND ARCHITECTURES • DISTRIBUTED SYSTEMS
        </p>

        {/* Access Button */}
        <button
          onClick={onOpen}
          className="group mt-10 relative flex items-center gap-2 px-8 py-3 bg-cyan-50 dark:bg-cyan-950 border border-cyan-300 dark:border-cyan-500/40 text-cyan-700 dark:text-cyan-400 font-mono text-xs uppercase tracking-[0.2em] rounded-md hover:bg-cyan-100 dark:hover:bg-cyan-900/60 hover:text-cyan-800 dark:hover:text-cyan-300 transition-all duration-300 shadow-sm dark:shadow-[0_0_15px_rgba(6,182,212,0.1)] active:scale-95 cursor-pointer"
        >
          <span className="relative z-10">Access Logbook_</span>
          <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Footer Details */}
      <div className="flex justify-between items-end z-10 border-t border-cyan-200 dark:border-cyan-900/30 pt-4 font-mono text-[9px] text-cyan-600/70 dark:text-cyan-500/40 transition-colors duration-300">
        <div className="text-left">
          <div>STACK: JS/TS/PYTHON/SQL</div>
          <div>SYS_REF: MONGODB • POSTGRES • REDIS</div>
        </div>
        <div className="text-right">
          <div>STATUS: ONLINE</div>
          <div>PORTFOLIO v2.0 (TACTILE SKEUOMORPHIC)</div>
        </div>
      </div>
    </div>
  );
}
