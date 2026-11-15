// Homepage copy. Goes through the hh-growth-editor EDIT pass before it is shown to YJ.

export const hero = {
  kicker: 'People-first AI consultancy based in Singapore',
  title: 'Make AI part of the company culture for results that stick.',
  sub: 'AI rarely lasts when it is left to a few enthusiasts. We implement it in each team’s real work, train people on the tasks they already know and help everyone adopt it, so the business buys back time for the work that matters.',
  credibility: 'Founded by people-first leaders who have built at Gojek, Alibaba and Meta.',
};

export const pact = {
  eyebrow: 'People first. We call it the PACT.',
  title: 'Teams that feel empowered, not afraid.',
  lead: 'AI adoption is a people change before it is a technology change. Without it, tools go unused. So every engagement runs on four commitments.',
  steps: [
    { letter: 'P', title: 'Promise', body: 'Clear words on what AI means for every role, so nobody is left guessing.' },
    { letter: 'A', title: 'Ask and involve', body: 'The team shapes the workflows it will use.' },
    { letter: 'C', title: 'Coach', body: 'Learning on real tasks, with support along the way.' },
    { letter: 'T', title: 'Track and reinforce', body: 'We measure what changes and adjust, so it holds.' },
  ],
};

export const shift = {
  title: 'The AI revolution is coming, whether we like it or not.',
  lead: 'Left to a few individuals, AI barely moves the business, and the cost of standing still adds up: hours lost to work AI could take on, client data in tools nobody approved, and competitors who move first. When AI becomes part of the culture:',
  // Copy aims at each buyer's motive without naming it (YJ, 15 Nov 2026): time, direction, an edge, simplicity.
  items: [
    { title: 'Hours go back to the work that grows the business.' },
    { title: 'Every person knows where to start and what good looks like.' },
    { title: 'The team pulls ahead of competitors still experimenting.' },
    { title: 'One clear way of working replaces a pile of tools no one has time to learn.' },
  ],
};

export const whatWeDo = {
  title: 'Made to measure.',
  lead: 'No two firms work the same way, so there is no template. Every engagement starts from how the work runs today.',
  discovery: { name: 'Discovery and Customisation Mapping', line: 'A review of how each team works today, which workflows to customise first and what success should look like.' },
  report: { name: 'ROI Transformation Report', line: 'The hours the team saves, valued at the firm’s own rates.' },
};

export const work = {
  title: 'Built around the work teams already do.',
  sub: 'Pick an industry or a team to see what changes.',
  featured: 'logistics-freight',
  icons: {
    'marketing-agencies': '📣', recruitment: '🤝', 'trading-distribution': '📦', 'logistics-freight': '🚢',
    'accounting-corporate-secretarial': '🧾', 'interior-design': '🛋️', education: '🎓', healthcare: '🩺', 'cleaning-facilities': '🧹',
    'law-firms': '⚖️', 'property-agencies': '🏠', 'engineering-me': '🏗️', 'it-services': '💻',
    sales: '💼', marketing: '✍️', operations: '⚙️', 'finance-admin': '💰', 'hr-people': '👥', 'customer-service': '💬',
  } as Record<string, string>,
};

export const people = {
  title: 'Founded by people who have built from zero.',
  sub: '18 years’ combined experience at the frontier of technology. We started Human Horizon so whole teams move with AI, not just the keen few.',
  founders: [
    { name: 'Jaye Wang', photo: '/founders/jaye.jpg', bio: 'Built and led marketing teams across APAC, from first hire to head of the team.', past: 'Gojek, Alibaba, moomoo' },
    { name: 'Wei Lin', photo: '/founders/weiheng.jpg', bio: 'Set up measurement for global teams across four regions, tied to clear returns.', past: 'Meta, foodpanda, Alibaba' },
  ],
};

export const start = {
  title: 'Start with one workflow, or the whole firm.',
  link: { label: 'Book a 30-minute discovery call', href: '/contact?start=call#form' },
  options: [
    { name: 'First Win', fit: 'For a team of 5 to 10 people', change: 'One workflow running the new way in the team.', includes: ['One custom workflow', 'Hands-on training for the team', 'A Lite ROI Transformation Report on that workflow'] },
    { name: 'Accelerator', fit: 'For a small team or department of 5 to 50 people', change: 'A small team or department working the new way, with the numbers to show it.', includes: ['Three custom workflows', 'Hands-on training for the team or department', 'An ROI Transformation Report for the team or department'] },
    { name: 'Enterprise', fit: 'For a whole company of 20 or more', change: 'The whole company using AI with confidence, under clear rules.', includes: ['Hands-on training for everyone, with role-specific sessions', 'An AI toolkit and AI governance for the company', 'An ROI Transformation Report for each department'] },
  ],
};

export const faq = [
  { q: 'What does an AI consultancy do?', a: 'An AI consultancy helps a business decide where AI fits, then puts it to work. We start with Discovery and Customisation Mapping, implement custom AI workflows and agents, train staff hands-on through the PACT and support adoption until the new ways of working become routine.', links: [{ label: 'What we do', href: '/what-we-do' }] },
  { q: 'Is this an AI course?', a: 'No. We build custom workflows into your team’s real work, train your people on them and measure the change. Training runs on your own tasks, in a few focused sessions, with no homework.', links: [{ label: 'Compare an AI course with our training', href: '/ai-course-singapore' }] },
  { q: 'We already pay for ChatGPT or Copilot. Why is nobody using it?', a: 'Licences alone rarely change how work gets done. People need workflows built around their real tasks, training on those tasks and support while the habit forms. We work with the AI tools the business has approved and build the habits around them.' },
  { q: 'Will AI replace our staff?', a: 'That is a decision for the business, not for AI. The first PACT commitment is clear words on what AI means for every role, so nobody is left guessing, and staff help shape the workflows they will use.' },
  { q: 'Do we need technical staff or an IT team?', a: 'No. We design and set up the workflows, and train the people who use them in plain language. Where there is an IT team or system admin, we involve them on access, data and AI governance.' },
  { q: 'What happens to our client data?', a: 'We agree clear AI governance rules with you: what can go into AI tools, which accounts to use, and what a person checks before anything leaves the business.' },
  { q: 'Who do you work with?', a: 'Singapore businesses with recurring work to get through, in any industry. Founders come to us when staff use AI tools with no rules on client data, a workshop changed nothing back at the desk, or licences were bought but barely used.' },
  { q: 'I have been asked to look into AI for our company. Can we talk first?', a: 'Yes. If you are in HR, training or operations and doing the groundwork for your boss, we are happy to talk with you first. We will help you find a sensible place to start and the case to put to them.' },
  { q: 'How do you measure AI training ROI?', a: 'The ROI Transformation Report shows the hours the team saves on each workflow, valued at the firm’s own rates.', links: [{ label: 'How to measure AI training ROI', href: '/insights/how-to-measure-ai-training-roi' }] },
  { q: 'Is this covered by course funding?', a: 'Human Horizon is not an accredited course provider, so course funding does not apply. From YA 2027, the Enterprise Innovation Scheme also covers AI adoption, such as subscriptions or licences for AI systems and qualifying AI business services. Please ask your accountant whether you may be able to get a tax deduction. We do not promise any tax outcome.', links: [{ label: 'Enterprise Innovation Scheme (IRAS)', href: 'https://www.iras.gov.sg/schemes/disbursement-schemes/enterprise-innovation-scheme-(eis)' }] },
];

export const close = {
  title: 'Nobody gets left behind in the age of AI.',
  sub: 'A 30-minute conversation about the work that slows your team down, and where AI could help first.',
};
