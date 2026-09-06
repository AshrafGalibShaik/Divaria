/**
 * Whether a wedding date leaves enough time for the commission.
 * Pure on purpose: no imports, so the check below runs under plain node.
 */

export type LeadStatus = "past" | "tight" | "comfortable";

export type LeadCheck = {
  weeksAway: number;
  needed: number;
  status: LeadStatus;
};

/** "16-20 weeks" -> 16. The quoted minimum is what a date has to clear. */
export function weeksFromLead(lead: string): number | null {
  const first = lead.match(/\d+/);
  return first ? Number(first[0]) : null;
}

export function checkLeadTime(
  needed: number | null,
  dateISO: string,
  now: Date = new Date(),
): LeadCheck | null {
  if (!needed || !dateISO) return null;

  const event = Date.parse(`${dateISO}T00:00:00`);
  if (Number.isNaN(event)) return null;

  const weeksAway = Math.floor((event - now.getTime()) / (7 * 24 * 60 * 60 * 1000));
  const status: LeadStatus =
    weeksAway < 0 ? "past" : weeksAway < needed ? "tight" : "comfortable";

  return { weeksAway, needed, status };
}
