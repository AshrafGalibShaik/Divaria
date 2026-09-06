import Link from "next/link";
import { notFound } from "next/navigation";
import { Plate } from "../../components/plate";
import { Reel } from "../../components/reel";
import { collections } from "../../lib/content";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = collections.find((x) => x.slug === slug);
  return c ? { title: c.name, description: c.blurb } : {};
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) notFound();

  const others = collections.filter((c) => c.slug !== slug);

  return (
    <>
      {/* Typographic header, matching the atelier and appointment pages. Every
          photograph in the archive is 4:5, so a full-width band could only ever
          crop one to a headless letterbox; the grid below shows them whole. */}
      <section className="mx-auto max-w-[1600px] px-6 sm:px-8 pt-28 sm:pt-36 lg:px-12 lg:pt-44">
        <p className="label text-muted">{collection.eyebrow}</p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-light leading-[1.05] sm:text-6xl lg:text-7xl">
          {collection.name}
        </h1>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 sm:px-8 pt-12 lg:px-12 lg:pt-16">
        <div className="reveal-group grid gap-10 border-t border-line pt-10 lg:grid-cols-12">
          <p className="max-w-2xl leading-relaxed text-muted lg:col-span-7 lg:text-lg">
            {collection.intro}
          </p>
          <dl className="lg:col-span-4 lg:col-start-9">
            <dt className="label text-muted">Lead time, start to delivery</dt>
            <dd className="mt-2 font-display text-3xl">{collection.lead}</dd>
            <dt className="label mt-8 text-muted">Availability</dt>
            <dd className="mt-2 font-display text-3xl">Made to order</dd>
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 sm:px-8 py-14 sm:py-20 lg:px-12 lg:py-28">
        <div className="reveal-group grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-14 lg:grid-cols-3">
          {collection.pieces.map((p, i) => (
            <figure key={p.name}>
              <Plate
                src={p.src}
                alt={p.alt}
                priority={i === 0}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className={`lift ${i % 3 === 1 ? "aspect-square" : "aspect-3/4"}`}
              />
              <figcaption className="mt-4">
                <h2 className="font-display text-xl sm:text-2xl">{p.name}</h2>
                <p className="mt-1 text-sm text-muted">{p.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="label mt-12 text-muted">
          Pieces shown are past commissions. Everything is remade to your
          measurements.
        </p>
      </section>

      {collection.feature && (
        <section className="border-y border-line">
          <div className="reveal-group mx-auto grid max-w-[1600px] items-center gap-14 px-6 sm:px-8 py-14 sm:py-20 lg:grid-cols-[38fr_62fr] lg:px-12">
            {collection.feature.reel ? (
              <div className="lift plate aspect-4/5 overflow-hidden">
                <Reel
                  name={collection.feature.reel}
                  label={collection.feature.title}
                />
              </div>
            ) : (
              <Plate
                src={collection.feature.src}
                alt={collection.feature.alt}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="lift aspect-4/5"
              />
            )}
            <div>
              <p className="label text-wine">
                {collection.feature.reel ? "In the workroom" : "New launch"}
              </p>
              <h2 className="mt-5 font-display text-4xl font-light lg:text-5xl">
                {collection.feature.title}
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-muted lg:text-lg">
                {collection.feature.body}
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="bg-ink text-ivory">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-8 px-6 sm:px-8 py-14 sm:py-20 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <h2 className="max-w-2xl font-display text-4xl font-light leading-tight sm:text-5xl">
            Start a {collection.name.toLowerCase()} commission.
          </h2>
          <Link
            href="/appointments"
            className="label border border-ivory px-10 py-4 transition-colors hover:bg-ivory hover:text-ink"
          >
            Book an appointment
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 sm:px-8 py-14 sm:py-20 lg:px-12">
        <h2 className="label text-muted">Also from the house</h2>
        <div className="reveal-group mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-3">
          {others.map((c) => (
            <Link key={c.slug} href={`/collections/${c.slug}`} className="group block">
              <div className="lift overflow-hidden">
                <Plate
                  src={c.cover}
                  alt={c.name}
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="aspect-3/4 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="mt-4 font-display text-xl sm:text-2xl">{c.name}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
