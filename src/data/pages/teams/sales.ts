import type { SegmentPage } from '../../segmentPages';

const page: SegmentPage = {
  seoTitle: 'AI for sales teams in Singapore | Human Horizon',
  description: 'People-first AI for Singapore sales teams. Proposals, tenders, follow-ups and meeting prep built into your team’s real work.',
  kicker: 'AI for sales teams in Singapore',
  title: 'Your salespeople back in front of buyers.',
  lead: 'Sales weeks disappear into proposals, tenders, follow-up emails, pipeline updates and meeting prep. We build AI into that work with your team, so your people spend their time with buyers and on the deals that matter.',
  painsTitle: 'Where sales weeks go',
  pains: [
    { title: 'Proposals from scratch', body: 'Every new opportunity means rebuilding a proposal from old files, often over evenings and weekends.' },
    { title: 'Tenders left on the table', body: 'Some tenders are never bid for because nobody has the time to work through the requirements.' },
    { title: 'Follow-ups that slip', body: 'After every meeting someone has to write the recap and the next email, and warm leads go quiet while they wait.' },
    { title: 'Pipeline admin', body: 'Salespeople update the pipeline at the end of the week from memory, so the founder never quite knows where deals stand.' },
  ],
  start: {
    title: 'A good first step for a sales team',
    body: 'Start with a First Win on one of the workflows on this page, such as your proposals and tenders, for a team of 5 to 10 people. Your team tries it on its own work, so you can judge the change before going further.',
  },
  people: {
    title: 'Your relationships stay yours.',
    body: 'Salespeople worry that AI will make their outreach sound robotic or make their role less needed. We start there. Your team shapes how AI is used, keeps every client relationship and the judgement on price, and hands the paperwork to the tools.',
  },
  changesTitle: 'What changes for your team',
  useCases: [
    { name: 'Proposals and tenders', before: 'The founder and one salesperson rebuild every proposal from old files over evenings and weekends, and some tenders are skipped for lack of time.', after: 'Drop in the brief or tender and a first proposal comes back tailored to the buyer, built from your best past work: similar clients, the results you delivered and a draft answer to each requirement, in your voice and your format. The founder shapes the pitch and sets the price, then sends.', outcome: 'More bids out, fewer late nights' },
    { name: 'Meeting recaps and follow-ups', before: 'Notes from sales meetings sit in notebooks and inboxes, and the follow-up email gets written days later, if at all.', after: 'The meeting becomes a clear recap with the buyer’s needs, objections and next steps, and a follow-up email in your voice is waiting for the salesperson, with the pipeline update ready to confirm. They check it, add the personal touch, then send.', outcome: 'From meeting to recap and follow-up, automatically' },
    { name: 'Account research and meeting prep', before: 'Before a meeting, salespeople piece together the buyer’s company, past conversations and recent news from different tabs and threads.', after: 'A one-page briefing is ready for the meeting, with who the buyer is, what you have discussed before, what they are likely to care about and the questions worth asking. The salesperson reads it, adds what they know from the relationship, and walks in prepared.', outcome: 'Every buyer meeting starts prepared' },
  ],
  faqTitle: 'Questions sales leaders ask',
  faq: [
    { q: 'Will AI replace our salespeople?', a: 'No. Buyers buy from people they trust. We build AI into the paperwork around selling, such as proposals, recaps and meeting prep, so your salespeople spend more time with buyers. Your team keeps the relationships and the judgement on every pitch and price.' },
    { q: 'What about our client and pricing data?', a: 'We agree clear rules with you on which tools to use, what client details, pricing and contract terms can go into them, and what a person checks before anything is sent. Your pricing stays under your control.' },
    { q: 'Do you work with our CRM?', a: 'Yes. We start from the CRM, email and tools your team already uses, and suggest new ones only where they fit the work. If you track deals in spreadsheets or chats, we start there.' },
    { q: 'How do we start?', a: 'With a 30-minute conversation about the work that slows your team down. Send us a short message through the contact form.', links: [{ label: 'Go to the contact form', href: '/contact#form' }] },
  ],
  close: {
    title: 'Warm leads followed up while they are still warm.',
    sub: 'Fewer evenings rebuilding proposals, fewer warm leads gone quiet. It starts with a 30-minute conversation about the work that slows your team down.',
  },
};

export default page;
