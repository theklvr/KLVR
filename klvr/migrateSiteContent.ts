import {getCliClient} from 'sanity/cli'

const client = getCliClient()

const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  heroBuildWords: ['Websites', 'Software', 'Brand Kits', 'Automation', 'Platforms'],
  heroForWords: ['Startups', 'Schools', 'Real Estate', 'E-Commerce', 'SMEs'],
  aboutText:
    'Most businesses do not actually know what they need first, a website , a brand , funding , or just someone with expirence telling them where to start.Klvr exists for that conversation. we are not here to seel you a package. We look at what you are building , tell you what actually matters right now,and bring in the right people from our own team, build, brand, growth, capital, whatever the moment calls for, to make it happen.  We started in 202 6because too many founders , business owners and soloprreneurs were getting sold services they did not need by people who had a reason to sell them. Klvr does not have that problem. we are not attached to one answer.',
  whyChooseUsEyebrow: 'Why choose us',
  whyChooseUsHeadingPrimary: 'We build for outcomes',
  whyChooseUsHeadingSecondary: '- not just launch day.',
  whyChooseUsDescription:
    'Direct founder access, weekly live builds, and systems built to compound are why partners stay long after the first launch.',
  statOneNumber: '10+',
  statOneLabel: 'Successful projects completed',
  statOneDescription:
    "We've helped launch products and platforms that make growing businesses run smoother and look sharper.",
  statTwoNumber: '100%',
  statTwoLabel: 'Customer satisfaction',
  statTwoCaption: 'Direct to the founders',
  servicesHeading: 'What We Do',
  servicesSubheading: "One team, two divisions, and a partnership that doesn't end at launch.",
  philosophyPart1: 'Most agencies deliver and',
  philosophyHighlight: 'disappear.',
  philosophyPart2: 'We stay for the years that come after launch.',
  testimonialsHeading: 'Partner Feedback',
  testimonialsSubheading:
    "Don't just take our word for it. Here is what partners say after replacing their fragmented teams with our unified engine.",
  teamHeading: 'Team',
  teamSubheading:
    'We are Saviour, James, and our close strategic partners. We operate with zero layers of telephone or account-management overhead. When you deal with us, you deal directly with the hands doing the work.',
  faqHeading: 'Questions people usually ask first.',
  faqSubheading: "If yours isn't here, that's exactly what the first message is for.",
  contactHeading: "Tell us what you're building.",
}

const services = [
  {
    _id: 'service-build',
    _type: 'service',
    num: '01',
    anchorId: 'pillar-build',
    title: 'Engineering & Build',
    description:
      'We design and build the software a growing business runs on: websites, custom platforms, and the systems that keep everything moving.',
    categories: [
      'Custom Software & CRM Systems',
      'School & Business Management Platforms',
      'High-Conversion Websites & E-Commerce',
      'Workflow Automation & AI Integration',
      'Secure API & Database Architecture',
    ],
    order: 1,
  },
  {
    _id: 'service-brand',
    _type: 'service',
    num: '02',
    anchorId: 'pillar-brand',
    title: 'Brand & Creative',
    description:
      'We turn what a business does into a brand people trust and remember, then keep it consistent everywhere it shows up.',
    categories: [
      'Brand Positioning & Visual Identity',
      'Content, Photography & Videography',
      'User Interface & Experience (UI/UX)',
      'Marketing Strategy & Growth Campaigns',
    ],
    order: 2,
  },
  {
    _id: 'service-partnership',
    _type: 'service',
    num: '03',
    anchorId: 'pillar-partnership',
    title: 'Ongoing Partnership',
    description:
      "We don't disappear after launch. We stay on as a long-term technology and creative partner, growing alongside the business.",
    categories: [
      'Direct Founder-to-Founder Thread',
      'Monthly Retainers & Growth Partnerships',
      'Weekly Live Builds & Launch Readiness',
      'Business & Technology Consulting',
    ],
    order: 3,
  },
]

