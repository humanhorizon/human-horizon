import type { SegmentPage } from '../../segmentPages';

const page: SegmentPage = {
  seoTitle: 'AI for healthcare clinics in Singapore | Human Horizon',
  description: 'People-first AI for Singapore clinics. Patient messages, referral letters and insurance claims built into your team’s real work.',
  kicker: 'AI for healthcare clinics in Singapore',
  title: 'Give your clinic team back to its patients.',
  lead: 'Clinic hours disappear into phone calls, appointment changes, referral letters and insurance claims. We build AI into that work with your team, so your people spend their time on patients and care.',
  painsTitle: 'Where clinic weeks go',
  pains: [
    { title: 'Calls and chats', body: 'The front desk answers the same questions on appointments, fees and results by phone and WhatsApp while patients queue at the counter.' },
    { title: 'Appointments and no-shows', body: 'Bookings, changes and reminders are handled one patient at a time, and empty slots go unfilled.' },
    { title: 'Letters and reports', body: 'Doctors write referral letters, memos and medical reports after clinic hours, pulling details from the notes by hand.' },
    { title: 'Claims and billing', body: 'Admin staff key each visit into insurer and corporate panel portals, then chase rejected claims line by line.' },
  ],
  start: {
    title: 'A good first step for a clinic',
    body: 'Start with a First Win on one of these, such as your patient messages and appointments, for a team of 5 to 10 people. Your team tries it on its own work, so you can judge the change before going further.',
  },
  people: {
    title: 'Care stays with your doctors and nurses.',
    body: 'Clinic teams worry that AI will make care feel impersonal or put patient trust at risk. We start there. Your team shapes how AI is used, every clinical decision stays with your doctors, and the repetitive messages, forms and claims go to the tools.',
  },
  changesTitle: 'What changes for your clinic',
  useCases: [
    { name: 'Patient messages and appointments', before: 'Front desk staff answer calls and WhatsApp messages about appointments, fees and results while patients wait at the counter.', after: 'Routine questions on opening hours, fees and preparation get accurate replies in your clinic’s voice. Bookings, changes and reminders run on their own, and cancelled slots are offered to patients waiting for one. Anything clinical or sensitive goes straight to your staff.', outcome: 'A front desk free for the patient in front of them' },
    { name: 'Referral letters and medical reports', before: 'Doctors write referral letters, memos and insurance reports after clinic hours, copying details from the consultation notes by hand.', after: 'Each letter or report arrives as a first draft built from the consultation notes, in the doctor’s own style, with the patient details, history and findings in place. The doctor reviews, corrects and signs every one.', outcome: 'Paperwork that no longer follows the doctor home' },
    { name: 'Insurance and panel claims', before: 'Admin staff key each visit into insurer and corporate panel portals, then work through rejected claims one by one.', after: 'Claims are prepared from each visit’s bill and notes and checked against the panel’s rules before they go out. Rejections come back sorted by reason, with the likely fix set out. Your admin team approves each submission and handles the exceptions.', outcome: 'Cleaner claims, fewer rejections to chase' },
  ],
  faqTitle: 'Questions clinic owners ask',
  faq: [
    { q: 'Will AI make clinical decisions?', a: 'No. Diagnosis, treatment and medical advice stay with your doctors. We build AI into the admin around care, such as patient messages, letters and claims, and a person in your clinic checks what goes out.' },
    { q: 'What about patient data?', a: 'We agree clear rules with you on which tools to use, what patient information can go into them and what a person checks before anything is sent. Medical records are handled with particular care, and if a patient asks how you use AI, you will have a clear answer.' },
    { q: 'Do you work with our clinic system?', a: 'Yes. We start from the clinic management system, messaging apps and spreadsheets your team already uses, and suggest new tools only where they fit the work.' },
    { q: 'How do we start?', a: 'With a 30-minute conversation about the work that takes up your team’s week. Drop us an email at contact.humanhorizon@gmail.com.', links: [{ label: 'Email us', href: 'mailto:contact.humanhorizon@gmail.com' }] },
  ],
  close: {
    title: 'More of the day for the patient in the room.',
    sub: 'Fewer calls on hold, fewer forms after hours, more time with patients. It starts with a 30-minute conversation about the work that slows your clinic down.',
  },
};

export default page;
