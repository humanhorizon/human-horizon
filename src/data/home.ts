// Homepage copy. Goes through the hh-growth-editor EDIT pass before it is shown to YJ.

export const hero = {
  kicker: 'AI consultancy for Singapore businesses',
  title: 'Make AI part of the company culture, with teams open to it and results that stick.',
  sub: 'AI rarely lasts when it is left to a few enthusiasts. We implement it in each team’s real work, train people on the tasks they already know and help everyone adopt it, so the results keep building.',
  secondary: { label: 'See how we work', href: '#pact' },
  credibility: 'Founded by people-first leaders who have built at Gojek, Alibaba and Meta.',
};

export const pact = {
  eyebrow: 'People first. We call it the PACT.',
  title: 'Teams that feel empowered, not afraid.',
  lead: 'AI adoption is a people change before it is a technology change. Teams take on new ways of working when they know what the change means for their role, help shape it and get support while they learn. Without that, tools go unused. So every engagement runs on four commitments.',
  steps: [
    { letter: 'P', title: 'Promise', body: 'Clear words on what AI means for every role, so nobody is left guessing.' },
    { letter: 'A', title: 'Ask and involve', body: 'The team shapes the workflows it will use.' },
    { letter: 'C', title: 'Coach', body: 'Learning on real tasks, with support along the way.' },
    { letter: 'T', title: 'Track and reinforce', body: 'We measure what changes and adjust, so it holds.' },
  ],
};

export const shift = {
  title: 'The AI revolution is coming, whether we like it or not.',
  lead: 'The question for leaders is not whether the business uses AI. It is whether the whole team adopts it, or only a few individuals. When AI becomes part of the culture, the value builds over time.',
  items: [
    { title: 'Every team on board, not just the early adopters', body: 'Every role works with AI, so the gains spread across the business instead of sitting with one or two people.' },
    { title: 'Habits that hold after the training', body: 'New ways of working are built into daily tasks, so the results keep growing rather than fading.' },
    { title: 'A return the business can measure', body: 'Time saved on each workflow is counted and valued, so leaders see the gain in numbers.' },
  ],
};

export const whatWeDo = {
  title: 'Made to measure.',
  lead: 'No two firms work the same way, so there is no template. Every engagement starts from how the work runs today: we implement custom workflows around it, train the people who use the workflows and help the team keep using them.',
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
  sub: 'With 18 years’ combined experience at the frontier of technology, we have seen how quickly AI is changing work. We started Human Horizon so whole teams move with it, not just the keen few.',
  founders: [
    { name: 'Jaye Wang', photo: '/founders/jaye.jpg', bio: 'Built and led marketing teams across APAC, from first hire to head of the team.', past: 'Gojek, Alibaba, moomoo' },
    { name: 'Wei Lin', photo: '/founders/weiheng.jpg', bio: 'Set up measurement for global teams across four regions, tied to clear returns.', past: 'Meta, foodpanda, Alibaba' },
  ],
};

export const start = {
  title: 'Start with one workflow, or the whole firm.',
  link: { label: 'Schedule a 30-minute chat', href: '/contact?topic=call#form' },
  more: 'and more',
  options: [
    { name: 'First Win', fit: 'For a team of 5 to 10 people', change: 'One workflow running the new way in the team.', includes: ['One custom workflow', 'Hands-on training for the team', 'A Lite ROI Transformation Report on that workflow'] },
    { name: 'Accelerator', fit: 'For a small team or department of 5 to 50 people', change: 'A small team or department working the new way, with the numbers to show it.', includes: ['Three custom workflows', 'Hands-on training for the team or department', 'An ROI Transformation Report for the team or department'] },
    { name: 'Enterprise', fit: 'For a whole company of 20 or more', change: 'The whole company using AI with confidence, under clear rules.', includes: ['Hands-on training for everyone, with role-specific sessions', 'An AI toolkit and AI governance for the company', 'An ROI Transformation Report for each department'] },
  ],
};

export const faq = [
  { q: 'Is this an AI course?', a: 'No. We build custom workflows into your team’s real work, train your people on them and measure the change. Training runs on your own tasks, in a few focused sessions, with no homework.', links: [{ label: 'Compare an AI course with our training', href: '/ai-course-singapore' }] },
  { q: 'What happens to our client data?', a: 'We agree clear AI governance rules with you: what can go into AI tools, which accounts to use, and what a person checks before anything leaves the business.' },
  { q: 'Who do you work with?', a: 'Singapore businesses, from growing teams to established firms, in any industry with recurring work to get through. Founders come to us when staff are already using AI tools with no rules on client data, a workshop changed nothing once people were back at their desks, licences were bought but barely used, or quotes, reports and admin are eating the team’s week. Some have a client or tender asking how they use AI.' },
  { q: 'I have been asked to look into AI for our company. Can we talk first?', a: 'Yes. If you are in HR, training or operations and doing the groundwork for your boss, we are happy to talk with you first. We will help you find a sensible place to start and the case to put to them.' },
  { q: 'How do you measure the result?', a: 'Your ROI Transformation Report shows the hours your team saves, valued at your own rates.' },
  { q: 'Is this covered by course funding?', a: 'Human Horizon is not an accredited course provider, so course funding does not apply. From YA 2027, the Enterprise Innovation Scheme also covers AI adoption, such as subscriptions or licences for AI systems and qualifying AI business services. Please ask your accountant whether you may be able to get a tax deduction. We do not promise any tax outcome.', links: [{ label: 'Enterprise Innovation Scheme (IRAS)', href: 'https://www.iras.gov.sg/schemes/disbursement-schemes/enterprise-innovation-scheme-(eis)' }] },
  { q: 'How do we start?', a: 'With a 30-minute conversation about the work that takes up your team’s week. Drop us an email at contact.humanhorizon@gmail.com.', links: [{ label: 'Email us', href: 'mailto:contact.humanhorizon@gmail.com' }] },
];

export const close = {
  title: 'Nobody gets left behind in the age of AI.',
  sub: 'A 30-minute conversation about the work that slows your team down, and where AI could help first.',
};
