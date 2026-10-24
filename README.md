# Sosoru — website

A single-page site for Sosoru, the Pan-Asian restaurant and bar at 81A Rajpur
Road, Dehradun. Built with Vite, React and TypeScript, set in Cormorant Garamond,
Inter and IBM Plex Mono.

```bash
npm ci          # install
npm run dev     # http://localhost:3000
npm run build   # typecheck + production build to dist/
npm run images  # re-derive the image set from the source photograph
```

## Content provenance

The brief asks that placeholder content never be mistaken for verified detail.
Everything below is tracked in the code:

| Item | Status | Where |
| --- | --- | --- |
| Address, phone, hours, Instagram | Checked against public listings, Oct 2026 — re-confirm before launch | `src/data/site.ts` |
| Interior photography | One supplied photograph, cropped into the site's image set | `caption (1).jpg` → `scripts/optimize-images.mjs` |
| Dish names and descriptions | Preview menu. Four dishes are described only from what the supplied photographs show; the rest are marked as awaiting verification | `src/data/menu.ts` |
| Prices | Deliberately not shown — none could be verified | — |
| Awards, reviews, email address, coordinates, parking | Deliberately not shown — none could be verified | — |
| Reservation delivery | Form validates and builds a request; posts to `VITE_RESERVATION_ENDPOINT` when set, otherwise hands the request to WhatsApp or a phone call | `src/components/Reservations.tsx` |
| Hero footage | Static photograph with a slow settle and restrained parallax; no video supplied | `src/components/Hero.tsx` |

The preview notices in the menu, signatures and footer are deliberate. Remove
them once the verified menu, dish photography and booking endpoint are in place.

## The logo

The restaurant's mark is the brushed wordmark with 啜る set beside it. To use the
artwork itself rather than the typographic wordmark, save it at the project root
as `logo.png` (or `.jpg` / `.webp`) and run:

```bash
npm run logo
```

`scripts/build-logo.mjs` trims the paper, keys the ink so the mark sits on ivory,
walnut or a photograph without a white box, writes an ink and an ivory version
to `public/images/brand/`, generates the 512 / 180 / dark-tile icons, and flips
`brandLogo.available` in `src/data/brand.ts`. The header swaps between the ivory
and ink versions as it scrolls; the footer uses the ivory version.

Until then the wordmark is set in Cormorant Garamond with wide tracking — a
stand-in, not a reproduction of the brush lettering.

## Adding the restaurant's own photography

`scripts/optimize-images.mjs` holds the crop list. Drop the new originals in the
project root, point `SRC` at them, adjust the crops, and run `npm run images`.
The site expects these files in `public/images`:

- `interior-hero.webp` (1100×700) and `interior-hero-portrait.webp` (860×1100)
- `interior-room-wide.webp`, `interior-screen.webp`, `interior-table.webp`
- `interior-evening.webp`
- `social-preview.jpg` (1200×630, absolute URL needed once a domain exists)

## Connecting bookings

Set `VITE_RESERVATION_ENDPOINT` to an endpoint that accepts a JSON `POST` with
`name`, `phone`, `email`, `date`, `time`, `guests`, `occasion`, `notes` and
`source`. Until it is set, the form tells the guest plainly that the request is
not connected and offers WhatsApp and phone instead.

## Preview host

`vite.config.ts` allows the Cloud preview hostname for this workspace. If the
VM is recreated with a new hostname, add it to `server.allowedHosts` (or set
`__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS`) before starting `npm run dev`; Vite
returns 403 for unlisted hosts.
