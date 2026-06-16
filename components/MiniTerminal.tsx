"use client";

import React, { useState, useRef, useEffect } from "react";

interface LogLine {
  text: string;
  type: "input" | "system" | "success" | "error";
}

export default function MiniTerminal() {
  const [history, setHistory] = useState<LogLine[]>([
    { text: "DIPJYOTI_DAS_SYSTEMS v1.0.4 initialized.", type: "system" },
    { text: "Type 'help' to see list of available commands.", type: "system" },
  ]);
  const [input, setInput] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { text: `dipuser@portfolio:~$ ${input}`, type: "input" as const }];

    switch (cmd) {
      case "help":
        newHistory.push(
          { text: "Available commands:", type: "system" },
          { text: "  about     - About Dipjyoti Das", type: "system" },
          { text: "  skills    - Technical core skills", type: "system" },
          { text: "  projects  - Featured software engineering projects", type: "system" },
          { text: "  contact   - Contact detail endpoints", type: "system" },
          { text: "  clear     - Clear terminal logs", type: "system" }
        );
        break;
      case "about":
        newHistory.push({
          text: "Dipjyoti Das - Computer Science student at Gauhati University. Specialized in scalable backend architectures, database optimizations, and full-stack web applications. Passionate about building robust systems.",
          type: "success",
        });
        break;
      case "skills":
        newHistory.push(
          { text: "LANGUAGES: JavaScript, TypeScript, Python, SQL", type: "success" },
          { text: "FRONTEND:  React.js, Next.js, Tailwind CSS, Three.js", type: "success" },
          { text: "BACKEND:   Node.js, Express.js, WebSockets, JWT, RBAC", type: "success" },
          { text: "DATABASES: MongoDB, PostgreSQL, MySQL, Redis", type: "success" },
          { text: "DEVOPS:    Git, CI/CD, Firebase, Supabase, Cloudinary", type: "success" }
        );
        break;
      case "projects":
        newHistory.push(
          { text: "1. LegalHub  - AI-Powered Legal Query Resolution Platform (Mistral AI, Express, Socket.io)", type: "success" },
          { text: "2. LearnSight - Dynamic Cognitive-Score Adaptive Learning Platform (Next.js, TS, Firebase)", type: "success" },
          { text: "3. Acadence  - Supabase-backed Attendance System & Predictive Simulator (Next.js, Tailwind)", type: "success" },
          { text: "4. VideTube  - Scalable Video Streaming Backend (Node.js, Redis, Mongo Aggregation)", type: "success" }
        );
        break;
      case "contact":
        newHistory.push(
          { text: "Email:    contact@dipjyoti.dev", type: "success" },
          { text: "LinkedIn: linkedin.com/in/dipjyoti-das", type: "success" },
          { text: "GitHub:   github.com/dipexplorer", type: "success" }
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        newHistory.push({
          text: `Command not found: '${cmd}'. Type 'help' for support list.`,
          type: "error",
        });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <div className="w-full flex flex-col rounded-lg bg-slate-950 border border-cyan-800/40 text-cyan-400 font-mono shadow-lg text-xs overflow-hidden h-64 md:h-72">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-cyan-950 select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="text-[10px] text-cyan-600/80">bash - dipuser@portfolio</div>
        <div className="w-8" />
      </div>

      {/* Logs Area */}
      <div
        ref={containerRef}
        className="flex-1 p-3 overflow-y-auto space-y-1.5 custom-scrollbar bg-slate-950/95"
      >
        {history.map((line, idx) => (
          <div
            key={idx}
            className={
              line.type === "input"
                ? "text-slate-100"
                : line.type === "error"
                ? "text-red-400 font-bold"
                : line.type === "success"
                ? "text-emerald-400"
                : "text-cyan-500/90"
            }
          >
            {line.text}
          </div>
        ))}
      </div>

      {/* Input Form */}
      <form onSubmit={handleCommand} className="flex items-center border-t border-cyan-950 bg-slate-900/50 p-2">
        <span className="text-cyan-500 font-bold mr-1.5 select-none pl-1">dipuser@portfolio:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent text-slate-100 outline-none font-mono text-xs caret-cyan-400"
          placeholder="type help..."
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </form>
    </div>
  );
}
