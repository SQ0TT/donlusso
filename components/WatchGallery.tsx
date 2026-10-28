'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { ProductPhotos } from '../products'

type WatchGalleryProps = {
  photos: ProductPhotos
  productName: string
}

export default function WatchGallery({ photos, productName }: WatchGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="watch-gallery">
      <div className="gallery-main">
        <Image
          src={photos[activeIndex]}
          alt={`${productName}, photo ${activeIndex + 1}`}
          fill
          priority
          sizes="(max-width: 760px) 100vw, 55vw"
        />
      </div>

      <div className="gallery-thumbnails" aria-label="Product photos">
        {photos.map((photo, index) => (
          <button
            className={`gallery-thumbnail${index === activeIndex ? ' is-active' : ''}`}
            type="button"
            key={`${photo}-${index}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show photo ${index + 1} of ${photos.length}`}
            aria-pressed={index === activeIndex}
          >
            <Image
              src={photo}
              alt=""
              fill
              sizes="(max-width: 760px) 20vw, 10vw"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
