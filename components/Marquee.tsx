import { config } from "@/lib/content";

/** Energetic scrolling band of capoeira words. Decorative (hidden from a11y tree). */
export default function Marquee() {
  const row = [...config.marquee, ...config.marquee];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((word, i) => (
          <span className="marquee__item" key={i}>
            {word}
            <span className="marquee__sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
