# BLD-312: design overhaul (2026-10-07)

## What was done

A full visual redesign of the Next.js site in `nextjs/`: home, apartments and contact pages, plus the navbar, footer, gallery and contact buttons.

- New design system in `src/app/globals.css`: sand, ink and terracotta palette, button styles, focus ring, arch mask, checker motif.
- Typography: Fraunces (Latin headings), Manrope (Latin body), El Messiri (Arabic headings), IBM Plex Sans Arabic (Arabic body). All loaded with `next/font`.
- Language: the EN/AR choice now sets `lang` and `dir` on `<html>`, is remembered in `localStorage`, and can be forced with `?lang=ar` or `?lang=en` (useful for links shared on WhatsApp).
- Shared contact details, check-in times, amenities and room types now live in `src/lib/site.ts` instead of being copied into each page.
- Images: `next/image` optimisation is switched on (AVIF/WebP). The hero photo goes from about 2.5 MB (PNG) to about 54 KB.
- Mobile: a fixed bottom bar with "Book on WhatsApp" and a call button. On the home page it only appears after you scroll past the hero. Desktop keeps a round WhatsApp button.
- Gallery: rebuilt as an accessible dialog. It traps focus, closes with Escape, has swipe on touch, and the thumbnails now work (they did nothing before). Arrow keys and swipe follow the reading direction in Arabic.
- Rooms: each apartment gets a photo mosaic, a description, the price with the struck-out original, a WhatsApp link with a pre-filled message about that apartment, and a link to the full gallery. There is also a row of jump links to each apartment.
- The favicon was recoloured to match the new palette.

## Design decisions

- Direction: warm, editorial and calm, closer to a boutique riad than a booking portal. The palette is taken from the photos themselves: plaster walls (sand), tiled floors (ink) and terracotta accents.
- Motifs: horseshoe-arch image masks and a small checkerboard pattern that echoes the tiled floors in many of the apartments. Both are used sparingly.
- The photos are phone pictures of real rooms. They get one shared, mild grade (`.photo-grade`) and consistent crops so they sit together, without making them look like something they are not.
- Arabic: letter spacing is turned off everywhere in RTL (it breaks joined letters), headings get a taller line height, uppercase eyebrows become normal case, and arrows and chevrons flip. Phone numbers, times and coordinates stay left-to-right.
- Content: no new amenities, prices, reviews or awards. The amenity list, the check-in and check-out times, the prices and the apartment texts come from the previous site and `apartments.ts`. The two room types ("Large: two bedrooms" and "Small and medium: one bedroom with extra beds", all with a dining area and a washing machine) come from the repository README.

## What is left / open points

- The site says "8 apartments", but `apartments.ts` only lists 7 (there is no apartment 6 and no photos for it). The owner should confirm whether apartment 6 should be added or the copy changed.
- The room types are not mapped to specific apartments, because that information does not exist in the repository. If the owner provides it, each apartment card could show its type.
- The Google Maps embed URL was kept as it was. It could not load inside the sandboxed test environment, so a fallback link now sits behind it. Check it once in a real browser after deploy.
- Image optimisation needs a host that runs the Next.js image optimiser (Vercel, Netlify's Next.js runtime, or `next start`). If the site is ever exported as static files, set `images.unoptimized` back to `true`.
- Possible follow-ups: compress or convert the source PNGs in `public/assets`; add Open Graph images; consider server-side rendering of the Arabic version for `?lang=ar` links so there is no brief English flash before hydration.
