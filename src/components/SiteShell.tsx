import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Membership', to: '/membership' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const close = () => setMenuOpen(false)

  return (
    <header className="relative z-40 border-b border-[#e6dfd3] bg-[#f7f4ed]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-[82px] lg:px-14">
        <Link to="/" aria-label="DonLusso homepage" className="focus-ring flex items-center gap-2" onClick={close}>
          <span className="font-display text-[25px] tracking-[-1.2px] text-[#302a24]">DonLusso</span>
          <span className="mt-1 h-1 w-1 rounded-full bg-[#b79b6b]" />
        </Link>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => `focus-ring text-[13px] tracking-[.01em] transition-colors ${isActive ? 'text-[#302a24]' : 'text-[#777064] hover:text-[#302a24]'}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-5 md:flex">
          <NavLink to="/login" className={({ isActive }) => `focus-ring text-[13px] transition-colors ${isActive ? 'text-[#302a24]' : 'text-[#777064] hover:text-[#302a24]'}`}>Login</NavLink>
          <Link to="/membership" className="focus-ring group flex items-center gap-2 rounded-full bg-[#322c25] px-5 py-3 text-[12px] font-medium tracking-[.02em] text-[#f7f4ed] transition hover:bg-[#4b4033]">
            Become a member <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <button className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-[#383229] md:hidden" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="absolute left-0 right-0 top-full border-b border-[#e6dfd3] bg-[#f7f4ed] px-5 pb-6 pt-2 shadow-[0_18px_30px_rgba(49,40,30,.08)] md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-[1440px] flex-col">
            {navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={close} className={({ isActive }) => `border-b border-[#e9e2d7] py-4 text-[15px] ${isActive ? 'text-[#302a24]' : 'text-[#777064]'}`}>{item.label}</NavLink>)}
            <Link to="/login" onClick={close} className="border-b border-[#e9e2d7] py-4 text-[15px] text-[#777064]">Login</Link>
            <Link to="/membership" onClick={close} className="mt-5 rounded-full bg-[#322c25] px-5 py-3.5 text-center text-sm text-[#f7f4ed]">Become a member</Link>
          </div>
        </nav>
      )}
      {location.pathname === '/dashboard' && <div className="sr-only">Dashboard sample prototype</div>}
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e4ddd1] bg-[#f2efe7]">
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.3fr_.7fr_.7fr]">
          <div>
            <Link to="/" className="font-display text-[25px] tracking-[-1px]">DonLusso<span className="text-[#b79b6b]">.</span></Link>
            <p className="mt-4 max-w-[330px] text-[13px] leading-6 text-[#777064]">Useful things for people making thoughtful things. A small, considered collection for your digital life.</p>
          </div>
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[.19em] text-[#978d7c]">Explore</p>
            <div className="flex flex-col gap-3 text-[13px] text-[#665f54]">
              <Link className="hover:text-[#302a24]" to="/products">The collection</Link>
              <Link className="hover:text-[#302a24]" to="/membership">The Circle</Link>
              <Link className="hover:text-[#302a24]" to="/dashboard">Member preview</Link>
            </div>
          </div>
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[.19em] text-[#978d7c]">A note</p>
            <p className="max-w-[260px] text-[13px] leading-6 text-[#665f54]">DonLusso is a small independent studio. Every resource is made with care, and made to be useful.</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-[#dfd8cc] pt-5 text-[11px] tracking-[.02em] text-[#8c8377] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 DonLusso Studio. Made with care.</span>
          <span>Thoughtful by design. Practical by nature.</span>
        </div>
      </div>
    </footer>
  )
}
