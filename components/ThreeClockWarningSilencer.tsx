"use client";

declare global {
  // Avoid patching multiple times during HMR/navigation.
  var __silenceThreeClockWarningInstalled: boolean | undefined;
}

const THREE_CLOCK_DEPRECATION_SNIPPET =
  "Clock: This module has been deprecated. Please use THREE.Timer instead.";

function installSilencer() {
  if (typeof window === "undefined") return;
  if (globalThis.__silenceThreeClockWarningInstalled) return;
  globalThis.__silenceThreeClockWarningInstalled = true;

  const originalWarn = console.warn.bind(console);
  console.warn = (...args: unknown[]) => {
    const first = args[0];
    if (typeof first === "string" && first.includes(THREE_CLOCK_DEPRECATION_SNIPPET)) {
      return;
    }
    originalWarn(...args);
  };
}

installSilencer();

export default function ThreeClockWarningSilencer() {
  return null;
}
