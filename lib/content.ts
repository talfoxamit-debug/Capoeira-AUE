/**
 * ============================================================================
 *  SITE CONTENT — EDIT THIS FILE TO UPDATE THE WEBSITE
 * ============================================================================
 *
 *  The site speaks three languages: English (en), Spanish (es) and
 *  Portuguese (pt). Content is split into two parts:
 *
 *    1. `config`     — things that are the SAME in every language:
 *                      phone number, schedule times, prices, links, media.
 *    2. `dictionary` — the translated TEXT for each language (en / es / pt).
 *
 *  HOW TO UPDATE COMMON THINGS
 *  ---------------------------
 *  • Phone / WhatsApp number ....... `config.contact`
 *  • Class days & times ............ `config.schedule.classes`
 *  • Prices ........................ `config.pricing` + the words in dictionary
 *  • Photos & videos ............... `config.hero`, `config.media`,
 *                                    `config.gallery` (see /public/media/README)
 *  • Any visible text .............. edit it in all three languages inside
 *                                    `dictionary` (en, es, pt)
 *  ============================================================================
 */

/* ========================================================================== */
/*  LANGUAGES                                                                  */
/* ========================================================================== */

export type Locale = "en" | "es" | "pt";
export const LOCALES: Locale[] = ["en", "es", "pt"];
export const DEFAULT_LOCALE: Locale = "en";

export const localeMeta: Record<Locale, { label: string; short: string; htmlLang: string }> = {
  en: { label: "English", short: "EN", htmlLang: "en" },
  es: { label: "Español", short: "ES", htmlLang: "es" },
  pt: { label: "Português", short: "PT", htmlLang: "pt-BR" },
};

/* ========================================================================== */
/*  TYPES                                                                      */
/* ========================================================================== */

export type MediaType = "image" | "video";

export interface GalleryItem {
  id: string;
  type: MediaType;
  /** Path relative to /public, e.g. "/media/gallery/roda-1.jpg" */
  src: string;
  /** Poster image shown before a video plays (videos only) */
  poster?: string;
  /** Describe the image for accessibility + SEO */
  alt: string;
}

/* ========================================================================== */
/*  CONFIG — language-independent (numbers, times, links, media)               */
/* ========================================================================== */

const PHONE_E164 = "+19548728265"; // Mestre Cobra's real number

