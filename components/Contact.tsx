"use client";

import { useState, type FormEvent } from "react";
import {
  contactSection,
  contact,
  whatsappLink,
  telLink,
  location,
} from "@/lib/content";
import { WhatsAppIcon, PhoneIcon, PinIcon } from "./Icons";

/** Digits-only number for building a custom wa.me link from the form. */
const waBase = `https://wa.me/${contact.phoneE164.replace(/[^0-9]/g, "")}`;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get("name") as string)?.trim();
    const contactInfo = (data.get("contact") as string)?.trim();
    const level = (data.get("level") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    const lines = [
      "Hi Mestre Cobra! I'd like to join a capoeira class.",
      name && `Name: ${name}`,
      contactInfo && `Contact: ${contactInfo}`,
      level && `Experience: ${level}`,
      message && `Message: ${message}`,
    ].filter(Boolean);

    const url = `${waBase}?text=${encodeURIComponent(lines.join("\n"))}`;
    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="section section--dark" id="contact">
      <div className="container">
        <div className="contact__grid">
          <div>
            <p className="eyebrow">{contactSection.eyebrow}</p>
            <h2 className="section-title">{contactSection.heading}</h2>
            <p className="section-intro">{contactSection.subheading}</p>

            <div className="contact__cta-stack" style={{ marginTop: "1.8rem" }}>
              <a className="contact-action" href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <span className="contact-action__icon contact-action__icon--wa">
                  <WhatsAppIcon width={24} height={24} />
                </span>
                <span>
                  <small>Best way to reach us</small>
                  <strong>Message on WhatsApp</strong>
                </span>
              </a>

              <a className="contact-action" href={telLink}>
                <span className="contact-action__icon contact-action__icon--call">
                  <PhoneIcon width={24} height={24} />
                </span>
                <span>
                  <small>Prefer to call?</small>
                  <strong>{contact.phoneDisplay}</strong>
                </span>
              </a>

              <div className="contact-action" style={{ cursor: "default" }}>
                <span className="contact-action__icon" style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>
                  <PinIcon width={24} height={24} />
                </span>
                <span>
                  <small>Where we train</small>
                  <strong style={{ fontSize: "1rem", lineHeight: 1.3 }}>{location.full}</strong>
                </span>
              </div>
            </div>
          </div>

          {contactSection.form.enabled && (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send a quick message</h3>
              <p>Fill this in and we&apos;ll open WhatsApp with your details ready to send.</p>

              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
              </div>

              <div className="field">
                <label htmlFor="contact">Phone or email</label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  autoComplete="tel"
                  placeholder="How can we reach you?"
                />
              </div>

              <div className="field">
                <label htmlFor="level">Experience level</label>
                <select id="level" name="level" defaultValue="">
                  <option value="" disabled>
                    Choose one…
                  </option>
                  {contactSection.form.experienceLevels.map((lvl) => (
                    <option key={lvl} value={lvl}>
                      {lvl}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us a little about what you're looking for (optional)"
                />
              </div>

              <button className="btn btn--whatsapp" type="submit">
                <WhatsAppIcon width={20} height={20} />
                Send via WhatsApp
              </button>
              <p className="contact-form__hint" role="status">
                {submitted
                  ? "Opening WhatsApp… if nothing happened, tap the WhatsApp button above."
                  : "Opens WhatsApp with your message pre-filled. No account or sign-up needed."}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
