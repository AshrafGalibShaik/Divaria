import Link from "next/link";
import { Wordmark } from "./wordmark";
import { collections, site, story } from "../lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto grid max-w-[1600px] gap-14 px-6 py-20 lg:grid-cols-4 lg:px-12">
        <div className="lg:col-span-2">
          <Wordmark className="w-48" invert />
          <p className="mt-6 max-w-sm font-display text-2xl leading-snug text-ivory/80">
            {story.tagline}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/55">
            {site.signature}. Made to order in {site.city}, shipped worldwide.
          </p>
        </div>

        <nav>
          <h2 className="label text-ivory/50">Collections</h2>
          <ul className="mt-5 space-y-3">
            {collections.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/collections/${c.slug}`}
                  className="text-sm transition-opacity hover:opacity-60"
                >
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/atelier" className="text-sm transition-opacity hover:opacity-60">
                The Atelier
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="label text-ivory/50">Atelier</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>{site.city}</li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:opacity-60">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:opacity-60">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-5 pt-2">
              <a href={site.instagram} target="_blank" rel="noreferrer" className="label hover:opacity-60">
                Instagram
              </a>
              <a href={site.facebook} target="_blank" rel="noreferrer" className="label hover:opacity-60">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/15">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-2 px-6 py-6 text-[11px] text-ivory/50 sm:flex-row sm:justify-between lg:px-12">
          <p>© {new Date().getFullYear()} {site.name}. All pieces made to order.</p>
          <p>Consultations by appointment · Worldwide shipping</p>
        </div>
      </div>
    </footer>
  );
}
