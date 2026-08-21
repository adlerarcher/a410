# ai410.org

Static Astro site by **Adler Archer** — plain-language **artificial intelligence** explanations. Every lesson is one JSON file.

SEO / LLM citation files: `public/llms.txt`, `public/robots.txt`, `public/humans.txt`. Structured data (Person, WebSite, LearningResource) is emitted from `src/layouts/Base.astro` and `src/data/seo.ts`.

## Add a lesson

Drop a file in `src/data/lessons/`, named `NN-slug.json`:

```json
{
  "number": "09",
  "slug": "your-slug",
  "title": "Headline in plain words",
  "blurb": "One line for the contents page.",
  "paras": [
    { "kid": "The small-words version.", "grown": "The jargon version of the same claim." }
  ]
}
```

Ordering, the contents page, the URL, and the back/next links all follow from `number` and `slug`. Nothing else to touch.

Glossary terms live in `src/data/glossary.json`.

## Run

```bash
npm install
npm run dev
npm run build
```

## Coming-soon mode

```bash
PUBLIC_UNDER_CONSTRUCTION=true npm run dev
PUBLIC_UNDER_CONSTRUCTION=true npm run build
```

## Deploy

Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes to GitHub Pages. `public/CNAME` holds the domain. Set the apex A and AAAA records as with the other domains, then enable Enforce HTTPS.
