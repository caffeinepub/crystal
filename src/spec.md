# Specification

## Summary
**Goal:** Update the app to a cohesive gray + purple theme and require a valid MGP ID (mgp- + digits) before navigating directly to checkout.

**Planned changes:**
- Replace the current black/blue palette with gray-forward surfaces/borders/text and purple primary/accent colors by updating Tailwind/CSS design tokens so existing token-based classes reflect the new theme across all pages and dialogs.
- Ensure the DiamondIcon continues using token-based coloring (e.g., `text-primary`) and visually matches the updated gray+purple theme on Home, Gen 4 options, and Gen 5 options.
- Add MGP ID validation in both Gen 4 Racer and Gen 5 Racer dialogs: input must match `mgp-` followed by one or more digits; invalid inputs cannot be confirmed and show simple English feedback.
- Update the confirm flow so a valid MGP ID immediately navigates to `/checkout` (no in-dialog success/accepted end state), passing `model` via router search params and setting `from` so the checkout back button returns to the correct options page.

**User-visible outcome:** The app appears in a gray + purple theme, and users can only proceed to checkout after entering a valid MGP ID; on successful confirm they are taken straight to checkout with the correct model shown.
