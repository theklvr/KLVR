import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder, { type SanityImageSource } from "@sanity/image-url";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || "production";

// @sanity/client throws synchronously if projectId is missing. Since this
// module is imported at the top of the component tree, that throw would
// crash the entire app before React can render anything - including
// content that has nothing to do with Sanity. Fall back to a stub client
// instead so a missing/misconfigured env var degrades to "use the
// hardcoded defaults" rather than a blank page.
export const sanityClient: Pick<SanityClient, "fetch"> = projectId
  ? createClient({ projectId, dataset, apiVersion: "2026-07-13", useCdn: true })
  : {
      fetch: () => {
        console.error("Sanity is not configured (missing VITE_SANITY_PROJECT_ID). Using built-in default content.");
        return Promise.reject(new Error("Sanity is not configured"));
      },
    };

const builder = projectId ? imageUrlBuilder(sanityClient as SanityClient) : null;

export function urlForImage(source: SanityImageSource) {
  if (!builder) throw new Error("Sanity is not configured");
  return builder.image(source);
}
