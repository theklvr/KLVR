import {getCliClient} from 'sanity/cli'

const client = getCliClient()

const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  heroBuildWords: [
    'Digital Products',
    'Brand Experiences',
    'Growth Strategies',
    'Creative Campaigns',
    'Business Solutions',
  ],
  heroForWords: ['Startups', 'Businesses', 'Web3 Projects', 'Organizations', 'Entrepreneurs'],
  heroSubheading:
    'Creative thinking, powerful technology, strategic growth, and the right people to make it happen.',
  aboutHeading: 'Different challenges. One partner. Endless possibilities.',
  aboutText:
    "KLVR is a multidisciplinary company bringing creativity, technology, marketing and business expertise together to help ideas grow into meaningful ventures and ambitious projects become reality.\n\nWe work with founders, businesses, brands and organizations to solve problems, unlock opportunities and build for the future. From digital products and brand experiences to growth strategies, business advisory and specialized projects, we combine our team's expertise with a growing network of trusted partners to deliver the right solutions.\n\nBeyond client work, we develop our own products, explore new ventures and build strategic partnerships that expand what's possible.\n\nWe're not defined by one service or one industry. We're driven by the challenges we can solve, the value we create and the businesses we help move forward.",
  whyChooseUsEyebrow: 'Why choose us',
  whyChooseUsHeadingPrimary: 'More than a service provider.',
  whyChooseUsHeadingSecondary: 'A partner in what comes next.',
  whyChooseUsDescription:
    'Different ambitions demand different solutions. We combine multidisciplinary thinking, hands-on execution and the right connections to help our partners navigate challenges and move forward with confidence.',
  statOneNumber: '10+',
  statOneLabel: 'Successful projects completed',
  statOneDescription:
    "We've helped launch products and platforms that make growing businesses run smoother and look sharper.",
  statTwoNumber: '100%',
  statTwoLabel: 'Customer satisfaction',
  statTwoCaption: 'Direct to the founders',
  servicesHeading: 'What We Do',
  servicesSubheading:
    'From solving business challenges to developing our own products, we bring ideas, expertise and the right partnerships together to create lasting value.',
  philosophyPart1: 'KLVR creates, builds, connects and',
  philosophyHighlight: 'grows.',
  philosophyPart2: 'The right solution depends on the challenge in front of us.',
  testimonialsHeading: 'Partner Feedback',
  testimonialsSubheading:
    "Real feedback from people we've helped through websites, creative work, product thinking and digital execution.",
  teamHeading: 'Team',
  teamSubheading:
    'We are Saviour, James, and a growing network of close strategic partners. KLVR stays lean, direct and hands-on while bringing in specialist expertise when a project needs it.',
  faqHeading: 'Useful answers before we talk.',
  faqSubheading: 'Clear answers about what KLVR is, how we work and where collaboration can start.',
  contactHeading: "Have an idea, challenge or opportunity? Let's talk.",
  contactSubheading:
    "Whether you're building something new, growing an existing business, exploring a partnership or bringing an ambitious idea to life, we'd love to hear about it.",
}

