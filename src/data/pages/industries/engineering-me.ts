import type { SegmentPage } from '../../segmentPages';

const page: SegmentPage = {
  seoTitle: 'AI for M&E contractors in Singapore | Human Horizon',
  description: 'People-first AI for Singapore engineering and M&E contractors. Progress claims, tenders and site reports built into your team’s real work.',
  kicker: 'AI for engineering and M&E contractors in Singapore',
  title: 'Your people back on the build, not the paperwork.',
  lead: 'Project hours disappear into progress claims, variation records, tender submissions and daily site reports. We build AI into that work with your team, so your people spend their time on site, solving problems and delivering the job.',
  painsTitle: 'Where contractor weeks go',
  pains: [
    { title: 'Monthly progress claims', body: 'QS and project staff lose the end of every month piecing together site photos, delivery orders and instructions.' },
    { title: 'Variations after the fact', body: 'Site instructions from the main contractor or consultant come verbally or in chat, and the paper trail is rebuilt only when a variation order is disputed.' },
    { title: 'Tender submissions', body: 'Every tender means digging out past method statements, schedules and project references from old folders.' },
    { title: 'Daily site reports', body: 'Supervisors type up manpower, progress and safety notes at the end of a long day on site.' },
  ],
  start: {
    title: 'A good first step for an engineering or M&E contractor',
    body: 'Start with a First Win on one of the workflows on this page, such as progress claims and variations, for a team of 5 to 10 people. Your team tries it on its own work, so you can judge the change before going further.',
  },
  people: {
    title: 'Your engineers’ judgement stays theirs.',
    body: 'Engineers and site teams worry that AI will get the technical details wrong, or that it is a step towards fewer jobs. We start there. Your team shapes how AI is used, keeps every technical and commercial call, and hands the record keeping and paperwork to the tools.',
  },
  changesTitle: 'What changes for your firm',
  useCases: [
    { name: 'Progress claims and variations', before: 'QS and project staff piece together site photos, delivery orders and instructions every month to build claims and argue variations after the fact.', after: 'Claims come together as the work happens. Site photos, delivery orders and instructions are captured and matched to the contract items, so the claim arrives drafted with its evidence attached, and each variation is logged against the site instruction that started it, ready for the variation order. Your QS checks the figures, adds their commercial judgement, then submits.', outcome: 'Claims backed by evidence, variations on record' },
    { name: 'Tenders and method statements', before: 'Every tender means hunting through old submissions for method statements, schedules and project references, so some are rushed or skipped.', after: 'Drop in the tender documents and a first submission comes back built from your strongest past work: relevant project references, method statements adapted to the scope and the compliance checklist set out. Your estimators and engineers sharpen the approach and set the price.', outcome: 'Tenders that lead with your best projects' },
    { name: 'Daily site reports', before: 'Supervisors type up the day after leaving site, and project managers chase updates across chat groups before every client meeting.', after: 'Site reports arrive ready to review. Voice notes, photos and chat updates from the day become a structured report, with manpower, progress against programme, delays and safety observations set out, and issues flagged for the project manager. The supervisor checks it, adds what only they saw on site, then sends.', outcome: 'From site updates to a clear report, automatically' },
  ],
  faqTitle: 'Questions contractor founders ask',
  faq: [
    { q: 'Will AI replace our QS and engineers?', a: 'No. We build AI into the paperwork around the job, such as claims, records and reports, so your QS, engineers and supervisors spend more time on site and on the decisions that need their experience. Your team keeps the judgement and the sign-off on everything that goes out.' },
    { q: 'What about drawings, contracts and client information?', a: 'We agree clear rules with you on which tools to use, what drawings, contract documents and client information can go into them and what a person checks before anything is submitted. If a main contractor or client asks how you use AI, you will have a clear answer.' },
    { q: 'Does AI change who is responsible for technical work?', a: 'No. Professional and safety responsibilities stay with the people on your team who hold them today. AI helps prepare the paperwork, and the qualified person reviews and signs off, as they do now.' },
    { q: 'How do we start?', a: 'With a 30-minute conversation about the work that slows your team down. Send us a short message through the contact form.', links: [{ label: 'Go to the contact form', href: '/contact#form' }] },
  ],
  close: {
    title: 'Back on site, with the paperwork in hand.',
    sub: 'Less chasing photos and delivery orders for claims, fewer evenings typing up reports, more time on the job. It starts with a 30-minute conversation about the work that slows your firm down.',
  },
};

export default page;
