import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import worker from "../dist/server/index.js";

const routes = [
  "/", "/projects", "/brands", "/albums", "/songs", "/characters",
  "/storyboards", "/scenes", "/prompts", "/assets", "/settings",
  "/songs/neon-afterglow", "/songs/paper-moon", "/songs/midnight-radio", "/songs/soft-static",
];

const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
const ctx = { waitUntil() {}, passThroughOnException() {} };

await rm("dist/client/_redirects", { force: true });

for (const route of routes) {
  const response = await worker.fetch(new Request(`http://localhost${route}`, { headers: { accept: "text/html" } }), env, ctx);
  if (!response.ok) throw new Error(`Failed to prerender ${route}: ${response.status}`);
  const output = route === "/" ? "dist/client/index.html" : join("dist/client", route, "index.html");
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, await response.text());
}

const fallback = await readFile("dist/client/index.html", "utf8");
await writeFile("dist/client/404.html", fallback);
console.log(`Prerendered ${routes.length} SimpleStudio routes.`);
