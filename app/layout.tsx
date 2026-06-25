import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import { config } from "@/lib/content";
import { LanguageProvider } from "@/lib/i18n";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";
import "./globals.css";

const site = config.site;

const display = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0d4f36",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: site.keywords,
  alternates: { canonical: "/" },
  applicationName: site.name,
  authors: [{ name: "Mestre Cobra" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES", "pt_BR"],
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "Capoeira Auê Fort Lauderdale — capoeira classes with Mestre Cobra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImage],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        {/* Without JS the scroll-reveal animation can't run, so make sure
            everything is fully visible for no-JS users and crawlers. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
        <JsonLd />
        <Analytics />
      </body>
    </html>
  );
}
