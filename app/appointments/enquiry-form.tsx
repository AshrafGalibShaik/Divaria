"use client";

import { useState } from "react";
import { site } from "../lib/content";

const field =
  "w-full border-b border-line bg-transparent py-3 text-base outline-none transition-colors placeholder:text-muted/60 focus:border-ink";

export function EnquiryForm() {
  const [sent, setSent] = useState<{ wa: string; mail: string } | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();

    const body = [
      `Name: ${get("name")}`,
      `Contact: ${get("contact")}`,
      `Based in: ${get("location")}`,
      `Looking for: ${get("interest")}`,
      `Event date: ${get("date") || "not fixed"}`,
      `Preferred consultation: ${get("mode")}`,
      "",
      get("message"),
    ].join("\n");

    const subject = `Consultation enquiry: ${get("interest")}`;
    setSent({
      wa: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
        `Hello Divaria,\n\n${body}`,
      )}`,
      mail: `mailto:${site.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`,
    });
  }

  if (sent) {
    return (
      <div className="border-t border-line pt-10">
        <h2 className="font-display text-3xl">Your enquiry is ready to send.</h2>
        <p className="mt-4 max-w-lg leading-relaxed text-muted">
          Nothing has been sent yet. Choose how you would like it to reach the
          atelier. Dimple answers both herself, usually within a working day.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={sent.wa}
            target="_blank"
            rel="noreferrer"
            className="label border border-ink px-10 py-4 transition-colors hover:bg-ink hover:text-ivory"
          >
            Send on WhatsApp
          </a>
          <a
            href={sent.mail}
            className="label border border-ink/30 px-10 py-4 transition-colors hover:border-ink"
          >
            Send by email
          </a>
        </div>
        <button
          type="button"
          onClick={() => setSent(null)}
          className="label mt-8 block border-b border-ink pb-1 text-muted hover:text-ink"
        >
          Edit the enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
      <label className="block">
        <span className="label text-muted">Name</span>
        <input name="name" required className={field} placeholder="Full name" />
      </label>

      <label className="block">
        <span className="label text-muted">Phone or email</span>
        <input
          name="contact"
          required
          className={field}
          placeholder="How we reach you"
        />
      </label>

      <label className="block">
        <span className="label text-muted">Where you are based</span>
        <input
          name="location"
          required
          className={field}
          placeholder="City, country"
        />
      </label>

      <label className="block">
        <span className="label text-muted">What you are looking for</span>
        <select name="interest" className={field} defaultValue="Bridal couture">
          <option>Bridal couture</option>
          <option>Pret</option>
          <option>Indo-Western menswear</option>
          <option>Customised designer wear</option>
          <option>Trousseau / family edit</option>
        </select>
      </label>

      <label className="block">
        <span className="label text-muted">Event date</span>
        <input type="date" name="date" className={field} />
      </label>

      <label className="block">
        <span className="label text-muted">Consultation</span>
        <select name="mode" className={field} defaultValue="Video call">
          <option>Video call</option>
          <option>At the atelier, Guntur</option>
          <option>Phone</option>
        </select>
      </label>

      <label className="block sm:col-span-2">
        <span className="label text-muted">Anything else</span>
        <textarea
          name="message"
          rows={4}
          className={`${field} resize-none`}
          placeholder="Colours, references, number of pieces, other events in the calendar"
        />
      </label>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="label border border-ink px-12 py-4 transition-colors hover:bg-ink hover:text-ivory"
        >
          Continue
        </button>
        <p className="mt-4 text-xs text-muted">
          Nothing is sent until you confirm on the next step.
        </p>
      </div>
    </form>
  );
}
