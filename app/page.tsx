import Book from "@/components/Book";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 md:px-8 py-6 relative overflow-hidden">
      {/* Background blueprint details */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(2,6,23,0.75)_80%)] pointer-events-none" />
      
      {/* Header Branding */}
      <header className="absolute top-6 left-6 md:left-12 flex items-center gap-3 select-none z-20">
        <span className="font-mono text-[9px] text-cyan-500/60 border border-cyan-500/25 px-2 py-0.5 rounded-sm uppercase tracking-widest bg-cyan-950/20">
          SYS_LOG // ONLINE
        </span>
      </header>

      {/* Main Book Shell */}
      <div className="w-full max-w-5xl z-10 my-auto">
        <Book />
      </div>

      {/* Footer Branding */}
      <footer className="absolute bottom-4 text-center text-[9px] font-mono text-cyan-600/35 tracking-widest select-none z-20">
        ENGINEERING JOURNAL OF DIPJYOTI DAS • GUWAHATI, IND • © 2026
      </footer>
    </main>
  );
}
