# Epic 1 Context: Foundation, Brand Identity & High-Converting Minimal Landing Page

<!-- Generated from planning artifacts. Regenerate with compile-epic-context if planning docs change. -->

## Goal

Establish the core Next.js 15 App Router web application with pure technical minimalist design tokens and render the complete, high-converting homepage for Webold.ir. The landing page must convey Webold's engineering-first positioning in under 3 seconds, showcase curated work, bento capabilities, proof metrics, flagship story, guarantees, and verified contact details with a 95+ Lighthouse performance score.

## Stories

- Story 1.1: Project Initialization, Next.js 15 Setup, Minimalist Theme Tokens & Layout (Navbar, Footer, SEO Schema)
- Story 1.2: Hero Section with Minimalist Hook, Status Badge & Dual CTA
- Story 1.3: Social Proof Bar & Curated Portfolio Grid with Interactive Previews
- Story 1.4: Bento Grid 2.0 Capabilities & Flagship Case Study Narrative
- Story 1.5: Testimonials, Sprint Process & Guarantees, and Performance Verification

## Requirements & Constraints

- **Minimalist Aesthetic:** Pure technical minimalism (Obsidian `#000000`, card `#0A0A0A`, 1px borders `rgba(255,255,255,0.08)`, white action buttons `#FFFFFF`, muted text `#A1A1AA`). Zero visual fluff or loud gradients.
- **Performance:** Google Lighthouse score 95+ across Performance, Accessibility, Best Practices, SEO. LCP < 1.0s.
- **Official Branding & Contacts:** Brand is Webold (`webold.ir`). Footer and schema must carry:
  - Address: تهران، خیابان قائم مقام، کوچه آزادگان، پلاک ۲۲، واحد ۳
  - Landline: `021-66480076`
  - Mobile: `09361059451`
  - Email: `hello@webold.ir`
- **Localization:** Persian RTL typography with clean geometric font stack (Peyda/Dana/Geist).

## Technical Decisions

- **Framework:** Next.js 15+ (App Router), React 19, TypeScript (Strict).
- **Styling:** Tailwind CSS v4 with custom monochrome tokens in `globals.css` and `tailwind.config.ts`.
- **Rendering Boundary:** Server Components by default for zero client JS overhead; isolate `"use client"` to interactive leaves (Navbar mobile drawer, interactive cards).
- **Data Layer:** Typed static datasets in `src/data/` (`projects.ts`, `services.ts`, `site-config.ts`, `testimonials.ts`).
- **SEO & Schema:** Automated JSON-LD `LocalBusiness` and `Organization` schema in `src/app/layout.tsx`.

## UX & Interaction Patterns

- Floating blur glassmorphism navbar with sticky behavior.
- Bento Grid 2.0 with subtle cursor spotlight border tracing.
- Fast, snappy micro-interactions (transitions <= 200ms).

## Cross-Story Dependencies

- Story 1.1 sets up the core layout, types, and data models required by subsequent stories.
- Story 1.2 to 1.5 compose the home page sections sequentially.
