import Link from "next/link";
import { Plate } from "../components/plate";
import { Reel } from "../components/reel";
import { art, atelierArt, collections, film, founder, journey, site, story } from "../lib/content";

export const metadata = {
  title: "The Atelier",
  description:
    "Divaria by Dimple — fifteen years, a single karigar to a full workroom in Guntur, and over 5,000 clients dressed across South India and beyond.",
};

export default function AtelierPage() {
  return (
    <>
      <section className="mx-auto max-w-[1600px] px-6 pt-36 lg:px-12 lg:pt-44">
        <p className="label text-muted">{site.signature}</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-light leading-[1.05] sm:text-6xl lg:text-7xl">
          One designer. One workroom. Every piece fitted by hand.
        </h1>
      </section>

      {/* Brand story, in the label's own words */}
      <section className="reveal-group mx-auto grid max-w-[1600px] gap-14 px-6 py-20 lg:grid-cols-2 lg:px-12 lg:py-28">
        {/* Talking head, so it keeps its sound and waits to be played. */}
        <figure>
          <video
            src={founder.clip}
            poster={founder.poster}
            controls
            playsInline
            preload="metadata"
            className="plate aspect-4/5 w-full bg-ink object-cover"
          />
          <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
            <span className="font-display text-2xl">{founder.name}</span>
            <span className="label text-muted">{founder.role} · captioned</span>
          </figcaption>
        </figure>

        <div className="lg:pt-6">
          <blockquote className="mb-10 border-l border-wine pl-6 font-display text-3xl font-light leading-snug lg:text-4xl">
            “{founder.quote}”
          </blockquote>
          <h2 className="label text-wine">Brand story</h2>
          <div className="mt-6 space-y-6 leading-relaxed text-muted lg:text-lg">
            {story.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p>
              Before Divaria, Dimple worked with designers including Manish
              Malhotra. She still takes every consultation herself — the first
              call, the sketches, the fittings, the final press.
            </p>
            <p>
              In the film she puts it plainly: {founder.gist} It ends where the
              whole business does — “{founder.closing.toLowerCase()}”
            </p>
          </div>
          <dl className="mt-12 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
            {story.stats.map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-3xl">{k}</dt>
                <dd className="label mt-2 text-muted">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Craft */}
      <section className="mx-auto max-w-[1600px] px-6 pb-20 lg:px-12 lg:pb-28">
        <div className="reveal-group grid gap-6 sm:grid-cols-3">
          <Plate
            src={art.heirloom}
            alt={art.heirloomAlt}
            sizes="33vw"
            className="aspect-3/4"
          />
          <Plate
            src={atelierArt.craft}
            alt={atelierArt.craftAlt}
            sizes="33vw"
            className="aspect-3/4"
          />
          <Plate
            src={art.motif}
            alt={art.motifAlt}
            sizes="33vw"
            className="aspect-3/4"
          />
        </div>
        <p className="mt-8 max-w-2xl leading-relaxed text-muted">
          The workroom sits in {site.city}. Zardosi, aari, mirror and thread work
          are done on frames, by hand, in the building — patterns traced onto net
          the way they were when there was one karigar and one table.
        </p>
      </section>

      {/* Reels */}
      <section className="mx-auto max-w-[1600px] px-6 pb-20 lg:px-12 lg:pb-28">
        <div className="reveal-group grid gap-6 sm:grid-cols-2">
          {film.atelier.map((clip) => (
            <figure key={clip.name}>
              <div className="plate aspect-4/5 overflow-hidden">
                <Reel name={clip.name} label={clip.label} />
              </div>
              <figcaption className="label mt-4 text-muted">{clip.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-[1600px] px-6 py-20 lg:px-12 lg:py-28">
          <h2 className="font-display text-4xl font-light lg:text-5xl">
            How a commission runs
          </h2>
          <ol className="reveal-group mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {journey.map((s) => (
              <li key={s.step} className="border-t border-line pt-5">
                <span className="label text-wine">{s.step}</span>
                <h3 className="mt-3 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Bespoke */}
      <section className="relative">
        <Plate
          src={art.madeForYou}
          alt={art.madeForYouAlt}
          sizes="100vw"
          position="50% 30%"
          className="absolute! inset-0"
        />
        <div className="reveal relative mx-auto max-w-[1600px] px-6 py-28 text-center lg:px-12 lg:py-36">
          <p className="mx-auto max-w-2xl font-display text-3xl font-light leading-snug text-ink/85 sm:text-4xl">
            {story.bespoke}
          </p>
          <Link
            href={`/collections/${collections[3].slug}`}
            className="label mt-10 inline-block border-b border-ink pb-1 transition-opacity hover:opacity-60"
          >
            Customised designer wear
          </Link>
        </div>
      </section>

      {/* Overseas */}
      <section className="mx-auto max-w-[1600px] px-6 py-20 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <h2 className="label text-muted lg:col-span-3">For clients abroad</h2>
          <div className="lg:col-span-9">
            <p className="max-w-3xl font-display text-3xl font-light leading-snug lg:text-4xl">
              Half a wedding party is rarely in the same country as the atelier.
              The process is built for that.
            </p>
            <ul className="reveal-group mt-10 grid gap-8 sm:grid-cols-2">
              {[
                [
                  "Time-zone scheduling",
                  "Consultations are booked to your local hours, not ours.",
                ],
                [
                  "Guided self-measurement",
                  "A video session with a tape and a mirror; we keep the chart on file.",
                ],
                [
                  "Fit garment first",
                  "A trial piece is shipped ahead of the couture where the timeline allows.",
                ],
                [
                  "Insured worldwide shipping",
                  "Tracked door to door, with customs paperwork prepared.",
                ],
              ].map(([t, b]) => (
                <li key={t} className="border-t border-line pt-5">
                  <h3 className="font-display text-2xl">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{b}</p>
                </li>
              ))}
            </ul>
            <Link
              href="/appointments"
              className="label mt-12 inline-block border border-ink px-10 py-4 transition-colors hover:bg-ink hover:text-ivory"
            >
              Book a video consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
