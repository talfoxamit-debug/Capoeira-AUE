# Capoeira Auê Fort Lauderdale — landing page

A fast, mobile-first one-page site for **Mestre Cobra** and **Capoeira Auê Fort
Lauderdale**. Built with Next.js (App Router) + TypeScript. No database, no CMS —
all content lives in one file so it's easy to maintain.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

## 🌐 Languages (English / Spanish / Portuguese)

The site has a language switcher (EN · ES · PT) in the header. On first visit it
auto-selects the visitor's browser language and remembers their choice.

All text lives in `lib/content.ts`:

- **`config`** — things that are the same in every language (phone, schedule
  times, prices, links, media paths).
- **`dictionary`** — the translated text, with one block per language: `en`,
  `es`, `pt`. To change wording, edit it in all three blocks.

(The search-engine data and page `<title>`/description stay in English, the
primary search target.)

## ✏️ Editing the site

**`lib/content.ts`** is the only file you usually touch.

Common edits:

| Want to change…             | Edit in `lib/content.ts`                    |
|-----------------------------|---------------------------------------------|
| Phone / WhatsApp number     | `config.contact`                            |
| Class days & times          | `config.schedule.classes`                   |
| Prices                      | `config.pricing` + the words in `dictionary`|
| Any text / FAQ              | `dictionary` (`en`, `es`, `pt`)             |
| Photos & videos             | `config.hero`, `config.media`, `config.gallery` |

## 🖼 Replacing photos & videos

See **`public/media/README.md`** — drop your file into `public/media/...` and
update the `src` path in `lib/content.ts`. Placeholders are SVG illustrations so
the site looks complete before you add real media.

## Project structure

```
app/
  layout.tsx        # fonts, SEO metadata, OpenGraph, JSON-LD
  page.tsx          # assembles the sections
  globals.css       # design system (palette in :root)
  robots.ts         # /robots.txt
  sitemap.ts        # /sitemap.xml
components/          # Hero, AboutCapoeira, AboutTeacher, SchedulePricing,
                    # WhoCanJoin, Gallery, FAQ, Contact, Footer, Header,
                    # LanguageSwitcher, ...
  JsonLd.tsx        # LocalBusiness / SportsActivityLocation + FAQ structured data
lib/content.ts      # ← all editable content (config + en/es/pt dictionary)
lib/i18n.tsx        # language provider + useSite() hook (EN/ES/PT switching)
public/media/       # images & videos (with a README on replacing them)
```

## SEO / AIO

- Page title, meta description, keywords, canonical, OpenGraph & Twitter cards.
- JSON-LD structured data: `SportsActivityLocation` (location, hours, prices,
  languages, founder) + `FAQPage` — so Google and AI assistants understand the
  business, schedule, and answers.
- Semantic HTML, accessible labels, and `prefers-reduced-motion` support.

## Deploy

Any Next.js host works (Vercel recommended). After deploying, set the real
production URL in `site.url` inside `lib/content.ts` so canonical links,
OpenGraph, sitemap, and structured data point to the right domain.
