// About, Contact, Insights, Privacy and Terms. Legal text lives in legal/*.json.
import privacySections from './legal/privacy.json';
import termsSections from './legal/terms.json';

// Goes through the hh-growth-editor EDIT pass before it is shown to YJ.

export const about = {
  seoTitle: 'About Human Horizon | People-first AI consultancy',
  description: 'Human Horizon is a Singapore AI consultancy founded by Jaye Wang and Wei Lin. We bring AI into the work teams already do, with people first.',
  kicker: 'About Human Horizon',
  title: 'AI should lift people, not leave them behind.',
  lead: 'Human Horizon is a Singapore AI consultancy founded by Jaye Wang and Wei Lin. We work alongside your team on the work they already do, train them on it and help it stick, so your people come through the change more capable and still in charge.',
  story: {
    title: 'Why we started Human Horizon.',
    paras: [
      'Between us, we have spent 18 years building teams and measuring results at companies such as Gojek, Alibaba and Meta. Working at the frontier of technology, we have watched AI move from experiment to everyday work, and the pace keeps rising. We expect it to reach every role.',
      'We have also seen how that change usually lands. New tools arrive, a few early adopters run with them and everyone else waits, unsure what it means for their job. The gap widens, and the people on the wrong side of it lose ground. We do not think that is acceptable, for the people or for the businesses that rely on them.',
      'So we started Human Horizon to make AI part of how the whole team works, not a pursuit for the keen few. Every engagement follows three steps, Implement, Train and Adopt, with people first at each one, so the change lasts.',
    ],
  },
  beliefsTitle: 'What we believe',
  beliefs: [
    { title: 'AI is a people change', body: 'Tools are the easy part. Whether AI sticks depends on whether people trust it, shape it and see it make their work better.' },
    { title: 'Customised to your work', body: 'Courses teach AI in general terms, so the impact is never felt in the work itself. We shape AI around the tasks your team does every week, which is where the real return shows.' },
    { title: 'Show the change', body: 'Founders deserve to see what changed. The ROI Transformation Report shows the hours saved, valued at your own rates.' },
  ],
  founders: {
    title: 'The people behind Human Horizon.',
    sub: 'One has built and led teams, the other has measured what they deliver. AI that lasts needs both.',
  },
  people: {
    title: 'We hold ourselves to the PACT.',
    body: 'Four commitments shape every engagement, so your people know where they stand and help shape the change instead of waiting to see what happens to them.',
  },
};

export const contact = {
  seoTitle: 'Contact Human Horizon | AI consultancy in Singapore',
  description: 'Talk to Human Horizon about AI for your business. Send a short message about the work that slows your team down and ask for a 30-minute call.',
  kicker: 'Contact Human Horizon',
  title: 'Tell us what slows your team down.',
  lead: 'Every engagement starts with a 30-minute call. It is a conversation about your business, not a sales pitch. Send a short message below.',
  emailTitle: 'Email us',
  emailNote: 'Prefer email? Write to us directly.',
  form: {
    title: 'Send us a message',
    note: 'A few lines are enough: what your business does and which work you would most like to change.',
    roles: ['Founder or owner', 'C-suite or director', 'Head of department', 'Manager', 'Team lead', 'Team member', 'Other'],
    departments: ['General management', 'Sales and business development', 'Marketing', 'Operations', 'Finance and admin', 'HR and L&D', 'Customer service', 'IT, data and AI', 'Other'],
    sizes: ['1 to 10', '11 to 50', '51 to 200', 'More than 200'],
    messageLabel: 'What slows your team down?',
    messageHint: 'A few lines on the work you would most like to change.',
    consent: 'We use your details only for this enquiry.',
    submit: 'Send message',
    linkError: 'Please keep links to two or fewer, so the message reaches us.',
  },
  thanks: {
    seoTitle: 'Message sent | Human Horizon',
    title: 'Thanks, your message is with us.',
    body: 'We appreciate you telling us about your team. If you would rather, you can also write to us directly.',
  },
  stepsTitle: 'What happens next',
  steps: [
    { title: 'You send a message', body: 'Tell us a little about your business and the work that slows your team down.' },
    { title: 'A 30-minute conversation', body: 'We talk through the work that takes up your team’s time and where AI could help. You do not need to prepare anything or know which tools you want.' },
    { title: 'A proposal for your team', body: 'You see the full scope and the way to start before you commit to anything.' },
  ],
};

export const insights = {
  seoTitle: 'Insights: AI training, adoption and governance | Human Horizon',
  description: 'Blog posts, guides and a plain-English AI glossary for Singapore founders, HR and operations teams bringing AI into everyday work.',
  title: 'Insights',
  lead: 'Practical writing for Singapore founders, HR and operations leads on AI adoption, training and the people side of change.',
  leadEmpty: 'Practical writing for Singapore founders on AI adoption, training and the people side of change. The first articles are on their way. If a question is on your mind now, ask us on a call.',
  browseTitle: 'Browse by topic',
  glossaryTitle: 'AI glossary',
  glossaryLead: 'The words that come up when a team starts using AI, explained in plain English with an example from work.',
};

export const privacy = {
  seoTitle: 'Privacy notice | Human Horizon',
  description: 'How Human Horizon collects and uses personal data, in line with Singapore’s Personal Data Protection Act.',
  title: 'Privacy notice',
  updated: '12 November 2026',
  sections: privacySections,
};

export const terms = {
  seoTitle: 'Terms of use | Human Horizon',
  description: 'The terms that apply when you use the Human Horizon website, under the laws of Singapore.',
  title: 'Terms of use',
  updated: '5 November 2026',
  sections: termsSections,
};
