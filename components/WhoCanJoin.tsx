import { whoCanJoin } from "@/lib/content";
import { FeatureIcon } from "./Icons";
import Reveal from "./Reveal";

export default function WhoCanJoin() {
  return (
    <section className="section" id="who">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{whoCanJoin.eyebrow}</p>
          <h2 className="section-title">{whoCanJoin.heading}</h2>
          <p className="section-intro">
            Capoeira meets you where you are. Whatever your age or level, there&apos;s a place for you in the roda.
          </p>
        </Reveal>

        <div className="who-grid">
          {whoCanJoin.groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 70}>
              <div className="who-card">
                <div className="who-card__icon">
                  <FeatureIcon name={g.icon} width={26} height={26} />
                </div>
                <h3>{g.title}</h3>
                <p>{g.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