export const config = {
  site: {
    name: "Capoeira Auê Fort Lauderdale",
    /** Production URL — update when you deploy (canonical + OpenGraph). */
    url: "https://capoeiraaue-fortlauderdale.com",
    /** OpenGraph / social share image (1200×630). */
    ogImage: "/media/og-image.svg",
    /** SEO title + description (English — the primary search target). */
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
  },

  contact: {
    /** Used to build the tel: and wa.me links. Keep E.164 format. */
    phoneE164: PHONE_E164,
    /** Friendly version shown to visitors. */
    phoneDisplay: "(954) 872-8265",
    email: "", // optional — leave "" to hide
  },

  brand: {
    teacher: "Mestre Cobra",
    group: "Capoeira Auê Fort Lauderdale",
  },

  location: {
    name: "Holiday Park",
    city: "Fort Lauderdale, FL",
    /** Used for the "Open in Maps" link. */
    mapsQuery: "Holiday Park Fort Lauderdale football field",
  },

  /** Class days & times. `schemaDay` (English) powers the search-engine data. */
  schedule: {
    classes: [
      { id: "sun", schemaDay: "Sunday", time: "8:00 AM", noteKey: "allLevels" as const },
      { id: "tue", schemaDay: "Tuesday", time: "6:30 AM", noteKey: "morning" as const },
      { id: "thu", schemaDay: "Thursday", time: "6:30 AM", noteKey: "morning" as const },
    ],
  },

  pricing: {
    /** Numeric price shown on the paid card. The "Free" wording is translated. */
    perClass: "$20",
  },

  hero: {
    /**
     * Hero background.
     * - VIDEO: type "video", `src` → .mp4 in /public/media, `poster` → still.
     * - PHOTO: type "image", `src` → .jpg/.webp.
     */
    background: {
      type: "image" as MediaType,
      src: "/media/hero/hero.svg",
      poster: "/media/hero/hero.svg",
    },
  },

  media: {
    teacherPhoto: "/media/teacher/mestre-cobra.svg",
  },

  /** Gallery media. Mix images and videos freely; drop files in /public/media. */
  gallery: [
    { id: "g1", type: "image", src: "/media/gallery/gallery-1.svg", alt: "Capoeiristas in a roda" },
    { id: "g2", type: "image", src: "/media/gallery/gallery-2.svg", alt: "A high capoeira kick" },
    { id: "g3", type: "image", src: "/media/gallery/gallery-3.svg", alt: "Playing the berimbau" },
    { id: "g4", type: "image", src: "/media/gallery/gallery-4.svg", alt: "Kids learning capoeira" },
    { id: "g5", type: "image", src: "/media/gallery/gallery-5.svg", alt: "Outdoor class at the park" },
    { id: "g6", type: "image", src: "/media/gallery/gallery-6.svg", alt: "Capoeira handstand and flow" },
  ] as GalleryItem[],

  /** Icons (by key) for the "About Capoeira" feature tiles, in display order. */
  features: [
    { id: "movement", icon: "movement" },
    { id: "music", icon: "music" },
    { id: "defense", icon: "defense" },
    { id: "community", icon: "community" },
  ],

  /** Icons (by key) for the "Who Can Join" cards, in display order. */
  whoGroups: [
    { id: "beginners", icon: "spark" },
    { id: "adults", icon: "adult" },
    { id: "kids", icon: "family" },
    { id: "advanced", icon: "advanced" },
    { id: "private", icon: "private" },
  ],

  /** Social links — add some to show the row in the footer; empty = hidden. */
  social: [] as { label: string; href: string }[],
};

/* ---- Link helpers ---- */

const phoneDigits = config.contact.phoneE164.replace(/[^0-9]/g, "");
export const telLink = `tel:${config.contact.phoneE164}`;
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  config.location.mapsQuery,
)}`;
/** Build a wa.me link with a (localized) pre-filled message. */
export const whatsappHref = (message: string) =>
  `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;

/* ========================================================================== */
/*  DICTIONARY — translated text (en / es / pt)                                */
/* ========================================================================== */

export interface Dict {
  languagesLine: string; // e.g. "English · Portuguese · Spanish"
  nav: { capoeira: string; teacher: string; schedule: string; gallery: string; faq: string };
  buttons: { whatsapp: string; call: string };
  hero: {
    eyebrow: string;
    headlinePre: string;
    headlineAccent: string;
    sub: string;
    ctaWhatsapp: string;
    ctaCall: string;
    ctaSchedule: string;
    metaDays: string;
  };
  aboutCapoeira: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    features: Record<string, { title: string; description: string }>;
  };
  teacher: {
    eyebrow: string;
    role: string;
    bio: string[];
    badgeLabel: string;
    badgeValue: string;
    highlights: { label: string; detail: string }[];
  };
  schedule: {
    eyebrow: string;
    heading: string;
    intro: string;
    days: Record<string, string>;
    notes: { allLevels: string; morning: string };
    locationDetail: string;
    openInMaps: string;
  };
  pricing: {
    firstLabel: string;
    firstValue: string;
    firstNote: string;
    perLabel: string;
    perNote: string;
  };
  who: {
    eyebrow: string;
    heading: string;
    intro: string;
    groups: Record<string, { title: string; description: string }>;
  };
  gallery: { eyebrow: string; heading: string; intro: string; playLabel: string };
  faq: { eyebrow: string; heading: string; items: { q: string; a: string }[] };
  contact: {
    eyebrow: string;
    heading: string;
    subheading: string;
    waSmall: string;
    waLabel: string;
    callSmall: string;
    whereSmall: string;
    locationFull: string;
    whatsappMessage: string; // default message for the big WhatsApp buttons
    form: {
      title: string;
      intro: string;
      name: string;
      namePh: string;
      contact: string;
      contactPh: string;
      level: string;
      levelPh: string;
      levels: string[];
      message: string;
      messagePh: string;
      submit: string;
      hintIdle: string;
      hintSubmitted: string;
      // labels used when assembling the WhatsApp message from the form
      msgIntro: string;
      msgName: string;
      msgContact: string;
      msgLevel: string;
      msgMessage: string;
    };
  };
  footer: { tagline: string; trainHeading: string; connectHeading: string; languagesLabel: string; rights: string };
}

