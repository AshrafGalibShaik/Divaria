"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "./wordmark";
import { collections } from "../lib/content";

const links = [
  ...collections.map((c) => ({ href: `/collections/${c.slug}`, label: c.name })),
  { href: "/atelier", label: "The Atelier" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hasHero = pathname === "/" || pathname.startsWith("/collections/");
  const overHero = hasHero && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        overHero
          ? "bg-transparent text-paper"
          : "bg-ivory/95 text-ink backdrop-blur-sm border-b border-line"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 lg:px-12">
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="label flex items-center gap-3 sm:w-32 lg:w-64"
        >
          <span className="flex h-3 w-4 flex-col justify-between">
            <span className="block h-px w-full bg-current" />
            <span className="block h-px w-full bg-current" />
            <span className="block h-px w-full bg-current" />
          </span>
          <span className="hidden sm:inline">{open ? "Close" : "Menu"}</span>
        </button>

        <Link href="/" aria-label="Label Divaria — home" onClick={() => setOpen(false)}>
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

      {open && (
        <nav className="menu-in border-t border-line bg-ivory text-ink">
          <ul className="mx-auto grid max-w-[1600px] gap-px px-6 py-10 sm:grid-cols-2 lg:grid-cols-5 lg:px-12">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-3xl transition-colors hover:text-wine"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
