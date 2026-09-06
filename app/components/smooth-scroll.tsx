"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

/** Site-wide eased scrolling. Lenis drives its own rAF loop by default. */
export function SmoothScroll() {
  return <ReactLenis root />;
}
