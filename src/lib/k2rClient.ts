const PROJECT_ID = import.meta.env.VITE_K2R_PROJECT_ID;
const API_KEY = import.meta.env.VITE_K2R_API_KEY;
const BASE_URL = "https://k2r-api.onrender.com/v1";

// Plain REST calls against K2R Studio's public content API, not the
// @k2r/studio SDK package: the SDK isn't published to npm yet, and a
// file: dependency pointing at a path outside this repo (the K2R Studio
// monorepo on the machine this integration was built on) works locally
// but can never resolve on Vercel, which only clones this repo. The SDK
// itself is a thin wrapper around exactly these two requests, so nothing
// is lost by calling them directly.
//
// dangerouslyAllowBrowser equivalent: this key is scoped read-only to a
// single project and can only ever fetch published content, the same
// exposure a public Sanity dataset token already had. Not a secret in
// the same sense as a database credential.
//
// Mirrors the old sanityClient.ts's fallback shape too: a missing or
// misconfigured env var degrades to "use the hardcoded defaults" (see
// data.ts) rather than crashing the whole app on the very first render.
interface K2RClient {
  entry<T>(contentType: string, slug: string): Promise<T>;
  list<T>(contentType: string): Promise<{ data: T[] } | T[]>;
}

const notConfigured: K2RClient = {
  entry: () => {
    console.error(
      "K2R Studio is not configured (missing VITE_K2R_PROJECT_ID/VITE_K2R_API_KEY). Using built-in default content.",
    );
    return Promise.reject(new Error("K2R Studio is not configured"));
  },
  list: () => {
    console.error(
      "K2R Studio is not configured (missing VITE_K2R_PROJECT_ID/VITE_K2R_API_KEY). Using built-in default content.",
    );
    return Promise.reject(new Error("K2R Studio is not configured"));
  },
};

const realClient: K2RClient = {
  async entry<T>(contentType: string, slug: string): Promise<T> {
    const res = await fetch(
      `${BASE_URL}/projects/${PROJECT_ID}/content/${contentType}/${slug}`,
      { headers: { Authorization: `Bearer ${API_KEY}` } },
    );
    if (!res.ok) {
      throw new Error(`K2R Studio entry() failed: ${res.status} ${await res.text()}`);
    }
    return res.json() as Promise<T>;
  },
  async list<T>(contentType: string): Promise<{ data: T[] } | T[]> {
    const res = await fetch(
      `${BASE_URL}/projects/${PROJECT_ID}/content/${contentType}`,
      { headers: { Authorization: `Bearer ${API_KEY}` } },
    );
    if (!res.ok) {
      throw new Error(`K2R Studio list() failed: ${res.status} ${await res.text()}`);
    }
    return res.json() as Promise<{ data: T[] } | T[]>;
  },
};

export const k2rClient: K2RClient = PROJECT_ID && API_KEY ? realClient : notConfigured;
