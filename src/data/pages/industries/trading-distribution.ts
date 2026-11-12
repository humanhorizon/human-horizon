import type { SegmentPage } from '../../segmentPages';

const page: SegmentPage = {
  seoTitle: 'AI for trading firms in Singapore | Human Horizon',
  description: 'People-first AI for Singapore trading and distribution. Order entry, quotations and invoices built into your team’s real work.',
  kicker: 'AI for trading and distribution in Singapore',
  title: 'Let your sales team sell, not retype orders.',
  lead: 'Trading hours disappear into retyping orders, building quotations, checking price lists and raising invoices and delivery documents. We build AI into that work with your team, so your people spend their time on customers, suppliers and the deals that grow the business.',
  painsTitle: 'Where trading weeks go',
  pains: [
    { title: 'Orders from everywhere', body: 'Orders come in by WhatsApp, email and phone, and someone retypes each one into the system.' },
    { title: 'Stock and price checks', body: 'Coordinators check stock levels and price lists one line at a time before they can confirm anything.' },
    { title: 'Quotations', body: 'Every enquiry means building a quote by hand from the latest price list and last month’s terms.' },
    { title: 'Invoices and delivery papers', body: 'Invoices, delivery orders and packing lists are copied from the same order into different documents.' },
  ],
  start: {
    title: 'A good first step for a trading firm',
    body: 'Start with a First Win on one of these, such as customer order entry, for a team of 5 to 10 people. Your team tries it on its own work, so you can judge the change before going further.',
  },
  people: {
    title: 'Your people know your customers. That stays.',
    body: 'Sales and operations staff worry that AI will make mistakes on orders, or make their own jobs disappear. We start there. Your team shapes how AI is used, checks everything before it is confirmed, and keeps the customer and supplier relationships that no tool can hold.',
  },
  changesTitle: 'What changes for your firm',
  useCases: [
    { name: 'Customer order entry', before: 'The sales coordinator retypes orders from WhatsApp messages and emailed purchase orders, checking stock and price lists one line at a time.', after: 'Orders arrive ready to confirm. Messages and purchase orders are read, each line is matched to your product codes, checked against stock and priced from your current lists, with anything unclear or out of stock flagged. Your coordinator handles the exceptions and confirms.', outcome: 'Orders from your chats and inboxes, ready to confirm' },
    { name: 'Quotations', before: 'Sales staff build each quote by hand, hunting for the latest price list, the customer’s usual terms and what was offered last time.', after: 'Send in the enquiry and a draft quote comes back built from your current prices and landed costs, that customer’s credit terms and their order history, laid out in your format with alternatives where items are short. Your salesperson checks the margin, adjusts for the relationship, then sends.', outcome: 'Quotes built on your prices and each customer’s history' },
    { name: 'Invoices and delivery documents', before: 'Admin staff copy the same order details into an invoice, a delivery order and a packing list, then fix the mismatches when the customer queries them.', after: 'Once an order is confirmed, the invoice, delivery order and packing list are drafted from it together, so quantities, prices and addresses line up and any mismatch is flagged. Your admin team reviews the set and issues it.', outcome: 'One confirmed order, the full document set drafted' },
  ],
  faqTitle: 'Questions trading founders ask',
  faq: [
    { q: 'Will AI replace our sales coordinators?', a: 'No. We build AI into the repetitive parts of trading work, such as retyping orders, building quotes and preparing documents, so your coordinators spend more time with customers and suppliers. Your people keep the judgement on pricing, exceptions and every order that goes out.' },
    { q: 'What about our pricing and customer data?', a: 'We agree clear rules with you on which tools to use, what pricing, supplier and customer information can go into them and what a person checks before anything is confirmed. Your price lists and margins stay under your control.' },
    { q: 'Do you work with our accounting or inventory system?', a: 'Yes. We start from the systems, spreadsheets and messaging apps your team already uses, and suggest new tools only where they fit the work.' },
    { q: 'How do we start?', a: 'With a 30-minute conversation about the work that slows your team down. Send us a short message through the contact form.', links: [{ label: 'Go to the contact form', href: '/contact#form' }] },
  ],
  close: {
    title: 'Less retyping, more selling.',
    sub: 'Fewer orders keyed in by hand and fewer documents that do not match. It starts with a 30-minute conversation about the work that slows your firm down.',
  },
};

export default page;
