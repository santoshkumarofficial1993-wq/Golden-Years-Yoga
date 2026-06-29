# Design

## Theme

**Clear & Bright** — legibility-first, clinic-clean but warm. Bright white
surfaces, near-black ink, a deep teal primary for trust/calm, and a warm coral
accent for energy and human warmth. The mood: a sunlit room, an open hand, a
steady "you can start today." Deliberately NOT the lavender-lotus-pastel
wellness reflex, NOT the beige medical-brochure reflex.

Color strategy: **Restrained-plus** — white architecture, teal carries identity
across headers/CTAs/links, coral used as a deliberate ~10% energy accent.

## Color (OKLCH)

| Role            | Token              | Value                      | Notes |
|-----------------|--------------------|----------------------------|-------|
| Background      | `--bg`             | `oklch(1 0 0)`             | Pure white |
| Surface         | `--surface`        | `oklch(0.975 0.008 210)`   | Faint teal-tinted panels |
| Surface sunk    | `--surface-2`      | `oklch(0.955 0.012 210)`   | Sections, wells |
| Ink (body)      | `--ink`            | `oklch(0.23 0.022 225)`    | ~12:1 on white |
| Muted text      | `--muted`          | `oklch(0.45 0.02 225)`     | ≥4.5:1 on white |
| Primary (teal)  | `--primary`        | `oklch(0.46 0.092 215)`    | CTAs, brand |
| Primary strong  | `--primary-strong` | `oklch(0.37 0.082 215)`    | Hover/active, headings tint |
| Primary tint    | `--primary-tint`   | `oklch(0.95 0.03 210)`     | Soft fills |
| Accent (coral)  | `--accent`         | `oklch(0.66 0.17 33)`      | Energy accent, sun |
| Accent strong   | `--accent-strong`  | `oklch(0.57 0.17 33)`      | Accent hover |
| Accent tint     | `--accent-tint`    | `oklch(0.95 0.035 45)`     | Soft warm fills |
| Gold (warm)     | `--gold`           | `oklch(0.80 0.13 80)`      | "Golden Years" sun glow |

Text on filled primary/accent/gold-mid = white (Helmholtz-Kohlrausch). Dark ink
only on pale tints.

## Typography

- **Display / headings:** Hanken Grotesk (600–800). Tidy, friendly, geometric-
  humanist; high legibility at large sizes. (Off the reflex-reject list.)
- **Body / UI:** Atkinson Hyperlegible (400/700). Designed by the Braille
  Institute for low-vision readers — an intentional, audience-led choice, not a
  default. Distinct letterforms give the contrast axis vs. the tidy Hanken.
- Base body size **19px**, scales up. Fluid `clamp()` heading scale, ratio ≥1.25,
  display max ≤ ~5rem. `text-wrap: balance` on h1–h3, `pretty` on prose.
  Line length capped 65–70ch.

## Motion

Gentle ease-out (quart/expo) only — no bounce. A slow "breathing" loop animates
the hero ring and an interactive breathing widget (on-theme). Hover lifts on
cards/buttons, staggered fade-up reveals that enhance already-visible content.
Full `prefers-reduced-motion: reduce` fallbacks (instant / crossfade).

## Imagery

**Real photography of seniors**, self-hosted (not hotlinked) from Pexels under
the Pexels License (free, commercial, no attribution required) — see
`CREDITS.md`. Self-hosting keeps an ad-served site reliable and fast and avoids
broken links. Photos are chosen to centre older adults and chair/seated/
supported movement, in warm, bright, real-room settings. Treatment: rounded
`object-fit: cover` frames with a soft gold/coral brand panel behind the hero.
Favicon / logo is an original SVG sun-over-figure mark. Small UI glyphs remain
inline SVG icons.

## Layout

Accessible sticky header (large nav, prominent CTA). Asymmetric split hero
(headline + CTAs left, illustration with breathing ring right). Alternating
feature rows (not identical card grids), a pose gallery, a real 3-step start
sequence (numbered because it IS a sequence), interactive breathing section,
testimonials, native-`<details>` FAQ, clearly-labeled `Advertisement` slots,
and a large footer with full legal navigation. Content pages (poses, chair-yoga
guide) carry an article + aside layout.

## Pages

`index` · `about` · `poses` · `chair-yoga` (guide) · `contact` ·
`privacy-policy` · `terms` · `disclaimer` · `cookie-policy` · `accessibility`.
