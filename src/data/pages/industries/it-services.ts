import type { SegmentPage } from '../../segmentPages';

const page: SegmentPage = {
  seoTitle: 'AI for IT services and MSPs in Singapore | Human Horizon',
  description: 'People-first AI for Singapore IT services firms and MSPs. Ticket triage, client reviews and documentation built into your team’s real work.',
  kicker: 'AI for IT services and MSPs in Singapore',
  title: 'Your engineers solving problems, not sorting the queue.',
  lead: 'Engineer hours disappear into sorting tickets, chasing users for details, preparing client reviews and keeping documentation up to date. We build AI into that work with your team, so your people spend their time on projects, problem solving and clients.',
  painsTitle: 'Where IT services weeks go',
  pains: [
    { title: 'Ticket interruptions', body: 'Senior engineers break off from project work to sort a stream of emails and calls while the SLA clock runs.' },
    { title: 'Chasing missing details', body: 'Engineers go back and forth with users for the device, the error and what they already tried before anyone can act.' },
    { title: 'Client service reviews', body: 'Account managers lose the start of every month exporting ticket, backup and patching data into slides.' },
    { title: 'Documentation that lags', body: 'Fixes live in engineers’ heads and chat threads, so when someone is on leave or moves on, the know-how goes with them.' },
  ],
  start: {
    title: 'A good first step for an IT services firm',
    body: 'Start with a First Win on one of the workflows on this page, such as helpdesk ticket triage, for a team of 5 to 10 people. Your team tries it on its own work, so you can judge the change before going further.',
  },
  people: {
    title: 'Your engineers’ expertise stays theirs.',
    body: 'Technical people worry that AI will make careless mistakes on client systems, or that it is being brought in to replace the helpdesk. We start there. Your team shapes how AI is used, keeps every decision on client systems, and hands the sorting, chasing and write-ups to the tools.',
  },
  changesTitle: 'What changes for your firm',
  useCases: [
    { name: 'Helpdesk ticket triage', before: 'Senior engineers break off from project work to sort a stream of emails and calls, chasing users for missing details before anyone can act.', after: 'Tickets arrive sorted and ready to work. Each email and call becomes a ticket with the user, the device, the error and the steps already tried, missing details are asked for, and it is routed to the right engineer with similar past fixes attached. Urgent issues are flagged for your lead to confirm.', outcome: 'Tickets ready to work, engineers back on projects' },
    { name: 'Client service reviews', before: 'Account managers spend the start of every month exporting ticket, backup and patching data into slides for each client review.', after: 'Client reviews arrive ready to check. Ticket trends, patch and backup status and open risks come in from your systems, the charts are built and the summary is written, with recurring issues and recommended next steps called out. Your account manager checks it, adds the advice only they can give, then sends.', outcome: 'Client reviews that show the value of your service' },
    { name: 'Documentation and runbooks', before: 'Fixes live in engineers’ heads and chat threads, so the same problems are solved from scratch and new hires take a long time to get up to speed.', after: 'Closed tickets and engineers’ notes become draft knowledge base articles and client runbooks, with the symptoms, the fix and the steps set out in your format. Engineers check the technical detail and approve, so the next person to see that issue starts from a checked fix.', outcome: 'From fixed ticket to shared knowledge, automatically' },
  ],
  faqTitle: 'Questions IT services founders ask',
  faq: [
    { q: 'Will AI replace our helpdesk engineers?', a: 'No. We build AI into the repetitive parts of service work, such as sorting tickets, gathering details and writing reports, so your engineers spend more time on projects and the problems that need their skill. Your team keeps the judgement on every change and every reply.' },
    { q: 'What about client data and access to client systems?', a: 'We agree clear rules with you on which tools to use, what client data and system information can go into them and what a person checks before anything is sent or changed. Access to client environments stays with your engineers, and if a client asks how you use AI, you will have a clear answer.' },
    { q: 'Do you work with our ticketing and monitoring tools?', a: 'We start from the ticketing, monitoring and documentation tools your team already uses, and suggest new ones only where they fit the work. Your service commitments to clients stay with your team, as they are today.' },
    { q: 'How do we start?', a: 'With a 30-minute conversation about the work that slows your team down. Send us a short message through the contact form.', links: [{ label: 'Go to the contact form', href: '/contact#form' }] },
  ],
  close: {
    title: 'Fewer interruptions, more time to fix things properly.',
    sub: 'Less sorting and chasing, fewer evenings writing reports and notes, more room for the projects and clients that grow your business. It starts with a 30-minute conversation about the work that slows your firm down.',
  },
};

export default page;
