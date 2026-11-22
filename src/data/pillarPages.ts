// What we do: the hub and one page per pillar. A pillar page is built only once its entry exists here.
// Outcomes only: never the method. Goes through the hh-growth-editor EDIT pass before it is shown to YJ.
import type { FaqItem } from '../components/Faq.astro';

const pricingFaq: FaqItem = { q: 'How is it priced?', a: 'Every proposal is shaped to the size of the team and the work it wants to change, with the full scope set out before anything is agreed.' };

const startFaq: FaqItem = { q: 'How do we start?', a: 'With a 30-minute conversation about the work that slows the team down. Send us a short message through the contact form.', links: [{ label: 'Go to the contact form', href: '/contact#form' }] };

export const whatWeDoHub = {
  seoTitle: 'AI implementation, training and adoption | Human Horizon',
  description: 'AI workflows, agents and training for Singapore businesses: we build AI into the team’s real work, train staff to run it and support adoption.',
  kicker: 'AI implementation, training and adoption in Singapore',
  title: 'AI workflows, agents and the training to run them',
  lead: 'Most teams stop at the prompt. We build AI workflows and agents into the work the team already does, train the people to run them and stay with them until it is simply how the team works.',
  pillarsTitle: 'Implement, train, adopt',
  pillarsLead: 'Three parts of one change, each shaped around the business. The ROI Transformation Report shows the hours it gives back.',
  people: {
    title: 'Every step starts with people.',
    body: 'AI changes how people work, so we treat it as a people change, not a tool rollout. Staff hear first, in plain words, what AI means for their roles, shape the workflows they will use and learn on their own work.',
  },
  faqTitle: 'Questions about what we do',
  faq: [
    { q: 'Do we need all three?', a: 'Not to begin. A business can start with one custom AI workflow and the training around it, then add more as the change takes hold. The proposal sets out the right mix for the business.' },
    { q: 'Is this an AI course?', a: 'No. We build AI into the team’s real work, train the people on it and help the change last. Training runs on the team’s own tasks, not on generic examples.' },
    { q: 'Which AI tools does Human Horizon use?', a: 'We start from the tools the team already has and recommend new ones only where they fit the work. We are not tied to any one vendor.' },
    pricingFaq,
    startFaq,
  ] as FaqItem[],
};

export type PillarPage = {
  seoTitle: string;
  description: string;
  kicker: string;
  title: string;
  lead: string;
  painsTitle: string;
  pains: { title: string; body: string }[];
  deliverablesTitle: string;
  deliverables: { name: string; body: string }[];
  useCasesTitle: string;
  useCases: { kind: 'industries' | 'teams'; slug: string; index: number }[];
  people: { title: string; body: string };
  faqTitle: string;
  faq: FaqItem[];
  close: { title: string; sub: string };
};

