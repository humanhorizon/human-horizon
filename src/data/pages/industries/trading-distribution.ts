import type { SegmentPage } from '../../segmentPages';

const page: SegmentPage = {
  seoTitle: 'AI for trading companies in Singapore | Human Horizon',
  description: 'AI workflows and agents for Singapore trading and distribution. Order entry, quotations and invoices built into the team’s real work.',
  kicker: 'AI for trading companies and distributors in Singapore',
  title: 'Let the sales team sell, not retype orders',
  lead: 'Trading hours disappear into retyping orders, building quotations, checking price lists and raising invoices and delivery documents. We build AI into that work with the team, so people spend their time on customers, suppliers and the deals that grow the business.',
  painsTitle: 'Where trading weeks go',
  pains: [
    { title: 'Orders from everywhere', body: 'Orders come in by WhatsApp, email and phone, and someone retypes each one into the system.' },
    { title: 'Stock and price checks', body: 'Coordinators check stock levels and price lists one line at a time before they can confirm anything.' },
    { title: 'Quotations', body: 'Every enquiry means building a quote by hand from the latest price list and last month’s terms.' },
    { title: 'Invoices and delivery papers', body: 'Invoices, delivery orders and packing lists are copied from the same order into different documents.' },
  ],
  start: {
    title: 'A good first step for a trading firm',
    body: 'Start with one workflow for a team of 5 to 10 people. The team tries it on its own work, so the business can judge the change before going further.',
  },
  people: {
    title: 'Sales staff know their customers. That stays.',
    body: 'Sales and operations staff worry that AI will make mistakes on orders, or make their own jobs disappear. We start there. The team shapes how AI is used, checks everything before it is confirmed, and keeps the customer and supplier relationships that no tool can hold.',
  },
  changesTitle: 'What changes for the firm',
  useCases: [
    { name: 'Customer order entry', before: 'The sales coordinator retypes orders from WhatsApp messages and emailed purchase orders, checking stock and price lists one line at a time.', after: 'Orders arrive ready to confirm. Messages and purchase orders are read, each line is matched to the firm’s product codes, checked against stock and priced from current lists, with anything unclear or out of stock flagged. The coordinator handles the exceptions and confirms.', outcome: 'Orders from chats and inboxes, ready to confirm' },
    { name: 'Quotations', before: 'Sales staff build each quote by hand, hunting for the latest price list, the customer’s usual terms and what was offered last time.', after: 'Send in the enquiry and a draft quote comes back built from current prices and landed costs, that customer’s credit terms and their order history, laid out in the firm’s format with alternatives where items are short. The salesperson checks the margin, adjusts for the relationship, then sends.', outcome: 'Quotes built on the firm’s prices and each customer’s history' },
    { name: 'Invoices and delivery documents', before: 'Admin staff copy the same order details into an invoice, a delivery order and a packing list, then fix the mismatches when the customer queries them.', after: 'Once an order is confirmed, the invoice, delivery order and packing list are drafted from it together, so quantities, prices and addresses line up and any mismatch is flagged. The admin team reviews the set and issues it.', outcome: 'One confirmed order, the full document set drafted' },
  ],
  faqTitle: 'Questions trading founders ask',
  faq: [
    { q: 'Will AI replace our sales coordinators?', a: 'No. We build AI into the repetitive parts of trading work, such as retyping orders, building quotes and preparing documents, so coordinators spend more time with customers and suppliers. Staff keep the judgement on pricing, exceptions and every order that goes out.' },
    { q: 'What about our pricing and customer data?', a: 'We agree clear rules with the firm on which tools to use, what pricing, supplier and customer information can go into them and what a person checks before anything is confirmed. Price lists and margins stay under the firm’s control.' },
    { q: 'Does Human Horizon work with our accounting or inventory system?', a: 'Yes. We start from the systems, spreadsheets and messaging apps the team already uses, and suggest new tools only where they fit the work.' },
    { q: 'How do we start?', a: 'With a 30-minute conversation about the work that slows the team down. Send us a short message through the contact form.', links: [{ label: 'Go to the contact form', href: '/contact#form' }] },
  ],
  close: {
    title: 'Less retyping, more selling',
    sub: 'Fewer orders keyed in by hand and fewer documents that do not match. It starts with a 30-minute conversation about the work that slows the firm down.',
  },
};

export default page;
