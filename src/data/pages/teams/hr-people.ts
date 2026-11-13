import type { SegmentPage } from '../../segmentPages';

const page: SegmentPage = {
  seoTitle: 'AI for HR teams in Singapore | Human Horizon',
  description: 'People-first AI for Singapore HR and people teams. Payroll inputs, onboarding and staff questions built into your team’s real work.',
  kicker: 'AI for HR and people teams in Singapore',
  title: 'Time for the people side of HR again.',
  lead: 'HR hours disappear into gathering leave, overtime and claims for payroll, preparing onboarding letters and answering the same policy questions. We build AI into that work with your team, so your people spend their time on the conversations and decisions that need a person.',
  painsTitle: 'Where HR weeks go',
  pains: [
    { title: 'Payroll inputs', body: 'Before every payroll, HR collects leave, overtime and claims from forms and messages and cross-checks them by hand.' },
    { title: 'Claims paperwork', body: 'Receipts arrive as photos in chats and each one is checked against the policy one at a time.' },
    { title: 'New joiner paperwork', body: 'Every new hire means rebuilding offer letters, contracts and first-week plans from old files.' },
    { title: 'Repeat questions', body: 'Staff ask HR the same questions about leave, benefits and claims, one message at a time.' },
  ],
  people: {
    title: 'People decisions stay with people.',
    body: 'HR teams worry that AI will make the work cold, or start deciding things about people. We start there. AI prepares the paperwork and the first answers, and your HR team makes every decision on hiring, pay, performance and leaving, with the care it needs.',
  },
  changesTitle: 'What changes for your team',
  useCases: [
    { name: 'Monthly payroll, leave and claims', before: 'HR gathers leave, overtime and claims from forms and messages, then cross-checks spreadsheets before every payroll and CPF submission.', after: 'Payroll inputs arrive gathered into one place, with leave, overtime and claims matched to each employee, checked against your policies and with anything unusual flagged for a look. HR reviews the exceptions, approves, and runs payroll from a clean set of figures.', outcome: 'A clean payroll, ready for HR to approve' },
    { name: 'Onboarding new joiners', before: 'Every new hire means copying an old offer letter, rewriting the contract details and pulling together a first-week plan by hand.', after: 'Once your hiring manager has made the decision, the offer letter, contract draft, welcome note and first-week plan arrive prepared from your templates, with the role details already filled in. HR checks every line, adds the personal touch and sends.', outcome: 'New joiners welcomed with everything ready' },
    { name: 'Staff questions on policy', before: 'HR answers the same questions about leave balances, claims and benefits over chat and email, one by one, between everything else.', after: 'Staff get clear answers drawn from your own handbook and policies, in your company’s voice, and anything personal, sensitive or unclear goes straight to a person in HR. Your team keeps the handbook current, checks the answers given and handles the conversations that matter.', outcome: 'Staff get clear answers, HR gets its time back' },
  ],
  start: {
    title: 'A good first step for an HR team',
    body: 'Start with a First Win on one of the workflows on this page, such as monthly payroll, leave and claims, for a team of 5 to 10 people. Your team tries it on its own work, so you can judge the change before going further.',
  },
  faqTitle: 'Questions HR leaders ask',
  faq: [
    { q: 'Will AI make hiring or pay decisions?', a: 'No. People decide on hiring, pay, performance and anyone leaving. AI prepares the paperwork, gathers the figures and drafts first answers, and your HR team and managers make every decision and approve what goes out.' },
    { q: 'What about employee data?', a: 'We agree clear rules with you on which tools to use, what employee data can go into them, who can see it and what a person checks before anything is sent. Personal and sensitive matters stay with your HR team, and the rules are set with your PDPA obligations in mind.' },
    { q: 'Do you work with our HR and payroll systems?', a: 'Yes. We start from the HR, payroll and AI tools your team already uses, and suggest new ones only where they fit the work. Your team stays responsible for meeting its employment obligations.' },
    { q: 'How do we start?', a: 'With a 30-minute conversation about the work that slows your team down. Send us a short message through the contact form.', links: [{ label: 'Go to the contact form', href: '/contact#form' }] },
  ],
  close: {
    title: 'Back to the human side of HR.',
    sub: 'Less cross-checking spreadsheets and answering the same questions, more time for your people. It starts with a 30-minute conversation about the work that slows your team down.',
  },
};

export default page;
