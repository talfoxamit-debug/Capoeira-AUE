import {
  site,
  brand,
  location,
  schedule,
  faq,
  contact,
  pricing,
} from "@/lib/content";

/**
 * Structured data for Google + AI assistants:
 *  - SportsActivityLocation (a LocalBusiness subtype) describing the school
 *  - FAQPage built from the FAQ content
 * Rendered as a single JSON-LD script in <head>/<body>.
 */
export default function JsonLd() {
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
    // "8:00 AM" -> "08:00", "6:30 AM" -> "06:30"
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
    knowsLanguage: brand.languages,
    priceRange: "$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${location.name} (${location.detail})`,
      addressLocality: "Fort Lauderdale",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: "Fort Lauderdale",
    },
    founder: {
      "@type": "Person",
      name: brand.teacher,
      jobTitle: "Capoeira Mestre",
      description:
        "Capoeira master from Rio de Janeiro with over 20 years of experience, son of Mestre Danchino.",
    },
    openingHoursSpecification: schedule.classes.map((c) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayMap[c.day],
      opens: to24h(c.time),
    })),
    makesOffer: [
      {
        "@type": "Offer",
        name: "First capoeira class",
        price: "0",
        priceCurrency: "USD",
        description: pricing.firstClass.note,
      },
      {
        "@type": "Offer",
        name: "Drop-in capoeira class",
        price: "20",
        priceCurrency: "USD",
        description: pricing.perClass.note,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
