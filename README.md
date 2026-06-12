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

The workflow (`.github/workflows/deploy.yml`) supports **two ways** to deploy:

| Trigger | How |
|---------|-----|
| **Automatic** | Push or merge to `main` |
| **Manual** | **Actions → Deploy to GitHub Pages → Run workflow** |

The workflow builds `dist/` and deploys with **GitHub Actions** (`actions/deploy-pages`).

### GitHub settings (required — do once per repo)

1. **Settings → Actions → General → Workflow permissions**
   - Select **Read and write permissions**
   - Save

2. **Settings → Pages → Build and deployment**
   - **Source:** **GitHub Actions** *(not "Deploy from a branch")*
   - Save

3. Push to `main` or run **Actions → Deploy to GitHub Pages → Run workflow**.

4. Wait 1–2 minutes, then hard-refresh the live URL (Ctrl+F5).

These repos are **public**, so GitHub Pages works on the free plan with no extra visibility changes.

### Deploy manually only

Edit `.github/workflows/deploy.yml` and **remove** the `push:` block so only this remains:

```yaml
on:
  workflow_dispatch:
```

Then deploy only from **Actions → Run workflow**.

### Live site

`https://<your-github-username>.github.io/shrikar-portfolio/`

The Vite `base` in `vite.config.js` is set to `/shrikar-portfolio/` for correct asset paths.

### Troubleshooting

| Issue | Fix |
|-------|-----|
| Old layout / stale content after push | **Pages → Source** must be **GitHub Actions**. Hard-refresh (Ctrl+F5). |
| Workflow does not run on push | Confirm workflow file is on `main` and `push: branches: [main]` is present. |
| `Permission denied` on deploy | **Settings → Actions → Workflow permissions → Read and write**. |
| Pages shows 404 | Run the deploy workflow once from the Actions tab. |
| Blank page / missing assets | Confirm `base` in `vite.config.js` matches your repo name. |

## Related Projects

| Project | Live URL |
|---------|----------|
| [children-traffic-park](https://github.com/shrikartare/children-traffic-park) | https://shrikartare.github.io/children-traffic-park/ |
| [legal-solutions](https://github.com/shrikartare/legal-solutions) | https://shrikartare.github.io/legal-solutions/ |
