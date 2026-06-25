# Media — how to replace photos & videos

All visible photos/videos are placeholder illustrations (`.svg`). Swapping in
real media takes two steps:

1. **Drop your file** into the matching folder here in `public/media/`.
2. **Point the content config at it** — open `lib/content.ts` and update the
   `src` path. That's the only file you ever need to edit for content.

You do **not** need to touch any component code.

## Folders

| Folder            | Used for                          | Recommended size        |
|-------------------|-----------------------------------|-------------------------|
| `hero/`           | Big background photo/video        | 1600×900+ (landscape)   |
| `teacher/`        | Photo of Mestre Cobra             | 4:5 portrait, ~800×1000 |
| `gallery/`        | Gallery grid photos & videos      | square ~1000×1000       |
| `og-image.jpg`    | Social-share preview image        | exactly 1200×630        |

All media paths live under `config` in `lib/content.ts`.

## Examples

**Use a hero photo** — add `public/media/hero/hero.jpg`, then in
`config.hero.background`:

```ts
background: {
  type: "image",
  src: "/media/hero/hero.jpg",
  poster: "/media/hero/hero.jpg",
}
```

**Use a hero video** — add `public/media/hero/hero.mp4` (+ a `hero-poster.jpg`):

```ts
background: {
  type: "video",
  src: "/media/hero/hero.mp4",
  poster: "/media/hero/hero-poster.jpg",
}
```

**Replace the teacher photo** — add `public/media/teacher/cobra.jpg`, then set
`config.media.teacherPhoto` to `"/media/teacher/cobra.jpg"`.

**Add a gallery video** — add `public/media/gallery/roda.mp4` and a poster,
then add an item to the `config.gallery` array:

```ts
{ id: "g7", type: "video", src: "/media/gallery/roda.mp4", poster: "/media/gallery/roda.jpg", alt: "Roda" }
```

## Tips
- Prefer `.webp` or optimized `.jpg` for photos, and `.mp4` (H.264) for video.
- Keep file sizes small (compress before uploading) so the page stays fast.
- Always write a short, descriptive `alt` — it helps accessibility and Google.
- You can mix images and videos freely in the gallery.
