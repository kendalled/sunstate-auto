# SunState Auto Glass Website

Nuxt 3 marketing site for SunState Auto Glass, including service pages, contact flows, and SEO-focused landing content.

## Tech Stack

- Nuxt 3
- Vue 3
- Tailwind CSS
- `@nuxt/image`
- `nuxt-aos`

## Local Development

```bash
npm install
npm run dev
```

App runs at `http://localhost:3000`.

## Scripts

```bash
npm run dev       # Start local dev server
npm run build     # Build for production
npm run preview   # Preview production build locally
npm run generate  # Generate static output
```

## Notes

- Main config is in `nuxt.config.ts`.
- Route rule currently redirects `/contact-us` to `/contact` (301).
- Static assets are in `public/`.
