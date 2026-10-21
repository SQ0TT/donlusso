export type Product = {
  id: string
  title: string
  category: string
  description: string
  detail: string
  price: number
  format: string
  artwork: 'atlas' | 'studio' | 'notes' | 'folio' | 'signal' | 'vault'
  featured?: boolean
}

export const products: Product[] = [
  {
    id: 'the-quiet-launch',
    title: 'The Quiet Launch',
    category: 'Creator systems',
    description: 'A thoughtful framework for building an audience without burning out.',
    detail: 'A practical, beautifully organized launch system for independent creators. Find your message, build a simple launch rhythm, and give your work a little more room to land.',
    price: 34,
    format: 'Notion workspace · 42 pages',
    artwork: 'atlas',
    featured: true,
  },
  {
    id: 'studio-letters',
    title: 'Studio Letters',
    category: 'Writing',
    description: 'A collection of prompts for a more memorable newsletter.',
    detail: 'Thirty carefully considered writing prompts, subject-line studies, and a reusable editorial calendar for making an inbox feel a little more human.',
    price: 18,
    format: 'Digital guide · 30 prompts',
    artwork: 'studio',
    featured: true,
  },
  {
    id: 'the-good-notes',
    title: 'The Good Notes',
    category: 'Personal systems',
    description: 'A gentle digital home for ideas worth keeping.',
    detail: 'A calm, flexible note-taking system designed to help ideas find their way back to you. Includes a setup guide and a small collection of thoughtful templates.',
    price: 24,
    format: 'Notion template · 12 views',
    artwork: 'notes',
    featured: true,
  },
  {
    id: 'field-guide',
    title: 'The Field Guide',
    category: 'Creative business',
    description: 'Clarity for the small, meaningful work you want to grow.',
    detail: 'A concise operating guide for independent creative businesses: positioning, offers, pricing, and a quarterly review that feels useful rather than performative.',
    price: 42,
    format: 'Workbook · 68 pages',
    artwork: 'folio',
  },
  {
    id: 'soft-signal',
    title: 'Soft Signal',
    category: 'Brand & design',
    description: 'A visual identity toolkit for making a quieter impression.',
    detail: 'A small but considered set of visual direction exercises, palette studies, and brand building blocks for creators who prefer substance over volume.',
    price: 29,
    format: 'Figma kit · 16 layouts',
    artwork: 'signal',
  },
  {
    id: 'the-long-game',
    title: 'The Long Game',
    category: 'Creator systems',
    description: 'A seasonal planner for doing good work at your own pace.',
    detail: 'Plan a sustainable season with a light-touch project map, a weekly review, and a reminder that the work you can keep doing is the work that matters.',
    price: 22,
    format: 'Digital planner · 4 seasons',
    artwork: 'vault',
  },
]

export const membership = {
  name: 'The DonLusso Circle',
  monthlyPrice: 19,
  annualPrice: 190,
  description: 'A quieter corner of the internet for people who care about the work they put into the world.',
  benefits: [
    'Every current and future digital product',
    'Monthly studio notes and useful new resources',
    'A private member community on Discord',
    'Member-only conversations and office hours',
    'Early access to new releases',
  ],
}

export const dashboardSample = {
  name: 'Alex Morgan',
  memberSince: 'September 2024',
  membershipStatus: 'Circle member',
  renewalDate: 'October 24, 2026',
  purchased: ['The Quiet Launch', 'Studio Letters', 'The Good Notes'],
  history: [
    { date: 'Sep 24, 2026', item: 'The DonLusso Circle', amount: '$19.00', type: 'Membership' },
    { date: 'Aug 24, 2026', item: 'The DonLusso Circle', amount: '$19.00', type: 'Membership' },
    { date: 'Jun 12, 2025', item: 'The Good Notes', amount: '$24.00', type: 'Product' },
  ],
}
