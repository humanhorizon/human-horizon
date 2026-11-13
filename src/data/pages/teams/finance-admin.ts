import type { SegmentPage } from '../../segmentPages';

const page: SegmentPage = {
  seoTitle: 'AI for finance and admin teams in Singapore | Human Horizon',
  description: 'People-first AI for Singapore finance and admin teams. Supplier bills, month-end reconciliations and management reports built into your team’s work.',
  kicker: 'AI for finance and admin teams in Singapore',
  title: 'Your finance team, free to think about the numbers.',
  lead: 'Finance and admin hours disappear into keying supplier bills, chasing approvals, reconciling bank lines and building the monthly reports. We build AI into that work with your team, so your people spend their time on checking, judgement and the questions the numbers raise.',
  painsTitle: 'Where finance and admin weeks go',
  pains: [
    { title: 'Supplier bills', body: 'Admin staff key each invoice by hand and match it line by line to the purchase order.' },
    { title: 'Chasing approvals', body: 'Bills wait in inboxes while someone follows up with approvers over WhatsApp.' },
    { title: 'Month-end close', body: 'The end of every month goes on ticking off bank lines and hunting for missing receipts.' },
    { title: 'Monthly reports', body: 'Figures are copied from the accounts into spreadsheets and slides before the founder can see where the business stands.' },
  ],
  people: {
    title: 'Your finance team keeps the final say.',
    body: 'Finance people worry that AI will get the numbers wrong, or make their role smaller. We start there. AI handles the keying, matching and first drafts, and your finance team reviews, approves and signs off every figure before it reaches the books or the founder.',
  },
  changesTitle: 'What changes for your team',
  useCases: [
    { name: 'Supplier bills and approvals', before: 'Admin staff key each supplier invoice by hand, match it to purchase orders and chase approvers over WhatsApp.', after: 'Bills arrive already read, keyed and matched to the purchase order and delivery note, with any price or quantity mismatch flagged and the right approver lined up. Your finance lead works through the exceptions and approves the batch before anything is paid.', outcome: 'Bills matched and ready to approve' },
    { name: 'Bank reconciliation and month-end', before: 'The end of every month goes on ticking off bank lines against the books and emailing colleagues for missing receipts.', after: 'Bank lines arrive matched to invoices and receipts, with the unexplained items gathered in one list and polite requests for missing documents already drafted. Your team works through the queries, applies the judgement calls and closes the month.', outcome: 'Month-end that starts from a short list of queries' },
    { name: 'Monthly management reports', before: 'Someone copies figures from the accounts into a spreadsheet and slides, then writes a summary the founder reads too late to act on.', after: 'The monthly pack arrives assembled from your accounts, with revenue, costs, cash and overdue invoices laid out and the movements worth asking about called out in plain words. Your finance lead checks it, adds the context only they know, then shares it.', outcome: 'A clear monthly picture, ready to review' },
  ],
  start: {
    title: 'A good first step for a finance and admin team',
    body: 'Start with one workflow for a team of 5 to 10 people. Your team tries it on its own work, so you can judge the change before going further.',
  },
  faqTitle: 'Questions finance and admin leaders ask',
  faq: [
    { q: 'Will AI replace our finance and admin staff?', a: 'No. We build AI into the repetitive parts of the work, such as keying, matching and first drafts of reports, so your people spend more time checking, following up and advising. Your finance team reviews and approves everything that goes into the books.' },
    { q: 'What about our financial data?', a: 'We agree clear rules with you on which tools to use, what financial and supplier data can go into them, who can see what and what a person checks before anything is posted or paid. Your data stays under your control.' },
    { q: 'Does AI make the accounting calls?', a: 'No. AI prepares and organises the work, and your finance team reviews and approves it, with your accountants advising as they do today. We start from the accounting software and systems you already use, and suggest new tools only where they fit the work.' },
    { q: 'How do we start?', a: 'With a 30-minute conversation about the work that slows your team down. Send us a short message through the contact form.', links: [{ label: 'Go to the contact form', href: '/contact#form' }] },
  ],
  close: {
    title: 'Month-end without the late nights.',
    sub: 'Fewer evenings matching invoices and chasing receipts, more room for the questions that move the business. It starts with a 30-minute conversation about the work that slows your team down.',
  },
};

export default page;
