---
stepsCompleted:
  - step-01-validate-prerequisites
  - step-02-design-epics
inputDocuments:
  - /home/hossein/dev/webold-landig/_bmad-output/planning-artifacts/prds/prd-webold-landig-2026-09-15/prd.md
  - /home/hossein/dev/webold-landig/_bmad-output/planning-artifacts/architecture/architecture-webold-landig-2026-09-15/ARCHITECTURE-SPINE.md
  - /home/hossein/dev/webold-landig/_bmad-output/planning-artifacts/ux-designs/ux-webold-landig-2026-09-15/DESIGN.md
  - /home/hossein/dev/webold-landig/_bmad-output/planning-artifacts/ux-designs/ux-webold-landig-2026-09-15/EXPERIENCE.md
---

# Webold.ir - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for **Webold.ir** (webold-landig), decomposing the requirements from the PRD, UX Design specifications, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

- **FR-01 [Hero Section]:** Minimal branding, value prop hook, dual CTA (start project / view work), team availability status badge.
- **FR-02 [Social Proof & Credibility Bar]:** Monochrome client logos grid and trust metrics banner.
- **FR-03 [Curated Portfolio Showcase]:** 3-5 featured projects with video hover preview, deliverables list, metrics, and link to case study detail.
- **FR-04 [Services & Capabilities Grid]:** Bento Grid 2.0 covering custom web development, UI/UX design, performance/SEO, and ongoing support.
- **FR-05 [Flagship Case Study Deep-Dive]:** Embedded problem-architecture-outcome narrative with before/after results.
- **FR-06 [Testimonials & Social Validation]:** Client quotes with full name, title, and company logo.
- **FR-07 [Transparent Process & Guarantees]:** 4-step agile sprint process and explicit client guarantees (100% code ownership).
- **FR-08 [Conversion Intake & Lead Qualification Form]:** Multi-step progressive disclosure form with project type, timeline, budget range pills, and contact info + direct email fallback (`hello@webold.ir`).
- **FR-09 [Work Archive & Case Study Detail Page]:** `/work` archive listing with category filtering and `/work/[slug]` detail page template.
- **FR-10 [Services Page]:** `/services` comprehensive package breakdown with detailed deliverables.
- **FR-11 [Contact Page]:** `/contact` with interactive form, FAQ, and official contact information.
- **FR-12 [Minimalist Dark Theme & Persian Typography]:** Pure technical minimalism dark theme with refined Persian typography and responsive layout.

### NonFunctional Requirements

- **NFR-01 [Performance & Speed]:** Google Lighthouse score 95+ across all categories, FCP < 0.8s, LCP < 1.0s, WebP/AVIF image optimization.
- **NFR-02 [Responsiveness & Adaptive UI]:** 100% responsive across mobile, tablet, laptop, and 4K desktop; touch targets >= 44x44px.
- **NFR-03 [Accessibility (WCAG 2.1 AA)]:** Semantic HTML5, high contrast ratios, full keyboard navigation, and screen reader aria-labels.
- **NFR-04 [SEO & Structured Data]:** Dynamic OpenGraph/Twitter cards and JSON-LD `LocalBusiness` / `Organization` schema with official address and phones.
- **NFR-05 [Security & Spam Protection]:** Honeypot anti-spam protection on lead forms and server-side Zod validation.

### Additional Requirements (Architecture)

- **ARCH-01 [Starter Template & Core Stack]:** Next.js 15+ (App Router) + React 19 + TypeScript (Strict) in `src/` directory.
- **ARCH-02 [Styling System]:** Tailwind CSS v4 with custom monochrome tokens (`#000000`, `#0A0A0A`, `rgba(255,255,255,0.08)`).
- **ARCH-03 [Server vs Client Boundary]:** Server Components by default; `"use client"` strictly isolated to interactive leaf components.
- **ARCH-04 [Data Layer]:** Static typed dataset in `src/data/` (`projects.ts`, `services.ts`, `site-config.ts`, `testimonials.ts`).
- **ARCH-05 [API Route Handler]:** `/api/lead` route handler with Zod validation, honeypot spam check, and response formatting.
- **ARCH-06 [JSON-LD Generator]:** Automated LocalBusiness and Organization schema injection in `layout.tsx`.

