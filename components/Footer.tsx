import {
  brand,
  footer,
  location,
  schedule,
  contact,
  whatsappLink,
  telLink,
} from "@/lib/content";

export default function Footer() {
  const year = 2026; // update yearly, or wire to a server timestamp if preferred

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <strong>{brand.group}</strong>
            <p>{footer.tagline}</p>
          </div>

          <div className="footer__cols">
            <div>
              <h4>Train</h4>
              <ul>
                {schedule.classes.map((c) => (
                  <li key={c.day}>
                    {c.day} — {c.time}
                  </li>
                ))}
                <li>{location.full}</li>
              </ul>
            </div>
            <div>
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={telLink}>{contact.phoneDisplay}</a>
                </li>
                <li>Languages: {brand.languages.join(", ")}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {brand.group}. Taught by {brand.teacher}.
          </span>
          {footer.social.length > 0 && (
            <div className="footer__social">
              {footer.social.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  {s.label.charAt(0)}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
