"use client";

import Image from "next/image";
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
          <Image
            className="brand-mark__logo"
            src={cfg.media.logo}
            alt="Capoeira Auê"
            width={44}
            height={44}
            priority
          />
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
