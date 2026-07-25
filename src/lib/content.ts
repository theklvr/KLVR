import { k2rClient } from "./k2rClient";

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

/**
 * No `limit`/`cursor` passed deliberately — the currently-deployed API
 * predates cursor pagination and rejects unrecognized query params
 * outright (`property limit should not exist`), and content volumes here
 * don't need it anyway. Handles both a bare-array response (today's
 * deploy) and `{ data, nextCursor }` (once it catches up), so this stays
 * correct either way. `_id` only ever needs to be a stable React key
 * here, not a real entry id, so the array index is enough.
 */
async function listWithFallbackId<T extends object>(
  contentType: string,
): Promise<(T & { _id: string })[]> {
  const result = (await k2rClient.list<Record<string, unknown>>(contentType)) as
    | { data: Record<string, unknown>[] }
    | Record<string, unknown>[];
  const rows = Array.isArray(result) ? result : result.data;
  return rows.map((row, index) => ({ ...(row as T), _id: `${contentType}-${index}` }));
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    return (await k2rClient.entry<Record<string, unknown>>(
      "siteSettings",
      "default",
    )) as unknown as SiteSettings;
  } catch {
    return null;
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    return await listWithFallbackId<Omit<Service, "_id">>("service");
  } catch {
    return [];
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    return await listWithFallbackId<Omit<Testimonial, "_id">>("testimonial");
  } catch {
    return [];
  }
}

export async function getFaqItems(): Promise<FaqEntry[]> {
  try {
    return await listWithFallbackId<Omit<FaqEntry, "_id">>("faqItem");
  } catch {
    return [];
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    return await listWithFallbackId<Omit<TeamMember, "_id">>("teamMember");
  } catch {
    return [];
  }
}
