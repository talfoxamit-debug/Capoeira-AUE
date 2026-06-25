"use client";

import Image from "next/image";
import { useSite } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function AboutTeacher() {
  const { t, cfg } = useSite();

  return (
    <section className="section" id="teacher">
      <div className="container teacher__grid">
        <Reveal className="teacher__photo">
          <Image
            src={cfg.media.teacherPhoto}
            alt={`${cfg.brand.teacher} — ${t.teacher.role}`}
            width={640}
            height={800}
            sizes="(min-width: 860px) 40vw, 100vw"
          />
          <div className="teacher__badge">
            <span>{t.teacher.badgeLabel}</span>
            {t.teacher.badgeValue}
          </div>
        </Reveal>

        <Reveal className="teacher__copy" delay={100}>
          <p className="eyebrow">{t.teacher.eyebrow}</p>
          <h2 className="section-title">{cfg.brand.teacher}</h2>
          <p className="section-intro" style={{ marginTop: "0.5rem", color: "var(--green-600)", fontWeight: 600 }}>
            {t.teacher.role}
          </p>
          {t.teacher.bio.map((p, i) => (
            <p key={i} style={{ marginTop: "1rem", color: "var(--text-soft)" }}>
              {p}
            </p>
          ))}

          <div className="teacher__highlights">
            {t.teacher.highlights.map((h) => (
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
