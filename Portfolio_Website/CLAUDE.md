# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Sidharth Kamath with two versions:

1. **Root (`/`)** — Static single-page cyberpunk/hacker-themed portfolio built with vanilla HTML, CSS, and JS (no build step). Open `index.html` directly in a browser.
2. **`portfolio-town/`** — React + Vite interactive "town map" portfolio where each building opens a modal with portfolio content. This is the actively developed version.

## Commands (portfolio-town)

```bash
cd portfolio-town
npm run dev      # Start Vite dev server with HMR
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
npm run lint     # ESLint (flat config, React hooks + refresh plugins)
```

## Architecture (portfolio-town)

- **React 19 + Vite 7** with JSX (not TypeScript)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (no `tailwind.config.js` — uses CSS-first config in `src/index.css`)
- **Framer Motion** for animations (AnimatePresence for modal/overlay transitions)

### Key Layout

- `App.jsx` — Entry point. Shows `LoadingScreen`, then routes to `TownMap` (desktop) or `MobileTownMenu` (mobile, `<768px`) via a `useMediaQuery` hook.
- `components/TownMap.jsx` — Main desktop view. Renders a town illustration (`/public/town.png`) with `MapPin` components positioned via percentage coordinates. Clicking a pin opens a modal.
- `components/MobileTownMenu.jsx` — Mobile fallback menu for the same content.

### Data-Driven Content

All portfolio text lives in `src/data/`:
- `buildings.js` — Array of building definitions (id, label, pin coordinates, colors). Add/remove/reposition buildings here.
- `content.js` — Exports `PROFILE`, `EXPERIENCE`, `PROJECTS`, `SKILLS`, `CERTIFICATIONS`, `ACHIEVEMENTS`, `HOBBIES`. Modals read from these objects, so content changes only require editing this file.

### Component Organization

- `components/buildings/` — SVG/styled building illustrations (one per building), wrapped by `BuildingWrapper.jsx`
- `components/modals/` — One modal per building section (AboutModal, ProjectsModal, SkillsModal, etc.), routed through `ModalOverlay.jsx` which maps `buildingId` to the correct modal component
- `components/ui/` — HUD overlay, social links bar, tooltips
- `hooks/` — `useKeyClose` (Escape key dismissal), `useParallax` (mouse parallax effect)

### Adding a New Building/Section

1. Add an entry to `BUILDINGS` in `src/data/buildings.js` with `id`, `label`, `pin` coordinates, etc.
2. Create a modal in `components/modals/` and register it in `ModalOverlay.jsx`'s building-to-modal mapping.
3. Add any content data to `src/data/content.js`.

## Static Version (Root)

`index.html` + `style.css` + `main.js` — self-contained, no dependencies. Features matrix rain canvas, terminal-style UI, LEGO easter eggs. No build or install needed.
