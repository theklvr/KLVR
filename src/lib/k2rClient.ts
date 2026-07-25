import { createClient, type K2RClient } from "@k2r/studio";

const projectId = import.meta.env.VITE_K2R_PROJECT_ID;
const apiKey = import.meta.env.VITE_K2R_API_KEY;

// Mirrors the old sanityClient.ts's fallback shape: a missing/misconfigured
// env var degrades to "use the hardcoded defaults" (see data.ts) rather
// than crashing the whole app on the very first render.
//
// dangerouslyAllowBrowser: true. This key is scoped `read`-only to a
// single project and can only ever fetch published content, the same
// exposure a public Sanity dataset token already had. Not a secret in the
// same sense as a database credential.
export const k2rClient: Pick<K2RClient, "entry" | "list"> = projectId && apiKey
  ? createClient({ projectId, apiKey, dangerouslyAllowBrowser: true })
  : {
      entry: () => {
        console.error("K2R Studio is not configured (missing VITE_K2R_PROJECT_ID/VITE_K2R_API_KEY). Using built-in default content.");
        return Promise.reject(new Error("K2R Studio is not configured"));
      },
      list: () => {
        console.error("K2R Studio is not configured (missing VITE_K2R_PROJECT_ID/VITE_K2R_API_KEY). Using built-in default content.");
        return Promise.reject(new Error("K2R Studio is not configured"));
      },
    };
