"use client";
import React, { useState, useEffect, useRef } from "react";

/* ─────────────────────────── DATA ──────────────────────────── */
interface Contribution {
  id: number; cid: number; repo: string; label: string; url: string; details: string;
}
const CONTRIBUTIONS: Contribution[] = [
  // ── Cluster 0: SahiDawa ──
  { id:0,cid:0,repo:"RatLoopz / sahidawa-india",label:"[PR #83] Client Image Preprocessing",url:"https://github.com/RatLoopz/sahidawa-india",details:"Compressed prescription images by 80% using local canvas downsampling before IPFS uploads." },
  { id:1,cid:0,repo:"RatLoopz / sahidawa-india",label:"[Issue #42] Jan Aushadhi DB Schema Sync",url:"https://github.com/RatLoopz/sahidawa-india",details:"Created automated schema mapping pipelines to synchronize generic drug datasets." },
  { id:2,cid:0,repo:"RatLoopz / sahidawa-india",label:"[PR #95] Offline ServiceWorker Caching",url:"https://github.com/RatLoopz/sahidawa-india",details:"Implemented offline-first medicine lookup via local ServiceWorker & IndexedDB queues." },
  { id:3,cid:0,repo:"RatLoopz / sahidawa-india",label:"[Commit 8f1e2c9] Add PWA Manifest Config",url:"https://github.com/RatLoopz/sahidawa-india",details:"Configured Progressive Web App manifest properties, local icons, and asset caches." },
  { id:4,cid:0,repo:"RatLoopz / sahidawa-india",label:"[PR #104] Generic Drugs Search Algorithm",url:"https://github.com/RatLoopz/sahidawa-india",details:"Optimized regex-based generic medicine name matching to bypass database query latency." },
  // ── Cluster 1: LegalHub ──
  { id:5,cid:1,repo:"dipexplorer / LegalHub",label:"[Commit a4c9b1f] Integrate Mistral AI query engine",url:"https://github.com/dipexplorer/LegalHub",details:"Architected semantic search query resolution pipeline utilizing local Mistral-7B models." },
  { id:6,cid:1,repo:"dipexplorer / LegalHub",label:"[PR #18] Jest testing framework setup",url:"https://github.com/dipexplorer/LegalHub",details:"Created test coverage suite for REST endpoints, routes, and core MVC model layers." },
  { id:7,cid:1,repo:"dipexplorer / LegalHub",label:"[Commit d5f8a2e] MVC directory refactor",url:"https://github.com/dipexplorer/LegalHub",details:"Decoupled route controllers from model database schemas for modular project scaling." },
  { id:8,cid:1,repo:"dipexplorer / LegalHub",label:"[PR #29] Socket.io real-time chat sync",url:"https://github.com/dipexplorer/LegalHub",details:"Added WebSocket brokers to synchronize chat rooms and system state between users." },
  { id:9,cid:1,repo:"dipexplorer / LegalHub",label:"[Commit 7c9a2f1] OAuth & Passport auth setup",url:"https://github.com/dipexplorer/LegalHub",details:"Added secure Google OAuth controllers and local username/JWT session managers." },
  // ── Cluster 2: LearnSight ──
  { id:10,cid:2,repo:"dipexplorer / LearnSight",label:"[PR #14] Dynamic difficulty scoring engine",url:"https://github.com/dipexplorer/LearnSight",details:"Created adaptive learning algorithm adjusting quiz difficulty based on performance." },
  { id:11,cid:2,repo:"dipexplorer / LearnSight",label:"[Commit e9f4c32] Firebase Firestore sync logic",url:"https://github.com/dipexplorer/LearnSight",details:"Synchronized user cognitive metrics to remote document collection on state mutation." },
  { id:12,cid:2,repo:"dipexplorer / LearnSight",label:"[PR #5] Multi-cognitive radar charts",url:"https://github.com/dipexplorer/LearnSight",details:"Rendered interactive SVG radar charts displaying real-time cognitive score changes." },
  { id:13,cid:2,repo:"dipexplorer / LearnSight",label:"[Commit d3b1a2f] Responsive Tailwind optimization",url:"https://github.com/dipexplorer/LearnSight",details:"Cleaned up layout modules to optimize rendering performance on small viewports." },
  { id:14,cid:2,repo:"dipexplorer / LearnSight",label:"[PR #22] Local score offline persistence",url:"https://github.com/dipexplorer/LearnSight",details:"Enabled local offline persistence fallback during network degradation events." },
  // ── Cluster 3: Acadence ──
  { id:15,cid:3,repo:"dipexplorer / Acadence",label:"[Commit e3b9f42] Supabase schema & RLS setup",url:"https://github.com/dipexplorer/Acadence",details:"Designed database tables, foreign keys, triggers, and Row Level Security config." },
  { id:16,cid:3,repo:"dipexplorer / Acadence",label:"[PR #11] Role-based access control filters",url:"https://github.com/dipexplorer/Acadence",details:"Restricted dashboard API endpoints using claims verify check on JWT session headers." },
  { id:17,cid:3,repo:"dipexplorer / Acadence",label:"[Commit f4b9c1a] Attendance predictor simulator",url:"https://github.com/dipexplorer/Acadence",details:"Built attendance simulator displaying eligibility projections across multiple courses." },
  { id:18,cid:3,repo:"dipexplorer / Acadence",label:"[PR #3] Minimum eligibility threshold engine",url:"https://github.com/dipexplorer/Acadence",details:"Implemented logic to estimate classes needed to clear the 75% minimum threshold." },
  { id:19,cid:3,repo:"dipexplorer / Acadence",label:"[Commit c2d1e89] Mobile responsive shell layout",url:"https://github.com/dipexplorer/Acadence",details:"Designed responsive sidebar navigation layout targeting standard viewport resolutions." },
  // ── Cluster 4: VideTube ──
  { id:20,cid:4,repo:"dipexplorer / VideTube",label:"[PR #12] Redis catalog cache performance",url:"https://github.com/dipexplorer/VideTube",details:"Reduced database query load by 60% with Redis cache serialization." },
  { id:21,cid:4,repo:"dipexplorer / VideTube",label:"[Commit d2a5f8e] JWT session validation cookies",url:"https://github.com/dipexplorer/VideTube",details:"Configured secure access token validation and HTTP-only cookie handlers." },
  { id:22,cid:4,repo:"dipexplorer / VideTube",label:"[PR #8] Cloudinary API video upload flow",url:"https://github.com/dipexplorer/VideTube",details:"Integrated multipart video uploads with automated transcoding on Cloudinary CDN." },
  { id:23,cid:4,repo:"dipexplorer / VideTube",label:"[Commit e1b2c3d] Mongo aggregation comment pipelines",url:"https://github.com/dipexplorer/VideTube",details:"Built aggregation stage to query comments, video likes, and sub counts in single pipeline." },
  { id:24,cid:4,repo:"dipexplorer / VideTube",label:"[PR #20] Subscribers views channel tracking",url:"https://github.com/dipexplorer/VideTube",details:"Optimized channel subscribers index query for faster dashboard load." },
];

