import { EnquiryForm } from "./enquiry-form";
import { art, film, site } from "../lib/content";
import { Plate } from "../components/plate";
import { Reel } from "../components/reel";

export const metadata = {
  title: "Book an Appointment",
  description:
    "Consultations with Dimple — at the atelier in Guntur or on video, scheduled to your time zone. Bridal, pret, menswear and bespoke commissions.",
};

export default function AppointmentsPage() {
  return (
    <>
      <section className="mx-auto max-w-[1600px] px-6 pt-36 lg:px-12 lg:pt-44">
        <p className="label text-muted">By appointment</p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-light leading-[1.05] sm:text-6xl lg:text-7xl">
          Every consultation is with Dimple.
        </h1>
        <p className="mt-8 max-w-2xl leading-relaxed text-muted lg:text-lg">
          Tell us the occasion and the date. You will hear back with what is
          possible in the time available, an indicative range, and a slot that
          works in your time zone.
        </p>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-16 px-6 py-20 lg:grid-cols-12 lg:px-12 lg:py-28">
        <div className="lg:col-span-7">
          <EnquiryForm />
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <div className="border-t border-line pt-6">
            <h2 className="label text-muted">The atelier</h2>
            <p className="mt-4 font-display text-2xl leading-snug">{site.city}</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-wine">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="hover:text-wine"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-wine"
                >
                  @label_divaria
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12 border-t border-line pt-6">
            <h2 className="label text-muted">Before you book</h2>
            <dl className="mt-5 space-y-5 text-sm leading-relaxed">
              <div>
                <dt className="font-display text-xl">Lead times</dt>
                <dd className="text-muted">
                  Bridal 16–20 weeks · Menswear 8–10 · Bespoke 10–14 · Pret 3–5.
                  Shorter timelines are sometimes possible — ask.
                </dd>
              </div>
              <div>
                <dt className="font-display text-xl">Overseas clients</dt>
                <dd className="text-muted">
                  Measurements are taken on a guided video session and kept on
                  file. Shipping is insured and tracked, worldwide.
                </dd>
              </div>
              <div>
                <dt className="font-display text-xl">Made to order</dt>
                <dd className="text-muted">
                  Nothing is stocked. Each commission is drafted, cut and
                  finished for one client.
                </dd>
              </div>
            </dl>
          </div>

          <figure className="mt-12">
            <div className="plate aspect-4/5 overflow-hidden">
              <Reel name={film.showroom.name} label={film.showroom.label} />
            </div>
            <figcaption className="label mt-4 text-muted">
              {film.showroom.caption}
            </figcaption>
          </figure>

          <Plate
            src={art.story}
            alt={art.storyAlt}
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="mt-12 aspect-4/5"
          />
        </aside>
      </section>
    </>
  );
}
