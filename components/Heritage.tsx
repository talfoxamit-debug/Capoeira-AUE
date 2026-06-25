"use client";

import { useSite } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Heritage() {
  const { t } = useSite();

  return (
    <section className="section section--dark heritage" id="heritage">
      <div className="container heritage__grid">
        <Reveal>
          <p className="eyebrow">{t.heritage.eyebrow}</p>
          <h2 className="section-title">{t.heritage.heading}</h2>
          {t.heritage.paragraphs.map((p, i) => (
            <p key={i} className="section-intro" style={i === 0 ? undefined : { marginTop: "1rem" }}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <figure className="heritage__quote">
            <span className="heritage__mark" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote>{t.heritage.quote}</blockquote>
            <figcaption>— {t.heritage.quoteAuthor}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
