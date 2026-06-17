"use client";
import React, { useState, useEffect, useRef } from "react";

/* ─────────────────────────── DATA ──────────────────────────── */
import { Contribution } from "@/lib/github";

/* ─────────────────────── CLUSTER META ──────────────────────── */
const CLUSTER = [
  { stroke: "#2dd4bf", name: "SahiDawa"  },  // Teal
  { stroke: "#818cf8", name: "LegalHub"  },  // Indigo
  { stroke: "#22d3ee", name: "LearnSight" }, // Cyan
  { stroke: "#f472b6", name: "Acadence"  },  // Pink
  { stroke: "#fbbf24", name: "VideTube"  },  // Amber
];



/* ──────────────────── PARTICLE PHYSICS ─────────────────────── */
interface Particle {
  id: number; cid: number; cIdx: number;
  x: number; y: number; vx: number; vy: number;
}

const GX = 600, GY = 310, W = 1200, H = 600;

function initParticles(conts: Contribution[]): Particle[] {
  const counts = [0, 0, 0, 0, 0];
  const len = Math.max(conts.length, 1);
  return conts.map((c, i) => {
    const cid  = c.cid;
    const cIdx = counts[cid]++;
    // Logarithmic spiral arms (2 arms, 180° apart)
    const arm = i % 2;
    const t   = (i / len) * 3.2 * Math.PI + arm * Math.PI;
    const r   = 55 + (t / (3.2 * Math.PI)) * 180 + Math.sin(i * 7.31 + 1.4) * 20;
    const a   = t + Math.sin(i * 13.7) * 0.38;
    // Initial tangential velocity for natural CCW rotation
    const spd = 0.52 + Math.sin(i * 2.71) * 0.08;
    return {
      id: c.id, cid, cIdx,
      x:  GX + r * Math.cos(a),
      y:  GY + r * Math.sin(a) * 0.4, // Elliptical 3D perspective
      vx: -spd * Math.sin(a),
      vy:  spd * Math.cos(a) * 0.4,   // Elliptical velocity
    };
  });
}

/* ───────────────────────── TYPES ───────────────────────────── */
type SingPhase = "COLLAPSE" | "FLASH" | "EXPLODE";

interface FrameState {
  coords:  { id: number; cid: number; x: number; y: number }[];
  mouse:   { x: number | null; y: number | null };
  pulse:   { x: number; y: number; r: number } | null;
  sing:    { x: number; y: number; phase: SingPhase; frame: number } | null;
  warp:    { x1: number; y1: number; x2: number; y2: number; op: number; col: string }[];
}

