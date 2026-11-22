// Homepage copy. Goes through the hh-marketing-content-editor gate before it is shown to YJ.
// Since 22 Nov 2026 the page leads with "Go beyond the prompt" and what gets built (AI workflows, agents,
// training). People first (the PACT) is the method: one short block plus a link to /how-we-work.

export const hero = {
  kicker: 'AI consultancy in Singapore for workflows, agents and training',
  title: 'Go beyond the prompt',
  sub: 'Most teams use ChatGPT or Claude one prompt at a time. We build AI workflows and agents that run the repeat work from start to finish, and train the team to use them.',
  credibility: 'Founded by leaders who have built at Gojek, Alibaba and Meta.',
};

// The PACT: used by /how-we-work and the short method strip. Bullets always run P, A, C, T.
export const pact = {
  eyebrow: 'How we work: the PACT',
  title: 'Why the results last',
  lead: 'Workflows only pay off when the team uses them. So every engagement runs on four commitments to the people who do the work.',
  steps: [
    { letter: 'P', title: 'Promise', body: 'Clear words on what AI means for every role, so nobody is left guessing.' },
    { letter: 'A', title: 'Ask and involve', body: 'The team shapes the workflows it will use.' },
    { letter: 'C', title: 'Coach', body: 'Learning on real tasks, with support along the way.' },
    { letter: 'T', title: 'Track and reinforce', body: 'We measure what changes and adjust, so it holds.' },
  ],
};

// From prompt to agent: one everyday task, before and after. The steps stay the same; what changes is who does
// each one, so the map changes colour rather than redrawing. Illustrative, no numbers.
export const ladder = {
  title: 'From prompt to agent',
  lead: 'A ChatGPT or Claude subscription can do far more than answer one prompt at a time.',
  task: 'A customer emails to ask for a quotation.',
  levels: [
    {
      key: 'prompt',
      name: 'Prompt',
      line: 'A person asks, AI answers.',
      body: 'Someone copies the request into ChatGPT, pastes in prices, fixes the draft and sends it. Every quotation starts from zero, and the repeat work stays on people’s desks.',
    },
    {
      key: 'agent',
      name: 'AI workflow and agent',
      line: 'AI runs the steps, a person approves.',
      body: 'The request starts the work on its own. AI asks about missing details, checks stock and prices and drafts the quotation and reply. A person approves before anything goes out.',
    },
  ],
  // Who does each step at each level: person, ai, or trigger (starts on its own).
  steps: [
    { label: 'Spot the request', prompt: 'person', agent: 'trigger' },
    { label: 'Read the request', prompt: 'person', agent: 'ai' },
    { label: 'Ask about missing details', prompt: 'person', agent: 'ai' },
    { label: 'Look up stock and prices', prompt: 'person', agent: 'ai' },
    { label: 'Draft the quotation and reply', prompt: 'ai', agent: 'ai' },
    { label: 'Check and send', prompt: 'person', agent: 'person' },
  ] as { label: string; prompt: string; agent: string }[],
};

export const whatWeDo = {
  title: 'What we do',
  lead: 'We build the AI workflows and agents, train the team to run them and support the team until the workflows are part of the routine. Every engagement starts from how the work runs today.',
  discovery: { name: 'Discovery and Customisation Mapping', line: 'A review of how each team works today, which workflows to build first and what success should look like.' },
  report: { name: 'ROI Transformation Report', line: 'The hours the team saves, valued at the firm’s own rates.' },
};

export const work = {
  title: 'Built around the work teams already do',
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
  title: 'Founded by people who have built from zero',
  sub: '18 years’ combined experience at the frontier of technology. We started Human Horizon so whole teams move with AI, not just the keen few.',
  founders: [
    { name: 'Jaye Wang', photo: '/founders/jaye.jpg', bio: 'Built and led marketing teams across APAC, from first hire to head of the team.', past: 'Gojek, Alibaba, moomoo' },
    { name: 'Wei Lin', photo: '/founders/weiheng.jpg', bio: 'Set up measurement for global teams across four regions, tied to clear returns.', past: 'Meta, foodpanda, Alibaba' },
  ],
};

