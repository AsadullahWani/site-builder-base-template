# COURT19 — Sports Venue Template (Next.js)

A single-page template for an indoor sports arena, built with the Next.js
App Router and Tailwind CSS. Includes Hero, About, FAQ, and Location
sections plus a Navbar and Footer.

## Structure

```
app/
  layout.js       Root layout, fonts, metadata
  page.js         Assembles the sections
  globals.css     Tailwind + design tokens (colors, animations)
components/
  Navbar.jsx
  Hero.jsx
  About.jsx
  FAQ.jsx         Accordion (client component)
  Location.jsx    Address, hours, embedded map
  Footer.jsx
  CourtLines.jsx  Signature animated court-line SVG divider
```

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Requires internet access on first build
so Next.js can fetch the Anton / Inter / IBM Plex Mono fonts from Google
Fonts.

## Customize

- **Colors & fonts** — edit `tailwind.config.js` (`ink`, `turf`, `chalk`,
  `amber`, `sand`) and the font imports in `app/layout.js`.
- **Copy** — venue name, address, hours, sports list and FAQ content live
  directly inside each component in `components/`.
- **Map** — swap the `src` of the `iframe` in `Location.jsx` for your own
  Google Maps embed link.
