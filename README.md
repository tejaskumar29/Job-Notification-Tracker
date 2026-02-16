# KodNest Premium Build System – Design System

KodNest Premium Build System is a focused design system for premium SaaS workflows. It is built to feel calm, intentional, coherent, and confident — not flashy or experimental.

This repository currently exposes **design primitives and layout structure only**. No product features or flows are implemented yet.

## Philosophy

- **Calm**: Soft off‑white surface, restrained typography, no visual noise.
- **Intentional**: Every element has a clear role; no decorative flourishes.
- **Coherent**: Tokens, spacing, and layout are shared across all pages.
- **Confident**: Strong serif headings, clear hierarchy, and predictable interactions.

## Design tokens

- **Colors**
  - Background: `#F7F6F3`
  - Primary text: `#111111`
  - Accent: `#8B0000`
  - Success: muted green (`#4F6F52`)
  - Warning: muted amber (`#B08A3E`)
- **Typography**
  - Headings: Serif (`Georgia`, `Times New Roman`, fallback serif)
  - Body: System sans‑serif (`-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `system-ui`)
  - Body size: 16px, line-height ~1.7, max 720px for reading blocks
- **Spacing scale**
  - `8px`, `16px`, `24px`, `40px`, `64px` — no off‑scale values.
- **Radius**
  - Shared radii: `4px`, `6px`, `8px`.
- **Interaction**
  - Transitions: `180ms ease-in-out`, no bouncy or playful motion.

All of these are defined in `src/design-tokens.ts` and mirrored as CSS custom properties in `src/styles.css`.

## Global layout structure

Every page is structured as:

1. **Top Bar**
   - Left: project name.
   - Center: progress indicator `Step X / Y`.
   - Right: status badge (`Not Started`, `In Progress`, `Shipped`).
2. **Context Header**
   - Large serif headline and one‑line subtext.
3. **Primary Workspace + Secondary Panel**
   - Primary workspace (~70% width) for the main interaction surface.
   - Secondary panel (~30% width) for guidance, prompts, and supporting actions.
4. **Proof Footer**
   - Checklist: `UI Built`, `Logic Working`, `Test Passed`, `Deployed`.
   - Each item includes a proof input field.

The `PageShell` component in `src/components/Layout.tsx` wires this structure together.

## Components

- **Layout**
  - `TopBar` – project name, step indicator, status badge.
  - `ContextHeader` – title and subtitle area.
  - `WorkspaceLayout` – 70/30 split between primary and secondary content.
  - `ProofFooter` – persistent bottom checklist with proof inputs.
  - `PageShell` – high‑level shell that composes the above.
- **Primitives**
  - `Button` – primary (solid accent) and secondary (outlined) variants with shared hover behavior.
  - `Input`, `TextArea` – clean bordered fields with a clear focus state, no heavy shadows.
  - `Card` – subtle bordered container with balanced padding and no drop shadows.
  - `PromptBox` – textarea with hint text for copyable build prompts.

All primitives observe the shared tokens for color, spacing, radius, and interaction.

## Interaction rules

- Transitions use `180ms ease-in-out`.
- No parallax, no bounce, no decorative animation.
- Hover feedback is subtle (slight background change and elevation via translation, not shadow).
- Error and empty states are represented as copy and structure, guiding the user to the next action.

## Development

### Install

```bash
cd kodnest-premium-build-system
npm install
```

### Run in development

```bash
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`) in your browser.

### Build for production

```bash
npm run build
```

### Notes

- This repository intentionally contains **no business logic or product features yet**.
- Extend by composing new pages around `PageShell` and the primitives, keeping all new visual decisions in `design-tokens` and the existing spacing/typography system.

