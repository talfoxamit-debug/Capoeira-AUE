import Script from "next/script";
import { config } from "@/lib/content";

/**
 * Google Analytics 4 — only renders when `config.analytics.gaId` is set
 * (e.g. "G-XXXXXXXX"). Leave it empty to keep analytics off.
 */
export default function Analytics() {
  const id = config.analytics.gaId;
  if (!id) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}');`}
      </Script>
    </>
  );
}
