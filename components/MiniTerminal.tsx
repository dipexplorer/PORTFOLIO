"use client";

import React, { useState, useRef, useEffect, KeyboardEvent } from "react";

interface LogLine {
  text: string;
  type: "input" | "system" | "success" | "error" | "info" | "warning";
  html?: boolean;
}

export default function MiniTerminal() {
  const [history, setHistory] = useState<LogLine[]>([
    { text: "DIPJYOTI_DAS_SYSTEMS v2.0 initialized.", type: "system" },
    { text: "Type 'help' to see list of available commands.", type: "system" },
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const nextIdx = historyIndex + 1;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCmd = input.trim();
    if (!fullCmd) return;

    const args = fullCmd.split(" ").filter(Boolean);
    const cmd = args[0].toLowerCase();

    const newHistory = [...history, { text: `dipuser@portfolio:~$ ${fullCmd}`, type: "input" as const }];
    
    setCommandHistory(prev => [...prev, fullCmd]);
    setHistoryIndex(-1);

    switch (cmd) {
      case "help":
        newHistory.push(
          { text: "Available commands:", type: "system" },
          { text: "  about     - About Dipjyoti Das", type: "system" },
          { text: "  skills    - Technical core skills", type: "system" },
          { text: "  projects  - Featured software engineering projects", type: "system" },
          { text: "  contact   - Contact detail endpoints", type: "system" },
          { text: "  ls        - List directory contents", type: "system" },
          { text: "  cat       - Concatenate and print files", type: "system" },
          { text: "  neofetch  - Display system information", type: "system" },
          { text: "  whoami    - Display current user", type: "system" },
          { text: "  ping      - Check server status", type: "system" },
          { text: "  sudo      - Execute a command as superuser", type: "system" },
          { text: "  clear     - Clear terminal logs", type: "system" }
        );
        break;
      case "about":
        newHistory.push({
          text: "Dipjyoti Das - Full-Stack Developer & CS Student. Specialized in scalable backend architectures, database optimizations, and full-stack web applications. Passionate about building robust systems.",
          type: "success",
        });
        break;
      case "skills":
        newHistory.push(
          { text: "LANGUAGES: JavaScript, TypeScript, Python, SQL", type: "success" },
          { text: "FRONTEND:  React.js, Next.js, Tailwind CSS", type: "success" },
          { text: "BACKEND:   Node.js, Express.js, WebSockets, REST APIs", type: "success" },
          { text: "DATABASES: MongoDB, PostgreSQL, Supabase, Redis", type: "success" },
          { text: "DEVOPS:    Git, Docker, CI/CD pipelines, AWS basics", type: "success" }
        );
        break;
      case "projects":
        newHistory.push(
          { text: "1. SahiDawa  - Real-time medicine safety platform (Next.js, Firebase)", type: "success" },
          { text: "2. LegalHub  - AI-Powered Legal Query Resolution Platform (Mistral AI, Express, Socket.io)", type: "success" },
          { text: "3. LearnSight- Dynamic Cognitive-Score Adaptive Learning Platform (Next.js, TS)", type: "success" },
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
      case "whoami":
        newHistory.push({ text: "dipuser", type: "info" });
        break;
      case "ping":
        newHistory.push(
          { text: "PING portfolio.dipjyoti.dev (127.0.0.1): 56 data bytes", type: "system" },
          { text: "64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.042 ms", type: "success" },
          { text: "64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.038 ms", type: "success" },
          { text: "--- portfolio.dipjyoti.dev ping statistics ---", type: "system" },
          { text: "2 packets transmitted, 2 packets received, 0.0% packet loss", type: "info" }
        );
        break;
      case "sudo":
        if (args[1] === "rm" && args[2] === "-rf" && args[3] === "/") {
            newHistory.push({ text: "Nice try. System integrity protected. Access denied.", type: "error" });
        } else {
            newHistory.push({ text: "dipuser is not in the sudoers file. This incident will be reported.", type: "error" });
        }
        break;
      case "ls":
        newHistory.push({
          text: "about.txt   contact.json   projects/   resume.pdf   skills.md",
          type: "info"
        });
        break;
      case "cat":
        if (args[1] === "about.txt") {
            newHistory.push({ text: "I'm a developer who builds reliable digital experiences...", type: "success" });
        } else if (args[1] === "contact.json") {
            newHistory.push({ text: '{\n  "email": "contact@dipjyoti.dev",\n  "github": "dipexplorer"\n}', type: "success", html: true });
        } else if (args[1] === "resume.pdf") {
            newHistory.push({ text: "Error: Cannot display binary file. Try downloading it from the Hero section.", type: "error" });
        } else if (args[1] === "skills.md") {
            newHistory.push({ text: "# Skills\n- Next.js\n- Node.js\n- MongoDB\n- Supabase", type: "success", html: true });
        } else if (args[1] === "projects" || args[1] === "projects/") {
            newHistory.push({ text: "cat: projects/: Is a directory", type: "error" });
        } else if (!args[1]) {
            newHistory.push({ text: "cat: missing file operand", type: "error" });
        } else {
            newHistory.push({ text: `cat: ${args[1]}: No such file or directory`, type: "error" });
        }
        break;
      case "neofetch":
        const ascii = `
   \\  /       OS: DipjyotiOS 2025
   -  -       Kernel: Next.js 15
  / || \\      Uptime: 24/7
    ||        Packages: npm (245)
    ||        Shell: zsh (interactive)
   ====       Resolution: Responsive
              Theme: Dark Cyan Glass
              Icons: Lucide
              Terminal: MiniTerm v2
`;
        newHistory.push({ text: ascii, type: "info", html: true });
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
    <div 
        className="w-full flex flex-col rounded-lg bg-slate-950 border border-cyan-800/40 text-cyan-400 font-mono shadow-[0_0_20px_rgba(6,182,212,0.15)] text-xs overflow-hidden h-64 md:h-72 cursor-text"
        onClick={() => inputRef.current?.focus()}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-cyan-900/50 select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 hover:bg-yellow-400 transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 hover:bg-green-400 transition-colors" />
        </div>
        <div className="text-[10px] text-slate-400 font-semibold tracking-wider">dipuser@portfolio:~</div>
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
                ? "text-slate-100 font-semibold"
                : line.type === "error"
                ? "text-rose-400"
                : line.type === "success"
                ? "text-emerald-400"
                : line.type === "info"
                ? "text-sky-300"
                : "text-slate-400"
            }
          >
            {line.html ? (
                <pre className="whitespace-pre font-mono text-[10px] sm:text-xs leading-relaxed font-medium">{line.text}</pre>
            ) : (
                <span className="break-words">{line.text}</span>
            )}
          </div>
        ))}
      </div>

      {/* Input Form */}
      <form onSubmit={handleCommand} className="flex items-center border-t border-cyan-900/50 bg-slate-900/50 p-2">
        <span className="text-cyan-500 font-bold mr-2 select-none pl-1 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">dipuser@portfolio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-slate-100 outline-none font-mono text-xs caret-cyan-400 placeholder:text-slate-700"
          placeholder="type 'help'..."
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </form>
    </div>
  );
}
