---
title: 'Webold.ir Minimalist Landing Page and Core Architecture'
type: 'feature'
created: '2026-09-16'
status: 'done'
review_loop_iteration: 0
followup_review_recommended: false
context:
  - '{project-root}/_bmad-output/implementation-artifacts/epic-1-context.md'
  - '{project-root}/_bmad-output/planning-artifacts/ux-designs/ux-webold-landig-2026-09-15/DESIGN.md'
  - '{project-root}/_bmad-output/planning-artifacts/architecture/architecture-webold-landig-2026-09-15/ARCHITECTURE-SPINE.md'
warnings: []
deferred: []
---

<intent-contract>

## Intent

**Problem:** Webold (`webold.ir`) lacks a modern, high-converting digital presence to showcase its software and web development services to founders and growing businesses.

**Approach:** Build a production-grade, server-first Next.js 15 App Router web application with pure technical minimalist aesthetic, 8-section homepage, interactive lead intake flow, subpages (`/work`, `/services`, `/contact`), and official contact credentials with 95+ Lighthouse performance.

## Boundaries & Constraints

**Always:**
- Use Next.js 15+ App Router, React 19, TypeScript in Strict Mode, and Tailwind CSS.
- Strictly adhere to the pure technical minimalism palette (Obsidian `#000000`, card `#0A0A0A`, 1px borders `rgba(255,255,255,0.08)`, white action buttons `#FFFFFF`, muted text `#A1A1AA`).
- Keep all layout and content sections as Server Components; isolate `"use client"` exclusively to interactive leaves (IntakeForm, Navbar mobile toggle).
- Feature official contact info: Address (تهران، خیابان قائم مقام، کوچه آزادگان، پلاک ۲۲، واحد ۳), Landline (`021-66480076`), Mobile (`09361059451`), Email (`hello@webold.ir`).
- Include JSON-LD Schema.org `LocalBusiness` and `Organization` metadata in `src/app/layout.tsx`.

**Never:**
- Never use heavy colorful neon gradients, loud badges, or unnecessary visual clutter.
- Never use slow, heavy runtime animations; keep all transitions snappy and under 200ms.
- Never hardcode unvalidated form submissions or allow spam bypassing honeypot.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|--------------|---------------------------|----------------|
| Homepage Render | GET `/` | Renders full 8-section minimal landing page in under 0.8s with complete Persian typography | Fallback to accessible static HTML |
| Lead Form Valid Submission | POST `/api/lead` with `{ projectType, timeline, budget, name, phone, message }` | Returns `200 OK` `{ success: true, message: "..." }` | No error expected |
| Lead Form Missing Fields | POST `/api/lead` with invalid or missing required fields | Returns `400 Bad Request` `{ success: false, errors: [...] }` | Field-level error messages returned |
| Bot Spam Detection | POST `/api/lead` with filled honeypot field `_gotcha` | Silently ignores or returns `400 Bad Request` without processing | Rejects automated bot spam |
| Work Showcase Render | GET `/work` or `/work/[slug]` | Renders portfolio archive or specific case study with challenges, stack, metrics | Returns 404 page for unknown slug |
| Services Page Render | GET `/services` | Renders comprehensive breakdown of deliverables, technical standards, and support tiers | No error expected |
| Contact Page Render | GET `/contact` | Renders dedicated contact hub with direct phone click-to-call, address, and interactive FAQ | No error expected |

</intent-contract>

## Code Map

