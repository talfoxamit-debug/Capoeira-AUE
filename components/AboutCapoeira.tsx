"use client";

import { useSite } from "@/lib/i18n";
import { FeatureIcon } from "./Icons";
import Reveal from "./Reveal";

export default function AboutCapoeira() {
  const { t, cfg } = useSite();

  return (
    <section className="section section--dark" id="about">
      <div className="container about-capoeira__grid">
        <Reveal className="about-capoeira__copy">
          <p className="eyebrow">{t.aboutCapoeira.eyebrow}</p>
          <h2 className="section-title">{t.aboutCapoeira.heading}</h2>
          {t.aboutCapoeira.paragraphs.map((p, i) => (
            <p key={i} className="section-intro" style={i === 0 ? undefined : { marginTop: "1rem" }}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal className="feature-grid" delay={120}>
          {cfg.features.map((f) => {
            const copy = t.aboutCapoeira.features[f.id];
            return (
              <div className="feature" key={f.id}>
                <div className="feature__icon">
                  <FeatureIcon name={f.icon} width={24} height={24} />
                </div>
                <h3>{copy.title}</h3>
                <p>{copy.description}</p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
