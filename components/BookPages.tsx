"use client";

import React from "react";
import { Terminal, GraduationCap, Cpu, FlaskConical, Wifi, BookOpen } from "lucide-react";
import MiniTerminal from "./MiniTerminal";

interface BookPagesProps {
  currentPage: number;
  goToPage: (pageNumber: number) => void;
}

export default function BookPages({ currentPage, goToPage }: BookPagesProps) {
  // Spread 1 (Pages 1 & 2): Operator Intro (Left) | Currently Learning (Right)
  // Spread 2 (Pages 3 & 4): Engineering Decisions (Left) | NFR Field Notes (Right)
  // Spread 3 (Pages 5 & 6): MiniTerminal CLI (Left) | Networking Internship Log (Right)

  const renderLeftPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="flex flex-col justify-between h-full p-6 md:p-8 paper-grid relative">
            <div className="flex justify-between items-center text-[10px] text-cyan-700/60 font-mono border-b border-cyan-800/10 pb-2 mb-4">
              <span>{"SYSTEMS_MANIFEST // LOGBOOK_v2.0"}</span>
              <span>P. 01</span>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-4">
              <div>
                <span className="text-[10px] font-mono text-cyan-600/80 tracking-widest uppercase">
                  SYSTEM OPERATOR:
                </span>
                <h2 className="text-3xl font-black text-slate-800 font-serif tracking-tight mt-1">
                  Dipjyoti Das
                </h2>
              </div>

              <div className="space-y-2 font-mono text-[10px] text-slate-700 bg-cyan-900/5 p-3 rounded-lg border border-cyan-800/10">
                <div>SESSION_ID: <span className="text-cyan-700 font-bold">GU-CS-2024-2027</span></div>
                <div>CLASS_ROLE: <span className="text-cyan-700 font-bold">SYSTEMS_DEVELOPER</span></div>
                <div>LOCAL_NODE: <span className="text-cyan-700 font-bold">GUWAHATI_IND</span></div>
                <div>STATUS: <span className="text-emerald-600 font-bold animate-pulse">ACTIVE_SESSION</span></div>
              </div>

              <div>
                <span className="text-[9px] font-mono text-cyan-600/70 tracking-widest uppercase flex items-center gap-1.5 mb-2">
                  <BookOpen className="w-3 h-3" /> ABOUT THIS LOGBOOK
                </span>
                <p className="text-[11px] text-slate-600 leading-relaxed border-l-2 border-cyan-600/40 pl-3">
                  This is my raw engineering diary — not a resume. It captures what I am currently learning, key technical decisions I made, and field observations from real-world internships. Things that shaped how I think as a developer.
                </p>
              </div>

              <nav className="mt-1 space-y-1.5">
                <span className="text-[9px] font-mono text-cyan-600/70 tracking-widest uppercase">CONTENTS</span>
                {[
                  { label: "Currently Learning", spread: 1 },
                  { label: "Core Stack Preferences", spread: 2 },
                  { label: "Networking Field Notes", spread: 2 },
                  { label: "CLI Interface", spread: 3 },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => goToPage(item.spread)}
                    className="w-full text-left font-mono text-[10px] text-slate-700 hover:text-cyan-600 transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">▸ {item.label}</span>
                    <span className="text-slate-400 text-[9px]">pg. {item.spread * 2 - 1}</span>
                  </button>
                ))}
              </nav>
            </div>

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
              <span>{"LOG_201 // CORE_STACK_PREFERENCES"}</span>
              <span>P. 03</span>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-4">
              <div>
                <span className="text-[9px] font-mono text-cyan-600/70 tracking-widest uppercase flex items-center gap-1.5 mb-2">
                  <Cpu className="w-3 h-3" /> WHAT I LOVE BUILDING WITH
                </span>
                <p className="text-[10px] text-slate-500 font-mono italic mb-3">
                  The tools and frameworks I trust to craft robust digital experiences.
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-cyan-950/5 border border-cyan-800/10 rounded-lg p-3">
                  <div className="text-[10px] font-mono font-bold text-cyan-700 mb-1">Frontend: Next.js & React</div>
                  <p className="text-[10px] text-slate-600 leading-relaxed">
                    I rely on Next.js for its powerful routing, SSR capabilities, and overall developer experience. Combined with React&apos;s component architecture, it allows me to build fast, SEO-friendly, and highly interactive interfaces seamlessly.
                  </p>
                </div>

                <div className="bg-cyan-950/5 border border-cyan-800/10 rounded-lg p-3">
                  <div className="text-[10px] font-mono font-bold text-cyan-700 mb-1">Backend: Node.js & Express</div>
                  <p className="text-[10px] text-slate-600 leading-relaxed">
                    Node.js with Express is my go-to for building scalable REST APIs. It provides the flexibility and performance needed to handle asynchronous operations efficiently, forming a solid backbone for any application.
                  </p>
                </div>

                <div className="bg-cyan-950/5 border border-cyan-800/10 rounded-lg p-3">
                  <div className="text-[10px] font-mono font-bold text-cyan-700 mb-1">Database: MongoDB & Supabase</div>
                  <p className="text-[10px] text-slate-600 leading-relaxed">
                    I love MongoDB for its document-based flexibility, perfect for rapid development. I also heavily use Supabase when I need the power of PostgreSQL combined with instant APIs and seamless authentication out of the box.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-cyan-800/10 pt-4 flex justify-between items-center text-[9px] text-cyan-700/50 font-mono">
              <span>STACK: MERN / NEXT</span>
              <span>STATUS: OPTIMIZED</span>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="flex flex-col justify-between h-full p-6 md:p-8 paper-grid relative">
            <div className="flex justify-between items-center text-[10px] text-cyan-700/60 font-mono border-b border-cyan-800/10 pb-2 mb-4">
              <span>{"LOG_301 // CLI_INTERFACE"}</span>
              <span>P. 05</span>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-3">
              <div className="flex items-center gap-2 text-slate-800 font-serif font-black text-base">
                <Terminal className="w-5 h-5 text-cyan-600" />
                <h3>System Log Terminal</h3>
              </div>
              <p className="text-[10px] text-slate-500 font-mono leading-relaxed border-l border-cyan-300/40 pl-2">
                Sandboxed emulator — run queries to inspect my stack, projects, and system paths.
              </p>

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
              <span>{"LOG_101 // CURRENTLY_LEARNING"}</span>
              <span>P. 02</span>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-4">
              <div>
                <span className="text-[9px] font-mono text-cyan-600/70 tracking-widest uppercase flex items-center gap-1.5 mb-1">
                  <FlaskConical className="w-3 h-3" /> ACTIVE STUDY LOG
                </span>
                <p className="text-[10px] text-slate-500 font-mono">
                  What I am actively building knowledge in right now.
                </p>
              </div>

              <div className="space-y-3">
                <div className="relative pl-3 border-l-2 border-amber-400/60">
                  <span className="text-[9px] font-mono text-amber-600 uppercase tracking-wider font-bold">IN PROGRESS</span>
                  <h4 className="text-xs font-black text-slate-800 font-serif mt-0.5">Applied AI / ML</h4>
                  <p className="text-[10px] text-slate-600 mt-0.5 leading-relaxed">
                    Transitioning from basic ML concepts to production tools. Working with HuggingFace, integrating pre-trained models, and optimizing pipelines to make systems more accurate and efficient.
                  </p>
                </div>

                <div className="relative pl-3 border-l-2 border-amber-400/60">
                  <span className="text-[9px] font-mono text-amber-600 uppercase tracking-wider font-bold">IN PROGRESS</span>
                  <h4 className="text-xs font-black text-slate-800 font-serif mt-0.5">Secure Development</h4>
                  <p className="text-[10px] text-slate-600 mt-0.5 leading-relaxed">
                    Focusing on practical security that makes my development journey stronger. Learning secure coding practices, safe API design, and vulnerability prevention to give my applications an edge.
                  </p>
                </div>

                <div className="relative pl-3 border-l-2 border-cyan-400/60">
                  <span className="text-[9px] font-mono text-cyan-600 uppercase tracking-wider font-bold">QUEUED NEXT</span>
                  <h4 className="text-xs font-black text-slate-800 font-serif mt-0.5">DSA & System Design</h4>
                  <p className="text-[10px] text-slate-600 mt-0.5 leading-relaxed">
                    Actively practicing Data Structures and Algorithms (DSA) to write more efficient logic. Coupling this with system design principles for scalable architecture.
                  </p>
                </div>

                <div className="relative pl-3 border-l-2 border-slate-300">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider font-bold">ON RADAR</span>
                  <h4 className="text-xs font-black text-slate-800 font-serif mt-0.5">Cloud & DevOps</h4>
                  <p className="text-[10px] text-slate-600 mt-0.5 leading-relaxed">
                    Exploring production-level infrastructure. Looking to get hands-on with AWS, Kubernetes, and advanced container orchestration for resilient deployments.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-cyan-800/10 pt-4 flex justify-between items-center text-[9px] text-cyan-700/50 font-mono">
              <span>UPDATED: JUN_2025</span>
              <span>MODE: LEARNING</span>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="flex flex-col justify-between h-full p-6 md:p-8 paper-grid relative">
            <div className="flex justify-between items-center text-[10px] text-cyan-700/60 font-mono border-b border-cyan-800/10 pb-2 mb-4">
              <span>{"LOG_202 // NETWORKING_FIELD_NOTES"}</span>
              <span>P. 04</span>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-4">
              <div>
                <span className="text-[9px] font-mono text-cyan-600/70 tracking-widest uppercase flex items-center gap-1.5 mb-1">
                  <Wifi className="w-3 h-3" /> INTERNSHIP OBSERVATION LOG
                </span>
                <h3 className="text-sm font-black text-slate-800 font-serif">Trans Virtual Pvt. Ltd.</h3>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">Computer Networking • Hands-on Experience</p>
              </div>

              <div className="space-y-2.5 text-[10px] text-slate-700 font-mono">
                <div className="bg-cyan-950/5 border border-cyan-800/10 rounded p-2.5">
                  <div className="text-cyan-700 font-bold text-[9px] uppercase mb-1">OBS_01 // Router Configuration</div>
                  <p className="leading-relaxed text-[10px] text-slate-600">
                    Gained direct hands-on experience setting up and configuring Cisco routers. Learned how to establish basic connectivity, manage interfaces, and design network topologies.
                  </p>
                </div>

                <div className="bg-cyan-950/5 border border-cyan-800/10 rounded p-2.5">
                  <div className="text-cyan-700 font-bold text-[9px] uppercase mb-1">OBS_02 // CLI Tools & Diagnostics</div>
                  <p className="leading-relaxed text-[10px] text-slate-600">
                    Utilized PuTTY to access device CLIs directly. Ran vital diagnostic commands to test connections, trace routes, and resolve live network anomalies on physical hardware.
                  </p>
                </div>

                <div className="bg-cyan-950/5 border border-cyan-800/10 rounded p-2.5">
                  <div className="text-cyan-700 font-bold text-[9px] uppercase mb-1">OBS_03 // Key Takeaway</div>
                  <p className="leading-relaxed text-[10px] text-slate-600">
                    Understanding the physical networking layer deeply enhanced my perspective on system design. It bridged the gap between software development and infrastructure.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-cyan-800/10 pt-4 flex justify-between items-center text-[9px] text-cyan-700/50 font-mono">
              <span>LAYER: HARDWARE</span>
              <span>VERIFIED: HANDS_ON</span>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="flex flex-col justify-between h-full p-6 md:p-8 paper-grid relative">
            <div className="flex justify-between items-center text-[10px] text-cyan-700/60 font-mono border-b border-cyan-800/10 pb-2 mb-4">
              <span>{"LOG_302 // OPEN_SOURCE_COMMUNITY"}</span>
              <span>P. 06</span>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-4">
              <div>
                <span className="text-[9px] font-mono text-cyan-600/70 tracking-widest uppercase flex items-center gap-1.5 mb-1">
                  <GraduationCap className="w-3 h-3" /> COLLABORATION LOG
                </span>
                <h3 className="text-sm font-black text-slate-800 font-serif">Open Source & Leadership</h3>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">GSSoC & Hacktoberfest Contributions</p>
              </div>

              <div className="space-y-2.5">
                <div className="relative pl-3 border-l-2 border-cyan-300/50">
                  <div className="text-[9px] font-mono text-cyan-700 font-bold uppercase">Project Administration</div>
                  <p className="text-[10px] text-slate-600 mt-0.5 leading-relaxed">
                    Led the development of LegalHub during GSSoC 2025. Reviewed over 80 PRs, managed 33+ contributors, and guided the team in building an MVC backend with Express.js and MongoDB.
                  </p>
                </div>

                <div className="relative pl-3 border-l-2 border-cyan-300/50">
                  <div className="text-[9px] font-mono text-cyan-700 font-bold uppercase">Code Contributions</div>
                  <p className="text-[10px] text-slate-600 mt-0.5 leading-relaxed">
                    Successfully merged 83+ Pull Requests across multiple repositories. Focused heavily on resolving backend bugs, optimizing database queries, and improving system performance.
                  </p>
                </div>

                <div className="relative pl-3 border-l-2 border-cyan-300/50">
                  <div className="text-[9px] font-mono text-cyan-700 font-bold uppercase">Mentorship & Review</div>
                  <p className="text-[10px] text-slate-600 mt-0.5 leading-relaxed">
                    Set up CI/CD pipelines via GitHub Actions and enforced automated testing. This ensured code quality and provided a seamless contribution experience for the community.
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-2 font-mono text-[9px] text-slate-500">
                  <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> LEADERSHIP: OK</div>
                  <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> REVIEWS: OK</div>
                </div>
              </div>
            </div>

            <div className="border-t border-cyan-800/10 pt-4 flex justify-between items-center text-[9px] text-cyan-700/50 font-mono">
              <span>COMMUNITY: GSSOC</span>
              <span>MODE: LEADERSHIP</span>
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
        <div className="absolute top-2 left-2 text-[8px] text-cyan-600/30 font-mono">GRID: A0-L</div>
        <div className="absolute bottom-2 left-2 text-[8px] text-cyan-600/30 font-mono">GRID: B0-L</div>
        <div className="absolute left-0 top-0 bottom-0 w-2.5 ruler-ticks-left opacity-35" />
        <div className="pl-6 pr-4 py-4 h-full relative z-10 flex flex-col justify-between">
          {renderLeftPage()}
        </div>
      </div>

      {/* RIGHT PAGE SPREAD */}
      <div className="relative h-full flex flex-col justify-between overflow-hidden">
        <div className="absolute top-2 right-2 text-[8px] text-cyan-600/30 font-mono">GRID: A0-R</div>
        <div className="absolute bottom-2 right-2 text-[8px] text-cyan-600/30 font-mono">GRID: B0-R</div>
        <div className="absolute right-0 top-0 bottom-0 w-2.5 ruler-ticks-right opacity-35" />
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-linear-to-r from-cyan-950/5 via-cyan-950/2 to-transparent pointer-events-none" />
        <div className="pr-6 pl-4 py-4 h-full relative z-10 flex flex-col justify-between">
          {renderRightPage()}
        </div>
      </div>
      
    </div>
  );
}
