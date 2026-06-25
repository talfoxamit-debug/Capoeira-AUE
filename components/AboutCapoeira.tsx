import { aboutCapoeira } from "@/lib/content";
import { FeatureIcon } from "./Icons";
import Reveal from "./Reveal";

export default function AboutCapoeira() {
  return (
    <section className="section section--dark" id="about">
      <div className="container about-capoeira__grid">
        <Reveal className="about-capoeira__copy">
          <p className="eyebrow">{aboutCapoeira.eyebrow}</p>
          <h2 className="section-title">{aboutCapoeira.heading}</h2>
          {aboutCapoeira.paragraphs.map((p, i) => (
            <p key={i} className="section-intro" style={i === 0 ? undefined : { marginTop: "1rem" }}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal className="feature-grid" delay={120}>
          {aboutCapoeira.features.map((f) => (
            <div className="feature" key={f.title}>
              <div className="feature__icon">
                <FeatureIcon name={f.icon} width={24} height={24} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
