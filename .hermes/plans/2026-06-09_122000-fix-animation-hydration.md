# Fix Animation Rendering on Portfolio Site

## Goal
Make framer-motion animations actually render in the browser. Currently, About, Capabilities, and Projects sections are invisible because they're server components that can't hydrate framer-motion.

## Root Cause
Three section components (`About.tsx`, `Capabilities.tsx`, `Projects.tsx`) use framer-motion `motion.div` but are **server components** — missing `"use client"` directive.

In Next.js App Router:
- Server components render `motion.div` as static HTML with `opacity: 0` inline styles (from `initial` / SSR serialization)
- Without `"use client"`, these never hydrate as React client components
- framer-motion's animation engine never runs → elements stay at `opacity: 0` forever
- HeroSection and Contact already have `"use client"` and work correctly

## Approach
Minimal fix: add `"use client"` to the three missing sections. One-line additions, no restructuring.

## Step-by-Step Plan
1. **`components/sections/About.tsx`** — add `"use client"` as first line
2. **`components/sections/Capabilities.tsx`** — add `"use client"` as first line
3. **`components/sections/Projects.tsx`** — add `"use client"` as first line
4. **Build & verify** — `npm run build` should pass, then dev server visual check

## Files to Change
| File | Change |
|------|--------|
| `components/sections/About.tsx` | Add `"use client"` at line 1 |
| `components/sections/Capabilities.tsx` | Add `"use client"` at line 1 |
| `components/sections/Projects.tsx` | Add `"use client"` at line 1 |

## Testing / Validation
1. `npm run build` — clean compile, no type errors
2. Dev server on port 3001
3. Visual: hero visible → scroll down → About, Capabilities, Projects fade/slide in while scrolling
4. Canvas mesh still renders in hero section

## Risks & Tradeoffs
- Adding `"use client"` prevents server-rendering, but these sections already can't meaningfully SSR (they SSR as hidden `opacity: 0`)
- SEO content still renders via SSR — only the *animation* is client-side
- After fix: initial paint shows hero, scroll triggers reveal of lower sections — professional and expected UX
