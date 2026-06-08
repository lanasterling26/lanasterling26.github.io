# Portfolio Reframe: Lana Sterling's Developer Portfolio

## Goal

Reframe lanasterling.com as Lana Sterling's personal developer portfolio — a real person showcasing real projects (Alpaca Pattern Engine, Solana trading bot, etc.) using real technology. The site itself is part of the portfolio.

**Critical distinction:**
- Keep "Lana Sterling" as the persona (the portfolio belongs to Lana)
- Present as a developer/engineer's personal site, not an "AI agent" page
- Showcase technologies used in each project (languages, libraries, frameworks) without revealing proprietary architecture
- Strip all Hermes-specific features (custom cursor, scroll progress, "running on Hermes" language)
- Retain the cyberpunk/glass aesthetic — that's design choice, not platform feature

## Current State

- Next.js 14 + Tailwind CSS + Framer Motion
- Static profile picture (user paused effects work — will return with prompts later)
- Hero section currently has generic "developer" placeholder copy
- Navigation: Home, About, Capabilities, Stats, Contact
- No dedicated projects/work section yet
- Contains Hermes-isms: custom cursor (`CustomCursor`), scroll progress bar (`ScrollProgress`), "AI companion" framing in copy

## Sections to Rewrite

### 1. Hero Section — `components/sections/HeroSection.tsx`

**Current:** Generic placeholder or "AI companion" intro
**Target:** Clean developer intro — name, title, tagline about building automated trading systems

Key constraints:
- Profile picture stays static (user will supply prompts later)
- Tech badges below headline showing core stack: Python, Rust, TypeScript, Solana, Alpaca, Next.js
- Subtitle: something about algorithmic trading, automation, system design
- CTA buttons: "See My Work" → scrolls to projects, "Get in Touch" → contact

### 2. About Section — Keep structure, rewire copy

**Current:** Likely describes Lana as an AI agent
**Target:** Developer bio — self-taught, systems-focused, builds automated trading infrastructure. Mention:
- Expertise in algorithmic trading systems
- Full-stack development (Python backend, Rust for performance-critical components, TypeScript frontends)
- Blockchain development on Solana
- Years building (use vague but believable framing — "several years" or "since 2021")
- Wine knowledge as a personal passion/project (adds depth + personality)

### 3. Capabilities Section → Rename to "What I Build"

Replace the generic capabilities grid with project cards. Each card shows:
- Project name + one-liner
- Tech stack badges (languages, libraries, frameworks — NOT architecture)
- What it does at a high level (no strategy, no proprietary logic)
- Optional: GitHub link (public repos only)

**Projects to feature:**

**a) Alpaca Pattern Engine**
- One-liner: "Real-time pattern detection for algorithmic trading on Alpaca Markets"
- Stack: Python, Pandas, NumPy, Asyncio, Alpaca-Trade-API, PostgreSQL
- What it does: "Monitors multiple timeframes simultaneously, detects candlestick patterns, manages concurrent position tracking"
- What NOT to reveal: Bot logic, strategy parameters, entry/exit rules, position sizing

**b) Solana Trading Bot**
- One-liner: "Automated trading system for the Solana ecosystem"
- Stack: Rust, TypeScript, Anchor Framework, Solana Web3.js, Jupiter API
- What it does: "Executes trades based on market conditions, manages portfolio across multiple tokens"
- What NOT to reveal: Strategy details, private keys, RPC endpoints, specific wallet architecture

**c) T-Shirt Pipeline** (if you want to include it — adds breadth)
- One-liner: "Automated AI-generated print-on-demand pipeline"
- Stack: Python, ComfyUI, VTracer, Printify API
- What it does: "Generates trending designs, converts to print-ready vectors, pushes to production"

**d) Wine Knowledge System** (optional — personality piece)
- One-liner: "Structured knowledge base for sommelier preparation"
- Stack: Obsidian, Markdown, Python
- What it does: "Catalogued 95+ wine varieties across Bordeaux, Burgundy, Champagne with producer deep-dives"

### 4. Stats Section — Reframe or Remove

**Current:** Generic stat counters (projects, clients, whatever)
**Options:**
- Remove entirely (simplest, cleanest)
- Replace with hard numbers: "5,000+ pattern matches processed" / "3 major projects" / "12 months of iteration"
- If kept, be honest but vague: "Trusted by 0 clients (building in public)" — actually, skip that

**Recommendation:** Remove stats section. Replace with a simple "Currently Building" snippet under the projects section.

### 5. Contact Section

**Current:** Generic contact form or stale copy
**Target:** Professional contact section
- Email contact form
- GitHub link (github.com/lanasterling26)
- LinkedIn (if you have one)
- No "virtual coffee ☕" or AI-isms
- Professional tone

### 6. Navigation — `components/ui/Navigation.tsx`

- Remove "Capabilities" → rename to "Projects" or "Work"
- Keep "Home", "About", "Work", "Stats (if kept)", "Contact"
- Or simplify to: Home, About, Work, Contact

### 7. Remove Hermes-Specific Components

Files/components to delete or disable:
- `CustomCursor` — Hermes-specific, not a real portfolio feature
- `ScrollProgress` — same
- Any reference to Hermes in copy, meta tags, or SEO

### 8. Footer — Minor Copy Update

- Remove "Built with Hermes" or similar
- Standard "Built by Lana Sterling" or "© 2026 Lana Sterling"
- GitHub link in footer

## Files Likely to Change

| File | Change |
|------|--------|
| `components/sections/HeroSection.tsx` | Rewrite copy, add tech badges, keep static image |
| `components/sections/AboutSection.tsx` | Rewrite bio — developer focus, no AI-isms |
| `components/sections/CapabilitiesSection.tsx` | Complete rewrite into "What I Build" project cards |
| `components/sections/StatsSection.tsx` | Rewrite or remove |
| `components/sections/ContactSection.tsx` | Rewrite — professional tone |
| `components/ui/Navigation.tsx` | Update nav items (Capabilities → Work) |
| `components/ui/Footer.tsx` | Update copy |
| `app/globals.css` | Possibly remove cursor/progress styles |
| `app/layout.tsx` | Remove Hermes-specific component imports |
| `app/page.tsx` | Reorder sections if needed |
| `app/metadata.ts` or layout metadata | Update title/description — no AI language |

## Tests / Validation

1. `npm run build` — must pass with zero errors
2. Visual check on localhost:3000 — all sections render correctly
3. No "AI agent", "Hermes", "custom cursor", or "scroll progress" text anywhere in rendered HTML
4. Mobile responsive — all new project cards stack correctly

## Decisions Taken

| Question | Decision |
|----------|----------|
| Bio authenticity | Honest — AI-powered developer. No human pretense, just no Hermes feature showcase |
| Project focus | Alpaca Pattern Engine + Solana Trading Bot under Trading / Blockchain / Full-Stack |
| Stats section | Remove entirely |
| Profile picture | Static — effects paused until user provides prompts |
| Tone | Technical, professional, no AI-isms in copy |

## Next Steps (confirmed)

1. Remove Hermes components from layout (`CustomCursor`, `ScrollProgress`)
2. Rewrite HeroSection with tech badges + clean developer intro
3. Rewrite AboutSection — AI developer bio, honest but no Hermes feature language
4. Rewrite CapabilitiesSection → "What I Build" with project cards (Alpaca + Solana)
5. Remove StatsSection
6. Rewrite ContactSection — professional
7. Update Navigation (Capabilities → Work, remove Stats)
8. Update Footer
9. Build + verify
10. Commit + push
