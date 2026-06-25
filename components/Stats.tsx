"use client";

import { useSite } from "@/lib/i18n";
import { StarIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Stats() {
  const { t } = useSite();
  const items = [
    { value: t.stats.years, label: t.stats.yearsLabel },
    { value: t.stats.rating, label: t.stats.ratingLabel, star: true },
    { value: t.stats.languages, label: t.stats.languagesLabel },
    { value: t.stats.origin, label: t.stats.originLabel },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <Reveal className="stats-grid">
          {items.map((s, i) => (
            <div className="stat" key={i}>
              <div className="stat__value">
                {s.value}
                {s.star && <StarIcon className="stat__star" width={24} height={24} aria-hidden="true" />}
              </div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
