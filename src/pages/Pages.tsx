import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Activity, ArrowRight, ArrowUpRight, BookOpen, ChartNoAxesColumnIncreasing,
  Check, ChevronDown, CircleHelp, Eye, EyeOff, FileText, GraduationCap, Landmark,
  LockKeyhole, Mail, MessageCircle, ScanLine, ShieldAlert, ShieldCheck,
  Users, WalletCards,
} from 'lucide-react'
import { dashboardSample, demoMetrics, membership, products, type Product } from '../data/store'
import { useToast } from '../components/Toast'

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-[9px] font-semibold uppercase tracking-[.24em] text-[#c7b276]">{children}</p>
}

function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description: string }) {
  return <div className="mx-auto max-w-[760px] text-center"><Eyebrow>{eyebrow}</Eyebrow><h1 className="font-display text-[clamp(42px,7vw,70px)] leading-[1.02] tracking-[-1.8px] text-[#f0f0ed]">{title}</h1><p className="mx-auto mt-5 max-w-[620px] text-[13px] leading-7 text-[#a0a7b1] sm:text-[14px]">{description}</p></div>
}

const iconFor: Record<Product['icon'], typeof Activity> = {
  signal: Activity,
  analysis: ChartNoAxesColumnIncreasing,
  gold: Landmark,
  research: FileText,
  community: Users,
  education: GraduationCap,
}

