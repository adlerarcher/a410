# AI410 (`a410`)

Website for **www.ai410.org** — artificial intelligence explained for adults like they are 10 years old.

Built with Astro + Tailwind. Scaffolded from the helloadler.com gateway stack.

## Local development

```bash
npm install
npm run dev
```

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) builds on push to `main` and deploys to GitHub Pages.

1. Enable GitHub Pages → Source: **GitHub Actions**
2. Set custom domain to `www.ai410.org` in repository Settings → Pages
3. Point DNS for `www.ai410.org` (and optionally apex `ai410.org`) to GitHub Pages; `public/CNAME` contains `www.ai410.org`

## Coming-soon mode

```bash
PUBLIC_UNDER_CONSTRUCTION=true npm run dev
PUBLIC_UNDER_CONSTRUCTION=true npm run build
```
