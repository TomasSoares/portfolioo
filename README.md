# Tomás Soares — Portfolio

Personal portfolio of Tomás Soares, a front-end focused web developer based in Leiria, Portugal. Live at [tomassoares.dev](https://tomassoares.dev). A single-page site, strictly black and white, with a dark theme by default and a light theme toggle.

Sections: hero, About, Experience, Stack, Projects and a contact footer.

## Stack

- [React](https://react.dev) 19 + TypeScript, built with [Vite](https://vite.dev), deployed on [Vercel](https://vercel.com)
- CSS Modules and CSS custom properties, no UI or animation libraries
- [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) (Google Fonts), [Phosphor Icons](https://phosphoricons.com) and [Devicon](https://devicon.dev), loaded from CDNs

## Design

- One typeface for everything. Bricolage Grotesque's optical-size and width axes make it a condensed display face for the name in the hero and a calm text face everywhere else.
- Black and white only. The brand-coloured technology logos are the only colour on the page.
- Left-aligned layout: each section has its title in a narrow left column (sticky while the section scrolls) and its content on the right. On narrow screens the title moves above the content.
- One moment of motion: the name types itself in on load. Everything else is still. Under `prefers-reduced-motion` the name appears at once.
- Experience is a timeline with the period in its own column; Stack and Projects are lists separated by rules, not cards.

## Features

- Dark and light themes, saved in `localStorage` and applied before first paint to avoid a flash
- Sticky navbar with animated anchor scrolling and an active-section indicator
- Responsive down to phone width, visible keyboard focus, AA contrast in both themes

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
  components/       one component per section, plus shared Section, Button, TechMark, IconButton
                    (each with its own .module.css)
  hooks/            useTheme, useActiveSection, useSmoothScroll, useTypewriter
  data/portfolio.ts roles, projects, tech stack groups and contact links
  styles/theme.css  design tokens for the dark and light themes
  styles/global.css reset and base styles
```

To update the content, edit `src/data/portfolio.ts` (experience, projects, tech stack, links). Section headings and paragraphs live in the components themselves.

## Design tokens

Colours, type sizes and layout widths are defined once in [`src/styles/theme.css`](src/styles/theme.css) as custom properties (`--bg`, `--fg`, `--fg-2`, `--fg-3`, `--rule`, `--text-*`), with the light theme overriding the colours under `:root[data-theme="light"]`. Components only reference these variables.
