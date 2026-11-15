import type { SegmentPage } from '../../segmentPages';

const page: SegmentPage = {
  seoTitle: 'AI for interior design firms in Singapore | Human Horizon',
  description: 'People-first AI for Singapore interior design and renovation firms. Quotations, specifications and client updates built into your team’s real work.',
  kicker: 'AI for interior design and renovation in Singapore',
  title: 'Let your designers get back to designing.',
  lead: 'Design hours disappear into itemised quotations, revised quotes after every client change, specifications and client letters. We build AI into that work with your team, so your people spend their time on design, site and clients.',
  painsTitle: 'Where design firm weeks go',
  pains: [
    { title: 'Itemised quotations', body: 'Designers rebuild long quotes line by line after every site visit, often late at night.' },
    { title: 'Client changes', body: 'Each change of mind means reworking the quote, the drawings list and the schedule by hand.' },
    { title: 'Specifications and schedules', body: 'Materials, finishes and fittings get copied from supplier sheets into specifications for every project.' },
    { title: 'Client letters and updates', body: 'Homeowner updates, variation orders and defect lists are written up from scratch between site visits.' },
  ],
  start: {
    title: 'A good first step for an interior design firm',
    body: 'Start with one workflow for a team of 5 to 10 people. Your team tries it on its own work, so you can judge the change before going further.',
  },
  people: {
    title: 'Your designers’ eye stays theirs.',
    body: 'Designers worry that AI will make every space look the same or replace the taste clients hire them for. We start there. Your team shapes how AI is used, keeps the design and the client relationship, and hands the line items and paperwork to the tools.',
  },
  changesTitle: 'What changes for your firm',
  useCases: [
    { name: 'Renovation quotations', before: 'Designers rebuild long itemised quotes by hand after every site visit and client change, often late at night.', after: 'Site measurements and the homeowner’s wishlist turn into an itemised quote ready to review, built from your own price list and past projects, with each room, material and labour item laid out and any changes since the last version marked. Your designer checks the figures, adds their judgement on the scope, then sends.', outcome: 'Quotes that keep pace with your clients’ ideas' },
    { name: 'Specifications and material schedules', before: 'Staff copy finishes, fittings and supplier details into a fresh specification for every project, then update it each time a choice changes.', after: 'Specifications arrive assembled from the approved design: every finish, fitting and supplier in your standard format, with items still awaiting a client decision flagged. Your designer confirms the choices and the details only they know from site.', outcome: 'Specifications built from the design, line by line' },
    { name: 'Client updates and variation orders', before: 'Progress updates, variation letters and handover notes wait until someone has a free evening to write them.', after: 'Site photos and notes become a clear client update in your firm’s voice, and agreed changes become a variation order with the cost and scope set out. Your designer reads it through, adds the personal touch, then sends.', outcome: 'Clients kept in the picture, without the late nights' },
  ],
  faqTitle: 'Questions interior design founders ask',
  faq: [
    { q: 'Will AI replace our designers?', a: 'No. We build AI into the repetitive parts of the work, such as quotations, specifications and client letters, so your designers spend more time on design, site and clients. Your team keeps the judgement on everything that goes out.' },
    { q: 'What about client and pricing information?', a: 'We agree clear rules with you on which tools to use, what client details, floor plans and price lists can go into them, and what a person checks before anything is sent. Your pricing stays yours.' },
    { q: 'Do you work with the tools we already use?', a: 'Yes. We start from the spreadsheets, quotation templates and design tools your team already has, and suggest new ones only where they fit the work.' },
    { q: 'How do we start?', a: 'With a 30-minute conversation about the work that slows your team down. Send us a short message through the contact form.', links: [{ label: 'Go to the contact form', href: '/contact#form' }] },
  ],
  close: {
    title: 'Back to designing the spaces you love.',
    sub: 'Fewer late nights rebuilding quotes, less copying out specifications, more time with clients and on site. It starts with a 30-minute conversation about the work that slows your firm down.',
  },
};

export default page;
