# DonLusso watch catalog

A small Next.js catalog for DonLusso. The catalog starts empty; no sample watch is published.

## Run

```bash
npm install
npm run dev
```

## Add a watch

1. Create `public/products/<slug>/`.
2. Add 5–7 product photos to that folder, for example `photo-1.jpg` through `photo-5.jpg`.
3. Copy `exampleProductTemplate` in `products.ts` into the `products` array.
4. Replace the placeholder slug, name, description, specifications, and photo paths.
5. Restart or rebuild the site. The catalog card and `/catalog/<slug>` product page are generated from that entry.

The `ProductPhotos` type accepts exactly 5, 6, or 7 image paths. Images in `public/` are referenced from the site root, e.g. `/products/watch-name/photo-1.jpg`.

Order links use the Telegram URL in `site-config.ts`. There is no database, cart, checkout, account system, or admin panel.
new project