export const pillarPages: Record<string, PillarPage> = {
  implement: {
    seoTitle: 'AI implementation in Singapore | Human Horizon',
    description: 'AI implementation for Singapore businesses. Custom AI workflows and AI agents built into the team’s real work, with clear rules.',
    kicker: 'AI implementation for Singapore businesses',
    title: 'AI built into the work, not bolted on',
    lead: 'Buying licences is easy. Getting AI to do real work inside the business is not. We find the work worth changing, build custom workflows and AI agents around it with the team, and set clear rules so everyone knows what is allowed.',
    painsTitle: 'Why AI adoption stalls after the licences',
    pains: [
      { title: 'Licences are just tools', body: 'Everyone has access to AI tools, but nothing in the way work actually gets done has changed.' },
      { title: 'Everyone on their own', body: 'A few people use AI in their own way, and what works for them never reaches the rest of the team.' },
      { title: 'Client data at risk', body: 'Client details can end up in personal accounts when nobody has said what is allowed.' },
      { title: 'Nobody owns it', body: 'AI sits on the side of everyone’s job, so it slips down the list behind this week’s deadlines.' },
    ],
    deliverablesTitle: 'What we implement',
    deliverables: [
      { name: 'Discovery and priorities', body: 'Leaders know where the team’s time goes and which work to change first, so the first build lands where it matters most.' },
      { name: 'Custom workflows', body: 'Built around the recurring work that fills the team’s week, using the firm’s own documents, formats and voice. A person checks the output before it goes out.' },
      { name: 'AI agents', body: 'Assistants that take on the repeat steps of a job, such as drafting a quote or sorting a request, with a person checking the result.' },
      { name: 'AI tools set up', body: 'The right accounts, settings and access for the team, so everyone works in approved tools rather than personal ones.' },
      { name: 'AI governance', body: 'Clear rules on client data, approved tools and sign-off, so the team knows what can go into AI tools and what never does.' },
    ],
    useCasesTitle: 'What implementation looks like',
    useCases: [
      { kind: 'industries', slug: 'logistics-freight', index: 0 },
      { kind: 'industries', slug: 'accounting-corporate-secretarial', index: 0 },
      { kind: 'teams', slug: 'sales', index: 0 },
    ],
    people: {
      title: 'The team designs the workflows it will use.',
      body: 'The people who do the work know where it hurts. They help choose what to change, shape how it works and keep the final say, so the new way of working belongs to them.',
    },
    faqTitle: 'Questions about AI implementation',
    faq: [
      { q: 'Do we need technical staff?', a: 'No. We build the workflows with the team, in approved tools, and hand them over so staff can run them day to day.' },
      { q: 'Is our client data safe?', a: 'We agree clear rules with the business on which tools to use, what client data can go into them and what a person checks before anything leaves the business. Those rules are part of what we implement.' },
      { q: 'Which AI tools does Human Horizon use?', a: 'We start from the tools the team already has and recommend new ones only where they fit the work. We are not tied to any one vendor.' },
      pricingFaq,
      startFaq,
    ],
    close: {
      title: 'Make AI licences do real work',
      sub: 'Licences are the easy part. It starts with a 30-minute conversation about the work that slows the team down.',
    },
  },
  train: {
    seoTitle: 'AI training for teams in Singapore | Human Horizon',
    description: 'Hands-on AI training for Singapore teams, on the workflows they run. People learn alongside the tasks they already know, so it sticks.',
    kicker: 'Hands-on AI training for teams in Singapore',
    title: 'Teams that go from wary to confident with AI',
    lead: 'AI courses teach in general terms, so the impact is never felt in day-to-day work. We customise the training to the tasks the team already knows, so what they learn changes how the work gets done.',
    painsTitle: 'Why existing AI courses do not stick',
    pains: [
      { title: 'Too general to use', body: 'Courses stay at a high level, so people leave unsure how any of it applies to their own job.' },
      { title: 'Old habits win', body: 'The course ends, the inbox is full, and people go straight back to the way they have always worked.' },
      { title: 'Quiet worries', body: 'Some people fear AI is coming for their role, so they hold back rather than try.' },
      { title: 'Different starting points', body: 'A few are already confident, others have never tried it, and one session cannot serve both.' },
    ],
    deliverablesTitle: 'What the team gets',
    deliverables: [
      { name: 'Hands-on training', body: 'Starts with the basics: what AI can and cannot do, how to use it safely and how to ask well. Then it moves straight onto the team’s real tasks and documents, so people leave with work they can put to use.' },
      { name: 'Role-specific sessions', body: 'Shaped to the work of sales, operations, admin or finance staff, so every example is one they recognise.' },
      { name: 'Leadership briefing', body: 'Helps founders and managers lead the change in their own teams and review AI-assisted work with confidence.' },
      { name: 'AI toolkit', body: 'Prompts, templates and guides the team keeps and reuses after the training ends.' },
    ],
    useCasesTitle: 'What the team learns to do',
    useCases: [
      { kind: 'teams', slug: 'customer-service', index: 0 },
      { kind: 'teams', slug: 'marketing', index: 0 },
      { kind: 'industries', slug: 'education', index: 0 },
    ],
    people: {
      title: 'Nobody gets left behind in the room.',
      body: 'People learn at different speeds and some arrive worried. Training starts from where each person is, answers the worries openly and builds confidence on work they already know.',
    },
    faqTitle: 'Questions about AI training',
    faq: [
      { q: 'Will it add to my team’s workload?', a: 'It should not. The work happens in the session, on the team’s own tasks, within normal working time.' },
      { q: 'What if some of our team have never used AI?', a: 'They start with the basics, on their own work, alongside colleagues. Nobody is expected to arrive as an expert.' },
      { q: 'How is this different from an AI course?', a: 'A course teaches the same general examples to everyone. We customise each session to the team’s own tasks, so the workflows they build in training become part of the job.', links: [{ label: 'Compare an AI course with our training', href: '/ai-course-singapore' }, { label: 'Why AI courses fade', href: '/insights/why-ai-courses-fade' }] },
      { q: 'Which AI tools does the training use?', a: 'The ones the team already uses, or the ones we set up together. We are not tied to any one vendor.' },
      pricingFaq,
      startFaq,
    ],
    close: {
      title: 'Learning that becomes the way they work',
      sub: 'Training on their tasks, not someone else’s. It starts with a 30-minute conversation about the work that slows the team down.',
    },
  },
  adopt: {
    seoTitle: 'AI adoption for Singapore businesses | Human Horizon',
    description: 'AI adoption support for Singapore businesses. Adoption tracking, playbooks, a handover pack and refreshers, so the change lasts.',
    kicker: 'AI adoption for Singapore businesses',
    title: 'Make the change last',
    lead: 'AI only pays off when it becomes part of the culture: how the team works on a busy day, not only in a training room. We help the team adopt it until it is habit, and show leaders what is sticking.',
    painsTitle: 'Why AI fades instead of sticking',
    pains: [
      { title: 'Old habits return', body: 'Under pressure, people fall back to the way they have always done it.' },
      { title: 'Know-how walks out', body: 'The one person who understands a workflow moves on, and it quietly stops.' },
      { title: 'Nobody can see it', body: 'Leaders cannot tell what is being used and what has fallen away.' },
      { title: 'Change feels like extra work', body: 'Every new way of working asks people to change again, so the team holds back and waits it out.' },
    ],
    deliverablesTitle: 'What adoption includes',
    deliverables: [
      { name: 'AI adoption tracking', body: 'Usage and time saved across the team, so leaders can see what is sticking and where people need help.' },
      { name: 'Playbooks', body: 'Step-by-step guides for each new workflow, so the know-how stays when people change.' },
      { name: 'Handover pack', body: 'Everything we set up, documented and owned by the business, with a named owner for each workflow.' },
      { name: 'Refreshers', body: 'The team kept current as the tools change, and new joiners brought up to speed.' },
      { name: 'ROI Transformation Report', body: 'The hours the team saves, valued at the firm’s own rates.' },
    ],
    useCasesTitle: 'What lasting change looks like',
    useCases: [
      { kind: 'teams', slug: 'operations', index: 0 },
      { kind: 'teams', slug: 'hr-people', index: 0 },
      { kind: 'industries', slug: 'cleaning-facilities', index: 0 },
    ],
    people: {
      title: 'Habits belong to the people who keep them.',
      body: 'Change lasts when the team owns it. People shape the workflows, keep the playbooks and decide what to improve next, so AI becomes part of how they work rather than something done to them.',
    },
    faqTitle: 'Questions about AI adoption',
    faq: [
      { q: 'What happens after handover?', a: 'The team has the playbooks, the handover pack and a named owner for each workflow, so the work keeps running. Refreshers keep the team current, and new joiners are brought up to speed.' },
      { q: 'How do we know it is working?', a: 'The ROI Transformation Report shows the hours the team saves, valued at the firm’s own rates, and adoption tracking shows what is being used.' },
      { q: 'What if our tools change?', a: 'Refreshers keep the team current as the tools change, and the playbooks change with them.' },
      pricingFaq,
      startFaq,
    ],
    close: {
      title: 'Make AI how the team works, for good',
      sub: 'Not a project that fades. It starts with a 30-minute conversation about the work that slows the team down.',
    },
  },
};
