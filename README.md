# Tomás Soares — Portfolio

Personal portfolio of Tomás Soares, FrontEnd Developer based in Leiria, Portugal. A single-page site with a monochrome design, a dark theme by default and a light theme toggle.

Sections: hero, About, Experience, Tech stack, Projects and a contact footer.

## Stack

- [React](https://react.dev) 19 + TypeScript, built with [Vite](https://vite.dev)
- CSS Modules and CSS custom properties, no UI or animation libraries
- [Geist](https://vercel.com/font) (Google Fonts), [Phosphor Icons](https://phosphoricons.com) and [Devicon](https://devicon.dev), loaded from CDNs

## Features

- Dark and light themes, saved in `localStorage` and applied before first paint to avoid a flash
- Typewriter headline, scroll reveals and a staggered entrance for the tech stack pills
- Sticky navbar that shrinks on scroll, with animated anchor scrolling and an active-section indicator
- Respects `prefers-reduced-motion`: reveals and typing are skipped, so all content is visible straight away
- No media queries: layout is centred and fluid (`clamp()` sizes, wrapping flex rows)

## Getting started

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build to dist/
npm run preview  # serve the production build locally
npm run lint     # run ESLint
```

## Project structure

```
public/assets/cv/   CV PDF, served at /assets/cv/TomasSoaresEN.pdf
src/
  components/       one component per section, plus shared Panel, Card, Pill, IconButton…
                    (each with its own .module.css)
  hooks/            useTheme, useReveal, useActiveSection, useSmoothScroll, useTypewriter, useScrolled
  data/portfolio.ts roles, projects, tech stack groups and contact links
  styles/theme.css  design tokens for the dark and light themes
  styles/global.css reset, base styles and shared animations
```

To update the content, edit `src/data/portfolio.ts` (experience, projects, tech stack, links). Section headings and paragraphs live in the components themselves.

## Design tokens

Colours are defined once in [`src/styles/theme.css`](src/styles/theme.css) as `--m-*` custom properties, with the light theme overriding them under `:root[data-theme="light"]`. Components only reference these variables. The brand-coloured technology logos are the only colour on the page.
