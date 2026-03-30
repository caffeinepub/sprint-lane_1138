# Sprint Lane

## Current State
The landing page (LandingPage.tsx) uses floating sticky notes, decorative badges, colorful cards, and animated floating elements that give it a playful, childish feel. The dark theme tokens are defined in tailwind.config.js (sprint-* palette) and CSS variables in index.css. The rest of the app (Layout, Sidebar, Board) uses the sprint-* tokens consistently.

## Requested Changes (Diff)

### Add
- Professional hero section with a prominent headline, subheadline, and CTA button
- Subtle feature highlights section (3 columns: boards, cards, team) below the hero using minimal icon + text layout
- Thin horizontal rule separator between sections
- Minimal logo mark (grid icon) using only black/gray/white tones

### Modify
- LandingPage.tsx: Complete rewrite. Remove all floating decorative elements (sticky note, badges, task cards, team cards, clock badge). Replace with a clean, minimal full-screen dark hero. Typography-first layout. No illustrations.
- index.css: Ensure base background and text variables are consistently dark (already done). Verify no light backgrounds leak through.
- All components that still reference light colors or hardcoded white backgrounds (modals, dialogs, inputs) should use sprint-surface and sprint-text-primary.

### Remove
- All `animate-float` and `animate-float-delayed` decorative elements from the landing page
- Yellow sticky note, checkmark badge, clock badge, task card widgets, team workspace card
- Font handwriting class reference

## Implementation Plan
1. Rewrite LandingPage.tsx with a professional minimal layout:
   - Full-screen dark hero: centered content, large bold headline, muted subtitle, single CTA button
   - Below hero: 3 feature columns with simple monochrome icons and short text
   - Slim nav with logo + brand name
   - Remove all decorative floating elements
2. Audit index.css for any light-mode leaks, ensure all dialog/modal/input surfaces use dark tokens
3. Validate typecheck and build
