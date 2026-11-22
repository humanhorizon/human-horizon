import type { SegmentPage } from '../../segmentPages';

const page: SegmentPage = {
  seoTitle: 'AI for freight forwarders in Singapore | Human Horizon',
  description: 'AI workflows and agents for Singapore logistics and freight forwarding. Quotations, shipping documents and status updates built into the team’s real work.',
  kicker: 'AI for logistics and freight forwarding in Singapore',
  title: 'The ops team, back on the shipments that need them',
  lead: 'Forwarding hours disappear into freight quotations, shipping and customs documents, invoices and status updates. We build AI into that work with the team, so people spend their time on customers, carriers and the shipments that need real attention.',
  painsTitle: 'Where forwarding weeks go',
  pains: [
    { title: 'Rate hunting', body: 'Pricing staff dig through rate sheets and carrier emails for every quote request that comes in.' },
    { title: 'Shipping documents', body: 'The same shipment details get retyped into bookings, bills of lading, commercial invoices, packing lists and customs permits.' },
    { title: 'Where is my shipment?', body: 'Customer service checks carrier sites one by one to answer customers asking about their cargo.' },
    { title: 'Billing', body: 'Invoices are pieced together from the job file, and surcharges sometimes slip through unbilled.' },
  ],
  start: {
    title: 'A good first step for a forwarder',
    body: 'Start with one workflow for a team of 5 to 10 people. The team tries it on its own work, so the business can judge the change before going further.',
  },
  people: {
    title: 'The team’s know-how stays at the centre.',
    body: 'Forwarding staff worry that AI will get a rate or a document wrong, or that it will take their jobs. We start there. The team shapes how AI is used, checks every quote and document before it goes out, and keeps the carrier and customer relationships built over years.',
  },
  changesTitle: 'What changes for the firm',
  useCases: [
    { name: 'Freight quotations', before: 'Pricing staff work through rate sheets and carrier emails for every request, so quotes go out a day or more later and sometimes miss a surcharge.', after: 'Quote requests come back as drafts built from the firm’s current rates, with the route options, transit times and applicable surcharges laid out in the firm’s format. Anything outside the usual lanes is flagged. The pricing lead checks the margin, adds the judgement on the customer, then sends.', outcome: 'Quotes built on current rates and surcharges' },
    { name: 'Shipping and customs documents', before: 'Operations staff retype the same consignee, cargo and routing details into each booking, bill of lading, packing list and declaration, then chase the mistakes.', after: 'Shipment details are captured once from the customer’s booking and documents, then the bill of lading, packing list and permit draft are prepared from them, with gaps and mismatches flagged. The operations team checks the set and files it.', outcome: 'Shipment details entered once, documents ready to check' },
    { name: 'Shipment status updates', before: 'Customer service checks carrier and port sites shipment by shipment, then writes the same update for each customer who asks.', after: 'Clear updates are drafted from the firm’s shipment records and carrier notices, with delays and exceptions highlighted for the team first. The coordinator checks what goes out and handles the shipments that need a call and the conversations that keep customers loyal.', outcome: 'Customers kept informed, the team on the exceptions' },
  ],
  faqTitle: 'Questions forwarding founders ask',
  faq: [
    { q: 'Will AI replace our operations and pricing staff?', a: 'No. We build AI into the repetitive parts of forwarding, such as rate lookups, document preparation and status updates, so people spend more time on customers, carriers and problem shipments. The team keeps the judgement on every quote and filing.' },
    { q: 'What about our rates and customer data?', a: 'We agree clear rules with the firm on which tools to use, what rates, customer and shipment information can go into them and what a person checks before anything is sent or filed. Rates and margins stay under the firm’s control.' },
    { q: 'Does Human Horizon work with our freight system and customs filing?', a: 'We start from the freight software, spreadsheets and AI tools the team already uses, and suggest new ones only where they fit the work. Customs filings stay with the team, who check and submit them as they do today.' },
    { q: 'How do we start?', a: 'With a 30-minute conversation about the work that slows the team down. Send us a short message through the contact form.', links: [{ label: 'Go to the contact form', href: '/contact#form' }] },
  ],
  close: {
    title: 'Less paperwork between the team and the cargo',
    sub: 'Fewer rate sheets, fewer retyped documents and fewer status calls. It starts with a 30-minute conversation about the work that slows the firm down.',
  },
};

export default page;
