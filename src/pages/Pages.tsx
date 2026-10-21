import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ArrowUpRight, BadgeCheck, CalendarDays, Check, ChevronDown,
  CircleHelp, Clock3, Download, ExternalLink, LockKeyhole, Mail, MessageCircle,
  Package, Search, ShieldCheck, Sparkles, X,
} from 'lucide-react'
import { dashboardSample, membership, products, type Product } from '../data/store'
import { HeroArtwork, ProductArtwork } from '../components/Artwork'
import { useToast } from '../components/Toast'

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-[10px] font-semibold uppercase tracking-[.22em] text-[#9a896d]">{children}</p>
}

function ProductCard({ product, onSelect }: { product: Product; onSelect: (product: Product) => void }) {
  return (
    <article className="group">
      <button className="focus-ring block w-full overflow-hidden rounded-[5px] text-left" onClick={() => onSelect(product)} aria-label={`View ${product.title}`}>
        <ProductArtwork kind={product.artwork} />
      </button>
      <div className="flex items-start justify-between gap-4 pt-4">
        <div className="min-w-0">
          <p className="mb-1 text-[10px] uppercase tracking-[.14em] text-[#9a8e7b]">{product.category}</p>
          <button onClick={() => onSelect(product)} className="focus-ring font-display text-[20px] tracking-[-.3px] text-[#332d26] transition-colors hover:text-[#92784f]">{product.title}</button>
          <p className="mt-1.5 max-w-[290px] text-[12px] leading-[1.7] text-[#7b7469]">{product.description}</p>
        </div>
        <span className="pt-1 text-[13px] text-[#51483d]">${product.price}</span>
      </div>
      <button onClick={() => onSelect(product)} className="focus-ring mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.12em] text-[#8e7754] transition hover:gap-3">
        Explore product <ArrowRight size={13} />
      </button>
    </article>
  )
}

