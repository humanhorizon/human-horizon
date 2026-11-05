import type { SegmentPage } from '../../segmentPages';

const page: SegmentPage = {
  seoTitle: 'AI for law firms in Singapore | Human Horizon',
  description: 'People-first AI for Singapore law firms. File review, routine letters and client updates built into your team’s real work.',
  kicker: 'AI for law firms in Singapore',
  title: 'Less time in the bundle, more time with the client.',
  lead: 'Lawyer and paralegal hours disappear into reading bundles, drafting routine letters, building checklists and writing client updates. We build AI into that work with your team, so your people spend their time on legal thinking, advice and clients.',
  painsTitle: 'Where law firm weeks go',
  pains: [
    { title: 'Reading the file', body: 'Lawyers and paralegals read through long bundles to find the facts and dates before any real work starts.' },
    { title: 'Routine letters', body: 'Standard letters and notices are drafted from scratch or patched together from old matters.' },
    { title: 'Checklists and forms', body: 'Each new matter means the same client due diligence, conflict check, checklists and forms, all done by hand.' },
    { title: 'Client updates', body: 'Progress updates and meeting notes are written up after hours, once the billable work is done.' },
  ],
  start: {
    title: 'A good first step for a law firm',
    body: 'Start with a First Win on one of these, such as your routine letters and file review, for a team of 5 to 10 people. Your team tries it on its own work, so you can judge the change before going further.',
  },
  people: {
    title: 'The judgement stays with your lawyers.',
    body: 'Lawyers worry that AI will get things wrong in their name or erode the professional judgement clients rely on. We start there. AI does not give advice and does not decide anything. It prepares first drafts and summaries, and your lawyers review, correct and sign off everything before it leaves the firm.',
  },
  changesTitle: 'What changes for your firm',
  useCases: [
    { name: 'Routine letters and file review', before: 'Lawyers and paralegals read through bundles and draft routine letters and checklists from scratch for every matter.', after: 'Lawyers open a matter to a summarised file, with the parties, key dates, documents and open questions set out and linked back to the source, alongside a first draft of the routine letter in the firm’s style. The lawyer checks it against the file, applies their professional judgement and signs off.', outcome: 'Lawyers start from the facts, not the first page' },
    { name: 'Matter checklists and forms', before: 'Each new matter means rebuilding the same checklists, chasing the same client details and filling the same forms by hand.', after: 'New matters arrive with a checklist drawn from your firm’s own precedents and the forms pre-filled from the details already on file, with missing information flagged for follow-up. Your lawyer or paralegal reviews every entry and decides what the matter needs.', outcome: 'Every matter set up the way your firm works' },
    { name: 'Client updates and attendance notes', before: 'Notes from client meetings and calls sit in notebooks and inboxes until someone writes them up after hours.', after: 'Meeting notes become a structured attendance note and a draft client update in plain language, with next steps and outstanding items set out. Your lawyer corrects and completes it, adds the advice only they can give, then sends.', outcome: 'Clients kept informed, with your lawyers’ words on every update' },
  ],
  faqTitle: 'Questions law firm partners ask',
  faq: [
    { q: 'Will AI replace our lawyers?', a: 'No. AI does not give legal advice or replace a lawyer’s professional judgement. We build it into the repetitive parts of practice, such as file summaries, routine drafts and client updates, so your lawyers spend more time on advice and clients. A lawyer reviews and signs off everything that goes out.' },
    { q: 'What about client confidentiality and privilege?', a: 'We agree clear rules with you on which tools to use, what client and matter information can go into them, and what a lawyer checks before anything is sent. Your firm decides what is appropriate for each matter, and if a client asks how you use AI, you will have a clear answer.' },
    { q: 'How does this fit our professional duties?', a: 'Your lawyers remain responsible for the work, as they are today. We design the work so that a lawyer reviews and signs off every output, and we follow your firm’s own policies. We do not give legal or regulatory advice, so your firm decides what fits its obligations.' },
    { q: 'How do we start?', a: 'With a 30-minute conversation about the work that takes up your team’s week. Drop us an email at contact.humanhorizon@gmail.com.', links: [{ label: 'Email us', href: 'mailto:contact.humanhorizon@gmail.com' }] },
  ],
  close: {
    title: 'Back to the legal work you trained for.',
    sub: 'Fewer hours reading bundles and drafting the same letters, more time thinking and advising. It starts with a 30-minute conversation about the work that slows your firm down.',
  },
};

export default page;
