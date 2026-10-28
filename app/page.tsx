import Image from 'next/image'
import Link from 'next/link'
import { products } from '../products'

export default function HomePage() {
  return (
    <main className="home-main">
      <section className="intro" aria-labelledby="page-title">
        <p className="eyebrow">DONLUSSO · WATCH CATALOG</p>
        <h1 id="page-title">The collection</h1>
        <p className="intro-copy">Discover watches in the DonLusso catalog.</p>
      </section>

      <section className="catalog" id="catalog" aria-labelledby="catalog-title">
        <div className="catalog-heading">
          <div>
            <p className="eyebrow">DONLUSSO</p>
            <h2 id="catalog-title">Catalog</h2>
          </div>
          <span className="catalog-count">
            {products.length === 0
              ? 'COMING SOON'
              : `${products.length} ${products.length === 1 ? 'WATCH' : 'WATCHES'}`}
          </span>
        </div>

        {products.length === 0 ? (
          <div className="empty-state">
            <p className="empty-state-title">The catalog is being prepared.</p>
            <p>New pieces will appear here soon.</p>
          </div>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.slug}>
                <Link className="product-card-link" href={`/catalog/${product.slug}`}>
                  <div className="product-card-image">
                    <Image
                      src={product.photos[0]}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                    />
                  </div>
                  <div className="product-card-copy">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