/* ─────────────────────── CLUSTER META ──────────────────────── */
const CLUSTER = [
  { stroke: "#2dd4bf", name: "SahiDawa"  },  // Teal
  { stroke: "#818cf8", name: "LegalHub"  },  // Indigo
  { stroke: "#22d3ee", name: "LearnSight" }, // Cyan
  { stroke: "#f472b6", name: "Acadence"  },  // Pink
  { stroke: "#fbbf24", name: "VideTube"  },  // Amber
];

/* ──────────────── CONSTELLATION SHAPES (10 pts each) ───────── */
// Points are relative to each constellation's center (cx, cy)
const CONS = [
  // 0 SahiDawa – Medical Cross (plus sign with extra nodes)
  { cx:182, cy:200, label:"SahiDawa",
    pts:[ [0,-55],[0,-27],[0,0],[0,27],[0,55], [-42,-8],[-21,-8],[21,-8],[42,-8],[0,-38] ] },
  // 1 LegalHub – Scales of Justice
  { cx:948, cy:152, label:"LegalHub",
    pts:[ [0,-56],[0,-18],[0,16], [-52,-4],[52,-4], [-30,-22],[30,-22], [-62,16],[62,16],[0,-38] ] },
  // 2 LearnSight – All-seeing Eye
  { cx:598, cy:498, label:"LearnSight",
    pts:[ [-68,0],[-46,-28],[0,-44],[46,-28],[68,0], [38,22],[0,32],[-38,22], [0,0],[0,-16] ] },
  // 3 Acadence – Academic Mortarboard Cap
  { cx:165, cy:455, label:"Acadence",
    pts:[ [0,-52], [-55,-20],[-72,4],[-40,4],[0,4],[40,4],[72,4],[55,-20], [14,44],[-14,44] ] },
  // 4 VideTube – Play Button in Frame
  { cx:960, cy:452, label:"VideTube",
    pts:[ [-56,-52],[56,-52],[56,52],[-56,52], [-22,-33],[37,0],[-22,33], [-56,0],[56,0],[0,-52] ] },
];