const testimonials = [
  {
    _id: 'testimonial-rapid-alex',
    _type: 'testimonial',
    quote:
      "Bro, they turned my site into something that actually feels like my sound. I didn't expect to love a website this much.",
    author: 'Rapid Alex',
    role: 'Musician',
    order: 1,
  },
  {
    _id: 'testimonial-treasure',
    _type: 'testimonial',
    quote:
      "My site finally looks like what's actually in my head. People stop and ask who built it, every time.",
    author: 'Treasure',
    role: 'Model',
    order: 2,
  },
  {
    _id: 'testimonial-cece',
    _type: 'testimonial',
    quote:
      "I'm a designer myself, so I notice everything. klvr nailed the details I usually have to fight other devs for.",
    author: 'Cece',
    role: 'Designer',
    order: 3,
  },
]

const faqItems = [
  {
    _id: 'faq-cost',
    _type: 'faqItem',
    question: 'How much does this cost?',
    answer:
      "It depends on scope, so we won't put a number here that would probably be wrong for your situation. We don't compete by being the cheapest option, our pricing reflects the value we create for your business, and we'd rather package a solution than nickel-and-dime you for every small piece. Say hello, tell us what you're building, and we'll scope it properly before quoting anything.",
    order: 1,
  },
  {
    _id: 'faq-speed',
    _type: 'faqItem',
    question: 'How fast can you start?',
    answer:
      'Most projects can kick off within a week or two of scoping and a deposit. If something is genuinely urgent, tell us upfront, we can usually adjust.',
    order: 2,
  },
  {
    _id: 'faq-contract',
    _type: 'faqItem',
    question: 'Do we need to sign a contract?',
    answer:
      'Yes, every project starts with a written scope and agreement. It protects you as much as it protects us, and it means nobody is guessing what was promised.',
    order: 3,
  },
  {
    _id: 'faq-one-thing',
    _type: 'faqItem',
    question: 'What if I only need one thing, not everything?',
    answer:
      "That's completely fine. Most relationships start with one piece (a website, an app, a content system) and grow from there once the fit is obvious. Nothing here is all-or-nothing.",
    order: 4,
  },
  {
    _id: 'faq-outside-nigeria',
    _type: 'faqItem',
    question: 'Do you work with businesses outside Nigeria?',
    answer:
      'Yes. We work with clients wherever they are, and price in whichever currency makes sense for the relationship.',
    order: 5,
  },
  {
    _id: 'faq-after-launch',
    _type: 'faqItem',
    question: 'What happens after the project launches?',
    answer:
      "We don't disappear. Most clients move to a simple monthly plan so the system keeps running well and gets small improvements over time, with regular check-ins rather than radio silence.",
    order: 6,
  },
]

const teamMembers = [
  {
    _id: 'team-saviour',
    _type: 'teamMember',
    name: 'Saviour',
    role: 'Co-founder & Technical Lead',
    image: '/team/saviour.jpeg',
    hoverTitle: 'Hi There !',
    hoverText:
      "I'm the Technical lead and I'm dedicated ensuring our cleint's get the best technology solutions in their space.",
    order: 1,
  },
  {
    _id: 'team-james',
    _type: 'teamMember',
    name: 'James',
    role: 'Co-founder & Creative Director',
    image: '/team/james.jpg',
    hoverTitle: 'Hello World',
    hoverText: 'I craft premium strategic brand systems and high-converting user interfaces.',
    order: 2,
  },
]

async function run() {
  const tx = client.transaction()
  tx.createOrReplace(siteSettings)
  for (const s of services) tx.createOrReplace(s)
  for (const t of testimonials) tx.createOrReplace(t)
  for (const f of faqItems) tx.createOrReplace(f)
  for (const m of teamMembers) tx.createOrReplace(m)
  await tx.commit()
  console.log('Migrated: siteSettings, 3 services, 3 testimonials, 6 faqItems, 2 teamMembers')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
