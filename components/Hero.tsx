import Image from "next/image";
import { hero, whatsappLink, location, brand } from "@/lib/content";
import { WhatsAppIcon, PinIcon, GlobeIcon, ClockIcon } from "./Icons";

export default function Hero() {
  const bg = hero.background;
  return (
    <section className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        {bg.type === "video" ? (
          <video autoPlay muted loop playsInline poster={bg.poster} aria-hidden="true">
            <source src={bg.src} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={bg.src}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="container hero__content">
        <span className="hero__eyebrow">
          <span className="dot" />
          {hero.eyebrow}
        </span>

        <h1>
          Capoeira Classes in <span className="accent">Fort Lauderdale</span>
        </h1>

        <p className="hero__sub">{hero.subheadline}</p>

        <div className="btn-row">
          <a className="btn btn--whatsapp btn--lg" href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon width={20} height={20} />
            {hero.primaryCta}
          </a>
          <a className="btn btn--ghost btn--lg" href="#schedule">
            {hero.secondaryCta}
          </a>
        </div>

        <div className="hero__meta">
          <div>
            <PinIcon width={18} height={18} />
            {location.name} · {location.detail}
          </div>
          <div>
            <ClockIcon width={18} height={18} />
            Sun, Tue &amp; Thu
          </div>
          <div>
            <GlobeIcon width={18} height={18} />
            {brand.languages.join(" · ")}
          </div>
        </div>
      </div>
    </section>
  );
}
