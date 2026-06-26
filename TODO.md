# To-Do — Capoeira Auê Fort Lauderdale website

A running checklist of what's left. Most of the site is done and live on Vercel;
these are the remaining steps and nice-to-haves.

## 🔴 Do next (important)

- [ ] **Buy a domain (custom web address).**
      Recommended: **capoeirafortlauderdale.com** (~$11.25/year).
      Full options, prices, and a plain-Portuguese explanation for Mestre Cobra
      are in **[GUIA-DOMINIO.md](./GUIA-DOMINIO.md)**.
- [ ] **Connect the domain to the site.** In Vercel → your project → *Settings →
      Domains*, add the domain and follow the DNS steps. Then add an environment
      variable `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`
      (*Settings → Environment Variables*) and redeploy, so links / Google /
      share previews use the real address.
- [ ] **Turn on the live Instagram feed.** Create a free feed at
      [behold.so](https://behold.so) for **@capoeira_aue**, copy the Feed ID, and
      paste it into `config.instagramFeedId` in `lib/content.ts`. (Until then, the
      Instagram section shows the curated photo grid.)

## 🟡 Nice to have

- [ ] Add a **Facebook** (or other) social link in `config.social`.
- [ ] Swap the hero photo for a short **hero video** (`config.hero.background`).
- [ ] Add **Google Analytics**: paste a `G-XXXXXXXX` id into `config.analytics.gaId`.
- [ ] Collect/feature **real testimonials** and ask happy students for **Google reviews**.
- [ ] Claim/confirm the **Google Business Profile** and confirm the class address
      (the brief says Holiday Park; the Google listing shows 1215 NE 17th Ct).

## ℹ️ How to edit the site

- Everything (text, schedule, prices, contact, photos, languages) lives in
  **`lib/content.ts`** — `config` for shared data, `dictionary` for EN/ES/PT text.
- The site **auto-deploys to Vercel** on every push to the branch.
- Replacing photos/videos: see `public/media/README.md`.
