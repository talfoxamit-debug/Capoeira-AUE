"use client";

import { useSite } from "@/lib/i18n";
import { StarIcon, ArrowRight } from "./Icons";
import Reveal from "./Reveal";

export default function Reviews() {
  const { t, cfg } = useSite();

  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <Reveal className="reviews__card">
          <div className="reviews__stars" aria-label={`${cfg.reviews.rating} / 5`}>
            {[0, 1, 2, 3, 4].map((i) => (
              <StarIcon key={i} width={26} height={26} aria-hidden="true" />
            ))}
          </div>
          <p className="eyebrow eyebrow--center">{t.reviews.eyebrow}</p>
          <h2 className="section-title">{t.reviews.heading}</h2>
          <p className="section-intro">{t.reviews.intro}</p>
          <a className="btn btn--ghost" href={cfg.reviews.url} target="_blank" rel="noopener noreferrer">
            {t.reviews.cta}
            <ArrowRight width={18} height={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
