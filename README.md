# Xianhua Cai — Academic Personal Website

A minimalist academic personal website built from the contents of Xianhua Cai's CV.

## Tech stack

- Next.js 15
- TypeScript
- Tailwind CSS 4
- Static export for GitHub Pages

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

Next.js writes the static website to the `out` directory.

## Deploy to GitHub Pages

This repository includes a GitHub Actions workflow at
`.github/workflows/deploy.yml`.

1. Push the repository to the `main` branch of
   `cccccxhua/cccccxhua.github.io`.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Open the **Actions** tab and allow the `Deploy to GitHub Pages` workflow
   to finish.
5. The website will be published at
   [https://cccccxhua.github.io](https://cccccxhua.github.io).

The workflow rebuilds and deploys the website whenever `main` is updated.

## Content policy

All biographical and academic content on the website is derived from the
provided CV. The original CV is excluded from Git so that its full address,
telephone number, and referee contact details are not published accidentally.
