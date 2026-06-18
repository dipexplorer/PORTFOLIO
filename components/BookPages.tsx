"use client";

import React from "react";
import { Terminal, GraduationCap } from "lucide-react";
import MiniTerminal from "./MiniTerminal";

interface BookPagesProps {
  currentPage: number;
}

export default function BookPages({ currentPage }: BookPagesProps) {
  // Rendering individual pages based on currentPage spread
  // Spread 1 (Pages 1 & 2): Intro & Engineering Mindset (Left) + Education & Terminal (Right)

  const renderLeftPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="flex flex-col justify-between h-full p-6 md:p-8 paper-grid relative">
            {/* Technical top border and numbers */}
            <div className="flex justify-between items-center text-[10px] text-cyan-700/60 font-mono border-b border-cyan-800/10 pb-2 mb-4">
              <span>{"SYSTEMS_MANIFEST // LOGBOOK_v3.0"}</span>
              <span>P. 01</span>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-center my-auto">
              <span className="text-[10px] font-mono text-cyan-600/80 tracking-widest uppercase">
                SYSTEM OPERATOR:
              </span>
              <h2 className="text-3xl font-black text-slate-800 font-serif tracking-tight mt-1 mb-4">
                Dipjyoti Das
              </h2>
              
              <div className="space-y-2 font-mono text-[10px] text-slate-700 bg-cyan-900/5 p-3 rounded-lg border border-cyan-800/10 mb-6">
                <div>SESSION_ID: <span className="text-cyan-700 font-bold">GU-CS-2024-2027</span></div>
                <div>CLASS_ROLE: <span className="text-cyan-700 font-bold">SYSTEMS_DEVELOPER</span></div>
                <div>LOCAL_NODE: <span className="text-cyan-700 font-bold">GUWAHATI_IND</span></div>
              </div>

              {/* Engineering Mindset */}
              <div>
                <span className="text-[9px] font-mono text-cyan-600/70 tracking-widest uppercase flex items-center gap-1.5 mb-2 border-b border-cyan-800/10 pb-1">
                  ENGINEERING_MINDSET // PRINCIPLES
                </span>
                
                <div className="space-y-3 text-xs text-slate-700 leading-relaxed mt-3">
                  <div>
                    <h4 className="font-bold text-slate-800 font-serif">I. Scalability First</h4>
                    <p className="text-[10px] mt-0.5">Systems designed to handle growth via robust database indexing, caching layers, and stateless backend nodes.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 font-serif">II. Modular Architecture</h4>
                    <p className="text-[10px] mt-0.5">Strict enforcement of MVC patterns, separated services, and single-responsibility components.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 font-serif">III. CI/CD & Automation</h4>
                    <p className="text-[10px] mt-0.5">Zero-downtime shipping achieved through automated testing and continuous deployment pipelines.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Page Footer */}
            <div className="border-t border-cyan-800/10 pt-4 flex justify-between items-center text-[9px] text-cyan-700/50 font-mono">
              <span>SYS_INIT: 2021</span>
              <span>FIRMWARE: NEXTJS_15</span>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col justify-between h-full p-6 md:p-8 paper-grid relative">
            <div className="flex justify-between items-center text-[10px] text-cyan-700/60 font-mono border-b border-cyan-800/10 pb-2 mb-4">
              <span>{"SYS_ENV // LEADERSHIP"}</span>
              <span>P. 03</span>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-6">
              <div>
                <span className="text-[10px] font-mono text-cyan-600/70 tracking-widest uppercase flex items-center gap-1.5 mb-2 border-b border-cyan-800/10 pb-1">
                  OPEN SOURCE LEADERSHIP
                </span>
                
                <div className="space-y-4 font-mono text-[11px] text-slate-700 mt-4">
                  <div className="bg-slate-900 text-slate-300 p-4 rounded-lg shadow-inner border border-slate-800 relative overflow-hidden">
                    <div className="relative z-10 space-y-3">
                      <div className="border-b border-slate-700 pb-2 mb-2">
                        <span className="text-cyan-500 font-bold text-xs uppercase tracking-widest block mb-1">GSSoC 2025 // LegalHub</span>
                        <span className="text-slate-400 text-[10px]">Project Admin & Lead Maintainer</span>
                      </div>
                      <div className="flex justify-between items-center bg-slate-950 p-2 rounded border border-slate-800">
                        <span className="text-cyan-600">CONTRIBUTORS</span>
                        <span className="text-cyan-300 font-bold">33+ Active</span>
                      </div>
                      <div className="flex justify-between items-center bg-slate-950 p-2 rounded border border-slate-800">
                        <span className="text-cyan-600">PULL REQUESTS</span>
                        <span className="text-cyan-300 font-bold">80+ Reviewed</span>
                      </div>
                      <div className="flex justify-between items-center bg-slate-950 p-2 rounded border border-slate-800">
                        <span className="text-cyan-600">REPO IMPACT</span>
                        <span className="text-cyan-300 font-bold">18★ | 56⑂</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-black text-slate-800 font-serif mb-1">Mentorship Philosophy</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed border-l-2 border-cyan-600/30 pl-3">
                  My approach to maintaining open-source projects extends beyond simply merging pull requests. I actively mentor junior contributors on MVC patterns, CI/CD pipelines (GitHub Actions), and clean backend architecture. My goal is to ensure high code quality while accelerating community growth.
                </p>
              </div>
            </div>

            <div className="border-t border-cyan-800/10 pt-4 flex justify-between items-center text-[9px] text-cyan-700/50 font-mono">
              <span>STATUS: MAINTAINER</span>
              <span>COMMUNITY: ENGAGED</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderRightPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="flex flex-col justify-between h-full p-6 md:p-8 paper-grid relative">
            <div className="flex justify-between items-center text-[10px] text-cyan-700/60 font-mono border-b border-cyan-800/10 pb-2 mb-4">
              <span>{"INDEX // ACADEMIA_&_TERMINAL"}</span>
              <span>P. 02</span>
            </div>

            <div className="flex-1 flex flex-col justify-between space-y-6 py-2">
              
              {/* Education section */}
              <div>
                <span className="text-[9px] font-mono text-cyan-600/70 tracking-widest uppercase flex items-center gap-1.5 mb-3 border-b border-cyan-800/10 pb-1">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-600" />
                  ACADEMIC FOUNDATION
                </span>
                <div className="space-y-4 pl-1 border-l-2 border-cyan-100/50">
                  <div className="pl-3">
                    <h4 className="text-sm font-black text-slate-800 font-serif leading-snug">
                      Gauhati University
                    </h4>
                    <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                      B.Tech in Computer Science<br/>
                      <span className="text-cyan-700">2024 – 2027</span>
                    </p>
                  </div>
                  <div className="pl-3">
                    <h4 className="text-sm font-black text-slate-800 font-serif leading-snug">
                      Assam Engineering Institute
                    </h4>
                    <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                      Diploma in Computer Engineering<br/>
                      <span className="text-cyan-700">2021 – 2024</span> • CGPA: 8.5
                    </p>
                  </div>
                </div>
              </div>

              {/* Terminal Section */}
              <div className="pt-2">
                <span className="text-[9px] font-mono text-cyan-600/70 tracking-widest uppercase flex items-center gap-1.5 mb-3 border-b border-cyan-800/10 pb-1">
                  <Terminal className="w-3.5 h-3.5 text-cyan-600" />
                  SYSTEM LOG INTERFACE
                </span>
                <p className="text-[10px] text-slate-600 leading-relaxed mb-3 font-mono border-l border-cyan-300/30 pl-2">
                  Interact directly with the system core via this sandboxed terminal emulator.
                </p>
                <div className="mt-2 scale-95 origin-top">
                  <MiniTerminal />
                </div>
              </div>
            </div>

            <div className="border-t border-cyan-800/10 pt-4 flex justify-between items-center text-[9px] text-cyan-700/50 font-mono">
              <span>CLI EMULATOR v1.0</span>
              <span>ACADEMIA STAMP: OK</span>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col justify-between h-full p-6 md:p-8 paper-grid relative">
            <div className="flex justify-between items-center text-[10px] text-cyan-700/60 font-mono border-b border-cyan-800/10 pb-2 mb-4">
              <span>{"LOG_201 // SAHIDAWA_BLUEPRINT"}</span>
              <span>P. 04</span>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-6">
              <div>
                <span className="text-[10px] font-mono text-cyan-600/70 tracking-widest uppercase flex items-center gap-1.5 mb-2 border-b border-cyan-800/10 pb-1">
                  CORE PLATFORM ARCHITECTURE
                </span>
                
                <div className="space-y-5 text-xs text-slate-700 leading-relaxed mt-4">
                  <div className="relative pl-4 border-l border-cyan-200">
                    <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                    <h4 className="font-bold text-slate-800 font-serif text-sm">SahiDawa (Creator & Lead)</h4>
                    <p className="text-[11px] mt-1 text-slate-600">Building an open-source platform to combat counterfeit drugs in India by allowing citizens to verify medicines and report suspicious batches.</p>
                  </div>
                  
                  <div className="relative pl-4 border-l border-cyan-200">
                    <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-cyan-500" />
                    <h4 className="font-bold text-slate-800 font-serif text-sm">The Tech Stack</h4>
                    <p className="text-[11px] mt-1 text-slate-600">Engineered with <strong>Next.js</strong> for Server-Side Rendering (SEO & performance) and <strong>Firebase</strong> (Firestore & Auth) for real-time data sync and secure authentication.</p>
                  </div>
                  
                  <div className="relative pl-4 border-l border-cyan-200">
                    <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-indigo-500" />
                    <h4 className="font-bold text-slate-800 font-serif text-sm">Engineering Challenges</h4>
                    <p className="text-[11px] mt-1 text-slate-600">Designing the system for low-bandwidth environments with multi-lingual access. Requires aggressive caching strategies and optimized database queries to ensure instant verification.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-cyan-800/10 pt-4 flex justify-between items-center text-[9px] text-cyan-700/50 font-mono">
              <span>PROJECT_STATUS: IN_DEVELOPMENT</span>
              <span>IMPACT_TARGET: PAN-INDIA</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-[600px] md:h-[650px] relative overflow-hidden bg-[#faf7f2] rounded-2xl shadow-xl border border-[#d4c8bc] divide-y md:divide-y-0 md:divide-x divide-cyan-900/10">
      
      {/* LEFT PAGE SPREAD */}
      <div className="relative h-full flex flex-col justify-between overflow-hidden">
        {/* Draft grid details */}
        <div className="absolute top-2 left-2 text-[8px] text-cyan-600/30 font-mono">GRID: A0-L</div>
        <div className="absolute bottom-2 left-2 text-[8px] text-cyan-600/30 font-mono">GRID: B0-L</div>
        
        {/* Ruler tick marks on the left edge */}
        <div className="absolute left-0 top-0 bottom-0 w-2.5 ruler-ticks-left opacity-35" />
        
        <div className="pl-6 pr-4 py-4 h-full relative z-10 flex flex-col justify-between">
          {renderLeftPage()}
        </div>
      </div>

      {/* RIGHT PAGE SPREAD */}
      <div className="relative h-full flex flex-col justify-between overflow-hidden">
        {/* Draft grid details */}
        <div className="absolute top-2 right-2 text-[8px] text-cyan-600/30 font-mono">GRID: A0-R</div>
        <div className="absolute bottom-2 right-2 text-[8px] text-cyan-600/30 font-mono">GRID: B0-R</div>

        {/* Ruler tick marks on the right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-2.5 ruler-ticks-right opacity-35" />
        
        {/* spine fold crease shadow on the left side of right page */}
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-linear-to-r from-cyan-950/5 via-cyan-950/2 to-transparent pointer-events-none" />

        <div className="pr-6 pl-4 py-4 h-full relative z-10 flex flex-col justify-between">
          {renderRightPage()}
        </div>
      </div>
      
    </div>
  );
}
