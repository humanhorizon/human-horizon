import type { SegmentPage } from '../../segmentPages';

const page: SegmentPage = {
  seoTitle: 'AI for customer service teams in Singapore | Human Horizon',
  description: 'AI workflows and agents for Singapore customer service teams. Customer enquiries, complaints and case handovers built into the team’s real work.',
  kicker: 'AI for customer service teams in Singapore',
  title: 'Customer service teams, free for the customers who need a person',
  lead: 'Customer service hours disappear into answering the same questions across WhatsApp, email and phone, writing up complaints and handing cases between colleagues. We build AI into that work with the customer service team, so staff spend their time on the customers and cases that need real care.',
  painsTitle: 'Where customer service weeks go',
  pains: [
    { title: 'The same questions', body: 'Staff type out the same answers on prices, orders and opening hours, again and again.' },
    { title: 'Too many channels', body: 'Messages come in over WhatsApp, email, phone and social media, and someone has to keep track of them all.' },
    { title: 'Complaints', body: 'Each complaint means reading back through the history and writing a careful reply from scratch.' },
    { title: 'Case notes and handovers', body: 'When a case changes hands, the next person rereads every message to work out where things stand.' },
  ],
  people: {
    title: 'Customers still get a person when it matters.',
    body: 'Customer service teams worry that AI will make the business feel robotic, or replace them. We start there. AI handles the routine answers and the write-ups, and the team stays the voice customers trust for complex cases, sensitive matters and upset customers.',
  },
  changesTitle: 'What changes for the customer service team',
  useCases: [
    { name: 'Customer enquiries', before: 'Staff answer the same questions across WhatsApp, email and phone, and complex cases wait behind simple ones.', after: 'Enquiries from every channel are sorted as they come in. Routine questions get answers drawn from the company’s own information, in its voice, and anything complex or unusual reaches the right person with the history attached. The team checks the answers and gives its time to the cases that need a person.', outcome: 'Routine questions answered, people for the cases that need them' },
    { name: 'Complaints and difficult replies', before: 'Each complaint means scrolling back through the history, checking the order and writing a careful reply from a blank page.', after: 'Each complaint arrives with the customer’s history, the order details and a summary of what went wrong, plus a first reply drafted in the company’s tone. The team lead decides what to offer, adds the human touch and sends.', outcome: 'Complaints handled with the full picture and care' },
    { name: 'Case notes and handovers', before: 'Notes live in chats and memories, so whoever picks up a case rereads everything and the customer often has to explain again.', after: 'Every conversation becomes a short case note, with what the customer asked, what was promised and what is still open. Whoever picks it up starts from the summary, and recurring issues are gathered for the team lead to fix at the source.', outcome: 'Every handover starts from the full story' },
  ],
  start: {
    title: 'A good first step for a customer service team',
    body: 'Start with one workflow for a team of 5 to 10 people. The team tries it on its own work, so leaders can judge the change before going further.',
  },
  faqTitle: 'Questions customer service leaders ask',
  faq: [
    { q: 'Will AI replace our customer service team?', a: 'No. We build AI into the repetitive parts of the work, such as routine answers, sorting messages and writing case notes, so staff spend more time on complaints, complex cases and the customers who need a person. The team decides how AI answers and when a person steps in.' },
    { q: 'What about customer data?', a: 'We agree clear rules with the business on which tools to use, what customer data can go into them and what a person checks before anything is sent. If a customer asks how the business uses AI, the team will have a clear answer.' },
    { q: 'Does Human Horizon work with the channels and tools we already use?', a: 'Yes. We start from the messaging channels, inbox and AI tools the team already has, and suggest new ones only where they fit the work.' },
    { q: 'How do we start?', a: 'With a 30-minute conversation about the work that slows the team down. Send us a short message through the contact form.', links: [{ label: 'Go to the contact form', href: '/contact#form' }] },
  ],
  close: {
    title: 'Fewer repeat questions, more real conversations',
    sub: 'Less typing the same answers and chasing lost threads, more care for the customers who need it. It starts with a 30-minute conversation about the work that slows the team down.',
  },
};

export default page;
