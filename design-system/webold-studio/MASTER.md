# Design System Master File — Electric Pistachio Luxury

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Webold Studio
**Generated:** 2026-09-17 21:50:00
**Category:** Modern Technical Software & Design Studio
**Palette Direction:** Electric Pistachio & Cyber Lime (مغز پسته‌ای لوکس)

---

## Global Rules

### 🌙 Dark / Night Mode Palette (Default)

| Role | Hex / Value | CSS Variable | Purpose |
|------|-------------|--------------|---------|
| Background | `#080B09` | `--background` | Deep Forest Dark Ground with subtle olive tint |
| Card / Surface | `#0F1612` | `--card` | Elevated Surface with Pistachio aura |
| Foreground | `#F4FAF5` | `--foreground` | Crisp High-Contrast White Text |
| Primary Surface | `#17241C` | `--primary` | Sub-cards, elevated panels |
| Secondary | `#1F3025` | `--secondary` | Tags, inactive chips |
| Accent / CTA | `#A3E635` | `--accent` | Electric Pistachio Lime (#A3E635 / #BEF264) |
| Accent FG | `#06180A` | `--accent-foreground` | Deep Dark Text on Accent Button |
| Muted | `#0D140F` | `--muted` | Deep recessed inputs |
| Muted Foreground | `#8EA194` | `--muted-foreground` | Secondary helper text |
| Border | `rgba(163, 230, 53, 0.13)` | `--border` | Subtle Pistachio Glass Border |
| Border Hover | `rgba(163, 230, 53, 0.35)` | `--border-hover` | Interactive Border Glow |
| Ring | `#A3E635` | `--ring` | Accessibility Focus Ring |

### ☀️ Light / Day Mode Palette

| Role | Hex / Value | CSS Variable | Purpose |
|------|-------------|--------------|---------|
| Background | `#F7FAF7` | `--background` | Crisp, fresh light background |
| Card / Surface | `#FFFFFF` | `--card` | Pure white cards with soft shadow |
| Foreground | `#0E1F12` | `--foreground` | Deep Forest Slate Text (12:1 Contrast) |
| Accent / CTA | `#65A30D` | `--accent` | Rich Pistachio Green |
| Accent FG | `#FFFFFF` | `--accent-foreground` | White Text on Accent |
| Muted Foreground | `#4D6652` | `--muted-foreground` | Readable muted text |
| Border | `rgba(101, 163, 13, 0.16)` | `--border` | Subtle light green border |

---

## 3D WebGL (Three.js) Visual Rules

- **Wave Particle Colors:** Dynamic lerp between `#A3E635` (Pistachio), `#34D399` (Mint), and `#BEF264` (Lime).
- **Core 3D Wireframe:** Torus Knot with Pistachio Physical Material + Mint Icosahedron Core.

---

## Typography & Elevation

- **Heading Font:** Archivo / Inter
- **Body Font:** Space Grotesk / Iranian Sans-Serif
- **Code / Metrics Font:** IBM Plex Mono / JetBrains Mono

---

## Verification & Anti-Patterns

- ❌ No raw unstyled emojis as UI controls.
- ❌ No low-contrast muted text below 4.5:1.
- ❌ No layout-shifting hover effects.
- ✅ All interactive buttons have minimum 44px touch targets.
- ✅ Visible 2px focus rings for keyboard navigation.
- ✅ Full support for `prefers-reduced-motion`.
