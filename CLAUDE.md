# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

This repo's actual project lives in the `portafolio/` subdirectory — the repo root only contains that folder plus a top-level `icons/` folder of source images. Always `cd portafolio` (or target paths under it) before running npm/vite commands.

## Commands

Run from `portafolio/`:

```bash
npm install       # install dependencies
npm run dev       # start Vite dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint over the project
```

There is no test suite configured in this project.

## Architecture

Single-page React 19 + Vite portfolio site (in Spanish) for Juan Esteban Argüello Botero. No router — it's one scrolling page composed of section components, each with an `id` used for anchor navigation (`#about`, `#projects`, etc.).

- **`src/App.jsx`** — top-level composition: renders `Loader` until initial load completes, then mounts `ScrollProgress`, `Cursor`, `Particles` (global overlays) followed by the section components in page order (`Navbar`, `Hero`, `About`, `Projects`, `Experience`, `Services`, `Skills`, `Education`, `Contact`, `Footer`). Also owns a "presentation mode" (fullscreen, toggled via `Alt+F`/`F11`/`Esc`) applied as a CSS class on the root `.app` div.
- **`src/data/portfolio.js`** — the single source of truth for all content: `personalInfo`, `about`, `experience`, `skills`, `projectCategories`/`projects`, `education`. Also re-exports imported certificate/project preview images as lookup maps (`certImages`, `projectImages`) keyed by string id, and imports `react-icons` (fa/si sets) used as tech/skill icons throughout. **To update resume content, work experience, skills, or projects, edit this file — not the components.**
- **Components (`src/components/`)** — each section is a self-contained `ComponentName.jsx` + matching `ComponentName.css` pair (no CSS modules, no Tailwind — plain scoped-by-convention CSS files imported directly into each component). Components pull their content from `src/data/portfolio.js` rather than hardcoding copy.
- **`Contact.jsx`** — form submission uses `@formspree/react`'s `useForm` hook with a hardcoded Formspree form id (`"xlgpqqkv"`); no backend of its own.
- **`Particles.jsx`** / **`Cursor.jsx`** — canvas/DOM-based visual effects layered globally behind/above content; when touching these, take care with `requestAnimationFrame`/event-listener cleanup in `useEffect` returns to avoid leaking listeners across mounts (a particle-memory-leak was fixed here previously).
- Assets (images, the CV PDF, certificate screenshots) live under `src/assets/` and are imported directly into `src/data/portfolio.js` or components — not referenced by public path.

## Deployment

Deployed on Vercel (`vercel.json` sets `framework: vite`, build command `npm run build`, output `dist`). Site content (Open Graph/Twitter meta, canonical URL) in `index.html` references `https://mastadev-portafolio.vercel.app/`.
