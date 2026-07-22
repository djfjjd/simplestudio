# SimpleStudio

A private, local-first production studio for managing AI music video workflows from song and lyrics through storyboards, scenes, prompts, generated assets, and final delivery.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Stack

- Next.js 15 App Router, React, TypeScript, Tailwind CSS
- Component-based shadcn-style interface primitives
- vinext/Vite Cloudflare-compatible build
- Drizzle schema and migration ready for Cloudflare D1
- Server-only R2 asset bucket helper

All product screens currently use realistic local placeholder data. Authentication, payments, and cloud sync are intentionally out of scope.
