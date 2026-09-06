"use client";

import { useEffect, useRef } from "react";

/**
 * A silent looping clip. Plays only while on screen so a page of reels does not
 * decode nine videos at once; the poster frame carries it until then.
 */
export function Reel({
  name,
  label,
  className = "",
  eager = false,
}: {
  /** basename in /public/film, without extension */
  name: string;
  label: string;
  className?: string;
  /** Above the fold: load and start straight away instead of waiting for view. */
  eager?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={`/film/${name}.mp4`}
      poster={`/film/${name}.jpg`}
      aria-label={label}
      muted
      loop
      playsInline
      autoPlay={eager}
      preload={eager ? "auto" : "none"}
      className={`plate h-full w-full object-cover ${className}`}
    />
  );
}
