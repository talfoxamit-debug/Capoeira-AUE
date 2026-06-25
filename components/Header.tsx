import { brand, whatsappLink } from "@/lib/content";
import { WhatsAppIcon } from "./Icons";

const navLinks = [
  { href: "#about", label: "Capoeira" },
  { href: "#teacher", label: "Mestre Cobra" },
  { href: "#schedule", label: "Schedule" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="brand-mark" aria-label={`${brand.group} home`}>
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

        <a className="btn btn--whatsapp" href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon width={18} height={18} />
          WhatsApp
        </a>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <svg className="brand-mark__logo" viewBox="0 0 44 44" aria-hidden="true">
      <circle cx="22" cy="22" r="21" fill="#0d4f36" />
      <circle cx="22" cy="22" r="21" fill="none" stroke="#f5b820" strokeWidth="1.5" />
      {/* stylized berimbau arc + capoeirista */}
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
