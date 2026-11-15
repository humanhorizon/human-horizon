import type { SegmentPage } from '../../segmentPages';

const page: SegmentPage = {
  seoTitle: 'AI for cleaning firms in Singapore | Human Horizon',
  description: 'People-first AI for Singapore cleaning and facilities firms. Rosters, job scheduling and quotes built into your team’s real work.',
  kicker: 'AI for cleaning and facilities in Singapore',
  title: 'Supervisors running sites, not chasing cover.',
  lead: 'Supervisor and office hours disappear into rosters, filling last-minute gaps, scheduling jobs, attendance records and quotes. We build AI into that work with your team, so your people spend their time on their crews, their sites and their clients.',
  painsTitle: 'Where facilities firm weeks go',
  pains: [
    { title: 'Rosters and gaps', body: 'Supervisors start the day phoning around to cover cleaners who are on MC or have not turned up.' },
    { title: 'Attendance records', body: 'Attendance is pieced together from chat messages and photos for payroll and the monthly report to the managing agent.' },
    { title: 'Job scheduling', body: 'Ad hoc jobs and site requests are slotted in by hand around the regular rounds.' },
    { title: 'Quotes and tenders', body: 'Every new site or tender means working out headcount, hours and pricing from old files.' },
  ],
  start: {
    title: 'A good first step for a cleaning and facilities firm',
    body: 'Start with one workflow for a team of 5 to 10 people. Your team tries it on its own work, so you can judge the change before going further.',
  },
  people: {
    title: 'Your supervisors stay in charge of their sites.',
    body: 'Supervisors and crews worry that AI means being watched more closely or replaced by a system. We start there. Your team shapes how AI is used, keeps the relationships with crews and clients, and hands the phoning around and paperwork to the tools. AI here is for the paperwork, not for watching people.',
  },
  changesTitle: 'What changes for your firm',
  useCases: [
    { name: 'Rosters and site attendance', before: 'Supervisors spend early mornings phoning around to fill gaps, then piece together attendance from chat messages for payroll and client reports.', after: 'Gaps in the roster are spotted, with suitable cover suggested from staff who know the site and are free, and messages ready to send. Attendance comes together in one place from your team’s check-ins, ready for payroll and client reports. Your supervisor confirms the cover and signs off the records.', outcome: 'Cover sorted with fewer calls, attendance in one place' },
    { name: 'Job scheduling and site requests', before: 'Ad hoc jobs, complaints and extra requests arrive by phone and chat, and the office reshuffles schedules by hand around the regular rounds.', after: 'Each request becomes a clear job with the site, the task and the urgency set out, and a slot is suggested around your existing rounds and your crews’ locations. Clients get a confirmation in your firm’s voice. Your operations lead approves the plan and handles anything unusual.', outcome: 'Requests out of the chats and into the schedule' },
    { name: 'Quotes and tenders', before: 'Each new site or tender means estimating headcount, hours and consumables from old quotes and spreadsheets, often over the weekend.', after: 'Site details and the client’s scope turn into a draft quote built from your own rates and similar sites you already run, with headcount, hours and consumables laid out and assumptions marked. Your manager checks the numbers, adds their judgement on the site, then sends.', outcome: 'Quotes built on how you really run your sites' },
  ],
  faqTitle: 'Questions facilities founders ask',
  faq: [
    { q: 'Will AI replace our supervisors?', a: 'No. We build AI into the repetitive parts of the work, such as rosters, attendance records, scheduling and quotes, so your supervisors spend more time with their crews and clients. Your team keeps the judgement on every decision about people and sites.' },
    { q: 'What about staff and client site data?', a: 'We agree clear rules with you on which tools to use, what staff details, attendance records and client site information can go into them, and what a person checks before anything is sent or paid.' },
    { q: 'Our crews use chat apps, not software. Does that work?', a: 'Yes. We start from the way your crews and supervisors already work, including the chat apps, spreadsheets and systems you have, and suggest new tools only where they fit the work.' },
    { q: 'How do we start?', a: 'With a 30-minute conversation about the work that slows your team down. Send us a short message through the contact form.', links: [{ label: 'Go to the contact form', href: '/contact#form' }] },
  ],
  close: {
    title: 'Start the day with sites covered, not phones ringing.',
    sub: 'Fewer early-morning calls to fill gaps, less chasing attendance, more time on crews and clients. It starts with a 30-minute conversation about the work that slows your firm down.',
  },
};

export default page;
