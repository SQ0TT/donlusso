import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import SiteHeader from '../components/SiteHeader'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'DonLusso | Watch Catalog',
    template: '%s | DonLusso',
  },
  description: 'Explore the DonLusso watch catalog and contact us directly on Telegram.',
  icons: {
    icon: '/donlusso-logo.png',
  },
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-background" aria-hidden="true">
          <div className="site-background-image" />
          <div className="site-background-overlay" />
        </div>
        <div className="site-shell">
          <SiteHeader />
          {children}
        </div>
      </body>
    </html>
  )
}