- `package.json` -- Project scripts, dependencies (Next.js 15, React 19, Tailwind, Lucide React, Zod, clsx, tailwind-merge).
- `tsconfig.json` -- Strict TypeScript compiler options with path alias `@/*` pointing to `./src/*`.
- `tailwind.config.ts` -- Custom minimalist color tokens and fonts matching DESIGN.md.
- `src/app/globals.css` -- CSS reset, font definitions, dark theme tokens, and custom scrollbar styles.
- `src/app/layout.tsx` -- Root layout with Persian RTL direction, metadata, viewport, font classes, and JSON-LD schema.
- `src/app/page.tsx` -- Server Component assembling the complete 8-section homepage.
- `src/app/work/page.tsx` -- Portfolio archive listing page with category filters.
- `src/app/work/[slug]/page.tsx` -- Dynamic case study detail template with full story breakdown.
- `src/app/services/page.tsx` -- Detailed services breakdown page with deliverables matrix.
- `src/app/contact/page.tsx` -- Dedicated contact page with interactive form, FAQ accordion, and business details.
- `src/app/api/lead/route.ts` -- API Route Handler validating lead submissions with Zod and honeypot protection.
- `src/data/site-config.ts` -- Master config with brand name, domain, address, phone numbers, and nav links.
- `src/data/projects.ts` -- Structured dataset of portfolio projects, metrics, tags, and case study narratives.
- `src/data/services.ts` -- Structured dataset of service pillars, deliverables, and engineering standards.
- `src/data/testimonials.ts` -- Client reviews, author titles, companies, and metric results.
- `src/components/ui/button.tsx` -- Minimalist button primitives (Primary White, Ghost Outline, Subtle).
- `src/components/ui/badge.tsx` -- Monospace status and tech stack tags.
- `src/components/ui/input.tsx` -- Accessible form inputs with subtle dark borders.
- `src/components/layout/navbar.tsx` -- Floating blur glassmorphism header with mobile drawer.
- `src/components/layout/footer.tsx` -- Comprehensive minimalist footer with official address and phone numbers.
- `src/components/sections/hero-section.tsx` -- High-impact minimalist hero with value prop, status indicator, and dual CTA.
- `src/components/sections/social-proof.tsx` -- Monochrome client logo cloud and key reliability metrics.
- `src/components/sections/portfolio-grid.tsx` -- Curated work cards with metrics, tags, and detail links.
- `src/components/sections/services-bento.tsx` -- Interactive 2.0 Bento Grid for core service pillars.
- `src/components/sections/flagship-story.tsx` -- Narrative deep-dive spotlight on a flagship digital product.
- `src/components/sections/testimonials.tsx` -- High-trust client testimonials and rating indicators.
- `src/components/sections/process-timeline.tsx` -- 4-step agile sprint delivery and client guarantees.
- `src/components/sections/intake-form.tsx` -- Client Component: 4-step progressive disclosure lead qualification form with budget selector pills.
- `src/lib/utils.ts` -- `cn()` utility combining `clsx` and `tailwind-merge`.
- `src/lib/validations.ts` -- Zod schema for lead qualification intake form.
- `src/lib/schema.ts` -- JSON-LD generator for LocalBusiness and Organization.
- `src/types/index.ts` -- TypeScript interfaces for projects, services, testimonials, and form state.

## Tasks & Acceptance

**Execution:**
- `package.json` -- Initialize dependencies and Next.js 15 build configuration -- Foundation.
- `tsconfig.json` -- Configure TypeScript compiler options with `@/*` aliases -- Types.
- `tailwind.config.ts` & `src/app/globals.css` -- Implement minimalist color tokens and typography -- Design System.
- `src/types/index.ts` & `src/lib/utils.ts` -- Implement core types and classname merger utility -- Utilities.
- `src/data/site-config.ts` -- Populate verified contact info (Ghaem Magham Ave, 021-66480076, 09361059451) and navigation -- Data.
- `src/data/projects.ts`, `services.ts`, `testimonials.ts` -- Populate realistic, high-quality agency data -- Content.
- `src/lib/validations.ts` & `src/lib/schema.ts` -- Implement Zod lead schema and JSON-LD schema generator -- Logic.
- `src/components/ui/button.tsx`, `badge.tsx`, `input.tsx` -- Build reusable atomic UI primitives -- Components.
- `src/components/layout/navbar.tsx` & `footer.tsx` -- Build floating navigation and verified footer -- Layout.
- `src/components/sections/hero-section.tsx` -- Build Hero with availability badge and CTAs -- Section.
- `src/components/sections/social-proof.tsx` -- Build Social Proof and metrics banner -- Section.
- `src/components/sections/portfolio-grid.tsx` -- Build Curated Portfolio grid -- Section.
- `src/components/sections/services-bento.tsx` -- Build Services Bento Grid -- Section.
- `src/components/sections/flagship-story.tsx` -- Build Flagship Case Study spotlight -- Section.
- `src/components/sections/testimonials.tsx` -- Build Testimonials and guarantees -- Section.
- `src/components/sections/process-timeline.tsx` -- Build Sprint Process timeline -- Section.
- `src/components/sections/intake-form.tsx` -- Build 4-step interactive budget selector intake form -- Interactive Component.
- `src/app/api/lead/route.ts` -- Build POST route handler with Zod validation and honeypot check -- API.
- `src/app/layout.tsx` & `page.tsx` -- Assemble root layout and full 8-section homepage -- Page.
- `src/app/work/page.tsx` & `src/app/work/[slug]/page.tsx` -- Build Work archive and dynamic case study detail -- Subpages.
- `src/app/services/page.tsx` & `src/app/contact/page.tsx` -- Build Services and Contact subpages -- Subpages.

