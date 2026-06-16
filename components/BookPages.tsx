"use client";

import React, { useState } from "react";
import { Mail, ExternalLink, Terminal, GraduationCap, Send, CheckCircle2 } from "lucide-react";
import MiniTerminal from "./MiniTerminal";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface BookPagesProps {
  currentPage: number;
  goToPage: (pageNumber: number) => void;
}

export default function BookPages({ currentPage, goToPage }: BookPagesProps) {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    }, 1200);
  };

  // Rendering individual pages based on currentPage spread
  // Spread 1 (Pages 1 & 2): Intro, TOC, Education
  // Spread 2 (Pages 3 & 4): Experience (Open Source, Internships)
  // Spread 3 (Pages 5 & 6): Projects (AI/Fullstack)
  // Spread 4 (Pages 7 & 8): Terminal, Contact

  const renderLeftPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="flex flex-col justify-between h-full p-6 md:p-8 paper-grid relative">
            {/* Technical top border and numbers */}
            <div className="flex justify-between items-center text-[10px] text-cyan-700/60 font-mono border-b border-cyan-800/10 pb-2 mb-4">
              <span>SECTION_01_INTRO</span>
              <span>P. 01</span>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-center my-auto">
              <span className="text-[10px] font-mono text-cyan-600/80 tracking-widest uppercase">
                THIS LOGBOOK BELONGS TO:
              </span>
              <h2 className="text-3xl font-black text-slate-800 font-serif tracking-tight mt-1 mb-4">
                Dipjyoti Das
              </h2>
              
              <p className="text-sm text-slate-700 leading-relaxed mb-4 drop-cap">
                Full Stack & Backend Developer pursuing a B.Tech in Computer Science at Gauhati University. Specialized in high-performance REST APIs, real-time WebSocket communication, and robust database design using MongoDB, PostgreSQL, and Redis.
              </p>
              
              <p className="text-xs text-slate-600/90 leading-relaxed font-mono border-l-2 border-cyan-600/50 pl-3 italic my-4">
                &quot;Driven by a love for engineering complex logic, optimizing systems for 60% database load reductions, and architecting scalable digital blueprints.&quot;
              </p>
            </div>

            {/* Left Page Footer */}
            <div className="border-t border-cyan-800/10 pt-4 flex justify-between items-center text-[9px] text-cyan-700/50 font-mono">
              <span>SYSTEMS INIT: 2021</span>
              <span>GUWAHATI, ASSAM</span>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col justify-between h-full p-6 md:p-8 paper-grid relative">
            <div className="flex justify-between items-center text-[10px] text-cyan-700/60 font-mono border-b border-cyan-800/10 pb-2 mb-4">
              <span>SECTION_02_EXPERIENCE</span>
              <span>P. 03</span>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-6">
              <div>
                <span className="text-[10px] font-mono bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded border border-cyan-200/50 tracking-wider font-bold">
                  OPEN SOURCE
                </span>
                <h3 className="text-lg font-black text-slate-800 font-serif mt-2 leading-snug">
                  GirlScript Summer of Code (GSSoC) 2025
                </h3>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                  Project Admin - LegalHub • Mar 2025 – Jun 2025
                </p>
                <ul className="mt-2.5 text-xs text-slate-700 space-y-1.5 list-none pl-0">
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-600 select-none">▸</span>
                    <span>Led reviews for 33+ contributors across 80+ PRs, ranking #53 on GSSoC leaderboard.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-600 select-none">▸</span>
                    <span>Designed modular MVC architecture in Express.js/MongoDB for real-time WebSocket messaging and AI semantic search.</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-dashed border-cyan-900/10 pt-4">
                <h3 className="text-sm font-black text-slate-800 font-serif leading-snug">
                  GSSoC Extended & Hacktoberfest 2024
                </h3>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                  Open Source Contributor • Oct 2024 – Nov 2024
                </p>
                <ul className="mt-2 text-xs text-slate-700 space-y-1 pl-0">
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-600 select-none">▸</span>
                    <span>Merged 83+ PRs across multiple repositories globally, ranking 27th globally.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-600 select-none">▸</span>
                    <span>Earned Hacktoberfest SuperContributor 2025 with 6/6 fast-approved core PRs.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-cyan-800/10 pt-4 flex justify-between items-center text-[9px] text-cyan-700/50 font-mono">
              <span>ROLE: CONTRIBS / LEADS</span>
              <span>VERIFIED: 160+ PRs</span>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col justify-between h-full p-6 md:p-8 paper-grid relative">
            <div className="flex justify-between items-center text-[10px] text-cyan-700/60 font-mono border-b border-cyan-800/10 pb-2 mb-4">
              <span>SECTION_03_PROJECTS_A</span>
              <span>P. 05</span>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-6">
              <div className="group relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-cyan-600/80 tracking-widest uppercase">
                    AI RESOLUTION PLATFORM
                  </span>
                  <a href="https://github.com/dipexplorer/LegalHub" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-600 transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <h3 className="text-lg font-black text-slate-800 font-serif mt-1">
                  LegalHub – AI Legal Assistant
                </h3>
                <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                  Architected platform combining Mistral AI with vector-based semantic search. Managed real-time query communication via WebSockets, OAuth logins, and production deployment pipeline.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {["Node.js", "Express", "MongoDB", "Mistral AI", "Socket.io"].map((t) => (
                    <span key={t} className="text-[9px] font-mono border border-cyan-800/15 text-cyan-800/80 px-2 py-0.5 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-dashed border-cyan-900/10 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-cyan-600/80 tracking-widest uppercase">
                    ADAPTIVE SCORING ENGINE
                  </span>
                  <a href="https://github.com/dipexplorer/LearnSight" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-600 transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <h3 className="text-lg font-black text-slate-800 font-serif mt-1">
                  LearnSight – Cognitive Engine
                </h3>
                <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                  Developed adaptive learning engine mapping cognitive paths. Utilized dynamic scoring algorithms that adjust difficulty levels dynamically based on user dimension performance.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {["Next.js", "TypeScript", "Firebase", "Firestore", "Tailwind"].map((t) => (
                    <span key={t} className="text-[9px] font-mono border border-cyan-800/15 text-cyan-800/80 px-2 py-0.5 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-cyan-800/10 pt-4 flex justify-between items-center text-[9px] text-cyan-700/50 font-mono">
              <span>PROJECTS INDEX: 01-02</span>
              <span>GITHUB CHECKED</span>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col justify-between h-full p-6 md:p-8 paper-grid relative">
            <div className="flex justify-between items-center text-[10px] text-cyan-700/60 font-mono border-b border-cyan-800/10 pb-2 mb-4">
              <span>SECTION_04_TERMINAL</span>
              <span>P. 07</span>
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
              <span>INDEX_PAGE</span>
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
                    { title: "01. Introduction / Identity", page: 1 },
                    { title: "02. Professional Experience", page: 2 },
                    { title: "03. Selected Code Projects", page: 3 },
                    { title: "04. System Terminal & Inquiry", page: 4 },
                  ].map((item) => (
                    <button
                      key={item.page}
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
                  EDUCATION NODES
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
              <span>SECTION_02_EXPERIENCE</span>
              <span>P. 04</span>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-6">
              <div>
                <span className="text-[10px] font-mono bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded border border-cyan-200/50 tracking-wider font-bold">
                  INTERNSHIP
                </span>
                <h3 className="text-lg font-black text-slate-800 font-serif mt-2 leading-snug">
                  InnoByte Services
                </h3>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                  Full Stack Developer Intern • Jan 2024
                </p>
                <ul className="mt-2.5 text-xs text-slate-700 space-y-1.5 list-none pl-0">
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-600 select-none">▸</span>
                    <span>Developed RESTful e-commerce backend in Express, incorporating modular cart, product catalog, and order schemas.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-600 select-none">▸</span>
                    <span>Implemented JWT authentication and simulated transaction endpoints.</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-dashed border-cyan-900/10 pt-4">
                <span className="text-[10px] font-mono bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded border border-cyan-200/50 tracking-wider font-bold">
                  TECHNICAL EXPERT
                </span>
                <h3 className="text-lg font-black text-slate-800 font-serif mt-2 leading-snug">
                  Chegg India
                </h3>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                  CS Subject Matter Expert • Apr 2023 – Oct 2024
                </p>
                <ul className="mt-2.5 text-xs text-slate-700 space-y-1.5 list-none pl-0">
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-600 select-none">▸</span>
                    <span>Solved 500+ complex technical problems in data structures, algorithms, databases, and network architectures.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-600 select-none">▸</span>
                    <span>Maintained 4.8/5 student rating for clear technical solutions.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-cyan-800/10 pt-4 flex justify-between items-center text-[9px] text-cyan-700/50 font-mono">
              <span>STATUS: COMPLETED</span>
              <span>RATING: 4.8/5.0</span>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col justify-between h-full p-6 md:p-8 paper-grid relative">
            <div className="flex justify-between items-center text-[10px] text-cyan-700/60 font-mono border-b border-cyan-800/10 pb-2 mb-4">
              <span>SECTION_03_PROJECTS_B</span>
              <span>P. 06</span>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-cyan-600/80 tracking-widest uppercase">
                    SCENARIO ANALYTICS
                  </span>
                  <a href="https://github.com/dipexplorer/Acadence" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-600 transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <h3 className="text-lg font-black text-slate-800 font-serif mt-1">
                  Acadence – Attendance Simulator
                </h3>
                <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                  Developed attendance manager with Supabase logic, JWT access controls, and predictive simulations modeling attendance ratios.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"].map((t) => (
                    <span key={t} className="text-[9px] font-mono border border-cyan-800/15 text-cyan-800/80 px-2 py-0.5 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-dashed border-cyan-900/10 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-cyan-600/80 tracking-widest uppercase">
                    HIGH PERFORMANCE BACKEND
                  </span>
                  <a href="https://github.com/dipexplorer/VideTube" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-600 transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <h3 className="text-lg font-black text-slate-800 font-serif mt-1">
                  VideTube – Scalable Streaming Core
                </h3>
                <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                  Designed video streaming backend utilizing JWT tokens, Redis caching, and MongoDB aggregation, yielding a 60% database load reduction.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {["Node.js", "Express", "MongoDB", "Redis", "Cloudinary", "JWT"].map((t) => (
                    <span key={t} className="text-[9px] font-mono border border-cyan-800/15 text-cyan-800/80 px-2 py-0.5 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-cyan-800/10 pt-4 flex justify-between items-center text-[9px] text-cyan-700/50 font-mono">
              <span>PROJECTS INDEX: 03-04</span>
              <span>DB LOAD SAVING: -60%</span>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col justify-between h-full p-6 md:p-8 paper-grid relative">
            <div className="flex justify-between items-center text-[10px] text-cyan-700/60 font-mono border-b border-cyan-800/10 pb-2 mb-4">
              <span>SECTION_05_CONTACT</span>
              <span>P. 08</span>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <span className="text-[10px] font-mono text-cyan-600/85 tracking-widest uppercase mb-1">
                DISPATCH TRANSMISSION SHEET
              </span>
              <h3 className="text-xl font-black text-slate-800 font-serif mb-4">
                Inquire & Connect
              </h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center p-6 text-center space-y-2.5 bg-emerald-50 rounded border border-emerald-100/50 my-auto text-emerald-800 font-mono text-xs">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  <p className="font-bold">Transmission Dispatch Succeeded.</p>
                  <p className="text-[10px] text-emerald-700/85">Response socket connected, will resolve shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 font-mono text-[11px] text-slate-700">
                  <div className="space-y-1">
                    <label className="text-[9px] text-cyan-700/70">[DISPATCHER_NAME]</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-2.5 py-1.5 bg-white border border-cyan-800/15 rounded outline-none focus:border-cyan-600 transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] text-cyan-700/70">[RETURN_EMAIL_ADDR]</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. john@company.com"
                      className="w-full px-2.5 py-1.5 bg-white border border-cyan-800/15 rounded outline-none focus:border-cyan-600 transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] text-cyan-700/70">[MESSAGE_PAYLOAD]</label>
                    <textarea
                      required
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Enter details..."
                      className="w-full px-2.5 py-1.5 bg-white border border-cyan-800/15 rounded outline-none focus:border-cyan-600 transition-colors resize-none custom-scrollbar"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-4 bg-cyan-900 text-white tracking-widest font-bold uppercase rounded border border-cyan-800 shadow-sm hover:bg-cyan-950 transition-colors active:scale-[0.98] disabled:bg-slate-400 disabled:border-slate-300 disabled:cursor-not-allowed cursor-pointer text-[10px]"
                  >
                    <span>Send Message</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              )}

              {/* Social Channels Log */}
              <div className="mt-4 border-t border-cyan-900/15 pt-3.5 flex justify-around text-slate-700">
                <a
                  href="mailto:contact@dipjyoti.dev"
                  className="flex items-center gap-1.5 hover:text-cyan-600 transition-colors font-mono text-[10px]"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
                <a
                  href="https://github.com/dipexplorer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-cyan-600 transition-colors font-mono text-[10px]"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/dipjyoti-das"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-cyan-600 transition-colors font-mono text-[10px]"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="border-t border-cyan-800/10 pt-4 flex justify-between items-center text-[9px] text-cyan-700/50 font-mono">
              <span>SOCKET: ACTIVE</span>
              <span>SSL_ENCRYPTED</span>
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
