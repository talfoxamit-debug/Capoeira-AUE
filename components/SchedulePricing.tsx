"use client";

import { useSite } from "@/lib/i18n";
import { mapsHref, mapsEmbed } from "@/lib/content";
import { PinIcon, ArrowRight } from "./Icons";
import Reveal from "./Reveal";

export default function SchedulePricing() {
  const { t, cfg } = useSite();

  return (
    <section className="section section--tint" id="schedule">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{t.schedule.eyebrow}</p>
          <h2 className="section-title">{t.schedule.heading}</h2>
          <p className="section-intro">{t.schedule.intro}</p>
        </Reveal>

        <div className="schedule__layout">
          <Reveal>
            <div className="schedule-cards">
              {cfg.schedule.classes.map((c) => (
                <div className="day-card" key={c.id}>
                  <div className="day-card__day">{t.schedule.days[c.id]}</div>
                  <div className="day-card__time">{c.time}</div>
                  <div className="day-card__note">{t.schedule.notes[c.noteKey]}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="price-cards">
              <div className="price-card price-card--free">
                <div className="price-card__label">{t.pricing.firstLabel}</div>
                <div className="price-card__value">{t.pricing.firstValue}</div>
                <div className="price-card__note">{t.pricing.firstNote}</div>
              </div>
              <div className="price-card price-card--paid">
                <div className="price-card__label">{t.pricing.perLabel}</div>
                <div className="price-card__value">{cfg.pricing.perClass}</div>
                <div className="price-card__note">{t.pricing.perNote}</div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="location-bar">
            <div className="location-bar__info">
              <div className="location-bar__icon">
                <PinIcon width={22} height={22} />
              </div>
              <div>
                <strong>{cfg.location.name}</strong>
                <span>
                  {t.schedule.locationDetail} · {cfg.location.city}
                </span>
              </div>
            </div>
            <a className="btn btn--ghost" href={mapsHref} target="_blank" rel="noopener noreferrer">
              {t.schedule.openInMaps}
              <ArrowRight width={18} height={18} />
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="map-embed">
            <iframe
              src={mapsEmbed}
              title={`${cfg.location.name} — ${cfg.location.city}`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
