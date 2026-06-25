"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  config,
  dictionary,
  DEFAULT_LOCALE,
  LOCALES,
  localeMeta,
  type Dict,
  type Locale,
} from "./content";

const STORAGE_KEY = "ca-locale";

interface SiteContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
  cfg: typeof config;
}

const SiteContext = createContext<SiteContextValue | null>(null);

function normalize(value: string | null | undefined): Locale | null {
  if (!value) return null;
  const lower = value.toLowerCase();
  if (lower.startsWith("es")) return "es";
  if (lower.startsWith("pt")) return "pt";
  if (lower.startsWith("en")) return "en";
  return null;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  // On first load, restore a saved choice or fall back to the browser language.
  useEffect(() => {
    const saved = normalize(typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null);
    const fromBrowser = normalize(typeof navigator !== "undefined" ? navigator.language : null);
    const next = saved ?? fromBrowser;
    if (next && next !== DEFAULT_LOCALE) setLocaleState(next);
  }, []);

  // Keep <html lang> in sync for accessibility + SEO.
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = localeMeta[locale].htmlLang;
    }
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore storage errors (private mode, etc.) */
    }
  }, []);

  const value = useMemo<SiteContextValue>(
    () => ({ locale, setLocale, t: dictionary[locale], cfg: config }),
    [locale, setLocale],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite(): SiteContextValue {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within <LanguageProvider>");
  return ctx;
}

export { LOCALES, localeMeta };
