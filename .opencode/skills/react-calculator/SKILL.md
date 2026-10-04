---
name: react-calculator
description: Use when working on the Calcolatrice React app in this repo - Vite config, npm scripts, dev server on port 3000, Vercel deploy, routing, the calculator component, or any build/dependency question. Triggers on "vite", "npm run build", "npm run dev", "localhost:3000", "vercel", "deploy", "react-router", "bootstrap", "calculator", "calcolatrice", "package.json".
---

# Calcolatrice (react-first-project)

Single-page React calculator, Italian UI. Deployed on Vercel.

## Stack

| Piece | Version | Note |
| --- | --- | --- |
| Vite | ^8.3.2 | build tool, **not** webpack |
| @vitejs/plugin-react | ^6.1.1 | automatic JSX runtime |
| react / react-dom | ^19.3.0 | |
| react-router-dom | ^7.18.4 | `BrowserRouter`, two routes |
| bootstrap | ^5.3.8 | CSS only, no JS bundle |
| @popperjs/core | ^2.11.8 | peer dep of bootstrap |
| react-device-detect | ^2.2.3 | `isMobile` for the mobile background |

`package.json` has `"type": "module"` and `"engines": { "node": "24.x" }` (Vercel reads this).

## Layout

```
index.html            Vite entry, at the ROOT (not in public/)
public/               static passthrough: favicon.png, manifest.json, robots.txt, app-ads.txt
src/index.jsx         createRoot + BrowserRouter
src/App.jsx           Routes
src/App.css           body background, full-bleed rule
src/index.css         body reset + font stack
src/Components/Calculator.jsx / .css
src/Components/Header.jsx
src/Components/PrivacyPolicy.jsx
vite.config.js        react plugin, port 3000 for dev and preview
vercel.json           SPA rewrite
```

## Commands

| Command | Does |
| --- | --- |
| `npm run dev` (or `start`) | Vite dev server with HMR on **http://localhost:3000** |
| `npm run build` | production build into `dist/` |
| `npm run preview` | serve the built `dist/` on port 3000 |
| `npm audit` | must stay at `found 0 vulnerabilities` |
| `npm ls <pkg>` | trace who pulls a package in |

There is **no test script and no test runner**. Do not invent one; if tests are
ever needed, add `vitest` explicitly.

## Hard-won gotchas

1. **JSX only works in `.jsx` / `.tsx`.** Vite 8's oxc parser does not enable JSX
   for `.js`. A new component file must be `.jsx`, and `index.html` must point at
   `/src/index.jsx`.
2. **No `eval`.** The calculator parses `+ - * /` with the recursive-descent
   `evaluateExpression` in `src/Components/Calculator.jsx`. Rolldown warns on
   direct `eval`; keep it out.
3. **No `react-scripts`, ever.** It was removed on 2026-10-04 because it dragged
   in ~100 vulnerable transitive deps (`braces`, `node-forge`, `webpack-dev-middleware`,
   `brace-expansion`). Do not add it back, not even as a devDependency.
4. **No `%PUBLIC_URL%`.** That was a CRA placeholder. Vite serves `public/` at the
   root, so use `/favicon.png` style absolute paths.
5. **Kill stale dev servers before restarting.** `npm uninstall` while a
   `react-scripts start` is alive leaves an orphaned process that throws
   `Can't resolve html-webpack-plugin/lib/loader.js`. Check with
   `netstat -ano | grep :3000` and kill by PID.
6. **Vite re-optimizes deps on the fly.** Right after `npm install`, the dev
   server may briefly answer `504` for `/node_modules/.vite/deps/*` and log
   `optimized dependencies changed. reloading`. That is transient; re-request.

## Mobile background

`isMobile` from `react-device-detect` toggles a `full-bleed` class on
`document.body` in a `useEffect`, and `App.css` paints the body `gray` instead of
`gainsboro`. `Calculator.css` then kills the calculator's `box-shadow` so the
panel melts into the background. The calculator's own layout is **not** changed
on mobile - do not add fullscreen/grid overrides there.

`react-device-detect` reads the UA once at import time, so this is UA-based, not
viewport-based. It counts tablets as mobile.

## Deploy

Vercel needs zero manual config: preset **Vite**, build `npm run build`, output
`dist`, Node from `engines`. `vercel.json` holds the one thing the preset does not
do:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

Without it, a hard refresh on `/privacy-policy` 404s, because `BrowserRouter`
serves real paths. Vercel applies rewrites only after the filesystem check, so
`/assets/*` still resolves.

## Conventions

- No comments in code unless asked.
- CSS lives next to its component, plain CSS, no preprocessor.
- Bootstrap utility classes are used inline (`d-flex flex-wrap my-5`).
- Italian user-facing strings, English identifiers.
