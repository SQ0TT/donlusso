import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import OrderLink from '../../../components/OrderLink'
import WatchGallery from '../../../components/WatchGallery'
import { products } from '../../../products'

type ProductPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((item) => item.slug === slug)

  if (!product) {
    return { title: 'Product not found' }
  }

  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = products.find((item) => item.slug === slug)

  if (!product) {
    notFound()
  }

  return (
    <main className="product-page">
      <Link className="back-link" href="/#catalog">
        <span aria-hidden="true">←</span> Back to catalog
      </Link>

      <div className="product-detail-grid">
        <WatchGallery photos={product.photos} productName={product.name} />

        <section className="product-detail-copy" aria-labelledby="product-title">
          <p className="eyebrow">DONLUSSO · COLLECTION</p>
          <h1 id="product-title">{product.name}</h1>
          <p className="product-description">{product.description}</p>

          <div className="specifications">
            <h2>Specifications</h2>
            <dl>
              {Object.entries(product.specifications).map(([label, value]) => (
                <div className="specification-row" key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <OrderLink className="detail-order-button">ORDER HERE</OrderLink>
          <p className="order-note">For product inquiries, contact DonLusso on Telegram.</p>
        </section>
      </div>
    </main>
  )
}
