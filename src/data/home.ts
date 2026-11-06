// Homepage copy. Goes through the hh-growth-editor EDIT pass before it is shown to YJ.

export const hero = {
  kicker: 'AI consultancy for Singapore businesses',
  title: 'Nobody gets left behind in the age of AI.',
  sub: 'Sending your team on an AI course rarely sticks. We start with your people, build AI into the work they already do, and show you the hours it gives back.',
  secondary: { label: 'See how we work', href: '#pact' },
  credibility: 'Founded by people-first leaders who have built at Gojek, Alibaba and Meta.',
};

export const pact = {
  eyebrow: 'People first. We call it the PACT.',
  title: 'Your team feels empowered, not afraid.',
  lead: 'You may know the pattern. Licences get bought, a few enthusiasts dive in and everyone else waits to see whether this is about replacing them. So every engagement runs on four commitments.',
  steps: [
    { letter: 'P', title: 'Promise', body: 'Clear words on what AI means for every role, so nobody is left guessing.' },
    { letter: 'A', title: 'Ask and involve', body: 'Your team shapes the workflows it will use.' },
    { letter: 'C', title: 'Coach', body: 'Learning on real tasks, with support along the way.' },
    { letter: 'T', title: 'Track and reinforce', body: 'We measure what changes and adjust, so it holds.' },
  ],
};

export const shift = {
  title: 'The AI revolution is coming, whether we like it or not.',
  lead: 'For a founder or leader, the question is not whether your company and teams adopt AI. It is whether they come through it stronger. Done well, here is what changes for you.',
  items: [
    { title: 'Your best people on your best work', body: 'Hours spent copying, chasing and retyping go back into clients and growth.' },
    { title: 'Growth without hiring ahead of revenue', body: 'Take on more work with the team you already have.' },
    { title: 'A return you can see in numbers', body: 'Hours saved, valued at your own rates, in your ROI Transformation Report.' },
  ],
};

export const whatWeDo = {
  title: 'Made to measure.',
  lead: 'No two firms run the same way, so there is no template. We start from how your work runs today, then build custom workflows around it, train your people and help them adopt it for good.',
  report: { name: 'ROI Transformation Report', line: 'The hours your team saves, valued at your own rates.' },
};

export const work = {
  title: 'Built around the work your team already does',
  sub: 'Pick your industry or your team to see what changes.',
  featured: 'logistics-freight',
  icons: {
    'marketing-agencies': '📣', recruitment: '🤝', 'trading-distribution': '📦', 'logistics-freight': '🚢',
    'accounting-corporate-secretarial': '🧾', 'interior-design': '🛋️', education: '🎓', 'cleaning-facilities': '🧹',
    'law-firms': '⚖️', 'property-agencies': '🏠', 'engineering-me': '🏗️', 'it-services': '💻',
    sales: '💼', marketing: '✍️', operations: '⚙️', 'finance-admin': '💰', 'hr-people': '👥', 'customer-service': '💬',
  } as Record<string, string>,
};

export const people = {
  title: 'Founded by people who have built from zero.',
  sub: 'Two founders with 18 years’ combined experience at the forefront of technology and AI implementation.',
  founders: [
    { name: 'Jaye Wang', photo: '/founders/jaye.jpg', bio: 'Built and led marketing teams across APAC, from first hire to head of the team.', past: 'Gojek, Alibaba, moomoo' },
    { name: 'Weiheng Lin', photo: '/founders/weiheng.jpg', bio: 'Set up measurement for global teams across four regions, tied to clear returns.', past: 'Meta, foodpanda, Alibaba' },
  ],
};

export const start = {
  title: 'Start with one workflow, or the whole firm.',
  link: { label: 'Schedule a 30-minute chat', href: 'mailto:contact.humanhorizon@gmail.com?subject=A%2030-minute%20chat%20with%20Human%20Horizon' },
  more: 'and more',
  options: [
    { name: 'First Win', fit: 'For a team of 5 to 10 people', change: 'One workflow running the new way in your team.', includes: ['One custom workflow', 'Hands-on training for the team', 'A Lite ROI Transformation Report on that workflow'] },
    { name: 'Accelerator', fit: 'For a small team or department of 5 to 50 people', change: 'A small team or department working the new way, with the numbers to show it.', includes: ['Three custom workflows', 'Hands-on training for the team or department', 'An ROI Transformation Report for the team or department'] },
    { name: 'Enterprise', fit: 'For a whole company of 20 or more', change: 'Your whole team using AI with confidence, under clear rules.', includes: ['Hands-on training for everyone, with role-specific sessions', 'An AI toolkit and AI governance for the company', 'An ROI Transformation Report for each department'] },
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
  title: 'AI is coming either way. Let it be your culture.',
  sub: 'A 30-minute conversation about the work that slows your team down.',
};
