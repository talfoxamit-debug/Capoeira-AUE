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

## ✏️ Editing the site (the only file you usually touch)

**`lib/content.ts`** holds every piece of text, the schedule, pricing, contact
links, FAQ, and media paths. Edit it and the whole page updates — no component
code required.

Common edits:

| Want to change…             | Edit in `lib/content.ts`        |
|-----------------------------|---------------------------------|
| Phone / WhatsApp number     | `contact` (replace placeholder) |
| Class days & times          | `schedule.classes`              |
| Prices                      | `pricing`                       |
| FAQ                         | `faq.items`                     |
| Photos & videos             | `hero`, `teacher`, `gallery`    |

> ⚠️ Before going live, replace the placeholder phone number in `contact` with
> Mestre Cobra's real number (used for both the call and WhatsApp links).

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
                    # WhoCanJoin, Gallery, FAQ, Contact, Footer, Header, ...
  JsonLd.tsx        # LocalBusiness / SportsActivityLocation + FAQ structured data
lib/content.ts      # ← all editable content
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
