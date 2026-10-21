import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Membership', to: '/membership' },
  { label: 'About', to: '/about' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const close = () => setMenuOpen(false)

  useEffect(() => { close() }, [location.pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-white/[.08] bg-[#0c1017]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-4 sm:px-7 lg:h-[76px] lg:px-10">
        <Link to="/" aria-label="DonLusso Trading home" className="focus-ring flex items-center gap-3" onClick={close}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#cbb477]/40 bg-[#cbb477]/[.08] font-display text-[18px] text-[#d7c18a]">D</span>
          <span className="leading-tight"><span className="block font-display text-[19px] tracking-[.01em] text-[#f1f0eb]">DonLusso</span><span className="block text-[8px] font-semibold uppercase tracking-[.24em] text-[#a5a8ae]">Trading</span></span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => `focus-ring text-[12px] tracking-[.015em] transition-colors ${isActive ? 'text-[#ddc98e]' : 'text-[#a3a8b1] hover:text-[#f1f0eb]'}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-5 md:flex">
          <NavLink to="/login" className={({ isActive }) => `focus-ring text-[12px] transition-colors ${isActive ? 'text-[#ddc98e]' : 'text-[#b9bdc4] hover:text-white'}`}>Sign In</NavLink>
          <Link to="/membership" className="gold-button focus-ring group inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[11px] font-semibold">
            Explore plans <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <button className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#e5e7eb] md:hidden" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="absolute left-0 right-0 top-full border-b border-white/10 bg-[#10151e]/[.98] px-5 pb-5 pt-1 shadow-2xl backdrop-blur-xl md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-[1280px] flex-col">
            {navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={close} className={({ isActive }) => `border-b border-white/[.07] py-4 text-[14px] ${isActive ? 'text-[#dcc78b]' : 'text-[#c2c6ce]'}`}>{item.label}</NavLink>)}
            <Link to="/login" onClick={close} className="border-b border-white/[.07] py-4 text-[14px] text-[#c2c6ce]">Sign In</Link>
            <Link to="/membership" onClick={close} className="gold-button mt-5 rounded-full px-5 py-3.5 text-center text-[13px] font-semibold">Explore Membership</Link>
          </div>
        </nav>
      )}
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[.08] bg-[#090c11]">
      <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_.7fr_.9fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 font-display text-[22px] tracking-[.01em]">DonLusso<span className="text-[#d0b572]">.</span></Link>
            <p className="mt-3 max-w-[350px] text-[12px] leading-6 text-[#969da8]">Market research and trading education for a calmer, more deliberate relationship with the markets.</p>
            <p className="mt-4 max-w-[400px] text-[10px] leading-5 text-[#a39a83]">Risk disclaimer: Trading involves substantial risk and may not be suitable for every investor. Examples are educational only, not financial advice or a recommendation to trade.</p>
          </div>
          <div>
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[.2em] text-[#bda96f]">Explore</p>
            <div className="flex flex-col gap-3 text-[12px] text-[#a7adb7]">
              <Link className="hover:text-white" to="/">Home</Link>
              <Link className="hover:text-white" to="/products">Products</Link>
              <Link className="hover:text-white" to="/membership">Membership</Link>
              <Link className="hover:text-white" to="/about">About DonLusso</Link>
              <Link className="hover:text-white" to="/dashboard">Dashboard prototype</Link>
            </div>
          </div>
          <div>
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[.2em] text-[#bda96f]">Information</p>
            <div className="flex flex-col gap-3 text-[12px] text-[#a7adb7]">
              <Link className="hover:text-white" to="/contact">Contact</Link>
              <Link className="hover:text-white" to="/terms">Terms</Link>
              <Link className="hover:text-white" to="/privacy">Privacy</Link>
              <Link className="hover:text-white" to="/risk-disclaimer">Risk disclaimer</Link>
            </div>
            <p className="mt-4 text-[10px] leading-5 text-[#737b87]">Contact and policy pages are draft placeholders for review, not final legal documents.</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/[.08] pt-5 text-[10px] text-[#717985] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 DonLusso Trading. Prototype experience.</span>
          <span>Clarity over certainty.</span>
        </div>
      </div>
    </footer>
  )
}
