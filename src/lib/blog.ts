import { k2rClient } from "./k2rClient";

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

// K2R Studio's `array` field type only supports scalar items, not nested
// objects — Sanity's sections[]{heading, paragraphs} shape doesn't map to
// a single field. Stored as JSON text on the way in (see the migration
// script); parsed back out here so BlogPost.tsx never has to know.
interface RawPost {
  title: string;
  category: string;
  description: string;
  readTime: string;
  date: string;
  image: string;
  intro?: string;
  sections?: string;
  slug: string;
}

function toBlogPost(raw: RawPost, fallbackId: string): BlogPost {
  let sections: BlogSection[] = [];
  try {
    sections = raw.sections ? JSON.parse(raw.sections) : [];
  } catch {
    sections = [];
  }
  return {
    _id: fallbackId,
    title: raw.title,
    slug: raw.slug,
    category: raw.category,
    description: raw.description,
    readTime: raw.readTime,
    date: raw.date,
    image: raw.image,
    intro: raw.intro ?? "",
    sections,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const result = (await k2rClient.list<Record<string, unknown>>("post")) as
      | { data: Record<string, unknown>[] }
      | Record<string, unknown>[];
    const rows = Array.isArray(result) ? result : result.data;
    const posts = rows.map((row, index) =>
      toBlogPost(row as unknown as RawPost, `post-${index}`),
    );
    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const raw = await k2rClient.entry<Record<string, unknown>>("post", slug);
    return toBlogPost(raw as unknown as RawPost, slug);
  } catch {
    return null;
  }
}
