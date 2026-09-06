"use client";

import { useEffect, useState } from "react";

const time = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

/**
 * The atelier's own clock. Half the enquiries come from other time zones, and
 * knowing it is 02:00 in Guntur explains the silence. Renders nothing until
 * mounted, since the server has no business guessing the viewer's clock.
 */
export function AtelierClock() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setNow(time.format(new Date()));
    const id = setInterval(tick, 30_000);
    queueMicrotask(tick);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;

  return (
    <span className="text-muted">
      {now} in Guntur <span className="text-muted/60">(IST)</span>
    </span>
  );
}
