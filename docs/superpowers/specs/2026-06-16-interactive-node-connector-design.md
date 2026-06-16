# Spec - Minimalist Interactive Cyber-Constellation Fallback

- **Date**: 2026-06-16
- **Status**: Approved by User
- **Author**: Antigravity

## Objective

Rebuild the fallback canvas to render a clean, minimalist **Interactive Cyber-Constellation** (floating particle net). It completely removes busy layouts, text logs, dashboards, database grids, or sliders, replacing them with a premium, physics-inspired interactive vector art canvas that responds to cursor coordinates and mouse clicks.

## Layout & Components

### 1. Minimalist SVG Canvas (`components/NodeConnectorFallback.tsx`)

- Container: Clean, transparent box fitting the Hero right-side frame (`w-full h-full min-h-[400px] flex items-center justify-center select-none overflow-hidden bg-slate-950/20 rounded-2xl border border-cyan-800/10`).
- ViewBox: `0 0 800 500` representing the vector space.
- Subdued Blueprint Accents: Subdued coordinates grid lines and corner ticks (`strokeOpacity="0.05"`).

### 2. Floating Particles (Nodes)

- A set of 30-40 floating vector dots (`r=3`, `#22d3ee`).
- Physics simulation loop:
  - Particles float and drift at independent, slow speeds.
  - Bounce off boundary limits to keep them contained.

### 3. Cursor Connectivity (Synaptic Links)

- Cursor tracking listens to mouse coordinates inside the viewport.
- Dynamic Links:
  - Thin, low-opacity gray lines (`strokeWidth="1"`, `opacity="0.15"`) connect particles together if they drift close to one another, forming an organic floating mesh.
  - When the cursor enters the viewport, it acts as an attractor node. Bright glowing cyan lines stretch from the cursor to all particles within a 150px proximity.
  - Particles close to the cursor are gently attracted, creating a physical pull effect.

### 4. Ripple Pulse Wave

- Clicking inside the viewport spawns an expanding concentric ring (`stroke="#22d3ee"`).
- The shockwave pushes nearby particles outward before they settle back into their float paths.

---

## Technical Details

- Built entirely with React states (`useState`, `useEffect`, `useRef`) and native SVG lines/circles.
- Animate coordinates using a lightweight `requestAnimationFrame` render loop running at 60fps.
- Zero external charting or text dashboard dependencies.
