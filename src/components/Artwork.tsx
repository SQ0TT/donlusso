import type { Product } from '../data/store'

const artworkClass: Record<Product['artwork'], string> = {
  atlas: 'art-atlas',
  studio: 'art-studio',
  notes: 'art-notes',
  folio: 'art-folio',
  signal: 'art-signal',
  vault: 'art-vault',
}

export function ProductArtwork({ kind, compact = false }: { kind: Product['artwork']; compact?: boolean }) {
  return (
    <div className={`product-art ${artworkClass[kind]} ${compact ? 'product-art-compact' : ''}`} aria-hidden="true">
      <div className="art-topline"><span>DONLUSSO STUDIO</span><span>№ 0{Object.keys(artworkClass).indexOf(kind) + 1}</span></div>
      {kind === 'atlas' && <><div className="atlas-orbit" /><div className="atlas-square" /><div className="art-title">The<br /><i>Quiet</i><br />Launch</div><div className="art-small">A CREATOR'S FIELD GUIDE</div></>}
      {kind === 'studio' && <><div className="studio-sun" /><div className="studio-line one" /><div className="studio-line two" /><div className="art-title">Studio<br /><i>Letters</i></div><div className="art-small">A PRACTICE IN WORDS</div></>}
      {kind === 'notes' && <><div className="notes-paper"><div className="notes-rule" /><div className="notes-rule" /><div className="notes-rule" /><div className="notes-rule short" /></div><div className="notes-orb" /><div className="art-title">The Good<br /><i>Notes</i></div><div className="art-small">A PLACE FOR IDEAS</div></>}
      {kind === 'folio' && <><div className="folio-arch" /><div className="folio-panel" /><div className="art-title">The<br /><i>Field</i><br />Guide</div><div className="art-small">FOR THE WORK THAT MATTERS</div></>}
      {kind === 'signal' && <><div className="signal-ring outer" /><div className="signal-ring inner" /><div className="signal-dot" /><div className="art-title">Soft<br /><i>Signal</i></div><div className="art-small">A BRAND STUDY</div></>}
      {kind === 'vault' && <><div className="vault-shape" /><div className="vault-stem" /><div className="art-title">The<br /><i>Long</i><br />Game</div><div className="art-small">A SEASONAL PLANNER</div></>}
      <div className="art-footer"><span>CONSIDERED DIGITAL GOODS</span><span>DL—25</span></div>
    </div>
  )
}

export function HeroArtwork() {
  return (
    <div className="hero-art relative isolate aspect-[.88] w-full max-w-[480px] overflow-hidden rounded-[5px] bg-[#c6b59a] shadow-[0_24px_70px_rgba(73,59,38,.12)]">
      <div className="grain absolute inset-0" />
      <div className="hero-sun" />
      <div className="hero-arch hero-arch-back" />
      <div className="hero-arch hero-arch-front" />
      <div className="hero-stone" />
      <div className="absolute left-[9%] top-[8%] z-10 text-[9px] tracking-[.2em] text-[#544a3d]">DONLUSSO STUDIO &nbsp; / &nbsp; EST. 2022</div>
      <div className="absolute bottom-[9%] left-[9%] z-10 max-w-[78%]">
        <p className="mb-3 text-[9px] tracking-[.24em] text-[#554a3c]">A MORE CONSIDERED DIGITAL LIFE</p>
        <p className="font-display text-[clamp(34px,6vw,54px)] leading-[.98] tracking-[-1.7px] text-[#302a24]">Make room<br /><i className="font-normal">for good work.</i></p>
      </div>
      <div className="absolute bottom-[9%] right-[9%] z-10 text-[9px] tracking-[.12em] text-[#574d41]">01—06</div>
    </div>
  )
}