const en: Dict = {
  languagesLine: "English · Portuguese · Spanish",
  nav: { capoeira: "Capoeira", teacher: "Mestre Cobra", schedule: "Schedule", gallery: "Gallery", faq: "FAQ" },
  buttons: { whatsapp: "WhatsApp", call: "Call" },
  hero: {
    eyebrow: "Capoeira Auê · Fort Lauderdale",
    headlinePre: "Capoeira Classes in",
    headlineAccent: "Fort Lauderdale",
    sub: "Train with Mestre Cobra from Rio de Janeiro — movement, music, culture, and community with Capoeira Auê Fort Lauderdale.",
    ctaWhatsapp: "Message on WhatsApp",
    ctaCall: "Call Now",
    ctaSchedule: "View Schedule",
    metaDays: "Sun, Tue & Thu",
  },
  aboutCapoeira: {
    eyebrow: "The Art",
    heading: "What is Capoeira?",
    paragraphs: [
      "Capoeira is a Brazilian martial art that blends movement, music, acrobatics, and rhythm into one flowing game. Born in Brazil, it is played in a circle called a roda, where two players trade kicks, sweeps, and dodges while everyone around them sings and plays instruments.",
      "It is fitness, self-defense, dance, and culture at the same time — a tradition that builds strength, balance, confidence, and community. No two games are ever the same.",
    ],
    features: {
      movement: { title: "Movement", description: "Kicks, sweeps, flow & acrobatics" },
      music: { title: "Music", description: "Berimbau, pandeiro, song & rhythm" },
      defense: { title: "Self-Defense", description: "Awareness, agility & control" },
      community: { title: "Community", description: "Culture, friendship & the roda" },
    },
  },
  teacher: {
    eyebrow: "Your Teacher",
    role: "Mestre · Capoeira Auê · Rio de Janeiro",
    bio: [
      "Mestre Cobra is from Rio de Janeiro and brings over 20 years of capoeira experience to every class. He comes from a deep capoeira family lineage — his father, Mestre Danchino, was one of the great masters of the art.",
      "Today, Mestre Cobra teaches in Fort Lauderdale through Capoeira Auê, sharing movement, music, discipline, culture, and community. His classes are warm and welcoming: beginners feel at home, and experienced capoeiristas are challenged to grow.",
    ],
    badgeLabel: "Experience",
    badgeValue: "20+ years",
    highlights: [
      { label: "20+ years", detail: "of capoeira experience" },
      { label: "Rio de Janeiro", detail: "born & raised in the home of capoeira" },
      { label: "Family lineage", detail: "son of Mestre Danchino" },
      { label: "3 languages", detail: "English, Portuguese & Spanish" },
    ],
  },
  schedule: {
    eyebrow: "Train With Us",
    heading: "Schedule & Pricing",
    intro: "Classes run every week, rain or shine, outdoors at the park. Your first class is on us.",
    days: { sun: "Sunday", tue: "Tuesday", thu: "Thursday" },
    notes: { allLevels: "All levels welcome", morning: "Start your day strong" },
    locationDetail: "By the football field",
    openInMaps: "Open in Maps",
  },
  pricing: {
    firstLabel: "First Class",
    firstValue: "Free",
    firstNote: "Come try it — no commitment.",
    perLabel: "Per Class",
    perNote: "Drop in any time after your free class.",
  },
  who: {
    eyebrow: "Everyone's Welcome",
    heading: "Who Can Join",
    intro: "Capoeira meets you where you are. Whatever your age or level, there's a place for you in the roda.",
    groups: {
      beginners: {
        title: "First-time beginners",
        description: "Never tried capoeira? Perfect. Your first class is free and we start with the basics.",
      },
      adults: { title: "Adults", description: "Build strength, flexibility and confidence in a fun, supportive group." },
      kids: {
        title: "Kids & families",
        description: "A joyful way for kids and families to move, play and learn Brazilian culture together.",
      },
      advanced: {
        title: "Advanced students",
        description: "Experienced capoeiristas are pushed to sharpen technique, music and game.",
      },
      private: {
        title: "Private & advanced training",
        description: "Looking for focused one-on-one or small-group sessions? Ask about availability.",
      },
    },
  },
  gallery: {
    eyebrow: "The Roda",
    heading: "Moments from Capoeira Auê",
    intro: "A glimpse of training, music, and play with Capoeira Auê. Real photos and video drop right in here.",
    playLabel: "Play video",
  },
  faq: {
    eyebrow: "Good to Know",
    heading: "Frequently Asked Questions",
    items: [
      { q: "Do I need experience?", a: "No — beginners are always welcome. We start with the fundamentals and build from there, and your first class is free." },
      { q: "What should I wear?", a: "Comfortable workout clothes you can move freely in. Most people train barefoot or in light sneakers. Bring water." },
      { q: "Where are classes held?", a: "At Holiday Park, by the football field, in Fort Lauderdale, FL. Classes are outdoors — easy to find and free to park." },
      { q: "How much does a class cost?", a: "Your first class is completely free. After that it's $20 per class, drop-in." },
      { q: "What languages does Mestre Cobra speak?", a: "Mestre Cobra teaches in English, Portuguese, and Spanish." },
      { q: "How do I join?", a: "Just message on WhatsApp or call before coming so we know to expect you. Then show up ready to play!" },
    ],
  },
  contact: {
    eyebrow: "Get Started",
    heading: "Come Train With Us",
    subheading: "Your first class is free. Message on WhatsApp or call before you come so Mestre Cobra knows to expect you.",
    waSmall: "Best way to reach us",
    waLabel: "Message on WhatsApp",
    callSmall: "Prefer to call?",
    whereSmall: "Where we train",
    locationFull: "Holiday Park — by the football field, Fort Lauderdale, FL",
    whatsappMessage: "Hi Mestre Cobra! I'd like to join a capoeira class with Capoeira Auê in Fort Lauderdale.",
    form: {
      title: "Send a quick message",
      intro: "Fill this in and we'll open WhatsApp with your details ready to send.",
      name: "Name",
      namePh: "Your name",
      contact: "Phone or email",
      contactPh: "How can we reach you?",
      level: "Experience level",
      levelPh: "Choose one…",
      levels: ["First-timer", "Some experience", "Advanced capoeirista"],
      message: "Message",
      messagePh: "Tell us a little about what you're looking for (optional)",
      submit: "Send via WhatsApp",
      hintIdle: "Opens WhatsApp with your message pre-filled. No account or sign-up needed.",
      hintSubmitted: "Opening WhatsApp… if nothing happened, tap the WhatsApp button above.",
      msgIntro: "Hi Mestre Cobra! I'd like to join a capoeira class.",
      msgName: "Name",
      msgContact: "Contact",
      msgLevel: "Experience",
      msgMessage: "Message",
    },
  },
  footer: {
    tagline: "Capoeira from Rio de Janeiro, taught with heart in Fort Lauderdale.",
    trainHeading: "Train",
    connectHeading: "Connect",
    languagesLabel: "Languages",
    rights: "Taught by Mestre Cobra.",
  },
};

