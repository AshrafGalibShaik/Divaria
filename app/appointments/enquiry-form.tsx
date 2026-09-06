"use client";

import { useMemo, useState } from "react";
import { collections, enquiryOptions, site } from "../lib/content";
import { checkLeadTime, weeksFromLead } from "../lib/lead-time";

/** Inputs sit on paper inside a real border, so it is obvious where to type. */
const field =
  "w-full border border-line bg-paper px-5 py-4 text-base text-ink outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-muted/55 hover:border-muted/45 focus:border-ink focus:shadow-[0_0_0_3px_rgba(20,17,15,0.07)]";

function Label({
  children,
  hint,
}: {
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <span className="mb-2.5 flex items-baseline gap-3">
      <span className="text-[0.9375rem] font-medium text-ink">{children}</span>
      {hint && <span className="text-xs text-muted">{hint}</span>}
    </span>
  );
}

function Select({
  name,
  value,
  onChange,
  defaultValue,
  children,
}: {
  name: string;
  value?: string;
  onChange?: (v: string) => void;
  defaultValue?: string;
  children: React.ReactNode;
}) {
  return (
    <span className="relative block">
      <select
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => onChange?.(e.target.value)}
        className={`${field} cursor-pointer appearance-none pr-12`}
      >
        {children}
      </select>
      <span
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2 text-muted"
      >
        <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
          <path
            d="M1 1l4.5 4.5L10 1"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </span>
  );
}

function Fieldset({
  step,
  title,
  blurb,
  children,
}: {
  step: string;
  title: string;
  blurb: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset>
      <legend className="sr-only">{title}</legend>
      <div className="flex items-baseline gap-4 border-t border-line pt-6">
        <span className="label text-wine">{step}</span>
        <div>
          <p className="font-display text-2xl leading-none">{title}</p>
          <p className="mt-2 text-sm text-muted">{blurb}</p>
        </div>
      </div>
      <div className="mt-7 grid gap-x-6 gap-y-6 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

export function EnquiryForm() {
  const [interest, setInterest] = useState(enquiryOptions[0].label);
  const [date, setDate] = useState("");
  const [sent, setSent] = useState<{
    wa: string;
    mail: string;
    preview: string;
  } | null>(null);

  // Quote the real lead time against the real date, as soon as both are known.
  const lead = useMemo(() => {
    const slug = enquiryOptions.find((o) => o.label === interest)?.slug;
    const quoted = collections.find((c) => c.slug === slug)?.lead;
    return checkLeadTime(quoted ? weeksFromLead(quoted) : null, date);
  }, [interest, date]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();

    const lines = [
      `Name: ${get("name")}`,
      `Contact: ${get("contact")}`,
      `Based in: ${get("location")}`,
      `Looking for: ${get("interest")}`,
      `Event date: ${get("date") || "not fixed"}`,
      `Preferred consultation: ${get("mode")}`,
    ];
    if (lead?.status === "tight") {
      lines.push(
        `Note: ${lead.weeksAway} weeks away, under the usual ${lead.needed}`,
      );
    }
    const body = [...lines, "", get("message")].join("\n");

    setSent({
      preview: body.trim(),
      wa: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
        `Hello Divaria,\n\n${body}`,
      )}`,
      mail: `mailto:${site.email}?subject=${encodeURIComponent(
        `Consultation enquiry: ${get("interest")}`,
      )}&body=${encodeURIComponent(body)}`,
    });
  }

  if (sent) {
    return (
      <div>
        <p className="label text-wine">Last step</p>
        <h2 className="mt-4 font-display text-4xl font-light">
          Read it back, then send it.
        </h2>
        <p className="mt-4 max-w-lg leading-relaxed text-muted">
          Nothing has gone anywhere yet. Pick how you would like it to reach the
          atelier. Dimple answers both herself, usually within a working day.
        </p>

        <pre className="mt-8 max-h-80 overflow-y-auto border border-line bg-paper p-6 font-sans text-[0.9375rem] leading-relaxed whitespace-pre-wrap text-ink/80">
          {sent.preview}
        </pre>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={sent.wa}
            target="_blank"
            rel="noreferrer"
            className="label border border-ink bg-ink px-10 py-4 text-ivory transition-opacity hover:opacity-80"
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
          className="label mt-8 border-b border-ink pb-1 text-muted transition-colors hover:text-ink"
        >
          Go back and change something
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-12">
      <Fieldset step="01" title="You" blurb="So we know who we are writing back to.">
        <label className="block">
          <Label>Your name</Label>
          <input name="name" required className={field} placeholder="Full name" />
        </label>

        <label className="block">
          <Label>Phone or email</Label>
          <input
            name="contact"
            required
            className={field}
            placeholder="Where we should reply"
          />
        </label>

        <label className="block sm:col-span-2">
          <Label hint="City and country">Where you are based</Label>
          <input
            name="location"
            required
            className={field}
            placeholder="Guntur, or Dallas, or anywhere we can post to"
          />
        </label>
      </Fieldset>

      <Fieldset
        step="02"
        title="The occasion"
        blurb="Pick a date and we will tell you straight away whether it is enough time."
      >
        <label className="block">
          <Label>What you are looking for</Label>
          <Select name="interest" value={interest} onChange={setInterest}>
            {enquiryOptions.map((o) => (
              <option key={o.label}>{o.label}</option>
            ))}
          </Select>
        </label>

        <label className="block">
          <Label hint="Optional">Event date</Label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={`${field} cursor-pointer`}
          />
        </label>

        {lead && (
          <p
            role="status"
            className={`flex gap-3 border-l-2 py-1 pl-4 text-[0.9375rem] leading-relaxed sm:col-span-2 ${
              lead.status === "comfortable"
                ? "border-line text-muted"
                : "border-wine text-wine"
            }`}
          >
            {lead.status === "past" &&
              "That date has already gone. Worth checking the year before you send."}
            {lead.status === "tight" &&
              `That is ${lead.weeksAway} ${
                lead.weeksAway === 1 ? "week" : "weeks"
              } away and this usually takes ${lead.needed}. Send it anyway, and Dimple will tell you what can honestly be made in the time.`}
            {lead.status === "comfortable" &&
              `${lead.weeksAway} weeks away. This usually takes ${lead.needed}, so the timing works.`}
          </p>
        )}

        <label className="block sm:col-span-2">
          <Label>How you would like to talk</Label>
          <Select name="mode" defaultValue="Video call">
            <option>Video call</option>
            <option>At the atelier, Guntur</option>
            <option>Phone</option>
          </Select>
        </label>
      </Fieldset>

      <Fieldset
        step="03"
        title="Anything else"
        blurb="Colours, references, how many pieces, the other events in the calendar."
      >
        <label className="block sm:col-span-2">
          <Label hint="Optional">Tell Dimple about it</Label>
          <textarea
            name="message"
            rows={6}
            className={`${field} resize-y leading-relaxed`}
            placeholder="Write it the way you would say it on the phone. There is no wrong amount of detail."
          />
        </label>
      </Fieldset>

      <div className="border-t border-line pt-8">
        <button
          type="submit"
          className="label w-full border border-ink bg-ink px-12 py-5 text-ivory transition-opacity hover:opacity-80 sm:w-auto"
        >
          Review your enquiry
        </button>
        <p className="mt-4 text-sm text-muted">
          You will see the whole message, and can edit it, before anything is
          sent.
        </p>
      </div>
    </form>
  );
}
