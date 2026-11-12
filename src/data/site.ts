// Site-wide structure. Workflow copy is illustrative, outcome only: never the method.

export const site = {
  name: 'Human Horizon',
  url: 'https://humanhorizon.io',
  email: 'contact.humanhorizon@gmail.com',
  description:
    'AI consultancy in Singapore for people-first implementation, training and adoption, so AI becomes part of the company culture and the results last.',
  // Footer boilerplate: the USP in two sentences (Implement, Train, Adopt, people first, results that last).
  boilerplate: 'People-first AI consultancy for businesses. We implement AI in each team’s work, train people and help them adopt it, so results stick and AI becomes company culture, not an individual pursuit.',
  cta: { label: 'Ask for a 30-minute call', href: 'mailto:contact.humanhorizon@gmail.com?subject=A%2030-minute%20call%20with%20Human%20Horizon' },
  pilot: {
    title: 'Be one of our first three founding clients, with both founders on your team.',
    text: 'Work directly with both founders, help shape how we work, and start at a founding rate well below our usual fee. In return, we ask for honest feedback, a testimonial and before-and-after data we can share.',
    bar: 'Taking on three founding clients, each working directly with both founders.',
    short: 'Taking on three founding clients.',
    link: 'Register interest',
    href: 'mailto:contact.humanhorizon@gmail.com?subject=Founding%20client%20interest',
  },
};

export const pillars = [
  {
    slug: 'implement',
    name: 'Implement',
    outcome: 'Custom AI workflows and agents built around how your business already runs.',
    items: [
      { name: 'Discovery and priorities', line: 'We map where your team’s time goes and pick the work worth changing first.' },
      { name: 'Custom workflows', line: 'Built around the recurring work that fills your team’s week.' },
      { name: 'AI agents', line: 'Take on the repeat steps, with a person checking the result.' },
      { name: 'AI governance', line: 'Clear rules on client data, tools and sign-off, so your team knows what can go into AI tools.' },
    ],
  },
  {
    slug: 'train',
    name: 'Train',
    outcome: 'Your people learn AI alongside the tasks they already know.',
    items: [
      { name: 'Hands-on training', line: 'Starts with the basics, then moves straight onto the tasks your team already knows.' },
      { name: 'Role-specific sessions', line: 'Shaped to the work your sales, operations or finance staff do.' },
      { name: 'Leadership briefing', line: 'Helps founders and managers lead the change in their own teams.' },
      { name: 'AI toolkit', line: 'Prompts, templates and guides your team keeps and reuses.' },
    ],
  },
  {
    slug: 'adopt',
    name: 'Adopt',
    outcome: 'Habits that hold, tracked and refreshed for your team.',
    items: [
      { name: 'AI adoption tracking', line: 'Usage and time saved across the team, so you can see what is sticking.' },
      { name: 'Playbooks', line: 'Step-by-step guides for each new workflow, so the know-how stays when people change.' },
      { name: 'Handover pack', line: 'Everything we set up, documented and owned by you.' },
      { name: 'Refreshers', line: 'Your team kept current as the tools change.' },
    ],
  },
];

export type Workflow = { name: string; before: string; after: string; outcome: string };
export type Segment = { slug: string; name: string; workflow: Workflow };

