import { EnquiryForm } from "./enquiry-form";
import { AtelierClock } from "../components/atelier-clock";
import { Plate } from "../components/plate";
import { Reel } from "../components/reel";
import { art, collections, film, site } from "../lib/content";

export const metadata = {
  title: "Book an Appointment",
  description:
    "Consultations with Dimple, at the atelier in Guntur or on video, scheduled to your time zone. Bridal, pret, menswear and bespoke commissions.",
};

const next = [
  [
    "01",
    "Dimple reads it herself",
    "No inbox and no assistant in between. Usually a reply within a working day.",
  ],
  [
    "02",
    "You agree a time",
    "A video call booked to your hours, or a visit to the workroom in Guntur.",
  ],
  [
    "03",
    "Sketches follow",
    "Drawings, fabric and hand-work samples, before anything is cut.",
  ],
];

export default function AppointmentsPage() {
  return (
    <>
      <section className="mx-auto max-w-[1600px] px-6 pt-36 lg:px-12 lg:pt-44">
        <p className="label text-muted">By appointment</p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-light leading-[1.05] sm:text-6xl lg:text-7xl">
          Every consultation is with Dimple.
        </h1>
        <p className="mt-8 max-w-2xl leading-relaxed text-muted lg:text-lg">
          Tell us the occasion and the date. You will hear back with what can be
          made in the time available, a rough price range, and a slot that works
          where you are.
        </p>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-16 px-6 py-16 lg:grid-cols-12 lg:px-12 lg:py-24">
        <div className="lg:col-span-7">
          <EnquiryForm />
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <div className="lg:sticky lg:top-28">
            <figure>
              <div className="plate aspect-4/5 overflow-hidden">
                <Reel name={film.showroom.name} label={film.showroom.label} />
              </div>
              <figcaption className="label mt-4 text-muted">
                {film.showroom.caption}
              </figcaption>
            </figure>

            <div className="mt-10 border-t border-line pt-6">
              <h2 className="label text-muted">The atelier</h2>
              <p className="mt-4 font-display text-2xl leading-snug">{site.city}</p>
              <p className="mt-2 text-sm">
                <AtelierClock />
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="transition-colors hover:text-wine"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-wine"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-wine"
                  >
                    @label_divaria
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-10 border-t border-line pt-6">
              <h2 className="label text-muted">After you send</h2>
              <ol className="mt-5 space-y-5">
                {next.map(([n, title, body]) => (
                  <li key={n} className="flex gap-4">
                    <span className="label pt-1 text-wine">{n}</span>
                    <span>
                      <span className="block font-display text-xl">{title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted">
                        {body}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </aside>
      </section>

      {/* Lead times stated openly, rather than left for someone to ask about */}
      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-[1600px] px-6 py-16 lg:px-12 lg:py-20">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-display text-4xl font-light lg:text-5xl">
              Lead times
            </h2>
            <p className="label text-muted">Start to delivery</p>
          </div>
          <dl className="reveal-group mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((c) => (
              <div key={c.slug} className="border-t border-line pt-5">
                <dt className="font-display text-2xl">{c.name}</dt>
                <dd className="mt-2 font-display text-3xl text-wine">{c.lead}</dd>
                <dd className="mt-3 text-sm leading-relaxed text-muted">
                  {c.blurb}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
            Shorter timelines are sometimes possible, so ask rather than assume.
            Nothing is stocked, so each of these starts the day the drawing is
            signed off.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] items-center gap-14 px-6 py-16 lg:grid-cols-12 lg:px-12 lg:py-24">
        <Plate
          src={art.story}
          alt={art.storyAlt}
          sizes="(min-width: 1024px) 30vw, 100vw"
          className="aspect-4/5 lg:col-span-4"
        />
        <div className="lg:col-span-7 lg:col-start-6">
          <h2 className="label text-muted">For clients abroad</h2>
          <p className="mt-6 max-w-xl font-display text-3xl font-light leading-snug lg:text-4xl">
            Measurements are taken on a guided video call and kept on file.
          </p>
          <p className="mt-6 max-w-lg leading-relaxed text-muted">
            You need a tape, a mirror, and someone to hold the other end.
            Shipping is insured and tracked door to door, with the customs
            paperwork prepared here.
          </p>
        </div>
      </section>
    </>
  );
}
