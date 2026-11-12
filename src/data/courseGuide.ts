// The "AI course in Singapore" guide. Most people searching want a course for themselves, so the page helps them
// choose one honestly, then gives the route for teams and a way to pass the page to their manager.
// It owns "AI course Singapore" searches; the Train page keeps "AI training".
import { faq as homeFaq } from './home';

export const courseGuide = {
  seoTitle: 'Choosing an AI course in Singapore | Human Horizon',
  description: 'Choosing an AI course in Singapore? What to look for when you are learning on your own, and what changes when a whole team needs to use AI at work.',
  kicker: 'Choosing an AI course in Singapore',
  title: 'Learning AI for yourself, or for your whole team?',
  lead: 'If you are learning on your own, a public AI course is a good place to start, and the checklist below will help you pick one. If you are choosing for your team or your company, training built on their own tasks makes a bigger difference to their work.',
  checklistTitle: 'What to look for in an AI course',
  checklist: [
    { name: 'Hands-on practice', body: 'Most of the time spent using AI, not watching slides about it.' },
    { name: 'Tasks like your own', body: 'Examples close to your job, so you can picture using it on Monday.' },
    { name: 'Current tools', body: 'AI tools change fast, so check the course has been updated recently.' },
    { name: 'Safe use of data', body: 'What you should and should not put into an AI tool at work.' },
    { name: 'Something to take away', body: 'A piece of work, prompts or templates you keep using after the course.' },
  ],
  bridge: {
    title: 'Back from a course, and the rest of the team works the old way?',
    body: 'It happens a lot. One person learns, then finds nothing around them has changed. Send this page to your manager or founder, and start the conversation about your whole team.',
    link: 'Send this page to your manager',
    href: 'mailto:?subject=An%20idea%20for%20our%20team&body=I%20came%20across%20this%20while%20looking%20at%20AI%20courses.%20It%27s%20training%20built%20on%20our%20own%20work%2C%20not%20a%20general%20class.%20Worth%20a%20look%3F%20https%3A%2F%2Fhumanhorizon.io%2Fai-course-singapore',
  },
  compareTitle: 'A public AI course, or training built on your work',
  compareLead: 'Choosing for your team or company? Here are the two side by side, easy to share with whoever signs off.',
  compare: [
    { row: 'The examples', course: 'General ones, chosen to suit a mixed class.', ours: 'Your team’s own tasks and documents.' },
    { row: 'Who is in the room', course: 'People from many companies and roles.', ours: 'Your team only, so people can talk about real clients and real work.' },
    { row: 'Starting point', course: 'One level for the whole class.', ours: 'Starts with the basics, then splits by role.' },
    { row: 'The Monday after', course: 'Back to a full inbox and the old way of working.', ours: 'The workflows built in training are ready to use on real tasks.' },
    { row: 'Client data', course: 'Rarely covered for your business.', ours: 'Clear rules on what can go into which AI tools.' },
    { row: 'What you can show for it', course: 'A certificate for each person, not a change in the work.', ours: 'A report on the hours your team gets back, valued at your own rates.' },
  ],
  fitTitle: 'Which one fits',
  fit: [
    { title: 'A course is enough when', items: ['One person wants to learn AI in their own time', 'Someone is exploring a career in AI or data', 'You need technical skills such as machine learning or coding'] },
    { title: 'Your team needs more when', items: ['People did a course and nothing changed at their desks', 'Licences were bought but barely get used', 'Staff use AI with no rules on client data', 'You want to see the hours it saves'] },
  ],
  skillsTitle: 'The AI skills that matter at work',
  skillsLead: 'Whichever route you take, these are the skills to come away with. Our training starts with the basics and builds them on work your team recognises.',
  skills: [
    { name: 'Asking well', body: 'Giving AI the context, examples and limits it needs to produce a usable first draft.' },
    { name: 'Checking the output', body: 'Spotting errors and made-up facts before anything reaches a client.' },
    { name: 'Keeping data safe', body: 'Knowing what can go into which tool, and what never should.' },
    { name: 'Turning repeat work into a workflow', body: 'Making a repeat task faster, the same way each time.' },
  ],
  faqTitle: 'Questions about AI courses',
  faq: [
    { q: 'Do you run public AI courses in Singapore?', a: 'No. We train teams inside their own company, on their own work. If you are learning AI on your own, a public course is the better fit.' },
    { q: 'I have been asked to find AI training for our staff. Where do I start?', a: 'Start with the work, not a list of courses. Note the tasks that take the most time, who does them and what data they touch. That gives any provider, including us, enough to suggest a real first step. We are happy to talk with you first, before you take it to your boss.' },
    { q: 'Is this suitable for beginners?', a: 'Yes. Training starts with the basics: what AI can and cannot do, how to use it safely and how to ask well. Then it moves onto your team’s real tasks.' },
    { q: 'Do people get a certificate?', a: 'Human Horizon is not an accredited course provider, so we do not issue accredited certificates. What you get instead is a report on the hours your team gets back, valued at your own rates.' },
    homeFaq.find((f) => f.q === 'Is this covered by course funding?')!,
    { q: 'Are you part of AI Singapore or its apprenticeship programme?', a: 'No. Human Horizon is an independent consultancy and is not connected to AI Singapore or the AI Apprenticeship Programme.' },
    { q: 'Are there free AI courses in Singapore?', a: 'Yes, many free introductory courses are available online. They are a good first step for individuals. Our training is for companies that want AI built into their team’s work.' },
  ],
  close: {
    title: 'Share this page with your manager, and we can take it forward together.',
    sub: 'Whoever signs off on training can then ask for a 30-minute call. We start with the work that slows your team down.',
    secondary: { label: 'Ask for a 30-minute call', href: '/contact#form' },
  },
};
