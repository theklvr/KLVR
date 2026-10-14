export interface SiteSettings {
  heroBuildWords: string[];
  heroForWords: string[];
  heroSubheading: string;
  aboutHeading: string;
  aboutText: string;
  whyChooseUsEyebrow: string;
  whyChooseUsHeadingPrimary: string;
  whyChooseUsHeadingSecondary: string;
  whyChooseUsDescription: string;
  statOneNumber: string;
  statOneLabel: string;
  statOneDescription: string;
  statTwoNumber: string;
  statTwoLabel: string;
  statTwoCaption: string;
  servicesHeading: string;
  servicesSubheading: string;
  philosophyPart1: string;
  philosophyHighlight: string;
  philosophyPart2: string;
  testimonialsHeading: string;
  testimonialsSubheading: string;
  teamHeading: string;
  teamSubheading: string;
  faqHeading: string;
  faqSubheading: string;
  contactHeading: string;
  contactSubheading: string;
}

export interface Service {
  _id: string;
  num: string;
  anchorId: string;
  title: string;
  description: string;
  categories: string[];
}

export interface Testimonial {
  _id: string;
  quote: string;
  author: string;
  role: string;
}

export interface FaqEntry {
  _id: string;
  question: string;
  answer: string;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  image: string;
  hoverTitle: string;
  hoverText: string;
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  readTime: string;
  date: string;
  image: string;
  intro: string;
  sections: BlogSection[];
}