/* ─────────────────────── COMPONENT ─────────────────────────── */
export default function NodeConnectorFallback({ contributions }: { contributions: Contribution[] }) {
  const [hovId,   setHovId]   = useState<number | null>(null);
  // mounted gates star field and particle rendering to client-only,
  // preventing SSR ↔ client floating-point trig precision mismatches
  const [mounted, setMounted] = useState(false);

  // coords starts empty on server so SSR HTML matches client initial render
  const [frame, setFrame] = useState<FrameState>({
    coords: [],
    mouse:  { x: null, y: null },
    pulse:  null,
    sing:   null,
    warp:   [],
  });

  // ── Physics refs (mutated directly in rAF, never trigger React render) ──
  const psRef      = useRef<Particle[]>(initParticles(contributions));
  const mouseRef   = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const hovIdRef   = useRef<number | null>(null);
  const pulseRef   = useRef<{ x: number; y: number; r: number; alive: boolean } | null>(null);
  const singRef    = useRef<{ x: number; y: number; phase: SingPhase; frame: number } | null>(null);
  const warpRef    = useRef<{ angle: number; speed: number; col: string }[]>([]);
  const warpOriRef = useRef<{ x: number; y: number } | null>(null);
  const warpFRef   = useRef(0);
  const rafRef     = useRef<number | null>(null);

  useEffect(() => { hovIdRef.current = hovId; }, [hovId]);
  // Signal client mount so star field renders only in browser
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true); }, []);

  /* ── Main animation loop ── */
  useEffect(() => {
    const loop = () => {
      const ps = psRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const sg = singRef.current;
      const pu = pulseRef.current;
      /* ── Singularity state machine ── */
      if (sg) {
        sg.frame++;
        if (sg.phase === "COLLAPSE" && sg.frame >= 80) {
          sg.phase = "FLASH"; sg.frame = 0;
          // Generate hyperspace warp lines
          warpRef.current = Array.from({ length: 28 }, (_, i) => ({
            angle: (i / 28) * Math.PI * 2 + Math.sin(i * 7.3) * 0.28,
            speed: 13 + Math.sin(i * 3.7) * 9,
            col:   CLUSTER[i % 5].stroke,
          }));
          warpOriRef.current = { x: sg.x, y: sg.y };
          warpFRef.current   = 0;
        } else if (sg.phase === "FLASH" && sg.frame >= 18) {
          sg.phase = "EXPLODE"; sg.frame = 0;
          // Blast particles outward
          ps.forEach(p => {
            const dx = p.x - sg.x, dy = p.y - sg.y;
            const d  = Math.sqrt(dx * dx + dy * dy) + 1;
            const spd = 7 + Math.random() * 10;
            p.vx = (dx / d) * spd;
            p.vy = (dy / d) * spd;
          });
        } else if (sg.phase === "EXPLODE") {
          warpFRef.current++;
          if (sg.frame >= 60) singRef.current = null;
        }
      }

      /* ── EM pulse expand ── */
      if (pu?.alive) {
        pu.r += 7.8;
        if (pu.r > 300) {
          pu.alive = false;
        } else {
          ps.forEach(p => {
            const dx = p.x - pu.x, dy = p.y - pu.y;
            const d  = Math.sqrt(dx * dx + dy * dy);
            if (Math.abs(d - pu.r) < 16 && d > 5) {
              const k = (1 - Math.abs(d - pu.r) / 16) * 1.7;
              p.vx += (dx / d) * k;
              p.vy += (dy / d) * k;
            }
          });
        }
      }

      /* ── Per-particle physics ── */
      ps.forEach(p => {
        if (sg) {
          /* ── Singularity phases ── */
          if (sg.phase === "COLLAPSE") {
            const dx   = sg.x - p.x, dy = sg.y - p.y;
            const d    = Math.sqrt(dx * dx + dy * dy) + 1;
            const prog = sg.frame / 80;
            const f    = (0.018 + prog * 0.095) * (Math.min(d, 65) / 65 + 0.38);
            // Radial infall + swirl
            p.vx += (dx / d) * f + (-dy / d) * f * 0.42;
            p.vy += (dy / d) * f + ( dx / d) * f * 0.42;
            p.vx *= 0.91; p.vy *= 0.91;
          } else if (sg.phase === "FLASH") {
            p.vx *= 0.72; p.vy *= 0.72;
          }
          // EXPLODE: velocity carries particles, gravity slowly recaptures them
        } else {
          /* ── Orbital galaxy motion (Elliptical 3D Perspective) ── */
          const isHovered = p.id === hovIdRef.current;
          const dx = p.x - GX, dy = p.y - GY;
          const sy = dy * 2.5; // Un-scale the 0.4 Y-squash to calculate true distance in the circular plane
          const d  = Math.sqrt(dx * dx + sy * sy) + 1;
          
          const tx = -sy / d, ty = dx / d; // Tangential unit vector in circular space (CCW)
          
          if (isHovered) {
            // Drastically slow down the hovered node so it is easy to read/click
            p.vx *= 0.1;
            p.vy *= 0.1;
          } else {
            p.vx += tx * 0.058;              // Apply drive
            p.vy += (ty * 0.4) * 0.058;      // Squash Y-drive to match ellipse
            
            p.vx -= dx * 0.00012;            // Radial gravity toward core
            p.vy -= dy * 0.00012;            // (dy naturally scales the pull perfectly for an ellipse)
            
            p.vx *= 0.9835; p.vy *= 0.9835;  // Space drag
          }
        }

        /* ── Mouse gravitational lens ── */
        if (!sg && mx !== null && my !== null) {
          const dx = mx - p.x, dy = my - p.y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 195 && d > 15) {
            const f = (195 - d) * 0.000165;
            p.vx += dx * f; p.vy += dy * f;
          }
        }

        /* ── Speed cap & integrate ── */
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > 14) { p.vx = (p.vx / spd) * 14; p.vy = (p.vy / spd) * 14; }
        p.x += p.vx; p.y += p.vy;

        /* ── Boundary bounce — clamped to visible viewport zone (slice-safe: x:285-915) ── */
        if      (p.x < 285)     { p.x = 285;     p.vx =  Math.abs(p.vx) * 0.65; }
        else if (p.x > W - 285) { p.x = W - 285; p.vx = -Math.abs(p.vx) * 0.65; }
        if      (p.y < 18)     { p.y = 18;     p.vy =  Math.abs(p.vy) * 0.65; }
        else if (p.y > H - 18) { p.y = H - 18; p.vy = -Math.abs(p.vy) * 0.65; }
      });

      /* ── Build warp display data ── */
      const wf = warpFRef.current;
      const warpDisp: FrameState["warp"] =
        warpOriRef.current && warpRef.current.length > 0
          ? warpRef.current.map(l => {
              const d1 = wf * l.speed;
              const d2 = d1 + 105 + wf * 4;
              return {
                x1: warpOriRef.current!.x + Math.cos(l.angle) * d1,
                y1: warpOriRef.current!.y + Math.sin(l.angle) * d1,
                x2: warpOriRef.current!.x + Math.cos(l.angle) * d2,
                y2: warpOriRef.current!.y + Math.sin(l.angle) * d2,
                op:  Math.max(0, 1 - wf / 42),
                col: l.col,
              };
            }).filter(l => l.op > 0)
          : [];

      /* ── Single batched React state update (one render/frame) ── */
      setFrame({
        coords: ps.map(p => ({ id: p.id, cid: p.cid, x: p.x, y: p.y })),
        mouse:  { x: mx, y: my },
        pulse:  pu?.alive ? { x: pu.x, y: pu.y, r: pu.r } : null,
        sing:   sg        ? { x: sg.x, y: sg.y, phase: sg.phase, frame: sg.frame } : null,
        warp:   warpDisp,
      });

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  /* ── Event helpers ── */
  const toWorld = (e: React.MouseEvent<SVGSVGElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    return { x: ((e.clientX - r.left) / r.width) * W, y: ((e.clientY - r.top) / r.height) * H };
  };

  const findClosest = (wx: number, wy: number, maxD = 22) => {
    let best: number | null = null, bd = maxD;
    psRef.current.forEach(p => {
      const d = Math.sqrt((wx - p.x) ** 2 + (wy - p.y) ** 2);
      if (d < bd) { bd = d; best = p.id; }
    });
    return best;
  };

  const handleMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const { x, y } = toWorld(e);
    mouseRef.current = { x, y };

    const id = findClosest(x, y);
    if (id !== hovIdRef.current) {
      setHovId(id);
      if (id !== null) {
        const p = psRef.current[id];
        pulseRef.current = { x: p.x, y: p.y, r: 0, alive: true };
      }
    }
  };

  const handleLeave = () => {
    mouseRef.current = { x: null, y: null };
    setHovId(null);
  };

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const { x, y } = toWorld(e);

    // Open GitHub ONLY if user is actively hovering a node (tooltip is showing).
    // We do NOT use findClosest here — with 50 dense particles, any canvas click
    // would almost always find a particle within radius, causing random link opens.
    const hoveredId = hovIdRef.current;
    if (hoveredId !== null) {
      const p = psRef.current[hoveredId];
      const contrib = contributions.find(c => c.id === p.id);
      if (contrib?.url) window.open(contrib.url, "_blank", "noopener,noreferrer");
    } else {
      // Check if user clicked the Galactic Core
      const dx = x - GX;
      const dy = y - GY;
      if (Math.sqrt(dx * dx + dy * dy) <= 65) {
        window.open("https://github.com/dipexplorer", "_blank", "noopener,noreferrer");
      }
    }
    // 🌌 Singularity triggered at click point
    singRef.current = { x, y, phase: "COLLAPSE", frame: 0 };
  };

  /* ── Derived display values ── */
  const { coords, mouse, pulse, sing, warp } = frame;
  const hovNode    = coords.find(c => c.id === hovId);
  const hovContrib = hovNode ? contributions.find(c => c.id === hovNode.id) || null : null;

  /* ── Connection line rendering ── */
  const renderConns = () => {
    const lines: React.ReactNode[] = [];
    const mx = mouse.x, my = mouse.y;
    const ambMax = 90;

    /* Ambient proximity web */
    for (let i = 0; i < coords.length; i++) {
      for (let j = i + 1; j < coords.length; j++) {
        const a = coords[i], b = coords[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        const sc = a.cid === b.cid;
        const md = sc ? ambMax + 20 : ambMax;
        if (d < md) {
          lines.push(
            <line key={`a${a.id}-${b.id}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y}
              stroke={sc ? CLUSTER[a.cid].stroke : "rgba(34,211,238,0.45)"}
              strokeWidth={sc ? "0.9" : "0.45"}
              strokeOpacity={(1 - d / md) * (sc ? 0.32 : 0.1)} />
          );
        }
      }
    }

    /* Hover synapse web (same-cluster glow + animated pulse) */
    if (hovNode) {
      coords.forEach(p => {
        if (p.id === hovNode.id || p.cid !== hovNode.cid) return;
        const dx = p.x - hovNode.x, dy = p.y - hovNode.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 345) {
          const op  = (1 - d / 345) * 0.78;
          const col = CLUSTER[hovNode.cid].stroke;
          lines.push(
            <line key={`hs${p.id}`} x1={hovNode.x} y1={hovNode.y} x2={p.x} y2={p.y}
              stroke={col} strokeWidth="1.4" strokeOpacity={op} filter="url(#glow)" />,
            <line key={`hp${p.id}`} x1={hovNode.x} y1={hovNode.y} x2={p.x} y2={p.y}
              stroke={col} strokeWidth="2.1" strokeOpacity={op * 0.52}
              strokeDasharray="6 14" className="synapse-pulse" />
          );
        }
      });
    }

    /* Cursor gravity web */
    if (mx !== null && my !== null) {
      coords.forEach(p => {
        const dx = mx - p.x, dy = my - p.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 195) {
          lines.push(
            <line key={`m${p.id}`} x1={mx} y1={my} x2={p.x} y2={p.y}
              stroke={CLUSTER[p.cid].stroke} strokeWidth="0.95"
              strokeOpacity={(1 - d / 195) * 0.65} filter="url(#glow)" />
          );
        }
      });
    }
    return lines;
  };

  /* ── Tooltip card ── */
  const renderTooltip = () => {
    if (!hovNode || !hovContrib) return null;
    const ox   = hovNode.x > 620 ? -354 : 16;
    const oy   = hovNode.y > 450 ? -116 : -14;
    const meta = CLUSTER[hovNode.cid];
    return (
      <g transform={`translate(${hovNode.x + ox},${hovNode.y + oy})`}>
        <rect x="0" y="-14" width="338" height="116" rx="7"
          fill="rgba(3,7,18,0.97)" stroke={meta.stroke} strokeWidth="1.3" filter="url(#glow)" />
        {/* Cluster accent bar at top */}
        <rect x="0" y="-14" width="338" height="7" rx="3.5" fill={meta.stroke} fillOpacity="0.9" />
        <text x="13" y="7" fill={meta.stroke} fontSize="8.5" fontFamily="monospace" letterSpacing="1.2">
          {meta.name.toUpperCase()} {"// CONTRIBUTION"}
        </text>
        <text x="13" y="28" fill="#ffffff" fontSize="10.5" fontWeight="700" fontFamily="monospace">
          {hovContrib.label}
        </text>
        <text x="13" y="48" fill="rgba(203,213,225,0.85)" fontSize="8.8" fontFamily="monospace">
          {hovContrib.details.slice(0, 56)}
        </text>
        {hovContrib.details.length > 56 && (
          <text x="13" y="62" fill="rgba(203,213,225,0.85)" fontSize="8.8" fontFamily="monospace">
            {hovContrib.details.slice(56)}
          </text>
        )}
        <text x="13" y="90" fill={meta.stroke} fontSize="9" fontWeight="700" fontFamily="monospace"
          filter="url(#glow)">
          {">> CLICK TO OPEN ON GITHUB _"}
        </text>
      </g>
    );
  };

  /* ── Singularity visual ── */
  const renderSingularity = () => {
    if (!sing) return null;
    const { x, y, phase, frame: f } = sing;
    if (phase === "COLLAPSE") {
      const p = f / 80;
      return (
        <g>
          {/* Accretion disk (ellipse) */}
          <ellipse cx={x} cy={y} rx={8 + p * 24} ry={2.5 + p * 7}
            fill="none" stroke="#f472b6" strokeWidth="0.9" strokeOpacity={p * 0.48} />
          {/* Outer dashed ring */}
          <circle cx={x} cy={y} r={12 + p * 35} fill="none"
            stroke="rgba(34,211,238,0.22)" strokeWidth="0.6" strokeDasharray="3 5" />
          {/* Event horizon */}
          <circle cx={x} cy={y} r={3.5 + p * 18} fill="rgba(0,0,0,0.94)"
            stroke="#22d3ee" strokeWidth="1.4" strokeOpacity={0.38 + p * 0.62} filter="url(#sglow)" />
        </g>
      );
    }
    if (phase === "FLASH") {
      const p = f / 18;
      return (
        <g>
          <circle cx={x} cy={y} r={p * 390} fill="none"
            stroke="white" strokeWidth={4.5 - p * 3.5} strokeOpacity={1 - p} filter="url(#xglow)" />
          <ellipse cx={x} cy={y} rx={p * 210} ry={p * 85} fill="rgba(255,255,255,0.035)" />
        </g>
      );
    }
    return null;
  };

  /* ──────────────────────── RENDER ────────────────────────── */
  return (
    <div className="w-full h-full absolute inset-0 z-0 overflow-hidden">
      <svg
        viewBox="200 0 800 600"
        className="w-full h-full cursor-crosshair"
        preserveAspectRatio="xMidYMid meet"
        suppressHydrationWarning
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      >
        {/* ── Animations & Filters ── */}
        <defs>
          <style>{`
            @keyframes flow { from { stroke-dashoffset:24; } to { stroke-dashoffset:0; } }
            .synapse-pulse { stroke-dasharray:6 14; animation:flow 1.4s linear infinite; }
            @keyframes halo-beat { 0%,100%{opacity:.18;} 50%{opacity:.65;} }
            .halo-beat { animation:halo-beat 2.2s ease-in-out infinite; }
            @keyframes core-pulse { 0%,100%{opacity:.5;} 50%{opacity:1;} }
            .core-pulse { animation:core-pulse 3s ease-in-out infinite; }
            @keyframes card-in { from{opacity:0;transform:translateY(8px);} to{opacity:1;transform:translateY(0);} }
            .card-in { animation:card-in .55s cubic-bezier(.22,1,.36,1) forwards; }
            @keyframes edge-draw { from{stroke-dashoffset:400;} to{stroke-dashoffset:0;} }
            .cons-edge { stroke-dasharray:400; animation:edge-draw 1.2s ease-out forwards; }
            @keyframes hint-fade { 0%,100%{opacity:.45;} 50%{opacity:.85;} }
            .hint-anim { animation:hint-fade 3s ease-in-out infinite; }
            @keyframes btn-breathe { 0%,100%{filter:drop-shadow(0 0 5px rgba(34,211,238,.25));} 50%{filter:drop-shadow(0 0 14px rgba(34,211,238,.55));} }
            .btn-idle { animation:btn-breathe 2.8s ease-in-out infinite; }
            @keyframes orbit-spin { from{stroke-dashoffset:0;} to{stroke-dashoffset:-200;} }
            .orbit-ring { animation:orbit-spin 18s linear infinite; stroke-dasharray:8 16; }
            .orbit-ring-r { animation:orbit-spin 24s linear infinite reverse; stroke-dasharray:5 22; }
          `}</style>

          {/* Soft glow */}
          <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          {/* Medium glow */}
          <filter id="mglow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="7" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          {/* Strong glow */}
          <filter id="sglow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="11" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          {/* Extreme glow */}
          <filter id="xglow" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="18" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>

          {/* Central nebula */}
          <radialGradient id="nebula" cx="50%" cy="52%" r="48%">
            <stop offset="0%"   stopColor="rgba(34,211,238,0.07)" />
            <stop offset="45%"  stopColor="rgba(99,102,241,0.035)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          {/* Corner accent nebulae */}
          <radialGradient id="neb2" cx="20%" cy="25%" r="35%">
            <stop offset="0%" stopColor="rgba(45,212,191,0.055)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="neb3" cx="80%" cy="75%" r="35%">
            <stop offset="0%" stopColor="rgba(129,140,248,0.055)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Per-cluster gradients — stronger */}
          {CLUSTER.map((c, i) => (
            <radialGradient key={i} id={`cg${i}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor={c.stroke} stopOpacity="0.32" />
              <stop offset="70%"  stopColor={c.stroke} stopOpacity="0.06" />
              <stop offset="100%" stopColor={c.stroke} stopOpacity="0"    />
            </radialGradient>
          ))}
        </defs>

        {/* ── Atmosphere ── */}
        <ellipse cx={GX} cy={GY} rx="500" ry="290" fill="url(#nebula)" />
        <ellipse cx="350" cy="200" rx="300" ry="200" fill="url(#neb2)" />
        <ellipse cx="850" cy="420" rx="280" ry="180" fill="url(#neb3)" />

        {/* ── Star field ── */}
        {mounted && Array.from({ length: 160 }, (_, i) => {
          const phi = 137.508 * (i + 1) * (Math.PI / 180);
          const r2  = Math.sqrt((i + 1) / 160);
          const sx  = GX + r2 * 560 * Math.cos(phi + i * 0.41);
          const sy  = GY + r2 * 270 * Math.sin(phi + i * 0.63);
          if (sx < 10 || sx > W - 10 || sy < 10 || sy > H - 10) return null;
          const big = i % 22 === 0;
          return (
            <circle key={`st${i}`} cx={sx} cy={sy}
              r={big ? 1.2 : 0.25 + (i % 5) * 0.17}
              fill="white" fillOpacity={big ? 0.5 : 0.08 + (i % 7) * 0.055}
              filter={big ? "url(#glow)" : undefined} />
          );
        })}

        {/* ── Galaxy mode: orbital core + rings ── */}
        {/* Orbit rings */}
        {[105, 185, 268].map((r, i) => (
          <ellipse key={`or${i}`} cx={GX} cy={GY}
            rx={r} ry={r * 0.4}
            fill="none"
            stroke={i === 1 ? "rgba(129,140,248,0.08)" : "rgba(34,211,238,0.07)"}
            strokeWidth="1"
            className={i % 2 === 0 ? "orbit-ring" : "orbit-ring-r"} />
        ))}
        {/* Core glow layers */}
        <circle cx={GX} cy={GY} r="55"  fill="rgba(34,211,238,0.05)" filter="url(#xglow)" className="core-pulse" />
        <circle cx={GX} cy={GY} r="22"  fill="rgba(34,211,238,0.12)" filter="url(#mglow)" />
        <circle cx={GX} cy={GY} r="7"   fill="rgba(255,255,255,0.55)" filter="url(#glow)" />
        <circle cx={GX} cy={GY} r="2.5" fill="white" />

        {/* ── Connection lines ── */}
        {renderConns()}

        {/* ── EM pulse ring ── */}
        {pulse && (
          <circle cx={pulse.x} cy={pulse.y} r={pulse.r} fill="none"
            stroke="#22d3ee" strokeWidth="1.8"
            strokeOpacity={Math.max(0, 0.65 - pulse.r / 280)} filter="url(#glow)" />
        )}

        {/* ── Hyperspace warp lines ── */}
        {warp.map((l, i) => (
          <line key={`wl${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke={l.col} strokeWidth="2" strokeOpacity={l.op} filter="url(#glow)" />
        ))}

        {/* ── Singularity visual ── */}
        {renderSingularity()}

        {/* ── Particles ── */}
        {coords.map(c => {
          const mx  = mouse.x, my = mouse.y;
          const isH = hovId === c.id;
          const near = mx !== null && my !== null &&
                       Math.sqrt((mx - c.x) ** 2 + (my - c.y) ** 2) < 195;
          const meta = CLUSTER[c.cid];
          const r    = isH ? 7 : near ? 5 : 3.5;
          return (
            <g key={c.id}>
              {isH && (
                <>
                  <circle cx={c.x} cy={c.y} r="26" fill="none"
                    stroke={meta.stroke} strokeOpacity="0.15" strokeWidth="1.5" className="halo-beat" />
                  <circle cx={c.x} cy={c.y} r="14" fill="none"
                    stroke={meta.stroke} strokeOpacity="0.5" strokeWidth="1.2" filter="url(#glow)" />
                </>
              )}
              <circle cx={c.x} cy={c.y} r={r}
                fill={meta.stroke}
                fillOpacity={isH ? 1 : near ? 0.95 : 0.78}
                filter={isH ? "url(#sglow)" : near ? "url(#mglow)" : "url(#glow)"} />
            </g>
          );
        })}

        {/* ── Contribution tooltip ── */}
        {renderTooltip()}

        {/* ── HUD Interaction hint ── */}
        <g className="hint-anim">
          {/* Left bracket */}
          <path d="M 270 550 L 260 550 L 260 580 L 270 580" fill="none" stroke="#22d3ee" strokeWidth="1.5" opacity="0.6"/>
          {/* Background Panel */}
          <rect x="260" y="550" width="680" height="30" fill="rgba(2,6,23,0.4)" stroke="rgba(34,211,238,0.15)" strokeWidth="1" />
          {/* Right bracket */}
          <path d="M 930 550 L 940 550 L 940 580 L 930 580" fill="none" stroke="#22d3ee" strokeWidth="1.5" opacity="0.6"/>
          
          {/* Text */}
          <text x="600" y="569" textAnchor="middle" fill="#94a3b8" fontSize="10.5" fontFamily="monospace" letterSpacing="1.8">
            <tspan fill="#2dd4bf" fontWeight="bold">HOVER</tspan> PARTICLES FOR GITHUB COMMITS 
            <tspan fill="#334155" fontWeight="bold">  ||  </tspan> 
            <tspan fill="#818cf8" fontWeight="bold">CLICK</tspan> CORE FOR GITHUB PROFILE
          </text>
        </g>
      </svg>
    </div>
  );
}

