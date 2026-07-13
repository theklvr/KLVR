import {getCliClient} from 'sanity/cli'

const client = getCliClient()

const posts = [
  {
    id: 'blog-tech-partner',
    slug: 'why-every-growing-business-needs-a-technology-partner',
    title: 'Why Every Growing Business Needs a Technology Partner (Not Just a Freelancer)',
    category: 'TECHNOLOGY / STRATEGY',
    description:
      "Technology isn't a department anymore, it's infrastructure every business runs on. Here's why ad-hoc freelance hiring quietly costs more than a real partnership.",
    readTime: '6 min read',
    date: '2026-07-08',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    intro:
      "Most business owners still think of technology as something you buy once and move on from: a website gets built, an app gets shipped, a system gets installed, and then it's done. That mindset made sense a decade ago. It doesn't anymore. Whether you sell shoes, run a school, manage a clinic, or operate a logistics fleet, your business now runs on software somewhere, and that software needs someone accountable for it long after launch.",
    sections: [
      {
        heading: 'Technology Has Quietly Become Core Infrastructure',
        paragraphs: [
          "Twenty years ago, a small retailer's technology stack was a cash register. Today it's a website, a payment processor, an inventory system, a CRM, and probably three or four other tools stitched together with good intentions. None of that is optional anymore, it's how customers find you, pay you, and decide whether to trust you.",
          'The businesses that grow fastest treat this infrastructure the same way they treat their physical premises: something that needs regular maintenance, occasional renovation, and a person who actually understands how it all fits together.',
        ],
      },
      {
        heading: 'The Hidden Cost of Ad-Hoc Hiring',
        paragraphs: [
          "Hiring a freelancer for a one-off website or app feels efficient in the moment. The real cost shows up later. Every new freelancer has to relearn your business from scratch, which means you're paying for onboarding every single time, not just the work itself. When something breaks six months after launch, the person who built it is often unreachable or has moved on to other clients.",
          "Multiply this across a website developer, an app developer, a social media manager, and a designer, and you end up managing five different relationships, five different invoices, and five different people who have no context on each other's work. You become the project manager, whether you wanted that job or not.",
        ],
      },
      {
        heading: 'What a Real Technology Partnership Looks Like',
        paragraphs: [
          'A technology partner is different from a vendor in one specific way: continuity. The same people who built your system are still around when you need to change it, and they already understand why decisions were made the way they were. That context is worth more than most business owners realize until they\'re missing it.',
          'In practice, this looks like a single point of contact instead of a group chat of strangers, regular check-ins instead of radio silence after launch, and a team that can move from "fix this bug" to "help me plan next quarter\'s rebuild" without a new onboarding process every time.',
        ],
      },
      {
        heading: "How to Know When It's Time",
        paragraphs: [
          "If you've hired more than two freelancers in the last year for things that touch your website, app, or internal systems, that's a signal. If you've ever had to explain your entire business context to a new contractor because the last one disappeared, that's another. And if your technology has started to feel like something you're afraid to touch because nobody currently understands it end-to-end, it's past time.",
          "The fix isn't necessarily a bigger budget. It's a different kind of relationship, one where the team sticks around long enough to actually compound in value instead of resetting to zero with every new hire.",
        ],
      },
    ],
  },
  {
    id: 'blog-growth-framework',
    slug: 'growth-strategy-framework-for-small-and-medium-businesses',
    title: 'A Practical Growth Strategy Framework for Small and Medium Businesses',
    category: 'GROWTH / STRATEGY',
    description:
      'A simple, standard framework for thinking about business growth, and why most growth plans fail before they even touch marketing.',
    readTime: '7 min read',
    date: '2026-06-24',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800',
    intro:
      'Ask ten business owners how they plan to grow and most will say some version of "get more customers." That\'s true, but it\'s only a third of the picture, and it\'s usually the hardest and most expensive third to pull off. There\'s a simpler way to think about growth that doesn\'t start with a bigger ad budget.',
    sections: [
      {
        heading: 'The Three Levers of Business Growth',
        paragraphs: [
          "Every business, regardless of industry, grows through exactly three levers: more customers, higher average value per transaction, or more frequent repeat business. Most companies pour all of their attention into the first lever because it's the most visible, and ignore the other two, which are usually cheaper to move.",
          'Increasing how often an existing customer buys from you, or how much they spend per visit, doesn\'t require winning anyone new. It requires better systems: a follow-up sequence that actually goes out, a checkout flow that doesn\'t lose people, a loyalty mechanism that gives people a reason to come back. These are unglamorous, and they usually work better than another ad campaign.',
        ],
      },
      {
        heading: 'Why Most Growth Plans Fail: Disconnected Execution',
        paragraphs: [
          "A growth plan rarely fails because the strategy was wrong. It fails because the parts that were supposed to execute it don't talk to each other. Marketing drives traffic to a site that's slow. Sales promises a service that operations can't actually deliver on the timeline quoted. The brand says one thing and the product experience says another.",
          'Growth compounds when every part of the business, the technology, the brand, and the operations, is pointed in the same direction. It stalls the moment any one of those pieces is working against the others, even if each piece looks fine in isolation.',
        ],
      },
      {
        heading: 'Systems Before Scale',
        paragraphs: [
          "It's tempting to chase growth before the systems underneath it are ready. The problem is that growth exposes weak systems fast. A marketing campaign that works too well can break a manual order process that was barely holding together at the old volume.",
          'Before investing heavily in acquisition, it\'s worth asking a blunt question: if this campaign worked ten times better than expected tomorrow, would the business actually survive the volume? If the honest answer is no, that\'s where the next investment should go, not into more traffic.',
        ],
      },
      {
        heading: 'A Simple Way to Audit Your Own Growth Readiness',
        paragraphs: [
          'Walk through your own customer journey as if you were a stranger: find the business online, try to understand what it offers within ten seconds, attempt to buy or inquire, and see what happens after. Note every point of friction, confusion, or silence.',
          'Most growth opportunities are hiding in that walkthrough, not in a new marketing tactic. Fixing what\'s broken in the existing journey is almost always cheaper, and faster, than trying to out-market a leaky system.',
        ],
      },
    ],
  },
  {
    id: 'blog-branding',
    slug: 'why-branding-isnt-decoration-how-identity-drives-revenue',
    title: "Why Branding Isn't Decoration: How Identity Drives Revenue",
    category: 'BRAND / MARKETING',
    description:
      "Branding isn't a logo or a color palette. It's a trust shortcut that directly affects what you can charge and how often people come back.",
    readTime: '5 min read',
    date: '2026-06-10',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    intro:
      'Ask most business owners what branding does and you\'ll hear some version of "it makes us look professional." That\'s true, but it undersells what\'s actually happening. Branding is one of the few investments in a business that directly affects revenue, not just appearance.',
    sections: [
      {
        heading: 'Branding Is a Trust Shortcut, Not a Logo',
        paragraphs: [
          "A customer deciding whether to trust a new business rarely has the time or information to properly evaluate it. So they rely on shortcuts: does this look legitimate, does this look like people who know what they're doing, does this look like everyone else who has scammed me before. Branding is what answers those questions in the two or three seconds before someone decides to leave a site or stay.",
          "This is why two businesses offering the exact same service at the exact same quality can have wildly different conversion rates. The difference usually isn't the offer, it's whether the presentation earned trust fast enough.",
        ],
      },
      {
        heading: 'The Premium Pricing Effect',
        paragraphs: [
          "Strong brands don't just convert better, they get to charge more for the same underlying product. This isn't a marketing trick, it's a direct consequence of perceived risk. A customer paying a premium price wants confidence that they won't regret it, and a coherent, professional identity is one of the clearest signals of that confidence.",
          "Businesses that compete purely on price are often, without realizing it, competing on price because their branding hasn't given customers a reason to believe the higher-priced option is worth it.",
        ],
      },
      {
        heading: 'Consistency Compounds',
        paragraphs: [
          "A single good-looking website doesn't make a brand. Consistency across every touchpoint, the site, the social presence, the invoice, the way a team member answers the phone, is what actually builds recognition over time. Inconsistency forces a customer to re-earn trust every single time they interact with you, which is exhausting and easy to abandon.",
          "This is also why rebrands fail when they're treated as a one-time design project instead of an ongoing discipline. The value isn't in the new logo, it's in maintaining the standard that logo represents, indefinitely.",
        ],
      },
      {
        heading: 'Where Most Businesses Get Branding Wrong',
        paragraphs: [
          'The most common mistake is treating branding as decoration applied at the end, after the product and operations are already set. The businesses that get the most out of branding treat it as a filter that shapes decisions from the start: what to build, how to price it, and who to hire, all get evaluated against the identity the business is trying to build.',
          'The second most common mistake is inconsistency born from urgency, using whatever visual asset is fastest to produce under deadline instead of what fits. Every one of those shortcuts quietly erodes the trust shortcut branding was supposed to provide.',
        ],
      },
    ],
  },
  {
    id: 'blog-build-vs-buy',
    slug: 'build-vs-buy-when-custom-software-makes-sense',
    title: 'Build vs. Buy: When Custom Software Actually Makes Sense',
    category: 'SOFTWARE / OPERATIONS',
    description:
      "Off-the-shelf software is right for most businesses, most of the time. Here's how to know when you've actually outgrown it.",
    readTime: '6 min read',
    date: '2026-05-20',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    intro:
      'Every business eventually asks the same question: should we buy an off-the-shelf tool, or build something custom? The honest answer, most of the time, is buy. Custom software is not a status symbol, and building one when a subscription tool would do is one of the most common ways businesses waste money.',
    sections: [
      {
        heading: 'When Off-the-Shelf Tools Are the Right Call',
        paragraphs: [
          "If your process looks roughly like everyone else's in your industry, an existing tool has almost certainly already solved it, tested it against thousands of other businesses, and priced it far below what a custom build would cost. Generic accounting, generic scheduling, generic email marketing, these are solved problems. Building your own version of any of them is usually reinventing a wheel that already rolls fine.",
          "The right test is simple: if a competitor could use the same off-the-shelf tool and get the same result, there's no advantage in building your own version of it.",
        ],
      },
      {
        heading: "The Signs You've Outgrown Generic Software",
        paragraphs: [
          "Custom software starts to make sense when your process is genuinely different from the market, not just inconvenient. Signs include: you're paying for three or four tools and manually copying data between them because none of them talk to each other, your team has built an elaborate spreadsheet workaround that has become mission-critical, or the way you actually operate doesn't fit the tool's assumptions, so you're constantly working around it instead of with it.",
          'Another clear signal is scale: a workaround that costs you two hours a week at your current size can cost you twenty hours a week once you triple in size. At that point, the manual process itself becomes the bottleneck to growth.',
        ],
      },
      {
        heading: 'The Real Cost of "Just Duct-Taping It Together"',
        paragraphs: [
          "The visible cost of a workaround is the time it takes. The invisible cost is everything that workaround quietly breaks: the customer whose order got lost in a spreadsheet, the lead that never got followed up on because it lived in someone's inbox, the data you can't actually analyze because it's scattered across four disconnected tools.",
          'These costs rarely show up on a balance sheet, but they show up in growth that feels harder than it should, and in a team that spends more time managing tools than serving customers.',
        ],
      },
      {
        heading: 'How to De-Risk a Custom Build',
        paragraphs: [
          "Custom software has a bad reputation partly because it's often built the wrong way: a huge, all-at-once project with a fixed scope defined before anyone really understood the problem. A better approach starts small, automating the single most painful manual process first, proving it works, and expanding from there.",
          "This also changes what to look for in a technical partner. The right one will usually try to talk you out of building something you don't need yet, and will be honest about the difference between what would be nice to have and what's actually costing you money today.",
        ],
      },
    ],
  },
  {
    id: 'blog-boutique',
    slug: 'why-boutique-technical-partners-outperform-freelance-teams',
    title: 'Why Boutique Technical Partners Outperform Freelance Teams',
    category: 'ENGINEERING / STRATEGY',
    description:
      'A deep dive into the hidden costs of agency and freelance coordination, and how the boutique dedicated team model fixes aligned incentives.',
    readTime: '5 min read',
    date: '2026-05-12',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    intro:
      'When a business sets out to build a new digital product, the default move is either to hire a large agency or piece together a team of independent freelancers. On paper, both sound reasonable. In practice, both models are plagued by misaligned incentives, coordination overhead, and single-point-of-failure risks.',
    sections: [
      {
        heading: 'The Freelancer Coordination Tax',
        paragraphs: [
          'With freelancers, you are the coordinator. You are the project manager tasked with aligning several people who do not know each other, do not share a common process, and have zero long-term commitment to your business. If your mobile developer disagrees with your API developer, they do not resolve it among themselves, they escalate it to you, costing you time and operational focus.',
          'If one of them vanishes or takes a higher-paying gig, you are left with half-finished, un-integrated code and a dead timeline.',
        ],
      },
      {
        heading: 'The Agency Relationship Gap',
        paragraphs: [
          'Large agencies solve the coordination problem, but introduce a relationship gap. You might sell to the senior partners, but your project is ultimately handed off to junior developers and account managers who treat your business as a checklist. Once the contract term ends, they hand you a zip file, clear the invoice, and move on.',
          'There is no historical memory of why decisions were made, and no continuous evolution.',
        ],
      },
      {
        heading: 'Bridging the Gap',
        paragraphs: [
          "A boutique technical and creative partner works as one coordinated unit instead of a chain of handoffs. The goal isn't just to build systems, it's to live inside them, learning how the business actually operates. When a single team manages both the engineering stack and the brand positioning, everything aligns.",
          'The interface feels premium because the creative team and technical team sit in the same room. The system scales because the people who designed it are still there, committed to the client\'s long-term expansion.',
        ],
      },
    ],
  },
  {
    id: 'blog-mvp',
    slug: 'building-world-class-mvps-in-record-time',
    title: 'Building World-Class MVPs in Record Time (Without Cutting Corners)',
    category: 'VENTURES / PRODUCT',
    description:
      "How to achieve fast MVP launches without sacrificing system security or scalability, and why speed and quality aren't actually in conflict.",
    readTime: '4 min read',
    date: '2026-04-24',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    intro:
      "There is a toxic myth in product development that speed requires sacrifice. Teams assume that if you want to build a product in days instead of months, you must compromise on type-safety, design precision, or data security. That's a false choice.",
    sections: [
      {
        heading: 'Modularity Over Corner-Cutting',
        paragraphs: [
          "The secret to rapid, secure delivery isn't cutting corners, it's high-fidelity modularity and absolute clarity of scope. A development pipeline that relies on pre-staged architectural blueprints, automated type generation, and strict linting lets a team focus entirely on the custom business logic and unique brand details of a project, rather than re-engineering the foundational plumbing from scratch every time.",
        ],
      },
      {
        heading: 'Speed Needs a Stable Foundation',
        paragraphs: [
          'Speed without foundation just produces fragile software faster. A small, senior team can review every line of code for performance, security, and schema soundness, while a dedicated creative lead ensures every user flow, transition, and micro-interaction is polished to consumer standards, without the review bottleneck that slows down larger teams.',
        ],
      },
      {
        heading: 'An MVP Should Feel Like Chapter One',
        paragraphs: [
          'An MVP should not feel like a toy, it should feel like the first chapter of an enterprise. Building with modern, type-safe stacks and secure cloud persistence from day one means the MVP shipped this week can still be the production engine supporting the first ten thousand users next year, instead of something that has to be rebuilt from scratch the moment real traction arrives.',
        ],
      },
    ],
  },
  {
    id: 'blog-growth',
    slug: 'aligning-brand-tech-and-operations-for-sustainable-growth',
    title: 'Aligning Brand, Tech, & Operations for Sustainable Growth',
    category: 'GROWTH / OPERATIONS',
    description:
      'An integrated framework for combining software architecture with brand narrative to eliminate the conversion leaks most businesses never notice.',
    readTime: '6 min read',
    date: '2026-04-12',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    intro:
      'Many businesses have exceptional products and services but struggle to grow. When you look under the hood, the root cause is almost always the same: their technology, their branding, and their operations do not speak to each other.',
    sections: [
      {
        heading: "When Marketing and Systems Don't Talk",
        paragraphs: [
          "A marketing team might launch a gorgeous campaign that brings ten thousand users to a landing page. But if the website is slow, or the checkout flow is confusing, or the database fails to capture the lead, that creative effort is entirely wasted. Conversely, an engineering team might build an incredibly complex, highly performant automation system, but if the branding looks outdated and the copy reads cold and robotic, customers won't trust it enough to enter their details.",
        ],
      },
      {
        heading: 'One Coordinated Engine',
        paragraphs: [
          'To achieve sustainable growth, a business has to treat its tech stack and its brand narrative as a single, coordinated engine. The technical side and the creative side have to work hand-in-hand, not as separate departments that occasionally sync up.',
        ],
      },
      {
        heading: 'What This Looks Like in Practice',
        paragraphs: [
          'This is why the strongest technology partnerships operate as one team rather than a vendor relationship. When a system gets redesigned, the technical lead ensures it runs fast and securely, while the creative lead aligns the visual language and writes copy that builds immediate trust. Eliminating the friction between creative expression and technical execution is what actually unlocks business velocity, not more spend on either side alone.',
        ],
      },
    ],
  },
]

async function migrate() {
  const transaction = client.transaction()

  for (const post of posts) {
    transaction.createOrReplace({
      _id: post.id,
      _type: 'post',
      title: post.title,
      slug: {_type: 'slug', current: post.slug},
      category: post.category,
      description: post.description,
      readTime: post.readTime,
      date: post.date,
      image: post.image,
      intro: post.intro,
      sections: post.sections.map((s) => ({
        _type: 'section',
        _key: s.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        heading: s.heading,
        paragraphs: s.paragraphs,
      })),
    })
  }

  const result = await transaction.commit()
  console.log(`Migrated ${posts.length} posts.`, result)
}

migrate().catch((err) => {
  console.error(err)
  process.exit(1)
})
