import type { SegmentPage } from '../../segmentPages';

const page: SegmentPage = {
  seoTitle: 'AI for recruitment agencies in Singapore | Human Horizon',
  description: 'AI workflows and agents for Singapore recruitment and staffing. Shortlists, job descriptions and client updates built into the team’s real work.',
  kicker: 'AI for recruitment and staffing in Singapore',
  title: 'Consultants, back with the people they place',
  lead: 'Recruiter hours disappear into reading CVs, writing job descriptions, outreach messages and client updates. We build AI into that work with the team, so people spend their time on the conversations that place candidates.',
  painsTitle: 'Where recruitment weeks go',
  pains: [
    { title: 'CV screening', body: 'Consultants read every CV that comes in, most of them for roles they will never fit.' },
    { title: 'Candidate profiles', body: 'The best few CVs get rebuilt by hand into the agency’s template before a client ever sees them.' },
    { title: 'Job ads and outreach', body: 'Every new role means writing a job description and a round of outreach messages from scratch.' },
    { title: 'Client updates', body: 'Consultants chase hiring managers for interview feedback, then write the same role update again and again.' },
  ],
  start: {
    title: 'A good first step for a recruitment firm',
    body: 'Start with one workflow for a team of 5 to 10 people. The team tries it on its own work, so the business can judge the change before going further.',
  },
  people: {
    title: 'Recruitment stays a people business.',
    body: 'Consultants worry that AI will turn their work into a matching engine and make them easy to replace. We start there. The team shapes how AI is used, keeps every judgement on who to put forward, and hands the reading, reformatting and retyping to the tools.',
  },
  changesTitle: 'What changes for the firm',
  useCases: [
    { name: 'Candidate shortlists', before: 'Consultants read every CV that comes in, then rebuild the best few into the agency’s profile template before writing a cover note to the client.', after: 'Shortlists arrive ready to review. Each applicant is read against the brief, the closest matches are brought forward with the reasons why, and their profiles are already in the agency’s template with a draft cover note for the client. The consultant checks the picks, adds what they know from the call, and decides who to put forward.', outcome: 'Shortlists with reasons and client-ready profiles' },
    { name: 'Job descriptions and candidate outreach', before: 'Every new role starts with a blank page for the job ad, then a long evening of writing personal messages to possible candidates.', after: 'The intake call becomes a clear job description in the firm’s house style, with the must-haves, the nice-to-haves and the selling points of the role. Outreach drafts follow for each candidate, written to their background and why the role suits them. The consultant sharpens the pitch and sends the ones worth sending.', outcome: 'From intake call to job ad and outreach, ready to send' },
    { name: 'Client updates', before: 'Consultants piece together pipeline notes from emails, chats and the database whenever a hiring manager asks how a role is going.', after: 'Updates come together from the firm’s own records: who has been screened, who is interviewing, who has dropped out and what is needed from the client next, with a nudge drafted for any interview still waiting on feedback. The consultant reads it, adds the context only they have, and sends it in their own voice.', outcome: 'Clients kept informed without the rewriting' },
  ],
  faqTitle: 'Questions recruitment founders ask',
  faq: [
    { q: 'Will AI replace our consultants?', a: 'No. We build AI into the repetitive parts of recruitment, such as screening, profile formatting and updates, so consultants spend more time with candidates and clients. Consultants keep the judgement on who to put forward and every relationship that comes with it.' },
    { q: 'What about candidate data?', a: 'We agree clear rules with the firm on which tools to use, what candidate and client information can go into them and what a person checks before anything is sent. Personal data stays under the firm’s control and its own PDPA policies, and there is a clear answer if a candidate or client asks how the firm uses AI.' },
    { q: 'Does Human Horizon work with our database and job boards?', a: 'Yes. We start from the recruitment systems, job boards and AI tools the team already uses, and suggest new ones only where they fit the work.' },
    { q: 'How do we start?', a: 'With a 30-minute conversation about the work that slows the team down. Send us a short message through the contact form.', links: [{ label: 'Go to the contact form', href: '/contact#form' }] },
  ],
  close: {
    title: 'Back to the calls that make the placement',
    sub: 'Less reading, reformatting and chasing, more time with the people consultants place. It starts with a 30-minute conversation about the work that slows the firm down.',
  },
};

export default page;
