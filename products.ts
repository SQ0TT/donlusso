export type FivePhotos = readonly [string, string, string, string, string]
export type SixPhotos = readonly [...FivePhotos, string]
export type SevenPhotos = readonly [...SixPhotos, string]
export type ProductPhotos = FivePhotos | SixPhotos | SevenPhotos

export type WatchProduct = {
  slug: string
  name: string
  description: string
  photos: ProductPhotos
  specifications: Readonly<Record<string, string>>
}

/**
 * Copy this entry into `products` and replace every placeholder.
 * Keep 5–7 photo paths. Put those files in `public/products/<slug>/`.
 * This template is not included in the live catalog.
 */
export const exampleProductTemplate: WatchProduct = {
  slug: 'example-watch',
  name: 'PLACEHOLDER — replace with watch name',
  description: 'PLACEHOLDER — add a short product description.',
  photos: [
    '/products/example-watch/photo-1.jpg',
    '/products/example-watch/photo-2.jpg',
    '/products/example-watch/photo-3.jpg',
    '/products/example-watch/photo-4.jpg',
    '/products/example-watch/photo-5.jpg',
  ],
  specifications: {
    'Specification name': 'PLACEHOLDER — enter verified value',
    'Another specification': 'PLACEHOLDER — enter verified value',
  },
}

// Add real products here. The catalog intentionally starts empty.
export const products: WatchProduct[] = []
