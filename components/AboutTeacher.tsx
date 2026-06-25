import Image from "next/image";
import { teacher } from "@/lib/content";
import Reveal from "./Reveal";

export default function AboutTeacher() {
  return (
    <section className="section" id="teacher">
      <div className="container teacher__grid">
        <Reveal className="teacher__photo">
          <Image
            src={teacher.photo.src}
            alt={teacher.photo.alt}
            width={640}
            height={800}
            sizes="(min-width: 860px) 40vw, 100vw"
          />
          <div className="teacher__badge">
            <span>Experience</span>
            20+ years
          </div>
        </Reveal>

        <Reveal className="teacher__copy" delay={100}>
          <p className="eyebrow">{teacher.eyebrow}</p>
          <h2 className="section-title">{teacher.name}</h2>
          <p className="section-intro" style={{ marginTop: "0.5rem", color: "var(--green-600)", fontWeight: 600 }}>
            {teacher.title}
          </p>
          {teacher.bio.map((p, i) => (
            <p key={i} style={{ marginTop: "1rem", color: "var(--text-soft)" }}>
              {p}
            </p>
          ))}

          <div className="teacher__highlights">
            {teacher.highlights.map((h) => (
              <div className="highlight" key={h.label}>
                <strong>{h.label}</strong>
                <span>{h.detail}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
