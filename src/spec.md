# Specification

## Summary
**Goal:** Add four selectable UI themes (White, Black, Orange, Yellow) that persist across reloads and update the app’s semantic theme styling.

**Planned changes:**
- Extend the existing theme selection logic to support exactly four themes: White, Black, Orange, Yellow; persist selection in localStorage and apply it on page load (with backward compatibility for any existing stored light/dark values).
- Update `frontend/src/index.css` global CSS custom properties to define distinct variable sets for each theme (background/foreground/card/border/primary/accent/ring, etc.) so Tailwind semantic tokens visually change per theme.
- Update the bottom `ThemeToggleBar` to switch among the four themes, show the currently selected theme label, and refresh aria-labels to reference the correct theme names (not just Light/Dark).
- Ensure the `ThemeToggleBar` circular indicator continues to reflect the active theme by using semantic tokens (e.g., `bg-primary`, `bg-accent`) so it updates automatically and remains visible across all themes.
- Keep the existing Blue/Purple/Green color-scheme switcher behavior unchanged.

**User-visible outcome:** Users can switch between White, Black, Orange, and Yellow themes via the ThemeToggleBar; the choice persists after refresh and the UI colors (including the indicator) update consistently without console errors.
