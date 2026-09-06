import Link from "next/link";
import { Plate } from "./components/plate";
import { Reel } from "./components/reel";
import { art, atelierArt, collections, film, journey, press, site, story } from "./lib/content";

export default function Home() {
  return (
    <>
      {/* Hero. kaadhal-hero.mp4 is the Kaadhal reel cropped past its own
          titles, so type can sit over it at any viewport shape. */}
      <section className="relative flex h-[100svh] min-h-[560px] items-end overflow-hidden bg-ink">
        <Reel
          name={film.hero.name}
          label={film.hero.label}
          eager
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/60" />

        <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-16 text-paper lg:px-12 lg:pb-20">
          <p className="label rise text-paper/70">
            {site.signature} · {site.city}
          </p>
          <h1 className="rise mt-6 max-w-4xl font-display text-5xl font-light leading-[1.03] sm:text-6xl lg:text-7xl xl:text-8xl">
            Cut for the bride
            <br className="hidden sm:inline" /> who ordered it.
          </h1>
          <div className="rise mt-9 flex flex-wrap items-center gap-x-10 gap-y-4">
            <Link
              href="/appointments"
              className="label border border-paper/70 px-8 py-4 transition-colors hover:bg-paper hover:text-ink"
            >
              Book a consultation
            </Link>
            <Link
              href="/collections/bridal"
              className="label border-b border-paper/50 pb-1 transition-opacity hover:opacity-70"
            >
              View bridal couture
            </Link>
          </div>
          <p className="rise mt-12 border-t border-paper/20 pt-5 text-sm text-paper/60">
            <span className="label">{film.teaser.season}</span> · {film.teaser.title},{" "}
            on the frame now
          </p>
        </div>
      </section>

      {/* Statement */}
      <section className="mx-auto max-w-[1600px] px-6 py-24 lg:px-12 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-12">
          <p className="label reveal text-muted lg:col-span-3">The house</p>
          <div className="reveal lg:col-span-9">
            <p className="max-w-4xl font-display text-3xl font-light leading-[1.3] sm:text-4xl lg:text-[2.75rem]">
              {story.manifesto}
            </p>
            <dl className="mt-14 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
              {story.stats.map(([k, v]) => (
                <div key={v}>
                  <dt className="font-display text-3xl lg:text-4xl">{k}</dt>
                  <dd className="label mt-2 text-muted">{v}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/atelier"
              className="label mt-12 inline-block border-b border-ink pb-1 transition-opacity hover:opacity-60"
            >
              Inside the atelier
            </Link>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="flex items-baseline justify-between py-10">
            <h2 className="font-display text-4xl font-light lg:text-5xl">Collections</h2>
            <p className="label hidden text-muted sm:block">Made to order</p>
          </div>
          <div className="reveal-group grid gap-x-6 gap-y-14 pb-24 sm:grid-cols-2 lg:grid-cols-4 lg:pb-32">
            {collections.map((c) => (
              <Link key={c.slug} href={`/collections/${c.slug}`} className="group block">
                <div className="overflow-hidden">
                  <Plate
                    src={c.cover}
                    alt={c.name}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[3/4] transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <p className="label mt-5 text-muted">{c.eyebrow}</p>
                <h3 className="mt-2 font-display text-2xl">{c.name}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{c.blurb}</p>
                <span className="label mt-4 inline-block border-b border-ink/30 pb-1 transition-colors group-hover:border-ink">
                  Explore
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage */}
      <section className="relative border-t border-line">
        <Plate
          src={art.texture}
          alt=""
          sizes="100vw"
          position="50% 40%"
          className="absolute! inset-0"
        />
        <div className="reveal relative mx-auto max-w-[1600px] px-6 py-28 text-center lg:px-12 lg:py-36">
          <p className="mx-auto max-w-3xl font-display text-3xl font-light leading-snug text-ink/85 sm:text-4xl lg:text-5xl">
            {story.tagline}
          </p>
          <p className="label mt-8 text-muted">Label Divaria</p>
        </div>
      </section>

      {/* Worldwide */}
      <section className="bg-ink text-ivory">
        <div className="reveal-group mx-auto grid max-w-[1600px] items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-12 lg:py-32">
          <div>
            <p className="label text-ivory/50">Guntur to anywhere</p>
            <h2 className="mt-6 font-display text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
              A bride in Dallas is fitted the same way as a bride in Guntur.
            </h2>
            <p className="mt-8 max-w-lg leading-relaxed text-ivory/70">
              Consultations run on video, booked to your hours rather than ours.
              Measurements are taken in a guided session and kept on file, and a
              fit garment is shipped ahead of the final piece, so the last
              alteration is done before the couture leaves India.
            </p>
            <dl className="mt-12 grid grid-cols-3 gap-8 border-t border-ivory/15 pt-8">
              {[
                ["16-20 wks", "Bridal lead time"],
                ["Worldwide", "Insured shipping"],
                ["1:1", "With Dimple, always"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="font-display text-2xl lg:text-3xl">{k}</dt>
                  <dd className="label mt-2 text-ivory/50">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Plate
            src={collections[0].pieces[3].src}
            alt={collections[0].pieces[3].alt}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="aspect-4/5 w-full"
          />
        </div>
      </section>

      {/* Press */}
      <section className="mx-auto max-w-[1600px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="reveal-group grid items-center gap-14 lg:grid-cols-12">
          <Plate
            src={press.cover}
            alt={press.alt}
            sizes="(min-width: 1024px) 30vw, 100vw"
            position="50% 0%"
            className="aspect-4/5 lg:col-span-4"
          />
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="label text-muted">In print</p>
            <h2 className="mt-6 max-w-xl font-display text-4xl font-light leading-tight lg:text-5xl">
              {press.title}
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-muted">
              {press.note}. That lehenga was drafted, embroidered and fitted in
              the Guntur workroom for one wearer, and it was never made again.
            </p>
            <Link
              href="/collections/bridal"
              className="label mt-10 inline-block border-b border-ink pb-1 transition-opacity hover:opacity-60"
            >
              See the bridal work
            </Link>
          </div>
        </div>
      </section>

      {/* The making */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-12 lg:py-32">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-display text-4xl font-light lg:text-5xl">
              The making
            </h2>
            <p className="label text-muted">Filmed in the workroom</p>
          </div>
          <div className="reveal-group mt-12 grid gap-6 sm:grid-cols-3">
            {film.making.map((clip) => (
              <figure key={clip.name}>
                <div className="plate aspect-9/16 overflow-hidden">
                  <Reel name={clip.name} label={clip.label} />
                </div>
                <figcaption className="label mt-4 text-muted">{clip.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-12 lg:py-32">
          <h2 className="font-display text-4xl font-light lg:text-5xl">
            From first call to final fitting
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

      {/* CTA */}
      <section className="relative">
        <Plate
          src={atelierArt.craft}
          alt={atelierArt.craftAlt}
          dark
          sizes="100vw"
          position="50% 35%"
          className="absolute! inset-0"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="reveal relative mx-auto flex max-w-[1600px] flex-col items-start gap-8 px-6 py-28 text-paper lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <h2 className="max-w-2xl font-display text-4xl font-light leading-tight sm:text-5xl">
            Tell us the date and we will tell you what can be made in the
            time you have.
          </h2>
          <Link
            href="/appointments"
            className="label border border-paper px-10 py-4 transition-colors hover:bg-paper hover:text-ink"
          >
            Book an appointment
          </Link>
        </div>
      </section>
    </>
  );
}
