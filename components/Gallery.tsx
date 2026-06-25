"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useSite } from "@/lib/i18n";
import { PlayIcon, CloseIcon, ArrowRight } from "./Icons";
import Reveal from "./Reveal";

export default function Gallery() {
  const { t, cfg } = useSite();
  const items = cfg.gallery;
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) => setOpen((cur) => (cur === null ? cur : (cur + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const active = open === null ? null : items[open];

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
            {items.map((item, i) => (
              <button
                type="button"
                className="gallery-item"
                key={item.id}
                onClick={() => item.type === "image" && setOpen(i)}
                aria-label={item.type === "image" ? `${t.gallery.viewLabel}: ${item.alt}` : item.alt}
              >
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
                    width={900}
                    height={900}
                    sizes="(min-width: 700px) 33vw, 50vw"
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                )}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.alt} onClick={close}>
          <button type="button" className="lightbox__close" aria-label={t.gallery.closeLabel} onClick={close}>
            <CloseIcon width={26} height={26} />
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            <ArrowRight width={26} height={26} style={{ transform: "rotate(180deg)" }} />
          </button>
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active.src} alt={active.alt} />
            <figcaption>{active.alt}</figcaption>
          </figure>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            <ArrowRight width={26} height={26} />
          </button>
        </div>
      )}
    </section>
  );
}
