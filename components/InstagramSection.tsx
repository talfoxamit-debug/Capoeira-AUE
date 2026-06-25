"use client";

import Image from "next/image";
import Script from "next/script";
import { createElement } from "react";
import { useSite } from "@/lib/i18n";
import { InstagramIcon } from "./Icons";
import Reveal from "./Reveal";

/** Behold widget loader (https://behold.so). Update if Behold changes its URL. */
const BEHOLD_WIDGET_SRC = "https://w.behold.so/widget.js";

export default function InstagramSection() {
  const { t, cfg } = useSite();
  const ig = cfg.social.find((s) => s.label === "Instagram")?.href ?? "#";
  const feedId = cfg.instagramFeedId;
  const tiles = cfg.gallery.slice(0, 6);

  return (
    <section className="section section--dark instagram" id="instagram">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow eyebrow--center">{t.instagram.eyebrow}</p>
          <h2 className="section-title">{t.instagram.heading}</h2>
          <p className="section-intro">{t.instagram.intro}</p>
          <a className="btn btn--gold instagram__cta" href={ig} target="_blank" rel="noopener noreferrer">
            <InstagramIcon width={20} height={20} />
            {cfg.instagramHandle}
          </a>
        </Reveal>

        {feedId ? (
          // Live feed: renders real posts once a Behold feed ID is set in config.
          <Reveal className="instagram__feed">
            <Script src={BEHOLD_WIDGET_SRC} type="module" strategy="afterInteractive" />
            {createElement("behold-widget", { "feed-id": feedId })}
          </Reveal>
        ) : (
          // Fallback: curated photo grid linking to the profile.
          <Reveal className="instagram__grid">
            {tiles.map((item) => (
              <a
                key={item.id}
                className="instagram__tile"
                href={ig}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.instagram.cta}
              >
                <Image src={item.src} alt={item.alt} width={420} height={420} sizes="(min-width: 700px) 16vw, 33vw" />
                <span className="instagram__overlay" aria-hidden="true">
                  <InstagramIcon width={26} height={26} />
                </span>
              </a>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}
