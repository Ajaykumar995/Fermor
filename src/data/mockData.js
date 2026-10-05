// Mock Data for Fermor Homepage & Interactive Demo

export const HERO_STATS = [
  { value: "$4.2B+", label: "Assets Monitored", change: "+24% YoY" },
  { value: "5.15%", label: "Top-Tier Yield APY", change: "Vs 0.42% Avg Bank" },
  { value: "140,000+", label: "Active Members", change: "4.9/5 Rating" },
  { value: "$3,420", label: "Avg Annual Savings/User", change: "In Fees & Yield" },
];

export const TRUST_BADGES = [
  { name: "FDIC Insured", desc: "Up to $5M coverage via partner bank network" },
  { name: "256-bit AES", desc: "Bank-grade encryption standard" },
  { name: "SOC 2 Type II", desc: "Certified data privacy & compliance" },
  { name: "Read-Only Sync", desc: "Zero withdrawal risk via Plaid & Teller" },
];

export const DEMO_FINANCIAL_DATA = {
  netWorth: 248950,
  monthlyIncome: 12400,
  monthlyExpenses: 6850,
  savingsRate: 44.8,
  idleCash: 18500,
  potentialExtraYield: 952,
  accounts: [
    { id: 1, name: "Chase Premier Checking", balance: 5400, type: "Checking", status: "Active", yield: "0.01%" },
    { id: 2, name: "Fermor High-Yield Cash", balance: 34200, type: "HYSA", status: "Optimized", yield: "5.15%" },
    { id: 3, name: "Vanguard Total Market Index", balance: 142500, type: "Investment", status: "Auto-Rebalanced", yield: "8.4% Avg" },
    { id: 4, name: "Fermor Smart Reserve", balance: 18850, type: "Emergency", status: "Protected", yield: "5.00%" },
    { id: 5, name: "Auto Loan (Tesla)", balance: -16400, type: "Liability", status: "Paydown Engine", yield: "3.99% APR" },
  ],
  insights: [
    { id: 1, type: "warning", text: "You have $18,500 sitting in low-yield checking earning 0.01%. Sweep to HYSA to earn +$952/yr.", action: "Execute Sweep" },
    { id: 2, type: "info", text: "3 unused subscriptions detected ($89/mo total: Gym, Streaming, Cloud Storage).", action: "Cancel in 1-Click" },
    { id: 3, type: "success", text: "Your emergency fund reached 6 months of expenses. Milestone unlocked!", action: "View Growth" },
  ],
  cashflowCategories: [
    { name: "Housing & Utilities", amount: 2850, percentage: 41, color: "#3b82f6" },
    { name: "Investments & Savings", amount: 2400, percentage: 35, color: "#10b981" },
    { name: "Dining & Lifestyle", amount: 950, percentage: 14, color: "#f59e0b" },
    { name: "Subscriptions & Tech", amount: 320, percentage: 5, color: "#8b5cf6" },
    { name: "Transport & Misc", amount: 330, percentage: 5, color: "#ec4899" },
  ],
  automatedRules: [
    { id: "r1", title: "Smart Cash Sweep", desc: "Move checking balances over $5,000 into 5.15% APY yield automatically", active: true },
    { id: "r2", title: "Subscription Leakage Shield", desc: "Flag subscriptions without active usage for > 30 days", active: true },
    { id: "r3", title: "Tax-Loss Harvesting", desc: "Automatically harvest investment losses to offset capital gains", active: true },
    { id: "r4", title: "Paycheck Auto-Divider", desc: "Direct 20% of incoming deposits to wealth portfolios instantly", active: false },
  ]
};

export const PRODUCT_PILLARS = [
  {
    id: "understand",
    badge: "Pillar 01",
    title: "UNDERSTAND",
    subtitle: "Turn financial clutter into effortless clarity.",
    description: "Connect your bank accounts, loans, credit cards, investments, and assets in 60 seconds. Fermor synthesizes millions of data points into a clear, unified net worth pulse and plain-English cashflow audit.",
    features: [
      "Unified multi-bank & investment aggregation",
      "Real-time net worth calculation & history tracking",
      "Automated expense categorization & anomaly detection",
      "Plain-English spending summaries without financial jargon"
    ],
    highlightMetric: "100%",
    highlightLabel: "Clear Visibility"
  },
  {
    id: "act",
    badge: "Pillar 02",
    title: "ACT",
    subtitle: "Autonomous execution on your exact financial rules.",
    description: "Don't let your money idle or bleed through hidden bank fees. Fermor acts on your behalf with intelligent automated sweeps, subscription cancellations, and high-priority debt paydowns.",
    features: [
      "Auto-sweep idle cash to high-yield interest accounts",
      "1-click cancellation of unwanted recurring subscriptions",
      "Automated debt avalanche & snowball acceleration",
      "Dynamic emergency buffer auto-adjustments"
    ],
    highlightMetric: "$952/yr",
    highlightLabel: "Avg Unlocked Yield"
  },
  {
    id: "grow",
    badge: "Pillar 03",
    title: "GROW",
    subtitle: "Precision architecture for long-term compounding.",
    description: "Build lasting wealth with personalized asset projection engines, retirement scenario modeling, tax-efficient rebalancing, and custom financial goal roadmaps.",
    features: [
      "Interactive Monte Carlo wealth projection simulator",
      "Tax-optimized portfolio rebalancing & low-cost index funds",
      "FIRE (Financial Independence) target tracker",
      "Scenario stress testing against inflation & market shifts"
    ],
    highlightMetric: "+$142,000",
    highlightLabel: "10-Year Growth Delta"
  }
];

