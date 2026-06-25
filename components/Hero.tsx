"use client";

import Image from "next/image";
import { useSite } from "@/lib/i18n";
import { whatsappHref, telLink } from "@/lib/content";
import { WhatsAppIcon, PhoneIcon, PinIcon, GlobeIcon, ClockIcon, StarIcon } from "./Icons";

export default function Hero() {
  const { t, cfg } = useSite();
  const bg = cfg.hero.background;
  const wa = whatsappHref(t.contact.whatsappMessage);

  return (
    <section className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        {bg.type === "video" ? (
          <video autoPlay muted loop playsInline poster={bg.poster} aria-hidden="true">
            <source src={bg.src} type="video/mp4" />
          </video>
        ) : (
          <Image src={bg.src} alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
        )}
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="container hero__content">
        <div className="hero__top-row">
          <span className="hero__eyebrow">
            <span className="dot" />
            {t.hero.eyebrow}
          </span>
          <span className="hero__rating" aria-label={t.reviews.badge}>
            <span className="hero__rating-stars" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon key={i} width={14} height={14} />
              ))}
            </span>
            {cfg.reviews.rating.toFixed(1)} · Google
          </span>
        </div>

        <h1>
          {t.hero.headlinePre} <span className="accent">{t.hero.headlineAccent}</span>
        </h1>

        <p className="hero__sub">{t.hero.sub}</p>

        <div className="btn-row">
          <a className="btn btn--whatsapp btn--lg" href={wa} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon width={20} height={20} />
            {t.hero.ctaWhatsapp}
          </a>
          <a className="btn btn--gold btn--lg" href={telLink}>
            <PhoneIcon width={19} height={19} />
            {t.hero.ctaCall}
          </a>
          <a className="btn btn--ghost btn--lg" href="#schedule">
            {t.hero.ctaSchedule}
          </a>
        </div>

        <div className="hero__meta">
          <div>
            <PinIcon width={18} height={18} />
            {cfg.location.name} · {t.schedule.locationDetail}
          </div>
          <div>
            <ClockIcon width={18} height={18} />
            {t.hero.metaDays}
          </div>
          <div>
            <GlobeIcon width={18} height={18} />
            {t.languagesLine}
          </div>
        </div>
      </div>
    </section>
  );
}