const es: Dict = {
  languagesLine: "Inglés · Portugués · Español",
  nav: { capoeira: "Capoeira", teacher: "Mestre Cobra", schedule: "Horario", gallery: "Galería", faq: "Preguntas" },
  buttons: { whatsapp: "WhatsApp", call: "Llamar" },
  hero: {
    eyebrow: "Capoeira Auê · Fort Lauderdale",
    headlinePre: "Clases de Capoeira en",
    headlineAccent: "Fort Lauderdale",
    sub: "Entrena con Mestre Cobra, de Río de Janeiro — movimiento, música, cultura y comunidad con Capoeira Auê Fort Lauderdale.",
    ctaWhatsapp: "Escribir por WhatsApp",
    ctaCall: "Llamar ahora",
    ctaSchedule: "Ver horario",
    metaDays: "Dom, Mar y Jue",
  },
  aboutCapoeira: {
    eyebrow: "El Arte",
    heading: "¿Qué es la Capoeira?",
    paragraphs: [
      "La capoeira es un arte marcial brasileño que combina movimiento, música, acrobacia y ritmo en un mismo juego fluido. Nacida en Brasil, se juega en un círculo llamado roda, donde dos personas intercambian patadas, barridas y esquivas mientras los demás cantan y tocan instrumentos.",
      "Es ejercicio, defensa personal, danza y cultura al mismo tiempo — una tradición que desarrolla fuerza, equilibrio, confianza y comunidad. No hay dos juegos iguales.",
    ],
    features: {
      movement: { title: "Movimiento", description: "Patadas, barridas, fluidez y acrobacia" },
      music: { title: "Música", description: "Berimbau, pandeiro, canto y ritmo" },
      defense: { title: "Defensa personal", description: "Atención, agilidad y control" },
      community: { title: "Comunidad", description: "Cultura, amistad y la roda" },
    },
  },
  teacher: {
    eyebrow: "Tu Profesor",
    role: "Mestre · Capoeira Auê · Río de Janeiro",
    bio: [
      "Mestre Cobra es de Río de Janeiro y aporta más de 20 años de experiencia en capoeira a cada clase. Proviene de un profundo linaje familiar de capoeira: su padre, Mestre Danchino, fue uno de los grandes maestros del arte.",
      "Hoy, Mestre Cobra enseña en Fort Lauderdale a través de Capoeira Auê, compartiendo movimiento, música, disciplina, cultura y comunidad. Sus clases son cálidas y acogedoras: los principiantes se sienten como en casa y los capoeiristas con experiencia encuentran nuevos retos.",
    ],
    badgeLabel: "Experiencia",
    badgeValue: "+20 años",
    highlights: [
      { label: "+20 años", detail: "de experiencia en capoeira" },
      { label: "Río de Janeiro", detail: "nacido en la cuna de la capoeira" },
      { label: "Linaje familiar", detail: "hijo de Mestre Danchino" },
      { label: "3 idiomas", detail: "inglés, portugués y español" },
    ],
  },
  schedule: {
    eyebrow: "Entrena Con Nosotros",
    heading: "Horario y Precios",
    intro: "Las clases son todas las semanas, llueva o haga sol, al aire libre en el parque. La primera clase es gratis.",
    days: { sun: "Domingo", tue: "Martes", thu: "Jueves" },
    notes: { allLevels: "Todos los niveles", morning: "Empieza el día con energía" },
    locationDetail: "Junto a la cancha de fútbol americano",
    openInMaps: "Abrir en Maps",
  },
  pricing: {
    firstLabel: "Primera clase",
    firstValue: "Gratis",
    firstNote: "Ven a probar — sin compromiso.",
    perLabel: "Por clase",
    perNote: "Ven cuando quieras después de tu clase gratis.",
  },
  who: {
    eyebrow: "Todos Son Bienvenidos",
    heading: "Quién Puede Unirse",
    intro: "La capoeira te recibe tal como estás. Sea cual sea tu edad o nivel, hay un lugar para ti en la roda.",
    groups: {
      beginners: {
        title: "Principiantes",
        description: "¿Nunca has hecho capoeira? Perfecto. Tu primera clase es gratis y empezamos por lo básico.",
      },
      adults: { title: "Adultos", description: "Gana fuerza, flexibilidad y confianza en un grupo divertido y solidario." },
      kids: {
        title: "Niños y familias",
        description: "Una forma alegre de que niños y familias se muevan, jueguen y aprendan cultura brasileña juntos.",
      },
      advanced: {
        title: "Estudiantes avanzados",
        description: "Los capoeiristas con experiencia perfeccionan técnica, música y juego.",
      },
      private: {
        title: "Entrenamiento privado o avanzado",
        description: "¿Buscas sesiones individuales o en grupo reducido? Pregunta por la disponibilidad.",
      },
    },
  },
  gallery: {
    eyebrow: "La Roda",
    heading: "Momentos de Capoeira Auê",
    intro: "Un vistazo al entrenamiento, la música y el juego con Capoeira Auê. Aquí se pueden añadir fotos y videos reales.",
    playLabel: "Reproducir video",
  },
  faq: {
    eyebrow: "Bueno Saber",
    heading: "Preguntas Frecuentes",
    items: [
      { q: "¿Necesito experiencia?", a: "No — los principiantes siempre son bienvenidos. Empezamos por los fundamentos y avanzamos desde ahí, y tu primera clase es gratis." },
      { q: "¿Qué debo llevar puesto?", a: "Ropa cómoda de ejercicio con la que te puedas mover libremente. La mayoría entrena descalzo o con zapatillas ligeras. Trae agua." },
      { q: "¿Dónde son las clases?", a: "En Holiday Park, junto a la cancha de fútbol americano, en Fort Lauderdale, FL. Son al aire libre, fáciles de encontrar y con estacionamiento gratis." },
      { q: "¿Cuánto cuesta una clase?", a: "Tu primera clase es totalmente gratis. Después son $20 por clase, sin compromiso." },
      { q: "¿Qué idiomas habla Mestre Cobra?", a: "Mestre Cobra enseña en inglés, portugués y español." },
      { q: "¿Cómo me uno?", a: "Solo escríbenos por WhatsApp o llama antes de venir para que te esperemos. ¡Luego ven listo para jugar!" },
    ],
  },
  contact: {
    eyebrow: "Empieza Hoy",
    heading: "Ven a Entrenar Con Nosotros",
    subheading: "Tu primera clase es gratis. Escríbenos por WhatsApp o llama antes de venir para que Mestre Cobra te espere.",
    waSmall: "La mejor forma de contactarnos",
    waLabel: "Escribir por WhatsApp",
    callSmall: "¿Prefieres llamar?",
    whereSmall: "Dónde entrenamos",
    locationFull: "Holiday Park — junto a la cancha de fútbol americano, Fort Lauderdale, FL",
    whatsappMessage: "¡Hola Mestre Cobra! Me gustaría unirme a una clase de capoeira con Capoeira Auê en Fort Lauderdale.",
    form: {
      title: "Envía un mensaje rápido",
      intro: "Complétalo y abriremos WhatsApp con tus datos listos para enviar.",
      name: "Nombre",
      namePh: "Tu nombre",
      contact: "Teléfono o correo",
      contactPh: "¿Cómo te contactamos?",
      level: "Nivel de experiencia",
      levelPh: "Elige una opción…",
      levels: ["Primera vez", "Algo de experiencia", "Capoeirista avanzado"],
      message: "Mensaje",
      messagePh: "Cuéntanos un poco qué estás buscando (opcional)",
      submit: "Enviar por WhatsApp",
      hintIdle: "Abre WhatsApp con tu mensaje listo. No necesitas cuenta ni registro.",
      hintSubmitted: "Abriendo WhatsApp… si no pasó nada, toca el botón de WhatsApp de arriba.",
      msgIntro: "¡Hola Mestre Cobra! Me gustaría unirme a una clase de capoeira.",
      msgName: "Nombre",
      msgContact: "Contacto",
      msgLevel: "Experiencia",
      msgMessage: "Mensaje",
    },
  },
  footer: {
    tagline: "Capoeira de Río de Janeiro, enseñada con corazón en Fort Lauderdale.",
    trainHeading: "Entrena",
    connectHeading: "Contacto",
    languagesLabel: "Idiomas",
    rights: "Enseñada por Mestre Cobra.",
  },
};

