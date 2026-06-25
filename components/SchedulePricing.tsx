import { schedule, pricing, location } from "@/lib/content";
import { PinIcon, ArrowRight } from "./Icons";
import Reveal from "./Reveal";

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapsQuery)}`;

export default function SchedulePricing() {
  return (
    <section className="section section--tint" id="schedule">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{schedule.eyebrow}</p>
          <h2 className="section-title">{schedule.heading}</h2>
          <p className="section-intro">
            Classes run every week, rain or shine, outdoors at the park. Your first class is on us.
          </p>
        </Reveal>

        <div className="schedule__layout">
          <Reveal>
            <div className="schedule-cards">
              {schedule.classes.map((c) => (
                <div className="day-card" key={c.day}>
                  <div className="day-card__day">{c.day}</div>
                  <div className="day-card__time">{c.time}</div>
                  <div className="day-card__note">{c.note}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="price-cards">
              <div className="price-card price-card--free">
                <div className="price-card__label">{pricing.firstClass.label}</div>
                <div className="price-card__value">{pricing.firstClass.value}</div>
                <div className="price-card__note">{pricing.firstClass.note}</div>
              </div>
              <div className="price-card price-card--paid">
                <div className="price-card__label">{pricing.perClass.label}</div>
                <div className="price-card__value">{pricing.perClass.value}</div>
                <div className="price-card__note">{pricing.perClass.note}</div>
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
                <strong>{location.name}</strong>
                <span>
                  {location.detail} · {location.city}
                </span>
              </div>
            </div>
            <a className="btn btn--ghost" href={mapsHref} target="_blank" rel="noopener noreferrer">
              Open in Maps
              <ArrowRight width={18} height={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
