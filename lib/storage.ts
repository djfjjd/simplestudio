import { env } from "cloudflare:workers";

/** R2 access stays server-side; generated media bytes belong in R2, metadata in D1. */
export function getAssetBucket(): R2Bucket {
  const bindings = env as unknown as { ASSETS?: R2Bucket };
  if (!bindings.ASSETS) throw new Error("Cloudflare R2 binding `ASSETS` is unavailable.");
  return bindings.ASSETS;
}
