"use client";

import Image from "next/image";
import { useSite } from "@/lib/i18n";
import { PlayIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Gallery() {
  const { t, cfg } = useSite();

  return (
    <section className="section section--tint" id="gallery">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{t.gallery.eyebrow}</p>
          <h2 className="section-title">{t.gallery.heading}</h2>
          <p className="section-intro">{t.gallery.intro}</p>
        </Reveal>

        <Reveal>
          <div className="gallery-grid">
            {cfg.gallery.map((item, i) => (
              <figure className="gallery-item" key={item.id}>
                {item.type === "video" ? (
                  <>
                    <video muted loop playsInline preload="metadata" poster={item.poster} aria-label={item.alt}>
                      <source src={item.src} type="video/mp4" />
                    </video>
                    <span className="gallery-item__play" aria-hidden="true">
                      <span title={t.gallery.playLabel}>
                        <PlayIcon width={22} height={22} />
                      </span>
                    </span>
                  </>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={800}
                    height={800}
                    sizes="(min-width: 700px) 33vw, 50vw"
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                )}
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
