export type Product = {
  id: string
  title: string
  category: string
  description: string
  detail: string
  format: string
  icon: 'signal' | 'analysis' | 'gold' | 'research' | 'community' | 'education'
  featured?: boolean
}

export const products: Product[] = [
  {
    id: 'premium-signals',
    title: 'Premium signals',
    category: 'Market research',
    description: 'Structured trade ideas with context, invalidation levels, and risk notes.',
    detail: 'Illustrative member research is designed to explain a thesis, not direct a trade. Any examples shown are hypothetical, delayed, and intended for education only.',
    format: 'Example format · written brief',
    icon: 'signal',
    featured: true,
  },
  {
    id: 'daily-analysis',
    title: 'Daily market analysis',
    category: 'Market research',
    description: 'A concise read on the sessions, catalysts, and levels worth watching.',
    detail: 'A repeatable analysis framework covering context, scenarios, and uncertainty. This prototype displays sample content only and does not provide live market updates.',
    format: 'Example format · daily note',
    icon: 'analysis',
    featured: true,
  },
  {
    id: 'gold-forex',
    title: 'Gold & forex insights',
    category: 'Markets',
    description: 'Focused educational coverage of XAU/USD and major currency pairs.',
    detail: 'Learn how market structure, macro context, and risk can be considered together. No current entry, target, or recommendation is provided.',
    format: 'Example format · market brief',
    icon: 'gold',
    featured: true,
  },
  {
    id: 'member-research',
    title: 'Member research',
    category: 'Research library',
    description: 'A searchable archive of annotated scenarios and market lessons.',
    detail: 'The research library is intended to make process visible: what was observed, what could change the thesis, and what remains uncertain.',
    format: 'Example format · research archive',
    icon: 'research',
  },
  {
    id: 'community',
    title: 'Member community',
    category: 'Community',
    description: 'A moderated place for thoughtful questions and peer learning.',
    detail: 'Community access is shown as a product concept only. No Discord or Telegram space, invitation, or member access is connected in this prototype.',
    format: 'Example format · access placeholder',
    icon: 'community',
  },
  {
    id: 'education',
    title: 'Trading education',
    category: 'Education',
    description: 'Practical lessons on preparation, risk, and disciplined review.',
    detail: 'Educational material supports independent learning and does not replace professional advice. Trading involves substantial risk, including possible loss of capital.',
    format: 'Example format · learning modules',
    icon: 'education',
  },
]

export const membership = {
  name: 'DonLusso Trading Membership',
  description: 'A calm, disciplined home for market research, trading education, and clearer decision-making.',
  plans: [
    { id: 'one-month', name: 'One month', duration: '1 month', durationMonths: 1, price: null as number | null, note: 'A flexible first step.' },
    { id: 'six-month', name: 'Six months', duration: '6 months', durationMonths: 6, price: null as number | null, note: 'A longer window to build a steady research routine.' },
  ],
  benefits: [
    'Structured market research and analysis examples',
    'Gold and major forex pair educational coverage',
    'Member research archive concept',
    'Risk-first trading education',
    'Community access placeholder (not connected)',
  ],
}

export const demoMetrics = [
  { label: 'Subscribers', value: '1,248' },
  { label: 'Active members', value: '1,106' },
  { label: 'Community revenue', value: '€48,500' },
  { label: 'Analyses', value: '325' },
]

export const dashboardSample = {
  name: 'Demo Member',
  membershipStatus: 'Illustrative status',
  expiry: 'Example date · not active',
  recentSignals: [
    { pair: 'XAU/USD', title: 'Gold scenario study', time: 'Example · 09:40', tone: 'gold' },
    { pair: 'EUR/USD', title: 'Session structure note', time: 'Example · 08:15', tone: 'blue' },
    { pair: 'GBP/USD', title: 'Risk framework review', time: 'Example · Yesterday', tone: 'green' },
  ],
  analyses: [
    { title: 'Reading a range without prediction', category: 'Market structure', date: 'Demo research' },
    { title: 'What changes a gold thesis?', category: 'XAU/USD education', date: 'Demo research' },
    { title: 'Planning around macro events', category: 'Risk & process', date: 'Demo research' },
  ],
  history: [
    { date: 'Example date', item: 'One-month membership', amount: 'Demo only' },
    { date: 'Example date', item: 'Research briefing', amount: 'Demo only' },
  ],
}
