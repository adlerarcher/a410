# helloadler.com (`ha-site`)

Gateway and orientation site for the Adler Archer ecosystem (Astro, Tailwind CSS). Deployed to GitHub Pages with custom domain `helloadler.com`.

The writing corpus lives at [adlerarcher.com](https://adlerarcher.com) — a separate site.

## Local development

```bash
npm install
npm run dev
```

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) builds on push to `main` and deploys to GitHub Pages.

1. Enable GitHub Pages → Source: **GitHub Actions**
2. Set custom domain to `helloadler.com` in repository Settings → Pages
3. Point apex DNS for `helloadler.com` to GitHub Pages; `public/CNAME` contains `helloadler.com`

## Coming-soon mode

```bash
PUBLIC_UNDER_CONSTRUCTION=true npm run dev
PUBLIC_UNDER_CONSTRUCTION=true npm run build
```
