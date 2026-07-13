import { sanityClient } from "./sanityClient";

export interface SiteSettings {
  heroBuildWords: string[];
  heroForWords: string[];
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

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    return await sanityClient.fetch(`*[_type == "siteSettings"][0]`);
  } catch {
    return null;
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    return await sanityClient.fetch(
      `*[_type == "service"] | order(order asc) { _id, num, anchorId, title, description, categories }`
    );
  } catch {
    return [];
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    return await sanityClient.fetch(`*[_type == "testimonial"] | order(order asc) { _id, quote, author, role }`);
  } catch {
    return [];
  }
}

export async function getFaqItems(): Promise<FaqEntry[]> {
  try {
    return await sanityClient.fetch(`*[_type == "faqItem"] | order(order asc) { _id, question, answer }`);
  } catch {
    return [];
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    return await sanityClient.fetch(
      `*[_type == "teamMember"] | order(order asc) { _id, name, role, image, hoverTitle, hoverText }`
    );
  } catch {
    return [];
  }
}