const services = [
  {
    _id: 'service-solutions',
    _type: 'service',
    num: '01',
    anchorId: 'pillar-solutions',
    title: 'KLVR Solutions',
    description:
      'Ideas into impact. We help businesses and organizations solve problems through creative thinking, technology, marketing and strategic expertise. From building digital platforms to shaping brands, improving operations and accelerating growth, we develop solutions around what each project actually needs.',
    categories: [
      'Software, web and platform development',
      'AI integrations, automation and technical solutions',
      'Brand identity, creative direction and design',
      'Digital marketing, campaigns and growth strategy',
      'Business consulting and operational solutions',
      'Web3 ecosystem growth and advisory',
      'Community development, partnerships and KOL collaborations',
      'Digital transformation and project delivery',
    ],
    order: 1,
  },
  {
    _id: 'service-products',
    _type: 'service',
    num: '02',
    anchorId: 'pillar-products',
    title: 'KLVR Products',
    description:
      "Building what's next. We're not only building for others. We create and develop our own digital products, platforms and tools designed to solve real problems and open new opportunities. Blocly is part of this growing KLVR product ecosystem.",
    categories: [
      'Proprietary software products',
      'SaaS platforms',
      'Digital tools and utilities',
      'Product research and development',
      'Scalable technology ventures',
    ],
    order: 2,
  },
  {
    _id: 'service-partnerships',
    _type: 'service',
    num: '03',
    anchorId: 'pillar-partnerships',
    title: 'KLVR Partnerships',
    description:
      'Stronger together. Great ideas often require expertise beyond one team. We collaborate with specialist operators, industry professionals and strategic partners to bring ambitious projects to life, including drone light show experiences delivered through an independent operating partner.',
    categories: [
      'Strategic business collaborations',
      'Specialized project execution',
      'Creative experiences and event solutions',
      'Drone light show experiences through our operating partner',
      'Industry and ecosystem connections',
      'Cross-industry partnerships',
      'Collaborative growth opportunities',
    ],
    order: 3,
  },
  {
    _id: 'service-ventures',
    _type: 'service',
    num: '04',
    anchorId: 'pillar-ventures',
    title: 'KLVR Ventures',
    description:
      'Creating new possibilities. Through research, product development, strategic collaborations and new business initiatives, KLVR explores ideas that can evolve into sustainable businesses and create long-term impact.',
    categories: [
      'Venture exploration',
      'New business development',
      'Internal product incubation',
      'Joint venture opportunities',
      'Strategic business development',
      'Commercial partnerships',
      'Innovation and market research',
    ],
    order: 4,
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
    _id: 'faq-what-is-klvr',
    _type: 'faqItem',
    question: 'What is KLVR?',
    answer:
      'KLVR is a creative, technology, marketing and business solutions company. We help organizations solve problems, build digital products, shape brands, grow communities and explore strategic opportunities.',
    order: 1,
  },
  {
    _id: 'faq-services',
    _type: 'faqItem',
    question: 'What services does KLVR provide?',
    answer:
      'KLVR provides software, web and platform development, AI integrations, automation, brand identity, creative direction, digital marketing, growth strategy, business consulting, Web3 ecosystem growth, community development and partnership support.',
    order: 2,
  },
  {
    _id: 'faq-products',
    _type: 'faqItem',
    question: 'Does KLVR build its own products?',
    answer:
      'Yes. KLVR develops its own digital products, platforms and tools. Blocly is one product within the KLVR ecosystem, and future products will be presented with real details as they develop.',
    order: 3,
  },
  {
    _id: 'faq-partners',
    _type: 'faqItem',
    question: 'Does KLVR work with external partners?',
    answer:
      'Yes. KLVR collaborates with trusted specialist operators and strategic partners where a project needs expertise beyond our direct team. Partner-operated work is clearly distinguished from services delivered directly by KLVR.',
    order: 4,
  },
  {
    _id: 'faq-web3',
    _type: 'faqItem',
    question: 'Does KLVR provide Web3 growth and business solutions?',
    answer:
      'Yes. KLVR supports Web3 projects with ecosystem growth, community development, partnerships, KOL collaborations, marketing strategy and business advisory where those capabilities match the project need.',
    order: 5,
  },
  {
    _id: 'faq-where',
    _type: 'faqItem',
    question: 'Where does KLVR operate?',
    answer:
      'KLVR is built from Nigeria and works with clients, founders, businesses and organizations wherever the right collaboration makes sense.',
    order: 6,
  },
  {
    _id: 'faq-collaborate',
    _type: 'faqItem',
    question: 'How can businesses collaborate with KLVR?',
    answer:
      'Start by sharing the idea, challenge or opportunity. From there, KLVR can scope a solution, explore a strategic partnership, support growth, build a digital product or connect the right specialist partners around the work.',
    order: 7,
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
  console.log('Migrated: siteSettings, 4 services, 3 testimonials, 7 faqItems, 2 teamMembers')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
