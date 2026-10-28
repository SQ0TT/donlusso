import Image from 'next/image'
import Link from 'next/link'
import OrderLink from './OrderLink'

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="brand-link" href="/" aria-label="DonLusso home">
          <Image
            className="brand-logo"
            src="/donlusso-logo.png"
            alt="DonLusso"
            width={112}
            height={112}
            priority
          />
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          <Link className="nav-button" href="/#catalog">CATALOG</Link>
          <OrderLink className="nav-button order-button">ORDER HERE</OrderLink>
        </nav>
      </div>
    </header>
  )
}
