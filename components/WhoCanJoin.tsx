"use client";

import { useSite } from "@/lib/i18n";
import { FeatureIcon } from "./Icons";
import Reveal from "./Reveal";

export default function WhoCanJoin() {
  const { t, cfg } = useSite();

  return (
    <section className="section" id="who">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{t.who.eyebrow}</p>
          <h2 className="section-title">{t.who.heading}</h2>
          <p className="section-intro">{t.who.intro}</p>
        </Reveal>

        <div className="who-grid">
          {cfg.whoGroups.map((g, i) => {
            const copy = t.who.groups[g.id];
            return (
              <Reveal key={g.id} delay={i * 70}>
                <div className="who-card">
                  <div className="who-card__icon">
                    <FeatureIcon name={g.icon} width={26} height={26} />
                  </div>
                  <h3>{copy.title}</h3>
                  <p>{copy.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