export const industries: Segment[] = [
  { slug: 'marketing-agencies', name: 'Marketing and creative agencies', workflow: { name: 'Monthly client reports', before: 'Account managers spend the start of every month copying figures from several platforms into slides and writing commentary late into the evening.', after: 'Reports arrive ready to review. Figures flow in from your platforms, the charts are built and the story is written, with the wins, the dips and the next moves called out. Your account lead checks it, adds the insight only they can give, then sends.', outcome: 'Reports that arrive with the data and story in place' } },
  { slug: 'recruitment', name: 'Recruitment and staffing', workflow: { name: 'Candidate shortlists', before: 'Consultants read every CV that comes in, then rebuild the best few into the agency’s profile template before writing a cover note to the client.', after: 'Consultants start the day with a ranked shortlist and client-ready profiles, and they decide who to put forward.', outcome: 'Shortlists to clients the same day' } },
  { slug: 'trading-distribution', name: 'Trading and distribution', workflow: { name: 'Customer order entry', before: 'The sales coordinator retypes orders from WhatsApp messages and emailed purchase orders, checking stock and price lists one line at a time.', after: 'Orders from every channel arrive ready to confirm against stock and pricing, and the coordinator handles the exceptions.', outcome: 'Orders confirmed the same morning' } },
  { slug: 'logistics-freight', name: 'Logistics and freight forwarding', workflow: { name: 'Freight quotations', before: 'Pricing staff work through rate sheets and carrier emails for every request, so quotes go out a day or more later and sometimes miss a surcharge.', after: 'Quotes are drafted from your current rates while the request is still fresh, and your pricing lead checks the margin before sending.', outcome: 'Quotes out the same morning' } },
  { slug: 'accounting-corporate-secretarial', name: 'Accounting and corporate secretarial', workflow: { name: 'Monthly client bookkeeping', before: 'Staff chase clients for missing documents, then spend the first weeks of each month keying receipts and reconciling bank lines by hand.', after: 'Client records are sorted and reconciled as they arrive, and your accountants review the queries and the judgement calls.', outcome: 'Books closed early, not at the deadline' } },
  { slug: 'interior-design', name: 'Interior design and renovation', workflow: { name: 'Renovation quotations', before: 'Designers rebuild long itemised quotes by hand after every site visit and client change, often late at night.', after: 'Revised quotes follow the client conversation the same day, built from your own price list and checked by the designer.', outcome: 'Quotes back while the client is still keen' } },
  { slug: 'education', name: 'Education and tuition providers', workflow: { name: 'Parent updates and class changes', before: 'Admin staff answer parent messages across dozens of chats, arrange replacement classes one by one and copy lesson notes into individual updates.', after: 'Parents get clear, timely answers and progress notes in your centre’s voice, and staff step in on anything sensitive.', outcome: 'Parents informed, front desk calm' } },
  { slug: 'healthcare', name: 'Healthcare clinics', workflow: { name: 'Patient messages and appointments', before: 'Front desk staff answer calls and WhatsApp messages about appointments, fees and results while patients wait at the counter.', after: 'Routine questions get accurate replies in your clinic’s voice, bookings and reminders run on their own, and staff step in on anything clinical.', outcome: 'A front desk free for the patient in front of them' } },
  { slug: 'cleaning-facilities', name: 'Cleaning and facilities', workflow: { name: 'Rosters and site attendance', before: 'Supervisors spend early mornings phoning around to fill gaps, then piece together attendance from chat messages for payroll and client reports.', after: 'Gaps are spotted and covered before the shift starts, and attendance sits in one place, confirmed by the supervisor.', outcome: 'Every site covered, every morning' } },
  { slug: 'law-firms', name: 'Law firms', workflow: { name: 'Routine letters and file review', before: 'Lawyers and paralegals read through bundles and draft routine letters and checklists from scratch for every matter.', after: 'Lawyers start from a summarised file and a first draft in the firm’s style, then apply their judgement and sign off.', outcome: 'More matters handled without more hires' } },
  { slug: 'property-agencies', name: 'Property agencies', workflow: { name: 'Enquiry follow-up', before: 'Agents answer enquiries between viewings, lose track of who needs a reply and let warm buyers go quiet.', after: 'Every enquiry gets a prompt, accurate reply and a suggested viewing slot, and the agent takes over for the conversation that matters.', outcome: 'No enquiry left waiting' } },
  { slug: 'engineering-me', name: 'Engineering and M&E contractors', workflow: { name: 'Progress claims and variations', before: 'QS and project staff piece together site photos, delivery orders and instructions every month to build claims and argue variations after the fact.', after: 'Claims and variation records come together as the work happens, and your QS reviews and submits on time.', outcome: 'Claims in on time, cash flow steady' } },
  { slug: 'it-services', name: 'IT services and MSPs', workflow: { name: 'Helpdesk ticket triage', before: 'Senior engineers break off from project work to sort a stream of emails and calls, chasing users for missing details before anyone can act.', after: 'Tickets reach the right engineer with the context already gathered, and urgent issues are flagged for your lead to confirm.', outcome: 'Response targets met, engineers on real work' } },
];

export const teams: Segment[] = [
  { slug: 'sales', name: 'Sales and business development', workflow: { name: 'Proposals and tenders', before: 'The founder and one salesperson rebuild every proposal from old files over evenings and weekends, and some tenders are skipped for lack of time.', after: 'Proposals start from your best past work, tailored to the buyer, and the founder shapes the pitch and the price.', outcome: 'More bids out, fewer late nights' } },
  { slug: 'marketing', name: 'Marketing', workflow: { name: 'Content production', before: 'Marketing gets done when someone finds time, so posts are irregular and case studies sit unwritten.', after: 'A steady calendar of on-brand drafts drawn from your own work and wins, reviewed and approved by your team.', outcome: 'Your work seen, in your own voice' } },
  { slug: 'operations', name: 'Operations', workflow: { name: 'Job status updates', before: 'Coordinators chase updates across group chats and calls, then retype them for clients and the weekly meeting.', after: 'One up-to-date picture of every job, with issues raised early for the team lead to act on.', outcome: 'Know where every job stands' } },
  { slug: 'finance-admin', name: 'Finance and admin', workflow: { name: 'Supplier bills and approvals', before: 'Admin staff key each supplier invoice by hand, match it to purchase orders and chase approvers over WhatsApp.', after: 'Bills arrive checked against orders and ready to approve, and finance handles only the mismatches.', outcome: 'Bills in order, nothing missed' } },
  { slug: 'hr-people', name: 'HR and people', workflow: { name: 'Monthly payroll, leave and claims', before: 'HR gathers leave, overtime and claims from forms and messages, then cross-checks spreadsheets before every payroll and CPF submission.', after: 'Payroll inputs are complete and checked before cut-off, and HR approves the exceptions.', outcome: 'Payroll right first time' } },
  { slug: 'customer-service', name: 'Customer service', workflow: { name: 'Customer enquiries', before: 'Staff answer the same questions across WhatsApp, email and phone, and complex cases wait behind simple ones.', after: 'Customers get accurate answers promptly, and your team gives its time to the cases that need a person.', outcome: 'Every customer answered promptly' } },
];

export const nav = [
  { label: 'What we do', href: '/what-we-do', children: pillars.map((p) => ({ label: p.name, href: `/what-we-do/${p.slug}` })) },
  { label: 'Industries', href: '/industries', children: industries.map((s) => ({ label: s.name, href: `/industries/${s.slug}` })) },
  { label: 'Teams', href: '/teams', children: teams.map((s) => ({ label: s.name, href: `/teams/${s.slug}` })) },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
];
