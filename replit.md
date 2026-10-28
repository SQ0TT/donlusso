# DonLusso

## Run locally or in Replit

- Install dependencies with `npm install`.
- Start the Next.js development server with `npm run dev` (bound to `0.0.0.0:5000`).
- Create a production build with `npm run build`.

## Project scope

DonLusso is a minimal, responsive watch catalog built with Next.js and simple CSS. The live product array in `products.ts` starts empty. Never add invented watch listings, prices, descriptions, specifications, or authenticity claims.

To add a product, create its image folder under `public/products/<slug>/`, add 5–7 photos, then copy and complete the example entry in `products.ts`. The catalog and `/catalog/<slug>` page are generated from that data.

The Telegram order destination is configured in `site-config.ts`. Keep the site limited to the catalog and product detail pages; do not add accounts, a database, cart, checkout, admin panel, or other services unless requested.
