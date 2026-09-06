"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { Wordmark } from "./wordmark";
import { collections, site } from "../lib/content";

const links = [
  ...collections.map((c) => ({ href: `/collections/${c.slug}`, label: c.name })),
  { href: "/atelier", label: "The Atelier" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Hold the page still while the menu is down.
  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
  }, [open, lenis]);

  // Only the home page puts the header over a dark full-bleed hero.
  const overHero = pathname === "/" && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        overHero
          ? "bg-transparent text-paper"
          : "border-b border-line bg-ivory/95 text-ink backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 lg:px-12">
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((v) => !v)}
          className="label flex items-center gap-3 sm:w-32 lg:w-64"
        >
          {/* Three rules that fold into a cross. */}
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 block h-px w-full bg-current transition-transform duration-400 ease-out ${
                open ? "top-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute top-1/2 left-0 block h-px w-full bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-full bg-current transition-transform duration-400 ease-out ${
                open ? "top-1/2 -rotate-45" : "top-full"
              }`}
            />
          </span>
          <span className="hidden sm:inline">{open ? "Close" : "Menu"}</span>
        </button>

        <Link
          href="/"
          aria-label="Label Divaria, back to the top"
          onClick={(e) => {
            setOpen(false);
            // Already home: scroll up instead of re-navigating to the same route.
            if (pathname === "/") {
              e.preventDefault();
              lenis?.scrollTo(0);
            }
          }}
        >
          <Wordmark className="w-36 sm:w-48" invert={overHero} />
        </Link>

        <div className="flex justify-end sm:w-32 lg:w-64">
          <Link
            href="/appointments"
            onClick={() => setOpen(false)}
            className="label border-b border-current pb-1 transition-opacity hover:opacity-60"
          >
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Book an Appointment</span>
          </Link>
        </div>
      </div>

      {/* Stays mounted and animates its own height, so it closes as smoothly as
          it opens. grid-template-rows 0fr to 1fr is the one transition that can
          ease to a content-derived height. */}
      <div
        id="site-menu"
        inert={!open}
        className={`grid overflow-hidden bg-ivory text-ink transition-[grid-template-rows,opacity] duration-600 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <nav className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-line">
            <div className="mx-auto max-w-[1600px] px-6 py-10 lg:px-12 lg:py-14">
              <p className="label text-muted">The house</p>

              <ul className="mt-8">
                {links.map((l, i) => (
                  <li key={l.href} className="border-t border-line first:border-t-0">
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      style={{ transitionDelay: open ? `${140 + i * 55}ms` : "0ms" }}
                      className={`group flex items-baseline gap-6 py-5 transition-[opacity,transform] duration-500 ease-out lg:py-6 ${
                        open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                      }`}
                    >
                      <span className="label w-6 shrink-0 text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-3xl font-light transition-transform duration-500 ease-out group-hover:translate-x-2 sm:text-4xl lg:text-5xl">
                        {l.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div
                style={{ transitionDelay: open ? "460ms" : "0ms" }}
                className={`mt-10 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-line pt-7 text-sm transition-opacity duration-500 ${
                  open ? "opacity-100" : "opacity-0"
                }`}
              >
                <Link
                  href="/appointments"
                  onClick={() => setOpen(false)}
                  className="label border border-ink px-8 py-3.5 transition-colors hover:bg-ink hover:text-ivory"
                >
                  Book an appointment
                </Link>
                <span className="text-muted">{site.city}</span>
                <a href={`mailto:${site.email}`} className="text-muted hover:text-ink">
                  {site.email}
                </a>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="label text-muted hover:text-ink"
                >
                  Instagram
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
