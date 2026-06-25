"use client";

import { useSite } from "@/lib/i18n";
import { whatsappHref, telLink } from "@/lib/content";
import { InstagramIcon } from "./Icons";

export default function Footer() {
  const { t, cfg } = useSite();
  const year = 2026; // update yearly
  const wa = whatsappHref(t.contact.whatsappMessage);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <strong>{cfg.brand.group}</strong>
            <p>{t.footer.tagline}</p>
          </div>

          <div className="footer__cols">
            <div>
              <h4>{t.footer.trainHeading}</h4>
              <ul>
                {cfg.schedule.classes.map((c) => (
                  <li key={c.id}>
                    {t.schedule.days[c.id]} — {c.time}
                  </li>
                ))}
                <li>{t.contact.locationFull}</li>
              </ul>
            </div>
            <div>
              <h4>{t.footer.connectHeading}</h4>
              <ul>
                <li>
                  <a href={wa} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={telLink}>{cfg.contact.phoneDisplay}</a>
                </li>
                <li>
                  {t.footer.languagesLabel}: {t.languagesLine}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {cfg.brand.group}. {t.footer.rights}
          </span>
          {cfg.social.length > 0 && (
            <div className="footer__social">
              {cfg.social.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  {s.label === "Instagram" ? <InstagramIcon width={20} height={20} /> : s.label.charAt(0)}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