function PhoneMockup() {
  return (
    <div className="phone-frame mx-auto">
      <div className="phone-notch" />
      <div className="phone-screen flex flex-col px-4 pb-4 pt-8 text-white">
        <div className="flex items-center justify-between pt-3 text-[8px] text-[#afb6c0]"><span>9:41</span><span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full border border-[#9aa3af]" /> 5G ▰</span></div>
        <div className="mt-6 flex items-center justify-between">
          <div><p className="font-display text-[19px] tracking-wide">DonLusso<span className="text-[#d5bd7d]">.</span></p><p className="text-[7px] uppercase tracking-[.22em] text-[#9aa3ae]">Trading intelligence</p></div>
          <span className="rounded-full border border-[#d2ba77]/20 bg-[#d2ba77]/10 px-2 py-1 text-[6px] uppercase tracking-[.1em] text-[#dcca98]">Demo screen</span>
        </div>
        <div className="mt-5 flex items-end justify-between">
          <div><p className="text-[8px] text-[#96a0ac]">Market overview · example</p><p className="mt-1 font-display text-[19px]">Markets, in context.</p></div>
          <span className="text-[7px] text-[#8d96a2]">SAMPLE DATA</span>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="glass-surface rounded-xl p-2.5"><p className="text-[7px] text-[#a7adb7]">Gold · XAU/USD</p><p className="mt-1 font-display text-[16px]">Scenario study</p><p className="mt-1 text-[7px] text-[#c5ae74]">Hypothetical analysis</p></div>
          <div className="glass-surface rounded-xl p-2.5"><p className="text-[7px] text-[#a7adb7]">Session note</p><p className="mt-1 font-display text-[16px]">In focus</p><p className="mt-1 text-[7px] text-[#9fa9b4]">Demo · not live</p></div>
        </div>
        <div className="signal-chart relative mt-3 h-[116px] overflow-hidden rounded-xl border border-white/[.09] bg-[#111923] p-2.5">
          <div className="flex items-center justify-between text-[7px] text-[#9ca7b2]"><span>GOLD · STRUCTURE EXAMPLE</span><span>HYPOTHETICAL</span></div>
          <svg viewBox="0 0 260 78" preserveAspectRatio="none" className="mt-2 h-[68px] w-full" aria-label="Illustrative, non-live price chart">
            <defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#c9ad66" stopOpacity=".22" /><stop offset="100%" stopColor="#c9ad66" stopOpacity="0" /></linearGradient></defs>
            <path d="M0 59 C18 57 20 43 37 49 S57 57 72 39 S99 46 112 33 S138 42 152 28 S174 36 187 18 S209 28 224 15 S244 19 260 8 L260 78 L0 78 Z" fill="url(#chartFill)" />
            <path d="M0 59 C18 57 20 43 37 49 S57 57 72 39 S99 46 112 33 S138 42 152 28 S174 36 187 18 S209 28 224 15 S244 19 260 8" fill="none" stroke="#d4bb7b" strokeWidth="2" />
          </svg>
          <span className="absolute bottom-2 right-3 text-[6px] text-[#87919d]">Illustrative chart only</span>
        </div>
        <div className="mt-3 flex items-center justify-between"><p className="font-display text-[14px]">Recent research</p><span className="text-[7px] text-[#d1ba7b]">VIEW ALL <ArrowRight className="ml-1 inline" size={9} /></span></div>
        <div className="mt-2 space-y-2">
          {dashboardSample.recentSignals.slice(0, 2).map((signal) => <div key={signal.pair} className="glass-surface flex items-center justify-between rounded-xl px-2.5 py-2"><div className="flex items-center gap-2"><span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#d0b878]/10 text-[#d4bd80]"><ScanLine size={11} /></span><div><p className="text-[8px] font-medium">{signal.title}</p><p className="mt-0.5 text-[6px] text-[#8e99a5]">{signal.pair} · demo example</p></div></div><ArrowUpRight size={11} className="text-[#9da8b3]" /></div>)}
        </div>
        <div className="mt-auto pt-3">
          <div className="mb-2 rounded-xl border border-[#d0b878]/15 bg-[#d0b878]/[.07] px-2.5 py-2"><p className="text-[6px] uppercase tracking-[.12em] text-[#cfb979]">Membership status · sample</p><p className="mt-1 text-[8px] text-[#e0e3e7]">Prototype view · no account</p></div>
          <div className="flex justify-around border-t border-white/[.08] pt-2 text-[6px] text-[#89939f]"><span className="text-[#d5bf81]">Overview</span><span>Research</span><span>Learn</span><span>Profile</span></div>
        </div>
      </div>
    </div>
  )
}

function MetricPanel() {
  return (
    <div className="glass-surface rounded-2xl p-5 sm:p-7">
      <div className="mb-5 flex items-center justify-between gap-4"><div><Eyebrow>Illustrative figures</Eyebrow><p className="text-[12px] text-[#d8dbe0]">Sample numbers for design preview only</p></div><span className="rounded-full border border-[#d1b875]/25 px-2.5 py-1 text-[8px] uppercase tracking-[.12em] text-[#d5bf80]">Demo · not verified</span></div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4">
        {demoMetrics.map((metric) => <div key={metric.label} className="border-l border-[#ceb671]/45 pl-3"><p className="font-display text-[25px] leading-none text-[#e2d5ad] sm:text-[30px]">{metric.value}</p><p className="mt-2 text-[9px] uppercase tracking-[.12em] text-[#969eaa]">{metric.label}</p><p className="mt-1 text-[8px] text-[#747d89]">Demo · not verified performance</p></div>)}
      </div>
    </div>
  )
}

export function HomePage() {
  return (
    <main className="page-enter">
      <section className="relative isolate overflow-hidden">
        <div className="ambient-grid pointer-events-none absolute inset-0 -z-10" />
        <div className="pointer-events-none absolute -right-48 top-20 -z-10 h-[520px] w-[520px] rounded-full bg-[#193e4a]/25 blur-[100px]" />
        <div className="pointer-events-none absolute -left-48 top-48 -z-10 h-[400px] w-[400px] rounded-full bg-[#223b49]/15 blur-[100px]" />
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 pb-14 pt-10 sm:px-8 sm:pt-16 md:grid-cols-[1fr_.85fr] md:gap-5 md:pb-20 lg:px-10 lg:pt-20">
          <div className="reveal relative z-10 max-w-[660px] text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d0b878]/25 bg-[#d0b878]/[.07] px-3.5 py-2 text-[8px] font-semibold uppercase tracking-[.2em] text-[#d9c58c] sm:text-[9px]"><span className="h-1.5 w-1.5 rounded-full bg-[#c8b273]" /> PREMIUM TRADING INTELLIGENCE</span>
            <h1 className="mt-6 font-display text-[clamp(46px,7vw,78px)] leading-[.99] tracking-[-2.3px] text-[#f1f1ee]">Trade with clarity.<br /><span className="text-[#d5c28e]">Think beyond</span><br className="hidden sm:block" /> the market.</h1>
            <p className="mx-auto mt-6 max-w-[540px] text-[13px] leading-7 text-[#a3aab4] sm:text-[15px] md:mx-0">Carefully explained market signals, daily analysis, and member research—built to support a more informed process, never a promise of results.</p>
            <p className="mx-auto mt-3 max-w-[520px] text-[10px] leading-5 text-[#7f8996] md:mx-0">Examples on this page are hypothetical and educational. Nothing shown is live financial guidance.</p>
            <div className="mt-7 flex flex-col justify-center gap-3 min-[420px]:flex-row md:justify-start">
              <Link to="/register" className="gold-button focus-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[12px] font-semibold">Get Started <ArrowRight size={14} /></Link>
              <Link to="/membership" className="quiet-button focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/[.15] bg-white/[.035] px-6 py-3.5 text-[12px] font-medium text-[#e5e7ea]">Explore Membership <ArrowUpRight size={14} /></Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-[9px] text-[#8b949f] md:justify-start"><ShieldCheck size={13} className="text-[#c6b173]" /> Research-led. Risk-aware. No outcome guarantees.</div>
          </div>
          <div className="relative mx-auto w-full max-w-[430px] md:mr-2 lg:mr-10">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#294e57]/25 blur-[85px]" />
            <div className="relative flex justify-center"><PhoneMockup /></div>
            <div className="glass-surface absolute -left-2 top-[30%] hidden rounded-xl px-3 py-2.5 sm:block md:-left-8"><p className="text-[7px] uppercase tracking-[.14em] text-[#8f99a4]">Research approach</p><p className="mt-1 text-[10px] text-[#e6e7e7]">Context before conviction</p></div>
            <div className="glass-surface absolute -right-1 bottom-[23%] hidden rounded-xl px-3 py-2.5 sm:block md:-right-6"><p className="text-[7px] uppercase tracking-[.14em] text-[#8f99a4]">A note on risk</p><p className="mt-1 text-[10px] text-[#e6e7e7]">Every scenario can fail</p></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-12 sm:px-8 lg:px-10">
        <MetricPanel />
        <p className="mt-3 text-center text-[9px] leading-5 text-[#777f8b]">Illustrative placeholders only. These are not DonLusso business records, verified subscriber counts, revenue, or trading results.</p>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><Eyebrow>What membership is for</Eyebrow><h2 className="font-display text-[clamp(35px,5vw,52px)] leading-[1.08] tracking-[-1.2px] text-[#eeefec]">A more deliberate way<br className="hidden sm:block" /> to meet the markets.</h2></div>
          <p className="max-w-[410px] text-[12px] leading-6 text-[#979faa]">Useful context, clearly stated uncertainty, and an emphasis on process. Each service below is a product concept represented with demo content in this prototype.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const Icon = iconFor[product.icon]
            return <article key={product.id} className={`glass-surface group rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1 ${index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#cfb875]/20 bg-[#cfb875]/[.07] text-[#d1bc80]"><Icon size={17} /></span>
              <p className="mt-5 text-[8px] font-semibold uppercase tracking-[.18em] text-[#a9aeb6]">{product.category}</p>
              <h3 className="mt-2 font-display text-[23px] text-[#e8e8e5]">{product.title}</h3>
              <p className="mt-2 text-[11px] leading-6 text-[#9ca4ae]">{product.description}</p>
              <Link to="/products" className="focus-ring mt-5 inline-flex items-center gap-2 text-[10px] font-medium text-[#d2bd81]">Explore service <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" /></Link>
            </article>
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-16 sm:px-8 sm:pb-24 lg:px-10">
        <div className="glass-surface relative overflow-hidden rounded-[24px] p-6 sm:p-9 md:flex md:items-center md:justify-between md:gap-8">
          <div className="pointer-events-none absolute -right-16 -top-32 h-[320px] w-[320px] rounded-full border border-[#cfb875]/10" />
          <div className="relative"><Eyebrow>Membership</Eyebrow><h2 className="font-display text-[34px] leading-tight text-[#eeefec] sm:text-[42px]">Room to learn.<br className="sm:hidden" /> Space to think.</h2><p className="mt-3 max-w-[520px] text-[12px] leading-6 text-[#9ba3ae]">Choose one or six months. Prices are not yet announced; no checkout or payment is connected.</p></div>
          <Link to="/membership" className="gold-button focus-ring relative mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-[11px] font-semibold md:mt-0">Explore membership <ArrowUpRight size={13} /></Link>
        </div>
      </section>
    </main>
  )
}

export function ProductsPage() {
  return (
    <main className="page-enter mx-auto min-h-[65vh] max-w-[1280px] px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:px-10">
      <PageIntro eyebrow="DonLusso research & education" title={<>Clear thinking,<br /><span className="text-[#d3bf86]">not noise.</span></>} description="A preview of the member services DonLusso is designed to offer. The research, examples, and access shown here are not live or connected." />
      <div className="mx-auto mt-10 max-w-[840px] rounded-2xl border border-[#d2b978]/15 bg-[#d2b978]/[.045] p-4 text-center text-[10px] leading-5 text-[#b4b5b4]"><ShieldAlert size={14} className="mr-2 inline text-[#d0b878]" />Trading involves risk. These educational examples do not constitute financial advice, live signals, or a recommendation to trade.</div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => {
          const Icon = iconFor[product.icon]
          return <article key={product.id} className="glass-surface group relative overflow-hidden rounded-2xl p-5 sm:p-6">
            <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#214555]/10 blur-3xl transition-opacity group-hover:opacity-100" />
            <div className="relative flex items-start justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[.04] text-[#d0bc81]"><Icon size={18} /></span><span className="font-display text-[13px] text-[#747e89]">0{index + 1}</span></div>
            <p className="relative mt-7 text-[8px] font-semibold uppercase tracking-[.18em] text-[#bba96f]">{product.category}</p>
            <h2 className="relative mt-2 font-display text-[25px] text-[#e9eae7]">{product.title}</h2>
            <p className="relative mt-2 text-[11px] leading-6 text-[#a1a8b2]">{product.description}</p>
            <div className="relative mt-5 border-t border-white/[.08] pt-4 text-[9px] text-[#7f8995]">{product.format} · demo concept</div>
            <p className="relative mt-3 text-[10px] leading-5 text-[#858e99]">{product.detail}</p>
          </article>
        })}
      </div>
      <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/[.09] pt-7 sm:flex-row sm:items-center"><div><Eyebrow>Access and pricing</Eyebrow><p className="font-display text-[24px] text-[#e7e8e4]">Plans are configurable. Prices are not announced.</p></div><Link to="/membership" className="quiet-button focus-ring inline-flex items-center gap-2 rounded-full border border-[#d3bd7d]/35 px-5 py-3 text-[11px] text-[#dfd2aa]">View membership <ArrowRight size={13} /></Link></div>
    </main>
  )
}

function PlanCard({ plan, featured = false, monthlyPrice }: { plan: typeof membership.plans[number]; featured?: boolean; monthlyPrice: number | null }) {
  const { notify } = useToast()
  const currency = new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 2 })
  const effectiveMonthlyPrice = plan.price === null ? null : plan.price / plan.durationMonths
  const savings = plan.durationMonths > 1 && plan.price !== null && monthlyPrice !== null
    ? monthlyPrice * plan.durationMonths - plan.price
    : null
  return <article className={`glass-surface relative flex flex-col rounded-2xl p-6 sm:p-7 ${featured ? 'border-[#cdb473]/40 shadow-[0_20px_70px_rgba(0,0,0,.28)]' : ''}`}>
    {featured && <span className="absolute -top-3 left-6 rounded-full border border-[#d8c185]/30 bg-[#171913] px-3 py-1 text-[8px] font-semibold uppercase tracking-[.18em] text-[#e0cb8c]">BEST VALUE</span>}
    <p className="text-[9px] uppercase tracking-[.18em] text-[#c4b176]">{plan.duration} access</p>
    <h2 className="mt-3 font-display text-[30px] text-[#f0f0ec]">{plan.name}</h2>
    <p className="mt-2 min-h-[44px] text-[11px] leading-6 text-[#9ca4ae]">{plan.note}</p>
    <div className="my-6 border-y border-white/[.09] py-5"><p className="font-display text-[31px] text-[#e6d5a5]">{plan.price === null ? 'To be announced' : currency.format(plan.price)}</p><p className="mt-1 text-[9px] text-[#7f8994]">{plan.price === null ? 'No price configured' : `Total for ${plan.duration}`}</p>{effectiveMonthlyPrice !== null && plan.durationMonths > 1 && <p className="mt-2 text-[9px] text-[#c9c2ad]">{currency.format(effectiveMonthlyPrice)} per month, effective</p>}{savings !== null && savings > 0 && <p className="mt-1 text-[9px] font-medium text-[#d9c88f]">Save {currency.format(savings)} vs. six monthly plans</p>}</div>
    <p className="min-h-[54px] text-[10px] leading-5 text-[#a0a6ae]">{featured ? 'A longer commitment for a steadier learning routine. Any monthly comparison or saving will appear only after final prices are configured.' : 'A shorter first step to explore the research and education approach.'}</p>
    <button onClick={() => notify('Checkout is not connected. No payment was taken and no membership was created.')} className={`focus-ring mt-5 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[11px] font-semibold ${featured ? 'gold-button' : 'quiet-button border border-white/[.15] text-[#e2e4e6]'}`}>Preview plan <ArrowUpRight size={13} /></button>
    <p className="mt-3 text-center text-[9px] leading-5 text-[#7a8490]">Visual preview only · checkout not connected · no payment taken</p>
    <div className="mt-6 border-t border-white/[.09] pt-5">
      <p className="mb-4 text-[8px] font-semibold uppercase tracking-[.18em] text-[#89939f]">Membership concept includes</p>
      <ul className="space-y-3">{membership.benefits.map((benefit) => <li key={benefit} className="flex items-start gap-2.5 text-[10px] leading-5 text-[#c0c4c9]"><Check size={13} className="mt-0.5 shrink-0 text-[#d2bd80]" />{benefit}</li>)}</ul>
    </div>
  </article>
}

export function MembershipPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const monthlyPrice = membership.plans.find((plan) => plan.durationMonths === 1)?.price ?? null
  const faqs = [
    ['What do plans cost?', 'Prices have not been announced. Plan amounts are centrally configurable in the site source and currently unset. No estimated price, monthly equivalent, or savings are displayed.'],
    ['Can I subscribe here?', 'No. Checkout is not connected. Choosing a plan does not create an account, membership, or payment.'],
    ['Are signals live trade recommendations?', 'No live signals or trade recommendations are provided in this prototype. Examples are hypothetical and educational, and are not financial advice.'],
    ['Is the community available?', 'Community access is a placeholder. No Discord or Telegram service or invitation is connected.'],
  ]
  return (
    <main className="page-enter">
      <section className="relative overflow-hidden border-b border-white/[.08]">
        <div className="ambient-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <PageIntro eyebrow="Membership / built for discipline" title={<>Research with purpose.<br /><span className="text-[#d3bf86]">Without the noise.</span></>} description={membership.description} />
          <div className="mx-auto mt-7 flex max-w-[740px] items-start gap-3 rounded-xl border border-[#d2b978]/15 bg-[#d2b978]/[.045] p-4 text-[10px] leading-5 text-[#adb2b9]"><ShieldAlert size={15} className="mt-0.5 shrink-0 text-[#d2bd81]" /><span>Market analysis and education carry risk. Membership does not promise performance, financial results, or successful trades.</span></div>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1040px] gap-6 px-5 py-14 sm:px-8 sm:py-20 md:grid-cols-2">
        {membership.plans.map((plan) => <PlanCard key={plan.id} plan={plan} featured={plan.id === 'six-month'} monthlyPrice={monthlyPrice} />)}
      </section>
      <section className="mx-auto max-w-[850px] px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="mb-8 text-center"><Eyebrow>Common questions</Eyebrow><h2 className="font-display text-[38px] text-[#ebebe8]">The practical details.</h2></div>
        <div className="border-t border-white/10">{faqs.map(([question, answer], index) => <div key={question} className="border-b border-white/10"><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index} className="focus-ring flex w-full items-center justify-between gap-5 py-5 text-left text-[12px] text-[#e0e2e4]"><span>{question}</span><ChevronDown size={15} className={`shrink-0 text-[#d0ba7d] transition-transform ${openFaq === index ? 'rotate-180' : ''}`} /></button>{openFaq === index && <p className="max-w-[740px] pb-5 pr-10 text-[11px] leading-6 text-[#9da5af]">{answer}</p>}</div>)}</div>
      </section>
    </main>
  )
}

export function AboutPage() {
  return (
    <main className="page-enter mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-24">
      <PageIntro eyebrow="About DonLusso Trading" title={<>A quieter approach<br /><span className="text-[#d3bf86]">to market intelligence.</span></>} description="DonLusso Trading is designed for people who value carefully explained research, trading education, and a disciplined process over urgency or spectacle." />
      <div className="mt-12 grid gap-4 md:grid-cols-[1.1fr_.9fr]">
        <article className="glass-surface rounded-2xl p-6 sm:p-8"><Eyebrow>Our point of view</Eyebrow><h2 className="font-display text-[31px] text-[#eeeeeb]">Clarity is a practice.</h2><p className="mt-4 text-[12px] leading-7 text-[#a4abb4]">Markets are uncertain. Our intention is to make the reasoning behind research easier to follow: show the context, name what could invalidate a scenario, and make room for risk. No outcome is promised, and no example should be mistaken for live guidance.</p><p className="mt-4 text-[12px] leading-7 text-[#a4abb4]">The current website is a visual prototype. It contains fictional examples and does not connect to research feeds, members, payment services, or a community.</p></article>
        <div className="grid gap-4">
          {[['Explain the why', 'Context and assumptions belong beside every market idea.'], ['Respect uncertainty', 'Scenarios are not guarantees. Risk is part of the conversation.'], ['Learn the process', 'Education supports independent judgement, not dependence on calls.']].map(([title, text], index) => <article key={title} className="glass-surface rounded-2xl p-5"><span className="font-display text-[12px] text-[#c5b276]">0{index + 1}</span><h3 className="mt-2 font-display text-[21px] text-[#e9eae7]">{title}</h3><p className="mt-1 text-[10px] leading-5 text-[#9ba3ad]">{text}</p></article>)}
        </div>
      </div>
      <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/[.09] pt-7 sm:flex-row sm:items-center"><p className="font-display text-[25px] text-[#e5e6e3]">Trade with care. Keep learning.</p><Link to="/products" className="focus-ring inline-flex items-center gap-2 text-[11px] text-[#d4be7f]">Explore member services <ArrowRight size={13} /></Link></div>
    </main>
  )
}

export function AuthPage({ mode }: { mode: 'login' | 'register' }) {
  const isLogin = mode === 'login'
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [notice, setNotice] = useState('')
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isLogin) {
      const formData = new FormData(event.currentTarget)
      if (formData.get('password') !== formData.get('confirmPassword')) {
        setNotice('Passwords do not match. No information was sent or saved.')
        return
      }
    }
    setNotice('No account service is connected. No information was sent or saved.')
  }
  return (
    <main className="page-enter relative grid min-h-[calc(100dvh-150px)] overflow-hidden lg:grid-cols-[.85fr_1.15fr]">
      <div className="ambient-grid pointer-events-none absolute inset-0 opacity-45" />
      <section className="relative hidden flex-col justify-between border-r border-white/[.07] bg-[#101721]/55 px-10 py-12 lg:flex xl:px-16">
        <div className="absolute right-[-130px] top-[19%] h-[470px] w-[470px] rounded-full border border-[#cfb775]/10" /><div className="absolute right-[-30px] top-[27%] h-[280px] w-[280px] rounded-full border border-[#cfb775]/15" />
        <div className="relative z-10"><Eyebrow>DonLusso / trading intelligence</Eyebrow><p className="max-w-[450px] font-display text-[45px] leading-[1.12] tracking-[-.7px] text-[#ecece8]">A calm place<br />to think through<br /><i className="text-[#d5c28e]">the markets.</i></p></div>
        <div className="relative z-10 max-w-[360px]"><p className="text-[11px] leading-6 text-[#9aa3ae]">Account access is a presentation-only prototype. No authentication is connected and no credentials leave this page.</p><span className="mt-5 block font-display text-[20px] text-[#d2bd80]">DL.</span></div>
      </section>
      <section className="relative flex items-center justify-center px-5 py-12 sm:px-8 lg:px-12">
        <div className="w-full max-w-[430px]">
          <div className="mb-7 lg:hidden"><Eyebrow>DonLusso Trading / prototype</Eyebrow><p className="font-display text-[29px] text-[#e9eae7]">Clarity over certainty.</p></div>
          <Eyebrow>{isLogin ? 'Member access preview' : 'Create account preview'}</Eyebrow>
          <h1 className="font-display text-[42px] leading-[1.05] tracking-[-1px] text-[#f0f0ed]">{isLogin ? 'Welcome back.' : 'Start with intention.'}</h1>
          <p className="mt-3 text-[11px] leading-6 text-[#9ca4ae]">{isLogin ? 'This sign-in form is visual only. There is no member account behind it.' : 'This registration form is visual only. No account will be created.'}</p>
          <div className="mt-6 flex gap-3 rounded-xl border border-[#cfb775]/15 bg-[#cfb775]/[.045] p-3.5 text-[10px] leading-5 text-[#c3c2bc]"><LockKeyhole size={14} className="mt-0.5 shrink-0 text-[#d1bc80]" /><span>No authentication is connected. Submitting will not send or save your information.</span></div>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            {!isLogin && <label className="block"><span className="mb-2 block text-[10px] text-[#c5c9ce]">Full name</span><input required autoComplete="name" name="name" type="text" placeholder="Your name" className="focus-ring h-12 w-full rounded-xl border border-white/[.12] bg-white/[.035] px-4 text-[12px] text-[#eceeed] outline-none placeholder:text-[#707985]" /></label>}
            <label className="block"><span className="mb-2 block text-[10px] text-[#c5c9ce]">Email address</span><input required autoComplete="email" name="email" type="email" placeholder="you@example.com" className="focus-ring h-12 w-full rounded-xl border border-white/[.12] bg-white/[.035] px-4 text-[12px] text-[#eceeed] outline-none placeholder:text-[#707985]" /></label>
            <label className="block"><span className="mb-2 block text-[10px] text-[#c5c9ce]">Password</span><span className="relative block"><input required autoComplete={isLogin ? 'current-password' : 'new-password'} minLength={8} name="password" type={showPassword ? 'text' : 'password'} placeholder="At least 8 characters" className="focus-ring h-12 w-full rounded-xl border border-white/[.12] bg-white/[.035] px-4 pr-12 text-[12px] text-[#eceeed] outline-none placeholder:text-[#707985]" /><button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? 'Hide password' : 'Show password'} className="focus-ring absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-[#939ca7]">{showPassword ? <EyeOff size={15} /> : <Eye size={15} />}</button></span></label>
            {!isLogin && <label className="block"><span className="mb-2 block text-[10px] text-[#c5c9ce]">Confirm password</span><span className="relative block"><input required autoComplete="new-password" minLength={8} name="confirmPassword" type={showConfirmation ? 'text' : 'password'} placeholder="Enter password again" className="focus-ring h-12 w-full rounded-xl border border-white/[.12] bg-white/[.035] px-4 pr-12 text-[12px] text-[#eceeed] outline-none placeholder:text-[#707985]" /><button type="button" onClick={() => setShowConfirmation((value) => !value)} aria-label={showConfirmation ? 'Hide confirmation password' : 'Show confirmation password'} className="focus-ring absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-[#939ca7]">{showConfirmation ? <EyeOff size={15} /> : <Eye size={15} />}</button></span></label>}
            {isLogin ? <div className="flex items-center justify-between gap-3 text-[10px]"><label className="flex items-center gap-2 text-[#9fa6af]"><input type="checkbox" className="accent-[#cbb476]" />Remember me on this device</label><button type="button" onClick={() => setNotice('No password reset request was submitted. Account services are not connected.')} className="focus-ring rounded text-[#d1bc81] hover:text-[#e8d9ac]">Forgot password?</button></div> : <label className="flex items-start gap-2.5 text-[10px] leading-5 text-[#9fa6af]"><input required type="checkbox" className="mt-1 accent-[#cbb476]" /><span>I agree to the <Link className="text-[#ddc98e] underline underline-offset-2" to="/terms">draft terms</Link> and acknowledge the <Link className="text-[#ddc98e] underline underline-offset-2" to="/privacy">draft privacy notice</Link>.</span></label>}
            <button type="submit" className="gold-button focus-ring flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[11px] font-semibold">{isLogin ? 'Sign In' : 'Create Account'} <ArrowRight size={14} /></button>
          </form>
          {notice && <p role="status" className="mt-4 rounded-xl border border-[#d1b875]/20 bg-[#d1b875]/[.06] p-3 text-center text-[10px] leading-5 text-[#d5cba9]">{notice}</p>}
          <p className="mt-6 text-center text-[10px] text-[#929aa5]">{isLogin ? 'New to DonLusso?' : 'Already have an account?'} <Link className="focus-ring ml-1 text-[#ddc98e] underline decoration-[#b19b62]/50 underline-offset-4" to={isLogin ? '/register' : '/login'}>{isLogin ? 'Create Account' : 'Sign In'}</Link></p>
          <p className="mt-5 text-center text-[9px] leading-5 text-[#717b87]">Prototype only. Do not enter a password you use elsewhere.</p>
        </div>
      </section>
    </main>
  )
}

type DashboardTab = 'overview' | 'signals' | 'analysis' | 'membership' | 'history' | 'settings'

export function DashboardPage() {
  const [tab, setTab] = useState<DashboardTab>('overview')
  const [settingsNotice, setSettingsNotice] = useState(false)
  const { notify } = useToast()
  const tabs: { id: DashboardTab; label: string; icon: typeof Activity }[] = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'signals', label: 'Demo signals', icon: ScanLine },
    { id: 'analysis', label: 'Market analyses', icon: ChartNoAxesColumnIncreasing },
    { id: 'membership', label: 'Subscription', icon: WalletCards },
    { id: 'history', label: 'Purchase history', icon: FileText },
    { id: 'settings', label: 'Account settings', icon: CircleHelp },
  ]
  const noticeAction = (action: string) => notify(`${action} is a placeholder. No account change, purchase, or external access is connected.`)
  const sampleLabel = <span className="rounded-full border border-[#d2b978]/20 bg-[#d2b978]/[.06] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[.12em] text-[#d5c182]">Prototype · fictional sample</span>
  return (
    <main className="page-enter min-h-[75vh]">
      <div className="ambient-grid pointer-events-none absolute left-0 right-0 h-[300px] opacity-30" />
      <div className="relative mx-auto max-w-[1280px] px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
        <div className="mb-7 flex flex-col justify-between gap-4 border-b border-white/[.09] pb-5 sm:flex-row sm:items-end">
          <div><div className="mb-3 flex flex-wrap items-center gap-2"><Eyebrow>Member dashboard</Eyebrow>{sampleLabel}</div><h1 className="font-display text-[37px] leading-none tracking-[-.8px] text-[#eeeeeb]">Your research desk.</h1></div>
          <p className="max-w-[490px] text-[10px] leading-5 text-[#929ba6]">Visual-only prototype. No account, membership, trades, performance, or community access is real. This is not live financial guidance.</p>
        </div>
        <div className="mb-5 rounded-xl border border-[#d2b978]/15 bg-[#d2b978]/[.04] p-3.5 text-[9px] leading-5 text-[#b9b8b1]"><ShieldAlert size={13} className="mr-2 inline text-[#d1bc80]" />Risk disclaimer: Trading can result in loss of capital. All dashboard research and signal content is hypothetical and educational only.</div>
        <div className="grid gap-6 lg:grid-cols-[226px_1fr] lg:gap-8">
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="mb-4 flex items-center gap-3 rounded-2xl border border-white/[.08] bg-white/[.025] p-3"><span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cfb775]/25 bg-[#cfb775]/[.08] font-display text-[15px] text-[#d7c58f]">DL</span><div><p className="text-[11px] font-medium text-[#e1e2e2]">{dashboardSample.name}</p><p className="mt-1 text-[9px] text-[#8d96a2]">Sample profile only</p></div></div>
            <nav className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-1" aria-label="Dashboard sections">
              {tabs.map((item) => { const Icon = item.icon; return <button key={item.id} onClick={() => setTab(item.id)} className={`focus-ring flex items-center gap-2.5 rounded-xl px-3 py-3 text-left text-[10px] transition ${tab === item.id ? 'border border-[#ceb572]/15 bg-[#ceb572]/[.08] text-[#e2d2a7]' : 'border border-transparent text-[#939ba5] hover:bg-white/[.04] hover:text-[#e7e8e6]'}`}><Icon size={14} />{item.label}</button> })}
            </nav>
            <Link to="/login" className="quiet-button focus-ring mt-4 hidden items-center gap-2 rounded-xl border border-white/[.09] px-3 py-3 text-[10px] text-[#9ba3ad] lg:flex"><LockKeyhole size={13} /> Sign-in page preview</Link>
          </aside>
          <section className="min-w-0">
            {tab === 'overview' && <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-[1.25fr_.75fr]">
                <div className="glass-surface relative overflow-hidden rounded-2xl p-6 sm:p-8"><div className="absolute -right-12 -top-20 h-56 w-56 rounded-full border border-[#d0b876]/10" /><Eyebrow>Overview / illustrative</Eyebrow><h2 className="relative font-display text-[32px] text-[#eeeeeb]">A clearer view<br /><i className="text-[#d4c18e]">starts with context.</i></h2><p className="relative mt-4 max-w-[440px] text-[10px] leading-6 text-[#a0a7b1]">Your sample desk brings together educational scenario studies, market notes, and account placeholders. No feed is live or personalized.</p><button onClick={() => setTab('analysis')} className="focus-ring mt-5 inline-flex items-center gap-2 text-[9px] uppercase tracking-[.14em] text-[#d2bd80]">Open demo analyses <ArrowRight size={12} /></button></div>
                <div className="glass-surface rounded-2xl p-5"><Eyebrow>Subscription status</Eyebrow><span className="inline-flex rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-[9px] text-[#c5c8ca]">{dashboardSample.membershipStatus}</span><p className="mt-5 text-[9px] text-[#88929e]">Expiry / renewal</p><p className="mt-1 font-display text-[19px] text-[#dfe0dc]">{dashboardSample.expiry}</p><p className="mt-2 text-[9px] leading-5 text-[#79838f]">No active subscription is associated with this prototype.</p><Link to="/membership" className="focus-ring mt-5 flex items-center justify-between border-t border-white/[.08] pt-4 text-[9px] uppercase tracking-[.11em] text-[#d3bf84]">View plan options <ArrowRight size={12} /></Link></div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">{[{ label: 'Recent demo signals', value: '03', icon: ScanLine, tab: 'signals' as DashboardTab }, { label: 'Market analyses', value: '03', icon: BookOpen, tab: 'analysis' as DashboardTab }, { label: 'Account status', value: 'Prototype', icon: ShieldCheck, tab: 'settings' as DashboardTab }].map((item) => { const Icon = item.icon; return <button key={item.label} onClick={() => setTab(item.tab)} className="glass-surface quiet-button flex items-center gap-3 rounded-xl p-4 text-left"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#cfb775]/[.08] text-[#d0bc82]"><Icon size={15} /></span><span><span className="block text-[9px] text-[#929ba5]">{item.label}</span><span className="mt-1 block text-[12px] text-[#dfe0dd]">{item.value}</span></span></button> })}</div>
              <div className="glass-surface rounded-2xl p-5 sm:p-6"><div className="mb-4 flex flex-wrap items-end justify-between gap-3"><div><Eyebrow>Recent research</Eyebrow><h3 className="font-display text-[23px] text-[#e9eae7]">Hypothetical scenarios</h3></div><button onClick={() => setTab('signals')} className="focus-ring text-[9px] text-[#d1bd82]">See demo signals</button></div><div className="space-y-2">{dashboardSample.recentSignals.slice(0, 2).map((signal) => <div key={signal.pair} className="flex items-center justify-between gap-3 rounded-xl border border-white/[.07] bg-white/[.025] px-3 py-3"><div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#d0b876]/15 bg-[#d0b876]/[.06] text-[#cfba7d]"><Activity size={14} /></span><div><p className="text-[10px] text-[#e1e2df]">{signal.title}</p><p className="mt-1 text-[8px] text-[#828c98]">{signal.pair} · {signal.time}</p></div></div><span className="text-[8px] text-[#a39c83]">DEMO</span></div>)}</div></div>
              <CommunityPlaceholder notify={noticeAction} />
            </div>}
            {tab === 'signals' && <div className="glass-surface rounded-2xl p-5 sm:p-7"><Eyebrow>Demo signals / not live</Eyebrow><h2 className="font-display text-[31px] text-[#ebebe8]">Scenario studies</h2><p className="mt-2 text-[10px] leading-5 text-[#929ba5]">Hypothetical examples only. Not trade recommendations, entry alerts, or financial advice.</p><div className="mt-6 space-y-3">{dashboardSample.recentSignals.map((signal) => <article key={signal.pair} className="rounded-xl border border-white/[.08] bg-white/[.025] p-4"><div className="flex flex-wrap items-center justify-between gap-3"><div><span className="text-[8px] uppercase tracking-[.15em] text-[#c9b574]">{signal.pair} · example</span><h3 className="mt-1 font-display text-[19px] text-[#e4e5e2]">{signal.title}</h3></div><span className="rounded-full border border-white/10 px-2.5 py-1 text-[8px] text-[#9da4ad]">{signal.time}</span></div><p className="mt-3 text-[10px] leading-5 text-[#929ba5]">Educational observation and process notes would appear here. The scenario may fail; no live market conditions are represented.</p></article>)}</div></div>}
            {tab === 'analysis' && <div className="glass-surface rounded-2xl p-5 sm:p-7"><Eyebrow>Market analyses / demo library</Eyebrow><h2 className="font-display text-[31px] text-[#ebebe8]">Research and learning</h2><p className="mt-2 text-[10px] text-[#929ba5]">Fictional sample titles. No live analysis feed is connected.</p><div className="mt-6 grid gap-3 md:grid-cols-2">{dashboardSample.analyses.map((analysis) => <article key={analysis.title} className="rounded-xl border border-white/[.08] bg-white/[.025] p-4"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d0b876]/[.08] text-[#cfba7d]"><BookOpen size={15} /></span><h3 className="mt-4 font-display text-[19px] text-[#e5e6e2]">{analysis.title}</h3><div className="mt-2 flex items-center justify-between gap-3 text-[8px] text-[#8a949f]"><span>{analysis.category}</span><span>{analysis.date}</span></div><p className="mt-3 border-t border-white/[.08] pt-3 text-[9px] leading-5 text-[#89939e]">Educational preview only · not live financial research.</p></article>)}</div></div>}
            {tab === 'membership' && <div className="grid gap-4 md:grid-cols-[1fr_.8fr]"><div className="glass-surface rounded-2xl p-6 sm:p-8"><Eyebrow>Subscription details / sample</Eyebrow><h2 className="font-display text-[30px] text-[#ebebe8]">No active membership</h2><div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-[9px] text-[#c5c8ca]">Illustrative status only</div><p className="mt-5 text-[10px] leading-6 text-[#9ba3ad]">This dashboard does not represent an actual member account. The date below is deliberately marked as an example, not an expiry or renewal.</p><div className="mt-5 border-t border-white/[.08] pt-4"><p className="text-[9px] text-[#858f9b]">Expiry / renewal</p><p className="mt-1 text-[12px] text-[#dbdcd9]">{dashboardSample.expiry}</p></div><Link to="/membership" className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full border border-[#cfb775]/25 px-4 py-2.5 text-[9px] text-[#d5c38e]">Review plan options <ArrowRight size={12} /></Link></div><div className="glass-surface rounded-2xl p-6"><Eyebrow>Included by design</Eyebrow><div className="space-y-4">{membership.benefits.map((benefit) => <div key={benefit} className="flex gap-3 text-[10px] leading-5 text-[#c1c5c9]"><Check size={13} className="mt-0.5 shrink-0 text-[#d1bc80]" />{benefit}</div>)}</div><p className="mt-6 border-t border-white/[.08] pt-4 text-[9px] leading-5 text-[#87919c]">Prices are not configured. Checkout and billing are not connected.</p></div></div>}
            {tab === 'history' && <div className="glass-surface rounded-2xl p-5 sm:p-7"><Eyebrow>Purchase history / fictional rows</Eyebrow><h2 className="font-display text-[31px] text-[#ebebe8]">No real transactions</h2><p className="mt-2 text-[10px] leading-5 text-[#929ba5]">Rows are mock content for visual layout only. No purchase has been made.</p><div className="mt-6 hidden grid-cols-[1fr_1.5fr_.7fr] gap-3 border-b border-white/[.08] pb-3 text-[8px] uppercase tracking-[.13em] text-[#77818e] sm:grid"><span>Date</span><span>Item</span><span className="text-right">Amount</span></div>{dashboardSample.history.map((row, index) => <div key={`${row.date}-${row.item}`} className="grid grid-cols-[.7fr_1.3fr] gap-2 border-b border-white/[.07] py-4 last:border-0 sm:grid-cols-[1fr_1.5fr_.7fr] sm:gap-3"><span className="text-[9px] text-[#87919c]">{row.date}</span><span className="text-[10px] text-[#c7c9ca]">{row.item}<span className="block text-[8px] text-[#79838f] sm:hidden">{row.amount}</span></span><span className="hidden text-right text-[10px] text-[#c7c9ca] sm:block">{row.amount}</span><span className="sr-only">{index + 1}</span></div>)}</div>}
            {tab === 'settings' && <div className="max-w-[760px] glass-surface rounded-2xl p-5 sm:p-7"><Eyebrow>Account settings / presentation only</Eyebrow><h2 className="font-display text-[31px] text-[#ebebe8]">No account changes available</h2><p className="mt-2 text-[10px] leading-5 text-[#929ba5]">The fields are illustrative and do not update or save account information.</p><form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={(event) => { event.preventDefault(); setSettingsNotice(true) }}><label className="text-[9px] text-[#b4bac2]">Display name<input defaultValue={dashboardSample.name} className="focus-ring mt-2 h-11 w-full rounded-xl border border-white/[.12] bg-white/[.035] px-3 text-[11px] text-[#e1e3e3] outline-none" /></label><label className="text-[9px] text-[#b4bac2]">Email address<input defaultValue="demo@example.invalid" type="email" className="focus-ring mt-2 h-11 w-full rounded-xl border border-white/[.12] bg-white/[.035] px-3 text-[11px] text-[#e1e3e3] outline-none" /></label><label className="flex items-start gap-2 border-t border-white/[.08] pt-4 text-[9px] leading-5 text-[#9ba3ad] sm:col-span-2"><input type="checkbox" defaultChecked className="mt-0.5 accent-[#cbb476]" />Sample research update preference (not saved)</label><div className="sm:col-span-2"><button type="submit" className="quiet-button focus-ring rounded-full border border-white/[.15] px-5 py-3 text-[10px] text-[#e1e3e3]">Preview settings action</button>{settingsNotice && <p role="status" className="mt-3 text-[9px] text-[#d5c48e]">No account changes were saved. Settings are not connected.</p>}</div></form><div className="mt-7 border-t border-white/[.08] pt-5"><p className="text-[10px] text-[#c2c6cb]">Community access placeholders</p><p className="mt-1 text-[9px] leading-5 text-[#89939f]">No Discord or Telegram access is active. These controls do not open a community.</p><div className="mt-3 flex gap-2"><button onClick={() => noticeAction('Discord access')} className="quiet-button focus-ring rounded-full border border-white/[.12] px-3 py-2 text-[9px] text-[#bfc3c8]">Discord placeholder</button><button onClick={() => noticeAction('Telegram access')} className="quiet-button focus-ring rounded-full border border-white/[.12] px-3 py-2 text-[9px] text-[#bfc3c8]">Telegram placeholder</button></div></div></div>}
          </section>
        </div>
      </div>
    </main>
  )
}

function CommunityPlaceholder({ notify }: { notify: (action: string) => void }) {
  return <div className="grid gap-3 md:grid-cols-2"><div className="glass-surface rounded-2xl p-5"><div className="flex items-start gap-3"><MessageCircle size={16} className="mt-1 text-[#cfbb82]" /><div><p className="text-[11px] font-medium text-[#e0e2e1]">Community access preview</p><p className="mt-1 text-[9px] leading-5 text-[#929ba5]">Discord and Telegram are placeholders only. No service or invite is connected.</p><div className="mt-4 flex gap-2"><button onClick={() => notify('Discord access')} className="quiet-button focus-ring rounded-full border border-white/[.12] px-3 py-2 text-[9px] text-[#c5c8ca]">Discord placeholder</button><button onClick={() => notify('Telegram access')} className="quiet-button focus-ring rounded-full border border-white/[.12] px-3 py-2 text-[9px] text-[#c5c8ca]">Telegram placeholder</button></div></div></div></div><div className="glass-surface rounded-2xl p-5"><div className="flex items-start gap-3"><ShieldCheck size={16} className="mt-1 text-[#cfbb82]" /><div><p className="text-[11px] font-medium text-[#e0e2e1]">Account and access</p><p className="mt-1 text-[9px] leading-5 text-[#929ba5]">No real membership, purchase history, account, or access changes are available.</p><button onClick={() => notify('Account settings')} className="focus-ring mt-3 text-[9px] text-[#d1bd82] underline underline-offset-4">About this prototype</button></div></div></div></div>
}

export function ContactPage() {
  const { notify } = useToast()
  return <main className="page-enter mx-auto min-h-[60vh] max-w-[900px] px-5 py-16 sm:px-8 sm:py-24"><PageIntro eyebrow="Contact" title={<>A note, when ready.</>} description="Contact details have not been supplied for this prototype. This page is a draft placeholder and does not represent an active support channel." /><div className="glass-surface mx-auto mt-10 max-w-[620px] rounded-2xl p-6 text-center sm:p-8"><Mail className="mx-auto text-[#d0bb7e]" size={22} /><p className="mt-4 font-display text-[24px] text-[#e8e9e6]">No inbox is connected.</p><p className="mt-2 text-[10px] leading-6 text-[#9ba3ae]">A verified contact address or contact form can be added when one is provided. No contact details have been invented here.</p><button onClick={() => notify('No message was submitted. Contact details are not configured.')} className="quiet-button focus-ring mt-5 rounded-full border border-white/[.14] px-5 py-3 text-[10px] text-[#d5c58f]">Check contact availability</button></div></main>
}

export function LegalPage({ kind }: { kind: 'terms' | 'privacy' | 'risk' }) {
  const contents = {
    terms: { title: 'Terms of use', eyebrow: 'Draft policy', description: 'This is a placeholder for terms that require review and approval before publication.', sections: [['Prototype status', 'This website is a visual demonstration. It does not create an account, subscription, purchase, or service relationship.'], ['Use of research', 'Any displayed trading material is fictional, hypothetical, and educational. It is not financial advice, an offer, or a recommendation.'], ['Draft notice', 'This page is not final legal copy. Appropriate jurisdiction, business identity, and terms must be supplied and reviewed before launch.']] },
    privacy: { title: 'Privacy notice', eyebrow: 'Draft policy', description: 'A plain-language placeholder. This prototype does not connect to an account, analytics, or payment service.', sections: [['Information handling', 'Form submissions are intercepted in the browser and do not send or persist credentials. Do not enter real passwords or sensitive information.'], ['Local prototype', 'No external APIs, authentication, payment integration, or analytics services are connected by this frontend.'], ['Draft notice', 'This page is not a complete privacy policy. A final notice must be prepared to reflect the actual product, vendors, data practices, and applicable law.']] },
    risk: { title: 'Risk disclaimer', eyebrow: 'Important information', description: 'Trading financial instruments involves substantial risk and may not be suitable for all people.', sections: [['No financial advice', 'DonLusso materials are intended for general information and education. They do not take account of individual objectives, financial circumstances, or needs and are not investment advice or a personal recommendation.'], ['Risk of loss', 'Trading may result in partial or total loss of capital. Past performance is not a reliable indicator of future results. Hypothetical examples have inherent limitations and do not represent actual trading.'], ['Prototype content', 'All sample market data, charts, analyses, membership metrics, and signals in this prototype are fictional or illustrative and must not be relied upon as current market information. Seek independent professional advice where appropriate.']] },
  }
  const content = contents[kind]
  return <main className="page-enter mx-auto min-h-[65vh] max-w-[900px] px-5 py-16 sm:px-8 sm:py-24"><div className="mb-9"><Eyebrow>{content.eyebrow}</Eyebrow><h1 className="font-display text-[clamp(42px,7vw,62px)] leading-[1.02] text-[#eeeeeb]">{content.title}</h1><p className="mt-4 max-w-[680px] text-[12px] leading-6 text-[#9da5af]">{content.description}</p></div><div className="space-y-3">{content.sections.map(([heading, text], index) => <section key={heading} className="glass-surface rounded-2xl p-5 sm:p-6"><p className="text-[8px] uppercase tracking-[.16em] text-[#b7a66f]">0{index + 1}</p><h2 className="mt-2 font-display text-[22px] text-[#e4e5e2]">{heading}</h2><p className="mt-2 text-[11px] leading-6 text-[#9ca4ae]">{text}</p></section>)}</div><p className="mt-6 text-[9px] leading-5 text-[#737d89]">Draft information for design review. This is not final legal copy.</p></main>
}
