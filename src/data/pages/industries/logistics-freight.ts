import type { SegmentPage } from '../../segmentPages';

const page: SegmentPage = {
  seoTitle: 'AI for freight forwarders in Singapore | Human Horizon',
  description: 'People-first AI for Singapore logistics and freight forwarding. Quotations, shipping documents and status updates built into your team’s real work.',
  kicker: 'AI for logistics and freight forwarding in Singapore',
  title: 'Your ops team, back on the shipments that need them.',
  lead: 'Forwarding hours disappear into freight quotations, shipping and customs documents, invoices and status updates. We build AI into that work with your team, so your people spend their time on customers, carriers and the shipments that need real attention.',
  painsTitle: 'Where forwarding weeks go',
  pains: [
    { title: 'Rate hunting', body: 'Pricing staff dig through rate sheets and carrier emails for every quote request that comes in.' },
    { title: 'Shipping documents', body: 'The same shipment details get retyped into bookings, bills of lading, commercial invoices, packing lists and customs permits.' },
    { title: 'Where is my shipment?', body: 'Customer service checks carrier sites one by one to answer customers asking about their cargo.' },
    { title: 'Billing', body: 'Invoices are pieced together from the job file, and surcharges sometimes slip through unbilled.' },
  ],
  start: {
    title: 'A good first step for a forwarder',
    body: 'Start with one workflow for a team of 5 to 10 people. Your team tries it on its own work, so you can judge the change before going further.',
  },
  people: {
    title: 'Your team’s know-how stays at the centre.',
    body: 'Forwarding staff worry that AI will get a rate or a document wrong, or that it will take their jobs. We start there. Your team shapes how AI is used, checks every quote and document before it goes out, and keeps the carrier and customer relationships built over years.',
  },
  changesTitle: 'What changes for your firm',
  useCases: [
    { name: 'Freight quotations', before: 'Pricing staff work through rate sheets and carrier emails for every request, so quotes go out a day or more later and sometimes miss a surcharge.', after: 'Quote requests come back as drafts built from your current rates, with the route options, transit times and applicable surcharges laid out in your format. Anything outside your usual lanes is flagged. Your pricing lead checks the margin, adds the judgement on the customer, then sends.', outcome: 'Quotes built on your current rates and surcharges' },
    { name: 'Shipping and customs documents', before: 'Operations staff retype the same consignee, cargo and routing details into each booking, bill of lading, packing list and declaration, then chase the mistakes.', after: 'Shipment details are captured once from the customer’s booking and documents, then the bill of lading, packing list and permit draft are prepared from them, with gaps and mismatches flagged. Your operations team checks the set and files it.', outcome: 'Shipment details entered once, documents ready to check' },
    { name: 'Shipment status updates', before: 'Customer service checks carrier and port sites shipment by shipment, then writes the same update for each customer who asks.', after: 'Clear updates are drafted from your shipment records and carrier notices, with delays and exceptions highlighted for your team first. Your coordinator checks what goes out and handles the shipments that need a call and the conversations that keep customers loyal.', outcome: 'Customers kept informed, your team on the exceptions' },
  ],
  faqTitle: 'Questions forwarding founders ask',
  faq: [
    { q: 'Will AI replace our operations and pricing staff?', a: 'No. We build AI into the repetitive parts of forwarding, such as rate lookups, document preparation and status updates, so your people spend more time on customers, carriers and problem shipments. Your team keeps the judgement on every quote and filing.' },
    { q: 'What about our rates and customer data?', a: 'We agree clear rules with you on which tools to use, what rates, customer and shipment information can go into them and what a person checks before anything is sent or filed. Your rates and margins stay under your control.' },
    { q: 'Do you work with our freight system and customs filing?', a: 'We start from the freight software, spreadsheets and AI tools your team already uses, and suggest new ones only where they fit the work. Customs filings stay with your team, who check and submit them as they do today.' },
    { q: 'How do we start?', a: 'With a 30-minute conversation about the work that slows your team down. Send us a short message through the contact form.', links: [{ label: 'Go to the contact form', href: '/contact#form' }] },
  ],
  close: {
    title: 'Less paperwork between your team and the cargo.',
    sub: 'Fewer rate sheets, fewer retyped documents and fewer status calls. It starts with a 30-minute conversation about the work that slows your firm down.',
  },
};

export default page;
