import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Navbar from "@/sections/NavBar";
import Hero from "@/sections/Hero";
import Contact from "@/sections/Contact";
import Credentials from "@/sections/Credentials";
import Experience from "@/sections/Experience";
import AppEffects from "@/components/AppEffects";
import Book from "@/components/Book";

import { fetchGithubContributions } from "@/lib/github";

export default async function Home() {
  const contributions = await fetchGithubContributions();

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-100 relative overflow-x-hidden">
      {/* Background blueprint details */}
      <div className="fixed inset-0 blueprint-grid opacity-20 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,6,23,0.85)_95%)] pointer-events-none z-0" />
      
      <AppEffects />
      <Navbar />

      <main className="w-full flex-1 relative z-10">
        {/* Hero Section */}
        <Hero contributions={contributions} />

        {/* Interactive Logbook */}
        <section id="logbook" className="w-full py-20 md:py-28 relative overflow-hidden border-t border-b border-cyan-500/10">
          <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-12 text-center">
              <span className="font-mono text-[9px] text-cyan-400 border border-cyan-500/25 px-2.5 py-1 rounded-sm uppercase tracking-widest bg-cyan-950/20 mb-4">
                SYS_ARCH // EXPERIENCES
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
                Interactive{" "}
                <span className="text-cyan-400 font-bold">
                  Logbook
                </span>
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 mt-4 max-w-xl font-mono">
                Click &quot;Access Logbook_&quot; to browse academic credentials, open-source work, and professional history.
              </p>
            </div>

            {/* Book Layout */}
            <div className="w-full flex justify-center">
              <Book />
            </div>
          </div>
        </section>

        {/* Experience Timeline Section */}
        <Experience />

        {/* Credentials & Achievements Vault */}
        <Credentials />

        {/* Projects Section */}
        <Projects />

        {/* Skills / Tech Stack Section */}
        <Skills />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer Branding */}
      <footer className="w-full py-8 text-center text-[9px] font-mono text-cyan-600/35 tracking-widest select-none relative z-10 border-t border-cyan-500/5">
        ENGINEERING JOURNAL OF DIPJYOTI DAS • GUWAHATI, IND • © 2026
      </footer>
    </div>
  );
}
