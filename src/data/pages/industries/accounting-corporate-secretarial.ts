import type { SegmentPage } from '../../segmentPages';

const page: SegmentPage = {
  seoTitle: 'AI for accounting firms in Singapore | Human Horizon',
  description: 'People-first AI for Singapore accounting and corporate secretarial firms. Bookkeeping, client letters and filings built into your team’s real work.',
  kicker: 'AI for accounting and corporate secretarial in Singapore',
  title: 'Give your accountants room to advise again.',
  lead: 'Firm hours disappear into chasing client documents, keying receipts, reconciling bank lines, writing client letters and preparing filings. We build AI into that work with your team, so your people spend their time on review, advice and clients.',
  painsTitle: 'Where firm weeks go',
  pains: [
    { title: 'Chasing documents', body: 'Staff send reminder after reminder to clients for receipts, statements and missing paperwork.' },
    { title: 'Keying and reconciling', body: 'The first weeks of each month go on entering receipts and matching bank lines by hand.' },
    { title: 'Client letters', body: 'Engagement letters, reminders and query emails are rewritten for each client from old templates.' },
    { title: 'Secretarial paperwork', body: 'Resolutions, AGM papers and ACRA filings are prepared from scratch for every company on the books, with deadlines tracked by hand.' },
  ],
  start: {
    title: 'A good first step for an accounting firm',
    body: 'Start with a First Win on one of these, such as monthly client bookkeeping, for a team of 5 to 10 people. Your team tries it on its own work, so you can judge the change before going further.',
  },
  people: {
    title: 'Your professional judgement stays yours.',
    body: 'Accountants and secretarial staff worry that AI will make errors they are accountable for, or make their roles redundant. We start there. Your team shapes how AI is used, reviews everything before it reaches a client or a filing, and keeps the judgement and sign-off that clients trust.',
  },
  changesTitle: 'What changes for your firm',
  useCases: [
    { name: 'Monthly client bookkeeping', before: 'Staff chase clients for missing documents, then spend the first weeks of each month keying receipts and reconciling bank lines by hand.', after: 'Client records arrive sorted. Receipts and invoices are read and coded, bank lines are matched, and what is missing is listed with a reminder drafted to the client. Your accountants review the queries and the judgement calls, then close the books.', outcome: 'Books that arrive coded and matched, ready for review' },
    { name: 'Client letters and queries', before: 'Staff rewrite engagement letters, document requests and query emails for each client, digging through old files for the right wording.', after: 'Letters and emails come back drafted in your firm’s voice, with the client’s details, your standard terms and the specific items needed already filled in. Your manager checks the tone and the facts, then sends.', outcome: 'Client letters drafted in your voice, ready to sign' },
    { name: 'Corporate secretarial documents', before: 'Secretarial staff prepare resolutions, minutes and filing documents by hand for each company, copying details from registers and past files.', after: 'Draft resolutions, minutes and filing documents are prepared from each company’s own records, with directors, shareholders and key dates filled in, upcoming AGM and annual return dates listed, and anything inconsistent flagged. Your secretarial team checks every document and files it.', outcome: 'Secretarial paperwork drafted from each company’s records' },
  ],
  faqTitle: 'Questions accounting firm founders ask',
  faq: [
    { q: 'Will AI replace our accountants?', a: 'No. We build AI into the repetitive parts of firm work, such as data entry, reconciliations and first drafts, so your people spend more time on review, advice and client relationships. Your team keeps the judgement and the sign-off on everything.' },
    { q: 'What about our clients’ financial data?', a: 'We agree clear rules with you on which tools to use, what client financial information can go into them and what a person checks before anything is sent or filed. If a client asks how you use AI, you will have a clear answer.' },
    { q: 'Who stays responsible for the accounts and filings?', a: 'Your qualified staff do. They stay responsible for every set of accounts and every filing, and review the work as they do today. We start from the accounting software and tools your team already uses. We do not give regulatory advice, so questions on professional standards stay with your firm and its advisers.' },
    { q: 'How do we start?', a: 'With a 30-minute conversation about the work that takes up your team’s week. Drop us an email at contact.humanhorizon@gmail.com.', links: [{ label: 'Email us', href: 'mailto:contact.humanhorizon@gmail.com' }] },
  ],
  close: {
    title: 'Less keying, more time to think.',
    sub: 'Fewer reminders, fewer late nights on reconciliations and fewer letters from scratch. It starts with a 30-minute conversation about the work that slows your firm down.',
  },
};

export default page;
