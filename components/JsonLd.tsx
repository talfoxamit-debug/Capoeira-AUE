import { config, dictionary } from "@/lib/content";

/**
 * Structured data for Google + AI assistants:
 *  - SportsActivityLocation (a LocalBusiness subtype) describing the school
 *  - FAQPage built from the FAQ content
 * Rendered in English (the primary search language) regardless of the
 * visitor's selected on-page language.
 */
export default function JsonLd() {
  const { site, brand, location, schedule, contact } = config;
  const en = dictionary.en;

  const dayMap: Record<string, string> = {
    Sunday: "https://schema.org/Sunday",
    Monday: "https://schema.org/Monday",
    Tuesday: "https://schema.org/Tuesday",
    Wednesday: "https://schema.org/Wednesday",
    Thursday: "https://schema.org/Thursday",
    Friday: "https://schema.org/Friday",
    Saturday: "https://schema.org/Saturday",
  };

  const to24h = (time: string) => {
    const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!match) return "00:00";
    let h = parseInt(match[1], 10);
    const m = match[2];
    const period = match[3].toUpperCase();
    if (period === "PM" && h !== 12) h += 12;
    if (period === "AM" && h === 12) h = 0;
    return `${String(h).padStart(2, "0")}:${m}`;
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "@id": `${site.url}/#organization`,
    name: brand.group,
    description: site.description,
    url: site.url,
    telephone: contact.phoneE164,
    image: `${site.url}${site.ogImage}`,
    sport: "Capoeira",
    knowsLanguage: ["English", "Portuguese", "Spanish"],
    priceRange: "$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${location.name} (${en.schedule.locationDetail})`,
      addressLocality: "Fort Lauderdale",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: { "@type": "City", name: "Fort Lauderdale" },
    founder: {
      "@type": "Person",
      name: brand.teacher,
      jobTitle: "Capoeira Mestre",
      description: "Capoeira master from Rio de Janeiro with over 20 years of experience, son of Mestre Danchino.",
    },
    openingHoursSpecification: schedule.classes.map((c) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayMap[c.schemaDay],
      opens: to24h(c.time),
    })),
    makesOffer: [
      {
        "@type": "Offer",
        name: "First capoeira class",
        price: "0",
        priceCurrency: "USD",
        description: en.pricing.firstNote,
      },
      {
        "@type": "Offer",
        name: "Drop-in capoeira class",
        price: "20",
        priceCurrency: "USD",
        description: en.pricing.perNote,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: en.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