export const COMPARISON_DATA = [
  { feature: "Unified Net Worth & Multi-Bank Sync", fermor: true, traditionalBank: false, spreadsheets: "Manual", advisors: false },
  { feature: "Automated Idle Cash High-Yield Sweeps (5.15% APY)", fermor: true, traditionalBank: false, spreadsheets: false, advisors: false },
  { feature: "Plain-English Financial AI Insights", fermor: true, traditionalBank: false, spreadsheets: false, advisors: "Slow" },
  { feature: "1-Click Subscription Cancellation & Leakage Guard", fermor: true, traditionalBank: false, spreadsheets: false, advisors: false },
  { feature: "Scenario Simulator (FIRE & Wealth Projection)", fermor: true, traditionalBank: false, spreadsheets: "Complex", advisors: "Costly" },
  { feature: "Zero Hidden Maintenance or Advisory Fees", fermor: true, traditionalBank: false, spreadsheets: true, advisors: false },
  { feature: "FDIC Protection Up To $5M", fermor: true, traditionalBank: "$250k Max", spreadsheets: "N/A", advisors: "Varies" },
];

export const PRICING_TIERS = [
  {
    name: "Starter",
    description: "Essential financial clarity and account aggregation for everyone.",
    priceMonthly: 0,
    priceAnnual: 0,
    badge: "Free Forever",
    features: [
      "Up to 3 bank & investment account syncs",
      "Real-time net worth tracking",
      "Basic cashflow summary & expense grouping",
      "Standard security & FDIC protection"
    ],
    cta: "Start for Free",
    popular: false
  },
  {
    name: "Pro",
    description: "The complete financial OS with autonomous rules and yield optimization.",
    priceMonthly: 12,
    priceAnnual: 9.60,
    badge: "Most Popular",
    features: [
      "Unlimited bank, broker & debt account syncs",
      "5.15% APY High-Yield cash sweep engine",
      "Automated subscription cancellation guardrail",
      "Full interactive Wealth & FIRE projection simulator",
      "Priority 24/7 financial support",
      "Tax-loss harvesting insights"
    ],
    cta: "Start 30-Day Free Trial",
    popular: true
  },
  {
    name: "Wealth",
    description: "Advanced portfolio architecture and dedicated private guidance.",
    priceMonthly: 29,
    priceAnnual: 23.20,
    badge: "For High Earners",
    features: [
      "Everything in Pro",
      "Custom multi-entity asset structuring",
      "Dedicated Human CFP (Certified Financial Planner) checkup",
      "Automated family asset sharing & estate view",
      "Custom API & spreadsheet export",
      "Zero-latency live bank updates"
    ],
    cta: "Unlock Wealth Tier",
    popular: false
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    category: "Founders & Tech",
    name: "Sarah Chen",
    role: "Senior Software Engineer @ Stripe",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    quote: "Fermor replaced 4 different fintech apps and 3 spreadsheets for me. Seeing my complete net worth and having idle cash automatically sweep into 5.15% APY added over $1,200 to my returns in just 6 months.",
    rating: 5,
    verified: true
  },
  {
    id: 2,
    category: "Freelancers",
    name: "Marcus Vance",
    role: "Design Director & Agency Founder",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    quote: "As a business owner with variable income, managing cash flow was stressful. Fermor's 'Act' rules automatically allocate tax reserves and emergency funds the second a invoice is paid.",
    rating: 5,
    verified: true
  },
  {
    id: 3,
    category: "Families",
    name: "Elena & David Rostova",
    role: "Architect & Product Manager",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    quote: "The interactive FIRE simulator made our financial goals crystal clear. We finally know the exact year we can retire comfortable and how much we need to invest each month.",
    rating: 5,
    verified: true
  },
  {
    id: 4,
    category: "Founders & Tech",
    name: "Alex Rivera",
    role: "Fintech Product Lead",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    quote: "The UI design and attention to detail in Fermor is standard-setting. It doesn't look or feel like legacy bank software—it feels like the future of personal money management.",
    rating: 5,
    verified: true
  }
];

export const FAQS = [
  {
    category: "General",
    q: "What is Fermor and how does it work?",
    a: "Fermor is an all-in-one financial operating system that aggregates your bank accounts, investments, credit cards, and loans. It helps you UNDERSTAND your full net worth, ACT on money-saving opportunities (like sweeping idle cash into high yield), and GROW long-term wealth with interactive projection models."
  },
  {
    category: "Security & Privacy",
    q: "Is my bank data safe with Fermor?",
    a: "Yes. Fermor uses bank-grade 256-bit AES encryption and connects to over 11,000 financial institutions using Plaid and Teller. Fermor never stores your login credentials, has zero access to move funds without your explicit authorization, and never sells your data."
  },
  {
    category: "General",
    q: "How does Fermor offer 5.15% APY on idle cash?",
    a: "Fermor partners with FDIC-insured partner banks (such as WebBank and Evolve Bank & Trust) to pass higher yield rates directly to you, providing up to $5,000,000 in pass-through FDIC insurance."
  },
  {
    category: "Pricing",
    q: "Can I use Fermor for free?",
    a: "Yes! Fermor offers a robust Starter tier that is 100% free forever, allowing you to link up to 3 accounts and track net worth in real-time. You can upgrade to Pro or Wealth anytime for advanced autonomous rules."
  },
  {
    category: "Bank Sync & Integration",
    q: "Which financial institutions does Fermor support?",
    a: "Fermor supports over 11,000 financial institutions across North America and Europe, including Chase, Bank of America, Fidelity, Schwab, Vanguard, Robinhood, Coinbase, Marcus, and major credit unions."
  },
  {
    category: "Pricing",
    q: "Can I cancel my subscription anytime?",
    a: "Absoultekly. There are no contracts or cancellation fees. You can cancel or downgrade your plan in 1-click directly from your account settings."
  }
];
