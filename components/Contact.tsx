"use client";

import { useState, type FormEvent } from "react";
import { useSite } from "@/lib/i18n";
import { whatsappHref, telLink } from "@/lib/content";
import { WhatsAppIcon, PhoneIcon, PinIcon } from "./Icons";

export default function Contact() {
  const { t, cfg } = useSite();
  const [submitted, setSubmitted] = useState(false);
  const wa = whatsappHref(t.contact.whatsappMessage);
  const f = t.contact.form;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get("name") as string)?.trim();
    const contactInfo = (data.get("contact") as string)?.trim();
    const level = (data.get("level") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    const lines = [
      f.msgIntro,
      name && `${f.msgName}: ${name}`,
      contactInfo && `${f.msgContact}: ${contactInfo}`,
      level && `${f.msgLevel}: ${level}`,
      message && `${f.msgMessage}: ${message}`,
    ].filter(Boolean) as string[];

    setSubmitted(true);
    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="section section--dark" id="contact">
      <div className="container">
        <div className="contact__grid">
          <div>
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2 className="section-title">{t.contact.heading}</h2>
            <p className="section-intro">{t.contact.subheading}</p>

            <div className="contact__cta-stack" style={{ marginTop: "1.8rem" }}>
              <a className="contact-action" href={wa} target="_blank" rel="noopener noreferrer">
                <span className="contact-action__icon contact-action__icon--wa">
                  <WhatsAppIcon width={24} height={24} />
                </span>
                <span>
                  <small>{t.contact.waSmall}</small>
                  <strong>{t.contact.waLabel}</strong>
                </span>
              </a>

              <a className="contact-action" href={telLink}>
                <span className="contact-action__icon contact-action__icon--call">
                  <PhoneIcon width={24} height={24} />
                </span>
                <span>
                  <small>{t.contact.callSmall}</small>
                  <strong>{cfg.contact.phoneDisplay}</strong>
                </span>
              </a>

              <div className="contact-action" style={{ cursor: "default" }}>
                <span className="contact-action__icon" style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>
                  <PinIcon width={24} height={24} />
                </span>
                <span>
                  <small>{t.contact.whereSmall}</small>
                  <strong style={{ fontSize: "1rem", lineHeight: 1.3 }}>{t.contact.locationFull}</strong>
                </span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>{f.title}</h3>
            <p>{f.intro}</p>

            <div className="field">
              <label htmlFor="name">{f.name}</label>
              <input id="name" name="name" type="text" autoComplete="name" placeholder={f.namePh} required />
            </div>

            <div className="field">
              <label htmlFor="contact">{f.contact}</label>
              <input id="contact" name="contact" type="text" autoComplete="tel" placeholder={f.contactPh} />
            </div>

            <div className="field">
              <label htmlFor="level">{f.level}</label>
              <select id="level" name="level" defaultValue="">
                <option value="" disabled>
                  {f.levelPh}
                </option>
                {f.levels.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="message">{f.message}</label>
              <textarea id="message" name="message" placeholder={f.messagePh} />
            </div>

            <button className="btn btn--whatsapp" type="submit">
              <WhatsAppIcon width={20} height={20} />
              {f.submit}
            </button>
            <p className="contact-form__hint" role="status">
              {submitted ? f.hintSubmitted : f.hintIdle}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