/* ──────────────────── PARTICLE PHYSICS ─────────────────────── */
interface Particle {
  id: number; cid: number; cIdx: number;
  x: number; y: number; vx: number; vy: number;
}

const GX = 600, GY = 310, W = 1200, H = 600;

function initParticles(): Particle[] {
  const counts = [0, 0, 0, 0, 0];
  return Array.from({ length: 50 }, (_, i) => {
    const cid  = i % 5;
    const cIdx = counts[cid]++;
    // Logarithmic spiral arms (2 arms, 180° apart)
    const arm = i % 2;
    const t   = (i / 50) * 3.2 * Math.PI + arm * Math.PI;
    const r   = 55 + (t / (3.2 * Math.PI)) * 245 + Math.sin(i * 7.31 + 1.4) * 24;
    const a   = t + Math.sin(i * 13.7) * 0.38;
    // Initial tangential velocity for natural CCW rotation
    const spd = 0.52 + Math.sin(i * 2.71) * 0.08;
    return {
      id: i, cid, cIdx,
      x:  GX + r * Math.cos(a),
      y:  GY + r * Math.sin(a),
      vx: -spd * Math.sin(a),
      vy:  spd * Math.cos(a),
    };
  });
}

/* ───────────────────────── TYPES ───────────────────────────── */
type Mode = "GALAXY" | "CONSTELLATION";
type SingPhase = "COLLAPSE" | "FLASH" | "EXPLODE";

interface FrameState {
  coords:  { id: number; cid: number; x: number; y: number }[];
  mouse:   { x: number | null; y: number | null };
  pulse:   { x: number; y: number; r: number } | null;
  sing:    { x: number; y: number; phase: SingPhase; frame: number } | null;
  warp:    { x1: number; y1: number; x2: number; y2: number; op: number; col: string }[];
}

