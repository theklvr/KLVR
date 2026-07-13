import { sanityClient } from "./sanityClient";

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

const LIST_FIELDS = `_id, title, "slug": slug.current, category, description, readTime, date, image`;
const FULL_FIELDS = `${LIST_FIELDS}, intro, sections[]{heading, paragraphs}`;

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    return await sanityClient.fetch(`*[_type == "post"] | order(date desc) { ${LIST_FIELDS} }`);
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    return await sanityClient.fetch(
      `*[_type == "post" && slug.current == $slug][0] { ${FULL_FIELDS} }`,
      { slug }
    );
  } catch {
    return null;
  }
}
