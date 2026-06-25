"use client";

import Image from "next/image";
import { useSite } from "@/lib/i18n";
import { InstagramIcon } from "./Icons";
import Reveal from "./Reveal";

export default function InstagramSection() {
  const { t, cfg } = useSite();
  const ig = cfg.social.find((s) => s.label === "Instagram")?.href ?? "#";
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
      </div>
    </section>
  );
}