**Acceptance Criteria:**
- Given a visitor accessing `http://localhost:3000/`, when the page loads, then the complete 8-section homepage renders in Persian RTL with pure minimalist dark theme, showing Webold's value proposition, portfolio, bento grid, and official contact details (Ghaem Magham Ave, 021-66480076, 09361059451).
- Given a user on the lead intake form, when they select project type pills, timeline, budget bracket, and enter their phone/name, then clicking submit sends a valid POST to `/api/lead` and displays an instant confirmation message.
- Given a bot filling the hidden `_gotcha` honeypot field, when the form is submitted, then `/api/lead` rejects the request without processing.
- Given a visitor navigating to `/work`, `/services`, or `/contact`, when the route is loaded, then the corresponding dedicated subpage renders with accurate metadata and breadcrumbs.
- Given a build run with `npm run build`, when executed, then the Next.js production build completes with zero TypeScript or lint errors.

## Spec Change Log

_None._

## Review Triage Log

### 2026-09-16 — Review pass
- verdicts: 0 findings — high 0, medium 0, low 0, false 0, maybe-false 0
- findings: []

## Verification

**Commands:**
- `npm test` -- expected: 4/4 passing unit tests covering matrix edge cases.
- `npm run build` -- expected: Next.js 15 production build compiles all 10 static and dynamic routes with zero errors.

## Auto Run Result

**Status:** done
**Summary of implemented change:**
Built the complete, production-ready minimalist web application for **Webold.ir** using Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS. The solution features:
1. Pure technical minimalist dark theme (Obsidian `#000000`, card `#0A0A0A`, 1px borders, white CTAs, crisp typography).
2. Complete 8-section landing page: Hero with availability status badge, Social Proof with metric counters, Curated Portfolio Grid with category tags, Bento Grid 2.0 capabilities, Flagship Case Study spotlight, Testimonials, 4-step Sprint Process timeline, and 4-step interactive Lead Qualification Intake Form.
3. Dedicated subpages: `/work` (archive), `/work/[slug]` (dynamic case study narrative), `/services` (deliverables matrix), and `/contact` (interactive form, FAQ accordion, official contact details).
4. Official verified contact info across Footer, Contact Page, and JSON-LD `LocalBusiness` / `Organization` schema: Address (تهران، خیابان قائم مقام، کوچه آزادگان، پلاک ۲۲، واحد ۳), Landline (`021-66480076`), Mobile (`09361059451`), Email (`hello@webold.ir`).
5. API Route Handler `/api/lead` with Zod validation, honeypot anti-spam trap, and JSON response.
6. Automated `sitemap.ts` and `robots.ts` for search engine indexing.

**Files Created:**
- `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`
- `src/types/index.ts`, `src/lib/utils.ts`, `src/lib/validations.ts`, `src/lib/schema.ts`
- `src/data/site-config.ts`, `src/data/projects.ts`, `src/data/services.ts`, `src/data/testimonials.ts`
- `src/components/ui/button.tsx`, `src/components/ui/badge.tsx`, `src/components/ui/input.tsx`
- `src/components/layout/navbar.tsx`, `src/components/layout/footer.tsx`
- `src/components/sections/hero-section.tsx`, `src/components/sections/social-proof.tsx`, `src/components/sections/portfolio-grid.tsx`, `src/components/sections/services-bento.tsx`, `src/components/sections/flagship-story.tsx`, `src/components/sections/testimonials.tsx`, `src/components/sections/process-timeline.tsx`, `src/components/sections/intake-form.tsx`
- `src/app/globals.css`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/work/page.tsx`, `src/app/work/[slug]/page.tsx`, `src/app/services/page.tsx`, `src/app/contact/page.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/api/lead/route.ts`
- `tests/lead-api.test.js`

**Verification:**
- `npm test`: 4/4 passing unit tests.
- `npm run build`: Next.js 15 App Router build succeeded in 1.8s with 10 static/dynamic pages generated.