function ProductDialog({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const { notify } = useToast()
  if (!product) return null
  const requestClose = () => onClose()
  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-[#201b16]/55 p-0 backdrop-blur-[3px] sm:items-center sm:p-5" onMouseDown={(event) => { if (event.target === event.currentTarget) requestClose() }} onKeyDown={(event) => { if (event.key === 'Escape') requestClose() }}>
      <section role="dialog" aria-modal="true" aria-labelledby="product-dialog-title" className="page-enter relative grid max-h-[92dvh] w-full max-w-[820px] grid-cols-1 overflow-y-auto rounded-t-[14px] bg-[#f8f5ee] shadow-2xl sm:max-h-[86vh] sm:grid-cols-2 sm:rounded-[10px]">
        <button onClick={requestClose} aria-label="Close product details" className="focus-ring absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#ded5c8] bg-[#f8f5ee]/90 text-[#433d34] transition hover:bg-white"><X size={17} /></button>
        <div className="p-5 pb-0 sm:p-7 sm:pr-0"><ProductArtwork kind={product.artwork} /></div>
        <div className="flex flex-col justify-center px-6 py-7 sm:px-9 sm:py-10">
          <Eyebrow>{product.category} / digital resource</Eyebrow>
          <h2 id="product-dialog-title" className="font-display text-[36px] leading-[1.06] tracking-[-1px] text-[#332d26]">{product.title}</h2>
          <p className="mt-5 text-[14px] leading-7 text-[#6f685d]">{product.detail}</p>
          <div className="mt-6 border-y border-[#e2dbcf] py-4 text-[12px] text-[#847b6e]">{product.format}</div>
          <div className="mt-6 flex items-center justify-between">
            <span className="font-display text-[25px]">${product.price}</span>
            <button onClick={() => notify('Checkout is not connected in this preview. No purchase has been made.')} className="focus-ring group flex items-center gap-3 rounded-full bg-[#332d26] px-5 py-3.5 text-[12px] font-medium text-[#f8f5ee] transition hover:bg-[#514537]">
              Get this resource <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
          <p className="mt-4 text-[10px] leading-5 text-[#9a9184]">A preview only. Checkout is not connected.</p>
        </div>
      </section>
    </div>
  )
}

export function HomePage() {
  const [selected, setSelected] = useState<Product | null>(null)
  const featured = products.filter((product) => product.featured)
  return (
    <>
      <main className="page-enter">
        <section className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 pb-16 pt-12 sm:px-8 md:grid-cols-[1fr_.9fr] md:gap-10 md:py-20 lg:gap-20 lg:px-14 lg:py-24">
          <div className="reveal max-w-[590px]">
            <Eyebrow>Independent digital studio · Est. 2022</Eyebrow>
            <h1 className="font-display text-[clamp(48px,8vw,94px)] leading-[.99] tracking-[-3.5px] text-[#302a24]">A little more<br /><i className="font-normal text-[#9c8868]">considered.</i></h1>
            <p className="mt-7 max-w-[415px] text-[15px] leading-[1.9] text-[#746d62]">Digital tools and quiet guidance for people making meaningful work. Gathered slowly, made to be used.</p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link to="/products" className="focus-ring group flex items-center gap-3 rounded-full bg-[#342d25] px-6 py-4 text-[12px] font-medium text-[#f8f5ee] transition hover:bg-[#504435]">
                Explore the collection <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/membership" className="focus-ring inline-flex items-center gap-2 text-[12px] text-[#706759] transition hover:text-[#302a24]">Meet the Circle <ArrowUpRight size={13} /></Link>
            </div>
            <div className="mt-12 flex items-center gap-3 border-t border-[#e2dbcf] pt-5 text-[11px] tracking-[.02em] text-[#8b8377]">
              <span className="flex -space-x-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#f7f4ed] bg-[#ded2bd] text-[9px] text-[#5b5042]">A</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#f7f4ed] bg-[#b9c1b5] text-[9px] text-[#4d5448]">M</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#f7f4ed] bg-[#d4bcb1] text-[9px] text-[#604b43]">J</span>
              </span>
              <span>Made for thoughtful independents.</span>
            </div>
          </div>
          <div className="md:flex md:justify-end"><HeroArtwork /></div>
        </section>

        <section className="border-y border-[#e3ddd2] bg-[#f2efe7]">
          <div className="mx-auto grid max-w-[1440px] gap-7 px-5 py-8 sm:grid-cols-3 sm:px-8 lg:px-14">
            {[
              { number: '01', title: 'Small by choice', text: 'A considered collection, not an endless catalogue.' },
              { number: '02', title: 'Made to be useful', text: 'Practical resources with a little more thought in them.' },
              { number: '03', title: 'A human pace', text: 'Independent work made slowly, and shared honestly.' },
            ].map((item) => <div key={item.number} className="flex gap-4"><span className="pt-0.5 font-display text-[16px] italic text-[#b39c76]">{item.number}</span><div><p className="text-[13px] font-medium text-[#453d32]">{item.title}</p><p className="mt-1 text-[11px] leading-5 text-[#80786c]">{item.text}</p></div></div>)}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-32">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><Eyebrow>A few good things</Eyebrow><h2 className="font-display text-[42px] leading-none tracking-[-1px] text-[#332d26] sm:text-[54px]">The collection<span className="text-[#b49c75]">.</span></h2></div>
            <Link to="/products" className="focus-ring group inline-flex items-center gap-2 self-start text-[12px] text-[#796a53] transition hover:text-[#332d26] sm:self-auto">See everything <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></Link>
          </div>
          <div className="grid gap-x-7 gap-y-11 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
            {featured.map((product) => <ProductCard key={product.id} product={product} onSelect={setSelected} />)}
          </div>
        </section>

        <section className="bg-[#e9e4d9]">
          <div className="mx-auto grid max-w-[1440px] items-center gap-9 px-5 py-16 sm:px-8 md:grid-cols-[.75fr_1fr] md:gap-20 md:py-24 lg:px-14">
            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-[4px] bg-[#d4c8b4]">
              <div className="absolute h-[250px] w-[250px] rounded-full border border-[#9d8b6d]/40 md:h-[330px] md:w-[330px]" />
              <div className="absolute h-[195px] w-[195px] rounded-full border border-[#9d8b6d]/50 md:h-[258px] md:w-[258px]" />
              <div className="absolute h-[140px] w-[140px] rounded-full bg-[#b29e7e] shadow-[inset_-20px_-10px_38px_rgba(60,45,25,.12)] md:h-[180px] md:w-[180px]" />
              <div className="relative z-10 -rotate-6 font-display text-[28px] italic tracking-[-.5px] text-[#f1eadc]">A good pace.</div>
              <span className="absolute bottom-5 left-5 text-[9px] tracking-[.22em] text-[#675a46]">THE DONLUSSO CIRCLE / 2025</span>
            </div>
            <div className="max-w-[570px]">
              <Eyebrow>Good company, better work</Eyebrow>
              <h2 className="font-display text-[43px] leading-[1.05] tracking-[-1.2px] text-[#332d26] sm:text-[58px]">A circle for the<br /><i className="font-normal text-[#947f5d]">long way round.</i></h2>
              <p className="mt-6 max-w-[470px] text-[14px] leading-7 text-[#6f685d]">The DonLusso Circle is a thoughtful membership for your creative practice. Get the whole collection, a new monthly note, and a friendly place to keep going.</p>
              <ul className="mt-6 space-y-3 text-[12px] text-[#60594e]">
                {['Every current and future resource', 'Monthly studio notes, made to be useful', 'A private community without the noise'].map((item) => <li key={item} className="flex items-center gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#b9a884] text-[#927d58]"><Check size={11} /></span>{item}</li>)}
              </ul>
              <Link to="/membership" className="focus-ring group mt-8 inline-flex items-center gap-3 rounded-full border border-[#7d715e] px-6 py-3.5 text-[12px] text-[#433b30] transition hover:bg-[#433b30] hover:text-[#f7f4ed]">Find your place <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
          <div className="grid gap-9 lg:grid-cols-[.65fr_1fr] lg:gap-20">
            <div><Eyebrow>A note from the studio</Eyebrow><h2 className="font-display text-[40px] leading-[1.1] tracking-[-1px] text-[#332d26] sm:text-[48px]">The internet can<br />feel a little <i>quieter.</i></h2></div>
            <div className="max-w-[590px] self-end">
              <p className="font-display text-[22px] leading-[1.55] text-[#655d51]">“We believe useful things can also be beautiful. That a slower pace can lead to better work. And that the right tool can make a good idea feel possible.”</p>
              <p className="mt-5 text-[10px] uppercase tracking-[.18em] text-[#a08c69]">A thought from the DonLusso studio</p>
            </div>
          </div>
          <div className="mt-16 grid gap-4 border-t border-[#e1dace] pt-6 md:grid-cols-3">
            {[
              { name: 'Sam R.', role: 'Independent designer', quote: 'A rare corner of the internet that feels genuinely considered. I use The Good Notes every day.' },
              { name: 'Mina L.', role: 'Writer & maker', quote: 'The resources feel like they came from someone who actually does the work. Simple, useful, lovely.' },
              { name: 'Theo W.', role: 'Creative founder', quote: 'The Circle gave me a bit of structure and a much kinder way to think about my own pace.' },
            ].map((review) => <blockquote key={review.name} className="rounded-[4px] bg-[#f2efe7] p-5 sm:p-6"><div className="mb-4 flex gap-1 text-[#b49a6d]"><span>•</span><span>•</span><span>•</span><span>•</span><span>•</span></div><p className="font-display text-[17px] leading-[1.5] text-[#514a40]">“{review.quote}”</p><footer className="mt-5 text-[10px] uppercase tracking-[.12em] text-[#8c8376]">{review.name} <span className="px-1.5 text-[#b5a88f]">/</span> {review.role}</footer></blockquote>)}
          </div>
        </section>

        <section className="bg-[#332d26] px-5 py-16 text-[#f6f1e7] sm:px-8 sm:py-20 lg:px-14">
          <div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
            <div><Eyebrow>When you are ready</Eyebrow><h2 className="font-display text-[37px] leading-tight sm:text-[49px]">Make space for the work.</h2><p className="mt-3 text-[12px] text-[#c5bdae]">A few good tools. A little good company.</p></div>
            <Link to="/products" className="focus-ring group inline-flex items-center gap-3 rounded-full bg-[#d1bd99] px-6 py-4 text-[12px] font-medium text-[#332d26] transition hover:bg-[#e0d1b5]">Browse the collection <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></Link>
          </div>
        </section>
      </main>
      <ProductDialog product={selected} onClose={() => setSelected(null)} />
    </>
  )
}

export function ProductsPage() {
  const [selected, setSelected] = useState<Product | null>(null)
  const [category, setCategory] = useState('Everything')
  const [query, setQuery] = useState('')
  const categories = ['Everything', ...Array.from(new Set(products.map((product) => product.category)))]
  const filtered = useMemo(() => products.filter((product) => (category === 'Everything' || product.category === category) && `${product.title} ${product.description} ${product.category}`.toLowerCase().includes(query.toLowerCase())), [category, query])

  return (
    <>
      <main className="page-enter mx-auto min-h-[70vh] max-w-[1440px] px-5 pb-20 pt-12 sm:px-8 sm:pt-16 lg:px-14 lg:pb-28">
        <div className="flex flex-col justify-between gap-8 border-b border-[#e2dbcf] pb-9 sm:flex-row sm:items-end">
          <div><Eyebrow>The DonLusso collection</Eyebrow><h1 className="font-display text-[50px] leading-none tracking-[-1.8px] text-[#332d26] sm:text-[68px]">Good things,<br className="sm:hidden" /> <i className="font-normal text-[#9b8663]">well made.</i></h1><p className="mt-5 max-w-[480px] text-[13px] leading-6 text-[#777064]">A small library of digital goods for independent minds. Find the piece that meets you where you are.</p></div>
          <div className="max-w-[340px] border-l border-[#c9b895] pl-4 text-[11px] leading-5 text-[#82796c]"><span className="font-medium text-[#554c40]">A note on buying:</span> product buttons are visual previews only. Checkout is not connected on this site.</div>
        </div>
        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`focus-ring rounded-full border px-4 py-2 text-[10px] transition ${category === item ? 'border-[#3c352d] bg-[#3c352d] text-[#f7f4ed]' : 'border-[#dfd8cc] text-[#797165] hover:border-[#b9a783] hover:text-[#332d26]'}`}>{item}</button>)}
          </div>
          <label className="flex min-w-[220px] items-center gap-2 border-b border-[#dcd4c7] py-2 text-[#82796c] focus-within:border-[#9c8661]"><Search size={15} /><span className="sr-only">Search products</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find something..." className="w-full bg-transparent text-[12px] text-[#403a32] outline-none placeholder:text-[#a29a8e]" /></label>
        </div>
        {filtered.length > 0 ? <div className="mt-10 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">{filtered.map((product) => <ProductCard key={product.id} product={product} onSelect={setSelected} />)}</div> : <div className="my-20 flex flex-col items-center border border-dashed border-[#d8cebd] px-5 py-16 text-center"><Search size={22} className="text-[#a3906e]" /><h2 className="mt-4 font-display text-2xl">Nothing found just yet.</h2><p className="mt-2 text-[12px] text-[#81796d]">Try another search or browse all of the collection.</p><button className="mt-5 text-[11px] uppercase tracking-[.13em] text-[#8d7958]" onClick={() => { setQuery(''); setCategory('Everything') }}>Clear filters</button></div>}
        <div className="mt-20 flex flex-col items-start justify-between gap-5 border-t border-[#e2dbcf] pt-8 sm:flex-row sm:items-center"><div><Eyebrow>Want the whole library?</Eyebrow><p className="font-display text-[26px] text-[#423b31]">There is a place for that.</p></div><Link to="/membership" className="focus-ring group inline-flex items-center gap-2 rounded-full border border-[#b8a47f] px-5 py-3 text-[11px] text-[#5e513d] transition hover:bg-[#e9e1d2]">Meet the DonLusso Circle <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" /></Link></div>
      </main>
      <ProductDialog product={selected} onClose={() => setSelected(null)} />
    </>
  )
}

export function MembershipPage() {
  const [annual, setAnnual] = useState(true)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const { notify } = useToast()
  const price = annual ? membership.annualPrice : membership.monthlyPrice
  return (
    <main className="page-enter">
      <section className="relative overflow-hidden border-b border-[#e3ddd2] bg-[#f1ede4]">
        <div className="pointer-events-none absolute -right-28 -top-40 h-[470px] w-[470px] rounded-full border border-[#d2c6af] opacity-60 md:right-[7%] md:top-[-240px] md:h-[650px] md:w-[650px]" />
        <div className="pointer-events-none absolute -right-14 -top-24 h-[370px] w-[370px] rounded-full border border-[#d2c6af] opacity-60 md:right-[11%] md:top-[-190px] md:h-[550px] md:w-[550px]" />
        <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.1fr_.7fr] md:items-center md:py-24 lg:px-14 lg:py-28">
          <div className="max-w-[670px]">
            <Eyebrow>Membership / The DonLusso Circle</Eyebrow>
            <h1 className="font-display text-[51px] leading-[.99] tracking-[-2px] text-[#332d26] sm:text-[73px]">Good company<br />for the <i className="font-normal text-[#9b8663]">long way.</i></h1>
            <p className="mt-6 max-w-[500px] text-[14px] leading-7 text-[#746d62]">{membership.description}</p>
            <div className="mt-7 flex flex-wrap items-center gap-4"><a href="#plans" className="focus-ring group inline-flex items-center gap-3 rounded-full bg-[#342d25] px-6 py-4 text-[12px] text-[#f8f5ee] transition hover:bg-[#514537]">See membership <ArrowDownIcon /></a><span className="text-[11px] text-[#8d8477]">A preview only · no checkout connected</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-[390px] rounded-[5px] border border-[#ded5c6] bg-[#faf8f2] p-6 shadow-[0_20px_60px_rgba(61,49,31,.08)] sm:p-8">
            <div className="absolute right-0 top-0 h-20 w-20 overflow-hidden"><span className="absolute right-[-35px] top-[14px] w-[130px] rotate-45 bg-[#c4ad82] py-1 text-center text-[8px] font-semibold tracking-[.1em] text-[#433b2d]">MEMBER NOTE</span></div>
            <p className="text-[10px] uppercase tracking-[.21em] text-[#998665]">Your studio, with company</p>
            <h2 className="mt-3 font-display text-[31px] tracking-[-.5px] text-[#3b342c]">The Circle</h2>
            <p className="mt-2 text-[12px] leading-6 text-[#81796d]">A little structure, a little encouragement, and the whole DonLusso library.</p>
            <div className="my-6 border-t border-[#e7dfd2]" />
            <div className="space-y-4">{membership.benefits.slice(0, 4).map((benefit) => <div key={benefit} className="flex items-start gap-3 text-[11px] leading-5 text-[#5e574c]"><Check size={14} className="mt-0.5 shrink-0 text-[#a28b62]" />{benefit}</div>)}</div>
            <div className="mt-7 border-t border-[#e7dfd2] pt-5 text-[11px] text-[#82796c]">Made for people who want to keep making.</div>
          </div>
        </div>
      </section>
      <section id="plans" className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[.8fr_1fr] md:py-24 lg:px-14">
        <div className="max-w-[450px]">
          <Eyebrow>Choose a pace</Eyebrow><h2 className="font-display text-[43px] leading-[1.05] tracking-[-1.1px] text-[#342e27] sm:text-[54px]">A little more room<br />to <i className="font-normal text-[#9b8663]">do good work.</i></h2>
          <p className="mt-5 text-[13px] leading-7 text-[#787166]">One membership. Two ways to settle in. Either way, you will have a thoughtful place to find your next good step.</p>
          <div className="mt-7 flex items-center gap-1 rounded-full bg-[#eee9df] p-1.5">
            <button onClick={() => setAnnual(false)} className={`focus-ring flex-1 rounded-full px-4 py-2.5 text-[11px] transition ${!annual ? 'bg-[#fbfaf6] text-[#423b32] shadow-sm' : 'text-[#827a6e]'}`}>Monthly</button>
            <button onClick={() => setAnnual(true)} className={`focus-ring flex-1 rounded-full px-4 py-2.5 text-[11px] transition ${annual ? 'bg-[#fbfaf6] text-[#423b32] shadow-sm' : 'text-[#827a6e]'}`}>Yearly <span className="ml-1 text-[#a38a5e]">save $38</span></button>
          </div>
        </div>
        <div className="rounded-[5px] border border-[#ded6c8] bg-[#fbfaf6] p-6 sm:p-9">
          <div className="flex items-start justify-between gap-4"><div><p className="text-[10px] uppercase tracking-[.19em] text-[#9a8869]">The DonLusso Circle</p><h3 className="mt-2 font-display text-[30px] text-[#3b342c]">All in, at your pace.</h3></div><div className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#d9cdb6] text-[#9c8560] sm:flex"><Sparkles size={18} /></div></div>
          <div className="mt-7 flex items-baseline gap-2"><span className="font-display text-[52px] leading-none tracking-[-2px] text-[#342e27]">${price}</span><span className="text-[12px] text-[#8a8175]">/ {annual ? 'year' : 'month'}</span></div>
          {annual && <p className="mt-2 text-[11px] text-[#8d8375]">That is $15.83 per month, billed yearly.</p>}
          <button onClick={() => notify('Membership checkout is not connected in this preview. No payment or membership has been created.')} className="focus-ring mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#342d25] px-5 py-4 text-[12px] font-medium text-[#f8f5ee] transition hover:bg-[#514537]">Join the Circle <ArrowUpRight size={14} /></button>
          <p className="mt-3 text-center text-[10px] leading-5 text-[#948b7e]">Preview only. No payment will be taken.</p>
          <div className="my-7 border-t border-[#e7dfd2]" />
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[.16em] text-[#8d816d]">Membership includes</p>
          <div className="grid gap-4 sm:grid-cols-2">{membership.benefits.map((benefit) => <div key={benefit} className="flex items-start gap-3 text-[11px] leading-5 text-[#625a4f]"><span className="mt-[1px] flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full bg-[#e9e2d4] text-[#907c58]"><Check size={10} /></span>{benefit}</div>)}</div>
        </div>
      </section>
      <section className="bg-[#efebe2]">
        <div className="mx-auto max-w-[1000px] px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-8 text-center"><Eyebrow>A few things you might wonder</Eyebrow><h2 className="font-display text-[39px] tracking-[-.7px] text-[#332d26]">The practical bits.</h2></div>
          {[
            ['What happens when I join?', 'Membership is a preview in this site. In a live DonLusso experience, you would get access to the entire product collection, monthly studio notes, and the private community. No checkout is connected here.'],
            ['Can I cancel whenever I like?', 'In a live membership, you would be able to manage or cancel your plan from your account. This prototype does not take payment or create memberships.'],
            ['How do I get the resources?', 'Resources are digital downloads and workspaces. In a live store, delivery details would be shared after checkout.'],
            ['Is this an actual community?', 'Discord and Telegram are represented in the sample dashboard only. No external services or invitations are connected.'],
          ].map(([question, answer], index) => <div key={question} className="border-t border-[#ddd5c8] last:border-b"><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index} className="focus-ring flex w-full items-center justify-between gap-5 py-5 text-left text-[13px] text-[#4b4439]"><span>{question}</span><ChevronDown size={16} className={`shrink-0 text-[#9d8863] transition-transform ${openFaq === index ? 'rotate-180' : ''}`} /></button>{openFaq === index && <p className="max-w-[760px] pb-5 pr-10 text-[12px] leading-6 text-[#777064]">{answer}</p>}</div>)}
        </div>
      </section>
    </main>
  )
}

function ArrowDownIcon() {
  return <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
}

export function AuthPage({ mode }: { mode: 'login' | 'register' }) {
  const { notify } = useToast()
  const isLogin = mode === 'login'
  const [submitted, setSubmitted] = useState(false)
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    notify('This preview does not connect to an account service. Your information has not been sent or saved.')
  }
  return (
    <main className="page-enter grid min-h-[calc(100dvh-150px)] lg:grid-cols-[.85fr_1.15fr]">
      <section className="relative hidden overflow-hidden bg-[#e9e2d5] lg:flex lg:min-h-[700px] lg:flex-col lg:justify-between lg:px-14 lg:py-12">
        <div className="absolute -right-40 top-[13%] h-[500px] w-[500px] rounded-full border border-[#c6b99f]" /><div className="absolute -right-24 top-[22%] h-[370px] w-[370px] rounded-full border border-[#c6b99f]" /><div className="absolute right-[8%] top-[34%] h-[220px] w-[220px] rounded-full bg-[#c1af8e]" />
        <div className="relative z-10"><Eyebrow>DonLusso / private studio</Eyebrow><p className="font-display text-[48px] leading-[1.12] tracking-[-1px] text-[#3a332b]">A good place<br />to return to.</p></div>
        <div className="relative z-10 flex items-end justify-between"><p className="max-w-[240px] text-[12px] leading-6 text-[#756b5d]">Your resources, your notes, and a little company for what comes next.</p><span className="font-display text-[22px] italic text-[#87775b]">DL.</span></div>
      </section>
      <section className="flex items-center justify-center px-5 py-12 sm:px-8 lg:px-14">
        <div className="w-full max-w-[430px]">
          <div className="mb-8 lg:hidden"><Eyebrow>DonLusso / private studio</Eyebrow><div className="font-display text-[35px] tracking-[-.7px]">Welcome to your studio.</div></div>
          <Eyebrow>{isLogin ? 'A familiar place' : 'Your next chapter'}</Eyebrow>
          <h1 className="font-display text-[43px] leading-[1.05] tracking-[-1.2px] text-[#342e27]">{isLogin ? 'Welcome back.' : 'Make yourself at home.'}</h1>
          <p className="mt-3 text-[12px] leading-6 text-[#81796d]">{isLogin ? 'Sign in to find your collection and keep going.' : 'Create an account for a place to keep your resources close.'}</p>
          <div className="mt-7 rounded-[4px] border border-[#ded5c6] bg-[#f2eee5] px-4 py-3 text-[11px] leading-5 text-[#766c5c]"><span className="font-semibold text-[#574c3a]">Preview note.</span> Account access is presentation-only. No credentials are sent or saved.</div>
          <form onSubmit={onSubmit} className="mt-7 space-y-5">
            {!isLogin && <label className="block"><span className="mb-2 block text-[11px] text-[#655d52]">Your name</span><input required autoComplete="name" name="name" type="text" placeholder="How should we address you?" className="focus-ring h-12 w-full rounded-[3px] border border-[#ded7ca] bg-[#fbfaf6] px-4 text-[12px] text-[#433d35] outline-none placeholder:text-[#aaa195]" /></label>}
            <label className="block"><span className="mb-2 block text-[11px] text-[#655d52]">Email address</span><input required autoComplete="email" name="email" type="email" placeholder="you@example.com" className="focus-ring h-12 w-full rounded-[3px] border border-[#ded7ca] bg-[#fbfaf6] px-4 text-[12px] text-[#433d35] outline-none placeholder:text-[#aaa195]" /></label>
            <label className="block"><span className="mb-2 block text-[11px] text-[#655d52]">Password</span><input required autoComplete={isLogin ? 'current-password' : 'new-password'} minLength={8} name="password" type="password" placeholder="At least 8 characters" className="focus-ring h-12 w-full rounded-[3px] border border-[#ded7ca] bg-[#fbfaf6] px-4 text-[12px] text-[#433d35] outline-none placeholder:text-[#aaa195]" /></label>
            <button type="submit" className="focus-ring flex w-full items-center justify-center gap-2 rounded-full bg-[#342d25] px-5 py-4 text-[12px] font-medium text-[#f8f5ee] transition hover:bg-[#514537]">{isLogin ? 'Continue' : 'Create account preview'} <ArrowRight size={14} /></button>
          </form>
          {submitted && <p role="status" className="mt-4 text-center text-[11px] leading-5 text-[#82745b]">Form checked locally. Account services are not connected.</p>}
          <div className="my-6 flex items-center gap-3 text-[10px] text-[#9e9588]"><span className="h-px flex-1 bg-[#e2dbcf]" />OR<span className="h-px flex-1 bg-[#e2dbcf]" /></div>
          <p className="text-center text-[11px] text-[#7c7468]">{isLogin ? 'New to the studio?' : 'Already have a place here?'} <Link className="focus-ring ml-1 text-[#806d4d] underline decoration-[#cabb9f] underline-offset-4" to={isLogin ? '/register' : '/login'}>{isLogin ? 'Create an account' : 'Sign in'}</Link></p>
          <p className="mt-6 text-center text-[10px] leading-5 text-[#a0988c]">By continuing, you are only viewing a presentation prototype. No information leaves this page.</p>
        </div>
      </section>
    </main>
  )
}

type DashboardTab = 'overview' | 'products' | 'membership' | 'history' | 'settings'

export function DashboardPage() {
  const [tab, setTab] = useState<DashboardTab>('overview')
  const [profileSaved, setProfileSaved] = useState(false)
  const { notify } = useToast()
  const tabItems: { id: DashboardTab; label: string; icon: typeof Package }[] = [
    { id: 'overview', label: 'Overview', icon: Sparkles },
    { id: 'products', label: 'My products', icon: Package },
    { id: 'membership', label: 'Membership', icon: BadgeCheck },
    { id: 'history', label: 'Purchase history', icon: Clock3 },
    { id: 'settings', label: 'Account settings', icon: CircleHelp },
  ]
  const handleAction = (item: string) => notify(`${item} is a sample dashboard action. No account changes or external access are connected.`)
  return (
    <main className="page-enter min-h-[75vh] bg-[#f5f2eb]">
      <div className="mx-auto max-w-[1440px] px-5 py-7 sm:px-8 lg:px-14 lg:py-10">
        <div className="mb-7 flex flex-col justify-between gap-4 border-b border-[#e2dbcf] pb-5 sm:flex-row sm:items-center">
          <div><div className="flex items-center gap-2"><Eyebrow>Member studio</Eyebrow><span className="-mt-4 rounded-full border border-[#d7c7a7] bg-[#eee7d9] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[.11em] text-[#7f6a43]">Sample prototype</span></div><h1 className="font-display text-[36px] leading-none tracking-[-.7px] text-[#342e27]">Your studio.</h1></div>
          <p className="max-w-[440px] text-[11px] leading-5 text-[#887f73]">This is a visual sample dashboard, not a protected or authenticated account. All account data shown is fictional.</p>
        </div>
        <div className="grid gap-7 lg:grid-cols-[220px_1fr] lg:gap-10">
          <aside className="lg:sticky lg:top-5 lg:h-fit">
            <div className="mb-5 flex items-center gap-3 border-b border-[#e4ddd1] pb-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ded3bf] font-display text-[17px] text-[#66563c]">AM</span>
              <div><p className="text-[12px] font-medium text-[#443d34]">{dashboardSample.name}</p><p className="mt-1 text-[10px] text-[#91887b]">Circle member</p></div>
            </div>
            <nav className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-1" aria-label="Dashboard sections">
              {tabItems.map((item) => { const Icon = item.icon; return <button key={item.id} onClick={() => setTab(item.id)} className={`focus-ring flex items-center gap-2.5 rounded-[3px] px-3 py-3 text-left text-[11px] transition ${tab === item.id ? 'bg-[#e9e2d6] text-[#3d352a]' : 'text-[#81796d] hover:bg-[#eee9e0] hover:text-[#40392f]'}`}><Icon size={15} className={tab === item.id ? 'text-[#9d8359]' : ''} />{item.label}</button> }) }
            </nav>
            <button onClick={() => handleAction('Sign out')} className="focus-ring mt-5 hidden items-center gap-2 border-t border-[#e4ddd1] pt-5 text-[11px] text-[#8b8276] hover:text-[#40392f] lg:flex"><LockKeyhole size={14} /> Sign out preview</button>
          </aside>
          <section className="min-w-0">
            {tab === 'overview' && <div className="space-y-5">
              <div className="grid gap-4 md:grid-cols-[1.3fr_.7fr]">
                <div className="relative overflow-hidden rounded-[4px] bg-[#e7e1d5] p-6 sm:p-8"><div className="absolute -right-9 -top-12 h-52 w-52 rounded-full border border-[#c7b89b]" /><div className="absolute -right-1 -top-4 h-36 w-36 rounded-full border border-[#c7b89b]" /><div className="relative"><Eyebrow>A note for you</Eyebrow><h2 className="font-display text-[32px] tracking-[-.7px] text-[#3a332a]">Good to see you,<br /><i>{dashboardSample.name.split(' ')[0]}.</i></h2><p className="mt-4 max-w-[390px] text-[11px] leading-6 text-[#786f62]">Your studio is here when you need it. Pick up an idea, revisit a useful resource, or take the next small step.</p><button onClick={() => setTab('products')} className="focus-ring group mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.12em] text-[#806d4e]">Open your library <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" /></button></div></div>
                <div className="flex flex-col justify-between rounded-[4px] border border-[#e1d9cb] bg-[#fbfaf6] p-6"><div><Eyebrow>Your membership</Eyebrow><span className="inline-flex items-center gap-2 rounded-full bg-[#e7ecdf] px-3 py-1.5 text-[10px] text-[#59634e]"><span className="h-1.5 w-1.5 rounded-full bg-[#82936f]" />{dashboardSample.membershipStatus}</span><p className="mt-4 text-[11px] leading-5 text-[#81796c]">Next renewal <span className="block text-[13px] text-[#524a3f]">{dashboardSample.renewalDate}</span></p></div><button onClick={() => setTab('membership')} className="focus-ring mt-6 flex items-center justify-between border-t border-[#e9e2d7] pt-4 text-[10px] uppercase tracking-[.11em] text-[#847254]">View membership <ArrowRight size={13} /></button></div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {[{ label: 'In your library', value: '03', icon: Package }, { label: 'Circle since', value: 'Sep ’24', icon: CalendarDays }, { label: 'Next studio note', value: 'Nov 02', icon: Mail }].map((stat) => { const Icon = stat.icon; return <div key={stat.label} className="flex items-center gap-4 rounded-[4px] border border-[#e5ded2] bg-[#fbfaf6] p-4"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0ece3] text-[#967f59]"><Icon size={15} /></span><div><p className="text-[10px] text-[#8e8578]">{stat.label}</p><p className="mt-1 font-display text-[20px] text-[#433c32]">{stat.value}</p></div></div> }) }
              </div>
              <div className="rounded-[4px] border border-[#e5ded2] bg-[#fbfaf6] p-5 sm:p-6"><div className="mb-5 flex items-center justify-between"><div><Eyebrow>Back on your desk</Eyebrow><h3 className="font-display text-[24px] text-[#443c32]">Your recent resources</h3></div><button onClick={() => setTab('products')} className="focus-ring text-[10px] text-[#8a7654]">See all</button></div><div className="space-y-3">{products.filter((product) => dashboardSample.purchased.includes(product.title)).slice(0, 2).map((product) => <div key={product.id} className="flex items-center gap-4 border-t border-[#ede7dd] pt-3"><div className="h-[62px] w-[56px] shrink-0 overflow-hidden rounded-[2px]"><ProductArtwork kind={product.artwork} compact /></div><div className="min-w-0 flex-1"><p className="font-display text-[17px] text-[#453d33]">{product.title}</p><p className="mt-1 text-[10px] text-[#8d8579]">{product.format}</p></div><button onClick={() => handleAction(`Open ${product.title}`)} className="focus-ring flex items-center gap-2 rounded-full border border-[#d9cfbd] px-3 py-2 text-[10px] text-[#77654a] transition hover:bg-[#f0ece3]"><Download size={13} /><span className="hidden sm:inline">Open</span></button></div>)}</div></div>
              <div className="grid gap-4 md:grid-cols-2"><div className="rounded-[4px] bg-[#e9e4d9] p-5"><div className="flex items-start gap-3"><MessageCircle size={16} className="mt-1 text-[#907d59]" /><div><p className="text-[12px] font-medium text-[#4b4338]">A little good company</p><p className="mt-1 text-[10px] leading-5 text-[#7f7669]">The member community is represented in this sample only. External access is not connected.</p><div className="mt-4 flex gap-2"><button onClick={() => handleAction('Discord community')} className="focus-ring rounded-full border border-[#c9bca4] px-3 py-2 text-[10px] text-[#675a43]">Discord preview</button><button onClick={() => handleAction('Telegram community')} className="focus-ring rounded-full border border-[#c9bca4] px-3 py-2 text-[10px] text-[#675a43]">Telegram preview</button></div></div></div></div><div className="rounded-[4px] border border-[#e5ded2] bg-[#fbfaf6] p-5"><div className="flex items-start gap-3"><ShieldCheck size={16} className="mt-1 text-[#907d59]" /><div><p className="text-[12px] font-medium text-[#4b4338]">A quieter kind of account</p><p className="mt-1 text-[10px] leading-5 text-[#7f7669]">Your real account and preferences would live here in the full product.</p><button onClick={() => setTab('settings')} className="focus-ring mt-3 text-[10px] text-[#806d4e] underline underline-offset-4">View account preview</button></div></div></div></div>
            </div>}
            {tab === 'products' && <div className="rounded-[4px] border border-[#e5ded2] bg-[#fbfaf6] p-5 sm:p-7"><Eyebrow>Your library / 3 resources</Eyebrow><h2 className="font-display text-[31px] text-[#423a30]">Things to come back to.</h2><p className="mt-2 text-[11px] text-[#8a8174]">Sample purchases only. Digital access is not connected.</p><div className="mt-6 space-y-3">{products.filter((product) => dashboardSample.purchased.includes(product.title)).map((product, index) => <div key={product.id} className="grid grid-cols-[65px_1fr_auto] items-center gap-4 border-t border-[#ece5da] py-4"><div className="h-[76px] overflow-hidden"><ProductArtwork kind={product.artwork} compact /></div><div><p className="font-display text-[18px] text-[#463e34]">{product.title}</p><p className="mt-1 text-[10px] text-[#8c8377]">{product.category} <span className="px-1.5">/</span> Added {index === 0 ? 'September 2025' : 'June 2025'}</p><p className="mt-1 text-[10px] text-[#a09587]">{product.format}</p></div><button onClick={() => handleAction(`Open ${product.title}`)} className="focus-ring flex items-center gap-2 rounded-full border border-[#d9cfbd] px-3 py-2 text-[10px] text-[#77654a]"><Download size={13} /><span className="hidden sm:inline">Open</span></button></div>)}</div></div>}
            {tab === 'membership' && <div className="grid gap-5 md:grid-cols-[1fr_.75fr]"><div className="rounded-[4px] border border-[#e5ded2] bg-[#fbfaf6] p-6 sm:p-8"><Eyebrow>Your place in the Circle</Eyebrow><h2 className="font-display text-[32px] text-[#423a30]">The DonLusso Circle</h2><div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#e7ecdf] px-3 py-1.5 text-[10px] text-[#59634e]"><span className="h-1.5 w-1.5 rounded-full bg-[#82936f]" />Sample status: {dashboardSample.membershipStatus}</div><p className="mt-5 max-w-[420px] text-[11px] leading-6 text-[#7c7468]">This is example membership information for the prototype. No membership has been created or billed.</p><div className="mt-6 border-t border-[#ece5da] pt-5"><p className="text-[10px] text-[#8a8174]">Sample renewal date</p><p className="mt-1 flex items-center gap-2 text-[13px] text-[#51493e]"><CalendarDays size={14} className="text-[#9a8560]" />{dashboardSample.renewalDate}</p></div><button onClick={() => handleAction('Membership management')} className="focus-ring mt-6 rounded-full border border-[#d4c6ad] px-4 py-2.5 text-[10px] text-[#77654a]">Manage membership preview</button></div><div className="rounded-[4px] bg-[#e9e4d9] p-6"><Eyebrow>Inside the Circle</Eyebrow><div className="space-y-4">{membership.benefits.map((item) => <div key={item} className="flex gap-3 text-[11px] leading-5 text-[#5e574c]"><Check size={14} className="mt-0.5 text-[#9a8560]" />{item}</div>)}</div><div className="mt-6 border-t border-[#d9d0c0] pt-4"><p className="text-[10px] leading-5 text-[#847a6b]">Member community links are not connected. No Discord or Telegram invite is active.</p></div></div></div>}
            {tab === 'history' && <div className="rounded-[4px] border border-[#e5ded2] bg-[#fbfaf6] p-5 sm:p-7"><Eyebrow>A record of the good things</Eyebrow><h2 className="font-display text-[31px] text-[#423a30]">Purchase history</h2><p className="mt-2 text-[11px] text-[#8a8174]">Fictional transaction history for visual reference.</p><div className="mt-6 hidden grid-cols-[1fr_1.5fr_.7fr_.6fr] gap-3 border-b border-[#e9e2d7] pb-3 text-[9px] uppercase tracking-[.13em] text-[#988f82] sm:grid"><span>Date</span><span>Item</span><span>Type</span><span className="text-right">Amount</span></div>{dashboardSample.history.map((row) => <div key={`${row.date}-${row.item}`} className="grid grid-cols-[1fr_auto] gap-2 border-b border-[#eee8df] py-4 last:border-b-0 sm:grid-cols-[1fr_1.5fr_.7fr_.6fr] sm:gap-3"><span className="text-[10px] text-[#867d71]">{row.date}</span><span className="text-[11px] text-[#51493f]">{row.item}</span><span className="hidden text-[10px] text-[#8d8477] sm:block">{row.type}</span><span className="text-right text-[11px] text-[#51493f]">{row.amount}</span></div>)}</div>}
            {tab === 'settings' && <div className="max-w-[760px] rounded-[4px] border border-[#e5ded2] bg-[#fbfaf6] p-5 sm:p-7"><Eyebrow>Just for the sample</Eyebrow><h2 className="font-display text-[31px] text-[#423a30]">Account settings</h2><p className="mt-2 text-[11px] leading-5 text-[#8a8174]">This form is illustrative. It does not update or save account information.</p><form className="mt-6 grid gap-5 sm:grid-cols-2" onSubmit={(event) => { event.preventDefault(); setProfileSaved(true); handleAction('Save profile') }}><label className="text-[10px] text-[#6f675b]">Display name<input defaultValue={dashboardSample.name} className="focus-ring mt-2 h-11 w-full rounded-[3px] border border-[#ded7ca] bg-[#f9f7f1] px-3 text-[12px] text-[#453e34] outline-none" /></label><label className="text-[10px] text-[#6f675b]">Email address<input defaultValue="alex.morgan@example.com" type="email" className="focus-ring mt-2 h-11 w-full rounded-[3px] border border-[#ded7ca] bg-[#f9f7f1] px-3 text-[12px] text-[#453e34] outline-none" /></label><label className="flex items-start gap-3 border-t border-[#eee8df] pt-4 text-[10px] leading-5 text-[#786f63] sm:col-span-2"><input type="checkbox" defaultChecked className="mt-0.5 accent-[#9d8359]" />Send me the monthly DonLusso studio note. This is a sample preference only.</label><div className="sm:col-span-2"><button type="submit" className="focus-ring rounded-full bg-[#342d25] px-5 py-3 text-[11px] text-[#f8f5ee]">Save settings preview</button>{profileSaved && <span className="ml-3 text-[10px] text-[#8b7856]">Local form submitted. Nothing was saved.</span>}</div></form><div className="mt-7 border-t border-[#e9e2d7] pt-5"><p className="text-[11px] font-medium text-[#4f483e]">Community access</p><p className="mt-1 text-[10px] leading-5 text-[#867d71]">Discord and Telegram access details are sample content only. External services are not connected.</p><div className="mt-3 flex flex-wrap gap-3"><button onClick={() => handleAction('Discord access')} className="focus-ring flex items-center gap-2 rounded-full border border-[#ddd3c1] px-4 py-2.5 text-[10px] text-[#6c5e47]">Discord <ExternalLink size={12} /></button><button onClick={() => handleAction('Telegram access')} className="focus-ring flex items-center gap-2 rounded-full border border-[#ddd3c1] px-4 py-2.5 text-[10px] text-[#6c5e47]">Telegram <ExternalLink size={12} /></button></div></div></div>}
          </section>
        </div>
      </div>
    </main>
  )
}