const pt: Dict = {
  languagesLine: "Inglês · Português · Espanhol",
  nav: { capoeira: "Capoeira", teacher: "Mestre Cobra", schedule: "Horários", gallery: "Galeria", faq: "Dúvidas" },
  buttons: { whatsapp: "WhatsApp", call: "Ligar" },
  hero: {
    eyebrow: "Capoeira Auê · Fort Lauderdale",
    headlinePre: "Aulas de Capoeira em",
    headlineAccent: "Fort Lauderdale",
    sub: "Treine com o Mestre Cobra, do Rio de Janeiro — movimento, música, cultura e comunidade com a Capoeira Auê Fort Lauderdale.",
    ctaWhatsapp: "Falar no WhatsApp",
    ctaCall: "Ligar agora",
    ctaSchedule: "Ver horários",
    metaDays: "Dom, Ter e Qui",
  },
  aboutCapoeira: {
    eyebrow: "A Arte",
    heading: "O que é Capoeira?",
    paragraphs: [
      "A capoeira é uma arte marcial brasileira que une movimento, música, acrobacia e ritmo em um só jogo fluido. Nascida no Brasil, é jogada em um círculo chamado roda, onde dois jogadores trocam golpes, rasteiras e esquivas enquanto todos ao redor cantam e tocam instrumentos.",
      "É exercício, defesa pessoal, dança e cultura ao mesmo tempo — uma tradição que desenvolve força, equilíbrio, confiança e comunidade. Não existem dois jogos iguais.",
    ],
    features: {
      movement: { title: "Movimento", description: "Golpes, rasteiras, ginga e acrobacia" },
      music: { title: "Música", description: "Berimbau, pandeiro, canto e ritmo" },
      defense: { title: "Defesa pessoal", description: "Atenção, agilidade e controle" },
      community: { title: "Comunidade", description: "Cultura, amizade e a roda" },
    },
  },
  teacher: {
    eyebrow: "Seu Professor",
    role: "Mestre · Capoeira Auê · Rio de Janeiro",
    bio: [
      "O Mestre Cobra é do Rio de Janeiro e traz mais de 20 anos de experiência em capoeira para cada aula. Vem de uma profunda linhagem familiar de capoeira — seu pai, Mestre Danchino, foi um dos grandes mestres da arte.",
      "Hoje, o Mestre Cobra ensina em Fort Lauderdale através da Capoeira Auê, compartilhando movimento, música, disciplina, cultura e comunidade. Suas aulas são acolhedoras: iniciantes se sentem em casa e capoeiristas experientes são desafiados a evoluir.",
    ],
    badgeLabel: "Experiência",
    badgeValue: "+20 anos",
    highlights: [
      { label: "+20 anos", detail: "de experiência em capoeira" },
      { label: "Rio de Janeiro", detail: "nascido no berço da capoeira" },
      { label: "Linhagem familiar", detail: "filho do Mestre Danchino" },
      { label: "3 idiomas", detail: "inglês, português e espanhol" },
    ],
  },
  schedule: {
    eyebrow: "Treine Conosco",
    heading: "Horários e Preços",
    intro: "As aulas acontecem toda semana, com chuva ou sol, ao ar livre no parque. A primeira aula é por nossa conta.",
    days: { sun: "Domingo", tue: "Terça-feira", thu: "Quinta-feira" },
    notes: { allLevels: "Todos os níveis", morning: "Comece o dia com energia" },
    locationDetail: "Ao lado do campo de futebol americano",
    openInMaps: "Abrir no Maps",
  },
  pricing: {
    firstLabel: "Primeira aula",
    firstValue: "Grátis",
    firstNote: "Venha experimentar — sem compromisso.",
    perLabel: "Por aula",
    perNote: "Venha quando quiser depois da aula grátis.",
  },
  who: {
    eyebrow: "Todos São Bem-Vindos",
    heading: "Quem Pode Participar",
    intro: "A capoeira recebe você do jeito que você está. Seja qual for sua idade ou nível, há um lugar para você na roda.",
    groups: {
      beginners: {
        title: "Iniciantes",
        description: "Nunca fez capoeira? Perfeito. Sua primeira aula é grátis e começamos pelo básico.",
      },
      adults: { title: "Adultos", description: "Ganhe força, flexibilidade e confiança em um grupo divertido e acolhedor." },
      kids: {
        title: "Crianças e famílias",
        description: "Um jeito alegre de crianças e famílias se moverem, brincarem e aprenderem cultura brasileira juntas.",
      },
      advanced: {
        title: "Alunos avançados",
        description: "Capoeiristas experientes aprimoram técnica, música e jogo.",
      },
      private: {
        title: "Treino particular ou avançado",
        description: "Procura aulas individuais ou em pequenos grupos? Pergunte sobre a disponibilidade.",
      },
    },
  },
  gallery: {
    eyebrow: "A Roda",
    heading: "Momentos da Capoeira Auê",
    intro: "Um pouco do treino, da música e do jogo com a Capoeira Auê. Fotos e vídeos reais entram aqui facilmente.",
    playLabel: "Reproduzir vídeo",
  },
  faq: {
    eyebrow: "Bom Saber",
    heading: "Perguntas Frequentes",
    items: [
      { q: "Preciso ter experiência?", a: "Não — iniciantes são sempre bem-vindos. Começamos pelos fundamentos e evoluímos a partir daí, e sua primeira aula é grátis." },
      { q: "O que devo vestir?", a: "Roupa confortável de treino, em que você consiga se mover livremente. A maioria treina descalço ou com tênis leve. Traga água." },
      { q: "Onde são as aulas?", a: "No Holiday Park, ao lado do campo de futebol americano, em Fort Lauderdale, FL. As aulas são ao ar livre — fácil de achar e com estacionamento grátis." },
      { q: "Quanto custa uma aula?", a: "Sua primeira aula é totalmente grátis. Depois são $20 por aula, sem compromisso." },
      { q: "Quais idiomas o Mestre Cobra fala?", a: "O Mestre Cobra ensina em inglês, português e espanhol." },
      { q: "Como faço para participar?", a: "É só mandar mensagem no WhatsApp ou ligar antes de vir, para sabermos que você está chegando. Depois é só aparecer pronto para jogar!" },
    ],
  },
  contact: {
    eyebrow: "Comece Agora",
    heading: "Venha Treinar Conosco",
    subheading: "Sua primeira aula é grátis. Mande mensagem no WhatsApp ou ligue antes de vir, para o Mestre Cobra te esperar.",
    waSmall: "Melhor forma de falar com a gente",
    waLabel: "Falar no WhatsApp",
    callSmall: "Prefere ligar?",
    whereSmall: "Onde treinamos",
    locationFull: "Holiday Park — ao lado do campo de futebol americano, Fort Lauderdale, FL",
    whatsappMessage: "Olá Mestre Cobra! Gostaria de participar de uma aula de capoeira com a Capoeira Auê em Fort Lauderdale.",
    form: {
      title: "Mande uma mensagem rápida",
      intro: "Preencha aqui e abriremos o WhatsApp com seus dados prontos para enviar.",
      name: "Nome",
      namePh: "Seu nome",
      contact: "Telefone ou e-mail",
      contactPh: "Como podemos falar com você?",
      level: "Nível de experiência",
      levelPh: "Escolha uma opção…",
      levels: ["Primeira vez", "Alguma experiência", "Capoeirista avançado"],
      message: "Mensagem",
      messagePh: "Conte um pouco do que você procura (opcional)",
      submit: "Enviar pelo WhatsApp",
      hintIdle: "Abre o WhatsApp com sua mensagem pronta. Sem conta ou cadastro.",
      hintSubmitted: "Abrindo o WhatsApp… se nada aconteceu, toque no botão do WhatsApp acima.",
      msgIntro: "Olá Mestre Cobra! Gostaria de participar de uma aula de capoeira.",
      msgName: "Nome",
      msgContact: "Contato",
      msgLevel: "Experiência",
      msgMessage: "Mensagem",
    },
  },
  footer: {
    tagline: "Capoeira do Rio de Janeiro, ensinada com o coração em Fort Lauderdale.",
    trainHeading: "Treine",
    connectHeading: "Contato",
    languagesLabel: "Idiomas",
    rights: "Ensinada pelo Mestre Cobra.",
  },
};

export const dictionary: Record<Locale, Dict> = { en, es, pt };
