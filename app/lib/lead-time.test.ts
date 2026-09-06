// node --experimental-strip-types --test app/lib/lead-time.test.ts
import assert from "node:assert/strict";
import { test } from "node:test";
import { checkLeadTime, weeksFromLead } from "./lead-time.ts";

const now = new Date("2026-01-01T09:00:00");

test("reads the minimum from a quoted range", () => {
  assert.equal(weeksFromLead("16-20 weeks"), 16);
  assert.equal(weeksFromLead("3-5 weeks"), 3);
  assert.equal(weeksFromLead("weeks"), null);
});

test("a date past the lead time is comfortable", () => {
  // 147 days out against a 16 week commission, so 20 whole weeks clear
  const c = checkLeadTime(16, "2026-05-28", now);
  assert.equal(c?.status, "comfortable");
  assert.equal(c?.weeksAway, 20);
});

test("a date inside the lead time is tight", () => {
  const c = checkLeadTime(16, "2026-03-01", now);
  assert.equal(c?.status, "tight");
  assert.equal(c?.weeksAway, 8);
});

test("the boundary is conservative: whole weeks only, rounded down", () => {
  // 16 weeks from 09:00 on 1 Jan lands at 09:00 on 23 Apr, so a date stamped
  // midnight on the 23rd is a few hours short and still counts as tight.
  assert.equal(checkLeadTime(16, "2026-04-23", now)?.weeksAway, 15);
  assert.equal(checkLeadTime(16, "2026-04-23", now)?.status, "tight");

  const clear = checkLeadTime(16, "2026-04-24", now);
  assert.equal(clear?.weeksAway, 16);
  assert.equal(clear?.status, "comfortable");
});

test("a date already gone is flagged as past", () => {
  assert.equal(checkLeadTime(16, "2025-12-01", now)?.status, "past");
});

test("nothing to say without a date or a lead time", () => {
  assert.equal(checkLeadTime(16, "", now), null);
  assert.equal(checkLeadTime(null, "2026-05-28", now), null);
  assert.equal(checkLeadTime(16, "not-a-date", now), null);
});
