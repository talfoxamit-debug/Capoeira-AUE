"use client";

import { useSite, LOCALES, localeMeta } from "@/lib/i18n";
import { GlobeIcon } from "./Icons";

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useSite();

  return (
    <div className="lang-switch" role="group" aria-label="Choose language">
      {!compact && <GlobeIcon width={16} height={16} aria-hidden="true" />}
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          className={`lang-switch__btn ${l === locale ? "is-active" : ""}`}
          aria-pressed={l === locale}
          aria-label={localeMeta[l].label}
          onClick={() => setLocale(l)}
        >
          {localeMeta[l].short}
        </button>
      ))}
    </div>
  );
}
