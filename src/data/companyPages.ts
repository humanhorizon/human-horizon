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
  description: 'Find your first AI win with Human Horizon. Book a 30-minute discovery call or send us one workflow you would like to improve.',
  kicker: 'Contact Human Horizon',
  title: 'Tell us what slows your team down.',
  lead: 'Two ways to start: book a 30-minute discovery call, or send us one workflow you would like to improve. Either way, we help you find your first AI win. No sales pitch.',
  emailTitle: 'Email us',
  emailNote: 'Prefer email? Write to us directly.',
  form: {
    title: 'Choose how to start',
    note: 'Pick a time for a 30-minute discovery call in our calendar, or tell us about one workflow you would like to improve.',
    calTitle: 'Book a 30-minute discovery call',
    roles: ['Founder or owner', 'C-suite or director', 'Head of department', 'Manager', 'Team lead', 'Team member', 'Other'],
    departments: ['General management', 'Sales and business development', 'Marketing', 'Operations', 'Finance and admin', 'HR and L&D', 'Customer service', 'IT, data and AI', 'Other'],
    sizes: ['1 to 10', '11 to 50', '51 to 200', 'More than 200'],
    messageLabel: 'What slows your team down?',
    messageHint: 'A few lines on the work you would most like to change.',
    startLabel: 'How would you like to start?',
    // Each way to start sets its own question and hint; ?start= on the link picks one.
    starts: [
      { value: 'call', label: 'Book a 30-minute discovery call', message: 'What slows your team down?', hint: 'A few lines on the work you would most like to change. We will reply to find a time.' },
      { value: 'workflow', label: 'Send us one workflow you’d like to improve', message: 'Which workflow would you like to improve?', hint: 'The task, who does it and what slows it down. We will reply with first thoughts and a time to talk it through.' },
    ],
    consent: 'We use your details only for this enquiry.',
    submit: 'Send message',
    linkError: 'Please keep links to two or fewer, so the message reaches us.',
  },
  thanks: {
    seoTitle: 'Message sent | Human Horizon',
    description: 'Your message has reached Human Horizon. Thank you for telling us about your team.',
    title: 'Thanks, your message is with us.',
    body: 'We appreciate you telling us about your team. If you would rather, you can also write to us directly.',
  },
  stepsTitle: 'What happens next',
  steps: [
    { title: 'You send a message', body: 'Tell us a little about your business and the work that slows your team down.' },
    { title: 'A 30-minute discovery call', body: 'We look at that work together, and at where AI could help first. You do not need to prepare anything or know which tools you want.' },
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
  updated: '15 November 2026',
  sections: privacySections,
};

export const terms = {
  seoTitle: 'Terms of use | Human Horizon',
  description: 'The terms that apply when you use the Human Horizon website, under the laws of Singapore.',
  title: 'Terms of use',
  updated: '15 November 2026',
  sections: termsSections,
};

export const caseStudiesHub = {
  seoTitle: 'AI case studies: real work before and after | Human Horizon',
  description: 'AI case studies from Human Horizon: the workflows before and after, how each team was trained, and the results that stuck once AI became part of daily work.',
  kicker: 'AI implementation and training case studies',
  title: 'What changes when a whole team works with AI.',
  lead: 'Each case study shows the work before and after, how the team learned it and what has stuck since. People review every output and make the calls that matter.',
  filterTitle: 'Filter by industry and team',
  empty: {
    title: 'No case study for this yet.',
    body: 'We can still show what would change for this kind of team. A 30-minute conversation is enough to find out.',
  },
  featuredTitle: 'Teams we have worked with',
};
