# Shrikar Tare — Portfolio

Personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Live URL

**[https://shrikartare.github.io/shrikar-portfolio/](https://shrikartare.github.io/shrikar-portfolio/)**

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

Open [http://localhost:5173/shrikar-portfolio/](http://localhost:5173/shrikar-portfolio/) (Vite `base` is `/shrikar-portfolio/`).

## Build for Production

```bash
npm run build
npm run preview
```

Output is written to the `dist/` folder.

## Deployment (GitHub Pages)

This project deploys via **GitHub Actions**.

### First-time setup

1. Push this repository to GitHub as `shrikar-portfolio` (e.g. `shrikartare/shrikar-portfolio`).
2. In **Settings → Pages → Source**, select **GitHub Actions**.
3. Push to `main` or run manually:
   - **Actions → Deploy to GitHub Pages → Run workflow**

### Automatic deploys

Every push to the `main` branch builds `dist/` and publishes to GitHub Pages.

### Live site

`https://<your-github-username>.github.io/shrikar-portfolio/`

The Vite `base` in `vite.config.js` is set to `/shrikar-portfolio/` for correct asset paths on GitHub Pages.

## Related Projects

| Project | Live URL |
|---------|----------|
| [children-traffic-park](https://github.com/shrikartare/children-traffic-park) | https://shrikartare.github.io/children-traffic-park/ |
| [legal-solutions](https://github.com/shrikartare/legal-solutions) | https://shrikartare.github.io/legal-solutions/ |
