# إقامة الحرمين (Iqamat Al-Haramain) - Apartment hotel website

Website for Iqamat Al-Haramain, an apartment hotel in Zaio, Morocco, with 8 apartments.

## Features

- **Mobile-first, responsive design**, with booking on WhatsApp one tap away
- **Six languages**: English, Français, Nederlands, Deutsch, Español and العربية (Arabic uses a right-to-left layout)
- **Remembers the language**: defaults to the browser language, and links can force one with `?lang=fr` (or any other code)
- **Contact integration**: WhatsApp, phone and Google Maps
- **Apartment galleries**: every apartment has its own photo gallery
- **Room types**: large (two bedrooms) and small/medium (one bedroom with extra beds), all with a dining area and a washing machine

## Quick start

The app is a Next.js project in the `nextjs/` folder.

```bash
cd nextjs
npm ci
npm run dev
```

Then open http://localhost:3000.

Other scripts: `npm run lint`, `npm run build` and `npm run start`.

## Deployment

The site is hosted on Vercel. Image optimisation (`next/image`) relies on Vercel's image service.

## Technical details

- **Next.js 16** (App Router), **React 19**, **TypeScript**
- **Tailwind CSS 4** for styling and **framer-motion** for motion
- **Fonts** via `next/font`: Fraunces and Manrope (Latin), El Messiri and IBM Plex Sans Arabic (Arabic)
- **Translations** live in `nextjs/src/lib/i18n/`, with one file per language. To add a language, copy `en.ts`, translate it, and register it in `index.ts`.
- **Apartment data** (photos and prices) is in `nextjs/src/lib/apartments.ts`. Contact details are in `nextjs/src/lib/site.ts`.

## License

This project is open source and available under the MIT License.