/* ─────────────────────── COMPONENT ─────────────────────────── */
export default function NodeConnectorFallback() {
  const [mode,    setMode]    = useState<Mode>("GALAXY");
  const [hovId,   setHovId]   = useState<number | null>(null);
  const [btnHov,  setBtnHov]  = useState(false);
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
  const psRef      = useRef<Particle[]>(initParticles());
  const mouseRef   = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const modeRef    = useRef<Mode>("GALAXY");
  const hovIdRef   = useRef<number | null>(null);
  const pulseRef   = useRef<{ x: number; y: number; r: number; alive: boolean } | null>(null);
  const singRef    = useRef<{ x: number; y: number; phase: SingPhase; frame: number } | null>(null);
  const warpRef    = useRef<{ angle: number; speed: number; col: string }[]>([]);
  const warpOriRef = useRef<{ x: number; y: number } | null>(null);
  const warpFRef   = useRef(0);
  const rafRef     = useRef<number | null>(null);

  useEffect(() => { modeRef.current  = mode;  }, [mode]);
  useEffect(() => { hovIdRef.current = hovId; }, [hovId]);
  // Signal client mount so star field renders only in browser
  useEffect(() => { setMounted(true); }, []);

  /* ── Main animation loop ── */
  useEffect(() => {
    const loop = () => {
      const ps = psRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const sg = singRef.current;
      const pu = pulseRef.current;
      const cm = modeRef.current;

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
        } else if (cm === "GALAXY") {
          /* ── Orbital galaxy motion ── */
          const dx = p.x - GX, dy = p.y - GY;
          const d  = Math.sqrt(dx * dx + dy * dy) + 1;
          const tx = -dy / d, ty = dx / d; // tangential unit vector (CCW)
          p.vx += tx * 0.058;  // tangential orbital drive
          p.vy += ty * 0.058;
          p.vx -= dx * 0.00011; // subtle radial gravity toward core
          p.vy -= dy * 0.00011;
          p.vx *= 0.9835; p.vy *= 0.9835; // space drag
        } else {
          /* ── Constellation attraction ── */
          const cs = CONS[p.cid];
          const pt = cs.pts[p.cIdx % 10];
          const tx = cs.cx + pt[0], ty = cs.cy + pt[1];
          p.vx += (tx - p.x) * 0.048;
          p.vy += (ty - p.y) * 0.048;
          p.vx *= 0.855; p.vy *= 0.855;
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

        /* ── Boundary bounce ── */
        if      (p.x < 12)     { p.x = 12;     p.vx =  Math.abs(p.vx) * 0.65; }
        else if (p.x > W - 12) { p.x = W - 12; p.vx = -Math.abs(p.vx) * 0.65; }
        if      (p.y < 12)     { p.y = 12;     p.vy =  Math.abs(p.vy) * 0.65; }
        else if (p.y > H - 12) { p.y = H - 12; p.vy = -Math.abs(p.vy) * 0.65; }
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
    setBtnHov(x >= 36 && x <= 328 && y >= 536 && y <= 592);

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
    setHovId(null); setBtnHov(false);
  };

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const { x, y } = toWorld(e);
    // Button zone — toggle mode, no singularity
    if (x >= 36 && x <= 328 && y >= 536 && y <= 592) {
      setMode(m => m === "GALAXY" ? "CONSTELLATION" : "GALAXY");
      return;
    }
    // Open GitHub on node click (wider radius: 26 SVG units for easier targeting)
    const id = findClosest(x, y, 26);
    if (id !== null) {
      const p = psRef.current[id];
      // Find the contribution for this particle's cluster + within-cluster index
      const clusterContribs = CONTRIBUTIONS.filter(c => c.cid === p.cid);
      const contrib = clusterContribs[p.cIdx % Math.max(clusterContribs.length, 1)];
      if (contrib?.url) window.open(contrib.url, "_blank", "noopener,noreferrer");
    }
    // 🌌 Singularity triggered at click point
    singRef.current = { x, y, phase: "COLLAPSE", frame: 0 };
  };

  /* ── Derived display values ── */
  const { coords, mouse, pulse, sing, warp } = frame;
  const hovNode   = coords.find(c => c.id === hovId);
  const hovPart   = hovNode ? psRef.current.find(p => p.id === hovNode.id) : null;
  const hovContrib = hovPart ? CONTRIBUTIONS.filter(c => c.cid === hovPart.cid)[hovPart.cIdx % 5] || null : null;

  /* ── Connection line rendering ── */
  const renderConns = () => {
    const lines: React.ReactNode[] = [];
    const mx = mouse.x, my = mouse.y;
    const ambMax = mode === "CONSTELLATION" ? 110 : 90;

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
    const ox   = hovNode.x > 855 ? -346 : 16;
    const oy   = hovNode.y > 425 ? -116 : -14;
    const meta = CLUSTER[hovNode.cid];
    return (
      <g transform={`translate(${hovNode.x + ox},${hovNode.y + oy})`}>
        <rect x="0" y="-14" width="338" height="116" rx="7"
          fill="rgba(3,7,18,0.97)" stroke={meta.stroke} strokeWidth="1.3" filter="url(#glow)" />
        {/* Cluster accent bar at top */}
        <rect x="0" y="-14" width="338" height="7" rx="3.5" fill={meta.stroke} fillOpacity="0.9" />
        <text x="13" y="7" fill={meta.stroke} fontSize="8.5" fontFamily="monospace" letterSpacing="1.2">
          {meta.name.toUpperCase()} // CONTRIBUTION
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
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-full cursor-crosshair"
        preserveAspectRatio="xMidYMid slice"
        suppressHydrationWarning
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      >
        {/* ── Shared animations & filters ── */}
        <defs>
          <style>{`
            @keyframes flow { from { stroke-dashoffset: 24; } to { stroke-dashoffset: 0; } }
            .synapse-pulse  { stroke-dasharray: 6 14; animation: flow 1.4s linear infinite; }
            @keyframes halo-beat  { 0%,100% { opacity: .22; } 50% { opacity: .7; } }
            .halo-beat { animation: halo-beat 2.1s ease-in-out infinite; }
            @keyframes core-pulse { 0%,100% { opacity: .55; } 50% { opacity: 1; } }
            .core-pulse { animation: core-pulse 3s ease-in-out infinite; }
            @keyframes constellation-label { from { opacity: 0; } to { opacity: .62; } }
            .cons-label { animation: constellation-label .8s ease-out forwards; }
          `}</style>

          {/* Soft glow */}
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          {/* Strong glow */}
          <filter id="sglow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="8" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          {/* Extreme glow (singularity flash) */}
          <filter id="xglow" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="18" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>

          {/* Background nebula */}
          <radialGradient id="nebula" cx="50%" cy="52%" r="48%">
            <stop offset="0%"   stopColor="rgba(34,211,238,0.055)" />
            <stop offset="50%"  stopColor="rgba(99,102,241,0.022)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Per-cluster radial gradients for constellation zones */}
          {CLUSTER.map((c, i) => (
            <radialGradient key={i} id={`cg${i}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor={c.stroke} stopOpacity="0.2" />
              <stop offset="100%" stopColor={c.stroke} stopOpacity="0"   />
            </radialGradient>
          ))}
        </defs>

        {/* ── Background nebula glow ── */}
        <ellipse cx={GX} cy={GY} rx="450" ry="260" fill="url(#nebula)" />

        {/* ── Deterministic star field — client-only (avoids SSR float precision mismatch) ── */}
        {mounted && Array.from({ length: 145 }, (_, i) => {
          const phi = 137.508 * (i + 1) * (Math.PI / 180);
          const r2  = Math.sqrt((i + 1) / 145);
          const sx  = GX + r2 * 585 * Math.cos(phi + i * 0.41);
          const sy  = GY + r2 * 285 * Math.sin(phi + i * 0.63);
          if (sx < 4 || sx > W - 4 || sy < 4 || sy > H - 4) return null;
          return (
            <circle key={`st${i}`} cx={sx} cy={sy}
              r={0.22 + (i % 5) * 0.18}
              fill="white" fillOpacity={0.07 + (i % 7) * 0.055} />
          );
        })}

        {/* ── Galactic core (GALAXY mode only) ── */}
        {mode === "GALAXY" && (
          <>
            <circle cx={GX} cy={GY} r="40"  fill="rgba(34,211,238,0.04)" filter="url(#xglow)" className="core-pulse" />
            <circle cx={GX} cy={GY} r="11"  fill="rgba(34,211,238,0.15)" filter="url(#glow)" />
            <circle cx={GX} cy={GY} r="3.8" fill="rgba(255,255,255,0.6)"  filter="url(#glow)" />
          </>
        )}

        {/* ── Constellation zone glows (CONSTELLATION mode) ── */}
        {mode === "CONSTELLATION" && CONS.map((c, i) => (
          <g key={`cz${i}`}>
            <ellipse cx={c.cx} cy={c.cy} rx="98" ry="82" fill={`url(#cg${i})`} />
            <text x={c.cx} y={c.cy - 88}
              fill={CLUSTER[i].stroke} fontSize="8" fontFamily="monospace"
              textAnchor="middle" letterSpacing="2.8" className="cons-label">
              {CLUSTER[i].name.toUpperCase()}
            </text>
          </g>
        ))}

        {/* ── Connection lines ── */}
        {renderConns()}

        {/* ── EM pulse ring ── */}
        {pulse && (
          <circle cx={pulse.x} cy={pulse.y} r={pulse.r} fill="none"
            stroke="#22d3ee" strokeWidth="1.6"
            strokeOpacity={Math.max(0, 0.6 - pulse.r / 300)} filter="url(#glow)" />
        )}

        {/* ── Hyperspace warp lines ── */}
        {warp.map((l, i) => (
          <line key={`wl${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke={l.col} strokeWidth="1.9" strokeOpacity={l.op} filter="url(#glow)" />
        ))}

        {/* ── Singularity visual ── */}
        {renderSingularity()}

        {/* ── Particles ── */}
        {coords.map(c => {
          const mx   = mouse.x, my = mouse.y;
          const isH  = hovId === c.id;
          const near = mx !== null && my !== null &&
                       Math.sqrt((mx - c.x) ** 2 + (my - c.y) ** 2) < 195;
          const meta = CLUSTER[c.cid];
          const r    = isH ? 6.0 : near ? 4.3 : 2.9;
          return (
            <g key={c.id}>
              {isH && (
                <>
                  <circle cx={c.x} cy={c.y} r="18" fill="none"
                    stroke={meta.stroke} strokeOpacity="0.18" strokeWidth="1" className="halo-beat" />
                  <circle cx={c.x} cy={c.y} r="10" fill="none"
                    stroke={meta.stroke} strokeOpacity="0.52" strokeWidth="1" filter="url(#glow)" />
                </>
              )}
              <circle cx={c.x} cy={c.y} r={r}
                fill={meta.stroke}
                fillOpacity={isH ? 1 : near ? 0.92 : 0.72}
                filter={isH ? "url(#sglow)" : near ? "url(#glow)" : undefined} />
            </g>
          );
        })}

        {/* ── Contribution tooltip ── */}
        {renderTooltip()}

        {/* ── Mode toggle button ── */}
        <g style={{ cursor: "pointer" }}>
          <rect x="36" y="546" width="294" height="28" rx="5"
            fill={btnHov ? "rgba(34,211,238,0.1)" : "rgba(34,211,238,0.03)"}
            stroke={btnHov ? "rgba(34,211,238,0.42)" : "rgba(34,211,238,0.15)"}
            strokeWidth="0.9" />
          <text x="50" y="565"
            fill={btnHov ? "#22d3ee" : "rgba(34,211,238,0.52)"}
            fontSize="9.5" fontWeight="700" fontFamily="monospace" letterSpacing="0.8"
            filter={btnHov ? "url(#glow)" : undefined}>
            {mode === "GALAXY"
              ? "[ VIEW_PROJECT_CONSTELLATIONS ▶ ]"
              : "[ ◀ RETURN_TO_GALAXY_MODE ]"}
          </text>
        </g>

        {/* ── Status label ── */}
        <text x={W - 14} y="28"
          fill="rgba(34,211,238,0.28)" fontSize="7.5" fontFamily="monospace"
          textAnchor="end" letterSpacing="1.5">
          {mode === "GALAXY" ? "GALACTIC_CORTEX // ORBITAL" : "GALACTIC_CORTEX // CONSTELLATION"}
        </text>
        <text x={W - 14} y="42"
          fill="rgba(34,211,238,0.16)" fontSize="6.5" fontFamily="monospace" textAnchor="end">
          NODES: {coords.length} // CLUSTERS: 5 // STATUS: LIVE
        </text>
      </svg>
    </div>
  );
}
