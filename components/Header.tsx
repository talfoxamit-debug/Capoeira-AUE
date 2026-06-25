"use client";

import { useSite } from "@/lib/i18n";
import { whatsappHref, telLink } from "@/lib/content";
import { WhatsAppIcon, PhoneIcon } from "./Icons";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t, cfg } = useSite();
  const wa = whatsappHref(t.contact.whatsappMessage);

  const navLinks = [
    { href: "#about", label: t.nav.capoeira },
    { href: "#teacher", label: t.nav.teacher },
    { href: "#schedule", label: t.nav.schedule },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="brand-mark" aria-label={`${cfg.brand.group} home`}>
          <Logo />
          <span className="brand-mark__text">
            <small>Capoeira Auê</small>
            <strong>Fort Lauderdale</strong>
          </span>
        </a>

        <nav className="nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <LanguageSwitcher compact />
          <a className="btn btn--gold btn--sm" href={telLink} aria-label={`${t.buttons.call} ${cfg.contact.phoneDisplay}`}>
            <PhoneIcon width={17} height={17} />
            <span className="btn__label">{t.buttons.call}</span>
          </a>
          <a className="btn btn--whatsapp btn--sm" href={wa} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon width={17} height={17} />
            <span className="btn__label">{t.buttons.whatsapp}</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <svg className="brand-mark__logo" viewBox="0 0 44 44" aria-hidden="true">
      <circle cx="22" cy="22" r="21" fill="#0d4f36" />
      <circle cx="22" cy="22" r="21" fill="none" stroke="#f5b820" strokeWidth="1.5" />
      <path d="M14 9c8 5 12 16 9 27" fill="none" stroke="#f5b820" strokeWidth="2" strokeLinecap="round" />
      <circle cx="14" cy="9" r="2" fill="#f5b820" />
      <circle cx="23" cy="36" r="2" fill="#f5b820" />
      <path
        d="M20 16a2.4 2.4 0 1 0 0-.1ZM18 20l4 1 3-2m-7 1-1 6m1-6 5 4-1 5"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
