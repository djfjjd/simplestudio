import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the SimpleStudio dashboard", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>SimpleStudio — AI Music Video Production<\/title>/i);
  assert.match(html, /Production overview/);
  assert.match(html, /Recent songs/);
  assert.match(html, /Neon Afterglow/);
  assert.doesNotMatch(html, /codex-preview|Building your site/);
});

test("includes product routes, Cloudflare bindings, and removes starter preview", async () => {
  const [app, hosting, pkg] = await Promise.all([
    readFile(new URL("../components/studio-app.tsx", import.meta.url), "utf8"),
    readFile(new URL("../.openai/hosting.json", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);
  for (const route of ["Projects", "Brands", "Albums", "Songs", "Characters", "Storyboards", "Scenes", "Prompts", "Assets", "Settings"]) assert.match(app, new RegExp(route));
  assert.match(hosting, /"d1": "DB"/);
  assert.match(hosting, /"r2": "ASSETS"/);
  assert.match(pkg, /"next": "\^15\./);
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
});
