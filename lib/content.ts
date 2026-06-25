/**
 * ============================================================================
 *  SITE CONTENT — EDIT THIS FILE TO UPDATE THE WEBSITE
 * ============================================================================
 *
 *  This is the single source of truth for the Capoeira Auê Fort Lauderdale
 *  landing page. Everything a non-developer is likely to change lives here:
 *  text, schedule, pricing, contact links, and media paths.
 *
 *  HOW TO UPDATE COMMON THINGS
 *  ---------------------------
 *  • Phone / WhatsApp number ....... see `contact` below
 *  • Class days & times ............ see `schedule.classes`
 *  • Prices ........................ see `pricing`
 *  • Photos & videos ............... drop files into /public/media and update
 *                                    the `src` paths in `gallery`, `hero`, and
 *                                    `teacher.photo` (see /public/media/README)
 *
 *  IMPORTANT: replace the placeholder phone number below with the real one.
 *  ============================================================================
 */

export type MediaType = "image" | "video";

export interface GalleryItem {
  type: MediaType;
  /** Path relative to /public, e.g. "/media/gallery/roda-1.jpg" */
  src: string;
  /** Poster image shown before a video plays (videos only) */
  poster?: string;
  /** Describe the image for accessibility + SEO */
  alt: string;
}

/* --------------------------------------------------------------------------
 *  CONTACT  ── replace the placeholder number with Mestre Cobra's real number
 * ------------------------------------------------------------------------ */

const RAW_PHONE = "+19540000000"; // <-- REPLACE with the real number (E.164, e.g. +19541234567)

export const contact = {
  /** Used to build the tel: link and the wa.me link. Keep in E.164 format. */
  phoneE164: RAW_PHONE,
  /** Friendly version shown to visitors. */
  phoneDisplay: "(954) 000-0000", // <-- REPLACE to match the number above
  /** Pre-filled message that opens in WhatsApp when a visitor taps the button. */
  whatsappMessage:
    "Hi Mestre Cobra! I'd like to join a capoeira class with Capoeira Auê in Fort Lauderdale.",
  email: "", // optional — leave "" to hide
};

/** wa.me requires digits only (no +, spaces or symbols). */
export const whatsappLink = `https://wa.me/${contact.phoneE164.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
  contact.whatsappMessage,
)}`;
export const telLink = `tel:${contact.phoneE164}`;

/* --------------------------------------------------------------------------
 *  SITE / SEO
 * ------------------------------------------------------------------------ */

export const site = {
  name: "Capoeira Auê Fort Lauderdale",
  /** Production URL — update when you deploy (used for canonical + OpenGraph). */
  url: "https://capoeiraaue-fortlauderdale.com",
  locale: "en_US",
  title: "Capoeira Classes Fort Lauderdale | Mestre Cobra & Capoeira Auê",
  description:
    "Join capoeira classes in Fort Lauderdale with Mestre Cobra from Rio de Janeiro and Capoeira Auê. First class free. Classes at Holiday Park every Sunday, Tuesday, and Thursday.",
  keywords: [
    "capoeira Fort Lauderdale",
    "capoeira classes Fort Lauderdale",
    "capoeira near me",
    "Brazilian martial art Fort Lauderdale",
    "Mestre Cobra",
    "Capoeira Auê Fort Lauderdale",
  ],
  /** OpenGraph / social share image (1200×630). */
  ogImage: "/media/og-image.svg",
};

/* --------------------------------------------------------------------------
 *  BRAND
 * ------------------------------------------------------------------------ */

export const brand = {
  teacher: "Mestre Cobra",
  group: "Capoeira Auê Fort Lauderdale",
  city: "Fort Lauderdale, FL",
  languages: ["English", "Portuguese", "Spanish"],
};

/* --------------------------------------------------------------------------
 *  LOCATION
 * ------------------------------------------------------------------------ */

export const location = {
  name: "Holiday Park",
  detail: "By the football field",
  city: "Fort Lauderdale, FL",
  full: "Holiday Park — by the football field, Fort Lauderdale, FL",
  /** Used for the "Open in Maps" link. */
  mapsQuery: "Holiday Park Fort Lauderdale football field",
};