export const start = {
  title: 'Start with one workflow, or the whole firm',
  link: { label: 'Book a 30-minute discovery', href: '/contact#form' },
  options: [
    { name: 'First Win', fit: 'For a team of 5 to 10 people', change: 'One AI workflow running the new way in the team.', includes: ['One custom AI workflow', 'Hands-on training for the team', 'A Lite ROI Transformation Report on that workflow'] },
    { name: 'Accelerator', fit: 'For a small team or department of 5 to 50 people', change: 'A small team or department working the new way, with the numbers to show it.', includes: ['Three custom AI workflows', 'Hands-on training for the team or department', 'An ROI Transformation Report for the team or department'] },
    { name: 'Enterprise', fit: 'For a whole company of 20 or more', change: 'The whole company using AI with confidence, under clear rules.', includes: ['Custom AI workflows, scoped to the company’s needs', 'Hands-on training for everyone, with role-specific sessions', 'An AI toolkit and AI governance for the company', 'An ROI Transformation Report for each department'] },
  ],
};

export const faq = [
  { q: 'What is the difference between a prompt, an AI workflow and an AI agent?', a: 'A prompt is one question to an AI tool, and a person does every step around it. An AI workflow runs a set sequence of steps on its own each time, such as reading a request and drafting the reply. An AI agent works out the next step itself, using the business’s tools. In both, a person checks the result before anything goes out.', links: [{ label: 'What is an AI agent?', href: '/insights/glossary/ai-agent' }] },
  { q: 'What does an AI consultancy do?', a: 'An AI consultancy helps a business decide where AI fits, then puts it to work. We start with Discovery and Customisation Mapping, build custom AI workflows and agents, train staff hands-on and support adoption until the new ways of working become routine.', links: [{ label: 'What we do', href: '/what-we-do' }] },
  { q: 'Is this an AI course?', a: 'No. We build custom workflows into your team’s real work, train your people on them and measure the change. Training runs on your own tasks, in a few focused sessions, with no homework.', links: [{ label: 'Compare an AI course with our training', href: '/ai-course-singapore' }] },
  { q: 'We already pay for ChatGPT or Copilot. Why is nobody using it?', a: 'Licences alone rarely change how work gets done, and many teams stop at the prompt. We build workflows and agents around the real tasks, train people on them and support them while the habit forms, using the AI tools the business has approved.' },
  { q: 'Will AI replace our staff?', a: 'That is a decision for the business, not for AI. We start with clear words on what AI means for every role, so nobody is left guessing, and staff help shape the workflows they will use.', links: [{ label: 'How we work', href: '/how-we-work' }] },
  { q: 'Do we need technical staff or an IT team?', a: 'No. We design and set up the workflows, and train the people who use them in plain language. Where there is an IT team or system admin, we involve them on access, data and AI governance.' },
  { q: 'What happens to our client data?', a: 'We agree clear AI governance rules with you: what can go into AI tools, which accounts to use, and what a person checks before anything leaves the business.' },
  { q: 'Who do you work with?', a: 'Singapore businesses with recurring work to get through, in any industry. Founders come to us when staff use AI tools with no rules on client data, a workshop changed nothing back at the desk, or licences were bought but barely used.' },
  { q: 'I have been asked to look into AI for our company. Can we talk first?', a: 'Yes. If you are in HR, training or operations and doing the groundwork for your boss, we are happy to talk with you first. We will help you find a sensible place to start and the case to put to them.' },
  { q: 'How do you measure AI training ROI?', a: 'The ROI Transformation Report shows the hours the team saves on each workflow, valued at the firm’s own rates.', links: [{ label: 'How to measure AI training ROI', href: '/insights/how-to-measure-ai-training-roi' }] },
  { q: 'Is this covered by course funding?', a: 'Human Horizon is not an accredited course provider, so course funding does not apply. From YA 2027, the Enterprise Innovation Scheme also covers AI adoption, such as subscriptions or licences for AI systems and qualifying AI business services. Please ask your accountant whether you may be able to get a tax deduction. We do not promise any tax outcome.', links: [{ label: 'Enterprise Innovation Scheme (IRAS)', href: 'https://www.iras.gov.sg/schemes/disbursement-schemes/enterprise-innovation-scheme-(eis)' }] },
];

export const close = {
  title: 'Start with one workflow the team repeats every week',
  sub: 'A 30-minute conversation about the work that slows your team down, and where AI could help first.',
};
