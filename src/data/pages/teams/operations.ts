import type { SegmentPage } from '../../segmentPages';

const page: SegmentPage = {
  seoTitle: 'AI for operations teams in Singapore | Human Horizon',
  description: 'People-first AI for Singapore operations teams. Job status updates, scheduling and site reports built into your team’s real work.',
  kicker: 'AI for operations teams in Singapore',
  title: 'Fewer fires for the team that puts them out.',
  lead: 'Operations weeks disappear into chasing job updates, reworking schedules, writing reports and answering where-is-it questions. We build AI into that work with your team, so your people spend their time solving problems and looking after customers.',
  painsTitle: 'Where operations weeks go',
  pains: [
    { title: 'Chasing updates', body: 'Coordinators spend the day asking for status across group chats and calls, then retyping the answers.' },
    { title: 'Scheduling by hand', body: 'Schedules for people, vehicles and jobs are rebuilt in a spreadsheet whenever something changes.' },
    { title: 'Meeting reports', body: 'Someone pieces together the weekly meeting report from messages, photos and memory.' },
    { title: 'Where-is-it questions', body: 'Customers and colleagues ask where their job stands, and each answer means another round of checking.' },
  ],
  start: {
    title: 'A good first step for an operations team',
    body: 'Start with one workflow for a team of 5 to 10 people. Your team tries it on its own work, so you can judge the change before going further.',
  },
  people: {
    title: 'Your team’s know-how stays at the centre.',
    body: 'Operations staff worry that AI will add another system to feed, or make calls it does not understand. We start there. Your team shapes how AI is used, keeps the decisions that need experience on the ground, and hands the chasing and retyping to the tools.',
  },
  changesTitle: 'What changes for your team',
  useCases: [
    { name: 'Job status updates', before: 'Coordinators chase updates across group chats and calls, then retype them for clients and the weekly meeting.', after: 'One clear picture of where your jobs stand, built from the updates your team already sends, with what is done, what is stuck and what needs a decision called out. Client updates and the meeting summary come drafted from it. Your team lead acts on the issues, checks the updates, then sends.', outcome: 'Know where your jobs stand, without the chasing' },
    { name: 'Scheduling and job allocation', before: 'When a job moves or someone is off sick, the coordinator reworks the schedule by hand and calls round to let everyone know.', after: 'A revised schedule comes back when plans change, matching jobs to the people, skills and vehicles available, with the clashes flagged and the messages to the team drafted. The coordinator checks it, makes the calls only they can make, then confirms.', outcome: 'Schedules that keep up with the day' },
    { name: 'Site and handover reports', before: 'Site notes, photos and voice messages pile up in chats, and turning them into a proper report or handover note falls to whoever has a spare evening.', after: 'Notes, photos and messages from the ground become a structured report, with what happened, what was done and the follow-ups for each person laid out in your format. Your team lead checks it, adds the judgement, then files or sends it.', outcome: 'Site notes become reports your lead only has to check' },
  ],
  faqTitle: 'Questions operations leaders ask',
  faq: [
    { q: 'Will AI replace our operations staff?', a: 'No. Operations runs on people who know the work, the customers and the exceptions. We build AI into the chasing, retyping and reporting, so your team spends more time solving problems. Your people keep the decisions.' },
    { q: 'What about customer and staff data?', a: 'We agree clear rules with you on which tools to use, what customer, job and staff details can go into them, and what a person checks before anything is sent. Your team will know what is safe to share and what is not.' },
    { q: 'Do you work with the systems and chats we already use?', a: 'Yes. We start from the systems, spreadsheets and group chats your team already runs on, and suggest new ones only where they fit the work. Your team does not have to change how it works overnight.' },
    { q: 'How do we start?', a: 'With a 30-minute conversation about the work that slows your team down. Send us a short message through the contact form.', links: [{ label: 'Go to the contact form', href: '/contact#form' }] },
  ],
  close: {
    title: 'Fewer fires, more time to plan ahead.',
    sub: 'Less chasing across chats, fewer schedules rebuilt by hand. It starts with a 30-minute conversation about the work that slows your team down.',
  },
};

export default page;
