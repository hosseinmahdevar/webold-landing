# Design System Master File — Slate + Indigo

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Webold Studio
**Generated:** 2026-09-17 21:35:00
**Category:** High-End Software Engineering & Design Studio
**Palette Direction:** Option 2 — Slate + Indigo (Trust & Engineering Authority)

---

## Global Rules

### Color Palette

| Role | Hex / Value | CSS Variable | Purpose |
|------|-------------|--------------|---------|
| Background | `#0B0D13` | `--background` | Deep Slate Night Ground |
| Card / Surface | `#131622` | `--card` | Elevated Surface with Indigo tint |
| Foreground | `#EEF2F6` | `--foreground` | Crisp High-Contrast Text |
| Primary Surface | `#1E2235` | `--primary` | Sub-cards, elevated panels |
| Primary FG | `#FFFFFF` | `--primary-foreground` | White text on primary |
| Secondary | `#252B42` | `--secondary` | Tags, inactive chips |
| Secondary FG | `#FFFFFF` | `--secondary-foreground` | White text on secondary |
| Accent / CTA | `#6366F1` | `--accent` | Sharp Trust Indigo Action |
| Accent Hover | `#4F46E5` | `--accent-hover` | Deepened Indigo Hover |
| Accent FG | `#FFFFFF` | `--accent-foreground` | Text on Accent Button |
| Muted | `#111420` | `--muted` | Deep recessed inputs |
| Muted Foreground | `#8B95A5` | `--muted-foreground` | Secondary helper text |
| Border | `rgba(99, 102, 241, 0.12)` | `--border` | Subtle Indigo Glass Border |
| Border Hover | `rgba(99, 102, 241, 0.32)` | `--border-hover` | Interactive Border Glow |
| Ring | `#6366F1` | `--ring` | Accessibility Focus Ring |
| Destructive | `#EF4444` | `--destructive` | Error states |

**Color Psychology:**
- `#0B0D13` + `#131622`: Deep slate tones give an immediate impression of reliability, engineering discipline, and zero fluff.
- `#6366F1`: Electric Indigo is the benchmark color used by modern developer tool leaders (Linear, Raycast, Vercel) to signify intelligent software craft and high precision.

---

## Typography

- **Heading Font:** Archivo / Inter
- **Body Font:** Space Grotesk / Iranian Sans-Serif
- **Code / Metrics Font:** IBM Plex Mono / JetBrains Mono

---

## Spacing & Elevation

| Token | Value |
|-------|-------|
| `--space-xs` | `4px` |
| `--space-sm` | `8px` |
| `--space-md` | `16px` |
| `--space-lg` | `24px` |
| `--space-xl` | `32px` |
| `--space-2xl` | `48px` |
| `--space-3xl` | `64px` |

---

## Verification & Anti-Patterns

- ❌ No raw unstyled emojis as UI controls.
- ❌ No low-contrast muted text below 4.5:1.
- ❌ No layout-shifting hover effects.
- ✅ All interactive buttons have minimum 44px touch targets.
- ✅ Visible 2px indigo focus rings for keyboard navigation.
- ✅ Full support for `prefers-reduced-motion`.