/* --------------------------------------------------------------------------
 *  HERO
 * ------------------------------------------------------------------------ */

export const hero = {
  eyebrow: "Capoeira Auê · Fort Lauderdale",
  headline: "Capoeira Classes in Fort Lauderdale",
  subheadline:
    "Train with Mestre Cobra from Rio de Janeiro — movement, music, culture, and community with Capoeira Auê Fort Lauderdale.",
  primaryCta: "Message on WhatsApp",
  secondaryCta: "View Schedule",
  /**
   * Background media for the hero.
   * - To use a VIDEO: set type "video", point `src` to an .mp4 in /public/media
   *   and `poster` to a still frame.
   * - To use a PHOTO: set type "image" and point `src` to a .jpg/.webp.
   */
  background: {
    type: "image" as MediaType,
    src: "/media/hero/hero.svg",
    poster: "/media/hero/hero.svg",
    alt: "Capoeiristas playing in a roda at sunset",
  },
};

/* --------------------------------------------------------------------------
 *  ABOUT CAPOEIRA
 * ------------------------------------------------------------------------ */

export const aboutCapoeira = {
  eyebrow: "The Art",
  heading: "What is Capoeira?",
  paragraphs: [
    "Capoeira is a Brazilian martial art that blends movement, music, acrobatics, and rhythm into one flowing game. Born in Brazil, it is played in a circle called a roda, where two players trade kicks, sweeps, and dodges while everyone around them sings and plays instruments.",
    "It is fitness, self-defense, dance, and culture at the same time — a tradition that builds strength, balance, confidence, and community. No two games are ever the same.",
  ],
  features: [
    { title: "Movement", description: "Kicks, sweeps, flow & acrobatics", icon: "movement" },
    { title: "Music", description: "Berimbau, pandeiro, song & rhythm", icon: "music" },
    { title: "Self-Defense", description: "Awareness, agility & control", icon: "defense" },
    { title: "Community", description: "Culture, friendship & the roda", icon: "community" },
  ],
};

/* --------------------------------------------------------------------------
 *  ABOUT MESTRE COBRA
 * ------------------------------------------------------------------------ */

export const teacher = {
  eyebrow: "Your Teacher",
  name: "Mestre Cobra",
  title: "Mestre · Capoeira Auê · Rio de Janeiro",
  photo: {
    src: "/media/teacher/mestre-cobra.svg",
    alt: "Portrait of Mestre Cobra, capoeira master from Rio de Janeiro",
  },
  bio: [
    "Mestre Cobra is from Rio de Janeiro and brings over 20 years of capoeira experience to every class. He comes from a deep capoeira family lineage — his father, Mestre Danchino, was one of the great masters of the art.",
    "Today, Mestre Cobra teaches in Fort Lauderdale through Capoeira Auê, sharing movement, music, discipline, culture, and community. His classes are warm and welcoming: beginners feel at home, and experienced capoeiristas are challenged to grow.",
  ],
  highlights: [
    { label: "20+ years", detail: "of capoeira experience" },
    { label: "Rio de Janeiro", detail: "born & raised in the home of capoeira" },
    { label: "Family lineage", detail: "son of Mestre Danchino" },
    { label: "3 languages", detail: "English, Portuguese & Spanish" },
  ],
};

/* --------------------------------------------------------------------------
 *  SCHEDULE + PRICING
 * ------------------------------------------------------------------------ */

export const schedule = {
  eyebrow: "Train With Us",
  heading: "Schedule & Pricing",
  classes: [
    { day: "Sunday", time: "8:00 AM", note: "All levels welcome" },
    { day: "Tuesday", time: "6:30 AM", note: "Start your day strong" },
    { day: "Thursday", time: "6:30 AM", note: "Start your day strong" },
  ],
};

export const pricing = {
  firstClass: { label: "First Class", value: "Free", note: "Come try it — no commitment." },
  perClass: { label: "Per Class", value: "$20", note: "Drop in any time after your free class." },
};

/* --------------------------------------------------------------------------
 *  WHO CAN JOIN
 * ------------------------------------------------------------------------ */

