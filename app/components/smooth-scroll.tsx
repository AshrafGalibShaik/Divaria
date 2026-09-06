"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

/**
 * Site-wide eased scrolling. Lenis drives its own rAF loop by default.
 * It wraps the tree so components below can reach the instance with useLenis().
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>;
}
