import type { Product } from '../data/store'
import { Activity, BookOpen, GraduationCap, Landmark, ScanLine, Users } from 'lucide-react'

const artworkIcon = {
  signal: Activity,
  analysis: BookOpen,
  gold: Landmark,
  research: ScanLine,
  community: Users,
  education: GraduationCap,
}

export function ProductArtwork({ kind, compact = false }: { kind: Product['icon']; compact?: boolean }) {
  const Icon = artworkIcon[kind]
  return (
    <div className={`product-art glass-surface flex items-center justify-center ${compact ? 'min-h-0' : ''}`} aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(208,184,120,.16),transparent_46%)]" />
      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#cfb775]/25 bg-[#cfb775]/[.08] text-[#d5c186]"><Icon size={compact ? 18 : 27} /></div>
    </div>
  )
}

export function HeroArtwork() {
  return (
    <div className="glass-surface relative isolate aspect-[.88] w-full max-w-[480px] overflow-hidden rounded-[28px]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_30%,rgba(198,174,112,.2),transparent_44%),linear-gradient(145deg,rgba(32,65,78,.45),transparent)]" />
      <div className="absolute left-[10%] top-[10%] text-[9px] tracking-[.2em] text-[#c5b782]">DONLUSSO TRADING / RESEARCH</div>
      <div className="absolute bottom-[10%] left-[10%] z-10 max-w-[78%]">
        <p className="mb-3 text-[9px] tracking-[.24em] text-[#a7afb8]">CLARITY OVER CERTAINTY</p>
        <p className="font-display text-[clamp(34px,6vw,54px)] leading-[.98] tracking-[-1.7px] text-[#e9e8e2]">Think beyond<br /><i className="font-normal text-[#d4bf83]">the market.</i></p>
      </div>
    </div>
  )
}