export const whoCanJoin = {
  eyebrow: "Everyone's Welcome",
  heading: "Who Can Join",
  groups: [
    {
      title: "First-time beginners",
      description: "Never tried capoeira? Perfect. Your first class is free and we start with the basics.",
      icon: "spark",
    },
    {
      title: "Adults",
      description: "Build strength, flexibility and confidence in a fun, supportive group.",
      icon: "adult",
    },
    {
      title: "Kids & families",
      description: "A joyful way for kids and families to move, play and learn Brazilian culture together.",
      icon: "family",
    },
    {
      title: "Advanced students",
      description: "Experienced capoeiristas are pushed to sharpen technique, music and game.",
      icon: "advanced",
    },
    {
      title: "Private & advanced training",
      description: "Looking for focused one-on-one or small-group sessions? Ask about availability.",
      icon: "private",
    },
  ],
};

/* --------------------------------------------------------------------------
 *  GALLERY
 *  Replace these with real photos/videos. Drop files into /public/media/gallery
 *  and update the `src` paths. Mix images and videos freely.
 * ------------------------------------------------------------------------ */

export const gallery = {
  eyebrow: "The Roda",
  heading: "Moments from Capoeira Auê",
  items: [
    { type: "image", src: "/media/gallery/gallery-1.svg", alt: "Capoeiristas in a roda" },
    { type: "image", src: "/media/gallery/gallery-2.svg", alt: "A high capoeira kick" },
    { type: "image", src: "/media/gallery/gallery-3.svg", alt: "Playing the berimbau" },
    { type: "image", src: "/media/gallery/gallery-4.svg", alt: "Kids learning capoeira" },
    { type: "image", src: "/media/gallery/gallery-5.svg", alt: "Outdoor class at the park" },
    { type: "image", src: "/media/gallery/gallery-6.svg", alt: "Capoeira handstand and flow" },
  ] as GalleryItem[],
};

/* --------------------------------------------------------------------------
 *  FAQ  (also powers the FAQ structured data for Google / AI assistants)
 * ------------------------------------------------------------------------ */

export const faq = {
  eyebrow: "Good to Know",
  heading: "Frequently Asked Questions",
  items: [
    {
      question: "Do I need experience?",
      answer: "No — beginners are always welcome. We start with the fundamentals and build from there, and your first class is free.",
    },
    {
      question: "What should I wear?",
      answer: "Comfortable workout clothes you can move freely in. Most people train barefoot or in light sneakers. Bring water.",
    },
    {
      question: "Where are classes held?",
      answer: "At Holiday Park, by the football field, in Fort Lauderdale, FL. Classes are outdoors — easy to find and free to park.",
    },
    {
      question: "How much does a class cost?",
      answer: "Your first class is completely free. After that it's $20 per class, drop-in.",
    },
    {
      question: "What languages does Mestre Cobra speak?",
      answer: "Mestre Cobra teaches in English, Portuguese, and Spanish.",
    },
    {
      question: "How do I join?",
      answer: "Just message on WhatsApp or call before coming so we know to expect you. Then show up ready to play!",
    },
  ],
};

/* --------------------------------------------------------------------------
 *  CONTACT
 * ------------------------------------------------------------------------ */

export const contactSection = {
  eyebrow: "Get Started",
  heading: "Come Train With Us",
  subheading:
    "Your first class is free. Message on WhatsApp or call before you come so Mestre Cobra knows to expect you.",
  form: {
    enabled: true,
    /**
     * The form opens a pre-filled WhatsApp message by default (no backend needed).
     * If you later add an email service, you can change this behavior in
     * components/Contact.tsx.
     */
    experienceLevels: ["First-timer", "Some experience", "Advanced capoeirista"],
  },
};

/* --------------------------------------------------------------------------
 *  FOOTER
 * ------------------------------------------------------------------------ */

export const footer = {
  tagline: "Capoeira from Rio de Janeiro, taught with heart in Fort Lauderdale.",
  /** Add social links here; leave the array empty to hide the row. */
  social: [
    // { label: "Instagram", href: "https://instagram.com/your-handle" },
    // { label: "Facebook", href: "https://facebook.com/your-page" },
  ] as { label: string; href: string }[],
};