### UX Design Requirements

- **UX-DR1 [Design Tokens & Theme]:** Pure technical minimalism monochrome palette, typography (Peyda/Dana/Geist), and 8pt spacing grid (1180px container).
- **UX-DR2 [Reusable UI Atoms]:** Minimal button variants (Primary White, Ghost Outline), Badge, Input, and Radio Pill chips.
- **UX-DR3 [Floating Header]:** Blur glassmorphism floating navbar with responsive mobile slide-out menu.
- **UX-DR4 [Interactive Bento Cards]:** Border hover spotlight tracking mouse coordinates with sub-pixel borders.
- **UX-DR5 [Lead Intake Component]:** 4-step progressive disclosure form with budget pills and progress indicator.
- **UX-DR6 [Footer with Real Contact Info]:** Official address (Ghaem Magham Ave, No. 22, Unit 3), Landline (`021-66480076`), and Mobile (`09361059451`) with click-to-call links.

### FR Coverage Map

- **FR-01 [Hero Section]:** Epic 1 (Core Landing Page)
- **FR-02 [Social Proof Bar]:** Epic 1 (Core Landing Page)
- **FR-03 [Portfolio Showcase]:** Epic 1 (Core Landing Page)
- **FR-04 [Services Bento Grid]:** Epic 1 (Core Landing Page)
- **FR-05 [Flagship Case Study]:** Epic 1 (Core Landing Page)
- **FR-06 [Testimonials & Validation]:** Epic 1 (Core Landing Page)
- **FR-07 [Process & Guarantees]:** Epic 1 (Core Landing Page)
- **FR-08 [Lead Intake Form]:** Epic 2 (Lead Qualification Hub)
- **FR-09 [Work Archive & Detail]:** Epic 3 (Subpages & Showcase)
- **FR-10 [Services Page]:** Epic 3 (Subpages & Showcase)
- **FR-11 [Contact Page & FAQ]:** Epic 3 (Subpages & Showcase)
- **FR-12 [Theme & Localization]:** Epic 1 (Core Landing Page)

## Epic List

### Epic 1: Foundation, Brand Identity & High-Converting Minimal Landing Page
**User Outcome:** Prospective clients and founders can visit `webold.ir`, instantly understand Webold's engineering-first positioning in under 3 seconds, view selected portfolio projects and services bento grid, read client validation and process guarantees, and navigate a high-performance minimalist interface.
**FRs covered:** FR-01, FR-02, FR-03, FR-04, FR-05, FR-06, FR-07, FR-12
**Architecture & UX covered:** ARCH-01, ARCH-02, ARCH-03, ARCH-04, ARCH-06, UX-DR1, UX-DR2, UX-DR3, UX-DR4, UX-DR6, NFR-01, NFR-02, NFR-03, NFR-04

### Epic 2: Interactive Lead Intake & Qualification Hub
**User Outcome:** Potential clients can effortlessly submit their project scope, timeline, and budget bracket via a 4-step progressive disclosure pill interface, receiving immediate validation and routing their inquiry directly to the Webold team without spam friction.
**FRs covered:** FR-08
**Architecture & UX covered:** ARCH-05, UX-DR5, NFR-05

### Epic 3: Deep Work Showcase, Detailed Services & Official Contact Hub
**User Outcome:** Enterprise and discerning buyers can explore comprehensive case studies (`/work` and `/work/[slug]`), review detailed service packages and deliverables (`/services`), and access dedicated contact channels with verified business credentials and FAQs (`/contact`).
**FRs covered:** FR-09, FR-10, FR-11
**Architecture & UX covered:** ARCH-04, ARCH-06, UX-DR6, NFR-01, NFR-04
