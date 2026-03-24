# Shrikar Tare — Portfolio

Personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Live URL

**[https://shrikartare.github.io/portfolio/](https://shrikartare.github.io/portfolio/)**

## Tech Stack

- React 19 + TypeScript
- Tailwind CSS v4
- Vite 8
- GitHub Pages (hosting)

## Local Development

```bash
npm install
npm run dev
```

## Deployment

This project uses a **manual** GitHub Actions workflow to deploy to GitHub Pages.

### Steps to deploy:

1. Push this repository to GitHub as `portfolio` (or any name — update `base` in `vite.config.js` to match).
2. In your GitHub repo, go to **Settings → Pages → Source** and select **GitHub Actions**.
3. Go to **Actions → Deploy to GitHub Pages** and click **Run workflow**.
4. Your site will be live at `https://shrikartare.github.io/portfolio/`.

## Build for Production

```bash
npm run build
npm run preview
```
