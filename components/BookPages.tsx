"use client";

import React from "react";
import { Terminal, GraduationCap } from "lucide-react";
import MiniTerminal from "./MiniTerminal";

interface BookPagesProps {
  currentPage: number;
  goToPage: (pageNumber: number) => void;
}

export default function BookPages({ currentPage, goToPage }: BookPagesProps) {
  // Rendering individual pages based on currentPage spread
  // Spread 1 (Pages 1 & 2): Intro, TOC & Education
  // Spread 2 (Pages 3 & 4): Open Source & Internships/SME
  // Spread 3 (Pages 5 & 6): CLI Terminal & Skills Matrix

  const renderLeftPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="flex flex-col justify-between h-full p-6 md:p-8 paper-grid relative">
            {/* Technical top border and numbers */}
            <div className="flex justify-between items-center text-[10px] text-cyan-700/60 font-mono border-b border-cyan-800/10 pb-2 mb-4">
              <span>{"SYSTEMS_MANIFEST // LOGBOOK_v2.0"}</span>
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
              
              <div className="space-y-2 font-mono text-[10px] text-slate-700 bg-cyan-900/5 p-3 rounded-lg border border-cyan-800/10 mb-4">
                <div>SESSION_ID: <span className="text-cyan-700 font-bold">GU-CS-2024-2027</span></div>
                <div>CLASS_ROLE: <span className="text-cyan-700 font-bold">SYSTEMS_DEVELOPER</span></div>
                <div>LOCAL_NODE: <span className="text-cyan-700 font-bold">GUWAHATI_IND</span></div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed drop-cap">
                This logbook serves as an engineering record of architectural patterns, system optimizations, and open-source contribution activities. All logged events are verified via terminal telemetry.
              </p>
              
              <p className="text-[10px] text-slate-500/90 leading-relaxed font-mono border-l-2 border-cyan-600/50 pl-3 italic my-3">
                {"NOTICE: Sandboxed session log file. Authorized credentials and key actions are recorded in the hypervisor."}
              </p>
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
              <span>{"LOG_101 // BACKEND_OPTIMIZATION"}</span>
              <span>P. 03</span>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-5">
              <div>
                <span className="text-[10px] font-mono bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded border border-cyan-200/50 tracking-wider font-bold">
                  EXPRESS_MVC_TUNING
                </span>
                <h3 className="text-base font-black text-slate-800 font-serif mt-2 leading-snug">
                  E-Commerce Caching & Load Optimization
                </h3>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                  Action Log: Jan 2024 • Module: InnoByte
                </p>
                <ul className="mt-2 text-xs text-slate-700 space-y-1.5 list-none pl-0">
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-600 select-none">▸</span>
                    <span>Designed modular Express.js MVC routing structure with clean controller schemas.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-600 select-none">▸</span>
                    <span>Integrated a Redis caching layer for heavy catalog requests, resulting in a ~60% reduction in MongoDB load.</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-dashed border-cyan-900/10 pt-4">
                <span className="text-[10px] font-mono bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded border border-cyan-200/50 tracking-wider font-bold">
                  CS_PROBLEM_SOLVING
                </span>
                <h3 className="text-base font-black text-slate-800 font-serif mt-2 leading-snug">
                  Chegg Technical Support Logs
                </h3>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                  Action Log: Apr 2023 – Oct 2024 • Rating: 4.8/5.0
                </p>
                <ul className="mt-2 text-xs text-slate-700 space-y-1.5 list-none pl-0">
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-600 select-none">▸</span>
                    <span>Analyzed and solved 500+ complex technical problems in data structures, SQL databases, and computer networks.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-cyan-800/10 pt-4 flex justify-between items-center text-[9px] text-cyan-700/50 font-mono">
              <span>DB_LOAD: -60%</span>
              <span>RATING: 4.8/5.0</span>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col justify-between h-full p-6 md:p-8 paper-grid relative">
            <div className="flex justify-between items-center text-[10px] text-cyan-700/60 font-mono border-b border-cyan-800/10 pb-2 mb-4">
              <span>SECTION_03_TERMINAL</span>
              <span>P. 05</span>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-3">
              <div className="flex items-center gap-2 text-slate-800 font-serif font-black text-lg">
                <Terminal className="w-5 h-5 text-cyan-600" />
                <h3>System Log CLI Interface</h3>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed mb-2">
                Interact directly with the log file nodes via this sandboxed terminal emulator. Run core queries to inspect stack metadata and project paths.
              </p>
              
              {/* Terminal Box */}
              <MiniTerminal />
            </div>

            <div className="border-t border-cyan-800/10 pt-4 flex justify-between items-center text-[9px] text-cyan-700/50 font-mono">
              <span>CLI EMULATOR v1.0</span>
              <span>STATUS: READY</span>
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
              <span>{"INDEX_PAGE // DIRECTORY"}</span>
              <span>P. 02</span>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-6">
              {/* Table of Contents */}
              <div>
                <span className="text-[9px] font-mono text-cyan-600/70 tracking-widest uppercase">
                  LOGBOOK DIRECTORY
                </span>
                <nav className="mt-2 space-y-2">
                  {[
                    { title: "LOG #101: Backend & DB Optimization", page: 2 },
                    { title: "LOG #102: Open Source & AI Projects", page: 2 },
                    { title: "LOG #201: Terminal CLI & Operations", page: 3 },
                    { title: "LOG #202: System Diagnostics & Matrix", page: 3 },
                  ].map((item) => (
                    <button
                      key={item.title}
                      onClick={() => goToPage(item.page)}
                      className="w-full text-left font-serif text-slate-800 font-bold hover:text-cyan-600 transition-colors text-xs flex justify-between items-center group cursor-pointer"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{item.title}</span>
                      <span className="font-mono text-[10px] text-cyan-600/70 border-b border-dotted border-cyan-800/30 flex-1 mx-2 h-1" />
                      <span className="font-mono text-[9px] text-slate-500">SPREAD {item.page}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Education section */}
              <div className="border-t border-cyan-800/10 pt-4">
                <span className="text-[9px] font-mono text-cyan-600/70 tracking-widest uppercase flex items-center gap-1.5 mb-2">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-600" />
                  ACADEMIC FOUNDATION
                </span>
                <div className="space-y-2.5">
                  <div>
                    <h4 className="text-xs font-black text-slate-800 font-serif">
                      Gauhati University
                    </h4>
                    <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                      B.Tech in Computer Science • 2024 – 2027
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-800 font-serif">
                      Assam Engineering Institute
                    </h4>
                    <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                      Diploma in Computer Engineering • CGPA: 8.5 • 2021 – 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-cyan-800/10 pt-4 flex justify-between items-center text-[9px] text-cyan-700/50 font-mono">
              <span>INDEX_REF: VOL_1</span>
              <span>ACADEMIA STAMP: OK</span>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col justify-between h-full p-6 md:p-8 paper-grid relative">
            <div className="flex justify-between items-center text-[10px] text-cyan-700/60 font-mono border-b border-cyan-800/10 pb-2 mb-4">
              <span>{"LOG_102 // OPEN_SOURCE_LEADS"}</span>
              <span>P. 04</span>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-5">
              <div>
                <span className="text-[10px] font-mono bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded border border-cyan-200/50 tracking-wider font-bold">
                  GSSOC_25_LEGALHUB
                </span>
                <h3 className="text-base font-black text-slate-800 font-serif mt-2 leading-snug">
                  AI Integration & WebSocket Stream
                </h3>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                  Action Log: Mar 2025 – Jun 2025 • Project Admin
                </p>
                <ul className="mt-2 text-xs text-slate-700 space-y-1.5 list-none pl-0">
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-600 select-none">▸</span>
                    <span>Directed a team of 33+ contributors, merging 80+ PRs (ranked #53 on leaderboard).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-600 select-none">▸</span>
                    <span>Integrated Socket.io for real-time channels and Mistral AI API for semantic query matching.</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-dashed border-cyan-900/10 pt-4">
                <span className="text-[10px] font-mono bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded border border-cyan-200/50 tracking-wider font-bold">
                  HACKTOBERFEST_24
                </span>
                <h3 className="text-base font-black text-slate-800 font-serif mt-2 leading-snug">
                  Global Distributed Contributions
                </h3>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                  Action Log: Oct 2024 – Nov 2024 • Rank #27
                </p>
                <ul className="mt-2 text-xs text-slate-700 space-y-1.5 list-none pl-0">
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-600 select-none">▸</span>
                    <span>Successfully merged 83+ PRs across multiple international repositories.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-600 select-none">▸</span>
                    <span>Earned SuperContributor badge with 6/6 fast-approved core pipeline optimizations.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-cyan-800/10 pt-4 flex justify-between items-center text-[9px] text-cyan-700/50 font-mono">
              <span>RANK: #27_GLOBAL</span>
              <span>VERIFIED: 160+ PRs</span>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col justify-between h-full p-6 md:p-8 paper-grid relative">
            <div className="flex justify-between items-center text-[10px] text-cyan-700/60 font-mono border-b border-cyan-800/10 pb-2 mb-4">
              <span>SECTION_03_SKILLS</span>
              <span>P. 06</span>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-4">
              <div>
                <span className="text-[9px] font-mono text-cyan-600/70 tracking-widest uppercase flex items-center gap-1.5 mb-2">
                  SKILLS_MATRIX // DIRECTORY
                </span>
                <div className="space-y-3 font-mono text-[10px] text-slate-700">
                  {/* Languages */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[9px] text-slate-500">
                      <span>[LANGUAGES]</span>
                      <span>TS / JS / Python / SQL / C++</span>
                    </div>
                    <div className="w-full h-1 bg-cyan-900/10 rounded-full overflow-hidden">
                      <div className="w-[90%] h-full bg-cyan-600" />
                    </div>
                  </div>

                  {/* Frameworks */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[9px] text-slate-500">
                      <span>[FRAMEWORKS]</span>
                      <span>Next.js / React / Express / Node.js</span>
                    </div>
                    <div className="w-full h-1 bg-cyan-900/10 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-cyan-600" />
                    </div>
                  </div>

                  {/* Databases */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[9px] text-slate-500">
                      <span>[DATABASES]</span>
                      <span>PostgreSQL / MongoDB / Redis / Firestore</span>
                    </div>
                    <div className="w-full h-1 bg-cyan-900/10 rounded-full overflow-hidden">
                      <div className="w-[80%] h-full bg-cyan-600" />
                    </div>
                  </div>

                  {/* Devops / Tools */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[9px] text-slate-500">
                      <span>[OPERATIONS]</span>
                      <span>Git / GitHub / Docker / CI/CD / Linux</span>
                    </div>
                    <div className="w-full h-1 bg-cyan-900/10 rounded-full overflow-hidden">
                      <div className="w-[75%] h-full bg-cyan-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Competencies block */}
              <div className="border-t border-dashed border-cyan-900/10 pt-3 text-[10px] text-slate-600 space-y-1 font-mono">
                <span className="text-[9px] text-cyan-600/70 uppercase font-bold tracking-wider">SYSTEM DIAGNOSTICS:</span>
                <div className="grid grid-cols-2 gap-1.5 mt-1 text-[9px]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>REST_API: OK</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>WS_SOCKETS: OK</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>DB_OPTIM: -60% LOAD</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>MVC_ARCH: VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-cyan-800/10 pt-4 flex justify-between items-center text-[9px] text-cyan-700/50 font-mono">
              <span>SKILLS_REF: STACK_v2.0</span>
              <span>INDEX: ALL_OK</span>
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
